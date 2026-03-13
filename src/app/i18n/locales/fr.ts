import authProjectImage from "../../../images/auth.webp";
import skinTrackProjectImage from "../../../images/skincare-products.webp";
import type {SiteContent} from "../../content/siteContent";

const fr = {
    loaderName: "Chloé",
    hero: {
        name: "Chloé",
        role: "Développeuse full-stack",
        stack: ["Symfony 7", "API Platform", "React.JS", "TypeScript"],
    },
    introduction: {
        title: "Introduction",
        paragraphs: [
            "Je suis développeuse full-stack et je conçois des applications web robustes et maintenables. J’aborde chaque projet en partant d’un besoin, pour imaginer une solution puis la développer de manière structurée.",
            "Au fil de mon parcours, j’ai travaillé aussi bien sur le backend que sur le frontend, ce qui me permet aujourd’hui d’avoir une vision globale d’un projet. J’ai également abordé certains aspects liés à l’automatisation et aux environnements de développement, notamment avec Docker et l’intégration continue.",
            "J’ai aussi eu l’occasion de toucher à l’UI/UX sur certains projets. C’est un aspect qui m’intéresse et qui enrichit ma manière de concevoir les interfaces, même si je souhaite avant tout évoluer en tant que développeuse. Cette sensibilité me permet surtout de créer des produits plus cohérents, plus lisibles et plus pensés dans leur ensemble.",
            "À travers ce portfolio, je partage une partie de mon parcours, ma façon de travailler, et plusieurs projets qui reflètent mon approche du développement web."
        ],
    },
    expertise: {
        title: "Expertise",
        items: [
            {title: "Architecture backend", techs: ["Symfony", "API Platform", "API REST", "Doctrine ORM", "Authentification / Sécurité", "JWT"]},
            {title: "Développement frontend", techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS"]},
            {title: "Conception base de données", techs: ["PostgreSQL", "MySQL", "Optimisation de requêtes", "Modélisation de données"],},
            {title: "DevOps & déploiement", techs: ["Docker", "CI/CD", "GitLab", "GitHub Action"]},
            {title: "Collaboration & gestion de projet", techs: ["Méthodologie agile", "Scrum", "User Stories", "Suivi des tickets", "Milestones"],},
            {title: "Design UI/UX", techs: ["Figma", "Maquettes", "Prototypage", "Recherche utilisateur", "Expérience utilisateur"],},
        ],
    },
    workflow: {
        title: "Flux de travail",
        items: [
            {title: "Compréhension du besoin", description: "Chaque projet commence par l’analyse du besoin et la définition d’une solution adaptée.",},
            {title: "Architecture propre", description: "Les applications sont conçues avec une architecture claire pour garantir lisibilité et maintenabilité.",},
            {title: "Développement itératif", description: "Le développement se fait par itérations courtes avec des priorités claires et des retours réguliers.",},
            {title: "Tests et fiabilité", description: "Des tests sécurisent les comportements critiques et limitent les régressions.",},
            {title: "Automatisation et déploiement", description: "Automatisation des builds et déploiements via conteneurs Docker et CI/CD.",},
            {title: "Monitoring et observabilité", description: "Les applications sont surveillées avec Prometheus et Grafana pour suivre les performances et détecter les anomalies.",},
        ],
    },
    projects: {
        title: "Projets de développement",
        items: [
            {
                title: "SkinTrack — Application mobile de suivi de routines de soin",
                description:
                    "SkinTrack est une application mobile de suivi des routines de soin et de bien-être. Elle est développée en React Native (Expo) avec une architecture claire et un design system basé sur NativeWind.",
                image: skinTrackProjectImage,
                codeUrl: "https://github.com/chloecasali/SkinTrack",
                tags: ["React Native", "Expo", "TypeScript", "NativeWind"],
            },
            {
                title: "API d’authentification et gestion des utilisateurs sécurisée",
                description:
                    "API dédiée à l’authentification et à la gestion des utilisateurs de SkinTrack. Elle permet de sécuriser l’accès aux ressources grâce à des mécanismes d’authentification (JWT) et une gestion structurée des comptes.",
                image: authProjectImage,
                codeUrl: "https://github.com/chloecasali/auth",
                tags: ["Symfony", "API Platform", "JWT Authentication", "PostgreSQL"],
            },
        ],
    },
    contact: {
        title: "Restons en contact",
        description: "Vous avez un projet en tête ? Construisons-le ensemble.",
        nameLabel: "Votre nom",
        emailLabel: "Adresse e-mail",
        messageLabel: "Votre message",
        namePlaceholder: "Jean Dupont",
        emailPlaceholder: "bonjour@example.com",
        companyPlaceholder: "Exemple Inc.",
        messagePlaceholder: "Parlez-moi de votre projet...",
        nameRequired: "Le nom est requis",
        emailRequired: "L'adresse e-mail est requise",
        emailInvalid: "Adresse e-mail invalide",
        messageRequired: "Le message est requis",
        success: "Message envoyé avec succès. Je reviens vers vous rapidement.",
    },
    final: {
        title: "Merci",
        subtitle: "Créons quelque chose ensemble.",
    },
    ui: {
        loading: "Chargement",
        scroll: "Défiler",
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
} satisfies SiteContent;

export default fr;
