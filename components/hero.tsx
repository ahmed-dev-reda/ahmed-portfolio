import Image from "next/legacy/image";
import { LuGithub, LuLinkedin } from "react-icons/lu";

import { Bebas_Neue, Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
export default function Hero() {
  return (
    <section className="flex items-center py-30 border-b">
      <div className="container mx-auto flex items-center justify-between gap-30">
        <section>
          <h1 className={`text-[101px] ${bebas.className} leading-25`}>
            HI, I AM <br /> AHMED REDA
          </h1>
          <p
            className={`text-[18px] font-light text-[#C7C7C7] ${manrope.className}`}
          >
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </p>
          <div className="flex items-center gap-4 mt-10">
            <a
              href="#contact"
              className="bg-[#D3E97A] p-3 text-black flex items-center gap-4 w-fit rounded-full font-medium"
            >
              Contact me <div className="rounded-full bg-black size-2" />
            </a>
            <a
              href=""
              className="rounded-full p-3 bg-[#222222] text-[#D3E97A] text-lg"
            >
              <LuLinkedin />
            </a>
            <a
              href=""
              className="rounded-full p-3 bg-[#222222] text-[#D3E97A] text-lg"
            >
              <LuGithub />
            </a>
          </div>
        </section>
        <section>
          <div className="rounded-lg w-fit">
            <Image
              src={"/profile.jpg"}
              alt="Photo"
              width={800}
              height={800}
              className="object-cover rounded-lg"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
