"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
const projects = [
  {
    title: "Now CV",
    description:
      "A modern ATS-friendly CV builder that lets users create, customize, and export professional resumes.",
    image: "/now-cv.png",
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind"],
    github: "https://github.com/ahmed-dev-reda/cv-builder",
    live: "https://now-cv.vercel.app/",
  },
  {
    title: "Developer Roadmap",
    description:
      "An Arabic developer roadmap platform that helps beginners follow structured frontend and backend learning paths.",
    image: "/dev-path.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/ahmed-dev-reda/dev-path",
    live: "https://become-a-coder.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -20]);

  return (
    <motion.article
      ref={ref}
      style={{ scale, y }}
      className="
        sticky top-24 mb-10 overflow-hidden
        rounded-[28px]
        border border-white/[0.07]
        bg-[#171717]
        shadow-2xl shadow-black/20
      "
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-green-400" />

          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/30">
            Featured Project
          </span>
        </div>

        <span className="font-mono text-xs text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden bg-[#1b1b1b] p-3 sm:p-5">
        <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl">
          <motion.div
            whileHover={{ scale: 1.035 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-full w-full"
          >
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 900px"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Image overlay */}
          <div
            className="
        pointer-events-none absolute inset-0
        bg-gradient-to-t from-black/25 via-transparent to-transparent
        opacity-0 transition-opacity duration-500
        group-hover:opacity-100
      "
          />

          {/* Project number */}
          <div
            className="
        absolute left-4 top-4
        flex size-9 items-center justify-center
        rounded-full border border-white/10
        bg-black/40 text-xs text-white/70
        backdrop-blur-xl
      "
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-9">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:gap-12">
          {/* Info */}
          <div className="max-w-2xl">
            <h3 className="text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border border-white/[0.07]
                    bg-white/[0.02]
                    px-3 py-1.5
                    text-xs text-white/45
                    transition-colors duration-300
                    hover:border-white/15
                    hover:text-white/70
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-5">
            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="
      group flex items-center gap-2
      text-sm text-white/40
      transition-colors duration-300
      hover:text-white
    "
            >
              <FaGithub
                size={17}
                className="
        transition-transform duration-300
        group-hover:scale-110
      "
              />

              <span className="hidden sm:inline">GitHub</span>
            </a>

            {/* Live Project */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
      group flex items-center gap-2
      rounded-full
      bg-white
      px-5 py-2.5
      text-sm font-medium text-black
      transition-all duration-300
      hover:-translate-y-0.5
      hover:bg-white/90
    "
            >
              View Project
              <ArrowUpRight
                size={16}
                className="
        transition-transform duration-300
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
      "
              />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2400);
  }, []);
  if (show)
    return (
      <section id="projects" className="bg-[#111111]">
        <div className="mx-auto max-w-[1200px] px-6 py-28">
          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(6px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              amount: 1,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-20"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
              Projects
            </p>

            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Things I’ve built.
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/35 lg:text-right">
                A selection of projects where I turned ideas into functional and
                polished digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
