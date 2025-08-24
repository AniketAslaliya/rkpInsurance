"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, BellDot } from "lucide-react";
import { useTheme } from "next-themes";

export function Topbar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="h-16 border-b border-foreground/10 flex items-center justify-between px-4 md:px-6 bg-background/60 backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="font-medium hidden md:inline text-foreground/80">Welcome back</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <BellDot className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}


