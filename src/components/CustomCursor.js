"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Disable on touch devices or smaller viewports
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice || window.innerWidth < 1024) {
            return;
        }

        setIsVisible(true);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName === "A" || 
                target.tagName === "BUTTON" || 
                target.closest("a") || 
                target.closest("button") ||
                target.classList.contains("clickable") ||
                target.closest(".clickable") ||
                target.getAttribute("role") === "button";
            
            setIsPointer(isClickable);

            // Special portfolio components custom cursor interaction
            const projectCard = target.closest(".project-card");
            setIsHovered(!!projectCard);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Inner dot */}
            <motion.div
                className="custom-cursor-dot"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    backgroundColor: isPointer ? "var(--accent-secondary)" : "var(--accent-primary)"
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            {/* Outer ring */}
            <motion.div
                className="custom-cursor-ring"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isPointer ? 1.8 : isHovered ? 2.5 : 1,
                    borderColor: isPointer ? "var(--accent-secondary)" : isHovered ? "var(--accent-tertiary)" : "rgba(59, 130, 246, 0.3)",
                    borderWidth: isPointer ? "1px" : "2px",
                    backgroundColor: isHovered ? "rgba(6, 182, 212, 0.05)" : "rgba(0, 0, 0, 0)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            
            <style>{`
                .custom-cursor-dot {
                    width: 8px;
                    height: 8px;
                    background-color: var(--accent-primary);
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 99999;
                    mix-blend-mode: difference;
                }
                .custom-cursor-ring {
                    width: 32px;
                    height: 32px;
                    border: 2px solid rgba(59, 130, 246, 0.3);
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 99998;
                    box-shadow: 0 0 10px rgba(59, 130, 246, 0.1);
                }
                @media (prefers-reduced-motion: reduce) {
                    .custom-cursor-dot, .custom-cursor-ring {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
