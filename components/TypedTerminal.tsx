import { profile } from "@/data/profile";
import { Prompt } from "./TerminalWindow";

// Keep the introduction readable immediately, including before hydration.
export function TypedTerminal() {
  return (
    <div className="text-sm leading-7 sm:text-base">
      <p><Prompt>whoami</Prompt></p>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-term-fg sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-base text-term-green sm:text-lg">{profile.role} · Generative AI · ML Infrastructure</p>
      <p className="mt-4 max-w-2xl text-term-fg/90">
        Building intelligent developer tools, scalable evaluation infrastructure,
        and production AI systems.
      </p>
      <p className="mt-3 text-sm text-term-dim">
        Currently engineering AI/ML systems on Juspay&apos;s Xyne team.
      </p>
    </div>
  );
}
