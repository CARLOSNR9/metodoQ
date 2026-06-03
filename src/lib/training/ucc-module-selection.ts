import type { TrainingQuestion } from "@/lib/questions/types";
import type { UccMiBlockKind } from "@/lib/training/ucc-mi-daily-plan";
import {
  getPlanWeekNumber,
  getUccMiWeekModule,
} from "@/lib/training/ucc-mi-daily-plan";
import { selectAdaptiveQuestions } from "@/lib/training/adaptive";
import { selectAdaptiveQuestionsWithCycle } from "@/lib/training/question-cycle";

type UserLearningProfile = {
  weaknesses: string[];
  strengths: string[];
  topicStats: Record<string, { correct: number; wrong: number }>;
};

/** Palabras clave por módulo semanal para filtrar preguntas del banco. */
const MODULE_KEYWORDS: Record<string, string[]> = {
  "Fase 1": [
    "farmac", "inmunolog", "epidemiolog", "bioquim", "fisiolog", "molecular",
    "salud pública", "salud publica", "bioestad", "infecc", "básicas", "basicas",
  ],
  Cardiología: ["cardio", "iam", "infarto", "arritmia", "insuficiencia cardíaca", "icc", "sca"],
  Reumatología: ["reuma", "artritis", "lupus", "vasculitis", "conectiv"],
  Gastroenterología: ["gastro", "hda", "cirrosis", "eii", "hepat", "pancreat"],
  Nefrología: ["nefro", "renal", "ira", "erc", "electrolit", "diálisis", "dialisis"],
  Neumología: ["neumo", "epoc", "asma", "neumon", "respirator", "vni"],
  Endocrinología: ["endocrin", "diabetes", "tiroides", "dm1", "dm2", "cad", "adrenal"],
  Hematología: ["hemato", "anemia", "coagul", "leucem", "tromb"],
  Neurología: ["neuro", "acv", "nihss", "trombol", "epilep", "cefalea"],
  Infectología: ["infecto", "sepsis", "antibiót", "antibiot", "tropical", "vih", "tuberc"],
  Urgencias: ["urgenc", "toxicolog", "cuidado crítico", "uci", "shock", "geriatr", "vejez"],
  Simulacros: [],
};

function questionMatchesKeywords(question: TrainingQuestion, keywords: string[]): boolean {
  if (keywords.length === 0) return true;
  const blob = [
    question.examArea ?? "",
    question.topic,
    ...(question.tags ?? []),
    question.statement.slice(0, 200),
  ]
    .join(" ")
    .toLowerCase();

  return keywords.some((kw) => blob.includes(kw));
}

function filterPoolByModule(
  questions: TrainingQuestion[],
  moduleLabel: string,
): TrainingQuestion[] {
  const keywords = MODULE_KEYWORDS[moduleLabel] ?? [];
  if (keywords.length === 0) return questions;

  const matched = questions.filter((q) => questionMatchesKeywords(q, keywords));
  return matched.length >= 3 ? matched : questions;
}

function filterPoolExcludingModule(
  questions: TrainingQuestion[],
  moduleLabel: string,
): TrainingQuestion[] {
  const keywords = MODULE_KEYWORDS[moduleLabel] ?? [];
  if (keywords.length === 0) return questions;

  const excluded = questions.filter((q) => !questionMatchesKeywords(q, keywords));
  return excluded.length >= 3 ? excluded : questions;
}

function filterPoolByWeaknesses(
  questions: TrainingQuestion[],
  weaknesses: string[],
): TrainingQuestion[] {
  if (weaknesses.length === 0) return questions;

  const matched = questions.filter((q) => {
    const blob = `${q.topic} ${q.examArea ?? ""}`.toLowerCase();
    return weaknesses.some((w) => blob.includes(w.toLowerCase()));
  });

  return matched.length >= 2 ? matched : questions;
}

export function selectUccTrainingQuestions(options: {
  questions: TrainingQuestion[];
  count: number;
  profile: UserLearningProfile;
  blockKind?: UccMiBlockKind | null;
  planStartedAt?: string | null;
  fullBank?: TrainingQuestion[];
  seenIds?: Set<string>;
  cycleReset?: boolean;
}): TrainingQuestion[] {
  const { questions, count, profile, blockKind, planStartedAt, fullBank, seenIds, cycleReset } =
    options;
  const module = getUccMiWeekModule(planStartedAt);
  let pool = [...questions];

  if (blockKind === "new") {
    pool = filterPoolByModule(pool, module.label);
  } else if (blockKind === "review") {
    pool = filterPoolExcludingModule(pool, module.label);
  } else if (blockKind === "weak") {
    pool = filterPoolByWeaknesses(pool, profile.weaknesses);
  } else if (getPlanWeekNumber(planStartedAt) >= 23) {
    pool = questions;
  } else {
    pool = filterPoolByModule(pool, module.label);
  }

  if (fullBank && seenIds) {
    return selectAdaptiveQuestionsWithCycle(
      pool,
      fullBank,
      count,
      profile,
      seenIds,
      cycleReset ?? false,
    );
  }

  return selectAdaptiveQuestions(pool, count, profile);
}

export function getModuleKeywordsForWeek(planStartedAt?: string | null): string[] {
  const module = getUccMiWeekModule(planStartedAt);
  return MODULE_KEYWORDS[module.label] ?? [];
}
