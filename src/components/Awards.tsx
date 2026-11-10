"use client";

import React from "react";
import { motion } from "framer-motion";
import { awardsData } from "../data/portfolioData";
import { Trophy } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Awards: React.FC = () => {
    return (
        <section id="awards" style={{ padding: "5rem 1.25rem", position: "relative" }}>
            <div className="editorial-container">
                {/* Reference Section Header: 05 —— AWARDS */}
                <SectionHeader
                    number="05"
                    tag="AWARDS"
                    title="Awards"
                    subtitle="Milestones and professional recognitions achieved throughout my engineering journey."
                />

                <div className="row g-4">
                    {awardsData.map((award, idx) => (
                        <div key={idx} className="col-md-4">
                            <motion.div
                                className="m-card h-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span
                                        className="font-mono-m"
                                        style={{ fontSize: "0.8rem", color: "var(--m-accent)", fontWeight: 700 }}
                                    >
                                        {award.year}
                                    </span>
                                    <div
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "8px",
                                            background: "rgba(59, 130, 246, 0.1)",
                                            color: "var(--m-accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Trophy size={16} />
                                    </div>
                                </div>

                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--m-text)", marginBottom: "0.4rem" }}>
                                    {award.title}
                                </h3>
                                <div
                                    className="font-mono-m"
                                    style={{ fontSize: "0.8rem", color: "var(--m-muted)", marginBottom: "0.75rem" }}
                                >
                                    {award.issuer}
                                </div>
                                <p style={{ fontSize: "0.9rem", color: "var(--m-muted)", margin: 0, lineHeight: 1.6 }}>
                                    {award.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;

