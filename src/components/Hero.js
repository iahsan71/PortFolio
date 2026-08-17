import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    Download,
    Briefcase,
    Sparkles
} from "lucide-react";
import pdfFile from "../assets/pdf/Ahsan_Afzal_Resume.pdf";

const BlurText = ({ text }) => {
    const words = text.split(" ");
    return (
        <span style={{ display: "inline-block" }}>
            {words.map((word, idx) => (
                <motion.span
                    key={idx}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 15 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2 + idx * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{ display: "inline-block", marginRight: "0.2em" }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        "MERN Stack Developer",
        "Full Stack Web Engineer",
        "React.js / Next.js Specialist",
        "Node.js & Express Expert"
    ];

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenRoles = 2000;

    useEffect(() => {
        let timer;
        const currentRole = roles[currentRoleIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1));
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && displayedText === currentRole) {
            timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
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

    const photoContainerVariants = {
        hidden: { opacity: 0, scale: 0.9, rotate: -3 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="hero" className="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
            <div className="container-custom" style={{ width: "100%", zIndex: 2 }}>
                <div className="row align-items-center gy-5">
                    {/* Left content column */}
                    <div className="col-lg-7 text-center text-lg-start">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="hero-text-content d-flex flex-column align-items-center align-items-lg-start"
                        >
                            {/* Availability & Company Tag */}
                            <motion.div
                                variants={itemVariants}
                                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4"
                                style={{
                                    background: "var(--glass-bg)",
                                    border: "1px solid var(--border-color)",
                                    backdropFilter: "blur(10px)"
                                }}
                            >
                                <span className="d-inline-block rounded-circle" style={{ width: 8, height: 8, background: "#10b981", boxShadow: "0 0 8px #10b981", animation: "pulse 2s infinite" }} />
                                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-secondary)" }}>
                                    Available for Projects
                                </span>
                                <span style={{ color: "var(--border-color)" }}>|</span>
                                <Briefcase size={14} style={{ color: "var(--accent-primary)" }} />
                                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-secondary)" }}>
                                    NextPak Agile Solutions
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={itemVariants}
                                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.5rem" }}
                            >
                                <BlurText text="Hi, I'm" /> <span className="gradient-text">Ahsan Afzal</span>
                                <br />
                                <span style={{ fontSize: "clamp(1.3rem, 3vw, 2.3rem)", fontWeight: 700, color: "var(--text-primary)", display: "inline-block", marginTop: "0.5rem" }}>
                                    I am a <span style={{ color: "var(--accent-primary)", borderRight: "2px solid var(--accent-primary)", paddingRight: 4, animation: "blink 0.75s step-end infinite" }}>{displayedText}</span>
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className="hero-description text-center text-lg-start mx-auto mx-lg-0"
                                style={{ fontSize: "1.15rem", color: "var(--text-secondary)", maxWidth: "580px", marginBottom: "2.5rem", lineHeight: 1.7 }}
                            >
                                Specialized in building robust, performant, and premium full-stack web applications using MongoDB, Express.js, React, and Node.js. Passionate about clean architecture, responsive UI design, and optimizing system performance.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-3 mb-5 w-100"
                            >
                                <motion.a 
                                    href="#projects" 
                                    className="btn-primary" 
                                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
                                    whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={16} />
                                    Explore Projects
                                </motion.a>
                                <motion.a 
                                    href="#cta" 
                                    className="btn-secondary" 
                                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
                                    whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.08)", boxShadow: "0 0 15px rgba(255,255,255,0.05)" }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Contact Me
                                    <ArrowRight size={16} />
                                </motion.a>
                                <motion.a
                                    href={pdfFile}
                                    download="Ahsan-Afzal-Resume.pdf"
                                    className="btn-secondary"
                                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", border: "1px solid var(--border-color)", textDecoration: "none" }}
                                    whileHover={{ scale: 1.03, borderColor: "var(--accent-primary)", boxShadow: "0 0 15px rgba(59, 130, 246, 0.15)" }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Download size={16} />
                                    Download CV
                                </motion.a>
                            </motion.div>

                            {/* Social Links & Trust Tags */}
                            <motion.div
                                variants={itemVariants}
                                className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-3 gap-sm-4 w-100"
                            >
                                <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)", fontWeight: 600 }}>Follow Me</span>
                                <div className="d-flex gap-3">
                                    <motion.a 
                                        href="https://github.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ color: "var(--text-secondary)", display: "inline-flex" }}
                                        whileHover={{ y: -3, scale: 1.1, color: "var(--accent-primary)" }}
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                    <motion.a 
                                        href="https://linkedin.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ color: "var(--text-secondary)", display: "inline-flex" }}
                                        whileHover={{ y: -3, scale: 1.1, color: "var(--accent-secondary)" }}
                                    >
                                        <Linkedin size={20} />
                                    </motion.a>
                                    <motion.a 
                                        href="mailto:imahsan000@gmail.com" 
                                        style={{ color: "var(--text-secondary)", display: "inline-flex" }}
                                        whileHover={{ y: -3, scale: 1.1, color: "var(--accent-tertiary)" }}
                                    >
                                        <Mail size={20} />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right column placeholder/visualization */}
                    <div className="col-lg-5">
                        <motion.div
                            variants={photoContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div
                                className="position-relative"
                                style={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    aspectRatio: "1",
                                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                                    background: "linear-gradient(45deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
                                    boxShadow: "var(--shadow-glow)",
                                    animation: "morph 8s ease-in-out infinite",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "4px"
                                }}
                            >
                                {/* Inner Card Container acting as developer placeholder */}
                                <div
                                    className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center p-4"
                                    style={{
                                        background: "var(--secondary-bg)",
                                        borderRadius: "inherit",
                                        backdropFilter: "blur(10px)"
                                    }}
                                >
                                    <div
                                        className="mb-3 p-3 rounded-circle"
                                        style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.2)", width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}
                                    >
                                        <span style={{ fontSize: "2.5rem" }}>💻</span>
                                    </div>
                                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
                                        MERN Stack Developer
                                    </h3>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0.5rem 0 1rem" }}>
                                        &lt;Code / Design / Build&gt;
                                    </p>

                                    {/* Small micro interactive stats inside card */}
                                    <div className="d-flex gap-2">
                                        <span className="px-2 py-1 rounded bg-dark text-white" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", border: "1px solid var(--border-color)" }}>MongoDB</span>
                                        <span className="px-2 py-1 rounded bg-dark text-white" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", border: "1px solid var(--border-color)" }}>React</span>
                                        <span className="px-2 py-1 rounded bg-dark text-white" style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", border: "1px solid var(--border-color)" }}>Node</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Custom keyframes injected inline */}
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                }
                @keyframes blink {
                    from, to { border-color: transparent }
                    50% { border-color: var(--accent-primary); }
                }
                @keyframes morph {
                    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                    50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
                    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                }
                .hover-accent:hover {
                    color: var(--accent-primary) !important;
                    transform: translateY(-3px);
                }
            `}</style>
        </section>
    );
};

export default Hero;