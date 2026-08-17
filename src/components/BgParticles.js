import React, { useEffect, useRef } from "react";

const BgParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let particles = [];
        const maxParticles = 60;
        
        // Handle Resize
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.3 - 0.15;
                // Get accent color variables from body if possible
                this.color = Math.random() > 0.5 ? "rgba(59, 130, 246, 0.15)" : "rgba(139, 92, 246, 0.15)";
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce or wrap
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;

                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const init = () => {
            particles = [];
            for (let i = 0; i < maxParticles; i++) {
                particles.push(new Particle());
            }
        };
        init();

        // Draw connections between close particles
        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Render and update particles
            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            drawConnections();
            animationFrameId = requestAnimationFrame(animate);
        };

        // Don't render on mobile screens to save resource performance
        if (window.innerWidth >= 768) {
            animate();
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="bg-canvas-container">
            <div className="bg-orb bg-orb-1" />
            <div className="bg-orb bg-orb-2" />
            <div className="bg-orb bg-orb-3" />
            <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%", position: "relative", zIndex: 2 }} />
            <style>{`
                .bg-canvas-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    pointer-events: none;
                    background: radial-gradient(circle at 50% 50%, rgba(10, 10, 11, 0.5) 0%, rgba(10, 10, 11, 1) 100%);
                    overflow: hidden;
                }
                .bg-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.15;
                    mix-blend-mode: screen;
                    pointer-events: none;
                    z-index: 1;
                }
                .bg-orb-1 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
                    top: -10%;
                    left: -10%;
                    animation: floatOrb1 25s infinite alternate ease-in-out;
                }
                .bg-orb-2 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%);
                    bottom: -15%;
                    right: -10%;
                    animation: floatOrb2 30s infinite alternate ease-in-out;
                }
                .bg-orb-3 {
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, var(--accent-tertiary) 0%, transparent 70%);
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: floatOrb3 20s infinite alternate ease-in-out;
                }
                @keyframes floatOrb1 {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(100px, 80px) scale(1.2); }
                }
                @keyframes floatOrb2 {
                    0% { transform: translate(0, 0) scale(1.2); }
                    100% { transform: translate(-120px, -60px) scale(0.9); }
                }
                @keyframes floatOrb3 {
                    0% { transform: translate(-50%, -50%) translate(-50px, 50px); }
                    100% { transform: translate(-50%, -50%) translate(80px, -80px); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .bg-orb {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default BgParticles;
