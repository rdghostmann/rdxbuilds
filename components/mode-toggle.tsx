"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkCurrent = document.documentElement.classList.contains("dark");
    setIsDark(isDarkCurrent);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-10 rounded-full hover:bg-electric-50 dark:hover:bg-electric-950/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500",
      )}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="size-4 text-slate-700 transition-transform duration-200 rotate-0 scale-100" />
      )}
    </button>
  );
}
