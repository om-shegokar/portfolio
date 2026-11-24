"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";
import { EasterEgg } from "./EasterEgg";
import { Prompt } from "./TerminalWindow";

type CommandEntry = { id: number; command: string; valid: boolean };

export function HireMeHint({ inputRef, scrollRef }: {
  inputRef: RefObject<HTMLInputElement | null>;
  scrollRef: RefObject<HTMLDivElement | null>;
}) {
  const [command, setCommand] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<CommandEntry[]>([]);
  const scrollToPrompt = useCallback(() => {
    if (document.activeElement === inputRef.current && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      inputRef.current?.scrollIntoView({ block: "nearest" });
    }
  }, [inputRef, scrollRef]);

  useEffect(() => { scrollToPrompt(); }, [history, scrollToPrompt]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const submitted = command.trim();
        if (!submitted) {
          setMessage("Type sudo hire-me, then press Enter.");
          return;
        }
        setHistory((previous) => [...previous.slice(-49), {
          id: (previous.at(-1)?.id ?? 0) + 1,
          command: submitted,
          valid: submitted.toLowerCase().replace(/\s+/g, " ") === "sudo hire-me",
        }]);
        setMessage("");
        setCommand("");
      }}
    >
      <label htmlFor="terminal-command" className="block text-term-dim">
        {'// protip: type "sudo hire-me" below, then press Enter'}
      </label>
      {history.length > 0 ? (
        <div className="mt-3 space-y-5">
          {history.map((entry) => (
            <div key={entry.id}>
              <p className="mb-2 break-words text-base"><Prompt /> {entry.command}</p>
              {entry.valid ? <EasterEgg onProgress={scrollToPrompt} /> : (
                <p role="status" className="text-sm leading-7 text-term-amber">
                  Command not found. Type sudo hire-me, then press Enter.
                </p>
              )}
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-3 flex min-h-10 items-center gap-2 text-base">
        <span aria-hidden="true" className="shrink-0"><Prompt /></span>
        <input
          ref={inputRef}
          id="terminal-command"
          name="command"
          type="text"
          value={command}
          onChange={(event) => { setCommand(event.target.value); setMessage(""); }}
          autoComplete="off"
          autoCapitalize="none"
          enterKeyHint="go"
          spellCheck={false}
          aria-describedby="terminal-command-help"
          className="block min-w-0 flex-1 bg-transparent py-2 text-base text-term-fg caret-term-green focus-visible:outline-none"
        />
      </div>
      <p id="terminal-command-help" role="status" className={`text-xs leading-6 text-term-dim ${message ? "mt-2" : "sr-only"}`}>
        {message || "Click inside this terminal to type. Press Enter to run sudo hire-me."}
      </p>
    </form>
  );
}
