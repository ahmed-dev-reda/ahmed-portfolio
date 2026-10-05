import { Calendar } from "@/components/icons";

export default function AdvisoryCTA() {
  return (
    <section className="elev-1 flex flex-col gap-5 rounded-[20px] bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-primary-container">
          <Calendar size={22} />
        </span>
        <span>
          <h2 className="font-display text-[20px] font-semibold leading-7 text-primary">
            Now advising Q3/Q4 engagements
          </h2>
          <p className="mt-1 text-[13px] font-normal leading-5 text-on-surface-variant">
            Two executive slots remain for portfolio reviews, audits and launches.
          </p>
        </span>
      </div>
      <a
        href="#contact"
        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary-container px-5 py-3 text-[14px] font-semibold leading-[22px] text-on-primary transition hover:bg-primary-fixed-dim active:scale-[0.98]"
      >
        Schedule Briefing
      </a>
    </section>
  );
}
