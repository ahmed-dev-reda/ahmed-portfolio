import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import PixelStarsBg from "@/components/sections/pixel-stars-bg";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";

export default function RootPage() {
  return (
    <main className="relative isolate overflow-x-clip">
      <PixelStarsBg />

      <div className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
}
