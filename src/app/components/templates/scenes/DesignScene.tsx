// import type { SiteContent } from "../../../content/siteContent";
// import { AmbientOrb, SectionTitle } from "../../atoms";
// import { motion, useScroll, useTransform } from "motion/react";
// import { useRef } from "react";
// import type { SceneScrollProps } from "./types";
//
// interface DesignSceneProps extends SceneScrollProps {
//   content: SiteContent["design"];
//   viewProjectLabel: string;
// }
//
// export function DesignScene({ content, scrollContainerRef, viewProjectLabel }: DesignSceneProps) {
//   const sectionRef = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({ container: scrollContainerRef, target: sectionRef, offset: ["start end", "end start"] });
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.94, 1, 1, 0.94]);
//
//   return (
//     <section ref={sectionRef} data-section="true" className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden py-20">
//       <AmbientOrb className="left-[6%] top-[12%] h-[20rem] w-[20rem] bg-[#FA00C4]/14 blur-[110px] dark:bg-[#FA00C4]/20" style={{ opacity }} />
//
//       <motion.div className="relative z-10 w-full max-w-7xl px-8 md:px-12" style={{ opacity, scale }}>
//         <SectionTitle className="mb-20">{content.title}</SectionTitle>
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           {content.items.map((design, index) => (
//             <motion.div key={design.title} className="group relative cursor-pointer overflow-hidden rounded-3xl" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.03 }}>
//               <div className="relative aspect-[4/5] overflow-hidden bg-black/5 dark:bg-white/5">
//                 <motion.img src={design.image} alt={design.title} className="h-full w-full object-cover scale-105" whileHover={{ scale: 1.12 }} transition={{ duration: 0.7 }} />
//                 <motion.div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
//                 <div className="absolute inset-0 flex flex-col justify-end p-8">
//                   <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.3 }} viewport={{ once: true }}>
//                     <p className="mb-2 text-sm uppercase tracking-widest text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{design.category}</p>
//                     <h3 className="mb-4 text-2xl text-white md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{design.title}</h3>
//                     <motion.button className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white opacity-0 transition-all duration-300 hover:border-[#FA00C4] hover:bg-[#FA00C4] group-hover:opacity-100" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       {viewProjectLabel}
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </div>
//               <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FA00C4]/0 to-transparent transition-all duration-500 group-hover:from-[#FA00C4]/20" />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
