"use client";

import { motion, type Variants } from "motion/react";
import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const technologies = [
  {
    name: "React",
    description: "UI Library",
    icon: <FaReact size={23} />,
  },
  {
    name: "Next.js",
    description: "React Framework",
    icon: <SiNextdotjs size={21} />,
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript",
    icon: <SiTypescript size={21} />,
  },
  {
    name: "Tailwind CSS",
    description: "CSS Framework",
    icon: <SiTailwindcss size={21} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 2400);
    }, []);
    if (show)
  return (
    <section id="about" className="border-t border-white/[0.06] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.6 }}
          variants={containerVariants}
          className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between"
        >
          {/* Left */}
          <motion.div variants={itemVariants} className="shrink-0 lg:w-[30%]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              About
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-white sm:text-5xl">
              About me.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div variants={containerVariants} className="lg:w-[65%]">
            {/* Main text */}
            <motion.p
              variants={itemVariants}
              className="max-w-3xl text-xl leading-9 text-white/60"
            >
              I’m Ahmed Reda, a frontend developer focused on building modern,
              fast, and scalable web experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl leading-8 text-white/40"
            >
              I enjoy turning ideas and designs into clean, responsive, and
              interactive interfaces. I mainly work with React and Next.js,
              while focusing on performance, accessibility, and a great user
              experience.
            </motion.p>

            {/* Technologies */}
            <motion.div
              variants={containerVariants}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {technologies.map((technology) => (
                <motion.div
                  key={technology.name}
                  variants={itemVariants}
                  className="
                    group flex items-center gap-4
                    rounded-2xl
                    border border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                    transition-colors duration-300
                    hover:border-white/15
                    hover:bg-white/[0.04]
                  "
                >
                  <div
                    className="
                      flex size-11 shrink-0 items-center justify-center
                      rounded-xl
                      border border-white/[0.06]
                      bg-white/[0.03]
                      text-white/50
                      transition-all duration-300
                      group-hover:border-white/15
                      group-hover:bg-white/[0.06]
                      group-hover:text-white
                    "
                  >
                    {technology.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {technology.name}
                    </h3>

                    <p className="mt-1 text-xs text-white/30">
                      {technology.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
