import React from "react";
import { motion } from "framer-motion";
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaReact, 
    FaJsSquare,
    FaGitAlt,
    FaFigma
} from "react-icons/fa";
import { 
    SiFirebase, 
    SiTypescript, 
    SiTailwindcss,
    SiNextdotjs,
    SiVercel,
    SiNetlify
} from "react-icons/si";
import { Globe, Database, Palette, Code } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Code size={24} />,
            skills: [
                { name: "React.js", icon: <FaReact />, level: "Expert" },
                { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
                { name: "JavaScript", icon: <FaJsSquare />, level: "Expert" },
                { name: "TypeScript", icon: <SiTypescript />, level: "Advanced" },
                { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
                { name: "CSS3", icon: <FaCss3Alt />, level: "Expert" }
            ]
        },
        {
            title: "Styling & Design",
            icon: <Palette size={24} />,
            skills: [
                { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Expert" },
                { name: "Figma", icon: <FaFigma />, level: "Advanced" },
                { name: "Responsive Design", icon: <Globe />, level: "Expert" },
                { name: "UI/UX Design", icon: <Palette />, level: "Advanced" }
            ]
        },
        {
            title: "Backend & Tools",
            icon: <Database size={24} />,
            skills: [
                { name: "Firebase", icon: <SiFirebase />, level: "Advanced" },
                { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
                { name: "Vercel", icon: <SiVercel />, level: "Advanced" },
                { name: "Netlify", icon: <SiNetlify />, level: "Advanced" },
                { name: "API Integration", icon: <Database />, level: "Advanced" },
                { name: "Authentication", icon: <Database />, level: "Advanced" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const categoryVariants = {
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

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="skills" className="skills">
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <motion.div
                    className="skills-categories"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem',
                        marginBottom: '4rem'
                    }}
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="skill-category"
                            variants={categoryVariants}
                            style={{
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '2rem',
                                transition: 'var(--transition-smooth)'
                            }}
                            whileHover={{
                                y: -5,
                                boxShadow: 'var(--shadow-glow)',
                                borderColor: 'var(--accent-primary)'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: '700',
                                    color: 'var(--text-primary)',
                                    margin: 0
                                }}>
                                    {category.title}
                                </h3>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                                gap: '1rem'
                            }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="skill-item"
                                        variants={skillVariants}
                                        whileHover={{ scale: 1.05 }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '12px',
                                            padding: '1rem',
                                            textAlign: 'center',
                                            transition: 'var(--transition-smooth)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{
                                            fontSize: '2rem',
                                            color: 'var(--accent-primary)',
                                            marginBottom: '0.5rem',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            {skill.icon}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            color: 'var(--text-primary)',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {skill.name}
                                        </div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--text-muted)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {skill.level}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Skills Grid */}
                <motion.div
                    className="featured-skills"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                    }}>
                        Core Technologies
                    </h3>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        {[
                            { name: "React.js", icon: <FaReact /> },
                            { name: "Next.js", icon: <SiNextdotjs /> },
                            { name: "TypeScript", icon: <SiTypescript /> },
                            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                            { name: "Firebase", icon: <SiFirebase /> },
                            { name: "JavaScript", icon: <FaJsSquare /> }
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                className="tech-badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'var(--gradient-primary)',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                                    cursor: 'pointer',
                                    transition: 'var(--transition-smooth)'
                                }}
                            >
                                {tech.icon}
                                {tech.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;