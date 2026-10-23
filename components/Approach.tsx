// Approach.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import {
  CheckCircle2,
  ChevronRight,
  Compass,
  Rocket,
  Wrench,
} from "lucide-react";

export function Approach() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let intervalId: ReturnType<typeof setInterval> | undefined;
    let resumeTimeout: ReturnType<typeof setTimeout> | undefined;

    const stopAutoScroll = () => {
      isInteractingRef.current = true;
      if (intervalId) clearInterval(intervalId);
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };

    const resumeAutoScroll = () => {
      if (resumeTimeout) clearTimeout(resumeTimeout);

      resumeTimeout = setTimeout(() => {
        isInteractingRef.current = false;
        startAutoScroll();
      }, 3000);
    };

    const startAutoScroll = () => {
      if (intervalId) clearInterval(intervalId);

      if (window.innerWidth >= 768) return;

      intervalId = setInterval(() => {
        if (isInteractingRef.current || !container) return;

        const maxScroll = container.scrollWidth - container.clientWidth;

        if (maxScroll <= 0) return;

        const nextCard = Math.min(activeStep + 1, DATA.approach.length - 1);

        const currentCard = Math.round(
          container.scrollLeft /
            (container.firstElementChild?.getBoundingClientRect().width || 1),
        );

        const targetIndex =
          currentCard >= DATA.approach.length - 1 ? 0 : currentCard + 1;

        container.scrollTo({
          left:
            targetIndex *
            (container.firstElementChild?.getBoundingClientRect().width || 0),
          behavior: "smooth",
        });

        setActiveStep(targetIndex);
      }, 3500);
    };

    const handleInteractionStart = () => stopAutoScroll();
    const handleInteractionEnd = () => resumeAutoScroll();

    container.addEventListener("touchstart", handleInteractionStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleInteractionEnd, {
      passive: true,
    });
    container.addEventListener("pointerdown", handleInteractionStart);
    container.addEventListener("pointerup", handleInteractionEnd);
    container.addEventListener("pointercancel", handleInteractionEnd);

    startAutoScroll();

    const handleResize = () => startAutoScroll();
    window.addEventListener("resize", handleResize);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (resumeTimeout) clearTimeout(resumeTimeout);

      window.removeEventListener("resize", handleResize);
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("touchend", handleInteractionEnd);
      container.removeEventListener("pointerdown", handleInteractionStart);
      container.removeEventListener("pointerup", handleInteractionEnd);
      container.removeEventListener("pointercancel", handleInteractionEnd);
    };
  }, []);
  const stepIcons = [Compass, Wrench, Rocket];

  return (
    <motion.section
      id="approach"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-electric-600 dark:text-electric-400">
            <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
            <span>Process & Methodology</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Predictable delivery, from whiteboard to production.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A battle-tested 3-phase engineering cycle that eliminates ambiguity,
            mitigates technical risk, and ships on schedule.
          </p>
        </div>

        {/* 3 Steps Interactive Grid with glass-panel and staggered scroll motion */}
        <div
          ref={scrollContainerRef}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setActiveStep(idx);
            }
          }}
          className="
    mt-14 flex gap-4 overflow-x-auto snap-x snap-mandatory
    scroll-smooth pb-4
    [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
    md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0
  "
        >
          {" "}
          {DATA.approach.map((phase, idx) => {
            const Icon = stepIcons[idx] || Compass;
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveStep(idx)}
                className={`glass-panel w-[85%] min-w-[85%] shrink-0 snap-center cursor-pointer rounded-2xl p-6 transition-all sm:w-[70%] sm:min-w-[70%] sm:p-7 md:w-auto md:min-w-0 ${
                  isSelected
                    ? "border-electric-600 dark:border-electric-500 ring-1 ring-electric-500/30 bg-electric-50/30 dark:bg-electric-950/20 shadow-md"
                    : "hover:border-slate-300 dark:hover:border-electric-500/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700">
                    {phase.step}
                  </span>
                  <div
                    className={`size-9 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-electric-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <Icon className="size-4" />
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {phase.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {phase.lead}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-800/80 space-y-2.5">
                  {phase.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="size-3.5 text-electric-600 dark:text-electric-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Milestone & Deliverables Blueprint Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 rounded-xl glass-panel p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Ready for your next milestone?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Clear scope estimations, transparent sprint check-ins, and zero
              communication gaps.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-electric-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 dark:hover:bg-electric-500 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
          >
            <span>Discuss your build</span>
            <ChevronRight className="size-3.5" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
