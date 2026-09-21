import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";
import { Prompt, TerminalWindow } from "@/components/TerminalWindow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "resume — Om Shegokar",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-term-fg sm:text-3xl">
          ~/resume<span className="cursor-blink text-term-green">_</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base">
          <Prompt>wget /resume.pdf</Prompt>
        </p>
        <p className="mt-2 text-sm text-term-dim">
          {profile.name} · {profile.role} · {profile.location}
        </p>
        <a
          href="/resume.pdf"
          className="mt-4 inline-flex items-center gap-2 rounded border border-term-green/50 px-4 py-2 text-sm text-term-green transition-colors hover:bg-term-green/10"
        >
          download resume.pdf ↓
        </a>
      </div>

      <div className="space-y-12">
        <section aria-label="experience">
          <h2 className="mb-4 text-lg text-term-fg">
            <span className="text-term-green">$</span> experience
          </h2>
          <div className="space-y-6">
            {resume.experience.map((job, index) => (
              <Reveal key={`${job.org}-${job.role}-${index}`}>
                <article className="rounded-xl border border-term-border bg-term-surface p-5">
                  {job.period ? <p className="text-xs text-term-dim">{job.period}</p> : null}
                  <h3 className="mt-1 text-base text-term-fg">
                    {job.role} <span className="text-term-dim">@</span>{" "}
                    <span className="text-term-green">{job.org}</span>
                  </h3>
                  {job.team || job.location ? (
                    <p className="mt-0.5 text-xs text-term-dim">
                      {[job.team, job.location].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex gap-2 text-sm leading-6 text-term-fg/85"
                      >
                        <span aria-hidden="true" className="shrink-0 text-term-green">
                          ▹
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-label="education">
          <h2 className="mb-4 text-lg text-term-fg">
            <span className="text-term-green">$</span> education
          </h2>
          <div className="space-y-6">
            {resume.education.map((education, index) => (
              <Reveal key={index}>
                <article className="rounded-xl border border-term-border bg-term-surface p-5">
                  {education.period ? <p className="text-xs text-term-dim">{education.period}</p> : null}
                  <h3 className="mt-1 text-base text-term-green">{education.school}</h3>
                  <p className="mt-1 text-sm text-term-fg">
                    {education.degree}
                    {education.gpa ? <span className="text-term-dim"> · {education.gpa}</span> : null}
                  </p>
                  {education.university ? (
                    <p className="mt-0.5 text-xs text-term-dim">{education.university}</p>
                  ) : null}
                  {education.coursework ? (
                    <p className="mt-2 text-xs text-term-dim">
                      coursework: {education.coursework.join(", ")}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-label="skills">
          <h2 className="mb-4 text-lg text-term-fg">
            <span className="text-term-green">$</span> apt list --installed
          </h2>
          <Reveal>
            <div className="space-y-3 rounded-xl border border-term-border bg-term-surface p-5">
              {Object.entries(resume.skills).map(([key, values]) => (
                <div key={key} className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-4">
                  <p className="text-sm text-term-cyan">{key}</p>
                  <p className="text-sm leading-6 text-term-fg/85">{values.join(" · ")}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section aria-label="cover letter">
          <p className="mb-4 text-sm sm:text-base">
            <Prompt>cat cover_letter.txt</Prompt>
          </p>
          <Reveal>
            <TerminalWindow title="cover_letter.txt">
              <div className="space-y-4 text-sm leading-7 text-term-fg/90">
                {resume.coverLetter.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </TerminalWindow>
          </Reveal>
          <p className="mt-4 text-sm">
            <Prompt />
            <a
              href={`mailto:${profile.email}`}
              className="text-term-green underline underline-offset-4 hover:text-term-cyan"
            >
              {profile.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
