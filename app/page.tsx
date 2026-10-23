import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import AgencyHeroSection from "@/components/hero-section/blocks/hero-01/HeroSection";
import { TheToolkit } from "@/components/TheToolkit";
import { WhatYouHandOver } from "@/components/WhatYouHandOver";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors selection:bg-electric-600 selection:text-white relative">
      {/* Top Bar Header */}
      {/* <Header /> */}

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <AgencyHeroSection />
        {/* <Hero /> */}
        <About />
        <WhatYouHandOver />
        <TheToolkit />
        <Work />
        <Projects />
        <Approach />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Animated Dock Navigation */}
      {/* <Navbar /> */}
    </div>
  );
}
