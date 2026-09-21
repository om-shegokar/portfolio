import Link from "next/link";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";
import { Prompt, TerminalWindow } from "@/components/TerminalWindow";
import { TypedTerminal } from "@/components/TypedTerminal";
import { Reveal } from "@/components/Reveal";

const ASCII_LOGO = [
  "╭──────────────────╮",
  "│                  │",
  "│        >_        │",
  "│                  │",
  "╰──────────────────╯",
  "══════════════════",
].join("\n");

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
      <section aria-label="introduction">
        <Reveal>
          <TerminalWindow title={`${profile.user}@${profile.host}: ~ — zsh`}>
            <TypedTerminal />
          </TerminalWindow>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/resume" className="text-term-green hover:underline">
              cat resume.pdf
            </Link>
            <Link href="/contact" className="text-term-green hover:underline">
              ./contact.sh
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-term-green hover:underline"
            >
              github ↗
            </a>
          </div>
        </Reveal>
      </section>

      <section aria-label="quick facts">
        <Reveal>
          <TerminalWindow title="neofetch">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
              <pre
                aria-hidden="true"
                className="shrink-0 overflow-x-auto text-xs leading-5 text-term-green/80"
              >
                {ASCII_LOGO}
              </pre>
              <div className="min-w-0 text-sm leading-7">
                <p className="text-term-green">
                  {profile.user}@{profile.host}
                </p>
                <p className="text-term-dim">------------------</p>
                {Object.entries(profile.quickFacts).map(([key, value]) => (
                  <p key={key} className="break-words">
                    <span className="text-term-cyan">{key}</span>
                    <span className="text-term-dim">: </span>
                    <span className="text-term-fg">{value}</span>
                  </p>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </Reveal>
      </section>

      <section aria-label="experience preview">
        <Reveal>
          <p className="text-sm sm:text-base">
            <Prompt>ls ~/experience</Prompt>
          </p>
          <ul className="mt-4 space-y-3">
            {resume.experience.slice(0, 3).map((job, index) => (
              <li
                key={`${job.org}-${job.role}-${index}`}
                className="flex flex-col justify-between gap-1 border-l-2 border-term-border pl-4 sm:flex-row sm:items-baseline"
              >
                <span className="text-sm text-term-fg">
                  {job.role} <span className="text-term-dim">@</span>{" "}
                  <span className="text-term-green">{job.org}</span>
                  {job.team ? <span className="text-term-dim"> ({job.team})</span> : null}
                </span>
                {job.period ? <span className="shrink-0 text-xs text-term-dim">{job.period}</span> : null}
              </li>
            ))}
          </ul>
          <Link
            href="/resume"
            className="mt-5 inline-block text-sm text-term-green hover:underline"
          >
            → full resume + cover letter
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
