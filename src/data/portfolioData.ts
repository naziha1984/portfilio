export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: "Naziha Jerou",
  title: "Développeuse Web | Passionnée par l'IA & l'expérience utilisateur",
  email: "jrnaziha@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Maroc",
  about: [
    "Développeuse web passionnée avec une expertise dans la création d'applications modernes et performantes. Je combine créativité et rigueur technique pour développer des solutions innovantes qui offrent une expérience utilisateur exceptionnelle.",
    "Spécialisée dans les technologies frontend et backend, je maîtrise React, Node.js et Flutter pour créer des applications cross-platform. Mon intérêt pour l'intelligence artificielle me pousse à intégrer des fonctionnalités intelligentes dans mes projets.",
    "Je suis constamment en quête d'apprentissage et de nouvelles technologies pour rester à la pointe de l'innovation. Mon objectif est de contribuer à des projets ambitieux et de faire partie d'équipes dynamiques qui partagent ma passion pour l'excellence technique."
  ],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant" },
    { name: "Arabe", level: "Natif" }
  ]
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "Next.js", level: 3, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express.js", level: 4, category: "backend" },
  { name: "Python", level: 3, category: "backend" },
  { name: "Django", level: 3, category: "backend" },
  
  // Mobile
  { name: "Flutter", level: 4, category: "mobile" },
  { name: "Dart", level: 4, category: "mobile" },
  
  // Database
  { name: "MongoDB", level: 4, category: "database" },
  { name: "PostgreSQL", level: 3, category: "database" },
  { name: "MySQL", level: 3, category: "database" },
  
  // Tools
  { name: "Git", level: 4, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "AWS", level: 2, category: "tools" },
  { name: "Figma", level: 3, category: "tools" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec gestion des produits, panier d'achat, système de paiement et tableau de bord administrateur.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo-ecommerce.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Application de gestion de tâches avec authentification, collaboration en temps réel et interface intuitive.",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
    githubUrl: "https://github.com",
    demoUrl: "https://task-app-demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Tableau de bord météo avec prévisions en temps réel, géolocalisation et interface responsive.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    githubUrl: "https://github.com",
    demoUrl: "https://weather-dashboard.com"
  },
  {
    id: 4,
    title: "Fitness Tracker Mobile",
    description: "Application mobile de suivi fitness avec synchronisation cloud, graphiques de progression et plans d'entraînement.",
    technologies: ["Flutter", "Dart", "Firebase", "Charts"],
    githubUrl: "https://github.com",
    demoUrl: "https://fitness-tracker.com"
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    description: "Assistant conversationnel intelligent intégrant l'IA pour répondre aux questions et fournir des recommandations.",
    technologies: ["Python", "OpenAI API", "Flask", "React"],
    githubUrl: "https://github.com",
    demoUrl: "https://ai-chat-demo.com"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Site portfolio professionnel avec design moderne, mode sombre et animations fluides.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    demoUrl: "https://naziha-portfolio.com"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Développeuse Full Stack",
    company: "Tech Solutions SARL",
    period: "2023 - Présent",
    description: "Développement d'applications web complètes, maintenance de bases de données et optimisation des performances.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 2,
    title: "Développeuse Frontend",
    company: "Digital Agency",
    period: "2022 - 2023",
    description: "Création d'interfaces utilisateur modernes et responsive pour divers clients.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"]
  },
  {
    id: 3,
    title: "Développeuse Mobile",
    company: "Startup Innovation",
    period: "2021 - 2022",
    description: "Développement d'applications mobiles cross-platform avec Flutter.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Master en Informatique",
    institution: "Université Hassan II",
    period: "2019 - 2021",
    description: "Spécialisation en développement web et applications mobiles"
  },
  {
    id: 2,
    degree: "Licence en Informatique",
    institution: "Université Mohammed V",
    period: "2016 - 2019",
    description: "Formation générale en informatique et programmation"
  },
  {
    id: 3,
    degree: "Certification AWS",
    institution: "Amazon Web Services",
    period: "2023",
    description: "AWS Certified Developer Associate"
  }
]; 