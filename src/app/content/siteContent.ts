export type Language = "en" | "fr";
export type Theme = "light" | "dark";

interface HeroContent {
  name: string;
  role: string;
  stack: string[];
}

interface IntroductionContent {
  title: string;
  paragraphs: string[];
}

interface ExpertiseItem {
  title: string;
  techs: string[];
}

interface WorkflowItem {
  title: string;
  description: string;
}

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  codeUrl?: string;
  tags: string[];
}

interface DesignItem {
  title: string;
  category: string;
  image: string;
}

interface ContactContent {
  title: string;
  description: string;
  nameLabel: string;
  emailLabel: string;
  companyLabel?: string;
  messageLabel: string;
  subjectLabel?: string;
  opportunityOptionLabel?: string;
  feedbackOptionLabel?: string;
  otherOptionLabel?: string;
  feedbackMessagePlaceholder?: string;
  otherMessagePlaceholder?: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  companyPlaceholder?: string;
  messagePlaceholder: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  success: string;
  unavailable?: string;
  error?: string;
}

interface FinalContent {
  title: string;
  subtitle: string;
}

interface UiContent {
  loading: string;
  scroll: string;
  english: string;
  french: string;
  theme: string;
  light: string;
  dark: string;
  viewLive: string;
  code: string;
  viewProject: string;
  send: string;
  sending: string;
  backToTop: string;
}

export interface SiteContent {
  loaderName: string;
  hero: HeroContent;
  introduction: IntroductionContent;
  expertise: {
    title: string;
    items: ExpertiseItem[];
  };
  workflow: {
    title: string;
    items: WorkflowItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  design: {
    title: string;
    items: DesignItem[];
  };
  contact: ContactContent;
  final: FinalContent;
  ui: UiContent;
}
