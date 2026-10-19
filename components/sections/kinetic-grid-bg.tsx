"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import KineticGrid from "@/components/ui/kinetic-grid";

/**
 * Fixed full-viewport KineticGrid background.
 * Invisible over the hero (which has its own silk backdrop), fades in after
 * scrolling past it, and is only rendered in dark mode — in light mode the
 * page below the hero is left plain.
 */
export default function KineticGridBg() {
  const [visible, setVisible] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = (resolvedTheme ?? "dark") === "dark";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // light theme: no post-hero effects at all
  if (!isDark) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-0 transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <KineticGrid className="absolute inset-0 h-full" />
    </div>
  );
}
