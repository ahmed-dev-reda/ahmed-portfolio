"use client";

import { useTheme } from "next-themes";
import SilkBackground from "@/components/ui/silk-background-animation";

/**
 * Hero silk backdrop with a theme-aware palette.
 * Dark: lime folds on near-black. Light: olive folds on warm paper.
 */
export default function HeroSilk() {
  const { resolvedTheme } = useTheme();
  const isDark = (resolvedTheme ?? "dark") === "dark";

  return (
    <SilkBackground
      color={isDark ? "#96b45a" : "#4a621b"}
      bgFrom={isDark ? "#0a0a0a" : "#f6f5ee"}
      bgTo={isDark ? "#161a10" : "#e9ebdc"}
    />
  );
}
