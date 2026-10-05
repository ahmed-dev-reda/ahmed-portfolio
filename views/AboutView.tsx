import ClientLogos from "@/components/ClientLogos";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import type { VCardTab } from "@/components/TabNav";
import { services, testimonials } from "@/data/about";

interface AboutViewProps {
  activeTab: VCardTab;
  onTabChange: (tab: VCardTab) => void;
}

export default function AboutView({ activeTab, onTabChange }: AboutViewProps) {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        badge="Executive Portfolio"
        title="About Me"
        activeTab={activeTab}
        onTabChange={onTabChange}
      />

      <div className="flex flex-col gap-4 text-[16px] font-normal leading-[26px] text-on-surface-variant">
        <p>
          I’m Richard Hanrick — a design director operating at the intersection
          of luxury craft and systems engineering. For eleven years I’ve helped
          executive teams turn sprawling products into coherent, cinematic
          portfolios that boards remember and customers love.
        </p>
        <p>
          My practice pairs archival attention to detail with modern front-end
          rigor: token-driven systems, motion languages and launch operations
          that hold up from first pitch to the hundredth release. When I’m not
          advising, I’m prototyping configurators, studying watch dials and
          documenting the craft.
        </p>
      </div>

      <section>
        <h2 className="font-display text-[24px] font-semibold leading-8 tracking-[-0.01em] text-primary">
          What I Do
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-[24px] font-semibold leading-8 tracking-[-0.01em] text-primary">
          Kind Words
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-[24px] font-semibold leading-8 tracking-[-0.01em] text-primary">
          Selected Clients
        </h2>
        <div className="mt-4">
          <ClientLogos />
        </div>
      </section>
    </div>
  );
}
