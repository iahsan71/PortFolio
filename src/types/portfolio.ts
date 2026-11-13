import { StaticImageData } from "next/image";

export interface PersonalInfo {
    name: string;
    initials: string;
    title: string;
    company: string;
    companyUrl: string;
    experienceYears: string;
    location: string;
    availability: string;
    bio: string;
    shortBio: string;
    shortRole?: string;
    longBio?: string;
    stats?: AchievementMetric[];
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    formspreeEndpoint: string;
}

export interface AchievementMetric {
    value: string;
    numeric: number;
    suffix: string;
    label: string;
    description: string;
}

export interface SkillCategory {
    category: string;
    description: string;
    skills: string[];
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
}

export interface ProjectChallenge {
    challenge: string;
    solution: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    categoryTag: string;
    status: string;
    badge: string;
    shortDescription: string;
    fullDescription: string;
    image: StaticImageData | string;
    featured: boolean;
    projectNumber: string;
    ownership: "Personal Project" | "Company Project";
    hasAiTag?: boolean;
    liveUrl: string | null;
    githubUrl: string | null;
    client: string;
    timeline: string;
    role: string;
    technologies: string[];
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
    challenges: ProjectChallenge[];
    results: string;
}

export interface Award {
    year: string;
    title: string;
    issuer: string;
    description: string;
}

export interface Education {
    period: string;
    degree: string;
    institution: string;
    description: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface Article {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    summary: string;
    coverImage: string;
    tags: string[];
    content: string;
}

export interface NavItem {
    id: string;
    label: string;
    type: "scroll" | "link";
    href?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

