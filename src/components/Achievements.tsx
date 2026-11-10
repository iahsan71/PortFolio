"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

interface CounterProps {
    value: string | number;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
    const end = typeof value === "number" ? value : parseInt(value, 10);
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref as unknown as React.RefObject<Element>, { once: true, margin: "-80px" });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        if (isNaN(end) || start === end) {
            setCount(end);
            return;
        }

        const duration = 1600;
        const stepTime = Math.max(16, Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, end]);

    return (
        <span ref={ref} className="m-stat-number font-mono-m">
            {count}
            <span className="m-stat-suffix">{suffix}</span>
        </span>
    );
};

const Achievements: React.FC = () => {
    return (
        <section id="stats" style={{ padding: "4rem 1.25rem", position: "relative" }}>
            <div className="editorial-container">
                <div className="m-stats-grid">
                    {personalInfo.stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="m-stat-box"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Counter value={stat.numeric} suffix={stat.suffix} />
                            <span className="m-stat-label">{stat.label}</span>
                            <span className="m-stat-desc">{stat.description}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
