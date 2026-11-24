import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";
import { Prompt, TerminalWindow } from "@/components/TerminalWindow";
import { JsonBlock } from "@/components/JsonBlock";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "about — Om Shegokar",
};

function commitHash(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash.toString(16).padStart(7, "0").slice(0, 7);
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-term-fg sm:text-3xl">
          ~/about
        </h1>
        <p className="mt-2 text-sm sm:text-base">
          <Prompt>cat README.md</Prompt>
        </p>
      </div>

      <div className="space-y-12">
        <section aria-label="bio">
          <Reveal>
            <TerminalWindow title="~/about/README.md">
              <div className="space-y-4 text-sm leading-7 text-term-fg/90">
                {profile.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </TerminalWindow>
          </Reveal>
        </section>

        <section aria-label="skills">
          <Reveal>
            <p className="mb-4 text-sm sm:text-base">
              <Prompt>cat skills.json</Prompt>
            </p>
            <TerminalWindow title="~/about/skills.json">
              <JsonBlock data={resume.skills} />
            </TerminalWindow>
          </Reveal>
        </section>

        <section aria-label="education">
          <Reveal>
            <p className="mb-4 text-sm sm:text-base">
              <Prompt>git log --education</Prompt>
            </p>
            <TerminalWindow title="git log">
              <div className="space-y-8 text-sm leading-7">
                {resume.education.map((education, index) => (
                  <div key={index}>
                    <p>
                      <span className="text-term-amber">* commit</span>{" "}
                      <span className="text-term-amber">{commitHash(education.degree)}</span>
                      {index === 0 ? <span className="text-term-dim"> (HEAD → main)</span> : null}
                    </p>
                    <p>
                      <span className="text-term-cyan">Author:</span>{" "}
                      <span className="text-term-fg">{education.school}</span>
                    </p>
                    <p>
                      <span className="text-term-cyan">Date:</span>{" "}
                      <span className="text-term-fg">{education.period}</span>
                    </p>
                    <p className="mt-2 font-bold text-term-fg">{education.degree}</p>
                    {education.university ? (
                      <p className="text-term-dim">{education.university}</p>
                    ) : null}
                    {education.gpa ? <p className="text-term-dim">{education.gpa}</p> : null}
                    {education.coursework ? (
                      <p className="text-term-dim">coursework: {education.coursework.join(", ")}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
