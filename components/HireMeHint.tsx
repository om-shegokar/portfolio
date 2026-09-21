"use client";

import { HIRE_ME_EVENT } from "./EasterEgg";

export function HireMeHint() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(HIRE_ME_EVENT))}
      className="w-fit text-left text-term-dim transition-colors hover:text-term-green"
    >
      {'// protip: try typing "sudo hire-me"'}
    </button>
  );
}
