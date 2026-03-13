import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import type { Language, Theme } from "../content/siteContent";
import i18n, { getPreferredLanguage, getSiteContent } from "../i18n";

// Resolves the initial theme from local storage, falling back to the system preference.
function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Keeps theme, language, and localized content in sync with document state and local storage.
export function usePortfolioPreferences() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getPreferredLanguage);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    void i18n.changeLanguage(language);
  }, [language]);

  const content = useMemo(() => getSiteContent(language), [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return {
    content,
    language,
    setLanguage,
    theme,
    toggleTheme,
  };
}
