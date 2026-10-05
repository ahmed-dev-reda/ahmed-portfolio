import AdvisoryCTA from "@/components/AdvisoryCTA";
import SectionHeader from "@/components/SectionHeader";
import SkillBar from "@/components/SkillBar";
import Timeline from "@/components/Timeline";
import type { VCardTab } from "@/components/TabNav";
import { Briefcase, GraduationCap } from "@/components/icons";
import { coreTooling, education, experience, skills } from "@/data/resume";

interface ResumeViewProps {
  activeTab: VCardTab;
  onTabChange: (tab: VCardTab) => void;
}

export default function ResumeView({ activeTab, onTabChange }: ResumeViewProps) {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        badge="Curriculum Vitae"
        title="Resume"
        activeTab={activeTab}
        onTabChange={onTabChange}
      />

      <Timeline
        icon={<Briefcase size={20} />}
        title="Experience"
        subtitle="Eleven years across studios, startups and the Fortune 500"
        range="2013 — Present"
        items={experience}
      />

      <Timeline
        icon={<GraduationCap size={20} />}
        title="Education"
        subtitle="Formal training in interaction, graphics and engineering"
        range="2007 — 2013"
        items={education}
      />

      <section className="rounded-[20px] bg-surface-container-low p-6 md:p-8">
        <h2 className="font-display text-[24px] font-semibold leading-8 tracking-[-0.01em] text-primary">
          Skills &amp; Craft
        </h2>
        <p className="mt-1 text-[13px] font-normal leading-5 text-on-surface-variant">
          A blended practice — equal parts taste, systems thinking and shipping.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-surface-container/40 p-4">
          <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-primary-container">
            Core Tooling
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {coreTooling.map((tool) => (
              <span
                key={tool}
                className="rounded-lg bg-surface-container-high px-3 py-1 text-[11px] font-semibold leading-4 text-on-surface-variant"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryCTA />
    </div>
  );
}
