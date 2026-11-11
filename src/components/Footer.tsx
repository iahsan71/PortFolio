"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#contact");
        }
    };

    return (
        <footer className="m-footer-wrapper">
            <div className="editorial-container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4 mb-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="m-footer-logo">
                            <span>{personalInfo.name}</span>
                            <span className="m-dot">.</span>
                        </Link>
                        <p style={{ fontSize: "0.9rem", color: "var(--m-muted)", marginTop: "0.5rem", maxWidth: "420px", lineHeight: 1.6 }}>
                            Senior MERN Stack & Full-Stack Engineer crafting high-performance, resilient digital web architectures.
                        </p>
                    </div>

                    {/* Socials & Back to Top */}
                    <div className="d-flex flex-wrap align-items-center gap-2 w-100 w-md-auto mt-3 mt-md-0 m-footer-social-group">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-footer-social"
                            aria-label="GitHub"
                        >
                            <Github size={14} />
                            <span>GITHUB</span>
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-footer-social"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={14} />
                            <span>LINKEDIN</span>
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="m-footer-social"
                            aria-label="Email"
                        >
                            <Mail size={14} />
                            <span>EMAIL</span>
                        </a>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="m-footer-social m-footer-top-btn"
                            style={{ cursor: "pointer", padding: "0.45rem 0.65rem" }}
                            aria-label="Back to top"
                            title="Back to top"
                        >
                            <ArrowUp size={15} style={{ color: "var(--m-accent)" }} />
                        </button>
                    </div>
                </div>

                {/* Sub Navigation Links (Blog removed as requested) */}
                <div className="m-footer-nav">
                    <Link href="/" className="m-footer-link">Home</Link>
                    <Link href="/about" className="m-footer-link">About</Link>
                    <Link href="/work" className="m-footer-link">All Projects</Link>
                    <Link href="/games" className="m-footer-link">Games</Link>
                    <button type="button" onClick={scrollToContact} className="m-footer-link">Contact</button>
                </div>

                {/* Copyright & Disclaimer */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 font-mono-m" style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.775rem)", color: "var(--m-dim)" }}>
                    <span>
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </span>
                    <span>
                        Built with Next.js 14, React & SCSS · Pakistan
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

