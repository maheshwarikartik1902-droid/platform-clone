"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Tagline() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start("visible");
    }, [isInView, controls]);

    // Text split: white part vs muted part
    const whitePart = "We run your infrastructure so you can focu";
    const mutedPart = "s on building great\nproducts.";

    const wordVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.06,
                duration: 0.7,
                ease: ({} as any).easeInOut,
            },
        }),
    };

    return (
        <section
            ref={ref}
            className="relative overflow-hidden"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background: "var(--bg)",
                padding: "80px 0 80px 64px",
            }}
        >
            {/* ---- 3D Orange Hexagonal Cluster — right side ---- */}
            <div
                style={{
                    position: "absolute",
                    right: "-60px",
                    bottom: "-40px",
                    width: "520px",
                    height: "520px",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            >
                <svg
                    viewBox="0 0 520 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%", height: "100%" }}
                >
                    {/* Main large hex */}
                    <g transform="translate(160, 100)">
                        <polygon
                            points="100,0 200,57.7 200,173.2 100,230.9 0,173.2 0,57.7"
                            fill="url(#hexGrad1)"
                            opacity="0.95"
                        />
                        {/* Inner shading top face */}
                        <polygon
                            points="100,0 200,57.7 100,115.4 0,57.7"
                            fill="url(#hexGradTop1)"
                            opacity="0.8"
                        />
                        {/* Inner shading left face */}
                        <polygon
                            points="0,57.7 100,115.4 100,230.9 0,173.2"
                            fill="url(#hexGradLeft1)"
                            opacity="0.6"
                        />
                    </g>

                    {/* Medium hex — upper right */}
                    <g transform="translate(290, 20)">
                        <polygon
                            points="65,0 130,37.5 130,112.5 65,150 0,112.5 0,37.5"
                            fill="url(#hexGrad2)"
                            opacity="0.9"
                        />
                        <polygon
                            points="65,0 130,37.5 65,75 0,37.5"
                            fill="url(#hexGradTop2)"
                            opacity="0.7"
                        />
                    </g>

                    {/* Small hex — far right middle */}
                    <g transform="translate(360, 200)">
                        <polygon
                            points="55,0 110,31.8 110,95.3 55,127.0 0,95.3 0,31.8"
                            fill="url(#hexGrad3)"
                            opacity="0.85"
                        />
                        <polygon
                            points="55,0 110,31.8 55,63.5 0,31.8"
                            fill="url(#hexGradTop3)"
                            opacity="0.65"
                        />
                    </g>

                    {/* Tiny hex — bottom right */}
                    <g transform="translate(400, 360)">
                        <polygon
                            points="40,0 80,23.1 80,69.3 40,92.4 0,69.3 0,23.1"
                            fill="url(#hexGrad4)"
                            opacity="0.8"
                        />
                    </g>

                    {/* Extra small top */}
                    <g transform="translate(330, -10)">
                        <polygon
                            points="30,0 60,17.3 60,52 30,69.3 0,52 0,17.3"
                            fill="url(#hexGrad2)"
                            opacity="0.7"
                        />
                    </g>

                    <defs>
                        {/* Main hex gradient */}
                        <linearGradient id="hexGrad1" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#E84D2B" />
                            <stop offset="60%" stopColor="#C13A1E" />
                            <stop offset="100%" stopColor="#7A1E0A" />
                        </linearGradient>
                        <linearGradient id="hexGradTop1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF6B3D" />
                            <stop offset="100%" stopColor="#E84D2B" />
                        </linearGradient>
                        <linearGradient id="hexGradLeft1" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#7A1E0A" />
                            <stop offset="100%" stopColor="#A32815" />
                        </linearGradient>

                        {/* Medium hex gradient */}
                        <linearGradient id="hexGrad2" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#D44420" />
                            <stop offset="100%" stopColor="#8B2210" />
                        </linearGradient>
                        <linearGradient id="hexGradTop2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F05E35" />
                            <stop offset="100%" stopColor="#D44420" />
                        </linearGradient>

                        {/* Small hex gradient */}
                        <linearGradient id="hexGrad3" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#C83B1A" />
                            <stop offset="100%" stopColor="#6B1808" />
                        </linearGradient>
                        <linearGradient id="hexGradTop3" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#E85028" />
                            <stop offset="100%" stopColor="#C83B1A" />
                        </linearGradient>

                        {/* Tiny hex gradient */}
                        <linearGradient id="hexGrad4" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#B83015" />
                            <stop offset="100%" stopColor="#5A1205" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Glow behind the cluster */}
                <div
                    style={{
                        position: "absolute",
                        inset: "10%",
                        background: "radial-gradient(ellipse at center, rgba(232,77,43,0.25) 0%, transparent 70%)",
                        filter: "blur(40px)",
                        zIndex: -1,
                    }}
                />
            </div>

            {/* ---- Statement text ---- */}
            <div style={{ maxWidth: "1100px", position: "relative", zIndex: 2 }}>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    style={{
                        fontSize: "clamp(3rem, 7vw, 7.5rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.0,
                        color: "var(--text)",
                    }}
                >
                    {/* "We run your" */}
                    {["We", "run", "your"].map((word, i) => (
                        <motion.span
                            key={word + i}
                            custom={i}
                            variants={wordVariants}
                            style={{ display: "inline-block", marginRight: "0.22em" }}
                        >
                            {word}
                        </motion.span>
                    ))}

                    <br />

                    {/* "infrastructure so you can" */}
                    {["infrastructure", "so", "you", "can"].map((word, i) => (
                        <motion.span
                            key={word + i}
                            custom={3 + i}
                            variants={wordVariants}
                            style={{ display: "inline-block", marginRight: "0.22em" }}
                        >
                            {word}
                        </motion.span>
                    ))}

                    <br />

                    {/* "focu" white + "s on building great" muted */}
                    <motion.span
                        custom={7}
                        variants={wordVariants}
                        style={{ display: "inline-block", marginRight: "0" }}
                    >
                        focu
                    </motion.span>
                    <motion.span
                        custom={8}
                        variants={wordVariants}
                        style={{
                            display: "inline-block",
                            color: "var(--text-muted)",
                            marginRight: "0.22em",
                        }}
                    >
                        s on building great
                    </motion.span>

                    <br />

                    {/* "products." muted */}
                    <motion.span
                        custom={9}
                        variants={wordVariants}
                        style={{
                            display: "inline-block",
                            color: "var(--text-muted)",
                        }}
                    >
                        products.
                    </motion.span>
                </motion.div>
            </div>
        </section>
    );
}