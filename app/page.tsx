import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import DataRainBg from "@/components/sections/data-rain-bg";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function RootPage() {
  return (
    <main className="overflow-x-clip">
      {/* Fixed particle background, visible after the hero */}
      <DataRainBg />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
}
