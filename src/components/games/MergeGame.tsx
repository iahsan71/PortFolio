"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { GameHeader } from "./GameHeader";
import { GAMES_DATA } from "../../data/gamesData";
import { CheckCircle2, AlertCircle, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const GRID_SIZE = 4;

const createInitialBoard = (): number[][] => {
    const b = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0));
    b[1][1] = 2;
    b[2][2] = 2;
    return b;
};

const TILE_COLORS: { [key: number]: { bg: string; text: string } } = {
    2: { bg: "#e2e8f0", text: "#1e293b" },
    4: { bg: "#fed7aa", text: "#7c2d12" },
    8: { bg: "#fdba74", text: "#ffffff" },
    16: { bg: "#fb923c", text: "#ffffff" },
    32: { bg: "#f97316", text: "#ffffff" },
    64: { bg: "#ea580c", text: "#ffffff" },
    128: { bg: "#fef08a", text: "#854d0e" },
    256: { bg: "#fde047", text: "#713f12" },
    512: { bg: "#eab308", text: "#ffffff" },
    1024: { bg: "#ca8a04", text: "#ffffff" },
    2048: { bg: "#f59e0b", text: "#ffffff" }
};

export const MergeGame: React.FC = () => {
    const meta = GAMES_DATA.find((g) => g.id === "merge")!;
    const [board, setBoard] = useState<number[][]>(createInitialBoard);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState<number | null>(null);
    const [moves, setMoves] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const [hasContinuedAfterWin, setHasContinuedAfterWin] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    // Touch swipe refs
    const touchStartPos = useRef<{ x: number; y: number } | null>(null);

    // Load best score
    useEffect(() => {
        try {
            const saved = localStorage.getItem("merge_best_score");
            if (saved) setBestScore(parseInt(saved, 10));
        } catch {}
    }, []);

    // Spawn random tile
    const spawnTile = (currentBoard: number[][]): number[][] => {
        const emptyCells: [number, number][] = [];
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (currentBoard[r][c] === 0) emptyCells.push([r, c]);
            }
        }
        if (emptyCells.length === 0) return currentBoard;

        const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const newBoard = currentBoard.map((row) => [...row]);
        newBoard[r][c] = Math.random() < 0.9 ? 2 : 4;
        return newBoard;
    };

    // Initialize board with 2 tiles
    const initBoard = useCallback(() => {
        let b = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0));
        b = spawnTile(b);
        b = spawnTile(b);
        setBoard(b);
        setScore(0);
        setMoves(0);
        setIsWon(false);
        setHasContinuedAfterWin(false);
        setIsGameOver(false);
    }, []);

    useEffect(() => {
        initBoard();
    }, [initBoard]);

    // Check game over
    const checkGameOver = (currentBoard: number[][]): boolean => {
        // Any empty?
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (currentBoard[r][c] === 0) return false;
            }
        }
        // Any adjacent mergeable?
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                const val = currentBoard[r][c];
                if (r + 1 < GRID_SIZE && currentBoard[r + 1][c] === val) return false;
                if (c + 1 < GRID_SIZE && currentBoard[r][c + 1] === val) return false;
            }
        }
        return true;
    };

    // Slide line helper
    const slideLine = (line: number[]): { newLine: number[]; addedScore: number; merged: boolean } => {
        let filtered = line.filter((v) => v !== 0);
        let addedScore = 0;
        let merged = false;

        for (let i = 0; i < filtered.length - 1; i++) {
            if (filtered[i] === filtered[i + 1]) {
                filtered[i] *= 2;
                addedScore += filtered[i];
                filtered[i + 1] = 0;
                merged = true;
            }
        }
        filtered = filtered.filter((v) => v !== 0);
        while (filtered.length < GRID_SIZE) {
            filtered.push(0);
        }

        return { newLine: filtered, addedScore, merged };
    };

    // Move in direction
    const move = useCallback((direction: "up" | "down" | "left" | "right") => {
        if (board.length === 0 || isGameOver) return;

        let moved = false;
        let scoreGained = 0;
        let newBoard = board.map((row) => [...row]);

        if (direction === "left") {
            for (let r = 0; r < GRID_SIZE; r++) {
                const { newLine, addedScore } = slideLine(newBoard[r]);
                scoreGained += addedScore;
                if (newLine.some((val, idx) => val !== newBoard[r][idx])) moved = true;
                newBoard[r] = newLine;
            }
        } else if (direction === "right") {
            for (let r = 0; r < GRID_SIZE; r++) {
                const reversed = [...newBoard[r]].reverse();
                const { newLine, addedScore } = slideLine(reversed);
                scoreGained += addedScore;
                const result = newLine.reverse();
                if (result.some((val, idx) => val !== newBoard[r][idx])) moved = true;
                newBoard[r] = result;
            }
        } else if (direction === "up") {
            for (let c = 0; c < GRID_SIZE; c++) {
                const col = [newBoard[0][c], newBoard[1][c], newBoard[2][c], newBoard[3][c]];
                const { newLine, addedScore } = slideLine(col);
                scoreGained += addedScore;
                for (let r = 0; r < GRID_SIZE; r++) {
                    if (newBoard[r][c] !== newLine[r]) moved = true;
                    newBoard[r][c] = newLine[r];
                }
            }
        } else if (direction === "down") {
            for (let c = 0; c < GRID_SIZE; c++) {
                const col = [newBoard[3][c], newBoard[2][c], newBoard[1][c], newBoard[0][c]];
                const { newLine, addedScore } = slideLine(col);
                scoreGained += addedScore;
                for (let r = 0; r < GRID_SIZE; r++) {
                    const rowIdx = 3 - r;
                    if (newBoard[rowIdx][c] !== newLine[r]) moved = true;
                    newBoard[rowIdx][c] = newLine[r];
                }
            }
        }

        if (moved) {
            newBoard = spawnTile(newBoard);
            const newScore = score + scoreGained;
            const newMoves = moves + 1;
            setBoard(newBoard);
            setScore(newScore);
            setMoves(newMoves);

            // Check high score
            if (!bestScore || newScore > bestScore) {
                setBestScore(newScore);
                try {
                    localStorage.setItem("merge_best_score", newScore.toString());
                } catch {}
            }

            // Check 2048 win
            if (!isWon && !hasContinuedAfterWin) {
                for (const row of newBoard) {
                    if (row.includes(2048)) {
                        setIsWon(true);
                        break;
                    }
                }
            }

            // Check game over
            if (checkGameOver(newBoard)) {
                setIsGameOver(true);
            }
        }
    }, [board, score, moves, isGameOver, isWon, hasContinuedAfterWin, bestScore]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (["ArrowUp", "KeyW"].includes(e.code)) {
                e.preventDefault();
                move("up");
            } else if (["ArrowDown", "KeyS"].includes(e.code)) {
                e.preventDefault();
                move("down");
            } else if (["ArrowLeft", "KeyA"].includes(e.code)) {
                e.preventDefault();
                move("left");
            } else if (["ArrowRight", "KeyD"].includes(e.code)) {
                e.preventDefault();
                move("right");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [move]);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStartPos.current) return;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - touchStartPos.current.x;
        const dy = touch.clientY - touchStartPos.current.y;
        touchStartPos.current = null;

        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        if (Math.max(absDx, absDy) < 25) return; // Ignore small tap jitter

        if (absDx > absDy) {
            if (dx > 0) move("right");
            else move("left");
        } else {
            if (dy > 0) move("down");
            else move("up");
        }
    };

    return (
        <div className="editorial-container-narrow py-4">
            <GameHeader
                title={meta.title}
                categoryTag={meta.category}
                moves={moves}
                score={score}
                bestScore={bestScore}
                onReset={initBoard}
                rules={meta.rules}
            />

            {/* Board Container */}
            <div className="d-flex flex-column align-items-center mb-4">
                <div
                    className="m-card"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        padding: "clamp(0.5rem, 2vw, 1rem)",
                        display: "grid",
                        gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(48px, 76px))`,
                        gridTemplateRows: `repeat(${GRID_SIZE}, minmax(48px, 76px))`,
                        gap: "clamp(5px, 1.5vw, 10px)",
                        background: "var(--m-surface)",
                        touchAction: "none",
                        userSelect: "none"
                    }}
                >
                    {board.map((row, r) =>
                        row.map((val, c) => {
                            const tileStyle = TILE_COLORS[val] || { bg: "#3b82f6", text: "#ffffff" };
                            return (
                                <div
                                    key={`${r}-${c}`}
                                    style={{
                                        borderRadius: "0.6rem",
                                        background: val === 0 ? "var(--m-surface-2)" : tileStyle.bg,
                                        color: tileStyle.text,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: val >= 1024 ? "1.05rem" : val >= 128 ? "1.25rem" : "1.5rem",
                                        fontWeight: 800,
                                        fontFamily: "var(--m-font-mono)",
                                        boxShadow: val > 0 ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none",
                                        transition: "all 0.15s ease"
                                    }}
                                >
                                    {val > 0 ? val : null}
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Mobile Touch Directional Controls */}
                <div className="mt-3 d-flex flex-column align-items-center gap-1 d-md-none">
                    <button
                        type="button"
                        onClick={() => move("up")}
                        className="m-btn-secondary"
                        style={{ padding: "0.45rem 1rem" }}
                        aria-label="Slide Up"
                    >
                        <ArrowUp size={16} />
                    </button>
                    <div className="d-flex gap-2">
                        <button
                            type="button"
                            onClick={() => move("left")}
                            className="m-btn-secondary"
                            style={{ padding: "0.45rem 1rem" }}
                            aria-label="Slide Left"
                        >
                            <ArrowLeft size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={() => move("down")}
                            className="m-btn-secondary"
                            style={{ padding: "0.45rem 1rem" }}
                            aria-label="Slide Down"
                        >
                            <ArrowDown size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={() => move("right")}
                            className="m-btn-secondary"
                            style={{ padding: "0.6rem 1.25rem" }}
                            aria-label="Slide Right"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Win Modal Banner */}
            {isWon && (
                <div
                    className="m-card text-center p-4 mb-4"
                    style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                >
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <CheckCircle2 size={24} style={{ color: "#f59e0b" }} />
                        <h3 className="m-0 font-display" style={{ fontSize: "1.35rem", color: "#f59e0b", fontWeight: 700 }}>
                            2048 Tile Reached!
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        Outstanding! You engineered the 2048 tile with a score of {score}. Keep going for an even higher record!
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                setIsWon(false);
                                setHasContinuedAfterWin(true);
                            }}
                            className="m-btn-primary"
                        >
                            <span>Keep Playing</span>
                        </button>
                        <button type="button" onClick={initBoard} className="m-btn-secondary">
                            <span>New Game</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Game Over Banner */}
            {isGameOver && (
                <div
                    className="m-card text-center p-4 mb-4"
                    style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)" }}
                >
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <AlertCircle size={24} style={{ color: "#ef4444" }} />
                        <h3 className="m-0 font-display" style={{ fontSize: "1.35rem", color: "#ef4444", fontWeight: 700 }}>
                            Game Over
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        No valid moves remain. Final score: {score}.
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

