"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Cursor } from "./TerminalWindow";

const LINKS = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6" aria-label="main">
        <Link href="/" className="flex items-center gap-1 text-sm hover:opacity-90">
          <span className="text-term-green">
            {profile.user}@{profile.host}
          </span>
          <span className="text-term-dim">:~$</span>
          <Cursor />
        </Link>

        <ul className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    active ? "text-term-green" : "text-term-dim hover:text-term-fg"
                  }`}
                >
                  <span className="text-term-dim">./</span>
                  {link.label}
                  {active ? <span className="text-term-green"> _</span> : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="text-sm text-term-green sm:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          [ {open ? "close" : "menu"} ]
        </button>
      </nav>

      {open ? (
        <ul id="mobile-menu" className="border-t border-term-border px-4 pb-4 pt-2 sm:hidden">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block py-2 text-sm ${
                    active ? "text-term-green" : "text-term-dim hover:text-term-fg"
                  }`}
                >
                  <span className="text-term-dim">./</span>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </header>
  );
}
