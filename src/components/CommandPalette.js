"use client";

import React, { useEffect, useState, useRef } from "react";
import { Search, Home, User, Code, Briefcase, Mail, Download, Sun, Moon, Link as LinkIcon, Compass, Sparkles } from "lucide-react";
import { Link, animateScroll as scroll } from "react-scroll";
const pdfFile = "/Ahsan_Afzal_Resume.pdf";

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);

    const actions = [
        { name: "Go to Home", icon: <Home size={16} />, type: "nav", target: "hero" },
        { name: "Go to About Me", icon: <User size={16} />, type: "nav", target: "about" },
        { name: "Go to Skills", icon: <Code size={16} />, type: "nav", target: "skills" },
        { name: "Go to Experience", icon: <Briefcase size={16} />, type: "nav", target: "experience" },
        { name: "Go to Projects", icon: <Compass size={16} />, type: "nav", target: "projects" },
        { name: "Go to Services", icon: <Sparkles size={16} />, type: "nav", target: "services" },
        { name: "Go to Contact Me", icon: <Mail size={16} />, type: "nav", target: "contact" },
        {
            name: "Download Resume / CV", icon: <Download size={16} />, type: "link", action: () => {
                const link = document.createElement('a');
                link.href = pdfFile;
                link.download = 'Ahsan-Afzal-Resume.pdf';
                link.click();
            }
        },
        {
            name: "Toggle Theme Mode", icon: <Sun size={16} />, type: "action", action: () => {
                const isLight = document.body.classList.toggle("light-theme");
                localStorage.setItem("theme", isLight ? "light" : "dark");
                window.dispatchEvent(new Event('storage')); // Notify components
            }
        },
        { name: "Open GitHub Profile", icon: <LinkIcon size={16} />, type: "url", url: "https://github.com" },
        { name: "Open LinkedIn Profile", icon: <LinkIcon size={16} />, type: "url", url: "https://linkedin.com" }
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        const handleCustomTrigger = () => {
            setIsOpen((prev) => !prev);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("toggle-command-palette", handleCustomTrigger);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("toggle-command-palette", handleCustomTrigger);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setSearch("");
            setSelectedIndex(0);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const filteredActions = actions.filter((act) =>
        act.name.toLowerCase().includes(search.toLowerCase())
    );

    const executeAction = (action) => {
        if (action.type === "nav") {
            const element = document.getElementById(action.target);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else if (action.type === "url") {
            window.open(action.url, "_blank", "noopener,noreferrer");
        } else if (action.type === "link" || action.type === "action") {
            action.action();
        }
        setIsOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (filteredActions[selectedIndex]) {
                executeAction(filteredActions[selectedIndex]);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
            <div className="command-palette-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="command-palette-search">
                    <Search size={18} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type a command or search section..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setSelectedIndex(0); }}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className="command-palette-results">
                    {filteredActions.map((action, idx) => (
                        <div
                            key={idx}
                            className={`command-palette-item ${idx === selectedIndex ? "selected" : ""}`}
                            onClick={() => executeAction(action)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                        >
                            {action.icon}
                            <span>{action.name}</span>
                        </div>
                    ))}
                    {filteredActions.length === 0 && (
                        <div style={{ padding: "1.5rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                            No results found.
                        </div>
                    )}
                </div>

                <div className="command-palette-footer">
                    <span><kbd>↑↓</kbd> to navigate</span>
                    <span><kbd>Enter</kbd> to select</span>
                    <span><kbd>ESC</kbd> to close</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
