"use client";

import { useEffect, useState } from "react";
import { Cursor, Prompt } from "./TerminalWindow";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const SCRIPT = [
  "om shegokar, ai/ml engineer.",
  "product solution engineer on the xyne team at juspay — building llm evaluation platforms, inference optimization, and agentic developer tooling.",
  "previously shipped checkout for 125+ d2c brands on the breeze team.",
  "resume and contact links are available.",
];

const TOTAL_CHARS = SCRIPT.reduce((total, line) => total + line.length, 0);

export function TypedTerminal() {
  const reduced = usePrefersReducedMotion();
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let typed = 0;
    const id = setInterval(() => {
      typed += 1;
      setChars(typed);
      if (typed >= TOTAL_CHARS) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [reduced]);

  const shown = reduced ? TOTAL_CHARS : chars;

  const lines: string[] = [];
  let remaining = shown;
  for (const line of SCRIPT) {
    if (remaining <= 0) break;
    lines.push(line.slice(0, remaining));
    remaining -= line.length;
  }
  const done = shown >= TOTAL_CHARS;

  return (
    <div className="text-sm leading-7 sm:text-base sm:leading-8" aria-label="terminal introduction">
      <span className="sr-only">{SCRIPT.join(" ")}</span>
      <div aria-hidden="true">
        {lines.map((line, index) => (
          <div key={index} className="flex gap-2">
            <span className="shrink-0">
              <Prompt />
            </span>
            <span className="text-term-fg">{line}</span>
            {index === lines.length - 1 && !done ? <Cursor /> : null}
          </div>
        ))}
        {done ? (
          <div className="flex gap-2">
            <span className="shrink-0">
              <Prompt />
            </span>
            <Cursor />
          </div>
        ) : null}
      </div>
    </div>
  );
}
