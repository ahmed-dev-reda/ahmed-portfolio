import SectionHeader from "@/components/SectionHeader";
import type { VCardTab } from "@/components/TabNav";

interface PlaceholderViewProps {
  tab: VCardTab;
  badge: string;
  title: string;
  copy: string;
  onTabChange: (tab: VCardTab) => void;
}

export default function PlaceholderView({
  tab,
  badge,
  title,
  copy,
  onTabChange,
}: PlaceholderViewProps) {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        badge={badge}
        title={title}
        activeTab={tab}
        onTabChange={onTabChange}
      />
      <div className="elev-1 flex flex-col items-center rounded-[20px] bg-surface-container px-6 py-14 text-center">
        <span className="h-2 w-2 rounded-full bg-primary-container shadow-[0_0_12px_rgba(255,219,112,0.8)]" />
        <h2 className="font-display mt-4 text-[24px] font-semibold leading-8 tracking-[-0.01em] text-primary">
          Coming soon
        </h2>
        <p className="mt-2 max-w-md text-[14px] font-normal leading-[22px] text-on-surface-variant">
          {copy}
        </p>
        <span className="mt-5 rounded-full bg-primary-container/10 px-4 py-1.5 text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-primary-container">
          In the archive
        </span>
      </div>
    </div>
  );
}
