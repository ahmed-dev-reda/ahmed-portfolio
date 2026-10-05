"use client";

import { useMemo, useState } from "react";
import FilterChips, { type PortfolioFilter } from "@/components/FilterChips";
import MetricStrip from "@/components/MetricStrip";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import type { VCardTab } from "@/components/TabNav";
import { projects } from "@/data/portfolio";

interface PortfolioViewProps {
  activeTab: VCardTab;
  onTabChange: (tab: VCardTab) => void;
}

export default function PortfolioView({ activeTab, onTabChange }: PortfolioViewProps) {
  const [filter, setFilter] = useState<PortfolioFilter>("All Works");

  const visible = useMemo(
    () =>
      filter === "All Works"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        badge="Curated Catalog"
        title="Portfolio"
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      <FilterChips active={filter} onChange={setFilter} />
      <div
        key={filter}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {visible.map((project, i) => (
          <div
            key={project.id}
            className="card-enter"
            style={{ animationDelay: `${Math.min(i * 60, 300)}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <MetricStrip />
    </div>
  );
}
