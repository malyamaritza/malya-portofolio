import { useEffect, useRef } from 'react';

export default function BotanicalAtmosphere() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Mouse coordinates for gentle interaction
        let mouse = { x: -1000, y: -1000, active: false };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Botanical firefly spores / petal particles
        interface Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            pulseSpeed: number;
            color: string;
            isPetal: boolean;
            angle: number;
            rotationSpeed: number;
        }

        const colors = [
            'rgba(163, 196, 155, ', // Soft sage
            'rgba(216, 229, 212, ', // Pistachio
            'rgba(232, 200, 130, ', // Warm golden pollen
            'rgba(217, 136, 119, ', // Subtle rose petal
        ];

        const particleCount = 28;
        const particles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2.8 + 1.2,
                speedX: (Math.random() - 0.4) * 0.45,
                speedY: -Math.random() * 0.55 - 0.15,
                opacity: Math.random() * 0.5 + 0.2,
                pulseSpeed: Math.random() * 0.02 + 0.008,
                color: colors[Math.floor(Math.random() * colors.length)],
                isPetal: Math.random() > 0.65,
                angle: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Organic pulse
                p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.006;
                const currentOpacity = Math.max(0.12, Math.min(0.75, p.opacity));

                // Cursor gentle repulsion breeze
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120 && dist > 0) {
                        const force = (120 - dist) / 120;
                        p.x += (dx / dist) * force * 1.5;
                        p.y += (dy / dist) * force * 1.5;
                    }
                }

                // Float movement
                p.x += p.speedX;
                p.y += p.speedY;
                p.angle += p.rotationSpeed;

                // Wrap boundaries
                if (p.y < -20) {
                    p.y = height + 10;
                    p.x = Math.random() * width;
                }
                if (p.x < -20) p.x = width + 10;
                if (p.x > width + 20) p.x = -10;

                // Draw particle
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);

                if (p.isPetal) {
                    // Delicate organic leaf / petal shape
                    ctx.beginPath();
                    ctx.ellipse(0, 0, p.size * 1.8, p.size * 0.9, 0, 0, Math.PI * 2);
                    ctx.fillStyle = `${p.color}${currentOpacity * 0.75})`;
                    ctx.fill();
                } else {
                    // Glowing botanical spore / firefly
                    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2.2);
                    gradient.addColorStop(0, `${p.color}${currentOpacity})`);
                    gradient.addColorStop(0.5, `${p.color}${currentOpacity * 0.4})`);
                    gradient.addColorStop(1, `${p.color}0)`);

                    ctx.beginPath();
                    ctx.arc(0, 0, p.size * 2.2, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }

                ctx.restore();
            }

            animId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-30"
            aria-hidden="true"
        />
    );
}
