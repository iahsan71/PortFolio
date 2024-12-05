import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="contact-header"
            >
                <h2>Contact Me</h2>
                <p>
                    Feel free to reach out! I'm always open to discussing new
                    opportunities or answering your questions.
                </p>
            </motion.div>

            {/* Contact Form */}
            <form
                action="https://formspree.io/f/xzzbojvp"
                method="POST"
                className="contact-form"
            >
                <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                ></motion.textarea>
                <motion.button
                    type="submit"
                    className="btn"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    Send Message
                </motion.button>
            </form>
        </section>
    );
};

export default Contact;
