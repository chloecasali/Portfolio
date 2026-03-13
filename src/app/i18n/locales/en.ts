import authProjectImage from "../../../images/auth.webp";
import skinTrackProjectImage from "../../../images/skincare-products.webp";
import type { SiteContent } from "../../content/siteContent";

const en = {
  loaderName: "Chloé",
  hero: {
    name: "Chloé",
    role: "Full-Stack Developer",
    stack: ["Symfony 7", "API Platform", "React.JS", "TypeScript"],
  },
  introduction: {
    title: "Introduction",
    paragraphs: [
      "I am a full-stack developer, and I design robust, maintainable web applications. I approach each project by starting from a need, imagining a solution, and then developing it in a structured way.",
      "Throughout my journey, I have worked on both backend and frontend development, which now gives me a global view of a project. I have also explored aspects related to automation and development environments, notably with Docker and continuous integration.",
      "I have also had the opportunity to work on UI/UX in some projects. It is an area that interests me and enriches the way I design interfaces, even though I primarily want to grow as a developer. This sensitivity mainly helps me create products that are more coherent, more readable, and more thoughtfully designed as a whole.",
      "Through this portfolio, I share part of my journey, the way I work, and several projects that reflect my approach to web development.",
    ],
  },
  expertise: {
    title: "Expertise",
    items: [
      {
        title: "Backend Architecture",
        techs: ["Symfony", "API Platform", "REST API", "Doctrine ORM", "Authentication / Security", "JWT"],
      },
      {
        title: "Frontend Development",
        techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        title: "Database Design",
        techs: ["PostgreSQL", "MySQL", "Query Optimization", "Data Modeling"],
      },
      {
        title: "DevOps & Deployment",
        techs: ["Docker", "CI/CD", "GitLab", "GitHub Action"],
      },
      {
        title: "Collaboration & Project Management",
        techs: ["Agile Methodology", "Scrum", "User Stories", "Ticket Tracking", "Milestones"],
      },
      {
        title: "UI/UX Design",
        techs: ["Figma", "Mockups", "Prototyping", "User Research", "User Experience"],
      },
    ],
  },
  workflow: {
    title: "Workflow",
    items: [
      {
        title: "Understanding the Need",
        description: "Every project starts with analyzing the need and defining a suitable solution.",
      },
      {
        title: "Clean Architecture",
        description: "Applications are designed with a clear architecture to guarantee readability and maintainability.",
      },
      {
        title: "Iterative Development",
        description: "Development is carried out in short iterations with clear priorities and regular feedback.",
      },
      {
        title: "Testing and Reliability",
        description: "Tests secure critical behaviors and help limit regressions.",
      },
      {
        title: "Automation and Deployment",
        description: "Builds and deployments are automated through Docker containers and CI/CD.",
      },
      {
        title: "Monitoring and Observability",
        description: "Applications are monitored with Prometheus and Grafana to track performance and detect anomalies.",
      },
    ],
  },
  projects: {
    title: "Development Projects",
    items: [
      {
        title: "SkinTrack - Mobile app for tracking skincare routines",
        description:
          "SkinTrack is a mobile application for tracking skincare and wellness routines. It is built with React Native (Expo), using a clear architecture and a design system based on NativeWind.",
        image: skinTrackProjectImage,
        codeUrl: "https://github.com/chloecasali/SkinTrack",
        tags: ["React Native", "Expo", "TypeScript", "NativeWind"],
      },
      {
        title: "Secure authentication and user management API",
        description:
          "An API dedicated to authentication and user management for SkinTrack. It secures access to resources through authentication mechanisms (JWT) and structured account management.",
        image: authProjectImage,
        codeUrl: "https://github.com/chloecasali/auth",
        tags: ["Symfony", "API Platform", "JWT Authentication", "PostgreSQL"],
      },
    ],
  },
  contact: {
    title: "Let's stay in touch",
    description: "Do you have a project in mind? Let's build it together.",
    nameLabel: "Your name",
    emailLabel: "Email address",
    companyLabel: "Company (optional)",
    messageLabel: "Your message",
    subjectLabel: "Topic",
    opportunityOptionLabel: "Discuss an opportunity",
    feedbackOptionLabel: "Feedback / issue report",
    otherOptionLabel: "Other",
    feedbackMessagePlaceholder: "Describe your suggestion or issue report",
    otherMessagePlaceholder: "Describe your request",
    namePlaceholder: "John Doe",
    emailPlaceholder: "hello@example.com",
    companyPlaceholder: "Example Inc.",
    messagePlaceholder: "Tell me about your project...",
    nameRequired: "Name is required",
    emailRequired: "Email address is required",
    emailInvalid: "Invalid email address",
    messageRequired: "Message is required",
    success: "Message sent successfully. I'll get back to you shortly.",
    unavailable: "The contact form is not configured yet.",
    error: "Unable to send your message right now. Please try again shortly.",
  },
  final: {
    title: "Thank you",
    subtitle: "Let's create something together.",
  },
  ui: {
    loading: "Loading",
    scroll: "Scroll",
    english: "EN",
    french: "FR",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    viewLive: "View site",
    code: "Code",
    viewProject: "View project",
    send: "Send message",
    sending: "Sending...",
    backToTop: "Back to top",
  },
} satisfies SiteContent;

export default en;
