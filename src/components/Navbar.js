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
    X
} from "lucide-react";
import logoImage from "../assets/img/AALOGO.jpg";
import { Link } from "react-scroll";
import pdfFile from "../assets/pdf/AhsanResume.pdf";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sections = [
        { id: "hero", label: "Home", icon: Home },
        { id: "about", label: "About", icon: User },
        { id: "skills", label: "Skills", icon: Code },
        { id: "projects", label: "Projects", icon: FolderOpen },
        { id: "cta", label: "Contact", icon: Mail }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
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
                >
                    <img src={logoImage} alt="Ahsan Afzal Logo" />
                    <span>Ahsan Afzal</span>
                </motion.div>

                {/* Desktop Navigation */}
                <ul className="nav-links d-none d-lg-flex">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <li key={section.id}>
                                <Link
                                    to={section.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className={activeSection === section.id ? "active" : ""}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Icon size={16} />
                                    {section.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop Download Button */}
                <motion.a
                    href={pdfFile}
                    download="Ahsan-Afzal-Resume.pdf"
                    className="download-btn d-none d-lg-flex"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download size={16} />
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
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            zIndex: 1000,
                            boxShadow: 'var(--shadow-primary)',
                            marginTop: '0.5rem' // Add small gap between navbar and menu
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
    );
};

export default Navbar;