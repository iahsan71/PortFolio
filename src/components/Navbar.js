import React, { useState, useEffect } from "react";
import {
    FaHome,
    FaUser,
    FaCode,
    FaFolderOpen,
    FaEnvelope,
} from "react-icons/fa";
import logoImage from "../assets/img/AALOGO.jpg";
import { Link } from "react-scroll";
import pdfFile from "../assets/pdf/Resume.pdf";
const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    const sections = ["hero", "about", "skills", "projects", "contact"];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logoImage} alt="Logo" />
                Ahsan's Portfolio
            </div>
            <ul className="nav-links">
                <li>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className={activeSection === "hero" ? "active" : ""}
                    >
                        <FaHome className="nav-icon" /> Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className={activeSection === "about" ? "active" : ""}
                    >
                        <FaUser className="nav-icon" /> About
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className={activeSection === "skills" ? "active" : ""}
                    >
                        <FaCode className="nav-icon" /> Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className={activeSection === "projects" ? "active" : ""}
                    >
                        <FaFolderOpen className="nav-icon" /> Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className={activeSection === "contact" ? "active" : ""}
                    >
                        <FaEnvelope className="nav-icon" /> Contact
                    </Link>
                </li>
            </ul>

            <a href={pdfFile} download="Ahsan-CV.pdf" className="download-btn">
                Download CV
            </a>
        </nav>
    );
};

export default Navbar;
