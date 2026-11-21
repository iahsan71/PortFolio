import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GAMES_DATA } from "../../data/gamesData";
import { DailyChallengeSection } from "../../components/games/DailyChallengeSection";
import { GamesFAQ } from "../../components/games/GamesFAQ";
import { ArrowUpRight, Gamepad2, Sparkles, Clock, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "Games & Arcade",
    description: "Interactive browser puzzle arcade engineered with React and TypeScript. Play Zip, Signal, Flood, Merge (2048), and Minesweeper with daily challenges.",
    alternates: {
        canonical: "https://ahsanafzal.com/games/"
    },
    openGraph: {
        title: "Arcade Games | Ahsan Afzal",
        description: "5 high-performance browser puzzles engineered with React 18, TypeScript, and accessible 60fps animations.",
        url: "https://ahsanafzal.com/games/",
        type: "website",
        images: [
            {
                url: "https://ahsanafzal.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Arcade Games — Ahsan Afzal"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Arcade Games | Ahsan Afzal",
        description: "5 high-performance browser puzzles engineered with React 18, TypeScript, and accessible 60fps animations.",
        images: ["https://ahsanafzal.com/og-image.png"]
    }
};

export default function GamesHubPage() {
    const arcadeJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Browser Puzzle Arcade",
        "description": "5 interactive algorithmic puzzle games engineered by Ahsan Afzal.",
        "url": "https://ahsan-afzal.web.app/games/"
    };

    return (
        <div className="App">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(arcadeJsonLd) }}
            />
            <Navbar />

            <main style={{ paddingTop: "clamp(5.5rem, 8vw, 7rem)", paddingBottom: "clamp(3.5rem, 6vw, 6rem)" }}>
                <div className="editorial-container">
                    {/* Hero Section */}
                    <div className="mb-4 mb-md-5 pb-2">
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                            <span className="m-pill m-pill-accent font-mono-m" style={{ fontSize: "0.725rem", letterSpacing: "0.15em" }}>
                                <Gamepad2 size={14} />
                                <span>INTERACTIVE ARCADE</span>
                            </span>
                            <span className="m-pill font-mono-m" style={{ fontSize: "0.725rem", letterSpacing: "0.15em" }}>
                                <Sparkles size={13} style={{ color: "var(--m-accent)" }} />
                                <span>5 PUZZLE ENGINES</span>
                            </span>
                        </div>

                        <h1
                            className="font-display"
                            style={{
                                fontSize: "clamp(1.85rem, 5vw, 4rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.035em",
                                color: "var(--m-text)",
                                lineHeight: 1.05,
                                marginBottom: "1rem"
                            }}
                        >
                            Algorithmic Puzzles &amp; Browser Arcade
                        </h1>

                        <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", color: "var(--m-muted)", maxWidth: "44rem", lineHeight: 1.65, margin: 0 }}>
                            A collection of real-time client-side games demonstrating recursive pathfinding, matrix state manipulation, combinatorial logic, and 60fps hardware-accelerated animations.
                        </p>
                    </div>

                    {/* Daily Challenge Highlight */}
                    <DailyChallengeSection />

                    {/* Games Grid Section */}
                    <div className="mb-5">
                        <div className="d-flex justify-content-between align-items-end mb-4">
                            <div>
                                <div className="m-section-tag">
                                    <span className="m-tag-accent" />
                                    <span>PLAYABLE COLLECTION</span>
                                </div>
                                <h2 className="font-display m-0" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--m-text)" }}>
                                    Select a Game
                                </h2>
                            </div>
                        </div>

                        <div className="row g-4">
                            {GAMES_DATA.map((game, idx) => {
                                const difficultyColor =
                                    game.difficulty === "EASY"
                                        ? "#10b981"
                                        : game.difficulty === "MEDIUM"
                                        ? "#3b82f6"
                                        : "#f59e0b";

                                return (
                                    <div key={game.id} className="col-12 col-md-6 col-lg-4">
                                        <article
                                            className="m-card h-100 d-flex flex-column justify-content-between"
                                            style={{ padding: "clamp(1.15rem, 3vw, 1.5rem)" }}
                                        >
                                            <div>
                                                {/* Meta Row */}
                                                <div className="d-flex justify-content-between align-items-center mb-3 font-mono-m" style={{ fontSize: "0.725rem" }}>
                                                    <span style={{ color: "var(--m-accent)", letterSpacing: "0.15em", fontWeight: 700 }}>
                                                        {game.category}
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontSize: "0.68rem",
                                                            padding: "0.15rem 0.5rem",
                                                            borderRadius: "999px",
                                                            background: `${difficultyColor}18`,
                                                            color: difficultyColor,
                                                            fontWeight: 700,
                                                            letterSpacing: "0.05em"
                                                        }}
                                                    >
                                                        {game.difficulty}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-display mb-2" style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)", fontWeight: 700, color: "var(--m-text)" }}>
                                                    <Link
                                                        href={`/games/${game.slug}`}
                                                        style={{ color: "inherit", textDecoration: "none" }}
                                                    >
                                                        {game.title}
                                                    </Link>
                                                </h3>

                                                {/* Description */}
                                                <p style={{ fontSize: "clamp(0.825rem, 2vw, 0.9rem)", color: "var(--m-muted)", lineHeight: 1.55, marginBottom: "1rem" }}>
                                                    {game.tagline}
                                                </p>
                                            </div>

                                            <div>
                                                {/* Micro stats */}
                                                <div
                                                    className="d-flex align-items-center gap-3 py-2.5 mb-3 font-mono-m"
                                                    style={{
                                                        fontSize: "0.75rem",
                                                        color: "var(--m-dim)",
                                                        borderTop: "1px solid var(--m-border)",
                                                        borderBottom: "1px solid var(--m-border)"
                                                    }}
                                                >
                                                    <span className="d-flex align-items-center gap-1">
                                                        <Clock size={13} />
                                                        <span>{game.estimatedTime}</span>
                                                    </span>
                                                    <span>•</span>
                                                    <span className="d-flex align-items-center gap-1">
                                                        <Target size={13} />
                                                        <span>Touch &amp; Keys</span>
                                                    </span>
                                                </div>

                                                {/* Action Button */}
                                                <Link
                                                    href={`/games/${game.slug}`}
                                                    className="m-btn-secondary w-100 justify-content-between"
                                                    style={{ padding: "0.55rem 1rem" }}
                                                >
                                                    <span>Launch Game</span>
                                                    <ArrowUpRight size={16} />
                                                </Link>
                                            </div>
                                        </article>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Arcade Engineering FAQ */}
                    <GamesFAQ />
                </div>
            </main>

            <Footer />
        </div>
    );
}

