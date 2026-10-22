import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";

import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function RootPage() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
}
