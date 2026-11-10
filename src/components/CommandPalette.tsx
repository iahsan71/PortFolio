"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
    Search,
    Home,
    User,
    Code,
    Briefcase,
    Mail,
    Download,
    Layers,
    FileText,
    Github,
    Linkedin,
    X
} from "lucide-react";
import { personalInfo, projectsData } from "../data/portfolioData";

interface PaletteAction {
    name: string;
    category: "Navigation" | "Section" | "Action" | "External" | "Project";
    icon: React.ReactNode;
    action: () => void;
}

const CommandPalette: React.FC = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const baseActions: PaletteAction[] = [
        { name: "Go to Home", category: "Navigation", icon: <Home size={16} />, action: () => router.push("/") },
        { name: "About Ahsan Afzal", category: "Navigation", icon: <User size={16} />, action: () => router.push("/about") },
        { name: "All Projects (Work)", category: "Navigation", icon: <Layers size={16} />, action: () => router.push("/work") },
        { name: "Jump to Skills", category: "Section", icon: <Code size={16} />, action: () => { router.push("/"); setTimeout(() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }), 100); } },
        { name: "Jump to Experience", category: "Section", icon: <Briefcase size={16} />, action: () => { router.push("/"); setTimeout(() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }), 100); } },
        { name: "Contact Me", category: "Section", icon: <Mail size={16} />, action: () => { router.push("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100); } },
        {
            name: "Download Resume / CV",
            category: "Action",
            icon: <Download size={16} />,
            action: () => {
                const link = document.createElement("a");
                link.href = personalInfo.resumeUrl;
                link.download = "Ahsan-Afzal-Resume.pdf";
                link.click();
            }
        },
        { name: "Open GitHub Profile", category: "External", icon: <Github size={16} />, action: () => window.open(personalInfo.github, "_blank", "noopener,noreferrer") },
        { name: "Open LinkedIn Profile", category: "External", icon: <Linkedin size={16} />, action: () => window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer") }
    ];

    // Include project pages dynamically in command palette
    const projectActions: PaletteAction[] = projectsData.map((p) => ({
        name: `Project: ${p.title}`,
        category: "Project",
        icon: <FileText size={16} />,
        action: () => router.push(`/work/${p.slug}`)
    }));

    const allActions: PaletteAction[] = [...baseActions, ...projectActions];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        const handleCustomTrigger = () => setIsOpen((prev) => !prev);

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

    const filteredActions = allActions.filter((act) =>
        act.name.toLowerCase().includes(search.toLowerCase()) ||
        act.category.toLowerCase().includes(search.toLowerCase())
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => (filteredActions.length > 0 ? (prev + 1) % filteredActions.length : 0));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => (filteredActions.length > 0 ? (prev - 1 + filteredActions.length) % filteredActions.length : 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (filteredActions[selectedIndex]) {
                filteredActions[selectedIndex].action();
                setIsOpen(false);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "10vh 1.25rem 2rem"
            }}
            onClick={() => setIsOpen(false)}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    background: "var(--m-surface)",
                    border: "1px solid var(--m-border-strong)",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Header */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "1rem 1.25rem",
                        borderBottom: "1px solid var(--m-border)"
                    }}
                >
                    <Search size={18} style={{ color: "var(--m-muted)" }} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type a command or search project..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setSelectedIndex(0);
                        }}
                        onKeyDown={handleKeyDown}
                        style={{
                            flexGrow: 1,
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "var(--m-text)",
                            fontSize: "0.95rem"
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close command palette"
                        style={{ background: "transparent", border: "none", color: "var(--m-dim)", cursor: "pointer" }}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Results List */}
                <div style={{ maxHeight: "360px", overflowY: "auto", padding: "0.5rem" }}>
                    {filteredActions.length === 0 ? (
                        <div style={{ padding: "2rem", textAlign: "center", color: "var(--m-muted)", fontSize: "0.875rem" }}>
                            No matching commands found.
                        </div>
                    ) : (
                        filteredActions.map((action, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    action.action();
                                    setIsOpen(false);
                                }}
                                onMouseEnter={() => setSelectedIndex(idx)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "0.75rem 1rem",
                                    borderRadius: "0.6rem",
                                    cursor: "pointer",
                                    background: idx === selectedIndex ? "rgba(59, 130, 246, 0.12)" : "transparent",
                                    color: idx === selectedIndex ? "var(--m-text)" : "var(--m-muted)",
                                    transition: "background 0.15s ease"
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <span style={{ color: idx === selectedIndex ? "var(--m-accent)" : "var(--m-dim)" }}>
                                        {action.icon}
                                    </span>
                                    <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                                        {action.name}
                                    </span>
                                </div>
                                <span
                                    className="font-mono-m"
                                    style={{
                                        fontSize: "0.7rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.15em",
                                        color: "var(--m-dim)",
                                        background: "rgba(255, 255, 255, 0.04)",
                                        padding: "0.2rem 0.5rem",
                                        borderRadius: "0.3rem"
                                    }}
                                >
                                    {action.category}
                                </span>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer hints */}
                <div
                    className="font-mono-m"
                    style={{
                        padding: "0.6rem 1.25rem",
                        background: "rgba(0, 0, 0, 0.3)",
                        borderTop: "1px solid var(--m-border)",
                        fontSize: "0.725rem",
                        color: "var(--m-dim)",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <span>↑↓ navigate · Enter to select</span>
                    <span>ESC to close</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;

