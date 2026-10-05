import { Code, Pen, Phone, Sparkle } from "@/components/icons";
import type { Service } from "@/data/about";

const iconMap = {
  pen: Pen,
  code: Code,
  phone: Phone,
  sparkle: Sparkle,
} as const;

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  return (
    <article className="hover-glow group rounded-2xl border border-[rgba(255,219,112,0.15)] bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-primary-container transition-transform duration-300 group-hover:scale-105">
          <Icon size={22} />
        </span>
        <span>
          <h4 className="font-display text-[16px] font-semibold leading-6 text-primary transition-colors duration-300 group-hover:text-primary-container">
            {service.title}
          </h4>
          <p className="mt-1.5 text-[13px] font-normal leading-5 text-on-surface-variant">
            {service.description}
          </p>
        </span>
      </div>
    </article>
  );
}
