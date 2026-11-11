import type { Metadata } from "next";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FloodGame } from "../../../components/games/FloodGame";

export const metadata: Metadata = {
    title: "Flood Fill | Arcade",
    description: "Expand your color territory across the 12x12 board in 25 moves or less using cellular flood algorithm.",
    alternates: {
        canonical: "https://ahsan-afzal.web.app/games/flood/"
    }
};

export default function FloodGamePage() {
    return (
        <div className="App">
            <Navbar />
            <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
                <FloodGame />
            </main>
            <Footer />
        </div>
    );
}

