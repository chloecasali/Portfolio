import type { ComponentProps } from "react";
import { motion } from "motion/react";

interface AmbientOrbProps
  extends Pick<ComponentProps<typeof motion.div>, "animate" | "className" | "style" | "transition"> {}

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
