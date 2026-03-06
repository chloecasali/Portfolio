import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { siteContent, type Language, type Theme } from "../content/siteContent";

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem("language") as Language | null;
  if (savedLanguage === "en" || savedLanguage === "fr") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function usePortfolioPreferences() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const content = useMemo(() => siteContent[language], [language]);

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
