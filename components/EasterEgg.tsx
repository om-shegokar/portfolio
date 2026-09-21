"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Cursor, TerminalWindow } from "./TerminalWindow";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export const HIRE_ME_EVENT = "portfolio:hire-me";

const SEQUENCE = "sudo hire-me";

type LineKind = "sys" | "cmd" | "out";
type Line = { text: string; kind: LineKind };

const SCRIPT: Line[] = [
  { text: "[sudo] password for visitor: ********", kind: "sys" },
  { text: "access granted — executing hire-me.sh", kind: "sys" },
  { text: "whoami", kind: "cmd" },
  { text: `${profile.name.toLowerCase()} — ${profile.role.toLowerCase()} @ juspay (xyne)`, kind: "out" },
  { text: "cat availability.txt", kind: "cmd" },
  { text: "open to ai/ml engineering opportunities — bengaluru / pune / remote", kind: "out" },
  { text: `mail -s "let's talk" ${profile.email}`, kind: "cmd" },
  { text: "composing new message...", kind: "out" },
  { text: "[hire-me.sh completed in 0.42s — exit code 0]", kind: "sys" },
];

const KIND_CLASS: Record<LineKind, string> = {
  sys: "text-term-amber",
  cmd: "text-term-fg",
  out: "text-term-dim",
};

export function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(0);
  const reduced = usePrefersReducedMotion();
  const buffer = useRef("");

  // Detect the typed sequence anywhere + the footer hint's custom event.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key.length !== 1) return;
      buffer.current = (buffer.current + event.key).slice(-SEQUENCE.length);
      if (buffer.current === SEQUENCE) {
        buffer.current = "";
        setShown(1);
        setOpen(true);
      }
    }
    function onTrigger() {
      setShown(1);
      setOpen(true);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(HIRE_ME_EVENT, onTrigger);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(HIRE_ME_EVENT, onTrigger);
    };
  }, []);

  // Reveal the fake output line by line.
  useEffect(() => {
    if (!open || reduced) return;
    let revealed = 1;
    const id = setInterval(() => {
      revealed += 1;
      setShown(revealed);
      if (revealed >= SCRIPT.length) clearInterval(id);
    }, 420);
    return () => clearInterval(id);
  }, [open, reduced]);

  // Escape closes the overlay.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  const visibleCount = reduced ? SCRIPT.length : Math.max(shown, 1);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="hire-me.sh"
        className="w-full max-w-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <TerminalWindow title="hire-me.sh — /bin/bash">
          <div className="min-h-64 space-y-1 text-sm leading-7">
            {SCRIPT.slice(0, visibleCount).map((line, index) => (
              <p key={index} className={KIND_CLASS[line.kind]}>
                {line.kind === "cmd" ? (
                  <>
                    <span className="text-term-green">$ </span>
                    {line.text}
                  </>
                ) : (
                  line.text
                )}
              </p>
            ))}
            {visibleCount < SCRIPT.length ? (
              <Cursor />
            ) : (
              <p className="pt-3">
                <span className="text-term-green">$ </span>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-term-cyan underline decoration-dotted underline-offset-4 hover:text-term-green"
                >
                  cd /contact → open the channel
                </Link>
              </p>
            )}
          </div>
        </TerminalWindow>
        <p className="mt-3 text-center text-xs text-term-dim">esc or click outside to close</p>
      </div>
    </div>
  );
}
