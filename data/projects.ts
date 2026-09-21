export interface Project {
  name: string;
  tagline: string;
  period?: string;
  bullets: string[];
  tags: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    name: "llm-eval-platform",
    tagline: "Crash-recoverable benchmarking infrastructure",
    period: "2024 – Present",
    bullets: [
      "Full platform: REST API + PostgreSQL (benchmarks, models, eval-run queue) + stateless worker nodes with row-locking, cloning benchmark repos and running evals in isolated Docker containers.",
      "S3-backed log persistence with periodic sync enabling crash recovery and checkpoint-resume; live logs streamed to a dashboard UI proxied through the backend.",
      "Spot-preemption resilient on GCP Batch with MMLU-style JSONL sharding, plus a local dry-run suite for fast iteration.",
    ],
    tags: ["Python", "GCP", "Docker", "PostgreSQL", "S3", "REST API"],
    github: "https://github.com/DarkRedOS/Benchmark",
  },
  {
    name: "eval-dashboard",
    tagline: "Unified benchmarking across SWE-Bench, Tau2-Bench & Polyglot",
    period: "2025",
    bullets: [
      "4-microservice architecture: frontend, backend, DB, and an eval-runner VM.",
      "Live log streaming from running evals; one pipeline spanning SWE-Bench, Tau2-Bench, Polyglot, and other suites.",
      "Dynamic TPS/latency leaderboards (GLM-5, Minimax M2.5, Kimi K2.5) that directly informed production model-selection decisions.",
    ],
    tags: ["TypeScript", "React", "PostgreSQL", "Docker", "Microservices"],
    github: "https://github.com/DarkRedOS/dashboard",
  },
  {
    name: "xyne-cli + xyne-code",
    tagline: "TUI coding agent and VS Code extension, served by vLLM",
    bullets: [
      "Xyne-CLI: a TUI coding agent (in the spirit of OpenCode) with a /commands system, built as the underlying engine/library.",
      "Xyne Code: a VS Code extension (in the spirit of Copilot) built on top of Xyne-CLI.",
      "Both run on vLLM serving rented-GPU-hosted models (H200, B300) behind OpenAI-compatible endpoints.",
    ],
    tags: ["TypeScript", "Node.js", "vLLM", "LLM Agents", "Developer Tooling"],
  },
  {
    name: "sign-signify",
    tagline: "Real-time sign language translation on Android",
    period: "Jun 2023 – May 2024",
    bullets: [
      "CNN for palm detection + RNN for temporal gesture recognition, running as a real-time translation pipeline.",
      "Model quantization for low-latency edge inference on-device.",
    ],
    tags: ["Android", "CNN", "RNN", "Model Quantization"],
    github: "https://github.com/DarkRedOS/sign-signify",
  },
  {
    name: "manas-app",
    tagline: "Offline-first mental wellness app — 1K+ Play Store downloads",
    bullets: [
      "Offline-first Android architecture with custom conflict-resolution sync logic over SQLite.",
      "Published to the Play Store; 1,000+ downloads.",
    ],
    tags: ["Android", "SQLite", "Offline-first Sync"],
  },
  {
    name: "latam-fintech-agent",
    tagline: "Agent surfacing LATAM fintech news from internal repos",
    bullets: [
      "Built an agent that surfaces LATAM fintech news by pulling relevant context from Juspay's internal repositories.",
    ],
    tags: ["Python", "LLM", "Agentic", "RAG"],
  },
];
