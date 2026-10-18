"use client";

import { useEffect, useState } from "react";
import DataRain from "@/components/ui/data-rain";

/**
 * Fixed full-viewport DataRain background.
 * Invisible over the hero (which has its own GlassFold) and fades in
 * behind every section scrolled after it.
 */
export default function DataRainBg() {
  const [visible, setVisible] = useState(false);

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
        palette={{
          calm: "#d3e97a",
          mid: "#8ba53a",
          hot: "#f4ffd6",
        }}
        flowSpeed={0.8}
      />
      {/* keep a scrim so content keeps its contrast */}
      <div className="absolute inset-0 bg-background/55" />
    </div>
  );
}
