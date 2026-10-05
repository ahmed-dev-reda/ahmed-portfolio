import TabNav, { type VCardTab } from "./TabNav";

interface SectionHeaderProps {
  badge: string;
  title: string;
  activeTab: VCardTab;
  onTabChange: (tab: VCardTab) => void;
}

export default function SectionHeader({
  badge,
  title,
  activeTab,
  onTabChange,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <span className="inline-flex w-fit rounded-lg bg-surface-container-high px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-primary-container">
          {badge}
        </span>
        <TabNav active={activeTab} onChange={onTabChange} />
      </div>
      <div>
        <h1 className="font-display text-[40px] font-semibold leading-[52px] tracking-[-0.02em] text-primary">
          {title}
        </h1>
        <div className="mt-3 flex items-center gap-1.5" aria-hidden>
          <span className="gold-underline-bar animate-glow-pulse h-1.5 w-12 rounded-full bg-primary-container" />
          <span className="h-1.5 w-2 rounded-full bg-primary-container/40" />
          <span className="h-1.5 w-1 rounded-full bg-primary-container/20" />
        </div>
      </div>
    </div>
  );
}
