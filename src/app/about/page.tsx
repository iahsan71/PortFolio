import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { personalInfo, experiencesData, educationData, languagesData } from "../../data/portfolioData";
import { ArrowLeft, CheckCircle2, Download, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Ahsan Afzal's engineering journey, technical background, and 3+ years of experience architecting high-performance web applications and AI products.",
    alternates: {
        canonical: "https://www.ahsanafzal.com/about/"
    },
    openGraph: {
        title: `About ${personalInfo.name} | Full Stack AI Developer`,
        description: "3+ years of production experience architecting full-stack web applications, AI chatbots, WhatsApp automations, and high-performance MongoDB databases.",
        url: "https://www.ahsanafzal.com/about/",
        type: "profile",
        images: [
            {
                url: "https://www.ahsanafzal.com/og-image.png",
                width: 1200,
                height: 630,
                alt: `About ${personalInfo.name}`
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: `About ${personalInfo.name} | Full Stack AI Developer`,
        description: "3+ years of production experience architecting full-stack web applications, AI chatbots, WhatsApp automations, and high-performance MongoDB databases.",
        images: ["https://www.ahsanafzal.com/og-image.png"]
    }
};

export default function AboutPage() {
    return (
        <div className="App">
            <Navbar />

            <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
                <div className="editorial-container-prose">
                    {/* Back link & Breadcrumb */}
                    <div className="mb-4">
                        <Link
                            href="/"
                            className="font-mono-m d-inline-flex align-items-center gap-2"
                            style={{
                                fontSize: "0.775rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.18em",
                                color: "var(--m-muted)",
                                textDecoration: "none"
                            }}
                        >
                            <ArrowLeft size={14} style={{ marginRight: "0.25rem" }} />
                            <span>BACK TO HOME</span>
                        </Link>
                    </div>

                    {/* Editorial Header */}
                    <div className="mb-5 pb-4" style={{ borderBottom: "1px solid var(--m-border)" }}>
                        <div className="m-section-tag">
                            <span className="m-tag-accent" />
                            <span>BIOGRAPHY & BACKGROUND</span>
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
                            About {personalInfo.name}
                        </h1>
                        <p className="font-mono-m" style={{ fontSize: "0.95rem", color: "var(--m-accent)", textTransform: "uppercase", letterSpacing: "0.15em", margin: 0 }}>
                            {personalInfo.title} · {personalInfo.company}
                        </p>
                    </div>

                    {/* Narrative & Career Journey */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.1rem", lineHeight: 1.8, color: "var(--m-muted)" }}>
                        <p>
                            I build AI-powered products, including chatbots, WhatsApp integrations and MCP servers, on top of a solid MERN foundation. I use Cursor, Claude Code, Antigravity and Kiro in my daily workflow.
                        </p>
                        <p>
                            I am a results-driven <strong style={{ color: "var(--m-text)" }}>Full Stack AI Developer</strong> based in Pakistan with over 3 years of hands-on software development experience. Currently at <strong style={{ color: "var(--m-text)" }}>{personalInfo.company}</strong>, I architect and build resilient web applications from the database schema up to the user-facing interface.
                        </p>
                        <p>
                            My engineering journey began with an insatiable curiosity for how internet platforms operate at scale. Over the years, I&apos;ve transformed that passion into delivering mission-critical applications: business automation engines with AI ticket routing (<strong style={{ color: "var(--m-text)" }}>NextAssist AI</strong>), candidate screening suites (<strong style={{ color: "var(--m-text)" }}>Nexa</strong>), and high-traffic consumer marketplaces (<strong style={{ color: "var(--m-text)" }}>Tealpot</strong> and <strong style={{ color: "var(--m-text)" }}>Lordhub</strong>).
                        </p>
                        <p>
                            I firmly believe that high-performing software is built at the intersection of clean architecture, defensive security, database query discipline, and empathetic user experience. When I&apos;m not designing REST API routers or tuning MongoDB pipelines, I explore AI developer tooling like Cursor AI, Claude Code, and Antigravity to dramatically amplify engineering velocity.
                        </p>
                    </div>

                    {/* Work Experience Section */}
                    <div className="mt-5 pt-5" style={{ borderTop: "1px solid var(--m-border)" }}>
                        <div className="m-section-tag">
                            <span className="m-tag-accent" />
                            <span>CAREER EXPERIENCE</span>
                        </div>
                        <h2 className="font-display" style={{ fontSize: "1.85rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "1.75rem" }}>
                            Where I&apos;ve Contributed
                        </h2>

                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {experiencesData.map((exp, idx) => (
                                <div key={idx} className="m-card">
                                    <div className="d-flex justify-content-between align-items-center mb-1 font-mono-m" style={{ fontSize: "0.775rem", color: "var(--m-accent)" }}>
                                        <span>{exp.period}</span>
                                        <span style={{ color: "var(--m-dim)" }}>{exp.location}</span>
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.25rem" }}>
                                        {exp.role}
                                    </h3>
                                    <div style={{ fontSize: "0.95rem", color: "var(--m-muted)", marginBottom: "0.75rem" }}>
                                        {exp.company}
                                    </div>
                                    <p style={{ fontSize: "0.925rem", color: "var(--m-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                                        {exp.description}
                                    </p>

                                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                        {exp.responsibilities.map((resp, rIdx) => (
                                            <li key={rIdx} className="d-flex align-items-start gap-2" style={{ fontSize: "0.875rem", color: "var(--m-muted)", lineHeight: 1.5 }}>
                                                <CheckCircle2 size={14} style={{ color: "var(--m-accent)", marginTop: "3px", flexShrink: 0 }} />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                        {exp.technologies.map((t, tIdx) => (
                                            <span key={tIdx} className="m-tag" style={{ fontSize: "0.75rem", padding: "0.2rem 0.5rem" }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Languages */}
                    <div className="mt-5 pt-5" style={{ borderTop: "1px solid var(--m-border)" }}>
                        <div className="m-section-tag">
                            <span className="m-tag-accent" />
                            <span>ACADEMICS & ROOTS</span>
                        </div>
                        <h2 className="font-display" style={{ fontSize: "1.85rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "1.75rem" }}>
                            Education & Languages
                        </h2>

                        <div className="m-card mb-4">
                            {educationData.map((edu, idx) => (
                                <div key={idx}>
                                    <div className="font-mono-m mb-1" style={{ fontSize: "0.775rem", color: "var(--m-accent)", fontWeight: 600 }}>
                                        {edu.period}
                                    </div>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.25rem" }}>
                                        {edu.degree}
                                    </h3>
                                    <div style={{ fontSize: "0.95rem", color: "var(--m-muted)", marginBottom: "0.5rem" }}>
                                        {edu.institution}
                                    </div>
                                    <p style={{ fontSize: "0.875rem", color: "var(--m-dim)", margin: 0, lineHeight: 1.5 }}>
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="m-card">
                            <h4 className="font-mono-m mb-3" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--m-accent)" }}>
                                Languages Spoken
                            </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {languagesData.map((lang, idx) => (
                                    <div key={idx} className="d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--m-text)" }}>{lang.name}</span>
                                        <span className="font-mono-m" style={{ fontSize: "0.775rem", color: "var(--m-muted)" }}>{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Get in Touch CTA Card */}
                    <div className="mt-5 pt-5" style={{ borderTop: "1px solid var(--m-border)" }}>
                        <div
                            className="m-card text-center p-5"
                            style={{
                                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)",
                                borderColor: "rgba(59, 130, 246, 0.25)"
                            }}
                        >
                            <h3 className="font-display" style={{ fontSize: "2rem", fontWeight: 800, color: "var(--m-text)", marginBottom: "0.75rem" }}>
                                Let&apos;s build together
                            </h3>
                            <p style={{ fontSize: "1rem", color: "var(--m-muted)", maxWidth: "480px", margin: "0 auto 1.75rem", lineHeight: 1.6 }}>
                                Available for Senior Full-Stack / MERN engineering roles and technical consulting.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <Link href="/#contact" className="m-btn-primary">
                                    <Mail size={16} />
                                    <span>Get in touch</span>
                                </Link>
                                <a
                                    href={personalInfo.resumeUrl}
                                    download="Ahsan-Afzal-Resume.pdf"
                                    className="m-btn-secondary"
                                >
                                    <Download size={15} />
                                    <span>Download Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

