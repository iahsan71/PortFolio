import type { Metadata } from "next";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { MergeGame } from "../../../components/games/MergeGame";

export const metadata: Metadata = {
    title: "Merge — 2048 | Arcade",
    description: "Slide and combine matching tiles to engineer the 2048 block with keyboard and touch swipe gestures.",
    alternates: {
        canonical: "https://www.ahsanafzal.com/games/merge/"
    }
};

export default function MergeGamePage() {
    return (
        <div className="App">
            <Navbar />
            <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
                <MergeGame />
            </main>
            <Footer />
        </div>
    );
}

