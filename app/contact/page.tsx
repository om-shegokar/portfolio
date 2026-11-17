import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Prompt, TerminalWindow } from "@/components/TerminalWindow";
import { ContactPanel } from "@/components/ContactPanel";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "contact — Om Shegokar",
};

export default function ContactPage() {
  const socials = [
    { label: "engram-node", detail: "github.com/engram-node", href: profile.githubOrg, external: true },
    {
      label: "github",
      detail: profile.github.replace("https://", ""),
      href: profile.github,
      external: true,
    },
    {
      label: "linkedin",
      detail: profile.linkedin.replace("https://", ""),
      href: profile.linkedin,
      external: true,
    },
    {
      label: "phone",
      detail: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      external: false,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-term-fg sm:text-3xl">
          ~/contact
        </h1>
        <p className="mt-2 text-sm sm:text-base">
          <Prompt>ls -la ~/profiles</Prompt>
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <TerminalWindow title="~/contact.sh" className="h-full">
            <ContactPanel />
          </TerminalWindow>
        </Reveal>

        <Reveal delay={0.1}>
          <TerminalWindow title="~/profiles" className="h-full">
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-3 rounded border border-term-border px-4 py-3 transition-colors hover:border-term-green/40"
                  >
                    <span className="min-w-0">
                      <span className="text-sm text-term-green">{social.label}</span>
                      <span className="block truncate text-xs text-term-dim">{social.detail}</span>
                    </span>
                    <span aria-hidden="true" className="text-term-dim group-hover:text-term-green">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </TerminalWindow>
        </Reveal>
      </div>
    </div>
  );
}
