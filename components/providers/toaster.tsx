"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

/**
 * Sonner host that follows the active site theme.
 * Rendered once from the root layout.
 */
export default function AppToaster() {
  const { resolvedTheme } = useTheme();
  const isDark = (resolvedTheme ?? "dark") === "dark";

  return (
    <Toaster
      position="bottom-right"
      theme={isDark ? "dark" : "light"}
      toastOptions={{
        style: isDark
          ? {
              background: "#1a1a1a",
              border: "1px solid rgba(211, 233, 122, 0.25)",
              color: "#ffffff",
            }
          : {
              background: "#ffffff",
              border: "1px solid rgba(90, 125, 0, 0.25)",
              color: "#17181a",
            },
      }}
    />
  );
}
