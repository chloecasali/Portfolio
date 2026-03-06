import { AnimatePresence, motion } from "motion/react";
import type { Theme } from "../../content/siteContent";
import { AmbientOrb } from "../atoms";
import { LoaderBrand } from "../molecules";

interface LoadingScreenProps {
  isVisible: boolean;
  loadingLabel: string;
  name: string;
  theme: Theme;
}

export function LoadingScreen({ isVisible, loadingLabel, name, theme }: LoadingScreenProps) {
  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 z-[200] flex items-center justify-center overflow-hidden ${
            isDark ? "bg-[#050505]" : "bg-[#fff8fd]"
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <AmbientOrb
            className="inset-0 blur-[120px]"
            animate={{ opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
            style={{
              background: isDark
                ? "radial-gradient(circle at 50% 42%, rgba(250,0,196,0.22) 0%, rgba(250,0,196,0.08) 24%, rgba(5,5,5,0) 62%)"
                : "radial-gradient(circle at 50% 42%, rgba(250,0,196,0.18) 0%, rgba(250,0,196,0.06) 24%, rgba(255,248,253,0) 62%)",
            }}
          />

          <LoaderBrand loadingLabel={loadingLabel} name={name} theme={theme} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
