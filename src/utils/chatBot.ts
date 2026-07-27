import { personalInfo, skills, projects, experiences } from "../constants";

interface KnowledgeEntry {
  keywords: string[];
  answer: string;
}

const yearsExperience = new Date().getFullYear() - 2019;

const projectEntries: KnowledgeEntry[] = projects.map((project) => ({
  keywords: [
    "project",
    "projects",
    "built",
    "portfolio",
    project.title.toLowerCase(),
    ...project.tech.map((tech) => tech.toLowerCase()),
  ],
  answer: `${project.title} — ${project.description} Built with ${project.tech.join(
    ", "
  )}. Live demo: ${project.liveUrl}`,
}));

const experienceEntries: KnowledgeEntry[] = experiences.map((exp) => ({
  keywords: [
    "experience",
    "work",
    "job",
    "career",
    "worked",
    exp.company.toLowerCase(),
    exp.title.toLowerCase(),
    ...exp.tech.map((tech) => tech.toLowerCase()),
  ],
  answer: `${exp.title} at ${exp.company} (${exp.period}, ${exp.location}) — ${exp.description}`,
}));

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["who", "name", "yourself", "introduce", "about"],
    answer: `I'm ${personalInfo.name}, a ${personalInfo.title} based in ${personalInfo.location}. ${personalInfo.tagline}.`,
  },
  {
    keywords: [
      "skill",
      "skills",
      "tech",
      "stack",
      "technology",
      "technologies",
      "language",
      "languages",
      "framework",
      "frameworks",
      "know",
    ],
    answer: `${personalInfo.name}'s core skills include ${skills.join(", ")}.`,
  },
  {
    keywords: ["years", "how long", "long", "since"],
    answer: `${personalInfo.name} has ${yearsExperience}+ years of professional experience as a full-stack developer.`,
  },
  {
    keywords: [
      "contact",
      "email",
      "reach",
      "hire",
      "hiring",
      "connect",
      "talk",
      "collaborate",
    ],
    answer: `You can reach ${personalInfo.name} at ${personalInfo.email}, or use the contact form on this page. Also on GitHub (${personalInfo.github}) and LinkedIn (${personalInfo.linkedin}).`,
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: `You can download ${personalInfo.name}'s resume using the "Download Resume" button in the hero section at the top of the page.`,
  },
  {
    keywords: ["location", "where", "live", "based", "city", "country"],
    answer: `${personalInfo.name} is based in ${personalInfo.location}.`,
  },
  {
    keywords: ["title", "role", "position", "do", "developer"],
    answer: `${personalInfo.name} works as a ${personalInfo.title}.`,
  },
  ...projectEntries,
  ...experienceEntries,
];

export const suggestedChips = [
  "What's your tech stack?",
  "Tell me about your experience",
  "What projects have you built?",
  "How can I contact you?",
];

export function getBotResponse(query: string): string {
  const normalized = query.toLowerCase();
  const words = normalized.split(/\W+/).filter((w) => w.length > 2);

  let bestScore = 0;
  let bestAnswer: string | null = null;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword)) {
        score += 2;
      } else if (words.some((word) => keyword.includes(word))) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  if (bestAnswer) return bestAnswer;

  return `I'm not sure about that one — try asking about skills, experience, projects, or how to get in touch. You can also email ${personalInfo.email} directly.`;
}
