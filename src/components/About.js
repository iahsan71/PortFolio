"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Target, Users, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
    const highlights = [
        {
            icon: <Code2 size={24} />,
            title: "MERN Development",
            description: "End-to-end full-stack architectures using MongoDB, Express, React, and Node.js."
        },
        {
            icon: <Cpu size={24} />,
            title: "Clean Architecture",
            description: "Designing modular, maintainable, and scalable applications with clean code patterns."
        },
        {
            icon: <Zap size={24} />,
            title: "High Performance",
            description: "Optimizing API response times, database queries, and frontend rendering metrics."
        },
        {
            icon: <Target size={24} />,
            title: "Problem Solver",
            description: "Resolving complex technical bugs and architecture challenges with optimized solutions."
        },
        {
            icon: <Users size={24} />,
            title: "Team Player",
            description: "Collaborating in Agile environments, participating in code reviews, and mentoring."
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Robust Security",
            description: "Implementing industry-standard JWT authentication and role-based access control."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="about" className="about" style={{ position: "relative" }}>
            <div className="container-custom">
                <SectionHeader 
                    title="About" 
                    highlight="Me" 
                    subtitle="My Professional Journey & Mindset as a MERN Stack Developer" 
                />

                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="about-text"
                        >
                            <motion.h3 variants={itemVariants} style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                                Engineering Scalable MERN Stack Web Applications
                            </motion.h3>
                            
                            <motion.p variants={itemVariants} style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                I'm <strong>Ahsan Afzal</strong>, a professional MERN Stack Developer at <strong>NextPak Agile Solutions</strong>. 
                                My development journey is fueled by a passion for creating reliable backends, highly interactive and elegant frontends, 
                                and writing clean, scalable code.
                            </motion.p>
                            
                            <motion.p variants={itemVariants} style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                Working professionally on production projects, I build REST APIs using Node.js/Express, 
                                design optimized MongoDB databases, and develop dynamic responsive client architectures using React.js, Next.js, and TypeScript. 
                                I focus heavily on security integrations (such as JWT/OAuth) and optimizing Core Web Vitals to deliver a superior user experience.
                            </motion.p>

                            <motion.p variants={itemVariants} style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                I thrive in fast-paced Agile environments, leveraging version control (Git/GitHub) and participating in 
                                continuous integration pipelines. I believe that engineering goes beyond coding—it's about collaboration, 
                                precise problem solving, and understanding the user's needs to build systems that scale.
                            </motion.p>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="row g-4"
                        >
                            {highlights.map((highlight, index) => (
                                <div key={index} className="col-md-6">
                                    <motion.div
                                        variants={itemVariants}
                                        className="highlight-card p-4 rounded-4"
                                        style={{
                                            background: "var(--card-bg)",
                                            border: "1px solid var(--border-color)",
                                            backdropFilter: "blur(10px)",
                                            transition: "var(--transition-smooth)",
                                            height: "100%"
                                        }}
                                        whileHover={{
                                            y: -5,
                                            borderColor: "var(--accent-primary)",
                                            boxShadow: "var(--shadow-glow)"
                                        }}
                                    >
                                        <div 
                                            className="icon-container mb-3 d-inline-flex align-items-center justify-content-center p-2 rounded-3"
                                            style={{
                                                background: "rgba(59, 130, 246, 0.1)",
                                                color: "var(--accent-primary)"
                                            }}
                                        >
                                            {highlight.icon}
                                        </div>
                                        <h4 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                                            {highlight.title}
                                        </h4>
                                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                                            {highlight.description}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;