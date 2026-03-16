import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb } from "../../atoms";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

interface FinalSceneProps {
  content: SiteContent["final"];
  onContactClick: () => void;
  onBackToTop: () => void;
  ui: SiteContent["ui"];
}

export function FinalScene({ content, onContactClick, onBackToTop, ui }: FinalSceneProps) {
  return (
    <section
      data-section="true"
      className="relative flex min-h-[100dvh] w-full snap-start items-center justify-center overflow-hidden px-0 py-24 sm:py-20"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-[#FA00C4]/10 via-white to-[#fafafa] dark:from-[#FA00C4]/20 dark:via-black dark:to-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
      <AmbientOrb className="left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 bg-[#FA00C4]/20 blur-[110px] dark:bg-[#FA00C4]/30 sm:h-[50rem] sm:w-[50rem] sm:blur-[150px]" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

      <div className="relative z-10 w-full max-w-5xl px-5 text-center sm:px-6">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl text-black dark:text-white sm:mb-8 sm:text-6xl md:text-8xl lg:text-9xl" style={{ fontFamily: "'Playfair Display', serif" }}>{content.title}<span className="text-[#FA00C4]">.</span></h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70 sm:mb-12 sm:text-xl md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>{content.subtitle}</p>
          <motion.div className="mb-12 flex items-center justify-center gap-4 sm:mb-16 sm:gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            <motion.a href="#contact" onClick={(event) => {
              event.preventDefault();
              onContactClick();
            }} className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] dark:border-white/20 dark:bg-white/10 sm:h-14 sm:w-14" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}><Mail className="h-4 w-4 text-black dark:text-white sm:h-5 sm:w-5" /></motion.a>
            <motion.a href="https://linkedin.com/in/chloe-casali/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] dark:border-white/20 dark:bg-white/10 sm:h-14 sm:w-14" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}><Linkedin className="h-4 w-4 text-black dark:text-white sm:h-5 sm:w-5" /></motion.a>
            <motion.a href="https://github.com/chloecasali" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] dark:border-white/20 dark:bg-white/10 sm:h-14 sm:w-14" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}><Github className="h-4 w-4 text-black dark:text-white sm:h-5 sm:w-5" /></motion.a>
          </motion.div>
          <motion.button onClick={onBackToTop} className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-sm text-black transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white sm:px-8 sm:py-4 sm:text-base" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
            <span style={{ fontFamily: "'Inter', sans-serif" }}>{ui.backToTop}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
