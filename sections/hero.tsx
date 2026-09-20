"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/legacy/image";
import InfiniteSlider from "../components/infiniteSlider";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2400);
  }, []);
  if (show)
    return (
      <section className="bg-[#111111] overflow-hidden">
        <div
          className=" mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-[1400px] items-center
         gap-12 px-6 py-25 xl:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0 mx-auto max-xl:mx-0"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.95,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.06] bg-[#191919] px-4 py-2"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative size-2 rounded-full bg-green-400" />
              </span>

              <span className="text-sm text-white/60">Available for work</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              className="max-w-xl text-5xl font-medium leading-[1.05]
               tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl max-sm:text-4xl"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.04,
                  },
                },
              }}
            >
              {"Frontend Developer.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                      filter: "blur(8px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/40"
            >
              {[
                "Hi, I’m Ahmed Reda, a frontend developer focused on building modern,",
                "fast, and scalable web experiences using React and Next.js.",
              ].map((line, index) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.5 + index * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 1,
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="mt-8 flex flex-wrap gap-3  "
            >
              <motion.a
                href="#projects"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                    scale: 0.95,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition-colors font-semibold
                 duration-300 hover:border-white/40 hover:bg-white hover:text-black"
              >
                See my work
              </motion.a>

              <motion.a
                href="#contact"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                    scale: 0.95,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold
                 text-sm text-black transition-colors duration-300 hover:bg-white/90"
              >
                Contact Me
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

            {/* Skills Slider */}
            <InfiniteSlider />
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto w-full max-w-[500px]"
          >
            <div className="aspect-square w-full overflow-hidden rounded-3xl bg-[#171717]">
              <Image
                src="/profile.png"
                alt="Ahmed Reda"
                className="h-full w-full object-cover"
                height={500}
                width={500}
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
}
