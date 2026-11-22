"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const ROTATING_TITLES = [
    "Full Stack AI Developer",
    "AI Chatbot Builder",
    "WhatsApp Automation Developer",
    "MCP Server Developer"
];

const Hero: React.FC = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState(ROTATING_TITLES[0]);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = ROTATING_TITLES[titleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText === currentTitle) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        } else {
            const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1;
            timeout = setTimeout(
                () => {
                    setDisplayText(currentTitle.slice(0, nextLength));
                },
                isDeleting ? 30 : 65
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);
    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(6.5rem, 13vw, 8.5rem) 1rem clamp(2.5rem, 5vw, 4rem)",
                overflow: "hidden"
            }}
        >
            <div className="editorial-container w-100">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Top availability & profile badges */}
                    <div
                        className="font-mono-m mb-3 mb-sm-4 d-flex flex-wrap align-items-center gap-2"
                        style={{
                            fontSize: "clamp(0.625rem, 1.8vw, 0.725rem)",
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--m-muted)"
                        }}
                    >
                        <span className="m-pill" style={{ padding: "0.22rem 0.6rem", whiteSpace: "nowrap" }}>
                            <span style={{ position: "relative", display: "inline-flex", width: "7px", height: "7px" }}>
                                <span
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: "50%",
                                        background: "var(--m-accent)",
                                        opacity: 0.75,
                                        animation: "m-ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite"
                                    }}
                                />
                                <span
                                    style={{
                                        position: "relative",
                                        display: "inline-flex",
                                        width: "7px",
                                        height: "7px",
                                        borderRadius: "50%",
                                        background: "var(--m-accent)"
                                    }}
                                />
                            </span>
                            <span>{personalInfo.availability}</span>
                        </span>

                        <span className="m-pill" style={{ padding: "0.22rem 0.6rem", whiteSpace: "nowrap" }}>
                            <span>{personalInfo.company}</span>
                            <span style={{ color: "var(--m-accent)" }}>·</span>
                            <span>3+ Yrs Exp</span>
                        </span>
                    </div>

                    {/* Prominent Editorial Display Heading */}
                    <h1 style={{ margin: "1rem 0 0.75rem", lineHeight: 0.95 }}>
                        <span
                            className="font-display"
                            style={{
                                display: "block",
                                fontSize: "clamp(2.25rem, 9.5vw, 7rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.035em",
                                color: "var(--m-text)"
                            }}
                        >
                            {personalInfo.name}
                        </span>
                        <span
                            className="font-mono-m d-flex align-items-center"
                            style={{
                                marginTop: "0.85rem",
                                fontSize: "clamp(0.75rem, 2.2vw, 1.05rem)",
                                textTransform: "uppercase",
                                letterSpacing: "0.16em",
                                color: "var(--m-accent)",
                                fontWeight: 700,
                                lineHeight: 1.45,
                                minHeight: "1.6em"
                            }}
                        >
                            <span>{displayText}</span>
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "2px",
                                    height: "1em",
                                    background: "var(--m-accent)",
                                    marginLeft: "0.35rem",
                                    animation: "m-blink 0.9s infinite",
                                    verticalAlign: "middle"
                                }}
                            />
                        </span>
                    </h1>

                    {/* Accent Underline Bar */}
                    <span
                        className="m-draw-x"
                        style={{
                            display: "block",
                            height: "5px",
                            width: "clamp(80px, 14vw, 160px)",
                            borderRadius: "9999px",
                            background: "var(--m-accent)",
                            margin: "1.25rem 0 1.5rem",
                            transformOrigin: "left"
                        }}
                    />

                    {/* LinkedIn Sub-line */}
                    <p
                        className="font-mono-m"
                        style={{
                            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                            lineHeight: 1.5,
                            color: "var(--m-accent)",
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                            maxWidth: "48rem",
                            marginBottom: "0.85rem"
                        }}
                    >
                        AI Chatbots, WhatsApp Automation &amp; MCP Servers | React, Next.js, Node.js
                    </p>

                    {/* Value Proposition Hook */}
                    <p
                        style={{
                            fontSize: "clamp(1.05rem, 2.4vw, 1.35rem)",
                            lineHeight: 1.55,
                            color: "var(--m-text)",
                            fontWeight: 600,
                            maxWidth: "46rem",
                            marginBottom: "0.85rem"
                        }}
                    >
                        Full-stack developer who turns AI into real products: chatbots that talk to customers, WhatsApp automations, and MCP servers that connect AI to your tools.
                    </p>

                    {/* Existing Editorial Intro */}
                    <p
                        style={{
                            fontSize: "clamp(0.925rem, 2vw, 1.15rem)",
                            lineHeight: 1.65,
                            color: "var(--m-muted)",
                            maxWidth: "42rem",
                            marginBottom: "clamp(1.75rem, 4vw, 2.5rem)"
                        }}
                    >
                        {personalInfo.bio}
                    </p>

                    {/* Interactive CTAs */}
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 mb-4">
                        <a href="#projects" className="m-btn-primary">
                            <span>Explore Projects</span>
                            <ArrowRight size={16} />
                        </a>
                        <a href="#contact" className="m-btn-secondary">
                            <span>Get in touch</span>
                        </a>
                        <a
                            href={personalInfo.resumeUrl}
                            download="Ahsan-Afzal-Resume.pdf"
                            className="m-btn-secondary"
                            style={{ background: "transparent" }}
                        >
                            <Download size={15} />
                            <span>Download CV</span>
                        </a>
                    </div>

                    {/* What I Build 3-card Strip */}
                    <div className="row g-2 g-sm-3 mb-4" style={{ maxWidth: "52rem" }}>
                        <div className="col-12 col-md-4">
                            <div
                                className="m-card h-100"
                                style={{
                                    padding: "0.85rem 1rem",
                                    background: "var(--m-surface)",
                                    border: "1px solid var(--m-border)"
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <div
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "8px",
                                            background: "rgba(59, 130, 246, 0.12)",
                                            color: "var(--m-accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        }}
                                    >
                                        <Bot size={15} />
                                    </div>
                                    <h2 style={{ fontSize: "0.925rem", fontWeight: 700, margin: 0, color: "var(--m-text)" }}>
                                        AI Chatbots
                                    </h2>
                                </div>
                                <p style={{ fontSize: "0.8rem", color: "var(--m-muted)", margin: 0, lineHeight: 1.5 }}>
                                    Customer support and lead qualification
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div
                                className="m-card h-100"
                                style={{
                                    padding: "0.85rem 1rem",
                                    background: "var(--m-surface)",
                                    border: "1px solid var(--m-border)"
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <div
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "8px",
                                            background: "rgba(16, 185, 129, 0.12)",
                                            color: "#10b981",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        }}
                                    >
                                        <MessageCircle size={15} />
                                    </div>
                                    <h2 style={{ fontSize: "0.925rem", fontWeight: 700, margin: 0, color: "var(--m-text)" }}>
                                        WhatsApp Integrations
                                    </h2>
                                </div>
                                <p style={{ fontSize: "0.8rem", color: "var(--m-muted)", margin: 0, lineHeight: 1.5 }}>
                                    Messages, bookings and automation
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div
                                className="m-card h-100"
                                style={{
                                    padding: "0.85rem 1rem",
                                    background: "var(--m-surface)",
                                    border: "1px solid var(--m-border)"
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <div
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "8px",
                                            background: "rgba(139, 92, 246, 0.12)",
                                            color: "#8b5cf6",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        }}
                                    >
                                        <Cpu size={15} />
                                    </div>
                                    <h2 style={{ fontSize: "0.925rem", fontWeight: 700, margin: 0, color: "var(--m-text)" }}>
                                        MCP Servers
                                    </h2>
                                </div>
                                <p style={{ fontSize: "0.8rem", color: "var(--m-muted)", margin: 0, lineHeight: 1.5 }}>
                                    Connecting AI to tools and data
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* One-Line Trust Row */}
                    <div
                        className="d-flex flex-wrap align-items-center gap-2 font-mono-m mb-4"
                        style={{
                            fontSize: "clamp(0.75rem, 1.9vw, 0.85rem)",
                            color: "var(--m-muted)",
                            maxWidth: "52rem"
                        }}
                    >
                        <span style={{ color: "var(--m-dim)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                            Live products:
                        </span>
                        <a
                            href="https://nextassistai.nextpak.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--m-text)", textDecoration: "none", fontWeight: 600, borderBottom: "1px dotted var(--m-border-strong)" }}
                        >
                            NextAssist AI
                        </a>
                        <span style={{ color: "var(--m-border-strong)" }}>·</span>
                        <a
                            href="https://trynexa.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--m-text)", textDecoration: "none", fontWeight: 600, borderBottom: "1px dotted var(--m-border-strong)" }}
                        >
                            Nexa
                        </a>
                        <span style={{ color: "var(--m-border-strong)" }}>·</span>
                        <a
                            href="https://tealpot.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--m-text)", textDecoration: "none", fontWeight: 600, borderBottom: "1px dotted var(--m-border-strong)" }}
                        >
                            Tealpot
                        </a>
                        <span style={{ color: "var(--m-border-strong)" }}>·</span>
                        <a
                            href="https://lordshub.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--m-text)", textDecoration: "none", fontWeight: 600, borderBottom: "1px dotted var(--m-border-strong)" }}
                        >
                            Lord&apos;s Hub
                        </a>
                    </div>

                    {/* Social & Direct Connections */}
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 pt-3" style={{ borderTop: "1px solid var(--m-border)", maxWidth: "34rem" }}>
                        <span
                            className="font-mono-m"
                            style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--m-dim)" }}
                        >
                            CONNECT
                        </span>
                        <div className="d-flex align-items-center gap-2" style={{ flexWrap: "nowrap" }}>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="m-pill"
                                style={{ padding: "0.25rem 0.55rem", textDecoration: "none", fontSize: "0.7rem", whiteSpace: "nowrap" }}
                                aria-label="GitHub Profile"
                            >
                                <Github size={13} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="m-pill"
                                style={{ padding: "0.25rem 0.55rem", textDecoration: "none", fontSize: "0.7rem", whiteSpace: "nowrap" }}
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={13} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://wa.me/923493082202"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="m-pill"
                                style={{ padding: "0.25rem 0.55rem", textDecoration: "none", fontSize: "0.7rem", whiteSpace: "nowrap" }}
                                aria-label="WhatsApp Chat"
                            >
                                <FaWhatsapp size={13} style={{ color: "#10b981" }} />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="m-pill"
                                style={{ padding: "0.25rem 0.55rem", textDecoration: "none", fontSize: "0.7rem", whiteSpace: "nowrap" }}
                                aria-label="Send Email"
                            >
                                <Mail size={13} />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

