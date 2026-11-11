"use client";

import React, { useState, useEffect, useCallback } from "react";
import { GameHeader } from "./GameHeader";
import { GAMES_DATA } from "../../data/gamesData";
import { CheckCircle2, AlertCircle, RotateCcw } from "lucide-react";

const GRID_SIZE = 12;
const MAX_MOVES = 25;
const COLORS = [
    { name: "Blue", hex: "#3b82f6" },
    { name: "Emerald", hex: "#10b981" },
    { name: "Purple", hex: "#8b5cf6" },
    { name: "Amber", hex: "#f59e0b" },
    { name: "Rose", hex: "#f43f5e" },
    { name: "Cyan", hex: "#06b6d4" }
];

const createInitialBoard = (): number[][] => {
    const newGrid: number[][] = [];
    for (let r = 0; r < GRID_SIZE; r++) {
        const row: number[] = [];
        for (let c = 0; c < GRID_SIZE; c++) {
            row.push((r * 3 + c * 2) % COLORS.length);
        }
        newGrid.push(row);
    }
    return newGrid;
};

export const FloodGame: React.FC = () => {
    const meta = GAMES_DATA.find((g) => g.id === "flood") || GAMES_DATA[2];
    const [grid, setGrid] = useState<number[][]>(createInitialBoard);
    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isWon, setIsWon] = useState(false);
    const [isLost, setIsLost] = useState(false);
    const [bestMoves, setBestMoves] = useState<number | null>(null);

    // Load best score
    useEffect(() => {
        try {
            const saved = localStorage.getItem("flood_best_moves");
            if (saved) setBestMoves(parseInt(saved, 10));
        } catch {}
    }, []);

    // Timer
    useEffect(() => {
        if (!isPlaying || isWon || isLost) return;
        const interval = setInterval(() => {
            setTimer((t) => t + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying, isWon, isLost]);

    // Initialize board
    const initBoard = useCallback(() => {
        const newGrid: number[][] = [];
        for (let r = 0; r < GRID_SIZE; r++) {
            const row: number[] = [];
            for (let c = 0; c < GRID_SIZE; c++) {
                row.push(Math.floor(Math.random() * COLORS.length));
            }
            newGrid.push(row);
        }
        setGrid(newGrid);
        setMoves(0);
        setTimer(0);
        setIsPlaying(false);
        setIsWon(false);
        setIsLost(false);
    }, []);

    useEffect(() => {
        initBoard();
    }, [initBoard]);

    // Calculate flooded area
    const getFloodedCells = useCallback((board: number[][]) => {
        if (!board || board.length === 0) return new Set<string>();
        const targetColor = board[0][0];
        const visited = new Set<string>();
        const queue: [number, number][] = [[0, 0]];
        visited.add("0,0");

        while (queue.length > 0) {
            const [r, c] = queue.shift()!;
            const neighbors: [number, number][] = [
                [r - 1, c],
                [r + 1, c],
                [r, c - 1],
                [r, c + 1]
            ];

            for (const [nr, nc] of neighbors) {
                if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE) {
                    const key = `${nr},${nc}`;
                    if (!visited.has(key) && board[nr][nc] === targetColor) {
                        visited.add(key);
                        queue.push([nr, nc]);
                    }
                }
            }
        }
        return visited;
    }, []);

    const floodedCells = getFloodedCells(grid);
    const progressPercent = Math.round((floodedCells.size / (GRID_SIZE * GRID_SIZE)) * 100);

    // Apply color choice
    const handleColorClick = useCallback(
        (colorIdx: number) => {
            if (isWon || isLost || grid.length === 0) return;
            const currentColor = grid[0][0];
            if (colorIdx === currentColor) return; // Same color, noop

            if (!isPlaying) setIsPlaying(true);

            const newGrid = grid.map((row) => [...row]);
            const cellsToFlood = getFloodedCells(newGrid);

            // Fill all connected origin cells with the new color
            cellsToFlood.forEach((coord) => {
                const [r, c] = coord.split(",").map(Number);
                newGrid[r][c] = colorIdx;
            });

            const newMoves = moves + 1;
            setGrid(newGrid);
            setMoves(newMoves);

            // Check if now all unified
            const newFlooded = getFloodedCells(newGrid);
            if (newFlooded.size === GRID_SIZE * GRID_SIZE) {
                setIsWon(true);
                setIsPlaying(false);
                try {
                    const saved = localStorage.getItem("flood_best_moves");
                    if (!saved || newMoves < parseInt(saved, 10)) {
                        localStorage.setItem("flood_best_moves", newMoves.toString());
                        setBestMoves(newMoves);
                    }
                } catch {}
            } else if (newMoves >= MAX_MOVES) {
                setIsLost(true);
                setIsPlaying(false);
            }
        },
        [isWon, isLost, grid, isPlaying, moves, getFloodedCells]
    );

    // Keyboard support: 1-6 keys for colors
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const activeTag = (document.activeElement as HTMLElement)?.tagName;
            if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

            const num = parseInt(e.key, 10);
            if (num >= 1 && num <= 6) {
                handleColorClick(num - 1);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleColorClick]);

    return (
        <div className="editorial-container-narrow py-4">
            <GameHeader
                title={meta.title}
                categoryTag={meta.category}
                moves={moves}
                timer={timer}
                bestScore={bestMoves}
                onReset={initBoard}
                rules={meta.rules}
            />

            {/* Moves & Conquered Progress Bar */}
            <div className="m-card p-2 p-sm-3 mb-4 d-flex flex-wrap justify-content-between align-items-center gap-2 gap-sm-3">
                <div className="font-mono-m" style={{ fontSize: "clamp(0.75rem, 2vw, 0.85rem)", color: "var(--m-muted)" }}>
                    MOVES REMAINING:{" "}
                    <strong style={{ color: MAX_MOVES - moves <= 3 ? "#ef4444" : "var(--m-text)" }}>
                        {Math.max(0, MAX_MOVES - moves)} / {MAX_MOVES}
                    </strong>
                </div>

                <div className="d-flex align-items-center gap-2 gap-sm-3">
                    <span className="font-mono-m" style={{ fontSize: "clamp(0.75rem, 2vw, 0.85rem)", color: "var(--m-accent)", fontWeight: 700 }}>
                        {progressPercent}% CONQUERED
                    </span>
                    <div
                        role="progressbar"
                        aria-valuenow={progressPercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Board conquered percentage"
                        style={{ width: "90px", height: "7px", background: "var(--m-surface-2)", borderRadius: "999px", overflow: "hidden" }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${progressPercent}%`,
                                background: "var(--m-accent)",
                                transition: "width 0.25s ease"
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Game Grid */}
            <div className="d-flex justify-content-center mb-4">
                <div
                    className="m-card"
                    style={{
                        padding: "clamp(0.4rem, 1.5vw, 0.75rem)",
                        display: "grid",
                        gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(18px, 28px))`,
                        gridTemplateRows: `repeat(${GRID_SIZE}, minmax(18px, 28px))`,
                        gap: "2px",
                        background: "var(--m-surface)",
                        maxWidth: "100%"
                    }}
                >
                    {grid.map((row, r) =>
                        row.map((colorIdx, c) => (
                            <div
                                key={`${r}-${c}`}
                                style={{
                                    borderRadius: "3px",
                                    background: COLORS[colorIdx].hex,
                                    aspectRatio: "1",
                                    transition: "background 0.2s ease"
                                }}
                            />
                        ))
                    )}
                </div>
            </div>

            {/* Color Palette Selector Buttons */}
            <div className="d-flex justify-content-center gap-2 mb-4" style={{ flexWrap: "nowrap" }}>
                {COLORS.map((col, idx) => {
                    const isCurrent = grid.length > 0 && grid[0][0] === idx;
                    return (
                        <button
                            key={idx}
                            type="button"
                            disabled={isCurrent || isWon || isLost}
                            onClick={() => handleColorClick(idx)}
                            aria-label={`Flood with ${col.name} (Key ${idx + 1})`}
                            style={{
                                width: "clamp(36px, 9vw, 52px)",
                                height: "clamp(36px, 9vw, 52px)",
                                borderRadius: "10px",
                                background: col.hex,
                                border: isCurrent ? "3px solid #ffffff" : "2px solid rgba(255, 255, 255, 0.2)",
                                cursor: isCurrent || isWon || isLost ? "default" : "pointer",
                                opacity: isCurrent ? 0.4 : 1,
                                transform: isCurrent ? "scale(0.92)" : "scale(1)",
                                boxShadow: isCurrent ? "none" : `0 4px 14px ${col.hex}44`,
                                transition: "all 0.15s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                fontFamily: "var(--m-font-mono)",
                                flexShrink: 0
                            }}
                        >
                            {idx + 1}
                        </button>
                    );
                })}
            </div>

            {/* Victory / Defeat Banners */}
            {isWon && (
                <div
                    className="m-card text-center p-4 mb-4"
                    style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)" }}
                >
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <CheckCircle2 size={24} style={{ color: "#10b981" }} />
                        <h3 className="m-0 font-display" style={{ fontSize: "1.35rem", color: "#10b981", fontWeight: 700 }}>
                            Board Conquered!
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        You unified all 144 cells in {moves} moves and {timer}s!
                    </p>
                    <button type="button" onClick={initBoard} className="m-btn-primary">
                        <span>Play Another Board</span>
                    </button>
                </div>
            )}

            {isLost && (
                <div
                    className="m-card text-center p-4 mb-4"
                    style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)" }}
                >
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <AlertCircle size={24} style={{ color: "#ef4444" }} />
                        <h3 className="m-0 font-display" style={{ fontSize: "1.35rem", color: "#ef4444", fontWeight: 700 }}>
                            Move Limit Exceeded
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        You reached {progressPercent}% of the board in {MAX_MOVES} moves. Try another strategy!
                    </p>
                    <button type="button" onClick={initBoard} className="m-btn-secondary">
                        <RotateCcw size={14} />
                        <span>Try Again</span>
                    </button>
                </div>
            )}
        </div>
    );
};

