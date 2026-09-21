import type { ReactNode } from "react";
import { profile } from "@/data/profile";

export function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-term-border bg-term-surface shadow-[0_24px_70px_-20px_rgba(0,0,0,0.75)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-term-border bg-term-raised px-4 py-3">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-term-red/90" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-term-amber/90" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-term-green/90" />
        {title ? <span className="ml-3 truncate text-xs text-term-dim">{title}</span> : null}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function Prompt({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span className={`whitespace-nowrap ${className}`}>
      <span className="text-term-green">
        {profile.user}@{profile.host}
      </span>
      <span className="text-term-dim">:</span>
      <span className="text-term-cyan">~</span>
      <span className="text-term-dim">$ </span>
      {children != null ? <span className="text-term-fg">{children}</span> : null}
    </span>
  );
}

export function Cursor({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`cursor-blink text-term-green ${className}`}>
      ▊
    </span>
  );
}
