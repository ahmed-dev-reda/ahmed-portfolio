import BackgroundPixelStars from "@/components/ui/background-pixel-stars";

/**
 * Fixed full-viewport pixel-starfield background.
 * Invisible over the hero, fades in after scrolling past it, and — like all
 * post-hero effects — is only rendered in dark mode.
 */
export default function PixelStarsBg() {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-400 ease opacity-100`}
    >
      <BackgroundPixelStars />
    </div>
  );
}
