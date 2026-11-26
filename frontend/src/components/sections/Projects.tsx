import type { Ref } from "react";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { projects } from "@/data/projects";
import { publicAssetPath } from "@/lib/assets";

type ProjectsProps = {
  sectionRef: Ref<HTMLElement>;
};

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.15 3.42 1.52.1-.73.39-1.23.7-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.55.23 2.69.12 2.98.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.75 1.03.75 2.08v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export function Projects({ sectionRef }: ProjectsProps) {
  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter(
    (project) => project !== featuredProject,
  );

  return (
    <Section sectionRef={sectionRef} id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've built."
          description="A selection of products and applications spanning SaaS, finance, commerce, systems and academic tools."
        />

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2">
          <article className="featured-project flex flex-col rounded-[1.5rem] border border-[var(--color-border)] bg-[#e7e9ff] p-5 text-[#171717] sm:p-7 md:row-span-2">
            <div className="flex items-center justify-between text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#62647b]">
              <span>Featured project</span>
              <span>01</span>
            </div>

            {featuredProject.image ? (
              <div className="mt-5 overflow-hidden rounded-2xl bg-white/60 p-3 sm:p-4">
                <img
                  src={publicAssetPath(featuredProject.image)}
                  alt={`${featuredProject.name} application screenshot`}
                  className="aspect-[16/10] w-full rounded-xl object-cover object-top shadow-lg"
                />
              </div>
            ) : null}

            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {featuredProject.name}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#55566a]">
                {featuredProject.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-[#c7c9e4] bg-white/50 px-3 py-1.5 text-xs text-[#42445a]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-[#303147]">
                {featuredProject.liveUrl ? (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium hover:underline"
                  >
                    Live site
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}

                {featuredProject.githubUrl ? (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <GithubIcon size={15} />
                    Source
                  </a>
                ) : (
                  <span className="text-xs text-[#696a7e]">
                    Private source code
                  </span>
                )}
              </div>
            </div>
          </article>

          {otherProjects.map((project, index) => (
            <article
              key={project.name}
              className="flex min-h-[300px] flex-col rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7"
            >
              <div className="flex items-center justify-between text-[0.68rem] tracking-[0.16em] text-[var(--color-muted)]">
                <span>Project</span>
                <span>{String(index + 2).padStart(2, "0")}</span>
              </div>

              {project.image ? (
                <img
                  src={publicAssetPath(project.image)}
                  alt={`${project.name} application screenshot`}
                  loading="lazy"
                  className="mt-4 aspect-[16/9] w-full rounded-xl border border-[var(--color-border)] object-cover object-top"
                />
              ) : (
                <div className="mt-4 flex aspect-[16/9] items-center justify-center rounded-xl bg-[var(--color-bg)]">
                  <span className="display text-3xl text-[var(--color-muted)]">
                    {project.name}
                  </span>
                </div>
              )}

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                {project.name}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                {project.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[0.7rem] text-[var(--color-muted)]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              {project.liveUrl || project.githubUrl ? (
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-link"
                    >
                      Live site
                      <ArrowUpRight size={14} />
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-link"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  ) : null}
                </div>
              ) : (
                <p className="mt-5 text-xs text-[var(--color-muted)]">
                  Source code available on request
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
