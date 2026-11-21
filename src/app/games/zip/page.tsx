import type { Metadata } from "next";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ZipGame } from "../../../components/games/ZipGame";

export const metadata: Metadata = {
    title: "Zip Puzzle | Arcade",
    description: "Connect numbered cells in order and draw one continuous non-crossing path filling every cell on the grid.",
    alternates: {
        canonical: "https://ahsanafzal.com/games/zip/"
    }
};

export default function ZipGamePage() {
    return (
        <div className="App">
            <Navbar />
            <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
                <ZipGame />
            </main>
            <Footer />
        </div>
    );
}

