import type { ReactNode } from "react";

interface SectionTitleProps {
  align?: "center" | "left";
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ align = "center", children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-5xl text-black dark:text-white md:text-7xl ${align === "center" ? "text-center" : "text-left"} ${className}`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
      <span className="text-[#FA00C4]">.</span>
    </h2>
  );
}
