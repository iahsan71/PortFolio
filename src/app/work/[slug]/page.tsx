import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { personalInfo, projectsData } from "../../../data/portfolioData";
import {
    ArrowLeft,
    ArrowUpRight,
    ExternalLink,
    Github,
    CheckCircle2,
    Layers,
    Cpu,
    Calendar,
    User
} from "lucide-react";

interface PageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return projectsData.map((p) => ({
        slug: p.slug
    }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const project = projectsData.find((p) => p.slug === params.slug);
    if (!project) return { title: "Project Not Found" };
    
    return {
        title: `${project.title} — Case Study`,
        description: project.shortDescription,
        alternates: {
            canonical: `https://www.ahsanafzal.com/work/${project.slug}/`
        },
        openGraph: {
            title: `${project.title} — Case Study | ${personalInfo.name}`,
            description: project.shortDescription,
            url: `https://www.ahsanafzal.com/work/${project.slug}/`,
            type: "article",
            images: [
                {
                    url: "https://www.ahsanafzal.com/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: project.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} — Case Study | ${personalInfo.name}`,
            description: project.shortDescription,
            images: ["https://www.ahsanafzal.com/og-image.png"]
        }
    };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
    const project = projectsData.find((p) => p.slug === params.slug);
    if (!project) notFound();

    // Related projects (other projects)
    const related = projectsData.filter((p) => p.slug !== project.slug).slice(0, 2);

    const projectJsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.title,
        "applicationCategory": "WebApplication",
        "operatingSystem": "All modern browsers",
        "author": {
            "@type": "Person",
            "name": personalInfo.name,
            "url": "https://www.ahsanafzal.com"
        },
        "description": project.shortDescription,
        "url": project.liveUrl || `https://www.ahsanafzal.com/work/${project.slug}/`
    };

    return (
        <div className="App">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
            />
            <Navbar />

            <main style={{ paddingTop: "clamp(5.5rem, 8vw, 7rem)", paddingBottom: "clamp(3.5rem, 6vw, 6rem)" }}>
                <div className="editorial-container-narrow">
                    {/* Breadcrumb Navigation */}
                    <div className="d-flex align-items-center gap-2 mb-4 font-mono-m" style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.775rem)", color: "var(--m-muted)" }}>
                        <Link href="/work" style={{ color: "var(--m-muted)", textDecoration: "none" }}>
                            ALL WORK
                        </Link>
                        <span>/</span>
                        <span style={{ color: "var(--m-accent)" }}>{project.title}</span>
                    </div>

                    {/* Project Header */}
                    <div className="mb-4">
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                            <span className="m-pill m-pill-accent">
                                {project.categoryTag}
                            </span>
                            <span className="m-pill">
                                <span>STATUS:</span>
                                <span style={{ color: "#10b981", fontWeight: 700 }}>{project.status}</span>
                            </span>
                            <span className="m-pill">
                                <span>TYPE:</span>
                                <span style={{ color: project.ownership === "Client Project" ? "#10b981" : project.ownership === "Personal Project" ? "var(--m-accent)" : "var(--m-text)", fontWeight: 700 }}>
                                    {project.ownership}
                                </span>
                            </span>
                            {(project.hasAiTag || project.slug === "nextassist-ai" || project.slug === "nexa") && (
                                <span className="m-pill" style={{ borderColor: "rgba(59, 130, 246, 0.4)", background: "rgba(59, 130, 246, 0.15)", color: "var(--m-accent)", fontWeight: 700 }}>
                                    AI
                                </span>
                            )}
                        </div>

                        <h1
                            className="font-display"
                            style={{
                                fontSize: "clamp(1.85rem, 5vw, 4.25rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.035em",
                                color: "var(--m-text)",
                                lineHeight: 1.08,
                                marginBottom: "1rem"
                            }}
                        >
                            {project.title}
                        </h1>

                        <p style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)", color: "var(--m-muted)", lineHeight: 1.65, maxWidth: "44rem" }}>
                            {project.shortDescription}
                        </p>
                    </div>

                    {/* Metadata Strip */}
                    <div
                        className="row g-3 py-3 mb-5"
                        style={{
                            borderTop: "1px solid var(--m-border)",
                            borderBottom: "1px solid var(--m-border)",
                            margin: 0
                        }}
                    >
                        <div className="col-6 col-md-3">
                            <span className="font-mono-m d-block" style={{ fontSize: "0.7rem", color: "var(--m-dim)", textTransform: "uppercase" }}>
                                CLIENT / ORG
                            </span>
                            <span style={{ fontSize: "0.95rem", color: "var(--m-text)", fontWeight: 600 }}>
                                {project.client}
                            </span>
                        </div>
                        <div className="col-6 col-md-3">
                            <span className="font-mono-m d-block" style={{ fontSize: "0.7rem", color: "var(--m-dim)", textTransform: "uppercase" }}>
                                MY ROLE
                            </span>
                            <span style={{ fontSize: "0.95rem", color: "var(--m-text)", fontWeight: 600 }}>
                                {project.role}
                            </span>
                        </div>
                        <div className="col-6 col-md-3">
                            <span className="font-mono-m d-block" style={{ fontSize: "0.7rem", color: "var(--m-dim)", textTransform: "uppercase" }}>
                                TIMELINE
                            </span>
                            <span style={{ fontSize: "0.95rem", color: "var(--m-text)", fontWeight: 600 }}>
                                {project.timeline}
                            </span>
                        </div>
                        <div className="col-6 col-md-3">
                            <span className="font-mono-m d-block" style={{ fontSize: "0.7rem", color: "var(--m-dim)", textTransform: "uppercase" }}>
                                ACTION
                            </span>
                            <div className="d-flex align-items-center gap-2">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="m-pill m-pill-accent"
                                        style={{ padding: "0.2rem 0.5rem", textDecoration: "none" }}
                                    >
                                        <span>Demo</span>
                                        <ArrowUpRight size={12} />
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="m-pill"
                                        style={{ padding: "0.2rem 0.5rem", textDecoration: "none" }}
                                    >
                                        <Github size={12} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Hero Screenshot */}
                    <div
                        className="mb-5 rounded-4 overflow-hidden position-relative"
                        style={{
                            aspectRatio: "16 / 9",
                            width: "100%",
                            border: "1px solid var(--m-border-strong)",
                            background: "#0e0f12"
                        }}
                    >
                        <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 850px"
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Case Study Content Sections */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
                        {/* 1. Overview */}
                        <div>
                            <div className="m-section-tag">
                                <span className="m-tag-accent" />
                                <span>01 · OVERVIEW</span>
                            </div>
                            <h2 className="font-display" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "1rem" }}>
                                Project Background & Mission
                            </h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "var(--m-muted)", margin: 0 }}>
                                {project.fullDescription}
                            </p>
                        </div>

                        {/* 2. Problem & Solution Split */}
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="m-card h-100" style={{ padding: "1.75rem", borderColor: "rgba(239, 68, 68, 0.25)" }}>
                                    <span className="font-mono-m d-block mb-2" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#f87171", fontWeight: 700 }}>
                                        THE CORE BOTTLENECK
                                    </span>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.75rem" }}>
                                        The Challenge
                                    </h3>
                                    <p style={{ fontSize: "0.95rem", color: "var(--m-muted)", lineHeight: 1.65, margin: 0 }}>
                                        {project.problem}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="m-card h-100" style={{ padding: "1.75rem", borderColor: "rgba(16, 185, 129, 0.25)" }}>
                                    <span className="font-mono-m d-block mb-2" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#34d399", fontWeight: 700 }}>
                                        ENGINEERED RESOLUTION
                                    </span>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.75rem" }}>
                                        The Solution
                                    </h3>
                                    <p style={{ fontSize: "0.95rem", color: "var(--m-muted)", lineHeight: 1.65, margin: 0 }}>
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Core Features */}
                        <div>
                            <div className="m-section-tag">
                                <span className="m-tag-accent" />
                                <span>02 · CAPABILITIES</span>
                            </div>
                            <h2 className="font-display" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "1.25rem" }}>
                                Key System Capabilities
                            </h2>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                                {project.features.map((feat, idx) => (
                                    <div
                                        key={idx}
                                        className="m-card d-flex align-items-start gap-3"
                                        style={{ padding: "1.25rem" }}
                                    >
                                        <CheckCircle2 size={18} style={{ color: "var(--m-accent)", marginTop: "2px", flexShrink: 0 }} />
                                        <span style={{ fontSize: "1rem", color: "var(--m-text)", lineHeight: 1.5 }}>
                                            {feat}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Architecture & Technical Stack */}
                        <div>
                            <div className="m-section-tag">
                                <span className="m-tag-accent" />
                                <span>03 · ARCHITECTURE & TECH STACK</span>
                            </div>
                            <h2 className="font-display" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "1rem" }}>
                                Technical Implementation
                            </h2>
                            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--m-muted)", marginBottom: "1.5rem" }}>
                                {project.architecture}
                            </p>

                            <div className="m-card" style={{ padding: "1.5rem" }}>
                                <span className="font-mono-m d-block mb-3" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--m-dim)" }}>
                                    STACK USED ON THIS SYSTEM
                                </span>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {project.technologies.map((tech, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="m-tag font-mono-m"
                                            style={{
                                                padding: "0.45rem 0.85rem",
                                                fontSize: "0.825rem",
                                                background: "rgba(255, 255, 255, 0.04)",
                                                border: "1px solid var(--m-border)"
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 5. Engineering Challenges & Solutions */}
                        <div>
                            <div className="m-section-tag">
                                <span className="m-tag-accent" />
                                <span>04 · CHALLENGES & OVERCOMING BOTTLENECKS</span>
                            </div>
                            <h2 className="font-display" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "1.25rem" }}>
                                Engineering Hurdles Solved
                            </h2>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {project.challenges.map((c, idx) => (
                                    <div key={idx} className="m-card" style={{ padding: "1.5rem" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.5rem" }}>
                                            Issue {idx + 1}: {c.challenge}
                                        </h3>
                                        <p style={{ fontSize: "0.925rem", color: "var(--m-muted)", lineHeight: 1.6, margin: 0 }}>
                                            <strong style={{ color: "var(--m-accent)" }}>Resolution:</strong> {c.solution}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 6. Measurable Results */}
                        <div
                            className="m-card p-4 rounded-4"
                            style={{
                                background: "rgba(16, 185, 129, 0.05)",
                                border: "1px solid rgba(16, 185, 129, 0.2)"
                            }}
                        >
                            <span className="font-mono-m d-block mb-1 text-success" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>
                                IMPACT & RESULTS
                            </span>
                            <p style={{ fontSize: "1.1rem", color: "var(--m-text)", fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                                {project.results}
                            </p>
                        </div>

                        {/* Action CTAs */}
                        <div className="d-flex flex-wrap align-items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--m-border)" }}>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="m-btn-primary"
                                >
                                    <span>Launch Live App</span>
                                    <ExternalLink size={15} />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="m-btn-secondary"
                                >
                                    <Github size={15} />
                                    <span>Inspect Repository</span>
                                </a>
                            )}
                            <Link href="/work" className="m-btn-secondary" style={{ marginLeft: "auto", gap: "0.5rem" }}>
                                <ArrowLeft size={15} style={{ marginRight: "0.25rem" }} />
                                <span>Back to all projects</span>
                            </Link>
                        </div>

                        {/* Related Projects */}
                        <div className="mt-4 pt-5" style={{ borderTop: "1px solid var(--m-border)" }}>
                            <div className="m-section-tag">
                                <span className="m-tag-accent" />
                                <span>EXPLORE MORE</span>
                            </div>
                            <h3 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "1.5rem" }}>
                                Related Systems
                            </h3>

                            <div className="row g-3">
                                {related.map((rel) => (
                                    <div key={rel.id} className="col-md-6">
                                        <Link
                                            href={`/work/${rel.slug}`}
                                            className="m-card d-block h-100"
                                            style={{ padding: "1.25rem", textDecoration: "none" }}
                                        >
                                            <span className="font-mono-m d-block mb-1" style={{ fontSize: "0.7rem", color: "var(--m-accent)" }}>
                                                {rel.categoryTag}
                                            </span>
                                            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.4rem" }}>
                                                {rel.title}
                                            </h4>
                                            <p style={{ fontSize: "0.85rem", color: "var(--m-muted)", margin: 0, lineHeight: 1.5 }}>
                                                {rel.shortDescription}
                                            </p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

