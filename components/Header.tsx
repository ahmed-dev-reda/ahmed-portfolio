import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(255,219,112,0.15)] bg-[#131313]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-container shadow-[0_0_12px_rgba(255,219,112,0.8)]" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-primary">
            Richard Hanrick
          </span>
          <span className="hidden rounded-lg bg-surface-container-high px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-primary-container sm:inline-block">
            Portfolio vCard
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hover-glow hidden rounded-xl border border-[rgba(255,219,112,0.15)] bg-surface-container px-4 py-2 text-[13px] font-medium leading-[18px] text-primary transition sm:inline-block hover:text-primary-container"
          >
            Get in Touch
          </a>
          <span className="relative block h-8 w-8 overflow-hidden rounded-full border border-[rgba(255,219,112,0.3)] bg-surface-container-high">
            <Image
              src="/profile.png"
              alt="Richard Hanrick"
              fill
              sizes="32px"
              className="object-cover"
            />
          </span>
        </div>
      </div>
    </header>
  );
}
