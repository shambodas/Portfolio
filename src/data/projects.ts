export type ProjectLink = {
  label: string;
  url: string;
  external?: boolean;
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  date?: string;
  category: string;
  description: string;
  overview?: string;
  problem?: string;
  approach?: string;
  architecture?: string[];
  technology?: string[];
  features?: string[];
  metrics?: Metric[];
  highlight?: string;
  tags: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "aeris-twin",
    number: "01",
    title: "AERIS-TWIN",
    subtitle: "AI-Driven Digital Twin & Predictive Maintenance System for MALE UAVs",
    date: "Aug 2026 — Sept 2026",
    category: "Predictive Maintenance · AI/ML",
    description:
      "An end-to-end AI-driven predictive maintenance system using a physics-based digital twin of a MALE UAV propulsion system to simulate engine behavior and generate real-time telemetry for health monitoring.",
    overview:
      "An end-to-end AI-driven predictive maintenance system built around a physics-based digital twin of a MALE UAV propulsion system. The digital twin simulates engine behavior and generates real-time telemetry that feeds a continuous health monitoring pipeline.",
    problem:
      "MALE UAV propulsion systems generate abnormal engine behavior and faults that need to be caught early — identifying this behavior and supporting predictive maintenance decisions before failures escalate.",
    approach:
      "The digital twin produces real-time telemetry, which is passed through machine-learning-based anomaly detection and a health assessment stage. A Ground Control Station (GCS) presents the results so faults can be monitored and predictive maintenance decisions supported.",
    architecture: [
      "PHYSICS MODEL",
      "DIGITAL TWIN",
      "REAL-TIME TELEMETRY",
      "ML ANOMALY DETECTION",
      "HEALTH ASSESSMENT",
      "GROUND CONTROL STATION",
      "PREDICTIVE MAINTENANCE",
    ],
    technology: ["Python", "Machine Learning", "Digital Twin", "Telemetry", "Anomaly Detection", "Predictive Maintenance"],
    highlight:
      "Integrates real-time telemetry, machine-learning-based anomaly detection, health assessment, and a Ground Control Station to identify abnormal engine behavior, monitor faults, and support predictive maintenance decisions.",
    tags: ["Python", "Machine Learning", "Digital Twin", "Telemetry", "Anomaly Detection", "Predictive Maintenance"],
    links: [{ label: "GitHub", url: "https://github.com/shambodas/AERIS-TWIN", external: true }],
  },
  {
    id: "heart-disease",
    number: "02",
    title: "Heart Disease Risk Assessment System",
    date: "Jan 2026 — Feb 2026",
    category: "Machine Learning · Backend",
    description:
      "Developed an end-to-end machine-learning pipeline on approximately 320K healthcare records, addressing class imbalance and optimizing recall and ROC-AUC through model comparison and decision-threshold tuning.",
    overview:
      "An end-to-end machine-learning pipeline built on approximately 320K healthcare records. The system focuses on class imbalance and the careful optimization of recall and ROC-AUC through consistent preprocessing, model comparison and decision-threshold tuning.",
    problem:
      "Healthcare risk-assessment datasets are heavily imbalanced, which biases models toward the majority class and hides at-risk cases. The goal was to optimize recall and ROC-AUC rather than raw accuracy.",
    approach:
      "A consistent preprocessing pipeline keep comparisons fair. Multiple models were trained and compared, then decision-threshold tuning was used to reach a strong recall / ROC-AUC balance. The final model is served through a Flask REST API for real-time prediction. This is a research and engineering demonstration, not a medical diagnostic system.",
    architecture: ["DATASET", "PREPROCESSING", "MODEL COMPARISON", "THRESHOLD TUNING", "FLASK API", "PREDICTION"],
    technology: ["Python", "Scikit-learn", "Pandas", "Flask", "REST API", "NumPy"],
    features: [
      "Class imbalance handling",
      "Model comparison",
      "Decision threshold tuning",
      "Consistent preprocessing",
      "Flask REST API",
      "Real-time prediction",
    ],
    metrics: [
      { label: "RECALL", value: "0.82" },
      { label: "ROC-AUC", value: "0.85" },
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "Flask", "REST API"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/shambodas/Heart-Disease-Risk-Assessment-System",
        external: true,
      },
    ],
  },
  {
    id: "sentinel",
    number: "03",
    title: "SENTINEL",
    subtitle: "Agentic AI Enterprise Risk Intelligence System",
    category: "Agentic AI · Risk Intelligence",
    description:
      "An agentic AI / enterprise risk intelligence system that automates due diligence and delivers comprehensive insights in under 90 seconds through a multi-agent architecture.",
    overview:
      "SENTINEL is an agentic AI / enterprise risk intelligence system. It automates due diligence for a company and delivers a comprehensive risk insight in under 90 seconds by orchestrating several specialized agents that research, analyze and score risk.",
    problem:
      "Enterprise risk assessment is slow and scattered across many data sources. Companies need a single, traceable workflow that turns research into a structured risk verdict quickly.",
    approach:
      "Specialized agents — research, financial, market and risk — each work on their own domain, hand information between stages, and report real-time progress. Their outputs are synthesized into a structured risk scoring, a risk brief and a mitigation playbook, with decisions kept traceable.",
    architecture: [
      "COMPANY",
      "RESEARCH",
      "SPECIALIZED AGENTS",
      "ANALYSIS",
      "RISK SCORING",
      "RISK BRIEF",
      "MITIGATION PLAYBOOK",
    ],
    technology: ["Agentic AI", "Multi-Agent Architecture", "Enterprise Intelligence", "TypeScript"],
    features: [
      "Agent-based architecture",
      "Specialized agents (research, financial, market, risk)",
      "Information handoff between agents",
      "Real-time analysis progress",
      "Traceable decisions",
      "Structured risk output",
    ],
    tags: ["Agentic AI", "Multi-Agent", "Risk Intelligence", "Automation"],
    links: [{ label: "GitHub", url: "https://github.com/shambodas/SENTINEL", external: true }],
  },
  {
    id: "resume-jd",
    number: "04",
    title: "Resume-JD Match Scorer",
    date: "May 2026 — June 2026",
    category: "NLP · Backend",
    description:
      "Built a pure NLP tool for scoring resume–job-description alignment using TF-IDF vectorization and cosine similarity via scikit-learn.",
    overview:
      "A pure NLP tool (no LLMs) that scores how well a resume aligns with a job description. It uses TF-IDF vectorization and cosine similarity via scikit-learn to compute an alignment score while extracting and matching technical skills.",
    problem:
      "Quantifying resume–job-description fit with a transparent, reproducible method that doesn't rely on opaque language models.",
    approach:
      "Text is processed and vectorized with TF-IDF. Cosine similarity scores resume–description alignment, while n-gram matching extracts and compares 100+ categorized technical skills. Missing keywords are detected and concrete improvement suggestions generated, all exposed through a Flask REST API.",
    architecture: [
      "RESUME",
      "JOB DESCRIPTION",
      "TEXT PROCESSING",
      "TF-IDF",
      "COSINE SIMILARITY",
      "SKILL MATCHING",
      "MISSING KEYWORDS",
      "SUGGESTIONS",
    ],
    technology: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Flask", "REST API"],
    features: [
      "100+ categorized technical skills",
      "TF-IDF vectorization",
      "Cosine similarity scoring",
      "N-gram matching",
      "Skill extraction",
      "Missing keyword detection",
      "Improvement suggestions",
      "Flask REST API",
    ],
    highlight: "Categorizes and matches 100+ technical skills from any resume.",
    metrics: [{ label: "SKILLS", value: "100+" }],
    tags: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Flask"],
    links: [{ label: "GitHub", url: "https://github.com/shambodas/Resume-Scorer", external: true }],
  },
  {
    id: "das-engineering",
    number: "05",
    title: "Das Engineering Works",
    subtitle: "B2B Corporate Website",
    category: "Web · B2B",
    description:
      "A real-world B2B corporate website focused on corporate presentation, responsive UI, product and service presentation, and a clean business information architecture with a professional user experience.",
    overview:
      "A B2B corporate website built for an engineering business. The site is organized around how a business actually evaluates vendors: clear company presence, structured product and service presentation, essential business information, and a direct contact and enquiry path.",
    problem:
      "A corporate brand needed a professional digital presence that presents products and services credibly and moves visitors toward an enquiry.",
    approach:
      "Information architecture leads with the company, then products and services, then business information, ending in a contact and enquiry flow. The responsive UI keeps the experience professional and consistent across devices.",
    architecture: ["COMPANY", "PRODUCTS / SERVICES", "BUSINESS INFORMATION", "CONTACT / ENQUIRY"],
    technology: ["B2B Web Design", "Responsive Design", "Corporate Presentation", "UX"],
    tags: ["B2B Web Design", "Responsive Design", "Corporate Presentation"],
    links: [
      { label: "Website", url: "https://dasengineeringworks.co.in/", external: true },
    ],
  },
  {
    id: "motor-health",
    number: "06",
    title: "End-to-End Cloud-Based IoT & Machine Learning System",
    subtitle: "Real-Time Motor Health & Anomaly Detection",
    category: "IoT · Cloud · ML",
    description:
      "A complete industrial IoT pipeline for real-time motor health monitoring — from sensors on the motor, through an IoT device and the cloud, to ML anomaly detection, health assessment and a monitoring dashboard.",
    overview:
      "A complete, end-to-end industrial IoT pipeline. Vibration and operational data from sensors on the motor are collected by an IoT device, streamed to the cloud, and processed as real-time telemetry. Machine-learning anomaly detection and health assessment turn the data into a monitoring dashboard.",
    approach:
      "The architecture connects every stage of a modern industrial predictive-maintenance loop: motor, sensors, IoT device and cloud, real-time telemetry, ML-based anomaly detection, health assessment, and a monitoring dashboard. It ties ECE, IoT, cloud and ML together into one coherent system.",
    architecture: [
      "MOTOR",
      "SENSORS",
      "IOT DEVICE",
      "CLOUD",
      "REAL-TIME TELEMETRY",
      "ML ANOMALY DETECTION",
      "HEALTH ASSESSMENT",
      "MONITORING DASHBOARD",
    ],
    technology: ["IoT", "Cloud Computing", "Machine Learning", "Real-time Telemetry", "Anomaly Detection", "Predictive Maintenance"],
    tags: ["IoT", "Cloud", "Machine Learning", "Telemetry", "Anomaly Detection"],
  },
  {
    id: "wellspring",
    number: "07",
    title: "Wellspring",
    subtitle: "Your Space for Mental Well-Being",
    category: "Product · AI",
    description:
      "A human-centered product helping students check in, get screened, and find the right next step — supported by AI assistance with human-in-the-loop safety and multilingual accessibility.",
    overview:
      "Wellspring is a human-centered, product-oriented experience for mental well-being. A student starts with a check-in, moves through screening, and is guided toward next steps with the support of an AI assistant backed by human-in-the-loop safety and multilingual accessibility.",
    approach:
      "The flow keeps the user at the center: user check-in, screening, AI support, human-in-the-loop safety, and clear next steps. Everything is designed to be accessible, empathetic and easy to reach for students. It is a product and support experience, not a medical or therapeutic service.",
    architecture: [
      "USER CHECK-IN",
      "SCREENING",
      "AI SUPPORT",
      "HUMAN-IN-THE-LOOP SAFETY",
      "NEXT STEPS",
    ],
    technology: ["Product Design", "AI Assistance", "Human-in-the-Loop", "Multilingual Accessibility"],
    features: [
      "Student-focused support",
      "Accessible mental-wellbeing experience",
      "AI assistance",
      "Human oversight",
      "Multilingual accessibility",
    ],
    tags: ["Product Design", "AI Assistance", "Human-in-the-Loop", "Accessibility"],
    links: [{ label: "GitHub", url: "https://github.com/shambodas/Wellspring-Final", external: true }],
  },
];