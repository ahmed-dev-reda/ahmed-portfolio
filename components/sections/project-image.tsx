"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiZoomIn } from "react-icons/fi";
import type { FeaturedProject } from "@/components/data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

export default function ProjectImage({
  project,
}: {
  project: FeaturedProject;
}) {
  const [open, setOpen] = useState(false);

  // Lock page scroll and close on Escape while the lightbox is open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={`Open full preview of ${project.title}`}
        onClick={() => setOpen(true)}
        className="group relative mt-2 block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl h-fit"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 768px) 40vw, 60vw"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {/* Theme duotone wash — recolours the shot in the site's lime on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-lime mix-blend-color opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-80"
        />

        {/* Zoom hint */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-[#1a2a00]">
            <FiZoomIn size={18} />
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setOpen(false)}
            aria-modal="true"
            role="dialog"
            aria-label={`${project.title} full preview`}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-[99] flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition hover:bg-lime hover:text-[#1a2a00] sm:right-8 sm:top-8"
            >
              <FiX size={18} />
            </button>

            <motion.figure
              initial={{ scale: 0.88, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{
                scale: 0.94,
                y: 12,
                opacity: 0,
                transition: { duration: 0.25, ease: "easeIn" },
              }}
              transition={{ type: "spring", stiffness: 220, damping: 27 }}
              className="relative w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ">
                <Image
                  src={project.image}
                  alt={`${project.title} full preview`}
                  fill
                  sizes="80vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="flex justify-between items-center ">
                <span className="display-heading text-foreground">
                  {project.title}
                </span>
                <div className="flex flex-wrap items-center gap-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      <FaArrowUpRightFromSquare
                        className="size-5 text-lime hover:text-white"
                        aria-hidden
                      />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      <FaGithub
                        className="size-6 text-lime hover:text-white"
                        aria-hidden
                      />
                    </a>
                  )}
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
