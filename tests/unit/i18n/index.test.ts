import { describe, expect, it } from "vitest";
import { getSiteContent, isLanguage } from "@/app/i18n";

describe("i18n helpers", () => {
  it("accepts only supported languages", () => {
    expect(isLanguage("en")).toBe(true);
    expect(isLanguage("fr")).toBe(true);
    expect(isLanguage("de")).toBe(false);
    expect(isLanguage(null)).toBe(false);
  });

  it("returns bundled content for supported languages", () => {
    const englishContent = getSiteContent("en");
    const frenchContent = getSiteContent("fr");

    expect(englishContent.hero.name).toBeTruthy();
    expect(englishContent.ui.loading).toBeTruthy();
    expect(frenchContent.hero.name).toBeTruthy();
    expect(frenchContent.ui.loading).toBeTruthy();
  });
});
