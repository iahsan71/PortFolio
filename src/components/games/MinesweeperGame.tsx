"use client";

import React, { useState, useEffect, useCallback } from "react";
import { GameHeader } from "./GameHeader";
import { GAMES_DATA } from "../../data/gamesData";
import { CheckCircle2, AlertCircle, Flag, Eye, Smile, Frown, Meh } from "lucide-react";

const ROWS = 9;
const COLS = 9;
const MINES = 10;

interface CellState {
    r: number;
    c: number;
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    neighborCount: number;
}

const createEmptyGrid = (): CellState[][] => {
    const newGrid: CellState[][] = [];
    for (let r = 0; r < ROWS; r++) {
        const row: CellState[] = [];
        for (let c = 0; c < COLS; c++) {
            row.push({
                r,
                c,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                neighborCount: 0
            });
        }
        newGrid.push(row);
    }
    return newGrid;
};

export const MinesweeperGame: React.FC = () => {
    const meta = GAMES_DATA.find((g) => g.id === "mines")!;
    const [grid, setGrid] = useState<CellState[][]>(createEmptyGrid);
    const [timer, setTimer] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isWon, setIsWon] = useState(false);
    const [isLost, setIsLost] = useState(false);
    const [firstClick, setFirstClick] = useState(true);
    const [flagMode, setFlagMode] = useState(false); // Mobile flag toggle
    const [bestTime, setBestTime] = useState<number | null>(null);

    // Load best score
    useEffect(() => {
        try {
            const saved = localStorage.getItem("mines_best_time");
            if (saved) setBestTime(parseInt(saved, 10));
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

    // Initialize clean grid without mines
    const initGrid = useCallback(() => {
        setGrid(createEmptyGrid());
        setTimer(0);
        setIsPlaying(false);
        setIsWon(false);
        setIsLost(false);
        setFirstClick(true);
    }, []);

    // Place mines ensuring (safeR, safeC) has 0 mines
    const placeMines = (startR: number, startC: number, baseGrid: CellState[][]) => {
        let placed = 0;
        const newGrid = baseGrid.map((row) => row.map((cell) => ({ ...cell })));

        while (placed < MINES) {
            const randR = Math.floor(Math.random() * ROWS);
            const randC = Math.floor(Math.random() * COLS);

            // Keep initial click and its immediate neighbors free of mines
            const isNearStart = Math.abs(randR - startR) <= 1 && Math.abs(randC - startC) <= 1;

            if (!isNearStart && !newGrid[randR][randC].isMine) {
                newGrid[randR][randC].isMine = true;
                placed++;
            }
        }

        // Calculate neighbor numbers
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (newGrid[r][c].isMine) continue;
                let count = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr;
                        const nc = c + dc;
                        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && newGrid[nr][nc].isMine) {
                            count++;
                        }
                    }
                }
                newGrid[r][c].neighborCount = count;
            }
        }

        return newGrid;
    };

    // Recursive reveal for 0s
    const revealCascade = (r: number, c: number, currentGrid: CellState[][]) => {
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
        const cell = currentGrid[r][c];
        if (cell.isRevealed || cell.isFlagged || cell.isMine) return;

        cell.isRevealed = true;

        if (cell.neighborCount === 0) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr !== 0 || dc !== 0) {
                        revealCascade(r + dr, c + dc, currentGrid);
                    }
                }
            }
        }
    };

    // Handle left click (or tap in reveal mode)
    const handleCellClick = (r: number, c: number) => {
        if (isWon || isLost) return;

        // If in flag mode on mobile, route to flag
        if (flagMode) {
            handleFlag(r, c);
            return;
        }

        let workingGrid = grid;
        if (firstClick) {
            workingGrid = placeMines(r, c, grid);
            setFirstClick(false);
            setIsPlaying(true);
        }

        const cell = workingGrid[r][c];
        if (cell.isFlagged || cell.isRevealed) return;

        // Clicked a mine -> Game Over
        if (cell.isMine) {
            const revealedAllMines = workingGrid.map((row) =>
                row.map((cl) => (cl.isMine ? { ...cl, isRevealed: true } : cl))
            );
            setGrid(revealedAllMines);
            setIsLost(true);
            setIsPlaying(false);
            return;
        }

        // Safe cell
        const nextGrid = workingGrid.map((row) => row.map((cl) => ({ ...cl })));
        revealCascade(r, c, nextGrid);
        setGrid(nextGrid);

        // Win check: all non-mine cells revealed
        let nonMineUnrevealed = 0;
        for (let rowIdx = 0; rowIdx < ROWS; rowIdx++) {
            for (let colIdx = 0; colIdx < COLS; colIdx++) {
                const item = nextGrid[rowIdx][colIdx];
                if (!item.isMine && !item.isRevealed) {
                    nonMineUnrevealed++;
                }
            }
        }

        if (nonMineUnrevealed === 0) {
            setIsWon(true);
            setIsPlaying(false);
            try {
                const saved = localStorage.getItem("mines_best_time");
                if (!saved || timer < parseInt(saved, 10)) {
                    localStorage.setItem("mines_best_time", timer.toString());
                    setBestTime(timer);
                }
            } catch {}
        }
    };

    // Handle right click or flag tap
    const handleFlag = (r: number, c: number, e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        if (isWon || isLost || firstClick) return;

        const cell = grid[r][c];
        if (cell.isRevealed) return;

        const nextGrid = grid.map((row) =>
            row.map((cl) => (cl.r === r && cl.c === c ? { ...cl, isFlagged: !cl.isFlagged } : cl))
        );
        setGrid(nextGrid);
    };

    const flaggedCount = grid.reduce(
        (acc, row) => acc + row.filter((c) => c.isFlagged).length,
        0
    );

    const getNumberColor = (num: number) => {
        const colors = [
            "",
            "#3b82f6", // 1 blue
            "#10b981", // 2 green
            "#ef4444", // 3 red
            "#8b5cf6", // 4 purple
            "#b91c1c", // 5 maroon
            "#06b6d4", // 6 cyan
            "#000000", // 7 black
            "#6b7280"  // 8 gray
        ];
        return colors[num] || "var(--m-text)";
    };

    return (
        <div className="editorial-container-narrow py-4">
            <GameHeader
                title={meta.title}
                categoryTag={meta.category}
                timer={timer}
                bestScore={bestTime}
                onReset={initGrid}
                rules={meta.rules}
            />

            {/* Dashboard: Flags Remaining & Mobile Mode Toggle */}
            <div className="m-card p-2 p-sm-3 mb-4 d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div className="d-flex align-items-center gap-2">
                    <Flag size={15} style={{ color: "#ef4444" }} />
                    <span className="font-mono-m" style={{ fontSize: "clamp(0.725rem, 2vw, 0.825rem)", color: "var(--m-muted)" }}>
                        MINES REMAINING:{" "}
                        <strong style={{ color: "var(--m-text)" }}>{Math.max(0, MINES - flaggedCount)}</strong>
                    </span>
                </div>

                <div className="d-flex align-items-center gap-2">
                    {/* Reset Face Icon */}
                    <button
                        type="button"
                        onClick={initGrid}
                        className="m-btn-secondary"
                        style={{ padding: "0.3rem 0.55rem" }}
                        aria-label="Restart puzzle"
                    >
                        {isWon ? (
                            <Smile size={18} style={{ color: "#10b981" }} />
                        ) : isLost ? (
                            <Frown size={18} style={{ color: "#ef4444" }} />
                        ) : (
                            <Meh size={18} style={{ color: "var(--m-accent)" }} />
                        )}
                    </button>

                    {/* Mode Toggle for Mobile Devices */}
                    <button
                        type="button"
                        onClick={() => setFlagMode(!flagMode)}
                        className="m-btn-secondary"
                        style={{
                            padding: "0.3rem 0.65rem",
                            fontSize: "0.725rem",
                            gap: "0.35rem",
                            borderColor: flagMode ? "#ef4444" : "var(--m-border)",
                            color: flagMode ? "#ef4444" : "var(--m-muted)"
                        }}
                    >
                        {flagMode ? <Flag size={13} /> : <Eye size={13} />}
                        <span>Mode: {flagMode ? "FLAG" : "REVEAL"}</span>
                    </button>
                </div>
            </div>

            {/* Minesweeper Grid */}
            <div className="d-flex justify-content-center mb-4">
                <div
                    className="m-card"
                    style={{
                        padding: "clamp(0.35rem, 1.5vw, 0.75rem)",
                        display: "grid",
                        gridTemplateColumns: `repeat(${COLS}, minmax(26px, 42px))`,
                        gridTemplateRows: `repeat(${ROWS}, minmax(26px, 42px))`,
                        gap: "clamp(2px, 1vw, 4px)",
                        background: "var(--m-surface)",
                        maxWidth: "100%",
                        userSelect: "none"
                    }}
                >
                    {grid.map((row, r) =>
                        row.map((cell, c) => (
                            <button
                                key={`${r}-${c}`}
                                type="button"
                                onClick={() => handleCellClick(r, c)}
                                onContextMenu={(e) => handleFlag(r, c, e)}
                                aria-label={`Tile row ${r + 1}, col ${c + 1}`}
                                style={{
                                    borderRadius: "0.4rem",
                                    border: cell.isRevealed
                                        ? "1px solid var(--m-border)"
                                        : "1px solid rgba(255, 255, 255, 0.12)",
                                    background: cell.isRevealed
                                        ? cell.isMine
                                            ? "#ef4444"
                                            : "var(--m-surface-2)"
                                        : "var(--m-surface)",
                                    color: cell.isMine
                                        ? "#ffffff"
                                        : getNumberColor(cell.neighborCount),
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.05rem",
                                    fontWeight: 800,
                                    fontFamily: "var(--m-font-mono)",
                                    cursor: cell.isRevealed ? "default" : "pointer",
                                    transition: "background 0.1s ease"
                                }}
                            >
                                {cell.isRevealed ? (
                                    cell.isMine ? (
                                        "💣"
                                    ) : cell.neighborCount > 0 ? (
                                        cell.neighborCount
                                    ) : null
                                ) : cell.isFlagged ? (
                                    <Flag size={14} style={{ color: "#ef4444" }} />
                                ) : null}
                            </button>
                        ))
                    )}
                </div>
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
                            Minefield Cleared!
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        You swept all 10 concealed mines safely in {timer} seconds!
                    </p>
                    <button type="button" onClick={initGrid} className="m-btn-primary">
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
                            Detonation Triggered
                        </h3>
                    </div>
                    <p style={{ color: "var(--m-text)", fontSize: "0.95rem", margin: "0 0 1rem" }}>
                        A concealed mine exploded. Use number clues to deduce surrounding hazards!
                    </p>
                    <button type="button" onClick={initGrid} className="m-btn-secondary">
                        <span>Try Again</span>
                    </button>
                </div>
            )}
        </div>
    );
};

