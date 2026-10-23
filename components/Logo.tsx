// Logo.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";

interface LogoProps {
  handleNavClick?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => void;
  className?: string;
}

export default function Logo({ handleNavClick, className = "" }: LogoProps) {
  return (
    <Link
      href="#hero"
      onClick={(e) => handleNavClick?.(e, "hero")}
      className={`group flex shrink-0 items-center gap-2.5 whitespace-nowrap text-lg font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 dark:text-white ${className}`}
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
        Rdx
        <span className="text-electric-600 dark:text-electric-400">builds</span>
      </span>
    </Link>
  );
}
