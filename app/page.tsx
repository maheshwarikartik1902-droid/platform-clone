import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Statement from "@/components/Statements";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Analytics from "@/components/Analytics";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/Faq";

export default function Home() {
    return (
        <>
            {/* Global overlays */}
            <Starfield />

            {/* Navigation */}
            <Navbar />

            {/* Page content — sits above starfield */}
            <main className="relative" style={{ zIndex: 1 }}>
                <Hero />
                <div className="glow-line" />
                <Statement />
                <Work />
                <Services />
                <Process />
                <Analytics />
                <Pricing />
                <FAQ />

                {/*
                    ---- Remaining sections ----
                    <Team />
                    <Testimonials />
                    <Contact />
                    <Footer />
                */}
            </main>
        </>
    );
}