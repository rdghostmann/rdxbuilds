// Footer.tsx
"use client";

import Image from "next/image";
import { DATA } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-100/50 pb-28 transition-colors dark:border-slate-800/80 dark:bg-[#070b14]/60">
      {/* <footer className="border-t border-slate-200/80 bg-slate-100/50 pb-28 pt-12 transition-colors dark:border-slate-800/80 dark:bg-[#070b14]/60"> */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Copyright */}
        <div className=" flex  items-center justify-between gap-4 border-t border-slate-200/60 pt-6 text-[11px] text-slate-400 dark:border-slate-800/60 dark:text-slate-500 sm:flex-row">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex size-16 shrink-0 items-center justify-center">
              <Image
                src="/rdxbuilds-logo-light.png"
                alt="Rdxbuilds logo"
                width={1254}
                height={1254}
                priority
                className="size-full object-contain dark:hidden"
              />
              <Image
                src="/rdxbuilds-logo-dark.png"
                alt=""
                width={1254}
                height={1254}
                priority
                className="hidden size-full object-contain dark:block"
              />
            </div>
          </div>

          <p>© 2026 Rdxbuilds. All rights reserved.</p>

          {/* <p>Engineered with React 19, TypeScript & Tailwind CSS.</p> */}
        </div>
      </div>
    </footer>
  );
}
