"use client";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { ArrowDown, ArrowUpRight, Code2, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import BlurFadeText from "./magicui/blur-fade-text";
import BlurFade from "./magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden"
      >
        {/* Background architectural grid pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start space-y-6"
            >
              {/* Subtle editorial kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-electric-600 dark:text-electric-400">
                <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
                <span>Full-Stack Web Engineering & Product Architecture</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                Building scalable, high-performance digital products that
                matter.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                I partner with founders, venture builders, and ambitious teams
                to turn complex ideas into reliable, useful, and exceptionally
                polished web applications. Focused on engineering rigor,
                maintainability, and clear business results.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-electric-500 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
                >
                  <span>View projects</span>
                  <ArrowDown className="size-4 animate-bounce" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
                >
                  <span>Contact me</span>
                  <ArrowUpRight className="size-4 text-slate-500 dark:text-slate-400" />
                </button>
              </div>

              {/* Unboxed Metadata Strip (Zero pills) */}
              <div className="hidden pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  Current Focus
                </span>
                <span aria-hidden="true">·</span>
                <span>Production Web Applications</span>
                <span aria-hidden="true">·</span>
                <span>Design Systems & Performance</span>
                <span aria-hidden="true">·</span>
                <span className="text-electric-600 dark:text-electric-400 font-medium">
                  Available for select projects
                </span>
              </div>
            </motion.div>

            {/* Right Column: Visual Product Showcase Container with glass-panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl glass-panel shadow-2xl overflow-hidden group">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-[11px] truncate max-w-[200px]">
                    rdxbuilds.app/preview
                  </div>
                  <div className="size-3 text-electric-500">
                    <Sparkles className="size-3" />
                  </div>
                </div>

                {/* High-Resolution Showcase Image */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 select-none"
                  onContextMenu={(event) => event.preventDefault()}
                  onDragStart={(event) => event.preventDefault()}
                >
                  <Image
                    src={DATA.heroImage}
                    alt="Rdxbuilds digital product interface preview"
                    fill
                    priority
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    className="pointer-events-none object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                {/* Bottom Caption Strip */}
                <div className="hidden p-4 border-t border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">
                        Production-Grade Architecture
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                        React 19 · TypeScript · Tailwind CSS
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-electric-600 dark:text-electric-400 font-medium font-mono text-[11px]">
                      <Code2 className="size-3.5" />
                      <span>Engineered</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle decorative accent glow */}
              <div
                aria-hidden="true"
                className="absolute -top-10 -right-10 -z-10 size-60 rounded-full bg-electric-500/10 dark:bg-electric-600/15 blur-3xl pointer-events-none"
              />
            </motion.div>
          </div>

          {/* Full-width 3-pillar engineering strip with scroll animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 hidden grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
              <div className="size-10 rounded-lg bg-electric-50 dark:bg-electric-950/40 border border-electric-200 dark:border-electric-900/50 flex items-center justify-center shrink-0 text-electric-600 dark:text-electric-400">
                <Layers className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Architectural Integrity
                </h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Clean module separation, typed API contracts, and scalable
                  design patterns that endure.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
              <div className="size-10 rounded-lg bg-electric-50 dark:bg-electric-950/40 border border-electric-200 dark:border-electric-900/50 flex items-center justify-center shrink-0 text-electric-600 dark:text-electric-400">
                <Code2 className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Speed & Core Web Vitals
                </h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Zero unnecessary dependencies, lightweight bundles, and fluid
                  60fps user interactions.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
              <div className="size-10 rounded-lg bg-electric-50 dark:bg-electric-950/40 border border-electric-200 dark:border-electric-900/50 flex items-center justify-center shrink-0 text-electric-600 dark:text-electric-400">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Investor & Client Clarity
                </h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Software built with commercial viability, rapid user
                  onboarding, and measurable utility in mind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
