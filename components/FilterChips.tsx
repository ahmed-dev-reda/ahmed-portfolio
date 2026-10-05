"use client";

import { portfolioFilters } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export type PortfolioFilter = (typeof portfolioFilters)[number];

interface FilterChipsProps {
  active: PortfolioFilter;
  onChange: (filter: PortfolioFilter) => void;
}

export default function FilterChips({ active, onChange }: FilterChipsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects"
      className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1"
    >
      {portfolioFilters.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium leading-[18px] transition-all duration-300",
              isActive
                ? "bg-primary-container text-on-primary shadow-[0_0_16px_rgba(255,219,112,0.3)]"
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant hover:text-primary"
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
