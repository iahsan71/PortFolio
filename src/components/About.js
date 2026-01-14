import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Target, Users, Award } from "lucide-react";

const About = () => {
    const highlights = [
        {
            icon: <Code2 size={24} />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code with modern best practices and performance optimization."
        },
        {
            icon: <Palette size={24} />,
            title: "UI Precision",
            description: "Pixel-perfect implementations that bring designs to life with attention to every detail."
        },
        {
            icon: <Zap size={24} />,
            title: "Performance First",
            description: "Building lightning-fast applications optimized for speed and user experience."
        },
        {
            icon: <Target size={24} />,
            title: "Problem Solver",
            description: "Analytical approach to complex challenges with innovative, efficient solutions."
        }
    ];

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
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="about" className="about">
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        Passionate about creating exceptional digital experiences
                    </p>
                </motion.div>

                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants} className="about-text">
                        <p>
                            I'm <strong>Ahsan Afzal</strong>, a dedicated Front-End Developer with a passion for 
                            crafting exceptional digital experiences. With expertise in modern web technologies, 
                            I specialize in transforming complex ideas into intuitive, high-performance applications 
                            that users love.
                        </p>
                        
                        <p>
                            My journey in web development is driven by a commitment to <strong>clean code</strong>, 
                            <strong>pixel-perfect UI implementation</strong>, and <strong>performance optimization</strong>. 
                            I thrive on solving complex problems and building scalable solutions that make a real impact.
                        </p>
                        
                        <p>
                            Working with cutting-edge technologies like <strong>React.js</strong>, <strong>Next.js</strong>, 
                            <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, I create seamless user experiences 
                            backed by robust <strong>Firebase</strong> integrations and <strong>API-driven architectures</strong>.
                        </p>
                        
                        <p>
                            I believe in continuous learning and staying ahead of industry trends. Whether it's implementing 
                            the latest design patterns, optimizing for Core Web Vitals, or exploring new frameworks, 
                            I'm always pushing the boundaries of what's possible in web development.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="about-highlights"
                        variants={containerVariants}
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="highlight-card"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="highlight-icon">
                                    {highlight.icon}
                                </div>
                                <h3 className="highlight-title">{highlight.title}</h3>
                                <p className="highlight-desc">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="about-stats"
                        variants={itemVariants}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '2rem',
                            marginTop: '3rem',
                            textAlign: 'center'
                        }}
                    >
                        <div className="stat-item">
                            <div style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: '800', 
                                color: 'var(--accent-primary)',
                                marginBottom: '0.5rem'
                            }}>
                                3+
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                Years Experience
                            </div>
                        </div>
                        <div className="stat-item">
                            <div style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: '800', 
                                color: 'var(--accent-primary)',
                                marginBottom: '0.5rem'
                            }}>
                                50+
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                Projects Completed
                            </div>
                        </div>
                        <div className="stat-item">
                            <div style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: '800', 
                                color: 'var(--accent-primary)',
                                marginBottom: '0.5rem'
                            }}>
                                10+
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                Technologies
                            </div>
                        </div>
                        <div className="stat-item">
                            <div style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: '800', 
                                color: 'var(--accent-primary)',
                                marginBottom: '0.5rem'
                            }}>
                                100%
                            </div>
                            <div style={{ color: 'var(--text-secondary)' }}>
                                Client Satisfaction
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;