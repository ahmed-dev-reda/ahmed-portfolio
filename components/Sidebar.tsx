import Image from "next/image";

function DownloadIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

const facts = [
  { label: "Status", value: "Advising Q3/Q4", gold: true },
  { label: "Experience", value: "11+ Years", gold: false },
  { label: "Location", value: "San Francisco, CA", gold: false },
];

export default function Sidebar() {
  return (
    <aside
      className="elev-1 relative overflow-hidden rounded-[20px]
     bg-surface-container-low p-6"
    >
      <div className="relative">
        <div className="h-24 w-24 overflow-hidden rounded-2xl border border-[rgba(255,219,112,0.25)] bg-surface-container-lowest">
          <Image
            src="/profile.png"
            alt="Richard Hanrick portrait"
            width={96}
            height={96}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <p className="mt-5 text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-primary-container">
          Executive Profile
        </p>
        <h2 className="font-display mt-1 text-[20px] font-semibold leading-7 text-primary">
          Richard Hanrick
        </h2>
        <p className="mt-1 text-[13px] font-normal leading-5 text-on-surface-variant">
          Director &amp; Architect of Digital Experiences
        </p>

        <div className="mt-5 rounded-xl bg-surface-container/60 p-4">
          <dl className="flex flex-col gap-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center justify-between gap-3"
              >
                <dt className="text-[13px] font-normal leading-5 text-on-surface-variant">
                  {fact.label}
                </dt>
                <dd
                  className={`flex items-center gap-1.5 text-[13px] font-medium leading-[18px] ${
                    fact.gold ? "text-primary-container" : "text-primary"
                  }`}
                >
                  {fact.gold && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-container shadow-[0_0_8px_rgba(255,219,112,0.9)]" />
                  )}
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <a
          href="/Richard-Hanrick-Dossier.pdf"
          download
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container py-3 text-[14px] font-semibold leading-[22px] text-on-primary transition hover:bg-primary-fixed-dim active:scale-[0.98]"
        >
          <DownloadIcon size={17} />
          Download Full Dossier (.PDF)
        </a>
        <p className="mt-3 text-center text-[12px] font-normal leading-5 text-outline">
          Verified credentials • Updated October 2024
        </p>
      </div>
    </aside>
  );
}
