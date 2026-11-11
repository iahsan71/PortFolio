"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Hero: React.FC = () => {
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
                            className="font-mono-m"
                            style={{
                                display: "block",
                                marginTop: "0.85rem",
                                fontSize: "clamp(0.75rem, 2.2vw, 1.05rem)",
                                textTransform: "uppercase",
                                letterSpacing: "0.16em",
                                color: "var(--m-muted)",
                                fontWeight: 600,
                                lineHeight: 1.45
                            }}
                        >
                            {personalInfo.title}
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
                            margin: "1.25rem 0 1.75rem",
                            transformOrigin: "left"
                        }}
                    />

                    {/* Short Editorial Intro */}
                    <p
                        style={{
                            fontSize: "clamp(0.975rem, 2.2vw, 1.35rem)",
                            lineHeight: 1.65,
                            color: "var(--m-muted)",
                            maxWidth: "42rem",
                            marginBottom: "clamp(1.75rem, 4vw, 2.5rem)"
                        }}
                    >
                        {personalInfo.bio}
                    </p>

                    {/* Interactive CTAs */}
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 mb-4 mb-md-5">
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

