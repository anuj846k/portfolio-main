"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function switchTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function onThemeChange() {
    if (typeof document !== "undefined" && (document as any).startViewTransition) {
      (document as any).startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" type="button" size="icon" className="px-2">
        <span className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={onThemeChange}
    >
      {resolvedTheme === "light" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      )}
    </Button>
  );
}
