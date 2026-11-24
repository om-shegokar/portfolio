import Link from "next/link";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

const CHIP_STYLES = [
  "border-term-green/40 bg-term-green/5 text-term-green",
  "border-term-cyan/40 bg-term-cyan/5 text-term-cyan",
  "border-term-amber/40 bg-term-amber/5 text-term-amber",
] as const;

export function ProjectCard({ project, index, compact = false }: { project: Project; index: number; compact?: boolean }) {
  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <article id={project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="flex h-full flex-col rounded-xl border border-term-border bg-term-surface p-5 transition-colors hover:border-term-green/40">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold">
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

        <p className="mt-1 truncate text-xs text-term-dim">~/projects/{project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}</p>
        <p className="mt-3 text-sm leading-6 text-term-fg">{project.tagline}</p>

        {project.problem ? (
          <dl className="mt-4 space-y-3 text-sm leading-6">
            {[["Problem", project.problem], ["Architecture", project.architecture], ["Result", project.result]].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs text-term-cyan">{label}</dt>
                <dd className="mt-1 text-term-fg/85">{value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        <ul className="mt-3 space-y-2">
          {(compact ? [] : project.bullets).map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex gap-2 text-sm leading-6 text-term-fg/85">
              <span aria-hidden="true" className="shrink-0 text-term-green">
                ▹
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 text-xs text-term-green hover:underline">
            {project.githubLabel || "View on GitHub ↗"}<span className="sr-only"> {project.name}</span>
          </a>
        ) : null}
        {compact ? (
          <Link href={`/projects#${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="mt-4 text-xs text-term-green hover:underline">
            Project details →<span className="sr-only"> {project.name}</span>
          </Link>
        ) : null}
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
