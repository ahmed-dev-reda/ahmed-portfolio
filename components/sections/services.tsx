"use client";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { services, type Service } from "@/components/data";
import Reveal from "@/components/sections/reveal";
import { useI18n } from "@/components/providers/i18n";
import { cn } from "@/lib/utils";

function ServiceCard({ service }: { service: Service }) {
  const { t, locale } = useI18n();
  const Icon = service.icon;
  const description =
    locale === "ar" ? service.descriptionAr : service.description;

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-lime/15 bg-card/40 backdrop-blur-[2px] p-6 sm:p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime/10 text-lime-text transition-colors duration-300 group-hover:bg-lime group-hover:text-[#1a2a00]">
        <Icon className="size-6" aria-hidden />
      </span>

      <h3 className="display-heading mt-6 text-xl leading-tight text-foreground sm:text-2xl">
        {locale === "ar" ? service.titleAr : service.title}
      </h3>

      <p className="mt-4 flex-1 text-sm text-secondary">{description}</p>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-lime-text underline underline-offset-4 "
      >
        {t("service_cta")}
        <FaArrowUpRightFromSquare
          className="size-3 transition-transform duration-300 group-hover:translate-x-2"
          aria-hidden
        />
      </a>
    </article>
  );
}

export default function Services() {
  const { t, locale } = useI18n();

  return (
    <section id="services" className="section-divider scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 md:py-20 lg:px-[3%] lg:py-24">
        <Reveal>
          <h2 className="display-heading text-4xl text-foreground sm:text-5xl md:text-6xl">
            {t("services_heading")}
          </h2>
          <p
            className={cn(
              "max-w-md text-sm text-secondary",
              locale === "ar" ? "mt-10" : "mt-4",
            )}
          >
            {t("services_blurb")}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.05}
              amount={0.5}
              className="h-full"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
