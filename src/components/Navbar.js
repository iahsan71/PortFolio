"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    User,
    Code,
    FolderOpen,
    Mail,
    Download,
    Menu,
    X,
    Sun,
    Moon,
    Terminal
} from "lucide-react";
import logoImage from "../assets/img/AALOGO.jpg";
import { Link } from "react-scroll";
const pdfFile = "/Ahsan_Afzal_Resume.pdf";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isLightTheme, setIsLightTheme] = useState(false);

    const sections = [
        { id: "hero", label: "Home", icon: Home },
        { id: "about", label: "About", icon: User },
        { id: "skills", label: "Skills", icon: Code },
        { id: "projects", label: "Projects", icon: FolderOpen },
        { id: "cta", label: "Contact", icon: Mail }
    ];

    useEffect(() => {
        // Check local storage or preference for theme, defaulting to dark
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsLightTheme(true);
            document.body.classList.add("light-theme");
        } else {
            setIsLightTheme(false);
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(progress);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "-20% 0px -25% 0px" }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleTheme = () => {
        if (isLightTheme) {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
            setIsLightTheme(false);
        } else {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
            setIsLightTheme(true);
        }
    };

    const triggerCommandPalette = () => {
        window.dispatchEvent(new CustomEvent("toggle-command-palette"));
    };

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
        }
    };

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0.6, -0.05, 0.01, 0.99],
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: { duration: 0.2 }
        }
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="nav-container">
                    {/* Logo */}
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ cursor: "pointer" }}
                    >
                        <img src={logoImage} alt="Ahsan Afzal Logo" />
                        <span>Ahsan <span className="gradient-text">Afzal</span></span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <ul className="nav-links d-none d-lg-flex" style={{ position: "relative" }}>
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <li key={section.id} style={{ position: "relative" }}>
                                    <Link
                                        to={section.id}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        spy={true}
                                        onSetActive={(to) => setActiveSection(to)}
                                        className={activeSection === section.id ? "active" : ""}
                                        style={{ cursor: 'pointer', position: 'relative', zIndex: 2 }}
                                    >
                                        <Icon size={14} />
                                        {section.label}
                                    </Link>
                                    {activeSection === section.id && (
                                        <motion.div
                                            layoutId="active-nav-pill"
                                            className="active-nav-pill"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            style={{
                                                position: "absolute",
                                                top: "0px",
                                                left: "0px",
                                                right: "0px",
                                                bottom: "0px",
                                                background: "rgba(59, 130, 246, 0.1)",
                                                border: "1px solid rgba(59, 130, 246, 0.2)",
                                                borderRadius: "8px",
                                                zIndex: 1
                                            }}
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="d-flex align-items-center gap-3">
                        {/* Theme Toggle Button */}
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme" style={{ width: "36px", height: "36px" }}>
                            {isLightTheme ? <Moon size={16} /> : <Sun size={16} />}
                        </button>

                        {/* Desktop Download Button */}
                        <motion.a
                            href={pdfFile}
                            download="Ahsan_Afzal_MERN_Resume.pdf"
                            className="download-btn d-none d-lg-flex"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={14} />
                            Download CV
                        </motion.a>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            className="mobile-menu-toggle d-lg-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-primary)',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                transition: 'var(--transition-smooth)'
                            }}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-menu d-lg-none"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '1rem',
                                right: '1rem',
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                zIndex: 1000,
                                boxShadow: 'var(--shadow-primary)',
                                marginTop: '0.5rem'
                            }}
                        >
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                {sections.map((section) => {
                                    const Icon = section.icon;
                                    return (
                                        <motion.li
                                            key={section.id}
                                            variants={mobileItemVariants}
                                        >
                                            <Link
                                                to={section.id}
                                                smooth={true}
                                                duration={500}
                                                offset={-80}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.75rem',
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: '12px',
                                                    color: activeSection === section.id
                                                        ? 'var(--accent-primary)'
                                                        : 'var(--text-secondary)',
                                                    background: activeSection === section.id
                                                        ? 'rgba(59, 130, 246, 0.1)'
                                                        : 'transparent',
                                                    textDecoration: 'none',
                                                    fontWeight: '500',
                                                    transition: 'var(--transition-smooth)',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <Icon size={18} />
                                                {section.label}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                                <motion.li variants={mobileItemVariants} className="d-md-none">
                                    <button
                                        onClick={() => { setIsMobileMenuOpen(false); triggerCommandPalette(); }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '12px',
                                            color: 'var(--text-secondary)',
                                            background: 'var(--glass-bg)',
                                            border: '1px solid var(--border-color)',
                                            fontWeight: '500',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Terminal size={18} />
                                        Search / Command Palette
                                    </button>
                                </motion.li>
                                <motion.li variants={mobileItemVariants}>
                                    <motion.a
                                        href={pdfFile}
                                        download="Ahsan-Afzal-Resume.pdf"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1rem',
                                            background: 'var(--gradient-primary)',
                                            color: 'white',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            marginTop: '0.5rem'
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Download size={16} />
                                        Download CV
                                    </motion.a>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
            {navbarStyles}
        </>
    );
};

const navbarStyles = (
    <style>{`
        .navbar {
            backdrop-filter: blur(24px) !important;
            border-bottom: 1px solid var(--border-color) !important;
            height: 64px !important;
            display: flex !important;
            align-items: center !important;
            padding: 0 !important;
        }
        .nav-container {
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
        }
        .logo {
            font-size: 1.25rem !important;
        }
        .logo img {
            width: 32px !important;
            height: 32px !important;
        }
        .nav-links li a {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: var(--text-secondary);
            font-size: 0.85rem;
            font-weight: 500;
            text-decoration: none;
            padding: 0.35rem 0.75rem;
            border-radius: 9999px;
            transition: var(--transition-smooth);
        }
        .nav-links li a:hover, .nav-links li a.active {
            color: var(--accent-primary) !important;
            background: var(--glass-bg);
        }
        .download-btn {
            background: var(--gradient-primary);
            color: white !important;
            border-radius: 9999px;
            padding: 0.45rem 1rem;
            font-weight: 600;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
            transition: var(--transition-bounce);
        }
        .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
        }
    `}</style>
);

export default Navbar;