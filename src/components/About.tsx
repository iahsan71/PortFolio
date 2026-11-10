"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, ShieldCheck, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

interface Pillar {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const About: React.FC = () => {
    const pillars: Pillar[] = [
        {
            icon: <Code2 size={20} />,
            title: "MERN Stack Specialist",
            description: "Deep expertise across React.js, Next.js, Node.js, Express, and MongoDB architectures."
        },
        {
            icon: <Database size={20} />,
            title: "Database Performance",
            description: "Designing aggregation pipelines, compound indexing, and reducing query latency by up to 45%."
        },
        {
            icon: <ShieldCheck size={20} />,
            title: "Security & Authentication",
            description: "Implementing bulletproof JWT token flows, HTTP-only session cookies, and RBAC controls."
        },
        {
            icon: <Sparkles size={20} />,
            title: "AI-Augmented Velocity",
            description: "Accelerating feature development using Cursor, Claude Code, and prompt engineering."
        }
    ];

    return (
        <section id="about" style={{ padding: "6rem 1.25rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Reference Section Header: 01 —— ABOUT */}
                <SectionHeader
                    number="01"
                    tag="ABOUT"
                    title="About"
                    subtitle="A look into my development philosophy, daily engineering practices, and core strengths."
                />

                <div className="row g-5 align-items-start">
                    {/* Left Column: Narrative Story */}
                    <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1.05rem", color: "var(--m-muted)", lineHeight: 1.7 }}
                        >
                            <p>
                                I'm <strong style={{ color: "var(--m-text)" }}>{personalInfo.name}</strong>, a Senior MERN Stack Developer at <strong style={{ color: "var(--m-text)" }}>{personalInfo.company}</strong> with over 3 years of hands-on experience delivering production web platforms.
                            </p>
                            <p>
                                I specialize in building end-to-end architectures—from schema design and aggregation pipelines in MongoDB to secure RESTful Express/Node backends and highly responsive, accessible React/Next.js client applications.
                            </p>
                            <p>
                                I've contributed directly to enterprise-grade platforms including <strong style={{ color: "var(--m-text)" }}>NextAssist AI</strong>, <strong style={{ color: "var(--m-text)" }}>Nexa</strong>, and <strong style={{ color: "var(--m-text)" }}>Tealpot</strong>. Beyond writing code, I care deeply about system reliability, micro-interactions, API security, and optimizing Core Web Vitals.
                            </p>

                            <div style={{ paddingTop: "1rem" }}>
                                <Link href="/about" className="m-btn-secondary" style={{ display: "inline-flex" }}>
                                    <span>Read full story & background</span>
                                    <ArrowRight size={15} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Architectural Pillars */}
                    <div className="col-lg-6">
                        <div className="row g-3">
                            {pillars.map((pillar, idx) => (
                                <div key={idx} className="col-sm-6">
                                    <motion.div
                                        className="m-card h-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ padding: "1.25rem" }}
                                    >
                                        <div
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "10px",
                                                background: "rgba(59, 130, 246, 0.1)",
                                                color: "var(--m-accent)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "1rem"
                                            }}
                                        >
                                            {pillar.icon}
                                        </div>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.5rem" }}>
                                            {pillar.title}
                                        </h3>
                                        <p style={{ fontSize: "0.875rem", color: "var(--m-muted)", margin: 0, lineHeight: 1.5 }}>
                                            {pillar.description}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

