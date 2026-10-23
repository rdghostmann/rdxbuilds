"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Rocket, Shield, Users } from "lucide-react";

export function WhatYouHandOver() {
  const cards = [
    {
      title: "You stop being the project manager",
      tag: "Security & Multi-Tenancy",
      icon: Shield,
      story:
        "When the UseMoos founder said their enterprise customers needed to know the AI would never surface a document someone was not allowed to see, I did not ask for a ticket. I designed the permission check to run before the retrieval query, built tenant isolation at the query layer, and shipped it.",
      outcome:
        "By week three he was demoing it to 25 enterprise leads, without once being pulled into a security review.",
    },
    {
      title: "Your calendar is not the bottleneck",
      tag: "Proactive QA & CI Evals",
      icon: Clock,
      story:
        "I run my own sprints and surface blockers with a recommendation attached. When Kota AI's retrieval quality dropped after a vector database migration, the CI-gated eval harness caught it before the change could merge, and the founder heard about it from me with the fix already in hand.",
      outcome:
        "The regression never reached production. His customers never saw a worse answer.",
    },
    {
      title: "You ship while you sleep",
      tag: "End-to-End Ownership",
      icon: Rocket,
      story:
        "On roomfind.ie the search pipeline, the filtering logic, and the booking flow were handled end to end. The founder's involvement in the final stretch was reviewing the live link and giving feedback.",
      outcome:
        "He spent that stretch on acquisition and physical outreach, and launched with listings already on the platform.",
    },
    {
      title: "I stay after the launch",
      tag: "Long-Term Reliability",
      icon: Users,
      story:
        "A bug in week one is still mine. I have stayed with products through their first 5,000+ daily active users and through infrastructure migrations with zero downtime.",
      outcome:
        "Two years on, those products are still running. That is what focusing on growth actually looks like.",
    },
  ];

  return (
    <motion.section
      id="hand-over"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-electric-600 dark:text-electric-400">
            <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
            <span>What you hand over</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight text-balance">
            You should be selling and growing.{" "}
            <br className="hidden sm:inline" />
            <span className="text-electric-600 dark:text-electric-400">
              Not managing engineers.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
            Your job is to talk to customers and grow the top line. Mine is to
            make sure the product underneath that growth does not break, does
            not leak data, and does not ship a feature that demos well and falls
            over in production.
          </p>
        </div>

        {/* 4 Pillars Grid with Staggered Scroll Animation */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between p-7 rounded-2xl glass-panel hover:border-electric-500/40 hover:shadow-xl hover:shadow-electric-600/5 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/80">
                    <span className="text-xs font-mono font-semibold text-electric-600 dark:text-electric-400">
                      {card.tag}
                    </span>
                    <div className="size-8 rounded-lg bg-electric-50 dark:bg-electric-950/40 text-electric-600 dark:text-electric-400 flex items-center justify-center">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.story}
                  </p>
                </div>

                {/* Measurable Founder Outcome */}
                <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 -mx-7 -mb-7 p-6 rounded-b-2xl">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {card.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
