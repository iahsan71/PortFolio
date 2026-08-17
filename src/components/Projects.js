"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { 
    ExternalLink, 
    Github, 
    Search, 
    ArrowRight, 
    X, 
    ChevronLeft, 
    ChevronRight,
    Lock,
    Layers,
    AlertTriangle,
    Eye
} from "lucide-react";

import nextassistImg from "../assets/img/nextassist.png";
import nexaImg from "../assets/img/nexa.png";
import lordshubImg from "../assets/img/lordshub.png";
import vooteeImg from "../assets/img/vootee.png";
import tealpotImg from "../assets/img/tealpot.png";
import portfolioImg from "../assets/img/portfolio.png";

const Projects = () => {
    const [projectType, setProjectType] = useState("professional"); // professional or personal
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const professionalProjects = [
        {
            id: "prof-1",
            title: "NextAssist AI",
            description: "A premium business automation & customer ticket routing system with interactive graphs and live customer booking dashboard.",
            longDescription: "NextAssist AI is an enterprise-scale application built to automate customer bookings and inquiries. The system features role-based access control, analytics panels with charts, user access logs, and real-time chat modules. I contributed to full-stack implementation, REST APIs, query optimization, and Socket.io notifications.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Socket.io", "Tailwind CSS"],
            images: [nextassistImg],
            responsibilities: "Designed frontend dashboard components, implemented core REST API routers, optimized MongoDB pipelines, and resolved notification lag.",
            challenges: "Large analytics datasets caused database aggregation slowdowns. Resolved by writing custom indices and utilizing pipeline projections.",
            features: [
                "Real-time ticket chat",
                "Role-based permissions",
                "Graphical analytics dashboard",
                "Automatic email scheduling"
            ],
            architecture: "Centralized Redux client coupled with Node/Express REST API controllers and MongoDB.",
            status: "Completed & Deployed",
            isPrivate: false,
            liveUrl: "https://nextassistai.nextpak.org/"
        },
        {
            id: "prof-2",
            title: "Nexa",
            description: "AI-powered hiring and training platform that helps companies source, screen, and evaluate candidates.",
            longDescription: "Nexa is an AI-powered hiring and training platform that helps companies source, screen, and evaluate candidates through resume parsing and AI-driven job-fit scoring.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "React Query"],
            images: [nexaImg],
            responsibilities: "Created the JWT security flow, set up database validation models, and built responsive React.js interfaces integrated with backend APIs.",
            challenges: "Card transitions on the sprint board caused state conflicts under high concurrency. Solved by writing optimistic state cache updates.",
            features: [
                "Resume parsing module",
                "AI-driven job-fit scoring",
                "Candidate screening dash",
                "Secure REST API routers"
            ],
            architecture: "React.js frontend with Node.js/Express.js backend.",
            status: "Completed & Deployed",
            isPrivate: false,
            liveUrl: "https://trynexa.com/"
        },
        {
            id: "prof-4",
            title: "Tealpot",
            description: "On-demand services marketplace connecting customers with vetted local professionals for short-term jobs.",
            longDescription: "Tealpot is an on-demand services marketplace connecting customers with vetted local professionals for short-term jobs — covering service listings, work orders, and secure hiring.",
            technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            images: [tealpotImg],
            responsibilities: "Collaborated on database structure, full stack modules, listings, work orders, and secure hiring flows.",
            challenges: "Matching algorithms under heavy workloads faced search query slowdowns. Resolved by writing custom index rules.",
            features: [
                "Service listings directory",
                "Work order generation",
                "Secure hiring checkout",
                "Real-time notifications"
            ],
            architecture: "Next.js stack connecting backend REST APIs and MongoDB.",
            status: "Completed & Deployed",
            isPrivate: false,
            liveUrl: "https://tealpot.com/"
        },
        {
            id: "prof-3",
            title: "Vootee",
            description: "A secure digital voting and polls portal featuring live charts and custom voting workspaces.",
            longDescription: "Vootee is a real-time online polling platform supporting active security validations to prevent double voting, live vote tally charts, and custom workspaces.",
            technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Chart.js"],
            images: [vooteeImg],
            responsibilities: "Built live charting components and implemented voter IP/session double-vote protection logic.",
            challenges: "High traffic during concurrent polls caused minor latency. Solved by tuning Socket.io transport structures and connection clustering.",
            features: [
                "Live visual vote charts",
                "Anti-fraud double-voting checks",
                "Shareable public poll links",
                "Admin management panel"
            ],
            architecture: "React frontend coupled with Socket.io real-time event routers.",
            status: "Completed & Deployed",
            isPrivate: false,
            liveUrl: "https://vootee.com/"
        }
    ];

    const personalProjects = [
        {
            id: "pers-1",
            title: "Lord's Hub",
            description: "A full-stack gaming marketplace for accounts, gems, diamonds, and automated bots.",
            longDescription: "Lord's Hub is a full-stack marketplace for buying and selling verified Lords Mobile accounts, gems, diamonds, and automated bot services (war, rein, KVK, and farm/bank bots). Built with a React/Next.js frontend and backend.",
            technologies: ["Next.js", "Firebase", "CSS3", "JavaScript"],
            images: [lordshubImg],
            liveUrl: "https://lordshub.com/",
            githubUrl: "https://github.com/iahsan71",
            challenges: "Syncing third-party game status APIs caused request limit blocks. Solved by writing an intermediary cron job cache fetcher.",
            learnings: "Improved familiarity with Firestore schemas and client authentication listener states.",
            features: [
                "Verified account listings",
                "Automated game bots checkout",
                "Real-time game status tracking",
                "Secure user transaction panels"
            ],
            developmentProcess: "Designed views in Figma, structured modules in React, and linked backend services through Firebase SDK.",
            status: "Completed & Deployed",
            isPrivate: false
        },
        {
            id: "pers-2",
            title: "Portfolio Website v2",
            description: "A premium modern developer portfolio showcasing full stack skill sets, dark mode, command palette, and smooth animations.",
            longDescription: "Designed to reflect premium developer profiles, this website features micro-interactions, responsive grids, dark/light theme switcher, a command palette search console, and smooth transitions.",
            technologies: ["Next.js", "Framer Motion", "SCSS", "Firebase Hosting", "Lucide Icons"],
            images: [portfolioImg],
            liveUrl: "https://github.com/iahsan71/PortFolio",
            githubUrl: "https://github.com/iahsan71/PortFolio",
            challenges: "Canvas particles caused minor layout delays on mobile view. Addressed by scaling down particles based on device dimensions.",
            learnings: "Mastered Framer Motion layout animations and optimized SCSS compilation structures.",
            features: [
                "Command Palette search overlay",
                "Framer Motion page transition triggers",
                "Responsive layouts",
                "Interactive Skill widgets"
            ],
            developmentProcess: "Built from a custom React boiler template, designed using SCSS and Framer Motion, and deployed using Firebase CLI.",
            status: "Completed",
            isPrivate: false
        }
    ];

    const currentProjects = projectType === "professional" ? professionalProjects : personalProjects;

    const filteredProjects = currentProjects.filter(project => {
        const query = searchQuery.toLowerCase();
        return (
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.technologies.some(tech => tech.toLowerCase().includes(query))
        );
    });

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="projects" className="projects" style={{ position: "relative" }}>
            <div className="container-custom">
                <SectionHeader 
                    title="Featured" 
                    highlight="Projects" 
                    subtitle="Explore both professional work and personal passion projects" 
                />

                {/* Filters and Search Bar */}
                <div className="project-filters-bar">
                    <div className="project-filter-buttons">
                        <button 
                            className={`filter-btn ${projectType === "professional" ? "active" : ""}`}
                            onClick={() => setProjectType("professional")}
                        >
                            Professional Work
                        </button>
                        <button 
                            className={`filter-btn ${projectType === "personal" ? "active" : ""}`}
                            onClick={() => setProjectType("personal")}
                        >
                            Personal Projects
                        </button>
                    </div>

                    <div className="project-search-input">
                        <Search size={18} />
                        <input 
                            type="text" 
                            placeholder="Search by title or tech stack..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <motion.div 
                    className="projects-grid"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
                                hover: { 
                                    borderColor: "rgba(59, 130, 246, 1)", 
                                    boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.25)",
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }
                            }}
                            layout
                            whileHover="hover"
                            onClick={() => openModal(project)}
                            style={{ 
                                cursor: "pointer", 
                                background: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                transition: "border-color 0.3s, box-shadow 0.3s"
                            }}
                        >
                            <div className="project-image" style={{ position: "relative", height: "220px", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
                                <motion.img 
                                    src={typeof project.images[0] === 'object' && project.images[0] !== null ? project.images[0].src : project.images[0]} 
                                    alt={project.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    variants={{
                                        hover: { scale: 1.06 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                                {project.isPrivate && (
                                    <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(10, 10, 11, 0.75)", backdropFilter: "blur(4px)", padding: "4px 10px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "6px", border: "1px solid var(--border-color)", zIndex: 3 }}>
                                        <Lock size={12} color="#f59e0b" />
                                        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#f59e0b" }}>NDA / Company</span>
                                    </div>
                                )}
                                <div className="hover-overlay hover-overlay-effect" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(10, 10, 11, 0.4)", opacity: 0, transition: "0.3s", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                                    <div className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <Eye size={16} /> View Details
                                    </div>
                                </div>
                            </div>

                            <div className="project-info" style={{ padding: "1.5rem" }}>
                                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-primary)" }}>{project.title}</h3>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.25rem", minHeight: "50px", lineHeight: "1.5" }}>
                                    {project.description}
                                </p>
                                
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <motion.span 
                                            key={i} 
                                            style={{ fontSize: "0.75rem", background: "var(--glass-bg)", border: "1px solid var(--border-color)", color: "var(--text-secondary)", padding: "2px 8px", borderRadius: "4px", fontFamily: "var(--font-mono)", display: "inline-block" }}
                                            whileHover={{ scale: 1.05, borderColor: "var(--accent-secondary)", color: "var(--text-primary)" }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span style={{ fontSize: "0.75rem", color: "var(--accent-primary)", padding: "2px 4px", fontWeight: 600 }}>
                                            +{project.technologies.length - 4} more
                                        </span>
                                    )}
                                </div>

                                <div className="d-flex align-items-center gap-2" style={{ color: "var(--accent-primary)", fontWeight: 600, fontSize: "0.9rem" }}>
                                    <span>View details</span>
                                    <motion.span variants={{ hover: { x: 5 } }} transition={{ duration: 0.2 }}>
                                        <ArrowRight size={14} />
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-5">
                        <AlertTriangle className="mx-auto mb-3" size={36} style={{ color: "var(--text-muted)" }} />
                        <h3 style={{ color: "var(--text-primary)" }}>No projects found</h3>
                        <p style={{ color: "var(--text-secondary)" }}>Try modifying your search query.</p>
                    </div>
                )}
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="modal-backdrop-custom" onClick={() => setSelectedProject(null)}>
                        <motion.div 
                            className="modal-content-custom" 
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                        >
                            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                                <X size={20} />
                            </button>

                            <div className="modal-body-custom">
                                {/* Image Carousel */}
                                <div className="modal-carousel">
                                    <img 
                                        src={typeof selectedProject.images[currentImageIndex] === 'object' && selectedProject.images[currentImageIndex] !== null ? selectedProject.images[currentImageIndex].src : selectedProject.images[currentImageIndex]} 
                                        alt={`${selectedProject.title} screenshot`} 
                                    />
                                    
                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button className="carousel-nav-btn prev" onClick={prevImage}>
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button className="carousel-nav-btn next" onClick={nextImage}>
                                                <ChevronRight size={20} />
                                            </button>
                                            
                                            <div className="carousel-indicators">
                                                {selectedProject.images.map((_, i) => (
                                                    <div 
                                                        key={i} 
                                                        className={`indicator ${i === currentImageIndex ? "active" : ""}`}
                                                        onClick={() => setCurrentImageIndex(i)}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Title & Stats */}
                                <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
                                    <div>
                                        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                                            {selectedProject.title}
                                        </h2>
                                        <span className="gradient-text" style={{ fontSize: "0.9rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                                            Status: {selectedProject.status}
                                        </span>
                                    </div>
                                    
                                    <div className="d-flex gap-2">
                                        {!selectedProject.isPrivate ? (
                                            <>
                                                {selectedProject.githubUrl && (
                                                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "8px 16px" }}>
                                                        <Github size={16} /> Code
                                                    </a>
                                                )}
                                                {selectedProject.liveUrl && (
                                                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "8px 16px" }}>
                                                        <ExternalLink size={16} /> Live Demo
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "8px 16px", background: "var(--glass-bg)", border: "1px solid var(--border-color)", borderRadius: "8px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                                                <Lock size={16} color="#f59e0b" /> NDA Restricted
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="mb-4">
                                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <Layers size={16} style={{ color: "var(--accent-primary)" }} /> Tech Stack
                                    </h4>
                                    <div className="d-flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                style={{ fontSize: "0.8rem", background: "var(--glass-bg)", border: "1px solid var(--border-color)", color: "var(--text-secondary)", padding: "4px 10px", borderRadius: "6px", fontFamily: "var(--font-mono)" }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Full Details Content */}
                                <div className="row g-4">
                                    <div className="col-12 col-md-7">
                                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Project Overview</h4>
                                        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                                            {selectedProject.longDescription}
                                        </p>

                                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Key Features</h4>
                                        <ul style={{ paddingLeft: "1.25rem", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                            {selectedProject.features.map((feature, i) => (
                                                <li key={i} style={{ marginBottom: "0.25rem" }}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="col-12 col-md-5">
                                        {selectedProject.isPrivate ? (
                                            <>
                                                <div className="p-4 rounded-4 mb-3" style={{ background: "var(--glass-bg)", border: "1px solid var(--border-color)" }}>
                                                    <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>My Responsibilities</h5>
                                                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                                                        {selectedProject.responsibilities}
                                                    </p>
                                                </div>

                                                <div className="p-4 rounded-4" style={{ background: "var(--glass-bg)", border: "1px solid var(--border-color)" }}>
                                                    <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Architecture</h5>
                                                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                                                        {selectedProject.architecture}
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="p-4 rounded-4 mb-3" style={{ background: "var(--glass-bg)", border: "1px solid var(--border-color)" }}>
                                                    <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Development Process</h5>
                                                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                                                        {selectedProject.developmentProcess}
                                                    </p>
                                                </div>

                                                <div className="p-4 rounded-4" style={{ background: "var(--glass-bg)", border: "1px solid var(--border-color)" }}>
                                                    <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Key Learnings</h5>
                                                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                                                        {selectedProject.learnings}
                                                    </p>
                                                </div>
                                            </>
                                        )}

                                        <div className="p-4 rounded-4 mt-3" style={{ background: "var(--glass-bg)", border: "1px solid var(--border-color)" }}>
                                            <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Challenges Solved</h5>
                                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                                                {selectedProject.challenges}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            
            <style>{`
                .project-card:hover .hover-overlay {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;