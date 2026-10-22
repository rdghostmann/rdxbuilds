'use client';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Universal Link component for Vite SPA supporting smooth anchor scroll and external links
function NavLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  const isHash = href.startsWith("#");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHash) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel}
      target={isHash ? undefined : "_blank"}
      rel={isHash ? undefined : "noopener noreferrer"}
      className={className}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav
      aria-label="Portfolio dock navigation"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto mb-4 flex origin-bottom h-14 max-h-14 items-center justify-center px-4"
    >
      {/* Subtle bottom gradient backdrop so dock floats cleanly above page content */}
      <div
        aria-hidden="true"
        className="fixed bottom-0 inset-x-0 h-20 w-full pointer-events-none bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent dark:from-[#070b14] dark:via-[#070b14]/80 backdrop-blur-[2px]"
      />

      <Dock className="z-50 pointer-events-auto relative mx-auto flex h-full items-center px-2 py-1">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 rounded-full hover:bg-electric-50 hover:text-electric-600 dark:hover:bg-electric-950/60 dark:hover:text-electric-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
                  )}
                >
                  <item.icon className="size-4" />
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-6 mx-1 my-auto" />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <NavLink
                    href={social.url}
                    aria-label={name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-electric-50 hover:text-electric-600 dark:hover:bg-electric-950/60 dark:hover:text-electric-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
                    )}
                  >
                    <social.icon className="size-4" />
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

        <Separator orientation="vertical" className="h-6 mx-1 my-auto" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </nav>
  );
}
