import React, { useRef, useEffect } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = 2;
                this.baseSpeed = 1;
                this.speedX = (Math.random() - 0.5) * this.baseSpeed;
                this.speedY = (Math.random() - 0.5) * this.baseSpeed;
                this.opacity = Math.random() * 0.4 + 0.2;
            }

            update() {
                // Continuous movement at constant speed
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(200, 200, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        const particleCount = Math.floor(window.innerWidth / 3);
        let particles = Array(particleCount).fill().map(() => new Particle());

        // Draw connections between particles
        const drawConnections = (particles) => {
            particles.forEach(p1 => {
                particles.forEach(p2 => {
                    if (p1 === p2) return;
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        const opacity = 0.1 * (1 - distance / 100);
                        ctx.strokeStyle = `rgba(150, 150, 255, ${opacity})`;
                        ctx.lineWidth = 0.3;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });
        };

        // Animation loop
        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update all particles
            particles.forEach(p => p.update());
            
            // Draw connections
            drawConnections(particles);
            
            // Draw particles
            particles.forEach(p => p.draw());

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;