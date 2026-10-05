import type { Testimonial } from "@/data/about";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="hover-glow flex flex-col rounded-2xl border border-[rgba(255,219,112,0.15)] bg-[#181818] p-5">
      <blockquote className="flex-1 text-[13px] font-normal italic leading-5 text-on-surface-variant">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-[rgba(255,219,112,0.12)] pt-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-container-high text-[12px] font-semibold text-primary-container">
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-[13px] font-medium leading-[18px] text-primary">
            {testimonial.name}
          </span>
          <span className="block text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-outline">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
