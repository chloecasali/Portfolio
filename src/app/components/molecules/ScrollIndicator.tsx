import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface ScrollIndicatorProps {
  label: string;
}

export function ScrollIndicator({ label }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <ChevronDown className="h-6 w-6 text-black/40 dark:text-white/40" />
      </motion.div>
      <span className="text-xs uppercase tracking-[0.3em] text-black/40 dark:text-white/40">{label}</span>
    </motion.div>
  );
}
