"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { portfolio } from "@/components/data";
import Reveal from "@/components/sections/reveal";
import { useI18n } from "@/components/providers/i18n";

export default function Hero() {
  const { t, locale } = useI18n();
  const name = locale === "ar" ? portfolio.nameAr : portfolio.name;
  const intro =
    locale === "ar" ? (portfolio.introAr ?? portfolio.intro) : portfolio.intro;
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-16 
      sm:px-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-[3%] lg:py-24"
      >
        {/* Text */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <h1 className="display-heading text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              {t("hero_hi")}
              <br />
              {name}.
            </h1>

            <p className="mt-6 max-w-md text-sm text-secondary sm:text-base">
              {intro}
            </p>

            <div className="mt-8 flex items-center gap-4 sm:gap-5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#1a2a00] transition hover:bg-lime-hover"
              >
                {t("hero_cta")}
                <FaArrowDownLong className="size-3.5" aria-hidden />
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={portfolio.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition hover:bg-lime hover:text-[#1a2a00]"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href={portfolio.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition hover:bg-lime hover:text-[#1a2a00]"
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2">
          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-[#1a1a1a] sm:max-w-lg lg:max-w-none">
              <Image
                src={portfolio.profileImage}
                alt={`${portfolio.name} portrait`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 32rem, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
