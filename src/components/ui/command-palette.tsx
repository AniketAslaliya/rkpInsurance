"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const hotkey = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (hotkey) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-start pt-24 bg-black/40">
      <Command className={cn("mx-auto w-full max-w-xl rounded-xl border border-foreground/10 bg-card p-2 shadow-xl")}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      >
        <Command.Input placeholder="Search or jump to..." className="h-10 w-full rounded-md border border-foreground/10 px-3 outline-none" />
        <Command.List>
          <Command.Empty className="px-3 py-2 text-sm text-foreground/60">No results.</Command.Empty>
          <Command.Group heading="Navigation">
            <Command.Item onSelect={() => navigate("/dashboard")}>Dashboard</Command.Item>
            <Command.Item onSelect={() => navigate("/clients")}>Clients</Command.Item>
            <Command.Item onSelect={() => navigate("/policies")}>Policies</Command.Item>
            <Command.Item onSelect={() => navigate("/reminders")}>Reminders</Command.Item>
            <Command.Item onSelect={() => navigate("/settings")}>Settings</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}


