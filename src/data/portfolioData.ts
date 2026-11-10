import nextassistImg from "../assets/img/nextassist.png";
import nexaImg from "../assets/img/nexa.png";
import lordshubImg from "../assets/img/lordshub.png";
import vooteeImg from "../assets/img/vootee.png";
import tealpotImg from "../assets/img/tealpot.png";
import portfolioImg from "../assets/img/portfolio.png";
import {
    PersonalInfo,
    AchievementMetric,
    SkillCategory,
    Experience,
    Project,
    Award,
    Education,
    Language,
    NavItem
} from "../types/portfolio";

export const personalInfo: PersonalInfo & { shortRole: string; longBio: string; stats: AchievementMetric[] } = {
    name: "Ahsan Afzal",
    initials: "AA",
    title: "Senior MERN Stack & Full-Stack Engineer",
    shortRole: "MERN Stack Developer",
    company: "NextPak Agile Solutions",
    companyUrl: "https://nextpak.org",
    experienceYears: "3+",
    location: "Pakistan",
    availability: "Available for work",
    bio: "I build high-performance full-stack web applications, scalable REST APIs, and responsive digital products with MongoDB, Express.js, React, Next.js, and Node.js.",
    shortBio: "Senior MERN Stack Engineer architecting robust digital platforms.",
    longBio: "I am a results-driven MERN Stack Developer with 3+ years of professional experience engineering resilient web architectures. At NextPak Agile Solutions, I lead and contribute to production products including NextAssist AI, Tealpot, and Nexa. I specialize in designing end-to-end full-stack systems, optimizing database pipelines, securing user authentication flows, and crafting delightful, responsive user interfaces.",
    email: "imahsan000@gmail.com",
    phone: "+92 349 3082202",
    whatsapp: "+92 349 3082202",
    resumeUrl: "/Ahsan_Afzal_Resume.pdf",
    github: "https://github.com/iahsan71",
    linkedin: "https://www.linkedin.com/in/dev-ahsanafzal/",
    formspreeEndpoint: "https://formspree.io/f/xzzbojvp",
    stats: [
        { value: "3+", numeric: 3, suffix: "+", label: "Years Experience", description: "Delivering production-grade full-stack web software" },
        { value: "25+", numeric: 25, suffix: "+", label: "Projects Completed", description: "From enterprise platforms to SaaS products" },
        { value: "30+", numeric: 30, suffix: "+", label: "Technologies Mastered", description: "Across modern frontend, backend, databases, and AI tooling" },
        { value: "15+", numeric: 15, suffix: "+", label: "Clients Served", description: "International clients and agile product teams" },
    ]
};

export interface SkillItem {
    name: string;
    level: number;
}

export interface SkillGroup {
    title: string;
    skills: SkillItem[];
}

export const skillsData: { categories: SkillGroup[]; marquee: string[] } = {
    categories: [
        {
            title: "Frontend Engineering",
            skills: [
                { name: "React.js", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "JavaScript (ES6+)", level: 95 },
                { name: "TypeScript", level: 88 },
                { name: "HTML5 / Semantic UI", level: 95 },
                { name: "Tailwind CSS", level: 92 },
                { name: "SCSS / CSS3", level: 90 },
                { name: "Redux Toolkit", level: 90 },
                { name: "React Query", level: 85 },
                { name: "Bootstrap & MUI", level: 88 }
            ]
        },
        {
            title: "Backend & APIs",
            skills: [
                { name: "Node.js", level: 92 },
                { name: "Express.js", level: 92 },
                { name: "RESTful API Design", level: 95 },
                { name: "Socket.io (Real-time)", level: 86 },
                { name: "JWT & OAuth Security", level: 90 },
                { name: "Middleware Architecture", level: 90 },
                { name: "Microservices Concepts", level: 82 }
            ]
        },
        {
            title: "Databases & Cloud",
            skills: [
                { name: "MongoDB & Mongoose", level: 90 },
                { name: "Aggregation Pipelines", level: 88 },
                { name: "Firebase (Firestore, Auth)", level: 88 },
                { name: "Redis Caching", level: 80 },
                { name: "Vercel & Netlify", level: 90 },
                { name: "Firebase Hosting", level: 90 }
            ]
        },
        {
            title: "AI Tools & Dev Ecosystem",
            skills: [
                { name: "Cursor AI & Copilot", level: 95 },
                { name: "Claude Code & ChatGPT", level: 95 },
                { name: "Antigravity & Kiro", level: 92 },
                { name: "Prompt Engineering", level: 92 },
                { name: "Git & GitHub CI/CD", level: 92 },
                { name: "Postman API Testing", level: 92 },
                { name: "Performance & SEO Optimization", level: 88 }
            ]
        }
    ],
    marquee: [
        "React.js", "Next.js 14", "Node.js", "Express.js", "MongoDB", "TypeScript",
        "JavaScript", "Redux Toolkit", "Socket.io", "Tailwind CSS", "Firebase",
        "JWT Auth", "REST APIs", "Cursor AI", "Claude Code", "Git", "GitHub", "Postman", "SCSS"
    ]
};

export const experiencesData: Experience[] = [
    {
        period: "March 2025 — Present",
        role: "Senior MERN Stack Developer",
        company: "NextPak Agile Solutions",
        location: "Pakistan (Hybrid)",
        type: "Full-time",
        description: "Architecting and engineering end-to-end full-stack web applications, REST APIs, and database schemas for flagship client platforms.",
        responsibilities: [
            "Architected full-stack modules for flagship products including NextAssist AI, Tealpot, and Nexa.",
            "Designed and implemented robust JWT-based session security and role-based permissions preventing unauthorized endpoint access.",
            "Built interactive analytical telemetry dashboards with real-time websocket metrics and data visualization.",
            "Refactored high-load MongoDB database pipelines with compound indexing, reducing query response times by up to 45%.",
            "Accelerated feature velocity using modern AI developer tooling (Cursor AI, Claude Code, Antigravity) with structured prompt engineering."
        ],
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "Redux Toolkit"]
    },
    {
        period: "2022 — 2025",
        role: "Full Stack Developer & Independent Freelancer",
        company: "Self-Employed / Freelance",
        location: "Remote",
        type: "Contract",
        description: "Designed, engineered, and delivered custom web platforms, e-commerce portals, and marketplace solutions for international clients.",
        responsibilities: [
            "Independently designed, developed, and deployed Lord's Hub—a comprehensive gaming marketplace for accounts and automated bot services.",
            "Integrated Firebase real-time databases and custom serverless functions handling concurrent transactions.",
            "Created responsive pixel-perfect frontends translating complex Figma and UI wireframes into modular React code.",
            "Maintained high client satisfaction ratings through structured communication, rigorous API testing, and timely delivery."
        ],
        technologies: ["React.js", "Next.js", "JavaScript", "Firebase", "Node.js", "CSS3 / SCSS", "REST APIs"]
    }
];

export const projectsData: Project[] = [
    {
        id: "prof-1",
        slug: "nextassist-ai",
        title: "NextAssist AI",
        category: "AI Products",
        categoryTag: "AI PRODUCT",
        status: "LIVE",
        badge: "PRODUCTION",
        shortDescription: "Enterprise business automation and ticket routing platform with real-time analytics graphs, AI-assisted triage, and live customer booking dashboard.",
        fullDescription: "NextAssist AI is an enterprise-grade platform engineered to streamline customer inquiry routing, automated triage, and live support operations. Built with a scalable MERN stack and real-time Socket.io communication, it gives support teams and managers comprehensive analytics, granular role permissions, and instant ticket sync.",
        image: nextassistImg,
        featured: true,
        projectNumber: "01",
        liveUrl: "https://nextassistai.nextpak.org/",
        githubUrl: null,
        client: "NextPak Agile Solutions",
        timeline: "2025 — Present",
        role: "Lead Full-Stack Developer",
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "Framer Motion"],
        problem: "Customer service departments faced crippling ticket backlogs due to manual assignment, lack of real-time collaboration, and slow database analytics.",
        solution: "Engineered an intelligent routing dashboard featuring automated ticket triage, live Socket.io updates across agent workspaces, and optimized aggregation pipelines.",
        architecture: "Modular multi-tier architecture with an Express REST API layer, MongoDB cluster with compound indexing, Socket.io clustering for bidirectional pub/sub, and Next.js on the client.",
        features: [
            "Real-time ticket dispatch and live agent presence monitoring via Socket.io",
            "Granular Role-Based Access Control (RBAC) across Agent, Lead, and SuperAdmin tiers",
            "Executive metrics telemetry visualizing average resolution time and resolution velocity",
            "Sub-50ms search and filter across tens of thousands of support records using MongoDB compound indexes",
            "Responsive administrative dashboard styled with Tailwind CSS and subtle micro-interactions"
        ],
        challenges: [
            {
                challenge: "High WebSocket connection churn under fluctuating client network conditions led to memory spikes.",
                solution: "Implemented heartbeat telemetry, automatic reconnect backoff with exponential jitter, and room-scoped event emission."
            },
            {
                challenge: "Complex analytics aggregations slowed down dashboard initial paint as ticket volumes scaled past 100K.",
                solution: "Redesigned aggregation pipelines with $facet and early $match projection, slashing execution time by 62%."
            }
        ],
        results: "Boosted team ticket resolution speed by 40% and eliminated duplicate customer escalations across all enterprise trial deployments."
    },
    {
        id: "prof-2",
        slug: "nexa",
        title: "Nexa",
        category: "AI Products",
        categoryTag: "RECRUITING SAAS",
        status: "LIVE",
        badge: "PRODUCTION",
        shortDescription: "Next-generation hiring and applicant tracking system featuring candidate profile scoring, interview pipeline stages, and resume parsing.",
        fullDescription: "Nexa is a modern applicant tracking system (ATS) crafted to eliminate friction in modern technical recruiting. It provides recruiters and hiring managers with candidate scoring, drag-and-drop pipeline management, and structured evaluation rubrics.",
        image: nexaImg,
        featured: true,
        projectNumber: "02",
        liveUrl: "https://trynexa.com/",
        githubUrl: null,
        client: "Nexa Technologies",
        timeline: "2025",
        role: "Full-Stack Engineer",
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
        problem: "Recruiting teams were overwhelmed by unstructured PDF resumes and disconnected spreadsheets, leading to lost applicants and slow hiring cycles.",
        solution: "Architected a unified recruitment SaaS that extracts candidate qualifications, computes fit scores, and provides an intuitive drag-and-drop candidate pipeline.",
        architecture: "Client-side React 18 interface with optimistic UI updates, backed by an Express REST API and a MongoDB document store with schema validation.",
        features: [
            "Candidate qualification summary and automated skill tag extraction",
            "Interactive sprint board for tracking applicants through review stages",
            "Encrypted JWT authentication with secure HTTP-only session cookies",
            "Team collaboration comments and candidate rating scorecards"
        ],
        challenges: [
            {
                challenge: "Kanban board card drag-and-drop state conflicts during concurrent recruiter evaluations.",
                solution: "Integrated optimistic UI mutations via React Query with server-side rollback guarantees."
            }
        ],
        results: "Decreased initial candidate screening time from 20 minutes to under 2 minutes per applicant."
    },
    {
        id: "prof-4",
        slug: "tealpot",
        title: "Tealpot",
        category: "Full-Stack",
        categoryTag: "MARKETPLACE",
        status: "LIVE",
        badge: "PRODUCTION",
        shortDescription: "On-demand local services marketplace connecting homeowners with vetted professionals for home maintenance, repair, and short-term jobs.",
        fullDescription: "Tealpot is a complete on-demand services marketplace platform connecting customers with vetted local professionals for short-term maintenance and technical repairs. It handles real-time listings, work orders, scheduling, and secure job confirmations.",
        image: tealpotImg,
        featured: true,
        projectNumber: "03",
        liveUrl: "https://tealpot.com/",
        githubUrl: null,
        client: "Tealpot Global",
        timeline: "2025",
        role: "Full-Stack Developer",
        technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        problem: "Homeowners needed a trustworthy, fast way to discover vetted local tradespeople, while service providers lacked a frictionless platform to manage bookings and invoices.",
        solution: "Built a high-performance Next.js web application featuring geolocation search, verified provider profiles, and transparent work order booking.",
        architecture: "Next.js App Router for server-rendered SEO and fast first-contentful paint, connected to Node.js microservices and an indexed MongoDB database.",
        features: [
            "Category and location-based contractor search with radius filtering",
            "Transparent work order generation and milestone tracking",
            "Provider verification badges and customer rating systems",
            "Real-time booking notification dispatch via SMS and email",
            "Responsive layout optimized for mobile-first home service bookings"
        ],
        challenges: [
            {
                challenge: "Spatial and category search queries slowed down when querying thousands of local provider entries.",
                solution: "Created 2dsphere compound indexing on MongoDB location coordinates, slashing query latency to sub-30ms."
            }
        ],
        results: "Powered hundreds of local service transactions across multiple cities with zero downtime."
    },
    {
        id: "prof-3",
        slug: "vootee",
        title: "Vootee",
        category: "Full-Stack",
        categoryTag: "SAAS PLATFORM",
        status: "LIVE",
        badge: "VERIFIED",
        shortDescription: "Secure real-time digital polling and voting portal featuring live SVG charts, anti-fraud vote protection, and custom team workspaces.",
        fullDescription: "Vootee is a real-time online voting and polling web app designed for communities, teams, and conferences. It guarantees voting integrity through multi-layer verification and provides instant visual feedback through interactive tally charts.",
        image: vooteeImg,
        featured: true,
        projectNumber: "04",
        liveUrl: "https://vootee.com/",
        githubUrl: null,
        client: "Vootee Inc.",
        timeline: "2024",
        role: "Frontend & Full-Stack Lead",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "SVG Charts", "CSS3"],
        problem: "Organizers lacked an easy, fraud-resistant voting tool that worked seamlessly on smartphones without mandatory heavy app downloads.",
        solution: "Built a lightweight progressive web app with instant QR code join flows, fingerprint vote de-duplication, and SVG bar charts that animate live as votes arrive.",
        architecture: "React frontend with SVG data visualizations, powered by an Express API with Redis-based de-duplication and MongoDB tally storage.",
        features: [
            "Instant poll creation with custom option cards and countdown timers",
            "Live vote aggregation with smooth SVG chart animations",
            "Multi-factor vote validation preventing duplicate entries",
            "Exportable voting audit logs and analytical summaries"
        ],
        challenges: [
            {
                challenge: "Rapid burst traffic during live event keynotes overwhelmed standard database write operations.",
                solution: "Buffered vote tallies in an in-memory Redis pipeline and flushed to MongoDB in batched transactions."
            }
        ],
        results: "Successfully hosted live polling across 50+ virtual community events with over 15,000 recorded ballots."
    },
    {
        id: "prof-5",
        slug: "lordshub",
        title: "Lord's Hub",
        category: "Client Work",
        categoryTag: "GAMING MARKETPLACE",
        status: "LIVE",
        badge: "DEPLOYED",
        shortDescription: "Specialized gaming marketplace and automation service portal with real-time transactional orders, inventory filters, and user profiles.",
        fullDescription: "Lord's Hub is a high-traffic gaming services marketplace built for competitive gamers. It provides authenticated order pipelines, real-time inventory listings, customer messaging, and automated delivery tracking.",
        image: lordshubImg,
        featured: true,
        projectNumber: "05",
        liveUrl: "https://lordshub.com/",
        githubUrl: "https://github.com/iahsan71",
        client: "Independent Gaming Community",
        timeline: "2023 — 2024",
        role: "Full-Stack Developer",
        technologies: ["React.js", "Next.js", "Firebase", "Node.js", "REST APIs", "SCSS"],
        problem: "Gamers relied on unvetted Discord direct messages for account services, suffering frequent payment fraud and zero order visibility.",
        solution: "Engineered a dedicated escrow marketplace featuring verified listing status, automated order progress stages, and direct support integration.",
        architecture: "React SPA deployed on Firebase Hosting with Firestore real-time synchronization and Cloud Functions for order state transitions.",
        features: [
            "Comprehensive product catalog with multi-attribute filtering (tier, rank, price)",
            "Real-time order status tracking from submission to fulfillment",
            "Integrated customer reviews, star ratings, and seller badges",
            "Responsive layout crafted with custom SCSS utility components"
        ],
        challenges: [
            {
                challenge: "Real-time synchronization of fast-moving inventory items caused unnecessary UI re-renders.",
                solution: "Implemented memoized selector hooks and targeted Firestore snapshot listeners scoped to active categories."
            }
        ],
        results: "Facilitated over $35,000 in peer-to-peer services with a 99.4% positive seller satisfaction rating."
    },
    {
        id: "prof-6",
        slug: "developer-portfolio",
        title: "Editorial Developer Portfolio",
        category: "Open Source",
        categoryTag: "PRODUCTION SYSTEM",
        status: "LIVE",
        badge: "OPEN SOURCE",
        shortDescription: "Bespoke high-performance developer portfolio featuring custom cursor dynamics, keyboard-accessible command palette, and editorial typography.",
        fullDescription: "The engineering behind this very portfolio. Designed to demonstrate production-grade Next.js 14 App Router capabilities, TypeScript architecture, fluid motion physics, and accessible semantic markup.",
        image: portfolioImg,
        featured: true,
        projectNumber: "06",
        liveUrl: "https://github.com/iahsan71/PortFolio",
        githubUrl: "https://github.com/iahsan71/PortFolio",
        client: "Ahsan Afzal (Personal)",
        timeline: "2026",
        role: "Software Architect & Engineer",
        technologies: ["Next.js 14", "TypeScript", "React 18", "Framer Motion", "SCSS", "Lucide React"],
        problem: "Most portfolio websites are generic templates that lack interactivity, keyboard accessibility, or genuine editorial depth.",
        solution: "Engineered a bespoke portfolio with custom cursor physics, an accessible command palette (Ctrl+K), and editorial layout hierarchy.",
        architecture: "Next.js App Router static site generation, SCSS design tokens, and modular React components.",
        features: [
            "Command Palette (Ctrl+K) for lightning-fast keyboard navigation",
            "Fluid responsive typography and accessible color contrast ratios",
            "Infinite smooth skills marquee with zero-jump looping",
            "Interactive case study routing for every major project"
        ],
        challenges: [
            {
                challenge: "Canvas background particles created CPU spikes on lower-end mobile devices.",
                solution: "Implemented hardware-accelerated CSS animations and disabled heavy particle rendering on mobile screens."
            }
        ],
        results: "Achieved 98+ Lighthouse scores across Performance, Accessibility, and SEO."
    }
];

export const awardsData: Award[] = [
    {
        year: "2025",
        title: "Outstanding Performance Award",
        issuer: "NextPak Agile Solutions",
        description: "Recognized for exceptional contribution in architecting NextAssist AI and improving backend performance."
    },
    {
        year: "2024",
        title: "Top Rated Full-Stack Developer",
        issuer: "Independent Freelance Network",
        description: "Achieved consistent 100% project completion rate and 5-star client ratings across MERN stack deliveries."
    },
    {
        year: "2023",
        title: "Certified MERN Stack Specialist",
        issuer: "Advanced Web Engineering Certification",
        description: "Comprehensive certification covering React, Node.js, Express, MongoDB architectures, and JWT security."
    }
];

export const educationData: Education[] = [
    {
        period: "2023 — 2027 (Expected)",
        degree: "Bachelor of Science in Information Technology (BS IT)",
        institution: "Virtual University of Pakistan",
        description: "Focused on Software Engineering, Data Structures & Algorithms, Database Systems, Web Technologies, and Network Security."
    }
];

export const languagesData: Language[] = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Urdu", level: "Native / Bilingual" },
    { name: "Punjabi", level: "Native" }
];

export const navItems: NavItem[] = [
    { id: "home", label: "Home", type: "scroll" },
    { id: "about", label: "About", type: "scroll" },
    { id: "skills", label: "Skills", type: "scroll" },
    { id: "experience", label: "Experience", type: "scroll" },
    { id: "projects", label: "Projects", type: "scroll" },
    { id: "work", label: "Work", type: "link", href: "/work" },
    { id: "contact", label: "Contact", type: "scroll" }
];

