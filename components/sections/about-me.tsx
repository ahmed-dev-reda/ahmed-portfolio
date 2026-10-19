import { portfolio } from "@/components/data";
import Reveal from "@/components/sections/reveal";

export default function AboutMe() {
  return (
    <section id="about" className="section-divider scroll-mt-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 sm:px-10 md:py-20 md:grid-cols-[1fr_1.7fr] lg:gap-16 lg:px-[3%] lg:py-24">
        <Reveal x={-40} y={0}>
        <h2 className="display-heading text-4xl text-foreground sm:text-5xl md:text-6xl">
          About me
        </h2>
      </Reveal>

        <div>
          <Reveal delay={0.1}>
            <h3 className="display-heading text-2xl leading-snug text-foreground sm:text-3xl">
              {portfolio.intro}
            </h3>

            <p className="mt-6 max-w-2xl text-sm text-secondary sm:text-base">
              {portfolio.about}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
