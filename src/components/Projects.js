import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            name: "Fans Help Players",
            description: "A responsive site built with React and Firebase.",
            link: "https://fans-help-players-athlete.web.app/",
        },
        {
            name: "Nederlandsadvies",
            description:
                "A Figma design coverted into ReactJS for tracking expenses.",
            link: "https://nederlandsadvies.nl/kunststofkozijnen",
        },
        {
            name: "Max Magazine",
            description: "A Figma design coverted into ReactJS",
            link: "https://maxmagazine.nl/",
        },
        {
            name: "Portfolio Website",
            description:
                "A personal portfolio built using React and modern CSS.",
            link: "/home",
        },
    ];

    return (
        <section id="projects" className="projects">
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="projects-header"
            >
                <h2>My Projects</h2>
                <p>Here are a few of the projects I’ve worked on recently:</p>
            </motion.div>

            {/* Projects Grid */}
            <div className="project-list">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="btn">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
