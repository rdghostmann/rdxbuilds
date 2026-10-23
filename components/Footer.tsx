// Footer.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DATA } from "@/data/resume";
import { ArrowUp } from "lucide-react";

export function Footer() {
  // const [year, setYear] = useState<number | null>(null);

  // useEffect(() => {
  //   setYear(new Date().getFullYear());
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-slate-100/50 pb-28 pt-12 transition-colors dark:border-slate-800/80 dark:bg-[#070b14]/60">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex size-7 items-center justify-center overflow-hidden rounded-md border border-electric-600/30 bg-electric-600/10">
              <Image
                src={DATA.brandAvatar}
                alt="Rdxbuilds brand mark"
                width={28}
                height={28}
                sizes="28px"
                className="size-full object-cover"
              />
            </div>

            <div className="text-xs">
              <span className="font-bold text-slate-900 dark:text-white">
                Rdxbuilds
              </span>
              <span className="ml-2 text-slate-400 dark:text-slate-500">
                · Web Developer & Product Builder
              </span>
            </div>
          </div>

          {/* Quick jump to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-electric-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 dark:text-slate-400 dark:hover:text-electric-400"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-6 text-[11px] text-slate-400 dark:border-slate-800/60 dark:text-slate-500 sm:flex-row">
          <p>© 2026 Rdxbuilds. All rights reserved.</p>

          <p>Engineered with React 19, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
