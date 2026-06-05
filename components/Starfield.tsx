"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        interface Star {
            x: number;
            y: number;
            z: number;
            pz: number;
        }

        const stars: Star[] = Array.from({ length: 280 }, () => ({
            x: Math.random() * canvas.width - canvas.width / 2,
            y: Math.random() * canvas.height - canvas.height / 2,
            z: Math.random() * canvas.width,
            pz: 0,
        }));

        const draw = () => {
            ctx.fillStyle = "rgba(10, 10, 10, 0.18)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach((star) => {
                star.pz = star.z;
                star.z -= 0.6;
                if (star.z <= 0) {
                    star.x = Math.random() * canvas.width - cx;
                    star.y = Math.random() * canvas.height - cy;
                    star.z = canvas.width;
                    star.pz = star.z;
                }
                const sx = (star.x / star.z) * canvas.width + cx;
                const sy = (star.y / star.z) * canvas.height + cy;
                const px = (star.x / star.pz) * canvas.width + cx;
                const py = (star.y / star.pz) * canvas.height + cy;
                const size = Math.max(0.1, (1 - star.z / canvas.width) * 2.5);
                const alpha = (1 - star.z / canvas.width) * 0.8;

                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.lineWidth = size;
                ctx.stroke();
            });

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="starfield"
            className="fixed inset-0 w-full h-full"
            style={{ zIndex: 0, pointerEvents: "none" }}
        />
    );
}