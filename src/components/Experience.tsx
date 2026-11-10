"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "../data/portfolioData";
import { CheckCircle2, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Experience: React.FC = () => {
    return (
        <section id="experience" style={{ padding: "6rem 1.25rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Reference Section Header: 03 —— EXPERIENCE */}
                <SectionHeader
                    number="03"
                    tag="EXPERIENCE"
                    title="Experience"
                    subtitle="My professional roles across software leadership, client architectures, and independent deliveries."
                />

                {/* Editorial Timeline */}
                <div className="m-timeline">
                    {experiencesData.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="m-timeline-item"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="m-card">
                                {/* Header: Dates & Location */}
                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                                    <span
                                        className="font-mono-m"
                                        style={{
                                            fontSize: "0.8rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.18em",
                                            color: "var(--m-accent)"
                                        }}
                                    >
                                        {exp.period}
                                    </span>
                                    <span
                                        className="font-mono-m d-inline-flex align-items-center gap-1"
                                        style={{ fontSize: "0.75rem", color: "var(--m-dim)" }}
                                    >
                                        <MapPin size={12} />
                                        <span>{exp.location}</span>
                                    </span>
                                </div>

                                {/* Role & Company */}
                                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.25rem" }}>
                                    {exp.role}
                                </h3>
                                <div style={{ fontSize: "1rem", color: "var(--m-muted)", fontWeight: 500, marginBottom: "1rem" }}>
                                    {exp.company}
                                </div>

                                <p style={{ fontSize: "0.95rem", color: "var(--m-muted)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                                    {exp.description}
                                </p>

                                {/* Responsibilities Bullet List */}
                                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                    {exp.responsibilities.map((item, hIdx) => (
                                        <li key={hIdx} className="d-flex align-items-start gap-2" style={{ fontSize: "0.9rem", color: "var(--m-muted)", lineHeight: 1.5 }}>
                                            <CheckCircle2 size={15} style={{ color: "var(--m-accent)", marginTop: "3px", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies Used */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", paddingTop: "0.75rem", borderTop: "1px solid var(--m-border)" }}>
                                    {exp.technologies.map((tech, tIdx) => (
                                        <span key={tIdx} className="m-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

