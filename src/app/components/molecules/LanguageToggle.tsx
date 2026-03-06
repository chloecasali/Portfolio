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
        className={`rounded-full px-3 py-1 text-xs tracking-[0.22em] transition-colors ${
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
        className={`rounded-full px-3 py-1 text-xs tracking-[0.22em] transition-colors ${
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
