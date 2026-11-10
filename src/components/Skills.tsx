"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/portfolioData";
import TechWall from "./TechWall";
import SectionHeader from "./SectionHeader";

const Skills: React.FC = () => {
    return (
        <section id="skills" style={{ padding: "6rem 1.25rem 3rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Reference Section Header: 02 —— SKILLS */}
                <SectionHeader
                    number="02"
                    tag="SKILLS"
                    title="Skills"
                    subtitle="A curated overview of languages, frameworks, databases, and AI tooling I use daily in production."
                />

                {/* Categorized Skills Grid */}
                <div className="row g-4 mb-5">
                    {skillsData.categories.map((category, idx) => (
                        <div key={idx} className="col-md-6">
                            <motion.div
                                className="m-card h-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h3
                                    className="font-mono-m"
                                    style={{
                                        fontSize: "0.85rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.2em",
                                        color: "var(--m-accent)",
                                        marginBottom: "1.25rem"
                                    }}
                                >
                                    {category.title}
                                </h3>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {category.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="m-tag">
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seamless Infinite Marquee */}
            <TechWall />
        </section>
    );
};

export default Skills;

