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
    <section
      data-section="true"
      className="relative flex min-h-[100dvh] w-full snap-start items-center justify-center overflow-hidden px-0 py-24 sm:py-20"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-[#fff8fd] to-[#FA00C4]/8 dark:from-black dark:via-[#080508] dark:to-[#FA00C4]/12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      />

      <AmbientOrb
        className="left-1/2 top-[14%] h-[22rem] w-[22rem] -translate-x-1/2 bg-[#FA00C4]/16 blur-[110px] dark:bg-[#FA00C4]/24 sm:top-[18%] sm:h-[34rem] sm:w-[34rem] sm:blur-[130px]"
        animate={{ scale: [1, 1.16, 1], opacity: [0.24, 0.38, 0.24] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <AmbientOrb
        className="bottom-[10%] left-[6%] h-44 w-44 bg-[#FA00C4]/12 blur-[90px] dark:bg-[#FA00C4]/18 sm:bottom-[12%] sm:left-[12%] sm:h-60 sm:w-60 sm:blur-[110px]"
        animate={{ x: [0, 34, 0], y: [0, -22, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-5xl px-5 text-center sm:px-6">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center space-y-5 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-[3.25rem] font-normal leading-none tracking-tight text-black dark:text-white sm:text-7xl md:text-8xl lg:text-9xl"
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
            className="mx-auto max-w-2xl text-base leading-relaxed tracking-[0.08em] text-black/70 dark:text-white/70 sm:text-xl sm:tracking-wide md:text-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {content.role}
          </motion.p>

          <motion.div
            className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.62rem] uppercase tracking-[0.24em] text-black/50 dark:text-white/50 sm:max-w-none sm:gap-4 sm:text-sm sm:tracking-[0.35em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {content.stack.map((item, index) => (
              <div key={item} className="flex items-center gap-2 sm:gap-4">
                {index > 0 && <span className="hidden sm:inline">•</span>}
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
