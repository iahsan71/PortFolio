import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const AdminView = (props) => {
    return (
        <>
            <div className="App">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <CTA />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default AdminView;
