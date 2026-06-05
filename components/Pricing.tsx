"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

/* ------ Plan data -------------------------------------------------------------------------------------------------- */
const plans = [
    {
        id: "studio",
        name: "Studio",
        tier: "Basic",
        monthly: 49,
        annual: 39,
        seats: 2,
        features: [
            "Smart Deployment",
            "Basic Monitoring",
            "Core Security",
            "Email Support",
            "5 team seats",
            "Basic Analytics",
            "Standard API",
        ],
        highlight: false,
    },
    {
        id: "scale",
        name: "Scale",
        tier: "Advanced",
        monthly: 89,
        annual: 71,
        seats: 6,
        features: [
            "All Studio features",
            "AI optimization",
            "Advanced monitoring",
            "Enhanced security",
            "24/7 support",
            "Auto-scaling",
            "Full analytics",
            "Priority API",
        ],
        highlight: true,
    },
    {
        id: "supreme",
        name: "Supreme",
        tier: "Enterprise",
        monthly: 249,
        annual: 199,
        seats: 100,
        features: [
            "All Scale features",
            "Dedicated support",
            "Private hosting",
            "Custom security",
            "Training included",
            "Priority features",
            "Custom reporting",
            "Enterprise SLA",
        ],
        highlight: false,
    },
];

/* ------ Tiny 3D cube SVG illustration per plan ------------------------------------ */
function PlanIllustration({ id, highlight }: { id: string; highlight: boolean }) {
    if (id === "studio") {
        return (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                {/* Cube */}
                <path d="M40 12 L62 24 L62 52 L40 64 L18 52 L18 24 Z" fill="#1E1E1E" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <path d="M40 12 L62 24 L40 36 L18 24 Z" fill="#2A2A2A" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M40 36 L62 24 L62 52 L40 64 Z" fill="#1A1A1A" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d="M40 36 L18 24 L18 52 L40 64 Z" fill="#222222" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                {/* Orange glow at base */}
                <ellipse cx="40" cy="68" rx="22" ry="4" fill="rgba(232,77,43,0.35)" />
                <ellipse cx="40" cy="68" rx="12" ry="2" fill="rgba(232,77,43,0.5)" />
                {/* Reflection floor */}
                <path d="M40 64 L62 52 L62 56 L40 68 Z" fill="rgba(232,77,43,0.08)" />
                <path d="M40 64 L18 52 L18 56 L40 68 Z" fill="rgba(232,77,43,0.05)" />
            </svg>
        );
    }
    if (id === "scale") {
        return (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                {/* Two cubes stacked */}
                <path d="M40 8 L58 18 L58 38 L40 48 L22 38 L22 18 Z" fill="#2A1A14" stroke="rgba(232,77,43,0.25)" strokeWidth="1" />
                <path d="M40 8 L58 18 L40 28 L22 18 Z" fill="#3A2018" stroke="rgba(232,77,43,0.15)" strokeWidth="1" />
                <path d="M40 28 L58 18 L58 38 L40 48 Z" fill="#1E1208" stroke="rgba(232,77,43,0.12)" strokeWidth="1" />
                <path d="M40 28 L22 18 L22 38 L40 48 Z" fill="#241610" stroke="rgba(232,77,43,0.12)" strokeWidth="1" />
                {/* Lower cube */}
                <path d="M40 42 L62 54 L62 66 L40 72 L18 66 L18 54 Z" fill="#1E1E1E" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
                <path d="M40 42 L62 54 L40 60 L18 54 Z" fill="#2A2A2A" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <path d="M40 60 L62 54 L62 66 L40 72 Z" fill="#181818" />
                <path d="M40 60 L18 54 L18 66 L40 72 Z" fill="#202020" />
                {/* Orange glow */}
                <ellipse cx="40" cy="74" rx="24" ry="4" fill="rgba(232,77,43,0.4)" />
                <ellipse cx="40" cy="74" rx="14" ry="2" fill="rgba(232,77,43,0.55)" />
            </svg>
        );
    }
    // supreme
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Larger cube */}
            <path d="M40 8 L66 22 L66 54 L40 68 L14 54 L14 22 Z" fill="#1A1A1A" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M40 8 L66 22 L40 36 L14 22 Z" fill="#272727" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <path d="M40 36 L66 22 L66 54 L40 68 Z" fill="#141414" />
            <path d="M40 36 L14 22 L14 54 L40 68 Z" fill="#1E1E1E" />
            {/* Inner glow lines */}
            <line x1="40" y1="36" x2="40" y2="68" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="40" y1="8" x2="40" y2="36" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            {/* Orange glow base */}
            <ellipse cx="40" cy="72" rx="28" ry="5" fill="rgba(232,77,43,0.3)" />
            <ellipse cx="40" cy="72" rx="16" ry="2.5" fill="rgba(232,77,43,0.45)" />
            {/* Corner highlights */}
            <circle cx="40" cy="8" r="1.5" fill="rgba(255,255,255,0.3)" />
            <circle cx="66" cy="22" r="1" fill="rgba(255,255,255,0.15)" />
            <circle cx="14" cy="22" r="1" fill="rgba(255,255,255,0.15)" />
        </svg>
    );
}

/* ------ Inline toggle (Monthly • toggle • Yearly) per row -------------- */
function RowToggle({
    annual,
    onToggle,
    highlight,
}: {
    annual: boolean;
    onToggle: () => void;
    highlight: boolean;
}) {
    const mutedColor = highlight ? "rgba(255,255,255,0.5)" : "var(--text-muted)";
    const activeColor = highlight ? "white" : "var(--text)";
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
            <span style={{ fontSize: "11px", color: annual ? mutedColor : activeColor, transition: "color 0.3s", letterSpacing: "0.04em" }}>
                Monthly
            </span>
            <button
                onClick={onToggle}
                style={{
                    width: "32px",
                    height: "18px",
                    borderRadius: "9px",
                    background: annual ? "var(--orange)" : highlight ? "rgba(255,255,255,0.2)" : "var(--bg-secondary)",
                    border: `1px solid ${highlight ? "rgba(255,255,255,0.15)" : "var(--border)"}`,
                    position: "relative",
                    transition: "background 0.3s",
                    cursor: "none",
                    flexShrink: 0,
                }}
            >
                <motion.div
                    animate={{ x: annual ? 13 : 1 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "absolute",
                        top: "2px",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "white",
                    }}
                />
            </button>
            <span style={{ fontSize: "11px", color: annual ? activeColor : mutedColor, transition: "color 0.3s", letterSpacing: "0.04em" }}>
                Yearly
            </span>
        </div>
    );
}

/* ------ Main component -------------------------------------------------------------------------------------- */
export default function Pricing() {
    const [annual, setAnnual] = useState(false);

    /* Column widths as flex values — matches the image proportions */
    const COL = {
        name:     "0 0 200px",   // Plan name + image
        price:    "0 0 200px",   // Price + toggle
        tier:     "0 0 160px",   // Plan tier label
        features: "1 1 auto",    // Features list (fills remaining)
        cta:      "0 0 160px",   // CTA button
    };

    const borderColor = "rgba(255,255,255,0.07)";

    return (
        <section
            id="pricing"
            className="relative overflow-hidden"
            style={{
                background: "var(--bg-secondary)",
                padding: "96px 0 200px",

            }}
        >
            {/* Dot grid */}
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

            {/* ---- Header ---- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ padding: "0 64px", marginBottom: "48px", position: "relative" , paddingTop: "200px"}}
            >
                {/* Big ghost title */}
                <div
                    style={{
                        fontSize: "clamp(5rem, 14vw, 11rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.06em",
                        color: "rgba(255,255,255,0.04)",
                        lineHeight: 1,
                        userSelect: "none",
                        marginBottom: "8px",
                        
                    }}
                >
                    Our Pricing
                </div>

                {/* Section badge + heading row */}
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
                    <div>
                        <div className="section-badge" style={{ marginBottom: "20px" }}>
                            <span>005</span>
                            <span style={{ color: "var(--orange)" }}>plat—form</span>
                        </div>
                        <h2
                            style={{
                                fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.04em",
                                color: "var(--text)",
                                lineHeight: 1.1,
                            }}
                        >
                            Flexible, transparent plans.<br />
                            Built for clarity and growth.
                        </h2>
                    </div>
                    <p
                        style={{
                            color: "var(--text-muted)",
                            fontSize: "13px",
                            lineHeight: 1.7,
                            maxWidth: "240px",
                        }}
                    >
                        Scale at your own pace — choose only what you need, when you need it. Nothing extra, nothing locked in.
                    </p>
                </div>
            </motion.div>

            {/* ---- Table wrapper ---- */}
            <div style={{ padding: "0 64px", position: "relative" }}>
                {/* Outer border container */}
                <div
                    style={{
                        border: `1px solid ${borderColor}`,
                        background: "var(--bg-card)",
                    }}
                >
                    {/* ---- Column header row ---- */}
                    <div
                        style={{
                            display: "flex",
                            borderBottom: `1px solid ${borderColor}`,
                        }}
                    >
                        <div style={{ flex: COL.name, padding: "14px 28px", borderRight: `1px solid ${borderColor}` }} />
                        <div style={{ flex: COL.price, padding: "14px 28px", borderRight: `1px solid ${borderColor}` }}>
                            <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>Price</span>
                        </div>
                        <div style={{ flex: COL.tier, padding: "14px 28px", borderRight: `1px solid ${borderColor}` }}>
                            <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>Plan</span>
                        </div>
                        <div style={{ flex: COL.features, padding: "14px 28px", borderRight: `1px solid ${borderColor}` }} />
                        <div style={{ flex: COL.cta, padding: "14px 28px" }} />
                    </div>

                    {/* ---- Plan rows ---- */}
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            style={{
                                display: "flex",
                                alignItems: "stretch",
                                borderBottom: i < plans.length - 1 ? `1px solid ${borderColor}` : "none",
                                background: plan.highlight ? "rgba(232,77,43,0.03)" : "transparent",
                                position: "relative",
                            }}
                        >
                            {/* ---- Col 1: Name + illustration ---- */}
                            <div
                                style={{
                                    flex: COL.name,
                                    borderRight: `1px solid ${borderColor}`,
                                    padding: "28px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    minHeight: "160px",
                                    background: plan.highlight ? "rgba(10,10,10,0.6)" : "var(--bg-secondary)",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "Instrument Sans, sans-serif",
                                        fontSize: "22px",
                                        fontWeight: 700,
                                        letterSpacing: "-0.03em",
                                        color: "var(--text)",
                                    }}
                                >
                                    {plan.name}
                                </span>
                                <div style={{ display: "flex", justifyContent: "center", paddingTop: "16px" }}>
                                    <PlanIllustration id={plan.id} highlight={plan.highlight} />
                                </div>
                            </div>

                            {/* ---- Col 2: Price + toggle ---- */}
                            <div
                                style={{
                                    flex: COL.price,
                                    borderRight: `1px solid ${borderColor}`,
                                    padding: "28px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "10px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--text-dim)",
                                        marginBottom: "10px",
                                        display: "block",
                                    }}
                                >
                                    Price
                                </span>
                                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                                    <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}>$</span>
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={annual ? "a" : "m"}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                                                fontWeight: 700,
                                                letterSpacing: "-0.04em",
                                                color: "var(--text)",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {annual ? plan.annual : plan.monthly}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                                <RowToggle
                                    annual={annual}
                                    onToggle={() => setAnnual(a => !a)}
                                    highlight={plan.highlight}
                                />
                            </div>

                            {/* ---- Col 3: Tier name + Seats ---- */}
                            <div
                                style={{
                                    flex: COL.tier,
                                    borderRight: `1px solid ${borderColor}`,
                                    padding: "28px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div>
                                    <span
                                        style={{
                                            fontSize: "10px",
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: "var(--text-dim)",
                                            marginBottom: "14px",
                                            display: "block",
                                        }}
                                    >
                                        Plan
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "Instrument Sans, sans-serif",
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            letterSpacing: "-0.03em",
                                            color: "var(--text)",
                                        }}
                                    >
                                        {plan.tier}
                                    </span>
                                </div>
                                <div>
                                    <span
                                        style={{
                                            fontSize: "10px",
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: "var(--text-dim)",
                                            marginBottom: "6px",
                                            display: "block",
                                        }}
                                    >
                                        Seats
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "Instrument Sans, sans-serif",
                                            fontSize: "28px",
                                            fontWeight: 700,
                                            letterSpacing: "-0.04em",
                                            color: "var(--text)",
                                        }}
                                    >
                                        {plan.seats}
                                    </span>
                                </div>
                            </div>

                            {/* ---- Col 4: Features ---- */}
                            <div
                                style={{
                                    flex: COL.features,
                                    borderRight: `1px solid ${borderColor}`,
                                    padding: "28px 32px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <ul
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "6px 24px",
                                        listStyle: "none",
                                        width: "100%",
                                    }}
                                >
                                    {plan.features.map((f) => (
                                        <li
                                            key={f}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            {/* Bullet dot */}
                                            <span
                                                style={{
                                                    width: "4px",
                                                    height: "4px",
                                                    borderRadius: "50%",
                                                    background: plan.highlight ? "var(--orange)" : "var(--text-muted)",
                                                    flexShrink: 0,
                                                    opacity: plan.highlight ? 1 : 0.6,
                                                }}
                                            />
                                            <span
                                                style={{
                                                    fontSize: "12px",
                                                    color: plan.highlight ? "var(--text)" : "var(--text-muted)",
                                                    letterSpacing: "0.01em",
                                                    fontWeight: plan.highlight ? 500 : 400,
                                                }}
                                            >
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ---- Col 5: CTA ---- */}
                            <div
                                style={{
                                    flex: COL.cta,
                                    padding: "28px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <a
                                    href="#contact"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        background: "var(--orange)",
                                        color: "white",
                                        padding: "12px 22px",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        textDecoration: "none",
                                        whiteSpace: "nowrap",
                                        transition: "background 0.25s, transform 0.2s",
                                        cursor: "none",
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = "var(--orange-light)";
                                        (e.currentTarget as HTMLElement).style.transform = "translateX(2px)";
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = "var(--orange)";
                                        (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                                    }}
                                >
                                    <Check size={12} />
                                    Select Plan
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ---- Bottom note ---- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        marginTop: "1px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        padding: "20px 28px",
                        background: "var(--bg-secondary)",
                        border: `1px solid ${borderColor}`,
                    }}
                >
                    <p style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.02em" }}>
                        All plans include a 14-day free trial. No credit card required.
                    </p>
                    <AnimatePresence>
                        {annual && (
                            <motion.span
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -6 }}
                                style={{
                                    background: "var(--orange)",
                                    color: "white",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    padding: "4px 10px",
                                }}
                            >
                                Annual billing active — saving 20%
                            </motion.span>
                        )}
                    </AnimatePresence>
                    <a
                        href="#contact"
                        className="btn-ghost"
                        style={{ fontSize: "11px", padding: "10px 18px" }}
                    >
                        Compare All Features →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}