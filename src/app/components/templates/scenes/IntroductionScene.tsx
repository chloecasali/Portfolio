import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb, SectionTitle } from "../../atoms";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { SceneScrollProps } from "./types";

interface IntroductionSceneProps extends SceneScrollProps {
  content: SiteContent["introduction"];
}

export function IntroductionScene({ content, scrollContainerRef }: IntroductionSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef, target: sectionRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [80, 0, 0, -80]);
  const reverseY = useTransform(y, (value) => value * -0.55);

  return (
    <section
      ref={sectionRef}
      data-section="true"
      className="relative flex min-h-[100dvh] w-full snap-start items-center justify-center overflow-hidden py-24 sm:py-20"
    >
      <AmbientOrb className="left-[-8%] top-[16%] h-[15rem] w-[15rem] bg-[#FA00C4]/14 blur-[95px] dark:bg-[#FA00C4]/18 sm:left-[8%] sm:top-[20%] sm:h-[22rem] sm:w-[22rem] sm:blur-[120px]" style={{ opacity, y }} />
      <AmbientOrb className="bottom-[8%] right-[-4%] h-[12rem] w-[12rem] bg-[#FA00C4]/10 blur-[85px] dark:bg-[#FA00C4]/14 sm:bottom-[10%] sm:right-[10%] sm:h-[18rem] sm:w-[18rem] sm:blur-[110px]" style={{ opacity, y: reverseY }} />

      <motion.div className="relative z-10 w-full max-w-3xl px-5 sm:px-8 md:max-w-4xl md:px-12" style={{ opacity, y }}>
        <SectionTitle className="mb-8 sm:mb-12">
          {content.title}
        </SectionTitle>
        <div className="space-y-6 text-base leading-7 sm:space-y-8 sm:text-lg sm:leading-relaxed md:text-xl">
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${index === 0 ? "text-black/82 dark:text-white/82" : index === 1 ? "text-black/70 dark:text-white/72" : "text-black/60 dark:text-white/62"} max-w-[62ch] md:mx-auto`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
