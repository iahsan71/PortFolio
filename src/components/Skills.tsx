"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "../data/portfolioData";
import TechWall from "./TechWall";
import SectionHeader from "./SectionHeader";

const TABS = [
    { key: "ALL", label: "ALL" },
    { key: "FRONTEND", label: "FRONTEND", match: "Frontend Engineering" },
    { key: "BACKEND", label: "BACKEND", match: "Backend Architecture & APIs" },
    { key: "DATABASES & CLOUD", label: "DATABASES & CLOUD", match: "Databases & Cloud" },
    { key: "AI TOOLING", label: "AI TOOLING", match: "AI Tools & Dev Ecosystem" }
];

const Skills: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>("ALL");

    const filteredCategories = skillsData.categories.filter((cat) => {
        if (selectedTab === "ALL") return true;
        const currentTab = TABS.find((t) => t.key === selectedTab);
        return currentTab?.match === cat.title;
    });

    return (
        <section id="skills" style={{ padding: "clamp(4rem, 8vw, 6rem) 1rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Reference Section Header: 02 —— SKILLS */}
                <SectionHeader
                    number="02"
                    tag="SKILLS"
                    title="Skills"
                    subtitle="A curated overview of languages, frameworks, databases, and AI tooling I use daily in production."
                />

                {/* Interactive Category Tabs with Generous Spacing */}
                <div
                    className="d-flex flex-wrap gap-2 m-skills-tabs"
                    style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}
                >
                    {TABS.map((tab) => {
                        const isActive = selectedTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setSelectedTab(tab.key)}
                                className="font-mono-m"
                                style={{
                                    border: `1px solid ${isActive ? "var(--m-accent)" : "var(--m-border)"}`,
                                    background: isActive ? "rgba(37, 99, 235, 0.15)" : "var(--m-surface)",
                                    color: isActive ? "var(--m-accent)" : "var(--m-muted)",
                                    borderRadius: "9999px",
                                    padding: "0.35rem 0.85rem",
                                    fontSize: "clamp(0.68rem, 1.8vw, 0.75rem)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.12em",
                                    cursor: "pointer",
                                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                                }}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Categorized Skills Grid */}
                <div className="row g-4 mb-5">
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((category) => (
                            <motion.div
                                key={category.title}
                                className={selectedTab === "ALL" ? "col-md-6" : "col-12"}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="m-card h-100">
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
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Seamless Infinite Marquee */}
            <TechWall />
        </section>
    );
};

export default Skills;

