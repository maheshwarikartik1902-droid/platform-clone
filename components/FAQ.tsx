"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlignJustify } from "lucide-react";

const faqs = [
    {
        q: "What exactly is Platform?",
        a: "Platform is an intelligent, modular infrastructure system that combines AI and automation to help teams build, scale, and optimize their software. Our neural core continuously learns and adapts, making infrastructure decisions automatically on your behalf.",
    },
    {
        q: "How does Platform's AI actually work?",
        a: "Our AI engine continuously monitors your infrastructure metrics, traffic patterns, and system health. It uses a neural network trained on millions of deployment events to predict issues before they occur and automatically applies optimizations in real time.",
    },
    {
        q: "How long does implementation take?",
        a: "Most teams are fully up and running within 30 minutes. Our smart onboarding wizard connects to your existing stack, analyzes your environment, and configures everything automatically — no DevOps expertise required.",
    },
    {
        q: "What kind of support do you provide?",
        a: "All plans include access to our documentation and community forum. Pro plans get priority email support with a 4-hour response time. Enterprise customers receive a dedicated solutions engineer and 24/7 phone support.",
    },
    {
        q: "How does pricing work?",
        a: "We offer three tiers: Starter ($49/mo), Pro ($129/mo), and Enterprise ($399/mo). All plans include a 14-day free trial with no credit card required. Annual billing saves you 20% across all tiers.",
    },
    {
        q: "Is Platform secure?",
        a: "Security is built into every layer. We're SOC 2 Type II certified, all data is encrypted at rest and in transit, and our Auto Guard AI monitors for threats 24/7. Enterprise plans include custom security policies and compliance reporting.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState<number | null>(0);

    const toggle = (i: number) => setActive(active === i ? null : i);

    return (
        <section id="faq" className="relative mx-15 py-24 px-8 lg:px-16" style={{ background: "var(--bg)" }}>

            {/* ── Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2
                    style={{
                        fontSize: "clamp(2.5rem, 5vw, 5rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.04em",
                        color: "var(--text-muted)",
                        lineHeight: 1.0,
                        marginBottom: "40px",
                    }}
                >
                    Questions &amp; Answers
                </h2>

                <div className="flex items-start justify-between flex-wrap gap-8">
                    {/* Badge + statement */}
                    <div className="flex items-start gap-6">
                        {/* Section badge (vertical orange bar) */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "2px" }}>
                            <div style={{ width: "2px", height: "28px", background: "var(--orange)" }} />
                        </div>
                        <div>
                            <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2px" }}>006</p>
                            <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.12em" }}>plat—form</p>
                        </div>
                        <p
                            style={{
                                fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                                fontWeight: 600,
                                letterSpacing: "-0.03em",
                                color: "var(--text)",
                                maxWidth: "380px",
                                lineHeight: 1.25,
                                marginLeft: "16px",
                            }}
                        >
                            Simple explanations to help you get started move faster.
                        </p>
                    </div>

                    {/* Right note */}
                    <p
                        className="hidden lg:block"
                        style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6, maxWidth: "180px", textAlign: "right" }}
                    >
                        Spend less time guessing and more time building.
                    </p>
                </div>
            </motion.div>

            {/* ── Two-column body ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>

                {/* LEFT — FAQ accordion */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ background: "var(--bg)" }}
                >
                    {faqs.map((faq, i) => {
                        const isOpen = active === i;
                        return (
                            <div
                                key={i}
                                className="border-b"
                                style={{ borderColor: "var(--border)" }}
                            >
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                    style={{ cursor: "pointer", background: isOpen ? "var(--bg-card)" : "transparent" }}
                                    onClick={() => toggle(i)}
                                >
                                    <span
                                        style={{
                                            color: isOpen ? "var(--text)" : "var(--text-muted)",
                                            fontSize: "14px",
                                            fontWeight: isOpen ? 600 : 400,
                                            letterSpacing: "-0.01em",
                                            transition: "color 0.3s",
                                        }}
                                    >
                                        {faq.q}
                                    </span>

                                    {/* Icon: X when open, hamburger lines when closed */}
                                    <div
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            flexShrink: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginLeft: "16px",
                                        }}
                                    >
                                        <motion.div
                                            animate={{ rotate: isOpen ? 0 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {isOpen ? (
                                                <X size={16} style={{ color: "var(--orange)" }} />
                                            ) : (
                                                <AlignJustify size={16} style={{ color: "var(--text-muted)" }} />
                                            )}
                                        </motion.div>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                            style={{ background: "var(--bg-card)" }}
                                        >
                                            <p
                                                className="px-6 pb-6"
                                                style={{
                                                    color: "var(--text-muted)",
                                                    fontSize: "13px",
                                                    lineHeight: 1.75,
                                                    maxWidth: "480px",
                                                }}
                                            >
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </motion.div>

                {/* RIGHT — Photo + CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-px"
                    style={{ background: "var(--border)" }}
                >
                    {/* Team photo — B&W */}
                    <div
                        className="relative overflow-hidden"
                        style={{ flex: "1 1 auto", minHeight: "320px", background: "#111" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
                            alt="Team working"
                            className="w-full h-full object-cover"
                            style={{
                                filter: "grayscale(100%) contrast(1.1)",
                                opacity: 0.85,
                                minHeight: "320px",
                            }}
                        />

                        {/* Orange dot badge bottom-right — like original */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                right: "20px",
                                width: "64px",
                                height: "64px",
                                borderRadius: "50%",
                                background: "var(--orange)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M6 14h16M14 6l8 8-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* "You still have questions?" CTA block */}
                    <div
                        className="p-8 lg:p-10 flex flex-col justify-between"
                        style={{ background: "var(--bg-card)", minHeight: "180px" }}
                    >
                        <h3
                            style={{
                                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.03em",
                                color: "var(--text)",
                                lineHeight: 1.15,
                                marginBottom: "20px",
                            }}
                        >
                            You still have questions?
                        </h3>
                        <div className="flex items-center gap-4 flex-wrap">
                            <a href="#contact" className="btn-orange" style={{ cursor: "pointer" }}>
                                Contact Support
                            </a>
                            <a
                                href="#contact"
                                className="btn-ghost"
                                style={{ cursor: "pointer" }}
                            >
                                Book a Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}