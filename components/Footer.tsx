import { profile } from "@/data/profile";
import { Prompt } from "./TerminalWindow";
import { HireMeHint } from "./HireMeHint";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-term-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-8 text-xs sm:px-6">
        <p className="text-term-fg">
          <Prompt>exit</Prompt>
        </p>
        <p className="text-term-dim">
          © 2026 {profile.name.toLowerCase()} — built with next.js, tailwind &amp; framer-motion
        </p>
        <HireMeHint />
      </div>
    </footer>
  );
}
