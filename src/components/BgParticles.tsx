"use client";

import React, { useEffect, useRef } from "react";

const BgParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse: { x: number | null; y: number | null; radius: number } = { x: null, y: null, radius: 170 };

        // Respect reduced motion
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery.matches) return;

        class Particle {
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
            hasRing: boolean;
            pulseRadius: number;
            hasGlow: boolean;

            constructor(hasRing = false) {
                this.x = Math.random() * (canvas?.width ?? window.innerWidth);
                this.y = Math.random() * (canvas?.height ?? window.innerHeight);
                this.size = Math.random() * 1.5 + 1.2;
                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;
                this.hasRing = hasRing;
                this.pulseRadius = 6;
                this.hasGlow = Math.random() > 0.65;
            }

            update() {
                if (!canvas) return;
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges smoothly
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Gentle mouse repulsion/interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        this.x -= Math.cos(angle) * force * 1.2;
                        this.y -= Math.sin(angle) * force * 1.2;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                if (this.hasGlow) {
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = "rgba(59, 130, 246, 0.75)";
                }
                ctx.fillStyle = this.hasGlow ? "rgba(96, 165, 250, 0.9)" : "rgba(59, 130, 246, 0.75)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Subtle orbital pulse ring for featured constellation nodes
                if (this.hasRing) {
                    this.pulseRadius += 0.12;
                    if (this.pulseRadius > 24) this.pulseRadius = 6;
                    const pulseAlpha = Math.max(0, (1 - (this.pulseRadius - 6) / 18) * 0.35);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${pulseAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2);
                    ctx.stroke();
                }
                ctx.restore();
            }
        }

        const init = () => {
            particles = [];
            const count = Math.min(85, Math.max(40, Math.floor((canvas.width * canvas.height) / 16000)));
            for (let i = 0; i < count; i++) {
                const hasRing = i < 4;
                particles.push(new Particle(hasRing));
            }
        };

        const connect = () => {
            const maxDistance = 160;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * 0.26;
                        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
                        ctx.lineWidth = 0.85;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse cursor
                if (mouse.x !== null && mouse.y !== null) {
                    const mdx = particles[a].x - mouse.x;
                    const mdy = particles[a].y - mouse.y;
                    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mdist < mouse.radius) {
                        const malpha = (1 - mdist / mouse.radius) * 0.42;
                        ctx.strokeStyle = `rgba(96, 165, 250, ${malpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 h-full w-full"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
                opacity: 0.95
            }}
        />
    );
};

export default BgParticles;

