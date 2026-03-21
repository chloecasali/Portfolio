import type { ComponentProps } from "react";
import { motion } from "motion/react";

type AmbientOrbProps = {
  animate?: ComponentProps<typeof motion.div>["animate"];
  className?: string;
  style?: ComponentProps<typeof motion.div>["style"];
  transition?: ComponentProps<typeof motion.div>["transition"];
};

export function AmbientOrb({ animate, className, style, transition }: AmbientOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full bg-[#FA00C4] ${className ?? ""}`}
      animate={animate}
      style={style}
      transition={transition}
    />
  );
}
