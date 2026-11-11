"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData, languagesData } from "../data/portfolioData";
import { GraduationCap, Languages } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Education: React.FC = () => {
    return (
        <section id="education" style={{ padding: "clamp(3.5rem, 7vw, 5rem) 1rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Reference Section Header: 06 —— EDUCATION */}
                <SectionHeader
                    number="06"
                    tag="EDUCATION"
                    title="Education"
                    subtitle="Academic degree in Computer Science from Virtual University of Pakistan and language proficiencies."
                />

                <div className="row g-4">
                    {/* Education Card */}
                    <div className="col-lg-7">
                        <motion.div
                            className="m-card h-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <GraduationCap size={20} style={{ color: "var(--m-accent)" }} />
                                <span
                                    className="font-mono-m"
                                    style={{
                                        fontSize: "0.8rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.18em",
                                        color: "var(--m-accent)"
                                    }}
                                >
                                    ACADEMIC DEGREE
                                </span>
                            </div>

                            {educationData.map((edu, idx) => (
                                <div key={idx}>
                                    <div className="font-mono-m mb-1" style={{ fontSize: "0.8rem", color: "var(--m-accent)", fontWeight: 600 }}>
                                        {edu.period}
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.35rem" }}>
                                        {edu.degree}
                                    </h3>
                                    <div style={{ fontSize: "1rem", color: "var(--m-accent)", fontWeight: 600, marginBottom: "0.75rem" }}>
                                        {edu.institution}
                                    </div>
                                    <p style={{ fontSize: "0.925rem", color: "var(--m-muted)", margin: 0, lineHeight: 1.6 }}>
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Languages Card */}
                    <div className="col-lg-5">
                        <motion.div
                            className="m-card h-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <Languages size={20} style={{ color: "var(--m-accent)" }} />
                                <span
                                    className="font-mono-m"
                                    style={{
                                        fontSize: "0.8rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.18em",
                                        color: "var(--m-accent)"
                                    }}
                                >
                                    LANGUAGE PROFICIENCY
                                </span>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {languagesData.map((lang, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "baseline",
                                            gap: "1rem",
                                            paddingBottom: "0.75rem",
                                            borderBottom: idx !== languagesData.length - 1 ? "1px solid var(--m-border)" : "none"
                                        }}
                                    >
                                        <span style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", fontWeight: 600, color: "var(--m-text)", flexShrink: 0 }}>
                                            {lang.name}
                                        </span>
                                        <span
                                            className="font-mono-m"
                                            style={{
                                                fontSize: "clamp(0.7rem, 1.8vw, 0.775rem)",
                                                color: "var(--m-muted)",
                                                textAlign: "right",
                                                lineHeight: 1.4
                                            }}
                                        >
                                            {lang.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

