import { resume, juspay } from "@/data/resume";

export function ExperienceTimeline({ preview = false }: { preview?: boolean }) {
  const jobs = preview ? resume.experience.filter((job) => job.org === juspay.org) : resume.experience;
  const groups = [...new Set(jobs.map((job) => job.org))];

  return (
    <div className="space-y-6">
      {groups.map((org) => (
        <article key={org} className="rounded-xl border border-term-border bg-term-surface p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-term-green">{org}</h3>
            {org === juspay.org ? <p className="text-xs text-term-dim">{juspay.period}</p> : null}
          </div>
          <ol className="mt-5 space-y-6 border-l border-term-border pl-4">
            {jobs.filter((job) => job.org === org).map((job) => (
              <li key={`${job.role}-${job.team}`}>
                <h4 className="text-sm font-semibold text-term-fg">{job.team || job.role}</h4>
                {job.team ? <p className="mt-1 text-xs text-term-dim">{job.role}</p> : null}
                {job.period ? <p className="mt-1 text-xs text-term-dim">{job.period}</p> : null}
                <ul className="mt-3 space-y-2 text-sm leading-6 text-term-fg/85">
                  {(preview ? job.highlights || job.bullets.slice(0, 2) : job.bullets).map((bullet) => (
                    <li key={bullet} className="flex gap-2"><span aria-hidden="true" className="text-term-green">▹</span><span>{bullet}</span></li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}
