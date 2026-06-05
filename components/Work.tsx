"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Real Framer CDN images from the original site
const featuredProduct = {
    name: "Neural Core",
    tag: "Featured Product",
    desc: "Transform how your infrastructure thinks and evolves. Neural Core combines AI-driven automation with intelligent scaling to create a self-evolving system.",
    img: "https://framerusercontent.com/images/cjUCrOUpaHvRub5zRJbuwPVTmSY.jpg",
};

const lineup = [
    {
        id: 1,
        name: "Design Engine",
        img: "https://framerusercontent.com/images/VwwYkGQBZx3i8hE4V4mjLQF1m7Y.jpg",
    },
    {
        id: 2,
        name: "Scale Matrix",
        img: "https://framerusercontent.com/images/rPDTsORH2VpBiXv53M4Y8T0Fk.png",
    },
    {
        id: 3,
        name: "Neural Net",
        img: "https://framerusercontent.com/images/S9JNdCzSch4JjDamxInlr6k18jE.jpg",
    },
    {
        id: 4,
        name: "Shield Core",
        img: "https://framerusercontent.com/images/doOWlMqhqwP4x0xbsvKC46CBCo.png",
    },
    {
        id: 5,
        name: "Flux Core",
        img: "https://framerusercontent.com/images/ukKikzoLdTBSJugvA1C94bIp4.jpeg",
    },
];

function DotGrid() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {[0, 1, 2].map(row =>
                [0, 1, 2].map(col => (
                    <circle key={`${row}-${col}`} cx={3 + col * 7} cy={3 + row * 7} r="1.5" fill="rgba(255,255,255,0.3)" />
                ))
            )}
        </svg>
    );
}

export default function Work() {
    const [lineupIndex] = useState(0);
    const totalLineup = lineup.length + 1;
    const displayIndex = lineupIndex + 1;

    return (
        <section id="work" className="relative bg-(--bg-card)" style={{ paddingTop: "72px", paddingBottom: "0", paddingLeft: "30px", paddingRight: "30px" }}>

            {/* ── "Our Work" — giant muted title, top-left ── */}
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
                        marginTop: "300px",
                        marginLeft: "-4px", /* optical alignment */
                    }}
                >
                    Our Work
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
                {/* Left: 001 / plat—form badge */}
                <div
                    style={{
                        borderLeft: "2px solid var(--orange)",
                        paddingLeft: "14px",
                        paddingTop: "2px",
                    }}
                >
                    <p style={{ color: "var(--text)", fontSize: "13px", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.5 }}>
                        001
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "13px", letterSpacing: "0.02em", lineHeight: 1.5 }}>
                        plat—form
                    </p>
                </div>

                {/* Center: Statement text */}
                <p
                    style={{
                        fontSize: "clamp(1.6rem, 3.2vw, 3.2rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.03em",
                        color: "var(--text)",
                        lineHeight: 1.15,
                        maxWidth: "780px",
                    }}
                >
                    Designed with purpose, automated for speed and built to help you move faster, with less friction.
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
                    Every solution is designed to solve real problems, delivering practical value over mere aesthetics.
                </p>
            </motion.div>

            {/* ── Featured Product + Product Lineup panel ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1px",
                    background: "var(--border)",
                    marginLeft: "-30px",
                    marginRight: "-30px",
                }}
            >
                {/* Featured product — large photo card */}
                <div
                    className="relative flex-1 overflow-hidden"
                    style={{ minHeight: "520px", background: "#1a1a1a" }}
                >
                    <img
                        src={featuredProduct.img}
                        alt="Neural Core"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: 0.85 }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />

                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            {featuredProduct.tag}
                        </span>
                        <DotGrid />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                        <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "white", marginBottom: "10px" }}>
                            {featuredProduct.name}
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.7, maxWidth: "420px" }}>
                            {featuredProduct.desc}
                        </p>
                    </div>
                </div>

                {/* Product Lineup — orange panel */}
                <div
                    className="flex-none dot-grid"
                    style={{ background: "var(--orange)", width: "320px", minHeight: "420px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                Product Lineup
                            </p>
                            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", fontFamily: "monospace" }}>
                                {displayIndex}/{totalLineup}
                            </span>
                        </div>
                        <div style={{ height: "1px", background: "rgba(255,255,255,0.2)", marginBottom: "28px", position: "relative" }}>
                            <motion.div
                                animate={{ width: `${(displayIndex / totalLineup) * 100}%` }}
                                transition={{ duration: 0.4 }}
                                style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "white" }}
                            />
                        </div>

                        <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "white", lineHeight: 1.1, marginBottom: "16px" }}>
                            Platform Suite Neural-Powered Infrastructure
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", lineHeight: 1.6 }}>
                            A complete system of smart products that transform how infrastructure thinks, learns, and evolves.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        style={{ background: "rgba(0,0,0,0.2)", color: "white", fontSize: "13px", fontWeight: 600, cursor: "none", width: "fit-content", display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 20px", marginTop: "32px" }}
                    >
                        View All Products <ArrowRight size={13} />
                    </a>
                </div>
            </motion.div>

            {/* ── Product grid ── */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1px",
                    background: "var(--border)",
                    marginLeft: "-30px",
                    marginRight: "-30px",
                    marginTop: "1px",
                }}
            >
                {lineup.slice(0, 3).map((p, i) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                        className="relative overflow-hidden group"
                        style={{ height: "320px", background: "#111" }}
                    >
                        <img
                            src={p.img}
                            alt={p.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{ opacity: 0.75 }}
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                            <span style={{ color: "white", fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em" }}>{p.name}</span>
                            <DotGrid />
                        </div>
                        <div className="absolute bottom-5 left-5 z-10">
                            <motion.div whileHover={{ scale: 1.05 }} style={{ width: "40px", height: "40px", background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <ArrowRight size={16} color="white" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}

                {/* Shield Core */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden group"
                    style={{ height: "320px", background: "#111" }}
                >
                    <img src={lineup[3].img} alt={lineup[3].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ opacity: 0.75 }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                        <span style={{ color: "white", fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em" }}>{lineup[3].name}</span>
                        <DotGrid />
                    </div>
                    <div className="absolute bottom-5 left-5 z-10">
                        <motion.div whileHover={{ scale: 1.05 }} style={{ width: "40px", height: "40px", background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <ArrowRight size={16} color="white" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Coming soon */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="relative overflow-hidden flex items-center justify-center"
                    style={{ height: "320px", background: "#0d0d0d" }}
                >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.15">
                        <rect x="8" y="8" width="20" height="20" rx="4" fill="white" />
                        <rect x="36" y="8" width="20" height="20" rx="4" fill="white" />
                        <rect x="8" y="36" width="20" height="20" rx="4" fill="white" />
                        <rect x="36" y="36" width="20" height="20" rx="4" fill="white" />
                    </svg>
                    <span style={{ position: "absolute", bottom: "20px", left: "20px", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Coming Soon
                    </span>
                </motion.div>

                {/* Neural Core 4.0b beta */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.16 }}
                    className="relative overflow-hidden flex flex-col justify-between p-8"
                    style={{ height: "320px", background: "#141414", border: "1px solid var(--border)" }}
                >
                    <div>
                        <p style={{ color: "var(--text)", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
                            Neural Core{" "}
                            <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>4.0b</span>
                        </p>
                        <p style={{ color: "var(--orange)", fontSize: "13px", marginTop: "6px" }}>
                            Early beta access now available.
                        </p>
                    </div>
                    <div>
                        <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", border: "1px solid var(--border)", padding: "3px 8px", display: "inline-block", marginBottom: "16px" }}>
                            Development Progress
                        </span>
                        <BetaCounter />
                        <div style={{ height: "2px", background: "var(--border)", marginTop: "12px" }}>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "84.7%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                style={{ height: "100%", background: "var(--orange)" }}
                            />
                        </div>
                    </div>
                    <a href="#contact" style={{ color: "var(--orange)", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        Join early beta <ArrowRight size={12} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function BetaCounter() {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = (node: HTMLDivElement | null) => {
        if (!node || started) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setStarted(true);
                let c = 0;
                const target = 84.7;
                const steps = 60;
                const inc = target / steps;
                const timer = setInterval(() => {
                    c += inc;
                    if (c >= target) { setCount(target); clearInterval(timer); }
                    else setCount(Math.round(c * 10) / 10);
                }, 1400 / steps);
            }
        }, { threshold: 0.5 });
        obs.observe(node);
    };
    return (
        <div ref={ref} style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>
            {count.toFixed(1)}<span style={{ fontSize: "0.6em", color: "var(--orange)" }}>%</span>
        </div>
    );
}