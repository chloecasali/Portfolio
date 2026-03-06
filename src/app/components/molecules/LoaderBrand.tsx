import { motion } from "motion/react";

interface LoaderBrandProps {
  loadingLabel: string;
  name: string;
  theme: "light" | "dark";
}

export function LoaderBrand({ loadingLabel, name, theme }: LoaderBrandProps) {
  const nameColor = theme === "dark" ? "text-white" : "text-black";
  const trackColor = theme === "dark" ? "bg-white/10" : "bg-black/10";
  const labelColor = theme === "dark" ? "text-white/40" : "text-black/40";

  return (
    <div className="relative z-10 text-center">
      <motion.div
        className="mb-8 text-6xl font-serif md:text-8xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="text-[#FA00C4]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          {name.charAt(0)}
        </motion.span>
        <motion.span
          className={nameColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          {name.slice(1)}
        </motion.span>
      </motion.div>

      <div className={`mx-auto h-0.5 w-72 overflow-hidden rounded-full ${trackColor}`}>
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-[#FA00C4] via-[#ff7fe6] to-[#FA00C4]"
          initial={{ scaleX: 0, opacity: 0.7 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <motion.p
        className={`mt-6 text-xs uppercase tracking-[0.35em] ${labelColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.55 }}
      >
        {loadingLabel}
      </motion.p>
    </div>
  );
}
