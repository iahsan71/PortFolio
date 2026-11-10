"use client";

import React from "react";
import { skillsData } from "../data/portfolioData";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJsSquare
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiTypescript,
    SiRedux,
    SiTailwindcss,
    SiPostman
} from "react-icons/si";
import { Sparkles, Terminal } from "lucide-react";

const getIcon = (name: string): React.ReactNode => {
    switch (name) {
        case "React.js":
        case "React":
            return <FaReact aria-hidden="true" style={{ color: "#61DAFB" }} />;
        case "Next.js 14":
        case "Next.js":
            return <SiNextdotjs aria-hidden="true" style={{ color: "#fff" }} />;
        case "Node.js":
            return <FaNodeJs aria-hidden="true" style={{ color: "#68A063" }} />;
        case "Express.js":
            return <SiExpress aria-hidden="true" style={{ color: "#fff" }} />;
        case "MongoDB":
            return <SiMongodb aria-hidden="true" style={{ color: "#47A248" }} />;
        case "TypeScript":
            return <SiTypescript aria-hidden="true" style={{ color: "#3178C6" }} />;
        case "JavaScript":
            return <FaJsSquare aria-hidden="true" style={{ color: "#F7DF1E" }} />;
        case "Redux Toolkit":
            return <SiRedux aria-hidden="true" style={{ color: "#764ABC" }} />;
        case "Tailwind CSS":
            return <SiTailwindcss aria-hidden="true" style={{ color: "#38B2AC" }} />;
        case "Firebase":
            return <SiFirebase aria-hidden="true" style={{ color: "#FFCA28" }} />;
        case "Postman":
            return <SiPostman aria-hidden="true" style={{ color: "#FF6C37" }} />;
        case "Git":
            return <FaGitAlt aria-hidden="true" style={{ color: "#F05032" }} />;
        case "GitHub":
            return <FaGithub aria-hidden="true" style={{ color: "#fff" }} />;
        case "Cursor AI":
        case "Claude Code":
            return <Sparkles aria-hidden="true" size={16} style={{ color: "var(--m-accent)" }} />;
        default:
            return <Terminal aria-hidden="true" size={15} style={{ color: "var(--m-muted)" }} />;
    }
};

const TechWall: React.FC = () => {
    // Duplicate the marquee list for seamless 50% infinite translation
    const items = [...skillsData.marquee, ...skillsData.marquee];

    return (
        <div style={{ marginTop: "2rem", width: "100%", overflow: "hidden" }}>
            <div className="editorial-container mb-3">
                <span
                    className="font-mono-m"
                    style={{
                        fontSize: "0.725rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "var(--m-dim)"
                    }}
                >
                    ACTIVE PRODUCTION STACK · HOVER TO PAUSE
                </span>
            </div>

            <div className="m-marquee-container">
                <div className="m-marquee-track">
                    {items.map((tech, idx) => (
                        <div key={idx} className="m-marquee-item">
                            <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center" }}>
                                {getIcon(tech)}
                            </span>
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechWall;

