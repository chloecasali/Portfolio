import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb, SectionTitle } from "../../atoms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Mail, Send } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import type { SceneScrollProps } from "./types";

type ContactSubject = "opportunity" | "feedback" | "other";

interface ContactFormData {
  company?: string;
  email: string;
  message: string;
  name?: string;
  subject: ContactSubject;
  website?: string;
}

interface ContactSceneProps extends SceneScrollProps {
  content: SiteContent["contact"];
  ui: SiteContent["ui"];
}

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const DEFAULT_CONTACT_LABELS = {
  companyLabel: "Company (optional)",
  companyPlaceholder: "Acme Studio",
  error: "Unable to send your message right now. Please try again shortly.",
  feedbackOptionLabel: "Feedback / signalement",
  feedbackMessagePlaceholder: "Détaillez votre suggestion ou signalement",
  opportunityOptionLabel: "Discuter d’une opportunité",
  otherOptionLabel: "Autres",
  otherMessagePlaceholder: "Décrivez votre demande",
  subjectLabel: "Topic",
  unavailable: "The contact form is not configured yet.",
};

const fieldFadeTransition = {
  duration: 0.16,
  ease: [0.22, 1, 0.36, 1] as const,
};

const fieldLayoutTransition = {
  type: "spring" as const,
  stiffness: 520,
  damping: 36,
  mass: 0.62,
};

function buildMailSubject(subject: ContactSubject, name?: string) {
  if (subject === "opportunity") {
    const trimmedName = name?.trim();
    return `Contact pour une opportunité – ${
      trimmedName && trimmedName.length > 0 ? trimmedName : "Inconnu"
    }`;
  }

  if (subject === "feedback") {
    return "Retour pour le portfolio";
  }

  return "Message depuis le portfolio";
}

function FieldLabel({
  children,
  htmlFor,
  required = false,
}: {
  children: string;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm uppercase tracking-wide text-black/80 dark:text-white/80"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
      {required && <span className="ml-1 text-[#FA00C4]">*</span>}
    </label>
  );
}

export function ContactScene({ content, scrollContainerRef, ui }: ContactSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      subject: "opportunity",
    },
    shouldUnregister: true,
  });
  const selectedSubject = watch("subject");
  const isOpportunity = selectedSubject === "opportunity";
  const companyLabel = content.companyLabel ?? DEFAULT_CONTACT_LABELS.companyLabel;
  const companyPlaceholder =
    content.companyPlaceholder ?? DEFAULT_CONTACT_LABELS.companyPlaceholder;
  const subjectLabel = content.subjectLabel ?? DEFAULT_CONTACT_LABELS.subjectLabel;
  const subjectLabels = {
    feedback: content.feedbackOptionLabel ?? DEFAULT_CONTACT_LABELS.feedbackOptionLabel,
    opportunity:
      content.opportunityOptionLabel ?? DEFAULT_CONTACT_LABELS.opportunityOptionLabel,
    other: content.otherOptionLabel ?? DEFAULT_CONTACT_LABELS.otherOptionLabel,
  };
  const messagePlaceholder =
    selectedSubject === "feedback"
      ? content.feedbackMessagePlaceholder ?? DEFAULT_CONTACT_LABELS.feedbackMessagePlaceholder
      : selectedSubject === "other"
        ? content.otherMessagePlaceholder ?? DEFAULT_CONTACT_LABELS.otherMessagePlaceholder
        : content.messagePlaceholder;

  const onSubmit = async (data: ContactFormData) => {
    if (data.website && data.website.trim().length > 0) {
      reset({ subject: data.subject });
      toast.success(content.success);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      toast.error(content.unavailable ?? DEFAULT_CONTACT_LABELS.unavailable);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: isOpportunity ? data.company?.trim() || undefined : undefined,
          email: data.email,
          message: data.message,
          name: isOpportunity ? data.name?.trim() || undefined : undefined,
          subject: buildMailSubject(data.subject, data.name),
          topic: subjectLabels[data.subject],
        }),
      });

      if (!response.ok) {
        toast.error(content.error ?? DEFAULT_CONTACT_LABELS.error);
        return;
      }

      toast.success(content.success);
      reset({ subject: "opportunity" });
    } catch {
      toast.error(content.error ?? DEFAULT_CONTACT_LABELS.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-section="true"
      className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden py-20"
    >
      <AmbientOrb
        className="right-[10%] top-[18%] h-[18rem] w-[18rem] bg-[#FA00C4]/14 blur-[100px] dark:bg-[#FA00C4]/20"
        style={{ opacity }}
      />

      <motion.div className="relative z-10 w-full max-w-3xl px-8 md:px-12" style={{ opacity }}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#FA00C4]/10">
            <Mail className="h-10 w-10 text-[#FA00C4]" />
          </motion.div>
          <SectionTitle className="mb-6">{content.title}</SectionTitle>
          <p
            className="text-lg text-black/70 dark:text-white/70 md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {content.description}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          layout
        >
          <motion.div layout transition={fieldLayoutTransition}>
            <FieldLabel htmlFor="email" required>
              {content.emailLabel}
            </FieldLabel>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: content.emailRequired,
                pattern: { value: EMAIL_PATTERN, message: content.emailInvalid },
              })}
              className="w-full rounded-xl border border-black/10 bg-white/10 px-6 py-4 text-black transition-all duration-300 placeholder:text-black/40 focus:border-[#FA00C4] focus:outline-none focus:ring-2 focus:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
              placeholder={content.emailPlaceholder}
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </motion.div>
          <motion.div layout transition={fieldLayoutTransition} className="py-2">
            <FieldLabel htmlFor="subject" required>
              {subjectLabel}
            </FieldLabel>
            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    id="subject"
                    aria-label={subjectLabel}
                    className="min-h-[58px] rounded-xl border-black/10 bg-white/10 px-6 py-4 pr-8 text-left text-black shadow-none backdrop-blur-sm focus-visible:border-[#FA00C4] focus-visible:ring-2 focus-visible:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white [&_[data-slot=select-value]]:pr-7 [&_[data-slot=select-value]]:text-sm [&_[data-slot=select-value]]:tracking-[0.01em] [&_[data-slot=select-value]]:text-black [&_[data-slot=select-value]]:dark:text-white [&_[data-slot=select-value]]:font-normal [&_[data-slot=select-value]]:leading-6 [&_svg]:mr-0 [&_svg]:size-4 [&_svg]:text-black/45 [&_svg]:dark:text-white/45"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <SelectValue placeholder={subjectLabel} />
                  </SelectTrigger>
                  <SelectContent
                    className="rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_24px_80px_rgba(250,0,196,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#090909]/95"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <SelectItem
                      value="opportunity"
                      className="rounded-xl px-4 py-3 pr-4 text-black data-[state=checked]:bg-[#FA00C4]/8 data-[state=checked]:text-[#FA00C4] focus:bg-[#FA00C4]/10 focus:text-black dark:text-white dark:data-[state=checked]:bg-[#FA00C4]/12 dark:data-[state=checked]:text-[#FF6FDC] dark:focus:bg-[#FA00C4]/15 dark:focus:text-white [&>span:first-child]:hidden"
                    >
                      {subjectLabels.opportunity}
                    </SelectItem>
                    <SelectItem
                      value="feedback"
                      className="rounded-xl px-4 py-3 pr-4 text-black data-[state=checked]:bg-[#FA00C4]/8 data-[state=checked]:text-[#FA00C4] focus:bg-[#FA00C4]/10 focus:text-black dark:text-white dark:data-[state=checked]:bg-[#FA00C4]/12 dark:data-[state=checked]:text-[#FF6FDC] dark:focus:bg-[#FA00C4]/15 dark:focus:text-white [&>span:first-child]:hidden"
                    >
                      {subjectLabels.feedback}
                    </SelectItem>
                    <SelectItem
                      value="other"
                      className="rounded-xl px-4 py-3 pr-4 text-black data-[state=checked]:bg-[#FA00C4]/8 data-[state=checked]:text-[#FA00C4] focus:bg-[#FA00C4]/10 focus:text-black dark:text-white dark:data-[state=checked]:bg-[#FA00C4]/12 dark:data-[state=checked]:text-[#FF6FDC] dark:focus:bg-[#FA00C4]/15 dark:focus:text-white [&>span:first-child]:hidden"
                    >
                      {subjectLabels.other}
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </motion.div>
          <AnimatePresence initial={false} mode="popLayout">
            {isOpportunity && (
              <motion.div
                key="opportunity-fields"
                layout
                className="space-y-7"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  layout: fieldLayoutTransition,
                  opacity: fieldFadeTransition,
                  y: fieldFadeTransition,
                }}
              >
                <motion.div
                  layout="position"
                  transition={fieldLayoutTransition}
                >
                  <FieldLabel htmlFor="name" required>
                    {content.nameLabel}
                  </FieldLabel>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name", { required: content.nameRequired })}
                    className="w-full rounded-xl border border-black/10 bg-white/10 px-6 py-4 text-black transition-all duration-300 placeholder:text-black/40 focus:border-[#FA00C4] focus:outline-none focus:ring-2 focus:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                    placeholder={content.namePlaceholder}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                </motion.div>
                <motion.div
                  layout="position"
                  transition={fieldLayoutTransition}
                >
                  <FieldLabel htmlFor="company">
                    {companyLabel}
                  </FieldLabel>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    {...register("company")}
                    className="w-full rounded-xl border border-black/10 bg-white/10 px-6 py-4 text-black transition-all duration-300 placeholder:text-black/40 focus:border-[#FA00C4] focus:outline-none focus:ring-2 focus:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                    placeholder={companyPlaceholder}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>
          <motion.div layout transition={fieldLayoutTransition}>
            <FieldLabel htmlFor="message" required>
              {content.messageLabel}
            </FieldLabel>
            <textarea
              id="message"
              rows={6}
              {...register("message", { required: content.messageRequired })}
              className="w-full resize-none rounded-xl border border-black/10 bg-white/10 px-6 py-4 text-black transition-all duration-300 placeholder:text-black/40 focus:border-[#FA00C4] focus:outline-none focus:ring-2 focus:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
              placeholder={messagePlaceholder}
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
            )}
          </motion.div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FA00C4] to-[#FA00C4]/80 px-8 py-5 font-medium text-white transition-all duration-300 hover:from-[#FA00C4]/90 hover:to-[#FA00C4]/70 disabled:cursor-not-allowed disabled:opacity-50"
            style={{ fontFamily: "'Inter', sans-serif" }}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span>{ui.sending}</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>{ui.send}</span>
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
