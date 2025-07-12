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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar bg-dark px-3 py-2 position-relative">
            <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
                <div className="logo d-flex align-items-center text-white">
                    <img
                        src={logoImage}
                        alt="Logo"
                        style={{ height: "40px", marginRight: "8px" }}
                    />
                    Ahsan's Portfolio
                </div>

                <ul className="nav-links d-flex align-items-center mb-0">
                    {sections.map((section, i) => {
                        const icons = [
                            FaHome,
                            FaUser,
                            FaCode,
                            FaFolderOpen,
                            FaEnvelope,
                        ];
                        const labels = [
                            "Home",
                            "About",
                            "Skills",
                            "Projects",
                            "Contact",
                        ];
                        const Icon = icons[i];
                        return (
                            <li key={section}>
                                <Link
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    className={
                                        activeSection === section
                                            ? "active"
                                            : ""
                                    }
                                >
                                    <Icon className="nav-icon" /> {labels[i]}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <a
                    href={pdfFile}
                    download="Ahsan-CV.pdf"
                    className="btn btn-primary"
                >
                    Download CV
                </a>
            </div>

            <div className="d-flex d-lg-none justify-content-between align-items-center w-100">
                <div className="logo d-flex align-items-center text-white">
                    <img
                        src={logoImage}
                        alt="Logo"
                        style={{ height: "40px", marginRight: "8px" }}
                    />
                    Ahsan's Portfolio
                </div>

                <div
                    className="text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ fontSize: "24px", cursor: "pointer" }}
                >
                    ☰
                </div>
            </div>

            <ul
                className={`nav-links-mobile position-absolute top-100 start-0 w-100 bg-dark shadow-lg rounded-bottom px-4 py-3 ${
                    isMobileMenuOpen ? "d-block" : "d-none"
                } d-lg-none`}
                style={{
                    marginTop: "8px",
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    zIndex: 999,
                }}
            >
                {sections.map((section, i) => {
                    const icons = [
                        FaHome,
                        FaUser,
                        FaCode,
                        FaFolderOpen,
                        FaEnvelope,
                    ];
                    const labels = [
                        "Home",
                        "About",
                        "Skills",
                        "Projects",
                        "Contact",
                    ];
                    const Icon = icons[i];
                    return (
                        <li key={section} className="mb-2">
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                className={
                                    activeSection === section ? "active" : ""
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Icon className="nav-icon" /> {labels[i]}
                            </Link>
                        </li>
                    );
                })}
                <li className="mt-2">
                    <a href={pdfFile} download="Ahsan-CV.pdf" className="btn">
                        Download CV
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
