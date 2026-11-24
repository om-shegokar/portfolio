export interface ExperienceEntry {
  role: string;
  org: string;
  team?: string;
  location?: string;
  period?: string;
  bullets: string[];
  highlights?: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  university?: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

export type Skills = Record<string, string[]>;
export const juspay = { org: "Juspay", period: "Jan 2024 – Present" };

// Career details transcribed from the supplied Om_Shegokar_Resume.pdf.
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
      highlights: [
        "Engineered distributed LLM evaluation with Python REST APIs, PostgreSQL job queues, row-level locking, and stateless Docker workers.",
        "Benchmarked GLM-4, Mistral, and QwQ using throughput and latency metrics to inform model selection.",
      ],
      bullets: [
        "Engineered a distributed LLM evaluation platform with Python REST APIs, PostgreSQL job queues, row-level locking, and stateless Docker workers for parallel benchmark execution.",
        "Benchmarked GLM-4, Mistral, and QwQ using tokens/sec and latency metrics, informing model selection and inference performance comparisons.",
        "Prototyped LoRA fine-tuning and FP8/BF16 quantization on GCP; evaluated accuracy, latency, and inference-cost trade-offs.",
        "Implemented S3-backed logs, live streaming, and checkpoint/resume mechanisms to improve visibility and recovery of evaluation jobs.",
      ],
    },
    {
      role: "Product Solution Engineer",
      org: "Juspay",
      team: "Breeze — Payments & Production Engineering",
      location: "Bengaluru",
      bullets: [
        "Supported checkout integration and production reliability for 125+ D2C brands; used SQL/log analysis and A/B experiments to assess checkout improvements.",
        "Reduced incident resolution time by 35% using Kibana-based observability; supported payment integrations with >95% success rate.",
      ],
    },
    {
      role: "Android Developer Intern",
      org: "Cyber Secured India",
      location: "Pune",
      period: "Feb 2023 – Mar 2023",
      bullets: [
        "Developed the offline-first Manas Android app with SQLite and synchronization; published on Google Play with 1K+ downloads.",
      ],
    },
  ],
  education: [{
    degree: "B.E. Computer Engineering",
    school: "Indira College of Engineering & Management",
    university: "Pune University",
    period: "2020 – 2024",
    gpa: "CGPA 8.11 / 10",
  }],
  skills: {
    ml_deep_learning: ["Python", "NumPy", "pandas", "scikit-learn", "PyTorch", "TensorFlow", "TensorFlow Lite", "CNNs", "RNNs", "Model Evaluation"],
    inference_optimization: ["Hugging Face Transformers", "LoRA Fine-Tuning", "FP8/BF16 Quantization", "LLM APIs", "Tool Calling", "Inference Benchmarking"],
    backend_data_cloud: ["SQL", "PostgreSQL", "SQLite", "FastAPI", "REST APIs", "Docker", "GCP", "Distributed Job Queues", "S3", "Linux", "Git"],
    production_experimentation: ["Throughput/Latency Analysis", "A/B Testing", "Kibana", "Logging", "Checkpoint Recovery", "CI/CD"],
    languages: ["Python", "SQL", "Rust", "Kotlin"],
  },
  coverLetter: [
    "I'm Om, a machine learning engineer focused on generative AI, model evaluation, and ML infrastructure. At Juspay's Xyne team, I engineered distributed LLM benchmarking with Python APIs, PostgreSQL job queues, Docker workers, and S3-backed logs and checkpoint recovery. I benchmarked GLM-4, Mistral, and QwQ and prototyped LoRA fine-tuning and FP8/BF16 quantization on GCP.",
    "On the Breeze team, I supported checkout integration and production reliability for 125+ D2C brands, used SQL and log analysis and A/B experiments to assess improvements, and reduced incident resolution time by 35% through Kibana-based observability.",
    "My independent projects include Humble Human, an AI coding agent with persistent three-tier memory; a TensorFlow Lite sign-language recognition prototype; and PalmCode's foundational Android/Rust integration. I'm interested in roles where I can build and evaluate useful AI systems.",
  ],
};
