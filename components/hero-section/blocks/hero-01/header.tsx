// header.tsx
"use client";

import { useState, useEffect, useCallback, type MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LinkedinLogo } from "@phosphor-icons/react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: LinkedinLogo,
  },
] as const;

const CollaborateButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <Button
    onClick={onClick}
    className={cn(
      "group relative h-10 w-fit overflow-hidden rounded-full p-1 ps-4 pe-12 text-sm font-medium transition-all duration-500 hover:ps-12 hover:pe-4",
      className,
      "cursor-pointer",
    )}
  >
    <span className="relative z-10 transition-all duration-500">
      Let&apos;s Collaborate
    </span>

    <span className="absolute right-1 flex size-8 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
      <ArrowUpRight size={16} aria-hidden="true" />
    </span>
  </Button>
);

const Header = ({ navigationData, className }: HeaderProps) => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) return;

    contactSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });

    window.history.pushState(null, "", "#contact");
    setIsOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      // Preserve normal navigation for external URLs and non-hash links.
      if (!href.startsWith("#")) return;

      const sectionId = href.slice(1);
      const section = document.getElementById(sectionId);

      if (!section) return;

      event.preventDefault();

      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });

      window.history.pushState(null, "", `#${sectionId}`);
      setIsOpen(false);
    },
    [],
  );

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    const initialFrame = window.requestAnimationFrame(() => {
      handleScroll();
      setCurrentYear(new Date().getFullYear());
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={cn(
        "sticky inset-x-0 top-0 z-50 flex h-20 items-center justify-center px-4",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-fit w-full max-w-6xl items-center justify-between gap-3.5 transition-all duration-500 lg:gap-6",
          sticky
            ? "rounded-full border border-border/40 bg-background/60 p-2.5 shadow-2xl shadow-primary/5 backdrop-blur-lg"
            : "border-transparent bg-transparent",
        )}
      >
        {/* Logo */}
        <Logo handleNavClick={handleNavClick} />

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className="max-lg:hidden rounded-full bg-muted p-0.5">
            <NavigationMenuList className="flex gap-0">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    href={navItem.href}
                    onClick={(event) => handleNavClick(event, navItem.href)}
                    className={cn(
                      "rounded-full px-2 py-2 text-sm font-medium tracking-normal text-muted-foreground outline outline-transparent transition hover:bg-background hover:text-foreground hover:outline-border hover:shadow-xs lg:px-4",
                      navItem.isActive && "bg-background text-foreground",
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA and Mobile Menu */}
        <div className="flex gap-4">
          <CollaborateButton
            onClick={scrollToContact}
            className="hidden lg:flex"
          />

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  id="mobile-menu-trigger"
                  type="button"
                  aria-label="Open navigation menu"
                  className="block rounded-full border border-border p-2 transition-colors hover:bg-muted"
                >
                  <Menu width={20} height={20} aria-hidden="true" />
                </button>
              </SheetTrigger>

              <SheetContent
                showCloseButton={false}
                side="right"
                className="w-full border-l-0 p-0 sm:w-96"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6">
                  <Link
                    href="/"
                    aria-label="RdxBuilds home"
                    onClick={() => setIsOpen(false)}
                  >
                    <Logo className="gap-2" />
                  </Link>

                  <SheetClose asChild>
                    <button
                      id="mobile-menu-close"
                      type="button"
                      aria-label="Close navigation menu"
                      className="block rounded-full border border-border p-2.5 transition-colors hover:bg-muted"
                    >
                      <X width={16} height={16} aria-hidden="true" />
                    </button>
                  </SheetClose>
                </div>

                <div className="flex max-h-[calc(100dvh-88px)] flex-col gap-12 overflow-y-auto px-6 pb-6">
                  <div className="flex flex-col gap-8">
                    <SheetTitle className="sr-only">Navigation menu</SheetTitle>

                    <NavigationMenu
                      orientation="vertical"
                      className="flex-none items-start"
                    >
                      <NavigationMenuList className="flex flex-col items-start gap-3">
                        {navigationData.map((item) => (
                          <NavigationMenuItem key={item.title}>
                            <NavigationMenuLink
                              href={item.href}
                              onClick={(event) =>
                                handleNavClick(event, item.href)
                              }
                              className={cn(
                                "group/nav flex items-center p-0 text-2xl font-semibold tracking-tight transition-all hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",
                                item.isActive
                                  ? "text-primary"
                                  : "text-muted-foreground hover:translate-x-2 hover:text-foreground",
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={cn(
                                  "mr-2 h-0.5 bg-primary transition-all duration-300",
                                  item.isActive
                                    ? "w-4 opacity-100"
                                    : "w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:opacity-100",
                                )}
                              />
                              {item.title}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>

                    <div className="w-fit">
                      <CollaborateButton onClick={scrollToContact} />
                    </div>
                  </div>

                  {/* Social Links and Footer */}
                  <div className="mt-auto flex flex-col gap-4">
                    <div className="flex gap-3">
                      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                        <Link
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${label} profile`}
                          className="flex items-center justify-center rounded-full p-3 shadow-xs outline outline-border transition hover:bg-muted"
                        >
                          <Icon size={16} weight="regular" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      © {currentYear ?? ""} RdxBuilds. All rights reserved.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
