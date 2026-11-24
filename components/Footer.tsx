"use client";

import { useRef } from "react";
import { profile } from "@/data/profile";
import { HireMeHint } from "./HireMeHint";
import { TerminalWindow } from "./TerminalWindow";

export function Footer() {
  const input = useRef<HTMLInputElement>(null);
  const viewport = useRef<HTMLDivElement>(null);

  return (
    <footer className="mt-16 border-t border-term-border bg-term-bg">
      <div className="mx-auto max-w-5xl px-4 py-8 text-xs sm:px-6">
        <div
          aria-label="Interactive terminal"
          className="cursor-text"
          onClick={(event) => {
            const target = event.target as HTMLElement;
            if (target.closest("input, button, a") || window.getSelection()?.toString()) return;
            input.current?.focus();
          }}
        >
          <TerminalWindow title="~/terminal — interactive shell">
            <div ref={viewport} className="max-h-80 min-h-24 overflow-y-auto overscroll-contain [scrollbar-color:var(--color-term-border)_transparent]">
              <p className="mb-4 text-term-dim">
                {"// "}© 2026 {profile.name.toLowerCase()} — built with next.js, tailwind &amp; framer-motion
              </p>
              <HireMeHint inputRef={input} scrollRef={viewport} />
            </div>
          </TerminalWindow>
        </div>
      </div>
    </footer>
  );
}
