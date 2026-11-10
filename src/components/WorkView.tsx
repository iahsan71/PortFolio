"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { projectsData } from "../data/portfolioData";
import { ArrowLeft, ArrowUpRight, ExternalLink, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkView() {
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const categories = useMemo(() => {
        const unique = Array.from(new Set(projectsData.map((p) => p.category)));
        return ["ALL", ...unique];
    }, []);

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { ALL: projectsData.length };
        projectsData.forEach((p) => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return counts;
    }, []);

    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            const matchesCategory = selectedCategory === "ALL" || project.category === selectedCategory;
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !q ||
                project.title.toLowerCase().includes(q) ||
                project.shortDescription.toLowerCase().includes(q) ||
                project.technologies.some((t) => t.toLowerCase().includes(q));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="App">
            <Navbar />

            <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
                <div className="editorial-container">
                    {/* Breadcrumb */}
                    <div className="mb-4">
                        <Link
                            href="/"
                            className="font-mono-m d-inline-flex align-items-center gap-1.5"
                            style={{
                                fontSize: "0.775rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.18em",
                                color: "var(--m-muted)",
                                textDecoration: "none"
                            }}
                        >
                            <ArrowLeft size={13} />
                            <span>BACK TO HOME</span>
                        </Link>
                    </div>

                    {/* Page Header */}
                    <div className="mb-5">
                        <div className="m-section-tag">
                            <span className="m-tag-accent" />
                            <span>COMPLETE ARCHIVE</span>
                        </div>
                        <h1
                            className="font-display"
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                color: "var(--m-text)",
                                lineHeight: 1.1,
                                marginBottom: "1rem"
                            }}
                        >
                            Everything I&apos;ve Shipped
                        </h1>
                        <p style={{ fontSize: "1.15rem", color: "var(--m-muted)", maxWidth: "42rem", lineHeight: 1.6, margin: 0 }}>
                            Full-stack web applications, AI tools, real-time architectures, and client platforms engineered with Next.js, Node.js, Express, and MongoDB.
                        </p>
                    </div>

                    {/* Filter & Search Bar */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch align-items-md-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--m-border)" }}>
                        {/* Category Pills */}
                        <div className="d-flex flex-wrap gap-2">
                            {categories.map((cat) => {
                                const isActive = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setSelectedCategory(cat)}
                                        className="font-mono-m"
                                        style={{
                                            border: `1px solid ${isActive ? "var(--m-accent)" : "var(--m-border)"}`,
                                            background: isActive ? "rgba(59, 130, 246, 0.15)" : "var(--m-surface)",
                                            color: isActive ? "var(--m-accent)" : "var(--m-muted)",
                                            borderRadius: "9999px",
                                            padding: "0.45rem 1rem",
                                            fontSize: "0.75rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <span>{cat}</span>
                                        <span style={{ opacity: 0.6 }}>{categoryCounts[cat] || 0}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search Input */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                background: "var(--m-surface)",
                                border: "1px solid var(--m-border)",
                                borderRadius: "9999px",
                                padding: "0.45rem 1rem",
                                width: "100%",
                                maxWidth: "320px"
                            }}
                        >
                            <Search size={15} style={{ color: "var(--m-dim)" }} />
                            <input
                                id="project-search"
                                name="project-search"
                                aria-label="Search projects by title or technology"
                                type="text"
                                placeholder="Search stack, title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    color: "var(--m-text)",
                                    fontSize: "0.85rem",
                                    width: "100%"
                                }}
                            />
                        </div>
                    </div>

                    {/* Project Grid */}
                    <h2 className="visually-hidden">Case Studies &amp; Projects Directory</h2>
                    {filteredProjects.length === 0 ? (
                        <div className="text-center py-5" style={{ color: "var(--m-muted)" }}>
                            <p style={{ fontSize: "1.1rem" }}>No projects match your current filter criteria.</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategory("ALL");
                                    setSearchQuery("");
                                }}
                                className="m-btn-secondary mt-2"
                            >
                                Reset filters
                            </button>
                        </div>
                    ) : (
                        <div className="row g-4">
                            <AnimatePresence>
                                {filteredProjects.map((project, idx) => (
                                    <div key={project.id} className="col-12 col-md-6">
                                        <motion.article
                                            className="m-project-card h-100"
                                            layout
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Top Card Meta Row */}
                                            <div className="d-flex justify-content-between align-items-center px-4 pt-3 pb-2 font-mono-m" style={{ fontSize: "0.725rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", background: "var(--m-accent)", boxShadow: "0 0 8px var(--m-accent)" }} />
                                                    <span style={{ color: "var(--m-accent)", letterSpacing: "0.15em", fontWeight: 700 }}>{project.status || "LIVE"}</span>
                                                </div>
                                                <span style={{ color: "var(--m-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{project.categoryTag}</span>
                                            </div>

                                            {/* Inset Preview Image */}
                                            <div style={{ padding: "0.85rem 0.85rem 0" }}>
                                                <div className="m-project-img-wrapper" style={{ borderRadius: "0.85rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", position: "relative", aspectRatio: "16 / 9" }}>
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

                                            {/* Card Content */}
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

                                                {/* Tech Stack */}
                                                <div className="m-project-tags">
                                                    {project.technologies.map((t, tIdx) => (
                                                        <span key={tIdx} className="m-tag">
                                                            {t}
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
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
