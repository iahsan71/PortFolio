import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ value, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            if (start === end) return;

            let duration = 2; // seconds
            let totalMiliseconds = duration * 1000;
            let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
            
            let timer = setInterval(() => {
                start += Math.ceil(end / 100);
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                } else {
                    setCount(start);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="achievement-number">
            {count}{suffix}
        </span>
    );
};

const Achievements = () => {
    const stats = [
        { value: "3", suffix: "+", label: "Years of Experience" },
        { value: "25", suffix: "+", label: "Projects Completed" },
        { value: "30", suffix: "+", label: "Technologies Mastered" },
        { value: "100", suffix: "+", label: "GitHub Contributions" },
        { value: "15", suffix: "+", label: "Happy Clients" },
        { value: "8", suffix: "+", label: "Professional Milestones" }
    ];

    return (
        <section id="achievements" className="achievements" style={{ position: "relative" }}>
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="section-subtitle">
                        Milestones and metrics indicating my development path and dedication
                    </p>
                </motion.div>

                <div className="achievements-grid">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="achievement-card">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <span className="achievement-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
