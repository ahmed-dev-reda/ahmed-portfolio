import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { featuredProjects, type FeaturedProject } from "@/components/data";
import Reveal from "@/components/sections/reveal";
import ProjectImage from "@/components/sections/project-image";

function ProjectRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-muted-line py-3 text-sm">
      <span className="text-white">{label}</span>
      <span className="text-secondary">{value}</span>
    </div>
  );
}

export function ProjectLinks({ project }: { project: FeaturedProject }) {
  const linkClasses =
    "inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-lime underline underline-offset-4 transition hover:text-white";

  return (
    <div className="mt-5 flex flex-wrap items-center gap-6">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          Live demo
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
          See on GitHub
          <FaGithub className="size-3.5" aria-hidden />
        </a>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  return (
    <article
      id={project.id}
      className="grid gap-8 rounded-2xl md:grid-cols-[1fr_1.1fr] md:gap-10"
    >
      {/* Preview card — transparent so the page background shows through */}
      <div className="relative rounded-2xl p-4 transition-colors duration-300 hover:border-[#484848] sm:p-6">
        {project.category && (
          <span className="absolute -top-3 left-6 z-10 rounded-full bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#1a2a00]">
            {project.category}
          </span>
        )}

        <ProjectImage project={project} />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center">
        <h3 className="display-heading text-2xl leading-tight text-white sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 text-sm text-secondary">{project.description}</p>

        <div className="mt-6">
          <p className="pb-3 text-[11px] font-bold uppercase tracking-widest text-white">
            Project info
          </p>
          <ProjectRow label="Year" value={project.year} />
          <ProjectRow label="Role" value={project.role} />
          {project.technologies.length > 0 && (
            <ProjectRow
              label="Stack"
              value={project.technologies.slice(0, 5).join(", ")}
            />
          )}
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-divider scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 md:py-20 lg:px-[3%] lg:py-24">
        <Reveal>
          <h2 className="display-heading text-4xl text-white sm:text-5xl md:text-6xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-md text-sm text-secondary">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-20">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} x={index % 2 === 0 ? -40 : 40} y={0}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
