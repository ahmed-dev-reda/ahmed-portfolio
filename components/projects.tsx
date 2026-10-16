import { Bebas_Neue, Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
export default function Projects() {
  return (
    <section className="py-30 border-b container mx-auto px-4">
      <h2 className={`text-[76px] ${bebas.className} leading-25`}>
        Featured Projects
      </h2>
      <p
        className={`text-[18px] font-light text-[#C7C7C7] ${manrope.className}`}
      >
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>
    </section>
  );
}
