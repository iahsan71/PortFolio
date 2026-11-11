"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, HelpCircle, Trophy, X } from "lucide-react";

interface GameHeaderProps {
    title: string;
    categoryTag: string;
    moves?: number;
    timer?: number;
    score?: number;
    bestScore?: number | null;
    onReset: () => void;
    rules: string[];
}

export const GameHeader: React.FC<GameHeaderProps> = ({
    title,
    categoryTag,
    moves,
    timer,
    score,
    bestScore,
    onReset,
    rules
}) => {
    const [showRules, setShowRules] = useState(false);

    const formatTimer = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    return (
        <div className="mb-4">
            {/* Top Navigation Row */}
            <div className="d-flex align-items-center justify-content-between mb-3">
                <Link
                    href="/games"
                    className="font-mono-m d-inline-flex align-items-center"
                    style={{
                        fontSize: "0.775rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                        color: "var(--m-muted)",
                        textDecoration: "none",
                        gap: "0.5rem"
                    }}
                >
                    <ArrowLeft size={14} style={{ marginRight: "0.25rem" }} />
                    <span>ARCADE HUB</span>
                </Link>

                <div className="d-flex align-items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setShowRules(true)}
                        className="m-btn-secondary"
                        style={{ padding: "0.35rem 0.75rem", fontSize: "0.75rem", gap: "0.4rem" }}
                        aria-label="View game rules"
                    >
                        <HelpCircle size={14} />
                        <span>Rules</span>
                    </button>
                    <button
                        type="button"
                        onClick={onReset}
                        className="m-btn-secondary"
                        style={{ padding: "0.35rem 0.75rem", fontSize: "0.75rem", gap: "0.4rem" }}
                        aria-label="Restart game"
                    >
                        <RotateCcw size={14} />
                        <span>Restart</span>
                    </button>
                </div>
            </div>

            {/* Game Title & Metrics Bar */}
            <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 gap-sm-3 pb-3" style={{ borderBottom: "1px solid var(--m-border)" }}>
                <div>
                    <div className="font-mono-m mb-1" style={{ fontSize: "0.7rem", color: "var(--m-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        {categoryTag}
                    </div>
                    <h1 className="font-display m-0" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--m-text)", letterSpacing: "-0.02em" }}>
                        {title}
                    </h1>
                </div>

                <div className="d-flex align-items-center gap-2">
                    {moves !== undefined && (
                        <div className="m-card text-center" style={{ padding: "0.25rem 0.6rem", minWidth: "56px" }}>
                            <span className="font-mono-m d-block" style={{ fontSize: "0.6rem", color: "var(--m-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                MOVES
                            </span>
                            <span className="font-mono-m" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--m-text)" }}>
                                {moves}
                            </span>
                        </div>
                    )}

                    {timer !== undefined && (
                        <div className="m-card text-center" style={{ padding: "0.25rem 0.6rem", minWidth: "56px" }}>
                            <span className="font-mono-m d-block" style={{ fontSize: "0.6rem", color: "var(--m-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                TIME
                            </span>
                            <span className="font-mono-m" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--m-text)" }}>
                                {formatTimer(timer)}
                            </span>
                        </div>
                    )}

                    {score !== undefined && (
                        <div className="m-card text-center" style={{ padding: "0.25rem 0.6rem", minWidth: "56px" }}>
                            <span className="font-mono-m d-block" style={{ fontSize: "0.6rem", color: "var(--m-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                SCORE
                            </span>
                            <span className="font-mono-m" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--m-text)" }}>
                                {score}
                            </span>
                        </div>
                    )}

                    {bestScore !== undefined && bestScore !== null && (
                        <div className="m-card text-center" style={{ padding: "0.25rem 0.6rem", minWidth: "56px" }}>
                            <span className="font-mono-m d-block" style={{ fontSize: "0.6rem", color: "var(--m-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                BEST
                            </span>
                            <span className="font-mono-m d-flex align-items-center justify-content-center gap-1" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--m-accent)" }}>
                                <Trophy size={11} />
                                <span>{bestScore}</span>
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Rules Modal Overlay */}
            {showRules && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 1050,
                        background: "rgba(0, 0, 0, 0.75)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem"
                    }}
                    onClick={() => setShowRules(false)}
                >
                    <div
                        className="m-card"
                        style={{ width: "100%", maxWidth: "460px", padding: "1.75rem", background: "var(--m-surface)" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="m-0 font-display" style={{ fontSize: "1.25rem", color: "var(--m-text)", fontWeight: 700 }}>
                                How to Play: {title}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setShowRules(false)}
                                aria-label="Close rules modal"
                                style={{ background: "transparent", border: "none", color: "var(--m-dim)", cursor: "pointer" }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1.5rem", color: "var(--m-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            {rules.map((rule, idx) => (
                                <li key={idx} className="mb-2">{rule}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={() => setShowRules(false)}
                            className="m-btn-primary w-100"
                        >
                            Got It, Let&apos;s Play
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

