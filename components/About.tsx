// About.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import BlurFade from "./magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function About() {
  const [isPaused, setIsPaused] = useState(false);

  const principles = [
    "Type safety from database to client UI",
    "Accessible semantic markup by default",
    "Predictable release cadences & clean git history",
    "Direct, transparent founder communication",
  ];

  // Repeat for continuous seamless auto-slide loop
  const marqueeItems = [...principles, ...principles, ...principles];
  const BLUR_FADE_DELAY = 0.04;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-electric-600 dark:text-electric-400">
              <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
              <span>Engineering Discipline</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance sm:text-4xl">
              Craftsmanship, reliability, and pragmatic problem-solving.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {DATA.about.philosophy}
            </p>
          </div>

          {/* Portrait */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="hidden xl:block size-40 shrink-0 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>

        {/* 3 Pillars Grid using glass-panel with staggered entrance */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATA.about.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-6 rounded-xl glass-panel transition-all hover:border-electric-500/40 hover:shadow-lg hover:shadow-electric-500/5 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-electric-600 dark:text-electric-400">
                  0{idx + 1}
                </span>
                {idx === 0 && (
                  <Terminal className="size-4 text-slate-400 group-hover:text-electric-500 transition-colors" />
                )}
                {idx === 1 && (
                  <ShieldCheck className="size-4 text-slate-400 group-hover:text-electric-500 transition-colors" />
                )}
                {idx === 2 && (
                  <Users className="size-4 text-slate-400 group-hover:text-electric-500 transition-colors" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Standards & Principles Auto-sliding Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 rounded-2xl glass-panel p-6 md:p-8 overflow-hidden relative group"
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60 dark:border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <Sparkles className="size-4 text-electric-600 dark:text-electric-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Core Standards & Principles
              </h3>
            </div>
            <div className="hidden items-center gap-2 text-[11px] font-mono text-slate-400 dark:text-slate-500">
              <span className="hidden sm:inline">Pause on hover</span>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span className="text-electric-600 dark:text-electric-400 font-semibold">
                Production Bar
              </span>
            </div>
          </div>

          {/* Marquee viewport with soft gradient edge fades */}
          <div
            className="relative overflow-hidden w-full py-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left and Right Fade Scrims */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-r from-white/95 dark:from-slate-900/95 to-transparent z-10 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-l from-white/95 dark:from-slate-900/95 to-transparent z-10 pointer-events-none"
            />

            {/* Continuous Motion Marquee Track */}
            <motion.div
              className="flex w-max items-center gap-4 will-change-transform cursor-grab active:cursor-grabbing"
              animate={isPaused ? {} : { x: ["0%", "-33.333%"] }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {marqueeItems.map((text, idx) => (
                <div
                  key={`${text}-${idx}`}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200/80 dark:border-electric-500/20 bg-white/80 dark:bg-slate-950/70 shadow-xs backdrop-blur-sm whitespace-nowrap shrink-0 hover:border-electric-500/50 transition-colors"
                >
                  <CheckCircle2 className="size-4 text-electric-600 dark:text-electric-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
