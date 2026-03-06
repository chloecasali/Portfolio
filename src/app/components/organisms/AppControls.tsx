import { Languages } from "lucide-react";
import { motion } from "motion/react";
import type { Language, Theme } from "../../content/siteContent";
import { LanguageToggle, ThemeModeButton } from "../molecules";

interface AppControlsProps {
  language: Language;
  labels: {
    dark: string;
    english: string;
    french: string;
    light: string;
    theme: string;
  };
  onLanguageChange: (language: Language) => void;
  onToggleTheme: () => void;
  theme: Theme;
}

export function AppControls({ language, labels, onLanguageChange, onToggleTheme, theme }: AppControlsProps) {
  return (
    <motion.div
      className="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-full border border-black/10 bg-white/65 p-2 text-black shadow-[0_20px_60px_rgba(250,0,196,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/35 dark:text-white md:right-8 md:top-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-2 py-1 dark:border-white/10 dark:bg-white/5">
        <Languages className="h-4 w-4 text-[#FA00C4]" />
        <LanguageToggle
          currentLanguage={language}
          englishLabel={labels.english}
          frenchLabel={labels.french}
          onChange={onLanguageChange}
        />
      </div>

      <ThemeModeButton
        darkLabel={labels.dark}
        lightLabel={labels.light}
        onToggle={onToggleTheme}
        theme={theme}
        title={labels.theme}
      />
    </motion.div>
  );
}
