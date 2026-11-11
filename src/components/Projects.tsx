"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Projects: React.FC = () => {
    // Show top featured projects on homepage
    const displayProjects = projectsData.slice(0, 4);

    return (
        <section id="projects" style={{ padding: "clamp(4rem, 8vw, 6rem) 1rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Reference Section Header: 04 —— PROJECTS */}
                <SectionHeader
                    number="04"
                    tag="PROJECTS"
                    title="Projects"
                    subtitle="Featured full-stack web applications, AI platforms, and marketplaces shipped to production."
                    rightAction={
                        <Link href="/work" className="m-btn-secondary d-none d-sm-inline-flex">
                            <span>View all work ({projectsData.length})</span>
                            <ArrowUpRight size={15} />
                        </Link>
                    }
                />

                {/* Projects Grid */}
                <div className="row g-4 mb-4 mb-md-5">
                    {displayProjects.map((project, idx) => (
                        <div key={project.id} className="col-12 col-lg-6">
                            <motion.article
                                className="m-project-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Top Card Meta Row */}
                                <div className="d-flex flex-wrap justify-content-between align-items-center px-3 px-sm-4 pt-3 pb-2 font-mono-m gap-2" style={{ fontSize: "0.725rem", borderBottom: "1px solid var(--m-border)" }}>
                                    <div className="d-flex align-items-center gap-2">
                                        <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", background: "var(--m-accent)", boxShadow: "0 0 8px var(--m-accent)" }} />
                                        <span style={{ color: "var(--m-accent)", letterSpacing: "0.15em", fontWeight: 700 }}>{project.status || "LIVE"}</span>
                                        <span style={{ opacity: 0.35, color: "var(--m-muted)" }}>•</span>
                                        <span
                                            style={{
                                                fontSize: "0.68rem",
                                                padding: "0.12rem 0.5rem",
                                                borderRadius: "999px",
                                                background: project.ownership === "Personal Project" ? "rgba(37, 99, 235, 0.12)" : "rgba(148, 163, 184, 0.12)",
                                                color: project.ownership === "Personal Project" ? "var(--m-accent)" : "var(--m-muted)",
                                                fontWeight: 600,
                                                letterSpacing: "0.04em"
                                            }}
                                        >
                                            {project.ownership}
                                        </span>
                                    </div>
                                    <span style={{ color: "var(--m-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{project.categoryTag}</span>
                                </div>

                                {/* Inset Screenshot Preview with Hover Zoom */}
                                <div style={{ padding: "0.65rem 0.65rem 0" }}>
                                    <div className="m-project-img-wrapper" style={{ borderRadius: "0.85rem", overflow: "hidden", border: "1px solid var(--m-border)", position: "relative", aspectRatio: "16 / 9" }}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="m-project-img"
                                            style={{ objectFit: "cover" }}
                                            priority={idx === 0}
                                        />
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="m-project-body">
                                    <h3 className="m-project-title">
                                        <Link
                                            href={`/work/${project.slug}`}
                                            style={{ color: "inherit", textDecoration: "none" }}
                                        >
                                            {project.title}
                                        </Link>
                                        <ArrowUpRight size={20} className="m-project-arrow transition-all" />
                                    </h3>

                                    <p className="m-project-desc">
                                        {project.shortDescription}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="m-project-tags">
                                        {project.technologies.slice(0, 5).map((tech, tIdx) => (
                                            <span key={tIdx} className="m-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer Meta Row: CTA Button & Project Index */}
                                    <div className="d-flex justify-content-between align-items-center pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "auto" }}>
                                        <div className="d-flex align-items-center gap-2">
                                            <Link
                                                href={`/work/${project.slug}`}
                                                className="m-project-btn-cta"
                                            >
                                                <span>EXPLORE</span>
                                                <ArrowUpRight size={14} />
                                            </Link>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="m-project-link font-mono-m"
                                                    style={{ fontSize: "0.775rem", padding: "0.4rem 0.6rem" }}
                                                >
                                                    <ExternalLink size={13} />
                                                    <span>Demo</span>
                                                </a>
                                            )}
                                        </div>

                                        <span className="font-mono-m" style={{ fontSize: "0.8rem", color: "var(--m-dim)", fontWeight: 700 }}>
                                            {project.projectNumber}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </div>
                    ))}
                </div>

                {/* Mobile view all work button */}
                <div className="text-center d-sm-none">
                    <Link href="/work" className="m-btn-secondary w-100">
                        <span>View all work ({projectsData.length})</span>
                        <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;

