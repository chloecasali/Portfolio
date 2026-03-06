import { useCallback, useEffect } from "react";
import type { RefObject } from "react";

const SCROLL_LOCK_MS = 780;
const WHEEL_THRESHOLD = 70;

export function useGuidedSectionScroll(scrollContainerRef: RefObject<HTMLDivElement | null>) {
  const scrollToSection = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current;
      if (!container) {
        return;
      }

      const sections = Array.from(container.querySelectorAll<HTMLElement>("[data-section='true']"));
      const nextSection = sections[index];
      if (!nextSection) {
        return;
      }

      container.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    },
    [scrollContainerRef]
  );

  const scrollToTop = useCallback(() => {
    scrollToSection(0);
  }, [scrollToSection]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!container || prefersReducedMotion) {
      return;
    }

    let isLocked = false;
    let deltaBuffer = 0;
    let unlockTimer: number | undefined;

    const getSections = () =>
      Array.from(container.querySelectorAll<HTMLElement>("[data-section='true']"));

    const getNearestSectionIndex = () => {
      const sections = getSections();
      if (sections.length === 0) {
        return 0;
      }

      const currentScroll = container.scrollTop;

      return sections.reduce((closestIndex, section, index) => {
        const currentDistance = Math.abs(section.offsetTop - currentScroll);
        const closestDistance = Math.abs(sections[closestIndex].offsetTop - currentScroll);
        return currentDistance < closestDistance ? index : closestIndex;
      }, 0);
    };

    const unlock = () => {
      isLocked = false;
      deltaBuffer = 0;
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 768 || Math.abs(event.deltaY) < 4) {
        return;
      }

      deltaBuffer += event.deltaY;

      if (isLocked) {
        event.preventDefault();
        return;
      }

      if (Math.abs(deltaBuffer) < WHEEL_THRESHOLD) {
        return;
      }

      const sections = getSections();
      const direction = deltaBuffer > 0 ? 1 : -1;
      const currentIndex = getNearestSectionIndex();
      const targetIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
      deltaBuffer = 0;

      if (targetIndex === currentIndex) {
        return;
      }

      event.preventDefault();
      isLocked = true;
      scrollToSection(targetIndex);

      window.clearTimeout(unlockTimer);
      unlockTimer = window.setTimeout(unlock, SCROLL_LOCK_MS);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      window.clearTimeout(unlockTimer);
    };
  }, [scrollContainerRef, scrollToSection]);

  return { scrollToSection, scrollToTop };
}
