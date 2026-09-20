import About from "@/sections/about";
import CTA from "@/sections/cta";
import Footer from "@/sections/footer";

import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";

export default function Home() {
  return (
    <main className="bg-[#111111] text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
