import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Prompt } from "@/components/TerminalWindow";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "projects — Om Shegokar",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-term-fg sm:text-3xl">
          ~/projects
        </h1>
        <p className="mt-2 text-sm sm:text-base">
          <Prompt>ls -la ~/projects</Prompt>
        </p>
        <p className="mt-1 break-words text-xs text-term-dim">
          total {projects.length} · drwxr-xr-x {projects.map((project) => project.name).join(" ")}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
