export interface ExperienceEntry {
  role: string;
  org: string;
  team?: string;
  location?: string;
  period?: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  university?: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

// Keys/categories are rendered as syntax-highlighted skills.json on the About page
export type Skills = Record<string, string[]>;

export const resume: {
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: Skills;
  coverLetter: string[];
} = {
  experience: [
    {
      role: "Product Solution Engineer",
      org: "Juspay",
      team: "Xyne — AI/ML & Core Engineering",
      location: "Bengaluru",
      period: "Jan 2024 – Present",
      bullets: [
        "Prototyped LoRA fine-tuning and FP8/BF16 quantization pipelines to cut LLM inference cost on GCP, benchmarking the accuracy/latency trade-off at each compression level before production rollout.",
        "Built TPS/latency leaderboards across SOTA models (GLM-5, Minimax M2.5, Kimi K2.5) that directly informed production model-selection decisions.",
        "Architected a scalable evaluation platform: REST API + PostgreSQL job queue fronting stateless worker nodes with row-locking, cloning benchmark repos and running evals in isolated Docker containers — enabling parallel, crash-recoverable execution at scale.",
        "Built a 4-microservice eval dashboard (frontend, backend, DB, eval-runner VM) with live log streaming and a unified benchmarking pipeline spanning SWE-Bench, Tau2-Bench, Polyglot, and other suites.",
        "Implemented S3-backed log persistence with checkpoint-resume for crash recovery, and live log streaming to a dashboard proxied through the backend.",
        "Built developer tooling — Xyne-CLI (a TUI coding agent) and Xyne Code (a VS Code extension) — powered by vLLM serving rented-GPU-hosted models (H200, B300) behind OpenAI-compatible endpoints.",
        "Worked on inference optimization on H200 GPUs; wrote orchestration scripts to run multiple evals concurrently across tmux sessions and SSH'd VM/CPU machines.",
        "Conducted senior/staff-level code review across five benchmark eval repos; open-source contributor to Hyperswitch and Xyne.",
      ],
    },
    {
      role: "Product Solution Engineer",
      org: "Juspay",
      team: "Breeze — D2C Checkout Integrations",
      location: "Bengaluru",
      period: "Aug 2024 – Present",
      bullets: [
        "Managed end-to-end checkout integrations for 125+ D2C brands across Shopify, Magento, and WooCommerce — delivering up to 10% conversion improvement over native Shopify checkout.",
        "Reduced incident resolution time by 35% via Kibana, distributed logging, and automated API-level debugging across production traffic.",
        "Maintained a 95% payment success rate integrating third-party SDKs with dynamic multi-gateway routing in live, high-throughput environments.",
        "Built an LLM tool-calling layer for Breeze Automatic (iOS/Android) letting merchants configure checkout via natural language, integrated across Shopify, WooCommerce, and Magento.",
      ],
    },
    {
      role: "Product Solution Engineer Intern",
      org: "Juspay",
      location: "Bengaluru",
      period: "Jan 2024 – Aug 2024",
      bullets: [
        "Used Juspay's payment orchestration layer for dynamic multi-gateway routing — 95% technical success rate (excluding user drop-offs).",
        "Built reusable integration configs and automated debug scripts, cutting core-engineering dependency by 30% and speeding merchant go-live.",
        "Ran A/B experiments achieving a 2.5% conversion uplift across high-traffic merchants.",
      ],
    },
    {
      role: "Machine Learning Engineer Intern",
      org: "iHub-AwaDH, IIT Ropar",
      bullets: ["Image classification work and Blender-based data/asset pipelines."],
    },
    {
      role: "Android App Developer Intern",
      org: "Cyber Secured India",
      location: "Pune",
      period: "Feb 2023 – Mar 2023",
      bullets: [
        "Built the Manas mental wellness app with offline-first architecture (SQLite + conflict-resolution sync); published to the Play Store with 1K+ downloads.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Engineering",
      school: "Indira College of Engineering & Management",
      university: "Savitribai Phule Pune University",
      period: "2020 – 2024",
      gpa: "CGPA 8.11 / 10",
      coursework: ["Data Structures & Algorithms", "Distributed Systems", "Artificial Intelligence", "Database Management Systems"],
    },
  ],
  skills: {
    inference_optimization: [
      "Model Quantization (FP8/BF16)",
      "LoRA Fine-Tuning",
      "TPS/Latency Benchmarking",
      "HuggingFace Transformers",
      "PyTorch",
    ],
    llm_serving: [
      "vLLM",
      "SGLang",
      "Rented GPU Hosting (H200, B300)",
      "OpenAI-compatible Endpoints",
      "Continuous Batching",
      "Paged Attention / Flash Attention",
      "KV Cache Handling",
    ],
    ml_infrastructure: [
      "Distributed Job Queues",
      "REST API Design",
      "PostgreSQL",
      "S3-backed Log Persistence",
      "Crash Recovery",
      "GCP Batch",
    ],
    cloud_deployment: ["GCP", "Docker", "Kubernetes", "Microservices", "Linux/tmux", "GitHub Actions", "CI/CD"],
    observability: ["Kibana", "Distributed Logging", "Incident Response", "A/B Testing"],
    languages: ["Python", "Rust", "JavaScript", "SQL", "Bash"],
  },
  coverLetter: [
    "I'm Om — an AI/ML engineer who makes LLM inference fast, cheap, and measurable in production. At Juspay's Xyne team I built the evaluation infrastructure that decides which models we ship: a crash-recoverable GCP + Docker platform with PostgreSQL job queues and S3-backed log persistence, TPS/latency leaderboards across SOTA models, and a unified dashboard spanning SWE-Bench, Tau2-Bench, and Polyglot.",
    "Before Xyne, I shipped checkout for 125+ D2C brands on Juspay's Breeze team — cutting incident resolution time 35% and lifting conversion up to 10% over native Shopify checkout. That payments rooting means I build ML systems with product stakes in mind: latency budgets, cost per request, and the conversion metric at the end of the funnel.",
    "I'm looking for a role where I can own LLM inference and evaluation systems end-to-end, in an early-stage, high-ambiguity environment. If that sounds like your team, my inbox is open.",
  ],
};
