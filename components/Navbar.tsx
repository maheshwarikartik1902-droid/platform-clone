"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Analytics", href: "#analytics" },
    { label: "Pricing", href: "#pricing" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
                style={{
                    background: scrolled
                        ? "rgba(10, 10, 10, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
                    transition: "all 0.4s ease",
                }}
            >
                {/* Logo */}
                <a href="#top" className="flex items-center gap-1 group">
                    <span
                        style={{ color: "var(--orange)", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.02em" }}
                    >
                        plat—form
                    </span>
                    <span style={{ color: "var(--orange)", fontSize: "10px", verticalAlign: "super" }}>®</span>
                </a>

               

                {/* Hamburger */}
                <button
                    className="flex flex-col gap-1.25 p-2"
                    onClick={() => setOpen(!open)}
                    style={{ cursor: "none" }}
                >
                    <motion.span
                        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-[1.5px] bg-white origin-center"
                    />
                    <motion.span
                        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        className="block w-4 h-[1.5px] bg-white"
                    />
                    <motion.span
                        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-[1.5px] bg-white origin-center"
                    />
                </button>
            </motion.nav>

            {/* Mobile / fullscreen menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                        exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 flex flex-col justify-center px-12"
                        style={{ background: "rgba(10, 10, 10, 0.97)" }}
                    >
                        {navLinks.map((l, i) => (
                            <motion.a
                                key={l.label}
                                href={l.href}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * i, duration: 0.4 }}
                                onClick={() => setOpen(false)}
                                className="block py-4 text-5xl font-bold tracking-tight border-b"
                                style={{
                                    color: "var(--text)",
                                    borderColor: "var(--border)",
                                    letterSpacing: "-0.03em",
                                    cursor: "none",
                                }}
                                onMouseEnter={(e : React.MouseEvent<HTMLAnchorElement>) =>
                                    ((e.target as HTMLElement).style.color = "var(--orange)")
                                }
                                onMouseLeave={(e : React.MouseEvent<HTMLAnchorElement>) =>
                                    ((e.target as HTMLElement).style.color = "var(--text)")
                                }
                            >
                                {l.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}