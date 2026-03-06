import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb } from "../../atoms";
import { ScrollIndicator } from "../../molecules";
import { motion } from "motion/react";

interface HeroSceneProps {
  content: SiteContent["hero"];
  scrollLabel: string;
}

export function HeroScene({ content, scrollLabel }: HeroSceneProps) {
  return (
    <section data-section="true" className="relative flex h-screen w-full snap-start items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-[#fff8fd] to-[#FA00C4]/8 dark:from-black dark:via-[#080508] dark:to-[#FA00C4]/12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      />

      <AmbientOrb
        className="left-1/2 top-[18%] h-[34rem] w-[34rem] -translate-x-1/2 bg-[#FA00C4]/16 blur-[130px] dark:bg-[#FA00C4]/24"
        animate={{ scale: [1, 1.16, 1], opacity: [0.24, 0.38, 0.24] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <AmbientOrb
        className="bottom-[12%] left-[12%] h-60 w-60 bg-[#FA00C4]/12 blur-[110px] dark:bg-[#FA00C4]/18"
        animate={{ x: [0, 34, 0], y: [0, -22, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-7xl font-normal tracking-tight text-black dark:text-white md:text-8xl lg:text-9xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.name}
            <motion.span
              className="text-[#FA00C4]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              .
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl tracking-wide text-black/70 dark:text-white/70 md:text-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {content.role}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.35em] text-black/50 dark:text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {content.stack.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                {index > 0 && <span>•</span>}
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator label={scrollLabel} />
    </section>
  );
}
