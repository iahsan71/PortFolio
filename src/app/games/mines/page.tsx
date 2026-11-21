import type { Metadata } from "next";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { MinesweeperGame } from "../../../components/games/MinesweeperGame";

export const metadata: Metadata = {
    title: "Minesweeper | Arcade",
    description: "Deduce concealed mines through numeric proximity analysis with first-click protection and mobile flag mode.",
    alternates: {
        canonical: "https://www.ahsanafzal.com/games/mines/"
    }
};

export default function MinesweeperGamePage() {
    return (
        <div className="App">
            <Navbar />
            <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
                <MinesweeperGame />
            </main>
            <Footer />
        </div>
    );
}

