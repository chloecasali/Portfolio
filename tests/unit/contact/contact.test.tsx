import type {
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  ReactNode,
  RefObject,
} from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import en from "@/app/i18n/locales/en";

const { toast } = vi.hoisted(() => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

vi.mock("sonner", () => ({
  toast,
}));

vi.mock("motion/react", async () => {
  const { createElement } = await import("react");
  const motionComponentCache = new Map<string, ComponentType<HTMLAttributes<HTMLElement>>>();

  const stripMotionProps = ({
    animate: _animate,
    exit: _exit,
    initial: _initial,
    layout: _layout,
    transition: _transition,
    viewport: _viewport,
    whileHover: _whileHover,
    whileInView: _whileInView,
    whileTap: _whileTap,
    ...props
  }: Record<string, unknown>) => props;

  const createMotionComponent = (tag: string) => {
    const cachedComponent = motionComponentCache.get(tag);
    if (cachedComponent) {
      return cachedComponent;
    }

    const motionComponent = ({ children, ...props }: HTMLAttributes<HTMLElement>) =>
      createElement(tag, stripMotionProps(props), children);

    motionComponentCache.set(tag, motionComponent);
    return motionComponent;
  };

  return {
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
    motion: new Proxy(
      {},
      {
        get: (_, tag: string) => createMotionComponent(tag),
      }
    ),
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: () => 1,
  };
});

vi.mock("@/app/components/ui/select", async () => {
  return {
    Select: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    SelectContent: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    SelectItem: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    SelectTrigger: ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button type="button" {...props}>
        {children}
      </button>
    ),
    SelectValue: ({ placeholder }: { placeholder?: string }) => <span>{placeholder}</span>,
  };
});

function escapeForRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function renderContactScene(endpoint: string) {
  vi.resetModules();
  vi.stubEnv("VITE_FORMSPREE_ENDPOINT", endpoint);

  const { ContactScene } = await import("@/app/components/templates/scenes/ContactScene");
  const scrollContainerRef: RefObject<HTMLElement | null> = {
    current: document.createElement("div"),
  };

  return render(
    <ContactScene
      content={en.contact}
      scrollContainerRef={scrollContainerRef}
      ui={en.ui}
    />
  );
}

function fillOpportunityFields() {
  fireEvent.change(screen.getByLabelText(new RegExp(escapeForRegex(en.contact.emailLabel), "i")), {
    target: { value: "alice@example.com" },
  });
  fireEvent.change(screen.getByLabelText(new RegExp(escapeForRegex(en.contact.nameLabel), "i")), {
    target: { value: "  Alice  " },
  });
  fireEvent.change(
    screen.getByLabelText(new RegExp(escapeForRegex(en.contact.messageLabel), "i")),
    {
      target: { value: "Hello from a real project." },
    }
  );
}

describe("ContactScene", () => {
  beforeEach(() => {
    toast.error.mockReset();
    toast.success.mockReset();
  });

  it("shows validation errors for missing required fields", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await renderContactScene("");

    fireEvent.click(screen.getByRole("button", { name: en.ui.send }));

    await waitFor(() => {
      expect(screen.getByText(en.contact.emailRequired)).toBeInTheDocument();
      expect(screen.getByText(en.contact.nameRequired)).toBeInTheDocument();
      expect(screen.getByText(en.contact.messageRequired)).toBeInTheDocument();
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("shows an unavailable error when the contact endpoint is not configured", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await renderContactScene("");
    fillOpportunityFields();

    fireEvent.click(screen.getByRole("button", { name: en.ui.send }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(en.contact.unavailable);
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("skips the network for honeypot submissions", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const { container } = await renderContactScene("https://example.test/form");
    fillOpportunityFields();

    const websiteField = container.querySelector<HTMLInputElement>("#website");
    fireEvent.change(websiteField!, { target: { value: "https://spam.invalid" } });
    fireEvent.click(screen.getByRole("button", { name: en.ui.send }));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(en.contact.success);
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("submits the opportunity form payload and resets the fields on success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    await renderContactScene("https://example.test/form");

    fillOpportunityFields();
    fireEvent.change(screen.getByLabelText(en.contact.companyLabel!), {
      target: { value: "  Example Inc.  " },
    });
    fireEvent.click(screen.getByRole("button", { name: en.ui.send }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(toast.success).toHaveBeenCalledWith(en.contact.success);
    });

    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://example.test/form");
    expect(options.method).toBe("POST");
    expect(options.headers).toEqual({
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    expect(JSON.parse(String(options.body))).toEqual({
      company: "Example Inc.",
      email: "alice@example.com",
      message: "Hello from a real project.",
      name: "Alice",
      subject: "Contact pour une opportunité – Alice",
      topic: en.contact.opportunityOptionLabel,
    });

    await waitFor(() => {
      expect(
        screen.getByLabelText(new RegExp(escapeForRegex(en.contact.emailLabel), "i"))
      ).toHaveValue("");
      expect(
        screen.getByLabelText(new RegExp(escapeForRegex(en.contact.nameLabel), "i"))
      ).toHaveValue("");
      expect(
        screen.getByLabelText(new RegExp(escapeForRegex(en.contact.messageLabel), "i"))
      ).toHaveValue("");
      expect(screen.getByLabelText(en.contact.companyLabel!)).toHaveValue("");
    });
  });
});
