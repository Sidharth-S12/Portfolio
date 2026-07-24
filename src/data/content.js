export const profile = {
  name: "Sidharth S",
  role: "AI & Data Science Student",
  location: "Kerala, India",
  email: "sidharths4669@gmail.com",
  github: "https://github.com/Sidharth-S12",
  linkedin: "https://linkedin.com/in/sidharth-s",
  tagline: "I build systems that learn from data and interfaces people actually enjoy using.",
  bio: "Final-year B.Tech student in Computer Science & Engineering (Data Science) at SCMS School of Engineering and Technology. I work across the stack — from ranking models and NLP pipelines to the last pixel of a React interface — with a habit of chasing designs that match the reference exactly, not just close enough.",
};

export const skills = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "ML / AI",
    items: ["Machine Learning Fundamentals", "TF-IDF", "Sentiment Analysis", "Random Forest", "LLM APIs (Groq / Llama 3.3)"],
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "Modular JS Architecture"],
  },
  {
    label: "Backend / Data",
    items: ["Firebase (Auth, Firestore, Realtime DB, Storage)", "MySQL"],
  },
  {
    label: "Core CS",
    items: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Agile", "DevOps Basics"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export const projects = [
  {
    id: "skillswap",
    name: "Skill Swap Platform",
    tag: "Peer-to-peer learning",
    stack: ["HTML", "CSS", "JavaScript", "Firebase", "ML"],
    summary:
      "A peer-to-peer skill exchange platform inspired by academic research on knowledge-exchange systems — matches mentors and learners by the skills they offer and want.",
    points: [
      "Firebase Authentication, profiles, and a skill-matching engine to recommend mentors and learners",
      "Request management, real-time chat, and session scheduling built on Firebase Realtime Database",
      "Post-session rating & feedback system with a reusable, secure UI",
    ],
    metric: "~92% ranking accuracy",
    metricLabel: "Random Forest + TF-IDF + VADER pipeline",
    links: {},
  },
  {
    id: "resumeiq",
    name: "ResumeIQ",
    tag: "AI resume analysis & career platform",
    stack: ["React 18", "Vite", "Firebase", "Groq API", "jsPDF"],
    summary:
      "An AI-powered platform that reviews resumes and generates polished, ATS-friendly resumes from customizable templates, with instant feedback from Llama 3.3 70B via the Groq API.",
    points: [
      "AI resume analysis, multiple templates, and client-side PDF export via jsPDF + html2canvas",
      "Secure auth with email verification and personalized EmailJS notifications",
      "Built entirely on a free-tier stack — Groq instead of paid LLMs, client-side processing instead of paid storage",
      "Solved Firestore composite-index limits, PDF library incompatibilities, and per-user Firebase security rules",
    ],
    metric: "Live in production",
    metricLabel: "Deployed on Vercel",
    links: {
      live: "https://resumeiq-two.vercel.app",
      github: "https://github.com/Sidharth-S12/Resumeiq",
    },
  },
  {
    id: "lostfound",
    name: "Lost and Found Bulletin Board",
    tag: "Community platform",
    stack: ["Python", "HTML", "CSS", "Firebase"],
    summary:
      "A community-driven board for posting and searching lost or found items, pets, and belongings — built to get people reunited with their things faster.",
    points: [
      "User-friendly posting and search flow for efficient listing discovery",
      "Python backend with Firebase as the real-time data layer",
    ],
    metric: "Real-time",
    metricLabel: "Firebase-backed listings",
    links: {},
  },
];

export const certifications = [
  "Google — The Fundamentals of Digital Marketing",
  "Infosys Springboard — Overview of Agile and DevOps",
  "Python — LCC",
];

export const activities = [
  "Led the team in inter-college and departmental tournaments",
  "Volunteered for technical and cultural events",
  "Participated in Ascendio 6.0, organized by IEEE SSET SB",
];

export const education = {
  school: "SCMS School of Engineering and Technology, Karukutty, Kerala",
  degree: "B.Tech, Computer Science & Engineering (Data Science)",
  cgpa: "7.5",
  coursework: ["Data Structures & Algorithms", "Python Programming", "DBMS", "Operating Systems", "Machine Learning"],
};
