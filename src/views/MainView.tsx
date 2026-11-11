"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Achievements from "../components/Achievements";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Education from "../components/Education";
import ComingSoon from "../components/ComingSoon";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainView: React.FC = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const targetId = window.location.hash.replace("#", "");
            if (targetId) {
                const timer = setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }, 180);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <Achievements />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Awards />
                <Education />
                <ComingSoon />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default MainView;

