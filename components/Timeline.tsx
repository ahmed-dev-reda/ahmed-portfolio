import type { TimelineItem } from "@/data/resume";

interface TimelineProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  range: string;
  items: TimelineItem[];
}

export default function Timeline({ icon, title, subtitle, range, items }: TimelineProps) {
  return (
    <section className="rounded-[20px] bg-surface-container-low p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container text-primary-container">
            {icon}
          </span>
          <span>
            <h2 className="font-display text-[24px] font-semibold leading-8 tracking-[-0.01em] text-primary">
              {title}
            </h2>
            <p className="mt-0.5 text-[13px] font-normal leading-5 text-on-surface-variant">
              {subtitle}
            </p>
          </span>
        </div>
        <span className="hidden shrink-0 pt-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-primary-container md:inline-block">
          {range}
        </span>
      </div>

      <div className="relative mt-6 pl-8">
        <span
          aria-hidden
          className="absolute bottom-3 left-2.5 top-3 w-[2px] bg-gradient-to-b from-primary-container via-outline-variant to-transparent"
        />
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <span aria-hidden className="absolute -left-7 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-surface-container-low">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-container shadow-[0_0_8px_rgba(255,219,112,0.8)]" />
              </span>
              <div className="rounded-2xl bg-surface-container p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-primary-container/10 px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-primary-container">
                    {item.date}
                  </span>
                  <span className="text-[13px] font-normal leading-5 text-on-surface-variant">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-[20px] font-semibold leading-7 text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] font-medium leading-[18px] text-primary-container">
                  {item.company}
                </p>
                <p className="mt-2 text-[14px] font-normal leading-[22px] text-on-surface-variant">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-container-high px-2.5 py-1 text-[11px] font-semibold leading-4 tracking-[0.02em] text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
