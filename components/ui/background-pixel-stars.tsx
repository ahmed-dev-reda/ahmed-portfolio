"use client";

import { useTheme } from "next-themes";
import { memo, useCallback, useEffect, useRef } from "react";

// Star palettes for dark and light themes
const DARK_STAR_COLORS = [
  "#FFFFFF",
  "#F4FFD6",
  "#D3E97A",
  "#C2E061",
  "#AAFFAA",
  "#FFFFAA",
  "#9DB54D",
] as const;

const LIGHT_STAR_COLORS = [
  "#35451B",
  "#4A621B",
  "#657D2C",
  "#526A25",
  "#788B43",
  "#3D5130",
] as const;

// Configuration constants
const starDensity = 0.00004;
const twinkleProbability = 0.7;
const minTwinkleSpeed = 2;
const maxTwinkleSpeed = 4;
const pixelSize = 5;
const starRegenerationInterval = 5000;
const percentToRegenerate = 0.15;

// Shooting star configuration
const shootingStarPixelSize = 2;
const DARK_TRAIL_COLOR = "211, 233, 122";
const LIGHT_TRAIL_COLOR = "74, 98, 27";
const targetFps = 16;

type BackgroundStar = {
  x: number;
  y: number;
  color: string;
  baseOpacity: number;
  currentOpacity: number;
  twinkle: boolean;
  twinkleSpeed: number;
  twinkleDirection: number;
  twinkleTimer: number;
};

type TrailPoint = {
  x: number;
  y: number;
  opacity: number;
};

type ShootingStar = {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
  trail: TrailPoint[];
};

type StartPoint = {
  x: number;
  y: number;
  angle: number;
};

export const BackgroundPixelStars = memo(
  function BackgroundPixelStars() {
    const { resolvedTheme } = useTheme();
    const isDark = (resolvedTheme ?? "dark") === "dark";

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const shootingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

    const backgroundStarsRef = useRef<BackgroundStar[]>([]);
    const shootingStarsRef = useRef<ShootingStar[]>([]);
    const lastRenderTimeRef = useRef<number>(0);

    const frameInterval = 1000 / targetFps;

    const starColors = isDark ? DARK_STAR_COLORS : LIGHT_STAR_COLORS;

    const trailColor = isDark ? DARK_TRAIL_COLOR : LIGHT_TRAIL_COLOR;

    const getRandomStartPoint = useCallback((): StartPoint => {
      const x = Math.random() * window.innerWidth;
      const angle = 45 + Math.random() * 90;

      return { x, y: 0, angle };
    }, []);

    const createNewShootingStar = useCallback((): ShootingStar => {
      const { x, y, angle } = getRandomStartPoint();

      return {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * 5 + 8,
        distance: 0,
        trail: [],
      };
    }, [getRandomStartPoint]);

    const makeStar = useCallback(
      (canvas: HTMLCanvasElement): BackgroundStar => {
        const shouldTwinkle = Math.random() < twinkleProbability;

        const gridX =
          Math.floor(Math.random() * (canvas.width / pixelSize)) * pixelSize;

        const gridY =
          Math.floor(Math.random() * (canvas.height / pixelSize)) * pixelSize;

        const colorIndex = Math.floor(Math.random() * starColors.length);

        const baseOpacity = Math.random() * 0.5 + 0.5;

        return {
          x: gridX,
          y: gridY,
          color: starColors[colorIndex]!,
          baseOpacity,
          currentOpacity: baseOpacity,
          twinkle: shouldTwinkle,
          twinkleSpeed:
            minTwinkleSpeed +
            Math.random() * (maxTwinkleSpeed - minTwinkleSpeed),
          twinkleDirection: -1,
          twinkleTimer: 0,
        };
      },
      [starColors],
    );

    const initBackgroundStars = useCallback((): void => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      backgroundStarsRef.current = [];

      const area = canvas.width * canvas.height;
      const numStars = Math.floor(area * starDensity);

      for (let i = 0; i < numStars; i++) {
        backgroundStarsRef.current.push(makeStar(canvas));
      }
    }, [makeStar]);

    const regenerateBackgroundStars = useCallback((): void => {
      if (!canvasRef.current || backgroundStarsRef.current.length === 0) {
        return;
      }

      const canvas = canvasRef.current;

      const numToRegenerate = Math.max(
        1,
        Math.floor(backgroundStarsRef.current.length * percentToRegenerate),
      );

      for (let i = 0; i < numToRegenerate; i++) {
        const randomIndex = Math.floor(
          Math.random() * backgroundStarsRef.current.length,
        );

        backgroundStarsRef.current[randomIndex] = makeStar(canvas);
      }
    }, [makeStar]);

    const drawStill = useCallback((): void => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      backgroundStarsRef.current.forEach((star) => {
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.baseOpacity;

        ctx.fillRect(star.x, star.y, pixelSize, pixelSize);
      });

      ctx.globalAlpha = 1;
    }, []);

    const animateCanvas = useCallback(
      (timestamp: number): void => {
        if (timestamp - lastRenderTimeRef.current < frameInterval) {
          animationFrameRef.current = requestAnimationFrame(animateCanvas);
          return;
        }

        lastRenderTimeRef.current = timestamp;

        const canvas = canvasRef.current;

        if (!canvas) {
          animationFrameRef.current = requestAnimationFrame(animateCanvas);
          return;
        }

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          animationFrameRef.current = requestAnimationFrame(animateCanvas);
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background stars and update twinkling
        backgroundStarsRef.current.forEach((star) => {
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.currentOpacity;

          ctx.fillRect(star.x, star.y, pixelSize, pixelSize);

          if (star.twinkle) {
            star.twinkleTimer += 1 / targetFps;

            if (star.twinkleTimer >= star.twinkleSpeed) {
              star.twinkleTimer = 0;
              star.twinkleDirection *= -1;
            }

            const progress = star.twinkleTimer / star.twinkleSpeed;

            if (progress < 0.5) {
              star.currentOpacity =
                star.twinkleDirection < 0
                  ? star.baseOpacity
                  : star.baseOpacity * 0.3;
            } else {
              star.currentOpacity =
                star.twinkleDirection < 0
                  ? star.baseOpacity * 0.3
                  : star.baseOpacity;
            }
          }
        });

        ctx.globalAlpha = 1;

        // Update shooting stars
        if (shootingStarsRef.current.length) {
          shootingStarsRef.current = shootingStarsRef.current
            .map((star) => {
              const newX =
                star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);

              const newY =
                star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);

              const newDistance = star.distance + star.speed;

              const newTrail = [...star.trail];

              if (newDistance % 8 < star.speed) {
                newTrail.push({
                  x: star.x,
                  y: star.y,
                  opacity: 1,
                });
              }

              const updatedTrail = newTrail
                .map((point) => ({
                  ...point,
                  opacity: point.opacity - 0.1,
                }))
                .filter((point) => point.opacity > 0);

              return {
                ...star,
                x: newX,
                y: newY,
                distance: newDistance,
                trail: updatedTrail,
              };
            })
            .filter(
              (star) =>
                star.x >= -30 &&
                star.x <= window.innerWidth + 30 &&
                star.y >= -30 &&
                star.y <= window.innerHeight + 30,
            );

          // Draw shooting stars
          shootingStarsRef.current.forEach((star) => {
            star.trail.forEach((point) => {
              ctx.save();
              ctx.translate(point.x, point.y);
              ctx.rotate((star.angle * Math.PI) / 180);
              ctx.translate(-point.x, -point.y);

              ctx.fillStyle = `rgba(${trailColor}, ${point.opacity})`;

              ctx.fillRect(
                point.x,
                point.y,
                shootingStarPixelSize,
                shootingStarPixelSize,
              );

              ctx.restore();
            });

            const starWidth = 4;
            const starHeight = 2;

            ctx.save();
            ctx.translate(star.x, star.y);
            ctx.rotate((star.angle * Math.PI) / 180);
            ctx.translate(-star.x, -star.y);

            ctx.fillStyle = isDark ? "#FFFFFF" : "#35451B";

            ctx.globalAlpha = 1;

            for (let y = 0; y < starHeight; y++) {
              for (let x = 0; x < starWidth; x++) {
                if ((x === 0 && y === 1) || (x === 3 && y === 0)) {
                  continue;
                }

                ctx.fillRect(
                  star.x + x * shootingStarPixelSize,
                  star.y + y * shootingStarPixelSize,
                  shootingStarPixelSize,
                  shootingStarPixelSize,
                );
              }
            }

            ctx.restore();
          });
        }

        ctx.globalAlpha = 1;

        animationFrameRef.current = requestAnimationFrame(animateCanvas);
      },
      [frameInterval, isDark, trailColor],
    );

    useEffect(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      initBackgroundStars();

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      drawStill();

      if (prefersReducedMotion) {
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animateCanvas);

      const createShootingStar = (): void => {
        const newStar = createNewShootingStar();

        shootingStarsRef.current = [...shootingStarsRef.current, newStar];

        const randomDelay = Math.random() * 4000 + 2000;

        shootingTimeoutRef.current = setTimeout(
          createShootingStar,
          randomDelay,
        );
      };

      createShootingStar();

      const regenerationInterval = setInterval(
        regenerateBackgroundStars,
        starRegenerationInterval,
      );

      const handleResize = (): void => {
        if (!canvasRef.current) return;

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        initBackgroundStars();
        drawStill();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }

        if (shootingTimeoutRef.current !== null) {
          clearTimeout(shootingTimeoutRef.current);
          shootingTimeoutRef.current = null;
        }

        clearInterval(regenerationInterval);

        window.removeEventListener("resize", handleResize);
      };
    }, [
      animateCanvas,
      createNewShootingStar,
      initBackgroundStars,
      regenerateBackgroundStars,
      drawStill,
    ]);

    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
      />
    );
  },
  () => true,
);

export default BackgroundPixelStars;
