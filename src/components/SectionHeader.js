import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ title, highlight, subtitle }) => {
    return (
        <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "4rem", textAlign: "center", position: "relative" }}
        >
            <motion.h2 
                className="section-title"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, position: "relative", display: "inline-block" }}
            >
                {title} <span className="gradient-text">{highlight}</span>
                {/* Subtle animated underline */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    style={{
                        height: "4px",
                        background: "var(--gradient-primary)",
                        borderRadius: "2px",
                        margin: "8px auto 0",
                    }}
                />
            </motion.h2>
            {subtitle && (
                <motion.p 
                    className="section-subtitle"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginTop: "1rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
