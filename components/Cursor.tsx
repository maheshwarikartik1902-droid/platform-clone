"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let fx = 0, fy = 0;
        let cx = 0, cy = 0;
        let animId: number;

        const move = (e: MouseEvent) => {
            cx = e.clientX;
            cy = e.clientY;
            if (cursorRef.current) {
                cursorRef.current.style.left = cx + "px";
                cursorRef.current.style.top = cy + "px";
            }
        };

        const animate = () => {
            fx += (cx - fx) * 0.12;
            fy += (cy - fy) * 0.12;
            if (followerRef.current) {
                followerRef.current.style.left = fx + "px";
                followerRef.current.style.top = fy + "px";
            }
            animId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", move);
        animate();

        // Hover effects
        const hoverEls = document.querySelectorAll("a, button, .btn-orange, .btn-ghost, .nav-link");
        const onEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.width = "16px";
                cursorRef.current.style.height = "16px";
            }
            if (followerRef.current) {
                followerRef.current.style.width = "56px";
                followerRef.current.style.height = "56px";
                followerRef.current.style.borderColor = "rgba(232, 77, 43, 0.7)";
            }
        };
        const onLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.width = "10px";
                cursorRef.current.style.height = "10px";
            }
            if (followerRef.current) {
                followerRef.current.style.width = "36px";
                followerRef.current.style.height = "36px";
                followerRef.current.style.borderColor = "rgba(232, 77, 43, 0.4)";
            }
        };

        hoverEls.forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
}