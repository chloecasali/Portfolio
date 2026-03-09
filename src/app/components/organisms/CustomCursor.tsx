import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blurX = useSpring(mouseX, { stiffness: 360, damping: 30, mass: 0.36 });
  const blurY = useSpring(mouseY, { stiffness: 360, damping: 30, mass: 0.36 });
  const coreX = useSpring(mouseX, { stiffness: 760, damping: 34, mass: 0.18 });
  const coreY = useSpring(mouseY, { stiffness: 760, damping: 34, mass: 0.18 });
  const blurRenderX = useTransform(blurX, (value) => value - 24);
  const blurRenderY = useTransform(blurY, (value) => value - 24);
  const coreRenderX = useTransform(coreX, (value) => value - 8);
  const coreRenderY = useTransform(coreY, (value) => value - 8);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isClickable = !!target.closest(
        "a, button, input, textarea, label, select, [role='button'], [data-cursor='interactive']"
      );
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-12 w-12 rounded-full bg-[#FA00C4]/70 blur-2xl"
        style={{ x: blurRenderX, y: blurRenderY }}
        animate={{ scale: isPressed ? 0.84 : isPointer ? 1.35 : 1, opacity: isPressed ? 0.8 : isPointer ? 1 : 0.9 }}
        transition={{ type: "spring", stiffness: 230, damping: 22 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-4 w-4 rounded-full bg-[#ffd2f4]"
        style={{ x: coreRenderX, y: coreRenderY }}
        animate={{ scale: isPressed ? 0.8 : isPointer ? 1.15 : 1, opacity: isPressed ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      />
    </>
  );
}
