"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "@/data/profile";

type CopyState = "idle" | "copied" | "failed";

export function ContactPanel() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copyState, setCopyState] = useState<CopyState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`[portfolio] message from ${name.trim()}`);
    const body = encodeURIComponent(`${message}\n\n— ${name.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  function copyEmail() {
    navigator.clipboard.writeText(profile.email).then(
      () => {
        setCopyState("copied");
        setTimeout(() => setCopyState("idle"), 2000);
      },
      () => setCopyState("failed"),
    );
  }

  return (
    <div className="space-y-5">
      <p className="text-sm">
        <span className="text-term-dim">$ echo $EMAIL → </span>
        <a
          href={`mailto:${profile.email}`}
          className="text-term-green underline underline-offset-4 hover:text-term-cyan"
        >
          {profile.email}
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm text-term-dim">
            $ name:
          </label>
          <input
            id="contact-name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
            placeholder="whoami"
            className="mt-1 w-full rounded border border-term-border bg-term-bg px-3 py-2 text-sm text-term-fg placeholder:text-term-dim/60 focus:border-term-green focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm text-term-dim">
            $ message:
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            rows={5}
            placeholder="cat message.txt"
            className="mt-1 w-full resize-y rounded border border-term-border bg-term-bg px-3 py-2 text-sm text-term-fg placeholder:text-term-dim/60 focus:border-term-green focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded border border-term-green/50 px-4 py-2 text-sm text-term-green transition-colors hover:bg-term-green/10"
          >
            [ send mail → ]
          </button>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded border border-term-cyan/50 px-4 py-2 text-sm text-term-cyan transition-colors hover:bg-term-cyan/10"
          >
            {copyState === "copied"
              ? "copied ✓"
              : copyState === "failed"
                ? "copy failed — copy it manually"
                : "[ copy email ]"}
          </button>
        </div>
      </form>
    </div>
  );
}
