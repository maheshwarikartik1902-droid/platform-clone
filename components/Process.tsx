"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";

const steps = [
    {
        num: "01",
        label: "Step 1 — Smart Connect",
        desc: "Platform's AI analyzes your tech stack and swiftly configures your ideal environment. One connection is all it takes to set everything up following industry best practices.",
    },
    {
        num: "02",
        label: "Step 2 — Neural Deploy",
        desc: "Automated deployment pipeline that learns your codebase patterns and pushes updates with zero-downtime rollouts. Your infrastructure stays live while evolving continuously.",
    },
    {
        num: "03",
        label: "Step 3 — Smart Scale",
        desc: "Predictive autoscaling engine monitors real-time traffic patterns and pre-allocates resources before demand spikes hit. No cold starts, no throttling.",
    },
    {
        num: "04",
        label: "Step 4 — Auto Guard",
        desc: "Platform's adaptive security layer kicks in to protect your system 24/7. It learns and evolves with new threats, providing advanced threat prevention — all without manual intervention.",
    },
];

export default function Process() {
    const [active, setActive] = useState(0);

    const nextStep = () => setActive((prev) => (prev + 1) % steps.length);
    const prevStep = () => setActive((prev) => (prev === 0 ? steps.length - 1 : prev - 1));

    return (
        <section
            id="process"
            className="relative w-full pt-32 pb-24 px-6 md:px-12 lg:px-16"
            style={{ background: "var(--bg-secondary)" }}
        >
            {/* ── Header Section ── */}
            <div className="max-w-360 mx-auto mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{
                        fontSize: "clamp(4rem, 11vw, 11rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.04em",
                        color: "var(--text-dim)",
                        lineHeight: 1.0,
                        marginLeft: "-4px",
                        marginBottom: "48px",
                        paddingTop: "200px"
                    }}
                >
                    Our Process
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                >
                    {/* Left: 003 Badge */}
                    <div className="md:col-span-2 border-l-2 pl-4" style={{ borderColor: "var(--orange)" }}>
                        <p style={{ color: "var(--text)", fontSize: "18px", fontWeight: 400, lineHeight: 1.2 }}>
                            003
                        </p>
                        <p style={{ color: "var(--text-muted)", fontSize: "13px", marginTop: "4px" }}>
                            plat—form
                        </p>
                    </div>

                    {/* Center: Statement */}
                    <div className="md:col-span-7">
                        <h3
                            style={{
                                fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
                                fontWeight: 500,
                                letterSpacing: "-0.03em",
                                color: "var(--text)",
                                lineHeight: 1.15,
                            }}
                        >
                            Optimized processes <br className="hidden md:block" />
                            through simplified workflows.
                        </h3>
                    </div>

                    {/* Right: Description */}
                    <div className="md:col-span-3 flex md:justify-end">
                        <p
                            style={{
                                color: "var(--text-muted)",
                                fontSize: "14px",
                                lineHeight: 1.6,
                                maxWidth: "200px",
                                textAlign: "left",
                            }}
                            className="md:text-right"
                        >
                            Seamless operations and processes from start to finish.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* ── Main Interactive Carousel ── */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-[1440px] mx-auto border rounded-xl overflow-hidden shadow-2xl" 
                style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]" style={{ minHeight: "560px" }}>
                    
                    {/* Left Panel: Visual/Image Representation */}
                    <div className="relative w-full h-[350px] lg:h-full border-b lg:border-b-0 lg:border-r overflow-hidden" style={{ borderColor: "var(--border)", background: "#0a0a0a" }}>
                        {/* CSS stylized placeholder mimicking the premium 3D Cube aesthetic */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                {/* Floor & Base Glow */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-orange-500 blur-[32px] opacity-40 z-0" />
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-orange-400 blur-[6px] opacity-80 z-0" />
                                
                                {/* The Cube Model */}
                                <motion.div 
                                    key={active}
                                    initial={{ scale: 0.95, opacity: 0.5 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl relative z-10 border"
                                    style={{
                                        borderColor: "rgba(255,255,255,0.1)",
                                        background: "linear-gradient(135deg, #404040 0%, #171717 100%)",
                                        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.8)"
                                    }}
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
                                </motion.div>
                                
                                {/* Ambient Floor Lines */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#E84D2B]/50 to-transparent" />
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#E84D2B]/30 to-transparent" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
                    </div>

                    {/* Right Panel: Content Grid */}
                    <div className="flex flex-col h-full">
                        
                        {/* Top Controls Row */}
                        <div className="grid grid-cols-[1fr_240px] border-b" style={{ borderColor: "var(--border)", height: "96px" }}>
                            {/* Process Label & Indicators */}
                            <div className="px-8 md:px-12 flex items-center justify-between border-r" style={{ borderColor: "var(--border)" }}>
                                <span style={{ color: "var(--text-muted)", fontSize: "17px" }}>Platform Process</span>
                                <div className="flex items-center gap-2.5">
                                    {steps.map((_, idx) => (
                                        <div 
                                            key={idx}
                                            className={`h-2 rounded-full transition-all duration-500 ${active === idx ? "w-8 bg-[#E84D2B]" : "w-2 bg-[#3A3A3A]"}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Arrow Controls */}
                            <div className="flex items-center justify-center gap-8">
                                <button onClick={prevStep} className="text-[#E84D2B] hover:opacity-60 transition-opacity p-2">
                                    <ArrowLeft size={24} strokeWidth={1.5} />
                                </button>
                                <button onClick={nextStep} className="text-[#E84D2B] hover:opacity-60 transition-opacity p-2">
                                    <ArrowRight size={24} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>

                        {/* Bottom Content Row */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_240px]">
                            
                            {/* Step Text Details */}
                            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r flex flex-col justify-center min-h-[300px]" style={{ borderColor: "var(--border)" }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={active}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <h4 className="text-3xl md:text-[2.1rem] font-medium tracking-tight mb-6" style={{ color: "var(--text)" }}>
                                            {steps[active].label}
                                        </h4>
                                        <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.65, maxWidth: "440px" }}>
                                            {steps[active].desc}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Call to Action Actions */}
                            <div className="p-8 flex flex-col items-center relative min-h-[200px]">
                                <div className="flex-1 flex flex-col items-center justify-center w-full space-y-5 mt-4">
                                    <a 
                                        href="#contact" 
                                        className="w-full justify-center py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:opacity-90 shadow-md bg-[#E84D2B] text-white flex items-center gap-2"
                                    >
                                        <Calendar size={16} />
                                        Book a Demo
                                    </a>
                                    <p style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: 1.5, textAlign: "center", maxWidth: "150px" }}>
                                        Book a demo to see this process in action.
                                    </p>
                                </div>
                                
                                <div className="absolute bottom-8 right-8 w-full">
                                    <a href="#" className="flex items-center justify-end gap-2 text-[12px] font-medium tracking-wide text-[var(--text)] hover:text-[#E84D2B] transition-colors">
                                        Buy Template
                                        <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}