import type { SiteContent } from "../../../content/siteContent";
import { AmbientOrb, SectionTitle } from "../../atoms";
import { Mail, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { SceneScrollProps } from "./types";

interface ContactFormData {
  email: string;
  message: string;
  name: string;
}

interface ContactSceneProps extends SceneScrollProps {
  content: SiteContent["contact"];
  ui: SiteContent["ui"];
}

export function ContactScene({ content, scrollContainerRef, ui }: ContactSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef, target: sectionRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    toast.success(content.success);
    reset();
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} data-section="true" className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden py-20">
      <AmbientOrb className="right-[10%] top-[18%] h-[18rem] w-[18rem] bg-[#FA00C4]/14 blur-[100px] dark:bg-[#FA00C4]/20" style={{ opacity }} />

      <motion.div className="relative z-10 w-full max-w-3xl px-8 md:px-12" style={{ opacity }}>
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#FA00C4]/10">
            <Mail className="h-10 w-10 text-[#FA00C4]" />
          </motion.div>
          <SectionTitle className="mb-6">{content.title}</SectionTitle>
          <p className="text-lg text-black/70 dark:text-white/70 md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>{content.description}</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-wide text-black/80 dark:text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>{content.nameLabel}</label>
            <input id="name" type="text" {...register("name", { required: content.nameRequired })} className="w-full rounded-xl border border-black/10 bg-white/10 px-6 py-4 text-black transition-all duration-300 placeholder:text-black/40 focus:border-[#FA00C4] focus:outline-none focus:ring-2 focus:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40" placeholder={content.namePlaceholder} style={{ fontFamily: "'Inter', sans-serif" }} />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm uppercase tracking-wide text-black/80 dark:text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>{content.emailLabel}</label>
            <input id="email" type="email" {...register("email", { required: content.emailRequired, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: content.emailInvalid } })} className="w-full rounded-xl border border-black/10 bg-white/10 px-6 py-4 text-black transition-all duration-300 placeholder:text-black/40 focus:border-[#FA00C4] focus:outline-none focus:ring-2 focus:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40" placeholder={content.emailPlaceholder} style={{ fontFamily: "'Inter', sans-serif" }} />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-wide text-black/80 dark:text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>{content.messageLabel}</label>
            <textarea id="message" rows={6} {...register("message", { required: content.messageRequired })} className="w-full resize-none rounded-xl border border-black/10 bg-white/10 px-6 py-4 text-black transition-all duration-300 placeholder:text-black/40 focus:border-[#FA00C4] focus:outline-none focus:ring-2 focus:ring-[#FA00C4]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40" placeholder={content.messagePlaceholder} style={{ fontFamily: "'Inter', sans-serif" }} />
            {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <motion.button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FA00C4] to-[#FA00C4]/80 px-8 py-5 font-medium text-white transition-all duration-300 hover:from-[#FA00C4]/90 hover:to-[#FA00C4]/70 disabled:cursor-not-allowed disabled:opacity-50" style={{ fontFamily: "'Inter', sans-serif" }} whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
            {isSubmitting ? (
              <>
                <motion.div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <span>{ui.sending}</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>{ui.send}</span>
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
