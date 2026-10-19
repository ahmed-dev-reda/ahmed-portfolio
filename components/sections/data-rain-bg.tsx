"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DataRain from "@/components/ui/data-rain";

/**
 * Fixed full-viewport DataRain background.
 * Invisible over the hero (which has its own GlassFold) and fades in
 * behind every section scrolled after it. Palette follows the theme.
 */
export default function DataRainBg() {
  const [visible, setVisible] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = (resolvedTheme ?? "dark") === "dark";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <DataRain
        className="absolute inset-0"
        fullscreen={true}
        palette={
          isDark
            ? {
                calm: "#d3e97a",
                mid: "#8ba53a",
                hot: "#f4ffd6",
              }
            : {
                calm: "#7aa019",
                mid: "#9db54d",
                hot: "#4a621b",
              }
        }
        flowSpeed={0.8}
      />
      {/* keep a scrim so content keeps its contrast */}
      <div className="absolute inset-0 bg-background/55" />
    </div>
  );
}
