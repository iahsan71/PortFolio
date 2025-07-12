import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaVuejs,
    FaJsSquare,
} from "react-icons/fa";
import { SiFirebase, SiFigma, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Firebase", icon: <SiFirebase /> },
    ];

    return (
        <section id="skills" className="skills py-5">
            <Container>
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="skills-header text-center mb-4"
                >
                    <h2>Skills</h2>
                    <p>
                        Here are some of the technologies and tools I work with:
                    </p>
                </motion.div>

                {/* Skills Grid with Equal Card Sizes */}
                <Row className="justify-content-center">
                    {skills.map((skill, index) => (
                        <Col
                            key={index}
                            xs="6"
                            sm="4"
                            md="3"
                            className="d-flex justify-content-center mb-4"
                        >
                            <motion.div
                                className="skill-card text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <div className="icon mb-2">{skill.icon}</div>
                                <h3>{skill.name}</h3>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
