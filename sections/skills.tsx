"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";

import { skills } from "@/data/data";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const skillVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.94,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2400);
  }, []);
  if (show)
    return (
      <section id="skills" className="bg-[#141313] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-[900px] text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ amount: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-5 w-fit rounded-full border border-white/[0.06] bg-[#191919] px-3 py-1.5"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
              Tech Stack
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(6px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ amount: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl font-light tracking-[-0.04em] text-white sm:text-5xl"
          >
            Tools I Build With
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ amount: 0.7 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-4 max-w-[430px] text-lg leading-7 text-white/40"
          >
            A curated set of technologies I rely on to build modern web
            experiences.
          </motion.p>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            className="mx-auto mt-10 flex max-w-[720px] flex-wrap justify-center gap-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="
                group flex h-14 items-center gap-2.5
                rounded-full
                border border-white/[0.06]
                bg-[#181818]
                px-5
                transition-colors duration-300
                hover:border-white/15
                hover:bg-white/[0.05]
              "
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="
                  object-contain
                  opacity-60
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:opacity-100
                "
                />

                <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
}
