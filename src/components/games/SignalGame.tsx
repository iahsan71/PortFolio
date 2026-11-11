"use client";

import React, { useState, useEffect, useCallback } from "react";
import { GameHeader } from "./GameHeader";
import { GAMES_DATA } from "../../data/gamesData";
import { CheckCircle2, RotateCcw, Sparkles } from "lucide-react";

const GRID_SIZE = 5;

const createInitialGrid = (): boolean[][] => {
    const g = Array(GRID_SIZE).fill(false).map(() => Array(GRID_SIZE).fill(false));
    g[1][2] = true;
    g[2][1] = true;
    g[2][2] = true;
    g[2][3] = true;
    g[3][2] = true;
    return g;
};

export const SignalGame: React.FC = () => {
    const meta = GAMES_DATA.find((g) => g.id === "signal")!;
    const [grid, setGrid] = useState<boolean[][]>(createInitialGrid);
    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isWon, setIsWon] = useState(false);
    const [bestMoves, setBestMoves] = useState<number | null>(null);

    // Load best score
    useEffect(() => {
        try {
            const saved = localStorage.getItem("signal_best_moves");
            if (saved) setBestMoves(parseInt(saved, 10));
        } catch {}
    }, []);

    // Timer
    useEffect(() => {
        if (!isPlaying || isWon) return;
        const interval = setInterval(() => {
            setTimer((t) => t + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying, isWon]);

    // Generate guaranteed solvable puzzle
    const initPuzzle = useCallback((difficultyClicks = 8) => {
        // Start all false
        const initial = Array(GRID_SIZE).fill(false).map(() => Array(GRID_SIZE).fill(false));

        // Flip helper
        const flip = (g: boolean[][], r: number, c: number) => {
            const coords = [
                [r, c],
                [r - 1, c],
                [r + 1, c],
                [r, c - 1],
                [r, c + 1]
            ];
            for (const [row, col] of coords) {
                if (row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
                    g[row][col] = !g[row][col];
                }
            }
        };

        // Simulate random clicks
        for (let i = 0; i < difficultyClicks; i++) {
            const randR = Math.floor(Math.random() * GRID_SIZE);
            const randC = Math.floor(Math.random() * GRID_SIZE);
            flip(initial, randR, randC);
        }

        // If by chance all off, force one flip
        if (initial.every((row) => row.every((c) => !c))) {
            flip(initial, 2, 2);
        }

        setGrid(initial);
        setMoves(0);
        setTimer(0);
        setIsPlaying(false);
        setIsWon(false);
    }, []);

    useEffect(() => {
        initPuzzle();
    }, [initPuzzle]);

    const handleCellClick = (r: number, c: number) => {
        if (isWon) return;

        if (!isPlaying) setIsPlaying(true);

        const newGrid = grid.map((row) => [...row]);
        const coords = [
            [r, c],
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1]
        ];

        for (const [row, col] of coords) {
            if (row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
                newGrid[row][col] = !newGrid[row][col];
            }
        }

        const newMoves = moves + 1;
        setGrid(newGrid);
        setMoves(newMoves);

        // Win check: all false
        const allOff = newGrid.every((row) => row.every((val) => !val));
        if (allOff) {
            setIsWon(true);
            setIsPlaying(false);
            try {
                const saved = localStorage.getItem("signal_best_moves");
                if (!saved || newMoves < parseInt(saved, 10)) {
                    localStorage.setItem("signal_best_moves", newMoves.toString());
                    setBestMoves(newMoves);
                }
            } catch {}
        }
    };

    const activeLightsCount = grid.reduce(
        (acc, row) => acc + row.filter((c) => c).length,
        0
    );

    return (
        <div className="editorial-container-narrow py-4">
            <GameHeader
                title={meta.title}
                categoryTag={meta.category}
                moves={moves}
                timer={timer}
                bestScore={bestMoves}
                onReset={() => initPuzzle(8)}
                rules={meta.rules}
            />

            {/* Difficulty Controls & Active Count */}
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center justify-content-between gap-2 gap-sm-3 mb-4">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.35rem", flex: "1 1 auto", maxWidth: "420px" }}>
                    <button
                        type="button"
                        onClick={() => initPuzzle(5)}
                        className="m-btn-secondary text-center justify-content-center"
                        style={{ padding: "0.35rem 0.5rem", fontSize: "0.725rem", whiteSpace: "nowrap" }}
                    >
                        Easy (5)
                    </button>
                    <button
                        type="button"
                        onClick={() => initPuzzle(8)}
                        className="m-btn-secondary text-center justify-content-center"
                        style={{ padding: "0.35rem 0.5rem", fontSize: "0.725rem", whiteSpace: "nowrap" }}
                    >
                        Med (8)
                    </button>
                    <button
                        type="button"
                        onClick={() => initPuzzle(14)}
                        className="m-btn-secondary text-center justify-content-center"
                        style={{ padding: "0.35rem 0.5rem", fontSize: "0.725rem", whiteSpace: "nowrap" }}
                    >
                        Hard (14)
                    </button>
                </div>

                <div className="m-card py-2 px-3 text-center" style={{ flexShrink: 0 }}>
                    <span className="font-mono-m" style={{ fontSize: "0.75rem", color: "var(--m-muted)", whiteSpace: "nowrap" }}>
                        ACTIVE SIGNALS: <strong style={{ color: activeLightsCount === 0 ? "#10b981" : "#ef4444" }}>{activeLightsCount} / 25</strong>
                    </span>
                </div>
            </div>

            {/* Signal Matrix Grid */}
            <div className="d-flex justify-content-center mb-4">
                <div
                    className="m-card"
                    style={{
                        padding: "clamp(0.6rem, 2vw, 1.25rem)",
                        display: "grid",
                        gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(38px, 60px))`,
                        gridTemplateRows: `repeat(${GRID_SIZE}, minmax(38px, 60px))`,
                        gap: "clamp(4px, 1.5vw, 10px)",
                        background: "var(--m-surface)",
                        maxWidth: "100%"
                    }}
                >
                    {grid.map((row, r) =>
                        row.map((isOn, c) => (
                            <button
                                key={`${r}-${c}`}
                                type="button"
                                onClick={() => handleCellClick(r, c)}
                                aria-label={`Signal node row ${r + 1}, column ${c + 1}: ${isOn ? "Active" : "Extinguished"}`}
                                style={{
                                    borderRadius: "0.75rem",
                                    border: isOn
                                        ? "2px solid #10b981"
                                        : "1px solid var(--m-border)",
                                    background: isOn
                                        ? "radial-gradient(circle at center, #10b981 0%, #059669 100%)"
                                        : "var(--m-surface-2)",
                                    boxShadow: isOn
                                        ? "0 0 18px rgba(16, 185, 129, 0.45)"
                                        : "none",
                                    cursor: "pointer",
                                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <span
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        background: isOn ? "#ffffff" : "var(--m-dim)",
                                        opacity: isOn ? 1 : 0.25,
                                        transition: "all 0.2s ease"
                                    }}
                                />
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Victory Card */}
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
                            All Signals Silenced!
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        You successfully extinguished all 25 active nodes in {moves} moves and {timer}s.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <button
                            type="button"
                            onClick={() => initPuzzle(10)}
                            className="m-btn-primary"
                        >
                            <span>New Signal Puzzle</span>
                            <Sparkles size={15} />
                        </button>
                        <button
                            type="button"
                            onClick={() => initPuzzle(8)}
                            className="m-btn-secondary"
                        >
                            <RotateCcw size={14} />
                            <span>Play Again</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

