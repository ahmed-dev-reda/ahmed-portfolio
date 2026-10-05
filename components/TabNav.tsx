"use client";

import { cn } from "@/lib/utils";

export type VCardTab = "Portfolio" | "Resume" | "About" | "Blog" | "Contact";

export const vcardTabs: VCardTab[] = [
  "Portfolio",
  "Resume",
  "About",
  "Blog",
  "Contact",
];

interface TabNavProps {
  active: VCardTab;
  onChange: (tab: VCardTab) => void;
}

export default function TabNav({ active, onChange }: TabNavProps) {
  return (
    <nav
      aria-label="Portfolio sections"
      className="no-scrollbar flex gap-1 overflow-x-auto rounded-xl bg-surface-container-lowest p-1.5"
    >
      {vcardTabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            aria-pressed={isActive}
            className={cn(
              "whitespace-nowrap rounded-lg px-4 py-1.5 text-[14px] font-medium leading-[22px] transition-all duration-300",
              isActive
                ? "bg-primary-container text-on-primary shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
}
