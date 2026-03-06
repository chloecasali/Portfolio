import { useEffect, useRef, useState } from "react";
import { useDesktopCursor, useGuidedSectionScroll, usePortfolioPreferences } from "../../hooks";
import { AppControls, CustomCursor, LoadingScreen, ParallaxBackground } from "../organisms";
import { Toaster } from "../ui/sonner";
import {
  ContactScene,
  DesignScene,
  ExpertiseScene,
  FinalScene,
  HeroScene,
  IntroductionScene,
  ProjectsScene,
  QualitiesScene,
  WorkflowScene,
} from "./scenes";

const LOADER_DURATION_MS = 2100;

export function PortfolioPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const showCustomCursor = useDesktopCursor();
  const { content, language, setLanguage, theme, toggleTheme } = usePortfolioPreferences();
  const { scrollToTop } = useGuidedSectionScroll(scrollContainerRef);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="relative bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white">
      <LoadingScreen
        isVisible={isLoading}
        loadingLabel={content.ui.loading}
        name={content.loaderName}
        theme={theme}
      />

      <ParallaxBackground />

      {showCustomCursor && <CustomCursor />}

      <AppControls
        language={language}
        labels={{
          dark: content.ui.dark,
          english: content.ui.english,
          french: content.ui.french,
          light: content.ui.light,
          theme: content.ui.theme,
        }}
        onLanguageChange={setLanguage}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <div
        ref={scrollContainerRef}
        className="smooth-scroll-container snap-y relative z-10 h-screen overflow-y-scroll overflow-x-hidden"
      >
        <HeroScene content={content.hero} scrollLabel={content.ui.scroll} />
        <IntroductionScene content={content.introduction} scrollContainerRef={scrollContainerRef} />
        <ExpertiseScene content={content.expertise} scrollContainerRef={scrollContainerRef} />
        <WorkflowScene content={content.workflow} scrollContainerRef={scrollContainerRef} />
        <ProjectsScene
          content={content.projects}
          scrollContainerRef={scrollContainerRef}
          ui={content.ui}
        />
        <DesignScene
          content={content.design}
          scrollContainerRef={scrollContainerRef}
          viewProjectLabel={content.ui.viewProject}
        />
        <QualitiesScene content={content.qualities} scrollContainerRef={scrollContainerRef} />
        <ContactScene
          content={content.contact}
          scrollContainerRef={scrollContainerRef}
          ui={content.ui}
        />
        <FinalScene content={content.final} onBackToTop={scrollToTop} ui={content.ui} />
      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}
