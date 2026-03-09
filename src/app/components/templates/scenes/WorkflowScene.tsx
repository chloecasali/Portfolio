import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb, SectionTitle } from "../../atoms";
import { Search, Blocks, GitBranch, TestTube, Rocket, LineChart } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { SceneScrollProps } from "./types";

const workflowIcons = [Search, Blocks, GitBranch, TestTube, Rocket, LineChart];

interface WorkflowSceneProps extends SceneScrollProps {
  content: SiteContent["workflow"];
}

export function WorkflowScene({ content, scrollContainerRef }: WorkflowSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef, target: sectionRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const contentKey = `${content.title}-${content.items.map((item) => item.title).join("|")}`;

  const listVariants = { hidden: {}, show: { transition: { staggerChildren: 0.22, delayChildren: 0.18 } } };
  const itemVariants = { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
  const iconVariants = { hidden: { opacity: 0, scale: 0.7, y: 20, filter: "blur(18px)" }, show: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } };
  const contentVariants = { hidden: { opacity: 0, x: 18 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, delay: 0.1, ease: "easeOut" } } };

  return (
    <section ref={sectionRef} data-section="true" className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden py-20">
      <AmbientOrb className="left-[10%] top-[16%] h-[18rem] w-[18rem] bg-[#FA00C4]/12 blur-[105px] dark:bg-[#FA00C4]/18" style={{ opacity }} />

      <motion.div className="relative z-10 w-full max-w-5xl px-8 md:px-12" style={{ opacity }}>
        <SectionTitle className="mb-20">{content.title}</SectionTitle>
        <div className="relative">
          <motion.div className="absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-transparent via-[#FA00C4]/30 to-transparent md:block" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} />
          <motion.div
            key={contentKey}
            className="space-y-12"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {content.items.map((step, index) => {
              const Icon = workflowIcons[index];
              return (
                <motion.div key={step.title} className="relative flex items-start gap-8" variants={itemVariants}>
                  <motion.div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/75 backdrop-blur-sm dark:bg-black/70" variants={iconVariants} whileHover={{ scale: 1.1, y: -4 }}>
                    <div className="absolute inset-[-6px] rounded-full bg-[#FA00C4]/18 blur-xl" />
                    <div className="absolute inset-0 rounded-full bg-[#FA00C4]/20 blur-md" />
                    <div className="absolute inset-[2px] rounded-full bg-white/80 dark:bg-black/80" />
                    <Icon className="relative z-10 h-7 w-7 text-[#FA00C4]" />
                    <motion.div className="absolute inset-[-8px] rounded-full bg-[#FA00C4]/12 blur-2xl" animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.08, 0.95] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }} />
                  </motion.div>

                  <motion.div className="flex-1 pt-3" variants={contentVariants}>
                    <h3 className="mb-3 text-2xl text-black dark:text-white md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                    <p className="text-lg text-black/70 dark:text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{step.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
