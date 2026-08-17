import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const navigationLinks = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" }
    ];

    return (
        <footer style={{ background: "var(--primary-bg)", borderTop: "1px solid var(--border-color)", padding: "5rem 0 3rem", position: "relative", zIndex: 5 }}>
            <div className="container-custom text-center">
                
                {/* Brand Logo & Tagline */}
                <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 style={{ fontSize: "1.8rem", fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>
                        Ahsan <span className="gradient-text">Afzal</span>
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "0.75rem", maxWidth: "450px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
                        Building scalable MERN Stack web solutions and premium digital architectures with high performance and optimized code.
                    </p>
                </motion.div>

                {/* Quick Navigation Links */}
                <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <ul className="d-flex flex-wrap justify-content-center gap-md-5 gap-3 list-unstyled m-0 p-0">
                        {navigationLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    style={{
                                        color: "var(--text-secondary)",
                                        textDecoration: "none",
                                        fontSize: "0.95rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "var(--transition-smooth)",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "8px"
                                    }}
                                    className="footer-nav-link"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Social Icons & Back to Top */}
                <motion.div 
                    className="d-flex justify-content-center align-items-center gap-3 mb-5"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.a 
                        href="https://github.com/iahsan71" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-social-btn"
                        aria-label="GitHub Profile"
                        whileHover={{ y: -4, scale: 1.1, background: "var(--gradient-primary)", color: "#fff", borderColor: "transparent" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={18} />
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/dev-ahsanafzal/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-social-btn"
                        aria-label="LinkedIn Profile"
                        whileHover={{ y: -4, scale: 1.1, background: "var(--gradient-primary)", color: "#fff", borderColor: "transparent" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Linkedin size={18} />
                    </motion.a>
                    <motion.a 
                        href="mailto:imahsan000@gmail.com" 
                        className="footer-social-btn"
                        aria-label="Send Email"
                        whileHover={{ y: -4, scale: 1.1, background: "var(--gradient-primary)", color: "#fff", borderColor: "transparent" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail size={18} />
                    </motion.a>
                    
                    <motion.button 
                        onClick={scrollToTop} 
                        className="footer-social-btn scroll-top"
                        aria-label="Back to Top"
                        whileHover={{ y: -4, scale: 1.1, background: "var(--gradient-secondary)", color: "#fff", borderColor: "transparent" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                </motion.div>

                <hr style={{ borderTop: "1px solid var(--border-color)", margin: "2rem 0 2rem", opacity: 0.5 }} />

                {/* Footer Copyright */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    <span>
                        &copy; {new Date().getFullYear()} Ahsan Afzal. All rights reserved.
                    </span>
                    <span>
                        Engineered with ❤️ in Pakistan
                    </span>
                </div>
            </div>

            {styleTag}
        </footer>
    );
};

const styleTag = (
    <style>{`
        .footer-nav-link:hover {
            color: var(--text-primary) !important;
            background: var(--glass-bg);
        }
        .footer-social-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: var(--glass-bg);
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.3s, background 0.3s, color 0.3s;
        }
    `}</style>
);

export default Footer;
