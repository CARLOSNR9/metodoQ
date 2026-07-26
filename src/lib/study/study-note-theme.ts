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
  accentClass: "text-indigo-600",
  badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-700",
  cardGradient: "from-indigo-100 via-transparent to-blue-50",
  cardBorder: "border-slate-200 hover:border-indigo-300",
  cardGlow: "shadow-sm",
  iconBg: "bg-indigo-100 text-indigo-600",
};

const KEYWORD_THEMES: Array<{ keywords: string[]; theme: StudyNoteTheme }> = [
  {
    keywords: ["cardio", "coraz", "iam", "infarto", "arritm", "aorta", "valvul"],
    theme: {
      icon: Heart,
      accentClass: "text-rose-600",
      badgeClass: "border-rose-200 bg-rose-50 text-rose-700",
      cardGradient: "from-rose-100 via-transparent to-orange-50",
      cardBorder: "border-slate-200 hover:border-rose-300",
      cardGlow: "shadow-sm",
      iconBg: "bg-rose-100 text-rose-600",
    },
  },
  {
    keywords: ["neuro", "cerebr", "epilep", "ictus", "cefale"],
    theme: {
      icon: Brain,
      accentClass: "text-violet-600",
      badgeClass: "border-violet-200 bg-violet-50 text-violet-700",
      cardGradient: "from-violet-100 via-transparent to-indigo-50",
      cardBorder: "border-slate-200 hover:border-violet-300",
      cardGlow: "shadow-sm",
      iconBg: "bg-violet-100 text-violet-600",
    },
  },
  {
    keywords: ["infect", "sepsis", "bacter", "viral", "dengue", "tropical"],
    theme: {
      icon: Bug,
      accentClass: "text-emerald-600",
      badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
      cardGradient: "from-emerald-100 via-transparent to-teal-50",
      cardBorder: "border-slate-200 hover:border-emerald-300",
      cardGlow: "shadow-sm",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
  },
  {
    keywords: ["neumo", "pulm", "respir", "eap", "epoc", "asma"],
    theme: {
      icon: AirVent,
      accentClass: "text-sky-600",
      badgeClass: "border-sky-200 bg-sky-50 text-sky-700",
      cardGradient: "from-sky-100 via-transparent to-cyan-50",
      cardBorder: "border-slate-200 hover:border-sky-300",
      cardGlow: "shadow-sm",
      iconBg: "bg-sky-100 text-sky-600",
    },
  },
  {
    keywords: ["endocr", "diabet", "tiroid", "cad", "insulin"],
    theme: {
      icon: Pill,
      accentClass: "text-amber-600",
      badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
      cardGradient: "from-amber-100 via-transparent to-yellow-50",
      cardBorder: "border-slate-200 hover:border-amber-300",
      cardGlow: "shadow-sm",
      iconBg: "bg-amber-100 text-amber-600",
    },
  },
  {
    keywords: ["nefro", "renal", "diálisis", "dialisis"],
    theme: {
      icon: Activity,
      accentClass: "text-cyan-600",
      badgeClass: "border-cyan-200 bg-cyan-50 text-cyan-700",
      cardGradient: "from-cyan-100 via-transparent to-blue-50",
      cardBorder: "border-slate-200 hover:border-cyan-300",
      cardGlow: "shadow-sm",
      iconBg: "bg-cyan-100 text-cyan-600",
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
