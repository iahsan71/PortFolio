"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Mail, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ComingSoon: React.FC = () => {
    return (
        <section id="insights" style={{ padding: "5rem 1.25rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Section Header: 07 —— INSIGHTS */}
                <SectionHeader
                    number="07"
                    tag="TECHNICAL INSIGHTS"
                    title="Writing & Notes"
                    subtitle="In-depth explorations of full-stack system architecture, database optimization, and modern developer tooling."
                />

                <motion.div
                    className="m-card text-center"
                    style={{
                        padding: "3.5rem 2rem",
                        position: "relative",
                        overflow: "hidden",
                        background: "linear-gradient(135deg, rgba(14, 15, 20, 0.95) 0%, rgba(18, 20, 28, 0.95) 100%)",
                        borderColor: "rgba(255, 255, 255, 0.08)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Glowing Accent Orb Backdrop */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-40%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "380px",
                            height: "220px",
                            background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.18) 0%, transparent 70%)",
                            pointerEvents: "none",
                            filter: "blur(30px)"
                        }}
                    />

                    {/* Status Pill Badge */}
                    <div className="d-flex justify-content-center mb-3">
                        <span
                            className="m-pill m-pill-accent font-mono-m"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.35rem 0.9rem",
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em"
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: "var(--m-accent)",
                                    boxShadow: "0 0 8px var(--m-accent)"
                                }}
                            />
                            <span>IN THE WORKS</span>
                        </span>
                    </div>

                    {/* Headline */}
                    <h3
                        className="font-display"
                        style={{
                            fontSize: "clamp(1.75rem, 4vw, 2.35rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.025em",
                            color: "var(--m-text)",
                            marginBottom: "1rem",
                            lineHeight: 1.2
                        }}
                    >
                        Something new is on the horizon
                    </h3>

                    {/* Message mandated by user */}
                    <p
                        style={{
                            fontSize: "1.05rem",
                            color: "var(--m-muted)",
                            maxWidth: "540px",
                            margin: "0 auto 2rem",
                            lineHeight: 1.65
                        }}
                    >
                        Something new is in the works. Technical insights, development experiences and engineering articles are coming soon.
                    </p>

                    {/* Direct Contact Action */}
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <Link href="/#contact" className="m-btn-primary">
                            <Mail size={15} />
                            <span>Discuss a project</span>
                        </Link>
                        <Link href="/work" className="m-btn-secondary">
                            <span>Browse recent work</span>
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComingSoon;

