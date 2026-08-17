import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaReact, 
    FaJsSquare,
    FaGitAlt,
    FaNodeJs,
    FaGithub,
    FaBootstrap
} from "react-icons/fa";
import { 
    SiFirebase, 
    SiTypescript, 
    SiTailwindcss,
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiRedux,
    SiReactquery,
    SiMui,
    SiJsonwebtokens,
    SiPostman
} from "react-icons/si";
import { Globe, Database, Settings, ShieldAlert, Cpu } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Globe size={22} />,
            skills: [
                { name: "React.js", icon: <FaReact />, percentage: 95 },
                { name: "Next.js", icon: <SiNextdotjs />, percentage: 88 },
                { name: "JavaScript", icon: <FaJsSquare />, percentage: 95 },
                { name: "TypeScript", icon: <SiTypescript />, percentage: 90 },
                { name: "HTML5", icon: <FaHtml5 />, percentage: 95 },
                { name: "CSS3", icon: <FaCss3Alt />, percentage: 90 },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 92 },
                { name: "Bootstrap", icon: <FaBootstrap />, percentage: 88 },
                { name: "Material UI", icon: <SiMui />, percentage: 85 }
            ]
        },
        {
            title: "Backend Development",
            icon: <Cpu size={22} />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, percentage: 90 },
                { name: "Express.js", icon: <SiExpress />, percentage: 92 }
            ]
        },
        {
            title: "Database Management",
            icon: <Database size={22} />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb />, percentage: 88 },
                { name: "Firebase", icon: <SiFirebase />, percentage: 85 }
            ]
        },
        {
            title: "AI & Prompt Engineering",
            icon: <Cpu size={22} />,
            skills: [
                { name: "ChatGPT & Claude", icon: <Cpu />, percentage: 95 },
                { name: "GitHub Copilot & Cursor", icon: <Cpu />, percentage: 95 },
                { name: "Antigravity & Kiro", icon: <Cpu />, percentage: 92 },
                { name: "Prompt Engineering", icon: <Cpu />, percentage: 92 },
                { name: "AI-Assisted Debugging & Code Gen", icon: <Cpu />, percentage: 90 }
            ]
        },
        {
            title: "Other & Architecture",
            icon: <Settings size={22} />,
            skills: [
                { name: "REST APIs", icon: <Settings />, percentage: 95 },
                { name: "Authentication", icon: <ShieldAlert />, percentage: 90 },
                { name: "JWT Tokens", icon: <SiJsonwebtokens />, percentage: 92 },
                { name: "Git & Versioning", icon: <FaGitAlt />, percentage: 90 },
                { name: "GitHub", icon: <FaGithub />, percentage: 92 },
                { name: "Redux Toolkit", icon: <SiRedux />, percentage: 88 },
                { name: "React Query", icon: <SiReactquery />, percentage: 85 },
                { name: "Responsive Design", icon: <Globe />, percentage: 95 },
                { name: "API Integration", icon: <SiPostman />, percentage: 95 },
                { name: "App Deployment", icon: <Globe />, percentage: 88 },
                { name: "Performance Optimization", icon: <Cpu />, percentage: 87 }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="skills" className="skills" style={{ position: "relative" }}>
            <div className="container-custom">
                <SectionHeader 
                    title="My Technical" 
                    highlight="Skills" 
                    subtitle="Expertise and tech stack built through professional experience" 
                />

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category, index) => (
                        <div key={index} className="col-12 col-xl-6">
                            <motion.div
                                variants={categoryVariants}
                                className="skill-category-card p-4 p-md-5 rounded-4 h-100"
                                style={{
                                    background: "var(--card-bg)",
                                    border: "1px solid var(--border-color)",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "var(--shadow-primary)",
                                    transition: "var(--transition-smooth)"
                                }}
                                whileHover={{
                                    y: -6,
                                    borderColor: "var(--accent-primary)",
                                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
                                }}
                            >
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div 
                                        className="d-flex align-items-center justify-content-center p-2 rounded-3"
                                        style={{
                                            background: "rgba(59, 130, 246, 0.1)",
                                            color: "var(--accent-primary)"
                                        }}
                                    >
                                        {category.icon}
                                    </div>
                                    <h3 style={{ fontSize: "1.35rem", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="d-flex flex-column gap-3">
                                    {category.skills.map((skill, sIndex) => (
                                        <div key={sIndex} className="skill-progress-bar-container">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <div className="d-flex align-items-center gap-2" style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "0.95rem" }}>
                                                    <span style={{ display: "inline-flex", color: "var(--accent-secondary)" }}>{skill.icon}</span>
                                                    <span>{skill.name}</span>
                                                </div>
                                                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                                                    {skill.percentage}%
                                                </span>
                                            </div>
                                            <div 
                                                style={{
                                                    height: "6px",
                                                    background: "var(--glass-bg)",
                                                    borderRadius: "3px",
                                                    overflow: "hidden",
                                                    width: "100%"
                                                }}
                                            >
                                                <motion.div
                                                    style={{
                                                        height: "100%",
                                                        background: "var(--gradient-primary)",
                                                        borderRadius: "3px",
                                                        originX: 0
                                                    }}
                                                    initial={{ scaleX: 0 }}
                                                    whileInView={{ scaleX: skill.percentage / 100 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;