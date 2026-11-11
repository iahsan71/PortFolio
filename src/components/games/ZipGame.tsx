"use client";

import React, { useState, useEffect, useCallback } from "react";
import { GameHeader } from "./GameHeader";
import { GAMES_DATA } from "../../data/gamesData";
import { CheckCircle2, RotateCcw, Undo2, Award } from "lucide-react";

interface Cell {
    r: number;
    c: number;
}

interface LevelDef {
    size: number;
    numbers: { [key: string]: number }; // "r,c" -> number (1..N)
    maxNum: number;
    name: string;
}

const LEVELS: LevelDef[] = [
    {
        name: "Level 1 (Novice 4x4)",
        size: 4,
        numbers: {
            "0,0": 1,
            "0,3": 2,
            "3,3": 3,
            "3,0": 4
        },
        maxNum: 4
    },
    {
        name: "Level 2 (Standard 5x5)",
        size: 5,
        numbers: {
            "0,0": 1,
            "0,4": 2,
            "2,2": 3,
            "4,4": 4,
            "4,0": 5
        },
        maxNum: 5
    },
    {
        name: "Daily Challenge 5x5",
        size: 5,
        numbers: {
            "0,2": 1,
            "4,4": 2,
            "4,0": 3,
            "2,2": 4,
            "0,0": 5
        },
        maxNum: 5
    }
];

const getInitialPath = (lvl: LevelDef): Cell[] => {
    for (const [key, num] of Object.entries(lvl.numbers)) {
        if (num === 1) {
            const [r, c] = key.split(",").map(Number);
            return [{ r, c }];
        }
    }
    return [{ r: 0, c: 0 }];
};

export const ZipGame: React.FC = () => {
    const meta = GAMES_DATA.find((g) => g.id === "zip")!;
    const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
    const level = LEVELS[currentLevelIdx];
    const totalCells = level.size * level.size;

    const [path, setPath] = useState<Cell[]>(() => getInitialPath(LEVELS[0]));
    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [bestTime, setBestTime] = useState<number | null>(null);

    // Load best score from localStorage
    useEffect(() => {
        try {
            const saved = localStorage.getItem(`zip_best_level_${currentLevelIdx}`);
            if (saved) setBestTime(parseInt(saved, 10));
            else setBestTime(null);
        } catch {}
    }, [currentLevelIdx]);

    // Timer effect
    useEffect(() => {
        if (!isPlaying || isWon) return;
        const interval = setInterval(() => {
            setTimer((t) => t + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying, isWon]);

    // Reset game
    const handleReset = useCallback(() => {
        // Find cell with number 1
        let startCell: Cell = { r: 0, c: 0 };
        for (const [key, num] of Object.entries(level.numbers)) {
            if (num === 1) {
                const [r, c] = key.split(",").map(Number);
                startCell = { r, c };
                break;
            }
        }
        setPath([startCell]);
        setMoves(0);
        setTimer(0);
        setIsWon(false);
        setIsPlaying(false);
    }, [level]);

    useEffect(() => {
        handleReset();
    }, [handleReset]);

    // Check if step is adjacent
    const isAdjacent = (a: Cell, b: Cell) => {
        const dr = Math.abs(a.r - b.r);
        const dc = Math.abs(a.c - b.c);
        return (dr === 1 && dc === 0) || (dr === 0 && dc === 1);
    };

    // Cell click handler
    const handleCellClick = (r: number, c: number) => {
        if (isWon) return;

        if (!isPlaying) setIsPlaying(true);

        const currentHead = path[path.length - 1];

        // Check if clicking the existing head or earlier in path -> truncate/undo to there
        const existingIdx = path.findIndex((p) => p.r === r && p.c === c);
        if (existingIdx !== -1) {
            if (existingIdx < path.length - 1) {
                setPath(path.slice(0, existingIdx + 1));
                setMoves((m) => m + 1);
            }
            return;
        }

        // Must be adjacent to head
        if (!isAdjacent(currentHead, { r, c })) {
            return;
        }

        // Check waypoint ordering rule
        const cellNum = level.numbers[`${r},${c}`];
        if (cellNum !== undefined) {
            // Must find next expected waypoint
            let lastFoundNum = 1;
            for (const p of path) {
                const n = level.numbers[`${p.r},${p.c}`];
                if (n && n > lastFoundNum) lastFoundNum = n;
            }
            if (cellNum !== lastFoundNum + 1) {
                // Cannot skip numbers
                return;
            }
        }

        const newPath = [...path, { r, c }];
        setPath(newPath);
        setMoves((m) => m + 1);

        // Win condition check
        if (newPath.length === totalCells) {
            // Check if all numbers were visited in order
            let lastVisited = 0;
            let valid = true;
            for (const p of newPath) {
                const n = level.numbers[`${p.r},${p.c}`];
                if (n) {
                    if (n !== lastVisited + 1) {
                        valid = false;
                        break;
                    }
                    lastVisited = n;
                }
            }

            if (valid && lastVisited === level.maxNum) {
                setIsWon(true);
                setIsPlaying(false);
                try {
                    const saved = localStorage.getItem(`zip_best_level_${currentLevelIdx}`);
                    if (!saved || timer < parseInt(saved, 10)) {
                        localStorage.setItem(`zip_best_level_${currentLevelIdx}`, timer.toString());
                        setBestTime(timer);
                    }
                } catch {}
            }
        }
    };

    const handleUndo = () => {
        if (path.length > 1 && !isWon) {
            setPath((p) => p.slice(0, -1));
            setMoves((m) => m + 1);
        }
    };

    return (
        <div className="editorial-container-narrow py-4">
            <GameHeader
                title={meta.title}
                categoryTag={meta.category}
                moves={moves}
                timer={timer}
                bestScore={bestTime}
                onReset={handleReset}
                rules={meta.rules}
            />

            {/* Level Selector Tabs */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 gap-sm-3 mb-4">
                <div className="d-flex flex-wrap gap-2">
                    {LEVELS.map((lvl, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrentLevelIdx(idx)}
                            className="font-mono-m"
                            style={{
                                padding: "0.3rem 0.65rem",
                                borderRadius: "9999px",
                                fontSize: "0.725rem",
                                border: `1px solid ${currentLevelIdx === idx ? "var(--m-accent)" : "var(--m-border)"}`,
                                background: currentLevelIdx === idx ? "rgba(37, 99, 235, 0.15)" : "var(--m-surface)",
                                color: currentLevelIdx === idx ? "var(--m-accent)" : "var(--m-muted)",
                                cursor: "pointer",
                                transition: "all 0.2s ease"
                            }}
                        >
                            {lvl.name}
                        </button>
                    ))}
                </div>

                <div className="d-flex align-items-center gap-2">
                    <button
                        type="button"
                        onClick={handleUndo}
                        disabled={path.length <= 1 || isWon}
                        className="m-btn-secondary"
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.725rem", gap: "0.3rem" }}
                        aria-label="Undo last move"
                    >
                        <Undo2 size={13} />
                        <span>Undo</span>
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="m-btn-secondary"
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.725rem", gap: "0.3rem" }}
                        aria-label="Clear path"
                    >
                        <RotateCcw size={13} />
                        <span>Clear</span>
                    </button>
                </div>
            </div>

            {/* Path Progress Indicator */}
            <div className="m-card p-2 p-sm-3 mb-4 d-flex justify-content-between align-items-center">
                <span className="font-mono-m" style={{ fontSize: "0.75rem", color: "var(--m-muted)" }}>
                    CELLS COVERED: <strong style={{ color: "var(--m-text)" }}>{path.length} / {totalCells}</strong>
                </span>
                <div style={{ width: "100px", height: "6px", background: "var(--m-surface-2)", borderRadius: "999px", overflow: "hidden" }}>
                    <div
                        style={{
                            height: "100%",
                            width: `${(path.length / totalCells) * 100}%`,
                            background: "var(--m-accent)",
                            transition: "width 0.2s ease"
                        }}
                    />
                </div>
            </div>

            {/* Board Container */}
            <div className="d-flex justify-content-center mb-4">
                <div
                    className="m-card"
                    style={{
                        padding: "clamp(0.5rem, 2vw, 1rem)",
                        display: "grid",
                        gridTemplateColumns: `repeat(${level.size}, minmax(36px, 60px))`,
                        gridTemplateRows: `repeat(${level.size}, minmax(36px, 60px))`,
                        gap: "clamp(4px, 1.5vw, 8px)",
                        background: "var(--m-surface)",
                        touchAction: "manipulation",
                        maxWidth: "100%"
                    }}
                >
                    {Array.from({ length: level.size }).map((_, r) =>
                        Array.from({ length: level.size }).map((__, c) => {
                            const isCellInPath = path.some((p) => p.r === r && p.c === c);
                            const pathIndex = path.findIndex((p) => p.r === r && p.c === c);
                            const isHead = path.length > 0 && path[path.length - 1].r === r && path[path.length - 1].c === c;
                            const num = level.numbers[`${r},${c}`];

                            return (
                                <button
                                    key={`${r}-${c}`}
                                    type="button"
                                    onClick={() => handleCellClick(r, c)}
                                    aria-label={`Cell row ${r + 1}, column ${c + 1}${num ? `, waypoint ${num}` : ""}`}
                                    style={{
                                        position: "relative",
                                        borderRadius: "0.6rem",
                                        border: isHead
                                            ? "2px solid var(--m-accent)"
                                            : isCellInPath
                                            ? "1px solid rgba(59, 130, 246, 0.5)"
                                            : "1px solid var(--m-border)",
                                        background: isHead
                                            ? "var(--m-accent)"
                                            : isCellInPath
                                            ? "rgba(37, 99, 235, 0.2)"
                                            : "var(--m-surface-2)",
                                        color: isHead ? "#ffffff" : isCellInPath ? "var(--m-accent)" : "var(--m-text)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: num ? "1.25rem" : "0.75rem",
                                        fontWeight: 800,
                                        fontFamily: "var(--m-font-mono)",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        transition: "all 0.15s ease",
                                        boxShadow: isHead ? "0 0 16px rgba(37, 99, 235, 0.5)" : "none"
                                    }}
                                >
                                    {num !== undefined ? num : isCellInPath ? <span style={{ opacity: 0.6 }}>{pathIndex + 1}</span> : null}
                                </button>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Win Modal Banner */}
            {isWon && (
                <div
                    className="m-card text-center p-4 mb-4"
                    style={{
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.3)"
                    }}
                >
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <CheckCircle2 size={24} style={{ color: "#10b981" }} />
                        <h3 className="m-0 font-display" style={{ fontSize: "1.35rem", color: "#10b981", fontWeight: 700 }}>
                            Zip Path Complete!
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        You navigated all {totalCells} cells in {moves} moves and {timer}s without crossing!
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                const next = (currentLevelIdx + 1) % LEVELS.length;
                                setCurrentLevelIdx(next);
                            }}
                            className="m-btn-primary"
                        >
                            <span>Next Level</span>
                            <Award size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="m-btn-secondary"
                        >
                            <span>Replay</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

