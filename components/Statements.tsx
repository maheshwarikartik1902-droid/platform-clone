"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AnimatedLine({
    text,
    scrollYProgress,
    offset = 0,
    dim = "#3a3a3a",
    bright = "#f0ede8",
    className = "",
}: {
    text: string;
    scrollYProgress: any;
    offset?: number;
    dim?: string;
    bright?: string;
    className?: string;
}) {
    const chars = useMemo(() => Array.from(text), [text]);

    return (
        <span className={`block ${className}`}>
            {chars.map((char, index) => {
                const start = Math.max(0, offset + index * 0.018);
                const end = Math.min(1, start + 0.18);
                const color = useTransform(scrollYProgress, [start, end], [dim, bright]);
                
                return (
                    <motion.span
                        key={`${char}-${index}`}
                        style={{ color }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                );
            })}
        </span>
    );
}

export default function Statement() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });



    const cubes = [
        { size: 76, top: "18%", right: "28%", delay: 0 },
        { size: 132, top: "9%", right: "13%", delay: 0.2 },
        { size: 96, top: "38%", right: "6%", delay: 0.4 },
    ];

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-(--bg) py-24 pl-6 pr-6 sm:py-28 sm:pl-8 sm:pr-8 lg:py-32 lg:pl-12 lg:pr-10 items-center justify-center flex"
        >
            {cubes.map((c, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.75, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: c.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={{
                        width: c.size,
                        height: c.size,
                        top: c.top,
                        right: c.right,
                        background: "radial-gradient(ellipse at 40% 30%, #e84d2b, #8b2a14)",
                        borderRadius: "18%",
                        transform: `rotate(${i * 15}deg)`,
                        filter: "blur(0.5px)",
                        boxShadow: "0 20px 60px rgba(232,77,43,0.3)",
                    }}
                />
            ))}

            <div className="overflow-hidden px-1 sm:px-3 lg:px-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.98] tracking-tighter"
                >
                    <AnimatedLine text="We run your" scrollYProgress={scrollYProgress} offset={0.02} />
                </motion.div>

                <motion.div
                    
                    className="font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.98] tracking-tighter"
                >
                    <AnimatedLine text="infrastructure so you" scrollYProgress={scrollYProgress} offset={0.12} />
                </motion.div>

                <motion.div
                    className="font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.98] tracking-tighter"
                >
                    <AnimatedLine text="can focus on building" scrollYProgress={scrollYProgress} offset={0.22} />
                </motion.div>

                <motion.div
                    className="font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[1.02] tracking-tighter"
                >
                    <AnimatedLine text="great products." scrollYProgress={scrollYProgress} offset={0.32} dim="#3a3a3a" bright="#f0ede8" />
                </motion.div>
            </div>
        </section>
    );
}
