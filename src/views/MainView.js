"use client";

import React from "react";
import Navbar from "../components/Navbar";
import BgParticles from "../components/BgParticles";
import CommandPalette from "../components/CommandPalette";
import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Services from "../components/Services";
import TechWall from "../components/TechWall";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainView = (props) => {
    return (
        <>
            <div className="App">
                <CustomCursor />
                <BgParticles />
                <CommandPalette />
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Achievements />
                <Services />
                <TechWall />
                <Projects />
                <Testimonials />
                <CTA />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default MainView;
