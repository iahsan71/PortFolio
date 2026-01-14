import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "LordsHub Gaming",
            description: "A comprehensive gaming platform featuring modern UI/UX design, real-time interactions, and seamless user experience. Built with cutting-edge web technologies to deliver exceptional performance and engaging gameplay features.",
            image: "/api/placeholder/600/400", // Placeholder - you can replace with actual screenshots
            technologies: ["React.js", "Firebase", "CSS3", "JavaScript", "Responsive Design"],
            liveUrl: "https://lordshubgaming.web.app/",
            features: [
                "Modern Gaming Interface",
                "Real-time User Interactions", 
                "Responsive Design",
                "Firebase Integration",
                "Performance Optimized"
            ],
            category: "Gaming Platform"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A premium developer portfolio showcasing modern web development skills with sophisticated animations, glassmorphism design, and optimal performance. Features clean code architecture and responsive design principles.",
            image: "/api/placeholder/600/400", // Placeholder - you can replace with actual screenshots
            technologies: ["React.js", "Framer Motion", "SCSS", "Firebase", "Modern CSS"],
            liveUrl: "https://portfolio-aahsan.web.app/",
            features: [
                "Premium UI/UX Design",
                "Advanced Animations",
                "Glassmorphism Effects",
                "Mobile Responsive",
                "SEO Optimized"
            ],
            category: "Portfolio"
        }
    ];

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

    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
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
        <section id="projects" className="projects">
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Showcasing my latest work and technical expertise
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={projectVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="project-image">
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: index === 0 
                                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                        : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    {index === 0 ? '🎮' : '💼'}
                                </div>
                                <div className="project-overlay">
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                            borderRadius: '50px',
                                            padding: '1rem 2rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        <ExternalLink size={18} />
                                        View Live
                                    </motion.a>
                                </div>
                            </div>

                            <div className="project-content">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1rem'
                                }}>
                                    <div>
                                        <h3 className="project-title">{project.title}</h3>
                                        <div style={{
                                            background: 'var(--gradient-primary)',
                                            color: 'white',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            display: 'inline-block',
                                            marginBottom: '1rem'
                                        }}>
                                            {project.category}
                                        </div>
                                    </div>
                                </div>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: 'var(--text-primary)',
                                        marginBottom: '0.75rem'
                                    }}>
                                        Key Features:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        display: 'grid',
                                        gap: '0.5rem'
                                    }}>
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.9rem'
                                            }}>
                                                <div style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    background: 'var(--accent-primary)',
                                                    borderRadius: '50%'
                                                }} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-tech">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ExternalLink size={16} />
                                        Live Preview
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        padding: '3rem',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '24px'
                    }}
                >
                    <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                    }}>
                        Interested in working together?
                    </h3>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        marginBottom: '2rem',
                        maxWidth: '500px',
                        margin: '0 auto 2rem'
                    }}>
                        I'm always open to discussing new opportunities and exciting projects.
                    </p>
                    <motion.a
                        href="#contact"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowRight size={18} />
                        Let's Connect
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;