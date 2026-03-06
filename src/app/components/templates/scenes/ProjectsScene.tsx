import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb, SectionTitle } from "../../atoms";
import { ExternalLink, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { SceneScrollProps } from "./types";

interface ProjectsSceneProps extends SceneScrollProps {
  content: SiteContent["projects"];
  ui: SiteContent["ui"];
}

export function ProjectsScene({ content, scrollContainerRef, ui }: ProjectsSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef, target: sectionRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} data-section="true" className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden py-20">
      <AmbientOrb className="right-[6%] top-[12%] h-[22rem] w-[22rem] bg-[#FA00C4]/14 blur-[120px] dark:bg-[#FA00C4]/20" style={{ opacity }} />

      <motion.div className="relative z-10 w-full max-w-7xl px-8 md:px-12" style={{ opacity }}>
        <SectionTitle className="mb-20">{content.title}</SectionTitle>
        <div className="space-y-32">
          {content.items.map((project, index) => (
            <motion.div key={project.title} className="group relative" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <motion.div className={`relative overflow-hidden rounded-3xl ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`} whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                  <div className="relative aspect-[16/10]">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                    <motion.div className="absolute inset-0 flex items-end justify-center gap-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pb-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <motion.button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <ExternalLink className="h-4 w-4" />
                        <span>{ui.viewLive}</span>
                      </motion.button>
                      <motion.button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Github className="h-4 w-4" />
                        <span>{ui.code}</span>
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
                <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                  <h3 className="mb-4 text-3xl text-black dark:text-white md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{project.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-black/70 dark:text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-black/80 dark:border-white/10 dark:bg-white/5 dark:text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
