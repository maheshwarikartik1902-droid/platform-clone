"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const services = [
    {
        num: "01",
        name: "Neural Network",
        tag: "learning",
        desc: "A self-learning intelligence core that observes, learns, and makes smart decisions in milliseconds to optimize your operations.",
        img: "https://framerusercontent.com/images/cjUCrOUpaHvRub5zRJbuwPVTmSY.jpg",
    },
    {
        num: "02",
        name: "Design Intelligence",
        tag: "architecture",
        desc: "Automated infrastructure architect that designs and adapts your perfect environment based on real-time insights.",
        img: "https://framerusercontent.com/images/VwwYkGQBZx3i8hE4V4mjLQF1m7Y.jpg",
    },
    {
        num: "03",
        name: "Security AI",
        tag: "protection",
        desc: "Proactive security intelligence that evolves with emerging threats, providing zero-downtime defense for your systems.",
        img: "https://framerusercontent.com/images/bMwAdLIuWeFeUahUqVrJmI46y0.jpg",
    },
    {
        num: "04",
        name: "Smart Scale",
        tag: "growth",
        desc: "Intelligent scaling engine that predicts demand spikes and auto-allocates resources before you need them.",
        img: "https://framerusercontent.com/images/by2IUUGfTAjtYkXxmDxW4HVj29c.jpg",
    },
];

const capabilities = [
    "Design", "Optimize", "Scale", "Secure",
    "Monitor", "Deploy", "Automate", "Integrate",
    "Analyze", "Protect", "Adapt", "Evolve",
];

export default function Services() {
    const [active, setActive] = useState(0);

    return (
        <section
            id="services"
            className="relative bg-(--bg-card)"
            style={{ paddingTop: "72px", paddingBottom: "0", paddingLeft: "30px", paddingRight: "30px" }}
        >
            {/* ── "Our Services" — giant muted title ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2
                    style={{
                        fontSize: "clamp(4rem, 10vw, 10rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.05em",
                        color: "var(--text-muted)",
                        lineHeight: 1.0,
                        marginLeft: "-4px",
                        marginTop: "300px",
                    }}
                >
                    Our Services
                </h2>
            </motion.div>

            {/* ── 3-column info row ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr auto",
                    alignItems: "start",
                    gap: "40px",
                    marginTop: "64px",
                    paddingBottom: "80px",
                }}
            >
                {/* Left: 002 / plat—form badge */}
                <div
                    style={{
                        borderLeft: "2px solid var(--orange)",
                        paddingLeft: "14px",
                        paddingTop: "2px",
                    }}
                >
                    <p style={{ color: "var(--text)", fontSize: "13px", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.5 }}>
                        002
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "13px", letterSpacing: "0.02em", lineHeight: 1.5 }}>
                        plat—form
                    </p>
                </div>

                {/* Center: statement */}
                <p
                    style={{
                        fontSize: "clamp(1.6rem, 3.2vw, 3.2rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.03em",
                        color: "var(--text)",
                        lineHeight: 1.15,
                        maxWidth: "780px",
                    }}
                >
                    Flexible solutions for building modern digital infrastructure.
                </p>

                {/* Right: small description */}
                <p
                    style={{
                        color: "var(--text-muted)",
                        fontSize: "13px",
                        lineHeight: 1.65,
                        maxWidth: "180px",
                        textAlign: "right",
                        flexShrink: 0,
                    }}
                >
                    Future-proof systems that scale seamlessly.
                </p>
            </motion.div>

            {/* ── Horizontal accordion + summary panel ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                    display: "flex",
                    gap: "1px",
                    background: "var(--border)",
                    minHeight: "560px",
                    marginLeft: "-30px",
                    marginRight: "-30px",
                }}
            >
                {/* 4 accordion columns */}
                {services.map((s, i) => {
                    const isActive = active === i;
                    return (
                        <motion.div
                            key={s.num}
                            layout
                            animate={{ flex: isActive ? 4 : 1 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="relative overflow-hidden cursor-pointer"
                            style={{
                                background: isActive ? "var(--orange)" : "var(--bg-card)",
                                minWidth: 0,
                            }}
                            onClick={() => setActive(i)}
                        >
                            {/* Collapsed: number + arrow */}
                            <AnimatePresence>
                                {!isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 flex flex-col items-center justify-start pt-8 px-4"
                                    >
                                        <ArrowDown size={16} style={{ color: "var(--text-muted)", marginBottom: "10px" }} />
                                        <span style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                                            {s.num}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Expanded */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        className="absolute inset-0 flex flex-col p-8"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <ArrowUpRight size={20} color="white" />
                                                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
                                                    {s.num}
                                                </span>
                                            </div>
                                        </div>

                                        <div style={{ height: "1px", background: "rgba(255,255,255,0.25)", marginBottom: "20px" }} />

                                        <h3 style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: 700, color: "white", letterSpacing: "-0.02em", marginBottom: "12px" }}>
                                            {s.name}
                                        </h3>
                                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
                                            {s.desc}
                                        </p>

                                        <div className="mt-auto relative overflow-hidden" style={{ height: "240px", borderRadius: "2px", marginTop: "24px" }}>
                                            <img
                                                src={s.img}
                                                alt={s.name}
                                                className="w-full h-full object-cover"
                                                style={{ filter: "grayscale(20%)", transform: "scale(1.05)" }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}

                {/* Summary panel — right side */}
                <div
                    className="flex-none flex flex-col justify-between"
                    style={{ background: "var(--bg-card)", width: "288px", padding: "32px" }}
                >
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                            <span style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                Core Services
                            </span>
                            <span style={{ color: "var(--text-muted)", fontSize: "11px", fontFamily: "monospace" }}>
                                4/4
                            </span>
                        </div>

                        <div style={{ height: "1px", background: "var(--border)", marginBottom: "28px", position: "relative" }}>
                            <motion.div
                                animate={{ width: `${((active + 1) / 4) * 100}%` }}
                                transition={{ duration: 0.4 }}
                                style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "var(--orange)" }}
                            />
                        </div>

                        <h3 style={{ fontSize: "clamp(1.3rem, 2vw, 1.75rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.15, marginBottom: "16px" }}>
                            Modular, flexible solutions for modern digital infrastructure
                        </h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7, marginBottom: "24px" }}>
                            We create future-proof systems that scale seamlessly and adapt to your business needs. Platform&apos;s key capabilities include:
                        </p>

                        <div className="grid grid-cols-4 gap-x-3 gap-y-3" style={{ marginBottom: "24px" }}>
                            {capabilities.map((cap, i) => (
                                <div key={cap} className="flex flex-col items-center gap-1">
                                    <motion.div
                                        animate={{ background: i % 5 === 1 || i % 7 === 0 ? "var(--orange)" : "var(--text-dim)" }}
                                        style={{ width: "6px", height: "6px", borderRadius: "50%" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <a href="#contact" className="btn-ghost text-sm flex items-center gap-2 self-start">
                        Explore Services
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}