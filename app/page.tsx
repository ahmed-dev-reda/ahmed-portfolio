import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import KineticGridBg from "@/components/sections/kinetic-grid-bg";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function RootPage() {
  return (
    <main className="overflow-x-clip">
      {/* Fixed interactive grid background, visible after the hero (dark mode only) */}
      <KineticGridBg />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
}
