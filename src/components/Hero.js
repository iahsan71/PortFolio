import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Code, Sparkles } from "lucide-react";
import myPicture from "../assets/img/myPic.jpg";

const Hero = () => {
    const [currentText, setCurrentText] = useState(0);
    const textArray = [
        "Front-End Developer",
        "UI/UX Enthusiast", 
        "React Specialist",
        "Problem Solver"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % textArray.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
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
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="hero" className="hero">
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="hero-image"
                    variants={imageVariants}
                >
                    <img src={myPicture} alt="Ahsan Afzal - Front-End Developer" />
                </motion.div>

                <div className="hero-text">
                    <motion.div variants={itemVariants}>
                        <h1>
                            Hi, I'm <span className="gradient-text">Ahsan Afzal</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h2 className="hero-subtitle">
                            <Code className="inline-icon" />
                            <motion.span
                                key={currentText}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {textArray[currentText]}
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.p 
                        className="hero-description"
                        variants={itemVariants}
                    >
                        Crafting exceptional digital experiences with modern web technologies. 
                        I specialize in building scalable, performance-optimized applications 
                        that combine stunning UI design with robust functionality.
                    </motion.p>

                    <motion.div 
                        className="hero-cta"
                        variants={itemVariants}
                    >
                        <a href="#projects" className="btn-primary">
                            <Sparkles size={18} />
                            View My Work
                        </a>
                        <a href="#about" className="btn-secondary">
                            <ArrowRight size={18} />
                            Learn More
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="floating-element"
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '60px',
                    height: '60px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    opacity: 0.1,
                    zIndex: 1
                }}
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="floating-element"
                style={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: '40px',
                    height: '40px',
                    background: 'var(--gradient-secondary)',
                    borderRadius: '20%',
                    opacity: 0.1,
                    zIndex: 1
                }}
                animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <style jsx>{`
                .inline-icon {
                    display: inline-block;
                    margin-right: 0.5rem;
                    vertical-align: middle;
                }
                
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;