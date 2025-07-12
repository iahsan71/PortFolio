import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                {/* Animated Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-header"
                >
                    <h2>About Me</h2>
                </motion.div>

                {/* Animated Description */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="about-description"
                >
                    <p>
                        Hello! I’m Ahsan, a passionate Front-End Developer with
                        a flair for building beautiful, functional, and
                        user-friendly websites. Proficient in modern web
                        technologies such as{" "}
                        <strong>
                            HTML, CSS, JavaScript, ReactJS, VueJS, TypeScript
                        </strong>
                        , and more, I bring ideas to life with precision and
                        creativity.
                    </p>
                    <p>
                        My expertise also extends to{" "}
                        <strong>Figma designing</strong>, allowing me to
                        seamlessly bridge the gap between design and
                        development. For backend functionality, I rely on{" "}
                        <strong>Firebase</strong> to create scalable and secure
                        solutions.
                    </p>
                    <p>
                        I am continuously learning and experimenting to stay
                        ahead in the ever-evolving world of web development.
                        Let’s build something amazing together!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
