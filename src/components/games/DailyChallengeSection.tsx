"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Flame, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { GAMES_DATA, getDailySeed } from "../../data/gamesData";

export const DailyChallengeSection: React.FC = () => {
    const today = new Date().toISOString().slice(0, 10);
    const seed = getDailySeed(today);
    const featuredGameIdx = seed % GAMES_DATA.length;
    const featuredGame = GAMES_DATA[featuredGameIdx];

    const [streak, setStreak] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        try {
            const savedDate = localStorage.getItem("daily_challenge_last_date");
            const savedStreak = localStorage.getItem("daily_challenge_streak");

            if (savedStreak) setStreak(parseInt(savedStreak, 10));

            if (savedDate === today) {
                setIsCompleted(true);
            }
        } catch {}
    }, [today]);

    return (
        <div
            className="m-card mb-5"
            style={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)",
                padding: "clamp(1.15rem, 3.5vw, 2rem)"
            }}
        >
            <div className="row g-3 g-lg-4 align-items-center justify-content-between">
                <div className="col-lg-8">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                        <span
                            className="font-mono-m d-inline-flex align-items-center gap-2"
                            style={{
                                fontSize: "0.725rem",
                                color: "#f59e0b",
                                background: "rgba(245, 158, 11, 0.12)",
                                padding: "0.2rem 0.55rem",
                                borderRadius: "9999px",
                                fontWeight: 700,
                                letterSpacing: "0.08em"
                            }}
                        >
                            <Flame size={13} />
                            <span>{streak} DAY STREAK</span>
                        </span>

                        <span
                            className="font-mono-m"
                            style={{
                                fontSize: "0.725rem",
                                color: "var(--m-muted)",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase"
                            }}
                        >
                            DAILY CHALLENGE · {today}
                        </span>

                        {isCompleted && (
                            <span
                                className="font-mono-m d-inline-flex align-items-center gap-1"
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#10b981",
                                    background: "rgba(16, 185, 129, 0.12)",
                                    padding: "0.2rem 0.5rem",
                                    borderRadius: "9999px",
                                    fontWeight: 700
                                }}
                            >
                                <CheckCircle2 size={13} />
                                <span>COMPLETED</span>
                            </span>
                        )}
                    </div>

                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(1.25rem, 3vw, 1.85rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.025em",
                            color: "var(--m-text)",
                            marginBottom: "0.4rem"
                        }}
                    >
                        Today&apos;s Featured Puzzle: {featuredGame.title}
                    </h2>

                    <p style={{ fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)", color: "var(--m-muted)", margin: 0, maxWidth: "38rem", lineHeight: 1.6 }}>
                        {featuredGame.tagline} Deterministically seeded for all players worldwide. Test your algorithmic thinking and maintain your daily streak.
                    </p>
                </div>

                <div className="col-lg-4 text-lg-end">
                    <Link
                        href={`/games/${featuredGame.slug}`}
                        className="m-btn-primary"
                        style={{ padding: "0.65rem 1.25rem", fontSize: "0.85rem" }}
                    >
                        <span>{isCompleted ? "Play Again" : "Play Today's Challenge"}</span>
                        <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

