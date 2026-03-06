import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb, SectionTitle } from "../../atoms";
import { Code2, Container, Database, Layout, Palette, Server } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { SceneScrollProps } from "./types";

const skillIcons = [Code2, Server, Database, Container, Layout, Palette];

interface ExpertiseSceneProps extends SceneScrollProps {
  content: SiteContent["expertise"];
}

export function ExpertiseScene({ content, scrollContainerRef }: ExpertiseSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef, target: sectionRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} data-section="true" className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden py-20">
      <AmbientOrb className="right-[8%] top-[14%] h-[20rem] w-[20rem] bg-[#FA00C4]/14 blur-[110px] dark:bg-[#FA00C4]/20" style={{ opacity }} />

      <motion.div className="relative z-10 w-full max-w-7xl px-8 md:px-12" style={{ opacity }}>
        <SectionTitle className="mb-20">{content.title}</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {content.items.map((skill, index) => {
            const Icon = skillIcons[index];
            return (
              <motion.div
                key={skill.title}
                className="group relative rounded-3xl border border-black/10 bg-white/8 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#FA00C4]/50 dark:border-white/10 dark:bg-white/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FA00C4]/0 to-transparent group-hover:from-[#FA00C4]/12" />
                <div className="relative z-10">
                  <motion.div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 transition-all duration-500 group-hover:bg-[#FA00C4]/10 dark:bg-white/5" whileHover={{ rotate: 5 }}>
                    <Icon className="h-7 w-7 text-black transition-colors duration-500 group-hover:text-[#FA00C4] dark:text-white" />
                  </motion.div>
                  <h3 className="mb-4 text-xl text-black dark:text-white md:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <span key={tech} className="rounded-full border border-black/5 bg-black/5 px-3 py-1 text-xs text-black/70 dark:border-white/5 dark:bg-white/5 dark:text-white/72" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
