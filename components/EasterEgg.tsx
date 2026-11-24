"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type LineKind = "sys" | "cmd" | "out";
type Line = { text: string; kind: LineKind };

const SCRIPT: Line[] = [
  { text: "[sudo] password for visitor: ********", kind: "sys" },
  { text: "access granted — executing hire-me.sh", kind: "sys" },
  { text: "whoami", kind: "cmd" },
  { text: `${profile.name.toLowerCase()} — ${profile.role.toLowerCase()} @ juspay (xyne)`, kind: "out" },
  { text: "cat availability.txt", kind: "cmd" },
  { text: "open to ai/ml engineering opportunities — pune, india", kind: "out" },
  { text: `mail -s "let's talk" ${profile.email}`, kind: "cmd" },
  { text: "composing new message...", kind: "out" },
  { text: "[hire-me.sh completed in 0.42s — exit code 0]", kind: "sys" },
];

const KIND_CLASS: Record<LineKind, string> = {
  sys: "text-term-amber",
  cmd: "text-term-fg",
  out: "text-term-dim",
};

export function EasterEgg({ onProgress }: { onProgress: () => void }) {
  const [shown, setShown] = useState(1);
  const reduced = usePrefersReducedMotion();
  const visibleCount = reduced ? SCRIPT.length : shown;

  useEffect(() => {
    if (reduced) return;
    let revealed = 1;
    const id = setInterval(() => {
      revealed += 1;
      setShown(revealed);
      if (revealed >= SCRIPT.length) clearInterval(id);
    }, 420);
    return () => clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    onProgress();
  }, [visibleCount, onProgress]);

  return (
    <div role="log" aria-label="hire-me.sh output" className="space-y-1 break-words text-sm leading-7">
      {SCRIPT.slice(0, visibleCount).map((line, index) => (
        <p key={index} className={KIND_CLASS[line.kind]}>
          {line.kind === "cmd" ? <span className="text-term-green">$ </span> : null}
          {line.text}
        </p>
      ))}
      {visibleCount < SCRIPT.length ? (
        <p className="text-term-dim">Running hire-me.sh…</p>
      ) : (
        <p className="pt-3">
          <span className="text-term-green">$ </span>
          <Link href="/contact" className="cursor-pointer text-term-cyan underline decoration-dotted underline-offset-4 hover:text-term-green">
            cd /contact → open the channel
          </Link>
        </p>
      )}
    </div>
  );
}
