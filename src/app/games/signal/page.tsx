import type { Metadata } from "next";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { SignalGame } from "../../../components/games/SignalGame";

export const metadata: Metadata = {
    title: "Signal — Lights Out | Arcade",
    description: "Invert intersecting nodes to deactivate all active signals in this electronic logic matrix puzzle.",
    alternates: {
        canonical: "https://ahsanafzal.com/games/signal/"
    }
};

export default function SignalGamePage() {
    return (
        <div className="App">
            <Navbar />
            <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
                <SignalGame />
            </main>
            <Footer />
        </div>
    );
}

