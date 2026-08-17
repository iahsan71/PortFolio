"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    FaReact, 
    FaNodeJs, 
    FaGitAlt, 
    FaGithub, 
    FaBootstrap, 
    FaJsSquare, 
    FaHtml5, 
    FaCss3Alt 
} from "react-icons/fa";
import { 
    SiNextdotjs, 
    SiMongodb, 
    SiExpress, 
    SiFirebase, 
    SiTypescript, 
    SiRedux, 
    SiTailwindcss, 
    SiMui, 
    SiPostman, 
    SiVscodium, 
    SiFigma 
} from "react-icons/si";
import { Brain, Sparkles, Cpu } from "lucide-react";

const TechWall = () => {
    const techItems = [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Material UI", icon: <SiMui /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <SiVscodium /> },
        { name: "Cursor AI", icon: <Sparkles size={20} /> },
        { name: "ChatGPT", icon: <Brain size={20} /> },
        { name: "Claude AI", icon: <Cpu size={20} /> },
        { name: "Prompt Eng.", icon: <Sparkles size={20} /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> }
    ];

    // Double the array for seamless infinite looping
    const scrollingItems = [...techItems, ...techItems];

    return (
        <section id="tech-stack" className="tech-stack" style={{ position: "relative", overflow: "hidden" }}>
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        Tech <span className="gradient-text">Stack Wall</span>
                    </h2>
                    <p className="section-subtitle">
                        My primary development stack, testing tools, and design suites
                    </p>
                </motion.div>

                <div className="tech-wall-container">
                    <div className="tech-wall">
                        {scrollingItems.map((item, idx) => (
                            <div key={idx} className="tech-wall-item">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechWall;
