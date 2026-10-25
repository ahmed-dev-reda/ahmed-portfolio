"use client";

import { useTheme } from "next-themes";
import DarkGradientBg from "@/components/ui/elegant-dark-pattern";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Hero pattern backdrop (elegant-dark-pattern) with a theme-aware palette.
 * Dark: lime streaks radiating from the top-left corner on near-black.
 * Light: olive streaks on warm paper.
 */
export default function HeroPattern() {
  const { resolvedTheme } = useTheme();
  const isDark = (resolvedTheme ?? "dark") === "dark";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY === 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (visible)
    return (
      <DarkGradientBg
        streakColor={isDark ? "#d3e97a" : "#4a621b"}
        bgFrom={isDark ? "#2e2e2e" : "#ffffff"}
        bgTo={isDark ? "#0a0a0a" : "#f6f5ee"}
        dotColor={isDark ? "rgba(255,255,255,0.5)" : "rgba(23,24,26,0.35)"}
        className={cn(visible)}
      />
    );
  return null;
}
