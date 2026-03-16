import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import type { Theme } from "../../content/siteContent";

interface ThemeModeButtonProps {
  darkLabel: string;
  lightLabel: string;
  onToggle: () => void;
  theme: Theme;
  title: string;
}

export function ThemeModeButton({ darkLabel, lightLabel, onToggle, theme, title }: ThemeModeButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 transition-colors hover:border-[#FA00C4]/50 dark:border-white/10 dark:bg-white/5 sm:h-11 sm:w-11"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === "dark" ? lightLabel : darkLabel}
      title={title}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-white transition-colors group-hover:text-[#FA00C4] sm:h-5 sm:w-5" />
        ) : (
          <Sun className="h-4 w-4 text-black transition-colors group-hover:text-[#FA00C4] dark:text-white sm:h-5 sm:w-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
