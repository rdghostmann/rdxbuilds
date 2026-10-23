// Work.tsx
"use client";

import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric-600 dark:text-electric-400">
            <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
            <span>Experience & Impact</span>
          </div>

          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Building digital solutions that move businesses forward.
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            From business websites and educational platforms to management
            systems and data-driven applications, my experience spans designing
            and developing digital products that solve real problems, streamline
            workflows, and create better user experiences.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {DATA.work.map((item, index) => (
            <BlurFade
              key={item.company}
              delay={BLUR_FADE_DELAY * 6 + index * 0.05}
            >
              <ResumeCard
                logoUrl={item.logoUrl}
                altText={item.company}
                title={item.company}
                subtitle={item.title}
                href={item.href}
                badges={item.badges}
                period={`${item.start} - ${item.end ?? "Present"}`}
                description={item.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
