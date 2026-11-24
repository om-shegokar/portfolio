export interface Project {
  name: string;
  featured?: boolean;
  problem?: string;
  architecture?: string;
  result?: string;
  tagline: string;
  period?: string;
  bullets: string[];
  tags: string[];
  github?: string;
  githubLabel?: string;
}

export const projects: Project[] = [
  {
    name: "Humble Human",
    featured: true,
    tagline: "An AI coding agent with retrieval-based long-term memory.",
    problem: "Preserve useful context as coding conversations exceed the model's token budget.",
    architecture: "Three-tier memory: token-budgeted context, SQLite FTS5 searchable summaries, and durable JSONL transcripts; retrieval through tool calls and a streaming FastAPI API.",
    result: "A React coding workspace that can retrieve prior summaries and inspect persistent session transcripts.",
    bullets: [],
    tags: ["Python", "FastAPI", "SQLite FTS5", "React"],
    github: "https://github.com/engram-node/humble-human",
  },
  {
    name: "LLM Evaluation Infrastructure — Xyne",
    featured: true,
    tagline: "Distributed benchmarking with checkpoint recovery.",
    problem: "Run parallel LLM benchmarks with visibility into performance and recovery from interrupted jobs.",
    architecture: "Python REST APIs, PostgreSQL job queues with row-level locking, and stateless Docker workers; S3-backed logs, live streaming, and checkpoint/resume.",
    result: "Benchmarked GLM-4, Mistral, and QwQ using tokens/sec and latency to inform model selection and inference comparisons.",
    bullets: ["Prototyped LoRA fine-tuning and FP8/BF16 quantization on GCP, assessing accuracy, latency, and inference-cost trade-offs."],
    tags: ["Python", "PostgreSQL", "Docker", "GCP", "S3"],
    github: "https://github.com/om-shegokar/Benchmark",
    githubLabel: "Repository scaffold ↗",
  },
  {
    name: "PalmCode",
    featured: true,
    tagline: "Foundations for an on-device Android coding-agent harness.",
    problem: "Establish a reproducible foundation for an Android-native, bring-your-own-key LLM agent.",
    architecture: "Rust core connected to Kotlin Android through UniFFI, with reproducible toolchain scaffolding.",
    result: "Validated emulator FFI and build execution spikes using reproducible Android/Rust toolchains.",
    bullets: [],
    tags: ["Rust", "Kotlin", "UniFFI", "Android"],
    github: "https://github.com/engram-node/palmcode",
  },
  {
    name: "Coding Model Evaluation Dashboard",
    tagline: "Interactive benchmark comparisons in Streamlit.",
    bullets: [
      "Compares coding models across ARCHIT EVAL, HumanEval, SWE Benchmark, RustEvo, Aider-Polyglot, and Haskell LLM.",
      "Uses pandas and Plotly for model comparisons, heatmaps, radar charts, and metrics including pass@k and API accuracy.",
    ],
    tags: ["Python", "Streamlit", "pandas", "Plotly"],
    github: "https://github.com/om-shegokar/dashboard",
  },
  {
    name: "Real-Time Sign Language Recognition",
    tagline: "An Android gesture-to-text prototype with on-device inference.",
    bullets: ["CNN-based visual features and recurrent temporal modeling with TensorFlow Lite inference on Android."],
    tags: ["TensorFlow Lite", "CNN", "RNN", "Android"],
    github: "https://github.com/om-shegokar/sign-signify",
  },
  {
    name: "Manas",
    tagline: "Offline-first Android app with 1K+ Google Play downloads.",
    bullets: ["Developed during the Android Developer internship at Cyber Secured India, using SQLite and synchronization for offline-first operation."],
    tags: ["Android", "SQLite", "Synchronization"],
  },
];
