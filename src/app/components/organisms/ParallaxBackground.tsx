import { AmbientOrb } from "../atoms";

export function ParallaxBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <AmbientOrb
        className="-left-16 -top-24 h-[24rem] w-[24rem] bg-[#FA00C4]/30 blur-[120px] md:h-[34rem] md:w-[34rem] md:blur-[160px]"
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <AmbientOrb
        className="right-[-8rem] top-[28%] h-[20rem] w-[20rem] bg-[#FA00C4]/22 blur-[110px] md:h-[30rem] md:w-[30rem] md:blur-[150px]"
        animate={{ x: [0, -70, 0], y: [0, 90, 0], scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      <AmbientOrb
        className="bottom-[-8rem] left-[18%] h-[18rem] w-[18rem] bg-[#FA00C4]/20 blur-[100px] md:h-[26rem] md:w-[26rem] md:blur-[140px]"
        animate={{ x: [0, 55, 0], y: [0, -85, 0], scale: [1, 1.15, 1], opacity: [0.09, 0.15, 0.09] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />
      <AmbientOrb
        className="bottom-[16%] right-[12%] h-[14rem] w-[14rem] bg-[#FA00C4]/18 blur-[90px] md:h-[20rem] md:w-[20rem] md:blur-[120px]"
        animate={{ x: [0, -45, 0], y: [0, 50, 0], scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
