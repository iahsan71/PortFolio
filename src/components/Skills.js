import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaVuejs,
    FaJsSquare,
} from "react-icons/fa";
import { SiFirebase, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Firebase", icon: <SiFirebase /> },
    ];

    return (
        <section id="skills" className="skills">
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="skills-header"
            >
                <h2>Skills</h2>
                <p>Here are some of the technologies and tools I work with:</p>
            </motion.div>

            {/* Skills Grid */}
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="icon">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
