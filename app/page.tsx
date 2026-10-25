import Intro from "@/components/ui/intro";
import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import PixelStarsBg from "@/components/sections/pixel-stars-bg";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function RootPage() {
  return (
    <main className="relative isolate overflow-x-clip">
      <Intro />

      <PixelStarsBg />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
}
