// src/components/Header.tsx
"use client";

import React from "react";
import Image from "next/image";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    const element = document.getElementById(targetId);

    if (!element) return;

    e.preventDefault();

    element.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${targetId}`);
  };

  return (
    <header className="glass-panel z-30 w-full border-b border-slate-200/80 transition-colors dark:border-electric-500/15">
    {/* <header className="glass-panel sticky top-0 z-30 w-full border-b border-slate-200/80 transition-colors dark:border-electric-500/15"> */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap text-lg font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 dark:text-white"
          aria-label="Rdxbuilds homepage"
        >
          <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-electric-600/30 bg-electric-600/10 p-0.5">
            <Image
              src={DATA.brandAvatar}
              alt="Rdxbuilds logo"
              width={32}
              height={32}
              sizes="32px"
              priority
              className="size-full rounded-md object-cover"
            />
          </div>

          <span className="font-extrabold tracking-tight">
            Rdx<span className="text-electric-600 dark:text-electric-400">builds</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex"
        >
          {[
            { href: "#about", id: "about", label: "About" },
            // {
            //   href: "#hand-over",
            //   id: "hand-over",
            //   label: "What You Hand Over",
            // },
            // { href: "#toolkit", id: "toolkit", label: "Toolkit" },
            { href: "#projects", id: "projects", label: "Projects" },
            { href: "#approach", id: "approach", label: "Approach" },
            // { href: "#contact", id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className="shrink-0 whitespace-nowrap transition-colors hover:text-electric-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 dark:hover:text-electric-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-electric-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-electric-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2"
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}