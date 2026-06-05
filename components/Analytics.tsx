"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
    BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip,
    LineChart, Line, CartesianGrid,
} from "recharts";

// ------ Data --------------------------------------------------------------------------------------------------------------------------------------
const uptimeBars = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: 85 + Math.random() * 15,
}));

const perfData = [
    { q: "Q1", v: 15 }, { q: "", v: 40 }, { q: "Q2", v: 30 },
    { q: "", v: 55 }, { q: "Q3", v: 45 }, { q: "", v: 70 },
    { q: "Q4", v: 60 }, { q: "", v: 80 }, { q: "", v: 65 },
    { q: "", v: 90 }, { q: "", v: 75 },
];

const evolutionData = [
    { label: "Integration", value: 38 },
    { label: "Efficiency", value: 79 },
    { label: "Security", value: 92 },
    { label: "Scaling", value: 84 },
    { label: "Uptime", value: 98 },
];

const newsTicker = [
    "500K+ Deployments", "1B+ API Calls", "1.2B+ Daily Requests",
    "Featured in TechCrunch", "AWS Partnership Announced",
    "200+ Enterprise Clients", "47% Cost Reduction for Clients",
    "3ms Average Response Time",
];

// ------ Clock Gauge Component ------------------------------------------------------------------------------------------------------
function ClockGauge({ status, color }: { status: string; color: string }) {
    const r = 22;
    const cx = 28, cy = 28;
    const angle = status === "Scaling" ? 60 : status === "Enhanced" ? 150 : 120;
    const rad = (angle - 90) * (Math.PI / 180);
    const x2 = cx + r * 0.72 * Math.cos(rad);
    const y2 = cy + r * 0.72 * Math.sin(rad);
    const shortRad = (angle - 90 - 30) * (Math.PI / 180);
    const sx2 = cx + r * 0.48 * Math.cos(shortRad);
    const sy2 = cy + r * 0.48 * Math.sin(shortRad);

    return (
        <svg width="56" height="56" viewBox="0 0 56 56">
            {/* Outer ring */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            {/* Tick marks */}
            {Array.from({ length: 12 }).map((_, i) => {
                const a = (i * 30 - 90) * (Math.PI / 180);
                const x1 = cx + (r - 2) * Math.cos(a);
                const y1 = cy + (r - 2) * Math.sin(a);
                const x2 = cx + r * Math.cos(a);
                const y2 = cy + r * Math.sin(a);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
            })}
            {/* Minute hand */}
            <line x1={cx} y1={cy} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            {/* Hour hand */}
            <line x1={cx} y1={cy} x2={sx2} y2={sy2} stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            {/* Center dot */}
            <circle cx={cx} cy={cy} r="2" fill={color} />
            {/* Dot indicators */}
            {[0, 1, 2, 3].map((i) => (
                <circle
                    key={i}
                    cx={cx - 6 + i * 4}
                    cy={cy + r + 6}
                    r="1.5"
                    fill={i === 0 ? color : "rgba(255,255,255,0.12)"}
                />
            ))}
        </svg>
    );
}

// ------ Donut Chart --------------------------------------------------------------------------------------------------------------------------
function DonutChart() {
    const segments = [
        { pct: 66, color: "#E84D2B" },
        { pct: 25, color: "#444" },
        { pct: 9, color: "#222" },
    ];
    const r = 38, cx = 50, cy = 50, sw = 14;
    const circ = 2 * Math.PI * r;
    let offset = -Math.PI / 2;

    return (
        <svg width="100" height="100" viewBox="0 0 100 100">
            {segments.map((seg, i) => {
                const dash = (seg.pct / 100) * circ;
                const gap = circ - dash;
                const startDeg = (offset * 180) / Math.PI;
                const el = (
                    <circle
                        key={i}
                        cx={cx} cy={cy} r={r}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth={sw}
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={0}
                        transform={`rotate(${startDeg} ${cx} ${cy})`}
                    />
                );
                offset += (seg.pct / 100) * 2 * Math.PI;
                return el;
            })}
            {/* Inner dark */}
            <circle cx={cx} cy={cy} r={r - sw / 2} fill="#111" />
        </svg>
    );
}

// ------ Animated Counter ------------------------------------------------------------------------------------------------------------------
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !started.current) {
                started.current = true;
                let t = 0;
                const step = to / 60;
                const id = setInterval(() => {
                    t += step;
                    if (t >= to) { setVal(to); clearInterval(id); }
                    else setVal(parseFloat(t.toFixed(1)));
                }, 16);
            }
        });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [to]);
    return <span ref={ref}>{val.toFixed(1)}{suffix}</span>;
}

// ------ CARD wrapper --------------------------------------------------------------------------------------------------------------------------
const CARD = ({ children, style = {}, className = "" }: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}) => (
    <div
        className={className}
        style={{
            background: "#111",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "10px",
            overflow: "hidden",
            ...style,
        }}
    >
        {children}
    </div>
);

// ------ Main Component ----------------------------------------------------------------------------------------------------------------------
export default function Analytics() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [tickerIdx, setTickerIdx] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setTickerIdx(i => (i + 1) % newsTicker.length), 2200);
        return () => clearInterval(id);
    }, []);

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 24 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
    });

    return (
        <section
            id="analytics"
            ref={ref}
            className="relative w-full pt-28 pb-24 px-6 md:px-12 lg:px-16"
            style={{ background: "var(--bg)" }}
        >
            {/* ---- Section Header ---- */}
            <motion.div
                {...fadeUp(0)}
                className="mb-14"
                transition={{ duration: 0.65, delay: 0, ease: "easeInOut" }}>
                {/* Big title */}
                <h2
                style={{
                    fontSize: "clamp(2.5rem, 7vw, 6rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "var(--text)",
                    lineHeight: 1,
                    marginBottom: "40px",
                }}
            >
                Smart Analytics
            </h2>

            {/* 3-col meta row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t pt-8" style={{ borderColor: "var(--border)" }}>
                {/* Badge */}
                <div className="md:col-span-2 border-l-2 pl-4" style={{ borderColor: "var(--orange)" }}>
                    <p style={{ color: "var(--text)", fontSize: "15px", fontWeight: 400 }}>004</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "4px" }}>plat—form</p>
                </div>
                {/* Statement */}
                <div className="md:col-span-7">
                    <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.3 }}>
                        Monitor and performance<br className="hidden md:block" />
                        with actionable data insights.
                    </p>
                </div>
                {/* Caption */}
                <div className="md:col-span-3 flex md:justify-end">
                    <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6, maxWidth: "200px" }} className="md:text-right">
                        Real-time metrics that help you make better decisions, faster.
                    </p>
                </div>
            </div>
        </motion.div>

            {/* ══════════════════════════════════════════════
                DASHBOARD GRID — exactly mirrors the image
            ══════════════════════════════════════════════ */}
    <motion.div {...fadeUp(0.15)}>

        {/* ---- TOP ROW: 4 columns ---- */}
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "minmax(180px,1.1fr) minmax(160px,1fr) minmax(220px,1.4fr) minmax(120px,0.7fr)",
                gap: "6px",
                marginBottom: "6px",
            }}
        >
            {/* ① AI Powered card */}
            <CARD style={{ position: "relative", minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                {/* Glowing product image placeholder */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(160deg, #1a0800 0%, #0a0a0a 60%)",
                }} />
                {/* Abstract glowing cube */}
                <div style={{
                    position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)",
                    width: "90px", height: "110px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    <div style={{
                        width: "70px", height: "70px",
                        background: "linear-gradient(135deg, #2a1200, #6b2a0a)",
                        borderRadius: "12px",
                        boxShadow: "0 0 40px rgba(232,77,43,0.5), 0 0 80px rgba(232,77,43,0.2)",
                        position: "relative",
                        transform: "rotate(8deg)",
                    }}>
                        <div style={{
                            position: "absolute", inset: "8px",
                            background: "radial-gradient(circle at 40% 35%, rgba(255,140,80,0.6), transparent 60%)",
                            borderRadius: "6px",
                        }} />
                        {/* Vent lines */}
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} style={{
                                position: "absolute", left: "12px", right: "12px",
                                top: `${20 + i * 10}px`, height: "1px",
                                background: "rgba(255,255,255,0.1)",
                            }} />
                        ))}
                    </div>
                </div>
                {/* Bottom label */}
                <div style={{ position: "relative", zIndex: 2, padding: "14px 16px", background: "linear-gradient(0deg, #111 0%, transparent 100%)" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        background: "rgba(232,77,43,0.15)",
                        border: "1px solid rgba(232,77,43,0.3)",
                        borderRadius: "100px", padding: "4px 10px", marginBottom: "8px",
                    }}>
                        <span style={{ fontSize: "9px", background: "#E84D2B", borderRadius: "3px", padding: "1px 5px", color: "#fff", fontWeight: 700, letterSpacing: "0.06em" }}>AI</span>
                        <span style={{ fontSize: "11px", color: "#e8e4dc", fontWeight: 600 }}>Powered Analytics</span>
                    </div>
                    <div style={{ color: "#E84D2B", fontSize: "13px", fontWeight: 700, letterSpacing: "-0.01em" }}>plat—form</div>
                </div>
            </CARD>

            {/* ② System Health donut */}
            <CARD style={{ padding: "18px" }}>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text)", marginBottom: "2px" }}>System Health</p>
                <p style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "16px" }}>Real-time platform vitals</p>
                {/* Donut */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
                    <DonutChart />
                </div>
                {/* Legend */}
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    {[
                        { pct: "66%", label: "Optimal", color: "#E84D2B" },
                        { pct: "25%", label: "Stable", color: "#444" },
                        { pct: "9%", label: "Issues", color: "#222" },
                    ].map(({ pct, label, color }) => (
                        <div key={label} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text)" }}>{pct}</div>
                            <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "2px" }}>{label}</div>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, margin: "4px auto 0" }} />
                        </div>
                    ))}
                </div>
            </CARD>

            {/* ③ Clock gauges — Amsterdam / New York / Dubai */}
            <CARD style={{ padding: "18px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                    {[
                        { city: "Amsterdam", tz: "UTC +1", status: "Enhanced", ms: "24ms → 11ms", color: "#E84D2B" },
                        { city: "New York", tz: "UTC -4", status: "Optimized", ms: "37ms → 19ms", color: "#E84D2B" },
                        { city: "Dubai", tz: "UTC +6", status: "Scaling", ms: "Adjusting", color: "#f59e0b" },
                    ].map(({ city, tz, status, ms, color }) => (
                        <div key={city} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--text)", marginBottom: "2px" }}>{city}</div>
                            <div style={{ fontSize: "9px", color: "var(--text-muted)", marginBottom: "8px" }}>{tz}</div>
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>
                                <ClockGauge status={status} color={color} />
                            </div>
                            <div style={{ fontSize: "10px", fontWeight: 600, color, marginBottom: "2px" }}>{status}</div>
                            <div style={{ fontSize: "9px", color: "var(--text-muted)" }}>{ms}</div>
                        </div>
                    ))}
                </div>
                {/* Response Time Optimization badge */}
                <div style={{
                    marginTop: "12px",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    display: "inline-block",
                    marginLeft: "50%", transform: "translateX(-50%)",
                }}>
                    <span style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>Response Time Optimization</span>
                </div>
            </CARD>

            {/* ④ Global System Status label */}
            <CARD style={{ padding: "18px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "12px", letterSpacing: "0.04em" }}>Global System Status</p>
                    {/* Status dots */}
                    {[
                        { label: "30-day monitoring", dot: "#E84D2B" },
                        { label: "AI optimized", dot: "#E84D2B" },
                        { label: "Auto-scaling", dot: "#444" },
                    ].map(({ label, dot }) => (
                        <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: dot, flexShrink: 0 }} />
                            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>{label}</span>
                        </div>
                    ))}
                </div>
            </CARD>
        </div>

        {/* ---- BOTTOM ROW: 4 columns ---- */}
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "minmax(120px,0.9fr) minmax(180px,1.3fr) minmax(180px,1.4fr) minmax(120px,0.8fr)",
                gap: "6px",
            }}
        >
            {/* ⑤ Uptime stat + bar chart */}
            <CARD style={{ padding: "18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {/* 30-day bar chart */}
                <div>
                    <p style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "10px" }}>30-day monitoring</p>
                    <div style={{ height: "54px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={uptimeBars} barCategoryGap="10%" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <Bar dataKey="value" fill="#E84D2B" radius={[1, 1, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {/* Big number */}
                <div style={{ marginTop: "12px" }}>
                    <div style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#E84D2B", letterSpacing: "-0.04em", lineHeight: 1 }}>
                        <Counter to={97.8} /><span style={{ fontSize: "0.45em" }}>%</span>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text)", marginTop: "4px" }}>Uptime</div>
                </div>
            </CARD>

            {/* ⑥ Performance line chart */}
            <CARD style={{ padding: "18px" }}>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text)", marginBottom: "2px" }}>Performance</p>
                <p style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "14px" }}>Current performance metrics</p>
                {/* Line chart */}
                <div style={{ height: "90px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={perfData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="2 4" vertical={false} stroke="rgba(255,255,255,0.04)" />
                            <XAxis dataKey="q" axisLine={false} tickLine={false} tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9 }} domain={[0, 100]} />
                            <Tooltip
                                contentStyle={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", fontSize: "11px" }}
                                labelStyle={{ color: "var(--text-muted)" }}
                                itemStyle={{ color: "#E84D2B" }}
                            />
                            <Line type="monotone" dataKey="v" stroke="#E84D2B" strokeWidth={1.5} dot={false} />
                            {/* Secondary white line (slightly offset) */}
                            <Line type="monotone" dataKey="v" stroke="rgba(255,255,255,0.25)" strokeWidth={1} dot={false} strokeDasharray="3 3" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                {/* Q2 53% label */}
                <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
                    <div>
                        <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--text)" }}>97%</span>
                        <span style={{ fontSize: "10px", color: "var(--text-muted)", marginLeft: "4px" }}>Optimized</span>
                    </div>
                    <div>
                        <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-muted)" }}>51%</span>
                        <span style={{ fontSize: "10px", color: "var(--text-muted)", marginLeft: "4px" }}>Standard</span>
                    </div>
                </div>
                {/* Dot indicators */}
                <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
                    {[1, 0, 0, 0, 0].map((a, i) => (
                        <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: a ? "#E84D2B" : "rgba(255,255,255,0.1)" }} />
                    ))}
                </div>
            </CARD>

            {/* ⑦ System Evolution — grouped bar chart */}
            <CARD style={{ padding: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                    <div>
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text)" }}>System Evolution</p>
                        <p style={{ fontSize: "10px", color: "var(--text-muted)" }}>The pulse of progress</p>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>Evolution Score</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                            <span style={{ fontSize: "22px", fontWeight: 700, color: "#E84D2B" }}>86</span>
                            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>/100</span>
                        </div>
                    </div>
                </div>
                {/* Bar chart */}
                <div style={{ height: "110px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={evolutionData} barCategoryGap="18%" margin={{ top: 4, right: 0, left: -28, bottom: 16 }}>
                            <XAxis
                                dataKey="label"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 8 }}
                                interval={0}
                            />
                            <YAxis hide domain={[0, 100]} />
                            <Tooltip
                                contentStyle={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", fontSize: "11px" }}
                                labelStyle={{ color: "var(--text-muted)" }}
                                formatter={(value) => [`${Number(value) || 0}%`, ""]}
                            />
                            <Bar dataKey="value" fill="#E84D2B" radius={[2, 2, 0, 0]}
                                label={{ position: "insideTop", fill: "#fff", fontSize: 8, dy: 4, formatter: (v) => `${v}%` }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CARD>

            {/* ⑧ Gemini / Capacity card */}
            <CARD style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Top: AI model badge */}
                <div style={{ background: "#1a1a1a", borderRadius: "8px", padding: "10px 12px" }}>
                    <p style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "2px" }}>Gemini 2.5 Pro</p>
                    {/* Battery-style bar */}
                    <div style={{ position: "relative", height: "24px", background: "#222", borderRadius: "4px", overflow: "hidden", marginTop: "6px" }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: "99.6%" } : {}}
                            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: "100%", background: "#E84D2B", borderRadius: "4px" }}
                        />
                    </div>
                </div>

                {/* Big percentage */}
                <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.04em" }}>99.6%</div>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>Core Capacity</div>
                </div>

                {/* Integration Partners */}
                <div>
                    <p style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "8px" }}>Integration Partners</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {["▲", "◆", "⬡", "◉", "✦", "⊕"].map((icon, i) => (
                            <div key={i} style={{
                                width: "26px", height: "26px",
                                background: "#1e1e1e",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "6px",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "10px", color: "rgba(255,255,255,0.4)",
                            }}>
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </CARD>
        </div>

        {/* ---- TICKER ROW ---- */}
        <div
            style={{
                marginTop: "6px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "0",
                overflow: "hidden",
            }}
        >
            <span style={{ fontSize: "10px", color: "var(--text-muted)", marginRight: "24px", whiteSpace: "nowrap", flexShrink: 0 }}>
                News &amp; Achievements
            </span>
            <div style={{ overflow: "hidden", flex: 1 }}>
                <div style={{ display: "flex", gap: "48px", whiteSpace: "nowrap" }}>
                    {newsTicker.map((item, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: "11px",
                                color: i === tickerIdx ? "var(--text)" : "var(--text-muted)",
                                transition: "color 0.4s ease",
                                fontWeight: i === tickerIdx ? 600 : 400,
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", marginLeft: "24px", flexShrink: 0 }}>↗</span>
        </div>

    </motion.div>
        </section >
    );
}