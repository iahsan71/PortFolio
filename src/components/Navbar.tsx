"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { personalInfo, navItems } from "../data/portfolioData";
import { NavItem } from "../types/portfolio";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/" || pathname === "";
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("home");
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [isLight, setIsLight] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 25);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsLight(true);
            document.body.classList.add("light-theme");
        }

        if (isHome) {
            const sections = ["home", "about", "skills", "experience", "projects", "insights", "contact"];
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(entry.target.id);
                        }
                    });
                },
                { rootMargin: "-25% 0px -40% 0px" }
            );

            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });

            return () => {
                observer.disconnect();
                window.removeEventListener("scroll", handleScroll);
            };
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const toggleTheme = () => {
        if (isLight) {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
            setIsLight(false);
        } else {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
            setIsLight(true);
        }
    };

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        if (isHome) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(`/#${id}`);
        }
    };

    return (
        <header className="m-navbar-wrapper">
            <div className={`m-navbar-pill ${scrolled ? "scrolled" : ""}`}>
                {/* Brand / Monogram */}
                <button
                    type="button"
                    onClick={() => scrollTo("home")}
                    className="m-navbar-brand notranslate"
                    aria-label="Home top"
                >
                    <span>{personalInfo.initials}</span>
                    <span className="m-dot">.</span>
                </button>

                {/* Desktop Nav Links */}
                <nav className="m-navbar-links" aria-label="Main Navigation">
                    {navItems.map((item: NavItem) => {
                        if (item.type === "link" && item.href) {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`m-navbar-btn ${isActive ? "active" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        const isActive = isHome && activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollTo(item.id)}
                                className={`m-navbar-btn ${isActive ? "active" : ""}`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Right Actions: Theme Toggle & Mobile Trigger */}
                <div className="m-navbar-actions">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="m-navbar-icon-btn"
                        title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
                    >
                        {isLight ? <Moon size={16} /> : <Sun size={16} />}
                    </button>

                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-label="Toggle navigation menu"
                        className="m-navbar-mobile-toggle"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileOpen && (
                <div className="m-navbar-drawer" style={{ animation: "m-pop-in 0.2s ease-out" }}>
                    {navItems.map((item: NavItem) => {
                        if (item.type === "link" && item.href) {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`m-navbar-btn ${isActive ? "active" : ""}`}
                                    style={{ justifyContent: "flex-start", width: "100%" }}
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        const isActive = isHome && activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollTo(item.id)}
                                className={`m-navbar-btn ${isActive ? "active" : ""}`}
                                style={{ justifyContent: "flex-start", width: "100%" }}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </header>
    );
};

export default Navbar;

