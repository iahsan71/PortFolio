"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ARCADE_FAQ } from "../../data/gamesData";

export const GamesFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex((prev) => (prev === idx ? null : idx));
    };

    return (
        <div className="mt-5 pt-4">
            <div className="mb-4">
                <div className="m-section-tag">
                    <span className="m-tag-accent" />
                    <span>ENGINEERING ARCHITECTURE</span>
                </div>
                <h2
                    className="font-display"
                    style={{
                        fontSize: "clamp(1.85rem, 4vw, 2.5rem)",
                        fontWeight: 800,
                        color: "var(--m-text)",
                        letterSpacing: "-0.025em",
                        marginBottom: "0.5rem"
                    }}
                >
                    Arcade Engineering &amp; Architecture FAQ
                </h2>
                <p style={{ color: "var(--m-muted)", fontSize: "1rem", margin: 0, maxWidth: "36rem", lineHeight: 1.6 }}>
                    Technical rationale, state handling choices, rendering trade-offs, and touch optimization behind this browser arcade collection.
                </p>
            </div>

            <div className="d-flex flex-column gap-3">
                {ARCADE_FAQ.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    const controlId = `arcade-faq-${idx}`;
                    const headerId = `arcade-faq-btn-${idx}`;

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
                                onClick={() => toggle(idx)}
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
                                        {faq.question}
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
                                            <div style={{ paddingTop: "0.75rem" }}>{faq.answer}</div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

