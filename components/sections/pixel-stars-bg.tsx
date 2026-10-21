"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BackgroundPixelStars from "@/components/ui/background-pixel-stars";

/**
 * Fixed full-viewport pixel-starfield background.
 * Invisible over the hero, fades in after scrolling past it, and — like all
 * post-hero effects — is only rendered in dark mode.
 */
export default function PixelStarsBg() {
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
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <BackgroundPixelStars />
    </div>
  );
}
