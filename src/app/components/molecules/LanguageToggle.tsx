import type { Language } from "../../content/siteContent";

interface LanguageToggleProps {
  currentLanguage: Language;
  englishLabel: string;
  frenchLabel: string;
  onChange: (language: Language) => void;
}

export function LanguageToggle({
  currentLanguage,
  englishLabel,
  frenchLabel,
  onChange,
}: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-2.5 py-1 text-[0.65rem] tracking-[0.18em] transition-colors sm:px-3 sm:text-xs sm:tracking-[0.22em] ${
          currentLanguage === "en"
            ? "bg-[#FA00C4] text-white"
            : "text-black/55 hover:text-black dark:text-white/55 dark:hover:text-white"
        }`}
        aria-pressed={currentLanguage === "en"}
        aria-label={englishLabel}
      >
        {englishLabel}
      </button>
      <button
        type="button"
        onClick={() => onChange("fr")}
        className={`rounded-full px-2.5 py-1 text-[0.65rem] tracking-[0.18em] transition-colors sm:px-3 sm:text-xs sm:tracking-[0.22em] ${
          currentLanguage === "fr"
            ? "bg-[#FA00C4] text-white"
            : "text-black/55 hover:text-black dark:text-white/55 dark:hover:text-white"
        }`}
        aria-pressed={currentLanguage === "fr"}
        aria-label={frenchLabel}
      >
        {frenchLabel}
      </button>
    </div>
  );
}
