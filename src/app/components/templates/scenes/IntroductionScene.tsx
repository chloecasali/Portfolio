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
    <section ref={sectionRef} data-section="true" className="relative flex h-screen w-full snap-start items-center justify-center overflow-hidden">
      <AmbientOrb className="left-[8%] top-[20%] h-[22rem] w-[22rem] bg-[#FA00C4]/16 blur-[120px] dark:bg-[#FA00C4]/20" style={{ opacity, y }} />
      <AmbientOrb className="bottom-[10%] right-[10%] h-[18rem] w-[18rem] bg-[#FA00C4]/12 blur-[110px] dark:bg-[#FA00C4]/18" style={{ opacity, y: reverseY }} />

      <motion.div className="relative z-10 max-w-4xl px-8 md:px-12" style={{ opacity, y }}>
        <SectionTitle className="mb-12">{content.title}</SectionTitle>
        <div className="space-y-8 text-lg leading-relaxed md:text-xl">
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? "text-black/82 dark:text-white/82" : index === 1 ? "text-black/70 dark:text-white/72" : "text-black/60 dark:text-white/62"}
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
