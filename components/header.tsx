import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
export default function Header() {
  return (
    <nav className="flex justify-between items-center container mx-auto p-4">
      <a href="#" className={`${bebas.className} text-[32px]`}>
        Ahmed Reda
      </a>
      <ul className="flex gap-6">
        <li>
          <a href="#work" className="">
            Work
          </a>
        </li>
        <li>
          <a href="#about" className="">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
