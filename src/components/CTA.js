import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, Sparkles } from "lucide-react";

const CTA = () => {
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
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="cta" className="cta-section">
            <div className="container-custom">
                <motion.div
                    className="cta-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '2rem'
                        }}>
                            <motion.div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                                }}
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Sparkles size={32} color="white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h2 
                        className="cta-title"
                        variants={itemVariants}
                    >
                        Let's Build Something <span className="gradient-text">Great</span>
                    </motion.h2>

                    <motion.p 
                        className="cta-description"
                        variants={itemVariants}
                    >
                        Ready to transform your ideas into exceptional digital experiences? 
                        I'm here to help bring your vision to life with cutting-edge technology 
                        and premium design.
                    </motion.p>

                    <motion.div 
                        className="cta-buttons"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="mailto:ahsanafzal129@gmail.com"
                            className="btn-primary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={18} />
                            Get In Touch
                        </motion.a>

                        <motion.a
                            href="#projects"
                            className="btn-secondary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight size={18} />
                            View My Work
                        </motion.a>
                    </motion.div>

                    <motion.div 
                        className="cta-features"
                        variants={itemVariants}
                    >
                        {[
                            {
                                icon: <ArrowRight size={20} />,
                                title: "Fast Delivery",
                                description: "Quick turnaround without compromising quality"
                            },
                            {
                                icon: <Sparkles size={20} />,
                                title: "Premium Quality",
                                description: "Pixel-perfect designs with clean code"
                            },
                            {
                                icon: <MessageCircle size={20} />,
                                title: "Great Communication",
                                description: "Regular updates and transparent process"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="cta-feature"
                                whileHover={{ y: -5 }}
                            >
                                <div className="cta-feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '100px',
                    height: '100px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    opacity: 0.05,
                    zIndex: -1
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '80px',
                    height: '80px',
                    background: 'var(--gradient-secondary)',
                    borderRadius: '30%',
                    opacity: 0.05,
                    zIndex: -1
                }}
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, -180, -360]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </section>
    );
};

export default CTA;