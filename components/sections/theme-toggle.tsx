"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme, type ThemeProviderProps } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Theme toggle with a circular reveal: the new theme spreads out from the
 * button as a growing circle until it covers the whole page (View Transitions
 * API). Falls back to an instant switch when the API is unavailable, and
 * switches instantly for users who prefer reduced motion.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  async function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const nextTheme: string = isDark ? "light" : "dark";
    const button = event.currentTarget;

    // anchor the reveal at the button's centre
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    type DocWithVT = Document & {
      startViewTransition?: (
        update?: () => void | Promise<void>,
      ) => {
        ready: Promise<void>;
      };
    };

    const docChanged = () =>
      flushSync(() => {
        setTheme(nextTheme);
      });

    const doc = document as DocWithVT;

    // instant switch if the API is missing or motion is disabled
    if (reducedMotion || typeof doc.startViewTransition !== "function") {
      docChanged();
      return;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(docChanged);
    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 650,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-foreground transition-colors duration-200 hover:bg-lime hover:text-[#1a2a00] sm:ml-3"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}

// keep next-themes' light type resolution happy when reusing props elsewhere
export type ThemeValue = ThemeProviderProps["themes"];
