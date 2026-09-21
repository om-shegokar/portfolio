"use client";

import { useSyncExternalStore } from "react";

// ponytail: framer-motion's useReducedMotion reads matchMedia during the first
// client render, which mismatches SSR (always false) and breaks hydration for
// reduced-motion users. useSyncExternalStore + getServerSnapshot is the
// hydration-safe equivalent.
function subscribe(onStoreChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}
