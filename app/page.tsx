import Link from "next/link";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";
import { projects } from "@/data/projects";
import { Prompt, TerminalWindow } from "@/components/TerminalWindow";
import { TypedTerminal } from "@/components/TypedTerminal";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

const capabilities = [
  { label: "LLMs & agents", skills: ["LLM APIs", "Tool Calling", "Persistent retrieval-based memory", "Hugging Face Transformers"] },
  { label: "Inference & evaluation", skills: resume.skills.inference_optimization },
  { label: "Languages", skills: resume.skills.languages },
  { label: "Cloud & infrastructure", skills: ["GCP", "Docker", "PostgreSQL", "Distributed job queues", "S3", "CI/CD"] },
];

const ctaClass = "flex min-h-16 flex-1 flex-col justify-center rounded-lg border border-term-border bg-term-surface px-4 py-3 transition-colors hover:border-term-green/60 hover:bg-term-green/5";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-14 px-4 py-10 sm:px-6 sm:py-14">
      <section aria-label="introduction">
        <TerminalWindow title={`${profile.user}@${profile.host}: ~ — zsh`}>
          <TypedTerminal />
        </TerminalWindow>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a href="/resume.pdf" download="Om-Shegokar-Resume.pdf" className={`${ctaClass} border-term-green/50`}>
            <span className="text-sm font-semibold text-term-green">Download Resume ↓</span>
            <span className="mt-1 text-xs text-term-dim">cat resume.pdf</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={ctaClass}>
            <span className="text-sm font-semibold text-term-green">View GitHub ↗</span>
            <span className="mt-1 text-xs text-term-dim">git log --all</span>
          </a>
          <Link href="/contact" className={ctaClass}>
            <span className="text-sm font-semibold text-term-green">Contact Me →</span>
            <span className="mt-1 text-xs text-term-dim">./contact.sh</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="projects-heading">
        <p className="text-xs sm:text-sm"><Prompt>ls ~/projects</Prompt></p>
        <div className="mb-5 mt-3 flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="projects-heading" className="text-xl font-semibold">Featured engineering projects</h2>
          <Link href="/projects" className="text-sm text-term-green hover:underline">View all projects →</Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} compact />
          ))}
        </div>
      </section>

      <section aria-labelledby="experience-heading">
        <p className="text-xs sm:text-sm"><Prompt>cat ~/experience</Prompt></p>
        <h2 id="experience-heading" className="mb-5 mt-3 text-xl font-semibold">Engineering experience</h2>
        <ExperienceTimeline preview />
        <Link href="/resume" className="mt-5 inline-block text-sm text-term-green hover:underline">Read full experience &amp; resume →</Link>
      </section>

      <section aria-labelledby="capabilities-heading">
        <p className="text-xs sm:text-sm"><Prompt>cat skills.json</Prompt></p>
        <h2 id="capabilities-heading" className="mb-5 mt-3 text-xl font-semibold">Technical capabilities</h2>
        <div className="mb-5 grid gap-5 sm:grid-cols-2">
          {capabilities.map(({ label, skills }) => (
            <div key={label} className="border-l-2 border-term-border pl-4">
              <h3 className="text-sm text-term-cyan">{label}</h3>
              <p className="mt-2 text-sm leading-7 text-term-fg/85">{skills.join(" · ")}</p>
            </div>
          ))}
        </div>
        <TerminalWindow title="neofetch — engineer profile">
          <div className="flex items-start gap-5">
            <pre aria-hidden="true" className="hidden shrink-0 text-sm leading-6 text-term-green/80 sm:block">{"╭────────╮\n│   >_   │\n╰────────╯"}</pre>
            <dl className="grid min-w-0 gap-x-5 gap-y-2 text-xs leading-6 sm:grid-cols-[auto_1fr] sm:text-sm">
              {Object.entries(profile.quickFacts).map(([key, value]) => (
                <div key={key} className="sm:contents">
                  <dt className="text-term-cyan">{key}<span className="text-term-dim">:</span></dt>
                  <dd className="break-words text-term-fg">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </TerminalWindow>
      </section>

      <section aria-labelledby="contact-heading" className="rounded-xl border border-term-green/30 bg-term-surface p-5 sm:p-6">
        <p className="text-xs sm:text-sm"><Prompt>./contact.sh</Prompt></p>
        <h2 id="contact-heading" className="mt-3 text-xl font-semibold">Let&apos;s build useful AI systems.</h2>
        <p className="mt-3 text-sm leading-7 text-term-dim">Open to Applied AI / ML roles across LLM agents, inference, and AI infrastructure.</p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-block break-all text-sm text-term-green underline underline-offset-4">{profile.email}</a>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4 text-sm text-term-green">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub ↗</a>
          <a href={profile.githubOrg} target="_blank" rel="noopener noreferrer" className="hover:underline">engram-node ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn ↗</a>
          <a href="/resume.pdf" download="Om-Shegokar-Resume.pdf" className="hover:underline">Download Resume ↓</a>
        </div>
      </section>
    </div>
  );
}
