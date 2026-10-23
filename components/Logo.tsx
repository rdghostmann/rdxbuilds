// Logo.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

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
      <div className="flex size-20 shrink-0 items-center justify-center">
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
    </Link>
  );
}
