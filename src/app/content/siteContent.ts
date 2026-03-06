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
  tags: string[];
}

interface DesignItem {
  title: string;
  category: string;
  image: string;
}

interface QualityItem {
  title: string;
  description: string;
}

interface ContactContent {
  title: string;
  description: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  success: string;
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
  qualities: {
    title: string;
    items: QualityItem[];
  };
  contact: ContactContent;
  final: FinalContent;
  ui: UiContent;
}

export const siteContent: Record<Language, SiteContent> = {
  en: {
    loaderName: "Chloe",
    hero: {
      name: "Chloe",
      role: "Full-Stack Developer & UI/UX Designer",
      stack: ["Symfony", "React", "TypeScript", "PostgreSQL"],
    },
    introduction: {
      title: "Introduction",
      paragraphs: [
        "I'm a full-stack developer and UI/UX designer focused on elegant, high-performance digital experiences that feel as refined as they are reliable.",
        "I work across product thinking, frontend systems, backend architecture, and containerized delivery to build interfaces that stay beautiful under real technical constraints.",
        "My process is grounded in clarity, clean code, and thoughtful motion so every product feels intentional from the first interaction to the final detail.",
      ],
    },
    expertise: {
      title: "Expertise",
      items: [
        { title: "Frontend Development", techs: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
        { title: "Backend Architecture", techs: ["Symfony", "API Platform", "RESTful APIs", "GraphQL"] },
        { title: "Database Design", techs: ["PostgreSQL", "MySQL", "Redis", "Query Optimization"] },
        { title: "DevOps & Deployment", techs: ["Docker", "Kubernetes", "CI/CD", "GitLab"] },
        { title: "UI/UX Design", techs: ["Figma", "Design Systems", "Prototyping", "User Research"] },
        { title: "Creative Development", techs: ["Motion Design", "3D Web", "Interactive Experiences", "GSAP"] },
      ],
    },
    workflow: {
      title: "Workflow",
      items: [
        { title: "Agile Development", description: "Iterative collaboration with fast feedback loops and clear priorities." },
        { title: "Clean Architecture", description: "Structured systems built for readability, longevity, and calm maintenance." },
        { title: "Test-Driven Delivery", description: "Critical behavior is protected early so releases stay dependable." },
        { title: "CI/CD Pipeline", description: "Automated pipelines keep delivery fast without sacrificing stability." },
      ],
    },
    projects: {
      title: "Development Projects",
      items: [
        {
          title: "E-Commerce Platform",
          description: "A full-stack marketplace with a Symfony backend, React frontend, and PostgreSQL core. It combines real-time inventory, secure payments, and a polished administration flow.",
          image: "https://images.unsplash.com/photo-1592773307163-962d25055c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxODkwMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["Symfony", "React", "PostgreSQL", "Docker"],
        },
        {
          title: "Task Management System",
          description: "A collaborative workspace with live updates, advanced reporting, and team coordination tools designed around a service-oriented backend.",
          image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MTMyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["API Platform", "TypeScript", "Redis", "Kubernetes"],
        },
        {
          title: "Analytics Dashboard",
          description: "A data-heavy interface with interactive visualization, custom reporting, and streaming insights designed to stay fluid at scale.",
          image: "https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXRhfGVufDF8fHx8MTc3MTk0MjI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["React", "D3.js", "GraphQL", "PostgreSQL"],
        },
      ],
    },
    design: {
      title: "Design Work",
      items: [
        {
          title: "Mobile Banking App",
          category: "UI/UX Design",
          image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxOTA2ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "SaaS Dashboard",
          category: "Product Design",
          image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE5MjcwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Responsive Website",
          category: "Web Design",
          image: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc3MTkyMjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Design System",
          category: "Component Library",
          image: "https://images.unsplash.com/photo-1633198362880-4864a5d6fa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzcxOTQyMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    qualities: {
      title: "Core Values",
      items: [
        { title: "Passion for Craft", description: "Every line of code and every visual decision is shaped with care, precision, and consistency." },
        { title: "Team Collaboration", description: "Strong communication and shared ownership create better products and calmer delivery." },
        { title: "Creative Problem Solving", description: "I look for elegant answers to complex product and engineering constraints." },
        { title: "Result-Oriented", description: "The goal is always measurable impact, not just output." },
      ],
    },
    contact: {
      title: "Let's keep in touch",
      description: "Have a project in mind? Let's create something strong, clear, and memorable together.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      messageLabel: "Your Message",
      namePlaceholder: "Chloe Martin",
      emailPlaceholder: "chloe@example.com",
      messagePlaceholder: "Tell me about your project...",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email address",
      messageRequired: "Message is required",
      success: "Message sent successfully. I'll get back to you soon.",
    },
    final: {
      title: "Thank you",
      subtitle: "Let's create something extraordinary together.",
    },
    ui: {
      loading: "Loading",
      scroll: "Défiler",
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
  },
  fr: {
    loaderName: "Chloe",
    hero: {
      name: "Chloe",
      role: "Développeuse full-stack & designer UI/UX",
      stack: ["Symfony", "React", "TypeScript", "PostgreSQL"],
    },
    introduction: {
      title: "Introduction",
      paragraphs: [
        "Je suis développeuse full-stack et designer UI/UX, avec un vrai goût pour les expériences numériques élégantes, rapides et maîtrisées.",
        "J'interviens du produit au frontend, de l'architecture backend jusqu'au déploiement conteneurisé, pour créer des interfaces belles et solides dans des contraintes réelles.",
        "Mon approche repose sur la clarté, un code propre et un motion design réfléchi afin que chaque produit paraisse intentionnel du premier geste au dernier détail.",
      ],
    },
    expertise: {
      title: "Expertise",
      items: [
        { title: "Développement frontend", techs: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
        { title: "Architecture backend", techs: ["Symfony", "API Platform", "API REST", "GraphQL"] },
        { title: "Conception base de données", techs: ["PostgreSQL", "MySQL", "Redis", "Optimisation de requêtes"] },
        { title: "DevOps & déploiement", techs: ["Docker", "Kubernetes", "CI/CD", "GitLab"] },
        { title: "Design UI/UX", techs: ["Figma", "Design Systems", "Prototypage", "Recherche utilisateur"] },
        { title: "Développement créatif", techs: ["Motion Design", "3D Web", "Expériences interactives", "GSAP"] },
      ],
    },
    workflow: {
      title: "Workflow",
      items: [
        { title: "Développement agile", description: "Une collaboration itérative avec des retours rapides et des priorités claires." },
        { title: "Architecture propre", description: "Des systèmes structurés pour rester lisibles, durables et faciles à maintenir." },
        { title: "Livraison guidée par les tests", description: "Les comportements critiques sont sécurisés tôt pour fiabiliser chaque mise en production." },
        { title: "Pipeline CI/CD", description: "Des pipelines automatisés pour livrer vite sans sacrifier la stabilité." },
      ],
    },
    projects: {
      title: "Projets de développement",
      items: [
        {
          title: "Plateforme e-commerce",
          description: "Une marketplace full-stack avec backend Symfony, frontend React et cœur PostgreSQL. Elle combine inventaire temps réel, paiements sécurisés et administration soignée.",
          image: "https://images.unsplash.com/photo-1592773307163-962d25055c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxODkwMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["Symfony", "React", "PostgreSQL", "Docker"],
        },
        {
          title: "Outil de gestion de tâches",
          description: "Un espace collaboratif avec mises à jour en temps réel, reporting avancé et coordination d'équipe, pensé autour d'un backend orienté services.",
          image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MTMyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["API Platform", "TypeScript", "Redis", "Kubernetes"],
        },
        {
          title: "Dashboard analytique",
          description: "Une interface orientée data avec visualisations interactives, rapports sur mesure et flux temps réel, conçue pour rester fluide à grande échelle.",
          image: "https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXRhfGVufDF8fHx8MTc3MTk0MjI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["React", "D3.js", "GraphQL", "PostgreSQL"],
        },
      ],
    },
    design: {
      title: "Design",
      items: [
        {
          title: "Application bancaire mobile",
          category: "Design UI/UX",
          image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxOTA2ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Dashboard SaaS",
          category: "Product design",
          image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE5MjcwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Site responsive",
          category: "Web design",
          image: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc3MTkyMjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Design system",
          category: "Bibliothèque de composants",
          image: "https://images.unsplash.com/photo-1633198362880-4864a5d6fa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzcxOTQyMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    qualities: {
      title: "Valeurs clés",
      items: [
        { title: "Exigence du détail", description: "Chaque ligne de code et chaque décision visuelle sont travaillées avec soin, précision et cohérence." },
        { title: "Esprit d'équipe", description: "Une communication solide et une responsabilité partagée produisent de meilleurs produits et des livraisons plus sereines." },
        { title: "Résolution créative", description: "Je cherche des réponses élégantes à des contraintes produit et techniques complexes." },
        { title: "Orientée résultats", description: "L'objectif reste toujours l'impact mesurable, pas seulement la production." },
      ],
    },
    contact: {
      title: "Restons en contact",
      description: "Vous avez un projet en tête ? Créons ensemble quelque chose de fort, clair et mémorable.",
      nameLabel: "Votre nom",
      emailLabel: "Adresse e-mail",
      messageLabel: "Votre message",
      namePlaceholder: "Chloe Martin",
      emailPlaceholder: "chloe@example.com",
      messagePlaceholder: "Parlez-moi de votre projet...",
      nameRequired: "Le nom est requis",
      emailRequired: "L'adresse e-mail est requise",
      emailInvalid: "Adresse e-mail invalide",
      messageRequired: "Le message est requis",
      success: "Message envoyé avec succès. Je reviens vers vous rapidement.",
    },
    final: {
      title: "Merci",
      subtitle: "Créons ensemble quelque chose d'extraordinaire.",
    },
    ui: {
      loading: "Chargement",
      scroll: "Scroll",
      english: "EN",
      french: "FR",
      theme: "Thème",
      light: "Clair",
      dark: "Sombre",
      viewLive: "Voir le site",
      code: "Code",
      viewProject: "Voir le projet",
      send: "Envoyer le message",
      sending: "Envoi...",
      backToTop: "Retour en haut",
    },
  },
};
