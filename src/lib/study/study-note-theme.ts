import {
  Activity,
  AirVent,
  Brain,
  Bug,
  Heart,
  Pill,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type StudyNoteTheme = {
  icon: LucideIcon;
  accentClass: string;
  badgeClass: string;
  cardGradient: string;
  cardBorder: string;
  cardGlow: string;
  iconBg: string;
};

const DEFAULT_THEME: StudyNoteTheme = {
  icon: Stethoscope,
  accentClass: "text-mq-accent",
  badgeClass: "border-mq-accent/25 bg-mq-accent/10 text-mq-accent",
  cardGradient: "from-mq-accent/12 via-transparent to-indigo-500/8",
  cardBorder: "border-white/10 hover:border-mq-accent/30",
  cardGlow: "shadow-[0_8px_32px_-12px_rgb(0_209_255/0.25)]",
  iconBg: "bg-mq-accent/15 text-mq-accent",
};

const KEYWORD_THEMES: Array<{ keywords: string[]; theme: StudyNoteTheme }> = [
  {
    keywords: ["cardio", "coraz", "iam", "infarto", "arritm", "aorta", "valvul"],
    theme: {
      icon: Heart,
      accentClass: "text-rose-300",
      badgeClass: "border-rose-400/30 bg-rose-500/12 text-rose-200",
      cardGradient: "from-rose-500/14 via-transparent to-orange-500/6",
      cardBorder: "border-rose-500/15 hover:border-rose-400/35",
      cardGlow: "shadow-[0_8px_32px_-12px_rgb(244_63_94/0.35)]",
      iconBg: "bg-rose-500/15 text-rose-300",
    },
  },
  {
    keywords: ["neuro", "cerebr", "epilep", "ictus", "cefale"],
    theme: {
      icon: Brain,
      accentClass: "text-violet-300",
      badgeClass: "border-violet-400/30 bg-violet-500/12 text-violet-200",
      cardGradient: "from-violet-500/14 via-transparent to-indigo-500/8",
      cardBorder: "border-violet-500/15 hover:border-violet-400/35",
      cardGlow: "shadow-[0_8px_32px_-12px_rgb(139_92_246/0.35)]",
      iconBg: "bg-violet-500/15 text-violet-300",
    },
  },
  {
    keywords: ["infect", "sepsis", "bacter", "viral", "dengue", "tropical"],
    theme: {
      icon: Bug,
      accentClass: "text-emerald-300",
      badgeClass: "border-emerald-400/30 bg-emerald-500/12 text-emerald-200",
      cardGradient: "from-emerald-500/14 via-transparent to-teal-500/8",
      cardBorder: "border-emerald-500/15 hover:border-emerald-400/35",
      cardGlow: "shadow-[0_8px_32px_-12px_rgb(16_185_129/0.35)]",
      iconBg: "bg-emerald-500/15 text-emerald-300",
    },
  },
  {
    keywords: ["neumo", "pulm", "respir", "eap", "epoc", "asma"],
    theme: {
      icon: AirVent,
      accentClass: "text-sky-300",
      badgeClass: "border-sky-400/30 bg-sky-500/12 text-sky-200",
      cardGradient: "from-sky-500/14 via-transparent to-cyan-500/8",
      cardBorder: "border-sky-500/15 hover:border-sky-400/35",
      cardGlow: "shadow-[0_8px_32px_-12px_rgb(14_165_233/0.35)]",
      iconBg: "bg-sky-500/15 text-sky-300",
    },
  },
  {
    keywords: ["endocr", "diabet", "tiroid", "cad", "insulin"],
    theme: {
      icon: Pill,
      accentClass: "text-amber-300",
      badgeClass: "border-amber-400/30 bg-amber-500/12 text-amber-200",
      cardGradient: "from-amber-500/14 via-transparent to-yellow-500/6",
      cardBorder: "border-amber-500/15 hover:border-amber-400/35",
      cardGlow: "shadow-[0_8px_32px_-12px_rgb(245_158_11/0.35)]",
      iconBg: "bg-amber-500/15 text-amber-300",
    },
  },
  {
    keywords: ["nefro", "renal", "diálisis", "dialisis"],
    theme: {
      icon: Activity,
      accentClass: "text-cyan-300",
      badgeClass: "border-cyan-400/30 bg-cyan-500/12 text-cyan-200",
      cardGradient: "from-cyan-500/14 via-transparent to-blue-500/8",
      cardBorder: "border-cyan-500/15 hover:border-cyan-400/35",
      cardGlow: "shadow-[0_8px_32px_-12px_rgb(6_182_212/0.35)]",
      iconBg: "bg-cyan-500/15 text-cyan-300",
    },
  },
];

export function getStudyNoteTheme(topic: string, examArea?: string): StudyNoteTheme {
  const haystack = `${topic} ${examArea ?? ""}`.toLowerCase().normalize("NFD");

  for (const entry of KEYWORD_THEMES) {
    if (entry.keywords.some((keyword) => haystack.includes(keyword))) {
      return entry.theme;
    }
  }

  return DEFAULT_THEME;
}

export function getExamAreaLabel(examArea?: string): string {
  if (!examArea) return "Tema clave";
  const parts = examArea.split("/").map((part) => part.trim()).filter(Boolean);
  return parts[parts.length - 1] ?? examArea;
}
