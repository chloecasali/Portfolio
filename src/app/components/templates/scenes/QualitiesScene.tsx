import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb, SectionTitle } from "../../atoms";
import { Heart, Lightbulb, Target, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { SceneScrollProps } from "./types";

const qualityIcons = [Heart, Users, Lightbulb, Target];

interface QualitiesSceneProps extends SceneScrollProps {
  content: SiteContent["qualities"];
}

export function QualitiesScene({ content, scrollContainerRef }: QualitiesSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef, target: sectionRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section ref={sectionRef} data-section="true" className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden py-20">
      <AmbientOrb className="left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 bg-[#FA00C4]/8 blur-[130px] dark:bg-[#FA00C4]/10" style={{ opacity, y }} />

      <motion.div className="relative z-10 w-full max-w-6xl px-8 md:px-12" style={{ opacity, y }}>
        <SectionTitle className="mb-20">{content.title}</SectionTitle>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {content.items.map((quality, index) => {
            const Icon = qualityIcons[index];
            return (
              <motion.div key={quality.title} className="relative" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.15 }} viewport={{ once: true }}>
                <motion.div className="relative rounded-3xl p-8 md:p-10" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <motion.div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FA00C4]/10" whileHover={{ rotate: 5, scale: 1.1 }}>
                    <Icon className="h-8 w-8 text-[#FA00C4]" />
                  </motion.div>
                  <h3 className="mb-4 text-2xl text-black dark:text-white md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{quality.title}</h3>
                  <p className="text-lg leading-relaxed text-black/70 dark:text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{quality.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
