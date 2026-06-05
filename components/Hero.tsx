"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({
    target,
    prefix = "",
    suffix = "",
    duration = 2000,
}: {
    target: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.round(current * 10) / 10);
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [target, duration]);

    return (
        <span>
            {prefix}{count}{suffix}
        </span>
    );
}

export default function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ paddingBottom: "64px" }}
        >
            {/* ---- Top-left label ---- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{
                    position: "absolute",
                    top: "88px",
                    left: "32px",
                    zIndex: 2,
                }}
            >
                <p style={{ color: "var(--text-muted)", fontSize: "13px", letterSpacing: "0.02em", lineHeight: 1.5 }}>
                    You innovate,
                </p>
                <p style={{ color: "var(--text)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.02em" }}>
                    we automate.
                </p>
            </motion.div>

            {/* ---- Neural Network badge — top right, flush to edge ---- */}
            <motion.a
                href="#work"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                    position: "absolute",
                    top: "60px",
                    right: "0",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRight: "none",
                    cursor: "pointer",
                    width: "220px",
                    zIndex: 2,
                }}
            >
                {/* Image */}
                <div style={{ width: "100%", height: "120px", overflow: "hidden", position: "relative" }}>
                    <img
                        src="https://framerusercontent.com/images/YTucZ4QCWKrqbXUk6vpgmJvTAqg.jpg"
                        alt="Neural Network"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center top",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4) 100%)",
                        }}
                    />
                </div>

                {/* Label row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
                    <div>
                        <p style={{ color: "var(--text)", fontSize: "13px", fontWeight: 600, lineHeight: 1.2 }}>
                            Neural Network
                        </p>
                        <p style={{ color: "var(--orange)", fontSize: "11px", letterSpacing: "0.06em" }}>
                            // Latest Release
                        </p>
                    </div>
                    <ArrowRight size={15} style={{ color: "var(--orange)" }} />
                </div>
            </motion.a>

            {/* ---- Main headline — offset left to ~20% of viewport ---- */}
            <div style={{ paddingLeft: "clamp(180px, 18vw, 260px)", paddingRight: "240px", maxWidth: "100%" , paddingTop: "90px"}}>
                {/* Line 1: — The smarter way */}
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: 120 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.15, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontSize: "clamp(2.8rem, 6.2vw, 6.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            color: "var(--text)",
                            lineHeight: 1.0,
                        }}
                    >
                        — The smarter way
                    </motion.div>
                </div>

                {/* Line 2: to build, run, and scale */}
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: 120 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.28, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontSize: "clamp(2.8rem, 6.2vw, 6.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            lineHeight: 1.0,
                            color: "var(--text)",
                        }}
                    >
                        {"to "}
                        {["build,", " run,", " and scale"].map((w, i) => (
                            <motion.span
                                key={w}
                                initial={{ color: "var(--text)" }}
                                animate={{ color: "var(--orange)" }}
                                transition={{ delay: 0.9 + i * 0.12, duration: 0.35 }}
                            >
                                {w}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Line 3: your business. */}
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: 120 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.4, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontSize: "clamp(2.8rem, 6.2vw, 6.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            color: "var(--text-muted)",
                            lineHeight: 1.05,
                        }}
                    >
                        your business.
                    </motion.div>
                </div>

                {/* ---- CTA row ---- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "24px",
                        marginTop: "32px",
                    }}
                >
                    {/* Left: text */}
                    <div style={{ minWidth: "180px" }}>
                        <p style={{ color: "var(--text)", fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>
                            See Platform in action
                        </p>
                        <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.5 }}>
                            Join our guided tour and explore all features live.
                        </p>
                    </div>

                    {/* Horizontal separator */}
                    <div
                        style={{
                            flex: "0 0 80px",
                            height: "1px",
                            background: "var(--border)",
                        }}
                    />

                    {/* Button */}
                    <a
                        href="#contact"
                        className="btn-orange"
                        style={{ borderRadius: "4px", padding: "14px 28px", fontSize: "14px" }}
                    >
                        <Calendar size={15} />
                        Book a Demo
                    </a>
                </motion.div>

                {/* ---- Stats row ---- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "48px",
                        marginTop: "32px",
                    }}
                >
                    {/* Stat 1 */}
                    <div>
                        <div
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.04em",
                                color: "var(--orange)",
                                lineHeight: 1,
                            }}
                        >
                            <AnimatedCounter target={97.8} suffix="%" duration={2200} />
                        </div>
                        <p style={{ color: "var(--text)", fontSize: "14px", fontWeight: 600, marginTop: "6px" }}>Uptime</p>
                        <p style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.04em" }}>30-day monitoring</p>
                    </div>

                    {/* Stat 2 */}
                    <div>
                        <div
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.04em",
                                color: "var(--orange)",
                                lineHeight: 1,
                            }}
                        >
                            <AnimatedCounter target={31.2} prefix="+" suffix="%" duration={2200} />
                        </div>
                        <p style={{ color: "var(--text)", fontSize: "14px", fontWeight: 600, marginTop: "6px" }}>Performance</p>
                        <p style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.04em" }}>AI optimized bundle</p>
                    </div>
                </motion.div>
            </div>

            {/* ---- Scroll indicator ---- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                style={{
                    position: "absolute",
                    bottom: "32px",
                    right: "32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "var(--text-muted)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                }}
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    style={{ width: "1px", height: "32px", background: "var(--orange)" }}
                />
                Scroll
            </motion.div>
        </section>
    );
}