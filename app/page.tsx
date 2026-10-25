import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
<<<<<<< HEAD

=======
import PixelStarsBg from "@/components/sections/pixel-stars-bg";
>>>>>>> 920d3a5699aebe7d2fa8e0f9c92dce214f439110
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function RootPage() {
  return (
    <main className="overflow-x-clip">
<<<<<<< HEAD
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
=======
      {/* Fixed retro starfield, visible after the hero (dark mode only) */}
      <PixelStarsBg />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
>>>>>>> 920d3a5699aebe7d2fa8e0f9c92dce214f439110
    </main>
  );
}
