import type { SiteContent } from "../../content/siteContent";

const en = {
  loaderName: "Chloe",
  hero: {
    name: "Chloe",
    role: "Full-Stack Developer",
    stack: ["Symfony 7", "API Platform", "React.js", "TypeScript"],
  },
  introduction: {
    title: "Introduction",
    paragraphs: [
      "I am a full-stack developer who designs robust and maintainable web applications. I approach each project from a real need, then shape a solution and build it in a structured way.",
      "Throughout my experience, I have worked on both backend and frontend development, which gives me a global view of a project. I have also handled some automation and development-environment concerns, especially with Docker and continuous integration.",
      "I have also had the opportunity to work on UI/UX in some projects. It is an area that interests me and enriches the way I design interfaces, even though my main goal is to grow as a developer. That perspective helps me create products that are more coherent, more readable, and more thoughtfully designed as a whole.",
      "Through this portfolio, I am sharing part of my background, the way I work, and several projects that reflect my approach to web development.",
    ],
  },
  expertise: {
    title: "Expertise",
    items: [
      {
        title: "Backend Architecture",
        techs: ["Symfony", "API Platform", "REST APIs", "Doctrine ORM", "Authentication / Security", "JWT"],
      },
      { title: "Frontend Development", techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
      {
        title: "Database Design",
        techs: ["PostgreSQL", "MySQL", "Query Optimization", "Data Modeling"],
      },
      { title: "DevOps & Deployment", techs: ["Docker", "CI/CD", "GitLab", "GitHub Actions"] },
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
        title: "Needs Discovery",
        description: "Each project starts with understanding the need and defining the right solution.",
      },
      {
        title: "Clean Architecture",
        description: "Applications are designed with a clear architecture to ensure readability and maintainability.",
      },
      {
        title: "Iterative Development",
        description: "Development moves in short iterations with clear priorities and regular feedback.",
      },
      {
        title: "Testing and Reliability",
        description: "Tests protect critical behaviors and help limit regressions.",
      },
      {
        title: "Automation and Deployment",
        description: "Builds and deployments are automated through Docker-based environments and CI/CD.",
      },
      {
        title: "Monitoring and Observability",
        description: "Applications are monitored with Prometheus and Grafana to track performance and detect issues.",
      },
    ],
  },
  projects: {
    title: "Development Projects",
    items: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack marketplace with a Symfony backend, React frontend, and PostgreSQL core. It combines real-time inventory, secure payments, and a polished administration flow.",
        image:
          "https://images.unsplash.com/photo-1592773307163-962d25055c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxODkwMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Symfony", "React", "PostgreSQL", "Docker"],
      },
      {
        title: "Task Management System",
        description:
          "A collaborative workspace with live updates, advanced reporting, and team coordination tools designed around a service-oriented backend.",
        image:
          "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MTMyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["API Platform", "TypeScript", "Redis", "Kubernetes"],
      },
      {
        title: "Analytics Dashboard",
        description:
          "A data-heavy interface with interactive visualization, custom reporting, and streaming insights designed to stay fluid at scale.",
        image:
          "https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXRhfGVufDF8fHx8MTc3MTk0MjI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["React", "D3.js", "GraphQL", "PostgreSQL"],
      },
    ],
  },
  design: {
    title: "Design",
    items: [
      {
        title: "Mobile Banking App",
        category: "UI/UX Design",
        image:
          "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxOTA2ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "SaaS Dashboard",
        category: "Product Design",
        image:
          "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE5MjcwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Responsive Website",
        category: "Web Design",
        image:
          "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc3MTkyMjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Design System",
        category: "Component Library",
        image:
          "https://images.unsplash.com/photo-1633198362880-4864a5d6fa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzcxOTQyMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },
  contact: {
    title: "Let's keep in touch",
    description: "Have a project in mind? Let's create something strong, clear, and memorable together.",
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    companyLabel: "Company (optional)",
    messageLabel: "Your Message",
    subjectLabel: "Topic",
    opportunityOptionLabel: "Discuss an opportunity",
    feedbackOptionLabel: "Feedback / issue report",
    otherOptionLabel: "Other",
    feedbackMessagePlaceholder: "Detail your suggestion or issue report",
    otherMessagePlaceholder: "Describe your request",
    namePlaceholder: "John Doe",
    emailPlaceholder: "hello@example.com",
    companyPlaceholder: "Example Inc",
    messagePlaceholder: "Tell me about your project...",
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Invalid email address",
    messageRequired: "Message is required",
    success: "Message sent successfully. I'll get back to you soon.",
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
    viewLive: "View Live",
    code: "Code",
    viewProject: "View Project",
    send: "Send Message",
    sending: "Sending...",
    backToTop: "Back to Top",
  },
} satisfies SiteContent;

export default en;
