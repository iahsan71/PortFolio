"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="App">
            <Navbar />
            <main
                style={{
                    minHeight: "75vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8rem 1.5rem 4rem",
                    textAlign: "center"
                }}
            >
                <div className="editorial-container-narrow">
                    <div className="m-section-tag" style={{ justifyContent: "center" }}>
                        <span className="m-tag-accent" />
                        <span>ERROR 404</span>
                    </div>

                    <h1
                        className="font-display mb-3"
                        style={{
                            fontSize: "clamp(3rem, 8vw, 6rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.04em",
                            color: "var(--m-text)",
                            lineHeight: 1
                        }}
                    >
                        404
                    </h1>

                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            color: "var(--m-text)",
                            marginBottom: "1rem"
                        }}
                    >
                        Page Not Found
                    </h2>

                    <p
                        style={{
                            fontSize: "1rem",
                            color: "var(--m-muted)",
                            maxWidth: "420px",
                            margin: "0 auto 2.5rem",
                            lineHeight: 1.6
                        }}
                    >
                        The page or project case study you are looking for does not exist or has been relocated.
                    </p>

                    <div className="d-flex justify-content-center gap-3">
                        <Link href="/" className="m-btn-primary">
                            <Home size={15} />
                            <span>Return to Home</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

