// TheToolkit.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  Database,
  Layout,
  Server,
  Sparkles,
} from "lucide-react";

export function TheToolkit() {
  const [activeTab, setActiveTab] = useState<string>("Frontend / UX");

  const domains = [
    {
      id: "Frontend / UX",
      label: "Frontend / UX",
      icon: Layout,
      thesis:
        "Non-technical users judge a product by whether it makes them feel in control.",
      explanation:
        "They do not care about the stack. They care about whether the thing they are responsible for looks like it is going to work, which is a design and interaction problem as much as an engineering one.",
      offYourHands: [
        "Figma design translation into production-ready responsive code",
        "Design systems, typography scaling, and dark/light color tokens",
        "Fluid micro-interactions and tactile feedback (drag, dock, physics)",
        "Zero mobile layout breakage and WCAG AA accessibility compliance",
      ],
      skills: [
        "React",
        "TypeScript",
        "CSS Framework",
        "UX design",
        "Design systems",
        "Interaction design",
        "Accessibility",
        "Figma to code",
      ],
    },
    {
      id: "Product Judgment",
      label: "Product Judgment",
      icon: Sparkles,
      thesis:
        "Building the wrong feature with flawless code is still a net loss for the business.",
      explanation:
        "I evaluate features through the lens of founder time, customer onboarding drop-offs, and commercial velocity. Rather than requiring step-by-step specifications, I deconstruct business goals and resolve ambiguities autonomously.",
      offYourHands: [
        "Aggressive de-scoping of low-leverage bloat before writing a single line of code",
        "Self-directed sprint execution that presents blockers with recommended fixes",
        "Eradication of onboarding friction points that cause new users to bounce",
        "Milestone alignment directly coupled to revenue growth and investor demos",
      ],
      skills: [
        "MVP De-Scoping",
        "Self-Directed Sprints",
        "User Onboarding Optimization",
        "Trade-off Analysis",
        "Technical Debt Triage",
        "Release Milestones",
      ],
    },
    {
      id: "Backend & Data",
      label: "Backend & Data",
      icon: Database,
      thesis:
        "Resilient data layers, strict type contracts, and zero-downtime persistence.",
      explanation:
        "A slow database query or inconsistent authentication state degrades user trust immediately. Systems must be architected with defensive boundaries, strict relational schemas, and predictable data synchronization.",
      offYourHands: [
        "Contract-first REST and RPC endpoints with complete TypeScript validation",
        "Multi-tenant security, session tokens, and OAuth authorization chains",
        "Relational database schemas with zero-downtime migration scripts",
        "Asynchronous webhook handlers with replay protection and idempotency",
      ],
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL / SQL",
        "API Design",
        "OAuth & JWT Security",
        "Row-Level Security",
        "Data Migration",
      ],
    },
    {
      id: "Infrastructure",
      label: "Infrastructure",
      icon: Server,
      thesis:
        "Predictable deployments where regressions never reach production.",
      explanation:
        "Founders should never be woken up by 502 errors or memory leaks during an investor pitch or viral customer launch. Continuous integration, containerized environments, and fast rollback paths ensure peace of mind.",
      offYourHands: [
        "Automated CI/CD deployment pipelines running test suites before any merge",
        "Sub-second asset bundling, edge CDN caching, and Core Web Vitals tuning",
        "Live error tracking, structured logging, and uptime alerts",
        "Seamless cloud containerization, environment variable secrets, and SSL",
      ],
      skills: [
        "Vite & Build Tooling",
        "CI/CD Pipelines",
        "Docker / Containerization",
        "Core Web Vitals Optimization",
        "Asset Caching",
        "Uptime Monitoring",
      ],
    },
     {
      id: "AI",
      label: "AI",
      icon: Brain,
      thesis:
        "Grounded generation and deterministic permission boundaries over novelty demo hacks.",
      explanation:
        "Enterprise AI fails on hallucination, document leakage, and latency spikes. Integrating an LLM is straightforward; engineering tenant isolation, evaluation harnesses, and sub-second streaming pipelines is where products survive real customer scrutiny.",
      offYourHands: [
        "Pre-retrieval authorization checks ensuring users never see unauthorized context",
        "Automated CI/CD eval harnesses to catch answer degradation before deployment",
        "Low-latency streaming responses with deterministic error fallbacks",
        "Vector indexing, chunking optimization, and embeddings pipeline design",
      ],
      skills: [
        "RAG Architecture",
        "Tenant Isolation",
        "CI-Gated Eval Harnesses",
        "Vector Embeddings",
        "Streaming Response Pipelines",
        "Structured Schema Output",
        "Rate-Limit Resilience",
      ],
    },
  ];

  const currentDomain = domains.find((d) => d.id === activeTab) || domains[0];

  return (
    <motion.section
      id="toolkit"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-electric-600 dark:text-electric-400">
            <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
            <span>The toolkit · Where I am useful</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight text-balance">
            Where I am useful.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
            A technology list shows familiarity. What follows is what I actually
            take off your hands, and the judgment that comes with it.
          </p>
        </div>

        {/* 5 Domain Navigation Buttons */}
        <div className="mt-10 flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel w-fit">
          {domains.map((d) => {
            const Icon = d.icon;
            const isSelected = activeTab === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveTab(d.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? "bg-electric-600 text-white shadow-md shadow-electric-600/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                <Icon className="size-4" />
                <span>{d.label}</span>
              </button>
            );
          })}
        </div>

        {/* Domain Deep-Dive Panel with Motion Reveal */}
        <div className="mt-8 rounded-2xl glass-panel p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDomain.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Thesis & Explanation */}
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-electric-600 dark:text-electric-400">
                  <span>Domain Focus</span>
                  <span aria-hidden="true">/</span>
                  <span>{currentDomain.label}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  {currentDomain.thesis}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentDomain.explanation}
                </p>
              </div>

              {/* Two Column Breakdown: What I Take Off Your Hands vs Technologies */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
                {/* Left: What I Actually Take Off Your Hands */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What I take off your hands
                  </h4>
                  <div className="space-y-3">
                    {currentDomain.offYourHands.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-electric-600 dark:text-electric-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-normal">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Technologies & Stack */}
                <div className="hidden lg:block lg:col-span-5 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Capabilities & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentDomain.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-electric-500/15 bg-white/60 dark:bg-slate-900/60 text-xs font-mono text-slate-800 dark:text-slate-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
