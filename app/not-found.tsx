import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-container/10 blur-3xl"
      />
      <div className="vcard-enter relative z-10 text-center">
        <p className="mb-5 text-[11px] font-semibold uppercase leading-4 tracking-[0.25em] text-outline">
          Error 404
        </p>
        <h1 className="font-display text-[clamp(6rem,20vw,14rem)] font-semibold leading-none tracking-[-0.02em] text-primary">
          404<span className="text-primary-container">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[14px] font-normal leading-[22px] text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved back into the archive.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-container px-5 py-3 text-[14px] font-semibold leading-[22px] text-on-primary transition hover:bg-primary-fixed-dim active:scale-[0.98]"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
