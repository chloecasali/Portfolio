import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import type { Language, SiteContent } from "../content/siteContent";
import en from "./locales/en";
import fr from "./locales/fr";

const defaultNamespace = "translation";

const fallbackContent: Record<Language, SiteContent> = {
  en,
  fr,
};

export const resources = {
  en: { translation: en },
  fr: { translation: fr },
} as const;

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "fr";
}

export function getPreferredLanguage(): Language {
  if (typeof window !== "undefined") {
    const savedLanguage = window.localStorage.getItem("language");

    if (isLanguage(savedLanguage)) {
      return savedLanguage;
    }
  }

  if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("fr")) {
    return "fr";
  }

  return "en";
}

export function getSiteContent(language: Language): SiteContent {
  const bundle = i18n.getResourceBundle(language, defaultNamespace) as SiteContent | undefined;

  return bundle ?? fallbackContent[language];
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    defaultNS: defaultNamespace,
    fallbackLng: "en",
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    lng: getPreferredLanguage(),
    ns: [defaultNamespace],
    resources,
    supportedLngs: ["en", "fr"],
  });
}

export default i18n;
