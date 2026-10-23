// Approach.tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import {
  CheckCircle2,
  ChevronRight,
  Compass,
  PanelsTopLeft,
  Rocket,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const stepIcons = [Compass, PanelsTopLeft, Wrench, Rocket];

const AUTO_SCROLL_INTERVAL = 7000;
const RESUME_DELAY = 3000;

export function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const phases = DATA.approach;

  const clearAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const clearResumeTimeout = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const scrollToStep = useCallback((index: number, smooth = true) => {
    const container = scrollContainerRef.current;
    const card = container?.children[index] as HTMLElement | undefined;

    if (!container || !card) return;

    const targetLeft =
      card.offsetLeft -
      container.offsetLeft -
      (container.clientWidth - card.clientWidth) / 2;

    setActiveStep(index);

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  const startAutoScroll = useCallback(() => {
    clearAutoScroll();

    if (typeof window === "undefined" || window.innerWidth >= 768) return;

    intervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;

      if (!container || isInteractingRef.current || isDraggingRef.current) {
        return;
      }

      const cards = Array.from(container.children) as HTMLElement[];
      if (!cards.length) return;

      const containerCenter =
        container.getBoundingClientRect().left + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      scrollToStep((closestIndex + 1) % cards.length);
    }, AUTO_SCROLL_INTERVAL);
  }, [clearAutoScroll, scrollToStep]);


  const pauseAutoScroll = useCallback(() => {
    isInteractingRef.current = true;
    clearAutoScroll();
    clearResumeTimeout();
  }, [clearAutoScroll, clearResumeTimeout]);

  const scheduleResume = useCallback(() => {
    clearResumeTimeout();

    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      startAutoScroll();
    }, RESUME_DELAY);
  }, [clearResumeTimeout, startAutoScroll]);

  useEffect(() => {
    startAutoScroll();

    const handleResize = () => {
      clearAutoScroll();
      startAutoScroll();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearAutoScroll();
      clearResumeTimeout();
      window.removeEventListener("resize", handleResize);
    };
  }, [clearAutoScroll, clearResumeTimeout, startAutoScroll]);

  // Allow mouse dragging on touchless devices.
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768 || event.button !== 0) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragScrollLeftRef.current = container.scrollLeft;

    pauseAutoScroll();
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;

    if (!container || !isDraggingRef.current) return;

    event.preventDefault();

    const distance = event.clientX - dragStartXRef.current;
    container.scrollLeft = dragScrollLeftRef.current - distance;
  };

  const stopDragging = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    scheduleResume();
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;

    if (!container || window.innerWidth >= 768) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    const containerCenter =
      container.getBoundingClientRect().left + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveStep((current) =>
      current === closestIndex ? current : closestIndex,
    );
  };

  return (
    <motion.section
      id="approach"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric-600 dark:text-electric-400">
            <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
            <span>Process & Methodology</span>
          </div>

          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            From your first idea to a successful launch.
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            A straightforward four-step process that keeps your project
            organized, keeps you informed, and turns your goals into a
            dependable digital product.
          </p>
        </div>

        {/* Swipeable, Draggable Mobile Cards */}
        <div className="relative mt-14">
          <div
            ref={scrollContainerRef}
            role="group"
            aria-label="Project delivery phases"
            onTouchStart={pauseAutoScroll}
            onTouchEnd={scheduleResume}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onScroll={handleScroll}
            className={[
              "flex gap-4 overflow-x-auto overscroll-x-contain",
              "snap-x snap-mandatory scroll-smooth pb-4",
              "cursor-grab active:cursor-grabbing select-none",
              "scrollbar-none [&::-webkit-scrollbar]:hidden",
              "md:grid md:grid-cols-2 md:gap-5 md:overflow-visible",
              "md:cursor-auto md:pb-0 md:select-auto",
            ].join(" ")}
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              touchAction: "pan-x pan-y",
            }}
          >
            {phases.map((phase, idx) => {
              const Icon = stepIcons[idx] ?? Compass;
              const isSelected = activeStep === idx;

              return (
                <motion.article
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => scrollToStep(idx)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      scrollToStep(idx);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  className={[
                    "glass-panel w-[85%] min-w-[85%] shrink-0 snap-center",
                    "rounded-2xl border p-6 transition-all duration-300",
                    "sm:w-[70%] sm:min-w-[70%] sm:p-7",
                    "md:w-auto md:min-w-0 md:p-5 lg:p-6",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-electric-500",
                    isSelected
                      ? "border-electric-600 bg-electric-50/30 shadow-md ring-1 ring-electric-500/30 dark:border-electric-500 dark:bg-electric-950/20"
                      : "border-transparent hover:border-slate-300 dark:hover:border-electric-500/30",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700">
                      {phase.step}
                    </span>

                    <div
                      className={[
                        "flex size-10 items-center justify-center rounded-xl",
                        "transition-colors",
                        isSelected
                          ? "bg-electric-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
                      ].join(" ")}
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {phase.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {phase.lead}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-200/60 pt-5 dark:border-slate-800/80">
                    {phase.points.map((point, pointIndex) => (
                      <div
                        key={`${phase.step}-${pointIndex}`}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-electric-600 dark:text-electric-400" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Mobile carousel indicators */}
          <div
            className="mt-3 flex items-center justify-center gap-2 md:hidden"
            aria-label="Select a project phase"
          >
            {phases.map((phase, idx) => (
              <button
                key={phase.step}
                type="button"
                aria-label={`Go to phase ${phase.step}: ${phase.title}`}
                aria-current={activeStep === idx ? "step" : undefined}
                onClick={() => scrollToStep(idx)}
                className={[
                  "h-2 rounded-full transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-electric-500 focus-visible:ring-offset-2",
                  "dark:focus-visible:ring-offset-slate-950",
                  activeStep === idx
                    ? "w-6 bg-electric-600"
                    : "w-2 bg-slate-300 dark:bg-slate-700",
                ].join(" ")}
              />
            ))}
          </div>

        </div>

        {/* Milestone & Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="glass-panel mt-12 flex flex-col justify-between gap-6 rounded-xl p-6 md:flex-row md:items-center md:p-8"
        >
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Ready for your next milestone?
            </h4>

            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Clear project goals, regular progress updates, and a process
              designed to keep everyone on the same page.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 dark:bg-electric-600 dark:hover:bg-electric-500"
          >
            <span>Discuss your project</span>
            <ChevronRight className="size-3.5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}