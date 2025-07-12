import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myPicture from "../assets/img/myPic.jpg";

const Hero = () => {
    const [currentText, setCurrentText] = useState("Ahsan Afzal");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) =>
                prevText === "Hi, I'm Ahsan Afzal"
                    ? "A Front-End Developer"
                    : "Hi, I'm Ahsan Afzal"
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="hero">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="hero-content"
            >
                <div className="hero-image">
                    <img src={myPicture} alt="Ahsan Afzal" />
                </div>
                <div className="hero-text">
                    <h1>
                        <span>{currentText}</span>
                    </h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    ></motion.div>
                    <p>
                        I am a passionate Front-End Developer with expertise in
                        crafting responsive and interactive web experiences.
                        Skilled in HTML, CSS, Bootstrap, JavaScript, ReactJS,
                        TypeScript and VueJS, I bring designs to life with
                        precision and creativity. I also have foundational
                        backend experience, leveraging Firebase to enhance
                        functionality and scalability. Let’s build something
                        amazing together!
                    </p>
                    <a href="#projects" className="btn">
                        View My Work
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
