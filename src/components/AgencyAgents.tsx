"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Cpu, ArrowRight, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "../data/portfolioData";

interface AgentFeature {
    icon: React.ReactNode;
    title: string;
    bullet: string;
    description: string;
    accentColor: string;
}

const AGENT_FEATURES: AgentFeature[] = [
    {
        icon: <MessageSquare size={22} />,
        title: "Lead-Response Agents",
        bullet: "Reply, qualify, book on WhatsApp and web chat",
        description: "Engage incoming prospects instantly 24/7 across WhatsApp and web chat. Qualify leads with custom question flows and book discovery calls directly into your calendar.",
        accentColor: "rgba(59, 130, 246, 0.12)"
    },
    {
        icon: <FileText size={22} />,
        title: "Client-Reporting Agents",
        bullet: "Pull data, write the weekly report",
        description: "Automatically pull campaign numbers across Meta, Google Ads, and analytics platforms, calculate core ROI/ROAS metrics, and synthesize ready-to-send weekly client summaries.",
        accentColor: "rgba(16, 185, 129, 0.12)"
    },
    {
        icon: <Cpu size={22} />,
        title: "Custom Tool Integrations",
        bullet: "Custom integrations with the CRM, inbox and ad tools",
        description: "Build robust MCP servers and webhook connectors linking your agency AI workflows directly to HubSpot, GoHighLevel, Slack, shared team inboxes, and ad platform APIs.",
        accentColor: "rgba(139, 92, 246, 0.12)"
    }
];

const AgencyAgents: React.FC = () => {
    return (
        <section
            id="agency-agents"
            style={{
                padding: "clamp(3.5rem, 7vw, 5rem) 1rem",
                position: "relative"
            }}
        >
            <div className="editorial-container">
                <SectionHeader
                    number="01.5"
                    tag="AGENCY SOLUTIONS"
                    title="AI agents for marketing agencies"
                    subtitle="Autonomous AI workflows engineered to eliminate manual bottlenecks, capture every lead, and automate weekly client reporting."
                />

                <div className="row g-3 g-md-4 mb-4">
                    {AGENT_FEATURES.map((item, idx) => (
                        <div key={idx} className="col-12 col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="m-card h-100 d-flex flex-column justify-content-between"
                                style={{
                                    padding: "1.5rem",
                                    border: "1px solid var(--m-border)",
                                    background: "var(--m-surface)"
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "10px",
                                            background: item.accentColor,
                                            color: "var(--m-accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "1.25rem"
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "1.15rem",
                                            fontWeight: 700,
                                            color: "var(--m-text)",
                                            marginBottom: "0.5rem"
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.925rem",
                                            fontWeight: 600,
                                            color: "var(--m-accent)",
                                            marginBottom: "0.75rem",
                                            lineHeight: 1.45
                                        }}
                                    >
                                        {item.bullet}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.85rem",
                                            color: "var(--m-muted)",
                                            lineHeight: 1.6,
                                            margin: 0
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="m-card text-center d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3"
                    style={{
                        padding: "1.25rem 1.75rem",
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(16, 185, 129, 0.05) 100%)",
                        border: "1px solid var(--m-border-strong)"
                    }}
                >
                    <div className="text-start">
                        <span
                            className="font-mono-m d-flex align-items-center gap-2"
                            style={{
                                fontSize: "0.75rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.14em",
                                color: "var(--m-accent)",
                                fontWeight: 700,
                                marginBottom: "0.25rem"
                            }}
                        >
                            <Sparkles size={14} />
                            <span>Ready to scale agency operations?</span>
                        </span>
                        <p style={{ margin: 0, fontSize: "0.925rem", color: "var(--m-text)", fontWeight: 500 }}>
                            Let&apos;s map your agency workflows and identify the highest-ROI automations to deploy first.
                        </p>
                    </div>

                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-btn-primary flex-shrink-0"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <span>Get a free workflow audit</span>
                        <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AgencyAgents;
