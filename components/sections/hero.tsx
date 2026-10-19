import Image from "next/image";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { portfolio } from "@/components/data";
import Reveal from "@/components/sections/reveal";
import HeroPattern from "@/components/sections/hero-pattern";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Elegant dark pattern backdrop, tuned to the site palette */}
      <div className="absolute inset-0" aria-hidden>
        <HeroPattern />
      </div>
      {/* Fade the edges out so the shader blends into the page background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-16 sm:px-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-[3%] lg:py-24">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <h1 className="display-heading text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Hi, I am
              <br />
              {portfolio.name}.
            </h1>

            <p className="mt-6 max-w-md text-sm text-secondary sm:text-base">
              {portfolio.intro}
            </p>

            <div className="mt-8 flex items-center gap-4 sm:gap-5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#1a2a00] transition hover:bg-lime-hover"
              >
                Contact me
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
