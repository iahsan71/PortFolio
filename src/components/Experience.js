"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Experience = () => {
    const experiences = [
        {
            date: "March 2025 - Present",
            role: "MERN Stack Developer",
            company: "NextPak Agile Solutions",
            description: "Architecting and building full-stack applications end-to-end — from MongoDB schema design through REST API development to responsive React/Next.js interfaces.",
            details: [
                "Architect and build client products including NextAssist AI, Tealpot, and Nexa.",
                "Design and implement secure JWT-based authentication and authorization flows to protect routes and user sessions.",
                "Build admin dashboards and internal tools giving teams control over application data and content.",
                "Diagnose/resolve full-stack bugs and refactor existing codebases to improve performance, maintainability, and UI consistency.",
                "Collaborate cross-functionally in an agile environment using Git-based workflows.",
                "Integrate AI coding assistants (GitHub Copilot, Cursor, Kiro, Antigravity, ChatGPT, Claude) with prompt engineering."
            ]
        },
        {
            date: "2022 - 2025",
            role: "Full Stack Developer / Freelancer",
            company: "Freelancing",
            description: "Built custom MERN stack applications, gaming marketplaces, and responsive frontend portals for diverse clients.",
            details: [
                "Independently designed, built, and launched Lord's Hub (gaming marketplace platform).",
                "Transformed complex Figma views into responsive HTML/CSS/React layouts.",
                "Leveraged Firebase databases and cloud systems for high scale request handling.",
                "Integrated third-party APIs and created custom data caching scripts."
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const cardVariantsLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const cardVariantsRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="experience" className="experience" style={{ position: "relative", overflow: "hidden" }}>
            <div className="container-custom">
                <SectionHeader 
                    title="Work" 
                    highlight="Experience" 
                    subtitle="My career path and professional growth in software development" 
                />

                <motion.div 
                    className="experience-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, idx) => {
                        const isEven = idx % 2 === 0;
                        const cardVariants = isEven ? cardVariantsLeft : cardVariantsRight;
                        
                        return (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-dot" />
                                <motion.div 
                                    className="timeline-card"
                                    variants={cardVariants}
                                >
                                    <div className="d-flex align-items-center gap-2 timeline-date">
                                        <Calendar size={14} />
                                        <span>{exp.date}</span>
                                    </div>
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <h4 className="timeline-company">{exp.company}</h4>
                                    <p className="timeline-desc">{exp.description}</p>
                                    
                                    <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 0 0", color: "var(--text-secondary)", listStyleType: "none" }}>
                                        {exp.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="d-flex align-items-start gap-2 mb-2" style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
                                                <CheckCircle size={14} style={{ color: "var(--accent-primary)", marginTop: "3px", flexShrink: 0 }} />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
