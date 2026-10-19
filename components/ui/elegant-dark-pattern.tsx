// ElegantDarkPattern — dark radial gradient with skewed streaks and a dot
// grid (adapted for this project):
// - removed the remote CDN noise texture (external runtime dependency) — the
//   dot pattern already provides the texture
// - `bg-gradient-radial` (not a core utility in Tailwind v4) replaced with an
//   inline radial-gradient style
// - colours are prop-driven so the pattern can follow the site palette
//   (default is the lime-tuned version used by the hero)
// - the min-h-screen full-page wrapper became a plain fill-its-parent
//   layer so it can be used as a section backdrop

import type React from "react";
import { cn } from "@/lib/utils";

export interface DarkGradientBgProps {
  children?: React.ReactNode;
  className?: string;
  /** Colour of the skewed streaks (any CSS colour). */
  streakColor?: string;
  /** Inner corner of the radial background gradient. */
  bgFrom?: string;
  /** Outer corner of the radial background gradient. */
  bgTo?: string;
  /** 1px dot colour of the pattern overlay. */
  dotColor?: string;
}

const STREAK_MASKS = [
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
];

export default function DarkGradientBg({
  children,
  className,
  streakColor = "#d3e97a",
  bgFrom = "#2e2e2e",
  bgTo = "#0a0a0a",
  dotColor = "rgba(255,255,255,0.5)",
}: DarkGradientBgProps) {
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ backgroundColor: bgTo }}
    >
      <div className="absolute inset-0">
        {/* Radial base gradient with an edge fade mask */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: `radial-gradient(100% 100% at 0% 0%, ${bgFrom} 0%, ${bgTo} 100%)`,
            mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Skewed fading streaks + subtle radial highlight */}
          {STREAK_MASKS.map((mask, index) => (
            <div
              key={index}
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(${streakColor} 0%, rgba(0, 0, 0, 0) 100%)`,
                mask,
                transform: "skewX(45deg)",
              }}
            />
          ))}
        </div>

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Subtle radial highlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(128, 128, 128, 0.08) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
