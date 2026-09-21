import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

const CHIP_STYLES = [
  "border-term-green/40 bg-term-green/5 text-term-green",
  "border-term-cyan/40 bg-term-cyan/5 text-term-cyan",
  "border-term-amber/40 bg-term-amber/5 text-term-amber",
] as const;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-term-border bg-term-surface p-5 transition-colors hover:border-term-green/40">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-base">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-green hover:underline"
              >
                {project.name} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="text-term-green">{project.name}</span>
            )}
          </h3>
          {project.period ? <span className="text-xs text-term-dim">{project.period}</span> : null}
        </div>

        <p className="mt-1 truncate text-xs text-term-dim">~/projects/{project.name}</p>
        <p className="mt-3 text-sm leading-6 text-term-fg">{project.tagline}</p>

        <ul className="mt-3 space-y-2">
          {project.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex gap-2 text-sm leading-6 text-term-fg/85">
              <span aria-hidden="true" className="shrink-0 text-term-green">
                ▹
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tags.map((tag, tagIndex) => (
            <li
              key={tag}
              className={`rounded border px-2 py-0.5 text-[11px] ${CHIP_STYLES[(tagIndex + index) % CHIP_STYLES.length]}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
