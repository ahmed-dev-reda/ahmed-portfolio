"use client";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { featuredProjects, type FeaturedProject } from "@/components/data";
import Reveal from "@/components/sections/reveal";
import ProjectImage from "@/components/sections/project-image";
import { projectDescription, useI18n } from "@/components/providers/i18n";
import { cn } from "@/lib/utils";

function ProjectRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-muted-line py-3 text-sm">
      <span className="text-foreground">{label}</span>
      <span className="text-secondary">{value}</span>
    </div>
  );
}

export function ProjectLinks({ project }: { project: FeaturedProject }) {
  const { t } = useI18n();
  const linkClasses =
    "inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-lime-text underline underline-offset-4 transition hover:text-white dark:hover:text-foreground";

  return (
    <div className="flex items-center gap-6">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          {t("project_live")}
          <FaArrowUpRightFromSquare className="size-3" aria-hidden />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          {t("project_github")}
          <FaGithub className="size-3.5" aria-hidden />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  const { t, locale } = useI18n();
  const description = projectDescription(
    locale,
    project.description,
    project.descriptionAr,
  );
  return (
    <article
      id={project.id}
      className="grid gap-8 rounded-2xl md:grid-cols-[1fr_1.1fr] md:gap-10"
    >
      {/* Preview card — transparent so the page background shows through */}
      <div className="relative rounded-2xl p-4 transition-colors duration-300 sm:p-0">
        <ProjectImage project={project} />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center">
        <h3 className="display-heading text-2xl leading-tight text-foreground sm:text-3xl ">
          {project.title}
        </h3>

        <p className="mt-4 text-sm text-secondary">{description}</p>

        <div className="my-6">
          <p className="pb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
            {t("project_info")}
          </p>
          <ProjectRow label={t("project_year")} value={project.year} />
          <ProjectRow label={t("project_role")} value={project.role} />
          {project.technologies.length > 0 && (
            <ProjectRow
              label={t("project_stack")}
              value={project.technologies.slice(0, 4).join(", ")}
            />
          )}
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Projects() {
  const { t, locale } = useI18n();
  return (
    <section id="work" className="section-divider scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 md:py-20 lg:px-[3%] lg:py-24">
        <Reveal>
          <h2 className="display-heading text-4xl text-foreground sm:text-5xl md:text-6xl">
            {t("projects_heading")}
          </h2>
          <p
            className={cn(
              "max-w-md text-sm text-secondary",
              locale === "ar" ? "mt-10" : "mt-4",
            )}
          >
            {t("projects_blurb")}
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-20">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} x={index % 2 === 0 ? -40 : 40} y={0}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
