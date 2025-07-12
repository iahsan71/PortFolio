import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

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
                "A Figma design converted into ReactJS for tracking expenses.",
            link: "https://nederlandsadvies.nl/kunststofkozijnen",
        },
        {
            name: "Max Magazine",
            description: "A Figma design converted into ReactJS",
            link: "https://maxmagazine.nl/",
        },
        {
            name: "Portfolio Website",
            description:
                "A personal portfolio built using React and modern CSS.",
            link: "/home",
        },
        {
            name: "NextEats",
            description:
                "A modern restaurants platform developed using React.js & Firebase.",
            link: "https://nexteats-staging.web.app/",
        },
        {
            name: "Texelbit",
            description:
                "A real-time group chat app built for teams, using React, TypeScript and Firebase.",
            link: "https://texelbit-customer.web.app/",
        },
    ];

    return (
        <section id="projects" className="projects py-5">
            <Container>
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="projects-header text-center mb-4"
                >
                    <h2>My Projects</h2>
                    <p>
                        Here are a few of the projects I’ve worked on recently:
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <Row className="justify-content-center">
                    {projects.map((project, index) => (
                        <Col
                            key={index}
                            xs="12"
                            sm="6"
                            md="4"
                            lg="3"
                            className="d-flex justify-content-center mb-4"
                        >
                            <motion.div
                                className="project-card text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <a
                                    href={project.link}
                                    className="btn btn-primary mt-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
