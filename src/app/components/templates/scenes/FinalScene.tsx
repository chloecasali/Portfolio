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
    <section data-section="true" className="relative flex h-screen w-full snap-start items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-to-br from-[#FA00C4]/10 via-white to-[#fafafa] dark:from-[#FA00C4]/20 dark:via-black dark:to-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
      <AmbientOrb className="left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 bg-[#FA00C4]/20 blur-[150px] dark:bg-[#FA00C4]/30" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="mb-8 text-6xl text-black dark:text-white md:text-8xl lg:text-9xl" style={{ fontFamily: "'Playfair Display', serif" }}>{content.title}<span className="text-[#FA00C4]">.</span></h2>
          <p className="mb-12 text-xl text-black/70 dark:text-white/70 md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>{content.subtitle}</p>
          <motion.div className="mb-16 flex items-center justify-center gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            <motion.a href="#contact" onClick={(event) => {
              event.preventDefault();
              onContactClick();
            }} className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] dark:border-white/20 dark:bg-white/10" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}><Mail className="h-5 w-5 text-black dark:text-white" /></motion.a>
            <motion.a href="https://linkedin.com/in/chloe-casali/" target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] dark:border-white/20 dark:bg-white/10" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}><Linkedin className="h-5 w-5 text-black dark:text-white" /></motion.a>
            <motion.a href="https://github.com/chloecasali" target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] dark:border-white/20 dark:bg-white/10" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}><Github className="h-5 w-5 text-black dark:text-white" /></motion.a>
          </motion.div>
          <motion.button onClick={onBackToTop} className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/5 px-8 py-4 text-black transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
            <span style={{ fontFamily: "'Inter', sans-serif" }}>{ui.backToTop}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
