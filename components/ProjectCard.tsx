import Image from "next/image";
import { useState } from "react";
import { ArrowOutward, Eye } from "@/components/icons";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <article className="group overflow-hidden rounded-[20px] bg-surface-container-high transition-all duration-500 hover:-translate-y-1.5 hover:border-[rgba(255,219,112,0.45)] hover:shadow-[0_0_24px_rgba(255,219,112,0.12)] border border-transparent">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-lowest">
        {imgOk ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br",
              project.fallbackGradient
            )}
          >
            <span className="font-display px-6 text-center text-[20px] font-semibold leading-7 text-primary-container/80">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-surface-container-lowest/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-primary-container text-on-primary shadow-[0_0_24px_rgba(255,219,112,0.5)] transition-transform duration-500 group-hover:scale-100">
            <Eye size={20} />
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-surface-container-lowest/80 px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-primary-container backdrop-blur-md">
          {project.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-[16px] font-semibold leading-6 text-primary transition-colors duration-300 group-hover:text-primary-container">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[13px] font-normal leading-5 text-on-surface-variant">
          {project.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase leading-4 tracking-[0.06em] text-outline">
            {project.label}
          </span>
          <span className="text-primary-container transition-transform duration-300 group-hover:translate-x-1">
            <ArrowOutward size={17} />
          </span>
        </div>
      </div>
    </article>
  );
}
