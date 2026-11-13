"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        question: "What is your core technical specialization?",
        answer: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) paired with Next.js 14 App Router, TypeScript, and modern state architecture. My daily engineering focuses on resilient REST APIs, real-time websockets (Socket.io), MongoDB aggregation optimization, and accessible, high-performance UI systems."
    },
    {
        question: "What AI features have you built?",
        // TODO: Ahsan to add more details, architecture specifics, and metrics for AI features built
        answer: "I have built AI chatbot features, WhatsApp integrations and MCP servers for client products."
    },
    {
        question: "How are personal projects distinguished from company projects in your portfolio?",
        answer: "Company projects (such as NextAssist AI, Nexa, Tealpot, and Vootee) represent commercial platforms where I contributed as a professional software engineer within development teams. Personal projects (such as Lord's Hub and this bespoke developer portfolio) are independent applications that I conceptualized, engineered, and shipped end-to-end."
    },
    {
        question: "Are you available for full-time engineering roles or contracts?",
        answer: "Yes, I am actively available for Full Stack AI Developer roles, full-time engineering roles and select contract work. I bring 3+ years of production experience, structured code practices, and rapid execution velocity."
    },
    {
        question: "How do you ensure web performance and accessibility?",
        answer: "I build with a performance-first mindset: optimizing Core Web Vitals, self-hosting fonts, compressing modern image formats, utilizing semantic HTML5 landmarks, ensuring WCAG AA color contrast ratios, implementing full keyboard navigation, and targeting 100/100 Lighthouse benchmarks."
    },
    {
        question: "What AI-augmented engineering workflows do you use?",
        answer: "I integrate state-of-the-art AI developer tooling including Cursor AI, Claude Code, and Antigravity into my development lifecycle. This accelerates boilerplate scaffolding, unit test generation, and deep refactoring while maintaining strict architectural ownership and type safety."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (idx: number) => {
        setOpenIndex((prev) => (prev === idx ? null : idx));
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_DATA.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section id="faq" style={{ padding: "clamp(3.5rem, 7vw, 5rem) 1rem", position: "relative" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="editorial-container-narrow">
                <SectionHeader
                    number="08"
                    tag="COMMON INQUIRIES"
                    title="Frequently Asked Questions"
                    subtitle="Clear answers regarding technical capabilities, project ownership, availability, and engineering practices."
                />

                <div className="d-flex flex-column gap-3">
                    {FAQ_DATA.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        const controlId = `faq-answer-${idx}`;
                        const headerId = `faq-header-${idx}`;

                        return (
                            <div
                                key={idx}
                                className="m-card"
                                style={{
                                    padding: 0,
                                    overflow: "hidden",
                                    border: `1px solid ${isOpen ? "var(--m-accent)" : "var(--m-border)"}`,
                                    transition: "border-color 0.25s ease, box-shadow 0.25s ease"
                                }}
                            >
                                <button
                                    id={headerId}
                                    type="button"
                                    onClick={() => toggleItem(idx)}
                                    aria-expanded={isOpen}
                                    aria-controls={controlId}
                                    className="w-100 text-start d-flex align-items-center justify-content-between"
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        color: "var(--m-text)",
                                        cursor: "pointer",
                                        padding: "clamp(0.75rem, 2.5vw, 1.15rem)",
                                        gap: "0.65rem"
                                    }}
                                >
                                    <span className="d-flex align-items-center gap-2.5" style={{ gap: "0.65rem" }}>
                                        <HelpCircle
                                            size={16}
                                            style={{
                                                color: isOpen ? "var(--m-accent)" : "var(--m-dim)",
                                                flexShrink: 0,
                                                transition: "color 0.2s ease"
                                            }}
                                            aria-hidden="true"
                                        />
                                        <span style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", fontWeight: 600, lineHeight: 1.4 }}>
                                            {item.question}
                                        </span>
                                    </span>
                                    <ChevronDown
                                        size={16}
                                        style={{
                                            color: isOpen ? "var(--m-accent)" : "var(--m-dim)",
                                            flexShrink: 0,
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease"
                                        }}
                                        aria-hidden="true"
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={controlId}
                                            role="region"
                                            aria-labelledby={headerId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div
                                                style={{
                                                    padding: "0 clamp(0.75rem, 2.5vw, 1.25rem) clamp(0.75rem, 2.5vw, 1.25rem)",
                                                    color: "var(--m-muted)",
                                                    fontSize: "clamp(0.825rem, 1.8vw, 0.9rem)",
                                                    lineHeight: 1.55,
                                                    borderTop: "1px solid var(--m-border)"
                                                }}
                                            >
                                                <div style={{ paddingTop: "0.75rem" }}>{item.answer}</div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

