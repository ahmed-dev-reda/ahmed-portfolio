// SilkBackground — animated silk-flow canvas (adapted for this project):
// - the demo overlay ("silk" headline, corner accent, keyframes) moved to
//   silk-background-demo.tsx; this file is a pure background
// - removed the global `html, body` style overrides and the window-level
//   sizing; the canvas now fills its parent and is prop-driven
// - colours are configurable so the silk can follow the site palette
//   (default is the lime-tuned version used by the hero)
"use client";

import { useEffect, useRef } from "react";

export interface SilkBackgroundProps {
  className?: string;
  /** Silk hue (hex). Channels are scaled by the pattern intensity. */
  color?: string;
  /** Diagonal gradient painted behind the silk folds. */
  bgFrom?: string;
  bgTo?: string;
  /** Flow speed of the waves. */
  speed?: number;
  /** Spatial frequency of the folds. Higher = smaller folds. */
  scale?: number;
  /** Random grain dents in the fabric, roughly 0 to 1. */
  noise?: number;
}

const DEFAULT_COLOR = "#96b45a";

function hexToRgb(hex: string): readonly [number, number, number] {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  const int = Number.parseInt(full, 16);
  return [(int >> 16) & 0xff, (int >> 8) & 0xff, int & 0xff];
}

export default function SilkBackground({
  className,
  color = DEFAULT_COLOR,
  bgFrom = "#0a0a0a",
  bgTo = "#1a1a1a",
  speed = 0.02,
  scale = 2,
  noise = 0.8,
}: SilkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let time = 0;

    const silkRgb = hexToRgb(color);
    const fromRgb = hexToRgb(bgFrom);
    const toRgb = hexToRgb(bgTo);

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent?.clientWidth ?? window.innerWidth;
      canvas.height = parent?.clientHeight ?? window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Simple noise function (from the original component)
    const noiseAt = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const drawFrame = () => {
      const { width, height } = canvas;
      if (width === 0 || height === 0) return;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      const tOffset = speed * time;

      // Sample the pattern on a coarse 2px grid (the original's signature
      // dithered look); the skipped neighbours get the flat gradient colour.
      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;

          let texX = u;
          let texY = v + 0.03 * Math.sin(8.0 * texX - tOffset);

          const pattern = 0.6 + 0.4 * Math.sin(
            5.0 *
              (texX +
                texY +
                Math.cos(3.0 * texX + 5.0 * texY) +
                0.02 * tOffset) +
            Math.sin(20.0 * (texX + texY - 0.1 * tOffset)),
          );

          const randomness = noiseAt(x, y);
          const intensity = Math.max(
            0,
            pattern - (randomness / 15.0) * noise,
          );

          const r = Math.min(255, Math.floor(silkRgb[0] * intensity));
          const g = Math.min(255, Math.floor(silkRgb[1] * intensity));
          const b = Math.min(255, Math.floor(silkRgb[2] * intensity));

          // flat gradient colour for the gaps: diagonal (from -> to)
          const t = (x / width + y / height) / 2;
          const bgR = Math.floor(fromRgb[0] + (toRgb[0] - fromRgb[0]) * t);
          const bgG = Math.floor(fromRgb[1] + (toRgb[1] - fromRgb[1]) * t);
          const bgB = Math.floor(fromRgb[2] + (toRgb[2] - fromRgb[2]) * t);

          // write the sampled pixel (silk) and its 3 neighbours (flat gradient)
          for (let dy = 0; dy < 2; dy++) {
            for (let dx = 0; dx < 2; dx++) {
              const index = ((y + dy) * width + (x + dx)) * 4;
              if (index + 3 < data.length) {
                const isSilk = dx === 0 && dy === 0;
                data[index] = isSilk ? r : bgR;
                data[index + 1] = isSilk ? g : bgG;
                data[index + 2] = isSilk ? b : bgB;
                data[index + 3] = 255;
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animate = () => {
      drawFrame();
      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      // single static frame, no loop
      drawFrame();
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color, bgFrom, bgTo, speed, scale, noise]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "absolute inset-0 h-full w-full"}
      aria-hidden
    />
  );
}
