import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social Media Section */}
            <div className="footer-section social-section">
                <h3>Connect with Me</h3>
                <div className="social-icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100050771470777&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="social-link"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/ahsankhan.71/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="social-link"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ahsan-afzal-bb6098281/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="social-link"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/iahsan71"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="social-link"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://wa.me/qr/BYNKODHGVN32M1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="social-link"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            {/* Contact Information */}
            <div className="footer-section contact-section">
                <h3>Contact Me</h3>
                <p>
                    <FaEnvelope />{" "}
                    <a href="mailto:reactwithahsan@gmail.com">
                        reactwithahsan@gmail.com
                    </a>
                </p>
                <p>
                    <FaPhoneAlt /> +92 349 3082202
                </p>
                <p>
                    <FaMapMarkerAlt /> Jhelum, Pakistan
                </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section links-section">
                <h3>Quick Links</h3>
                <ul>
                    <li>
                        <a href="#hero" className="footer-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="footer-link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="footer-link">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="footer-link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="footer-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Ahsan's Portfolio. Built
                    with ❤️ and React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
