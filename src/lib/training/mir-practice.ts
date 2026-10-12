import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { shuffleMirQuestionsOptions } from "@/lib/training/mir-options";
import type { TrainingQuestion } from "@/lib/questions/types";

/** Tamaño de un bloque de práctica corta por especialidad. */
export const MIR_PRACTICE_BLOCK_SIZE = 10;

/** Valor especial para practicar con preguntas de todas las especialidades. */
export const MIR_MIXED_SPECIALTY = "__mixto__";

export type MirSpecialty = {
  /** Clave tal como aparece en `examArea` (p. ej. "CARDIOLOGÍA"). */
  key: string;
  label: string;
  questionCount: number;
};

/** Nombres abreviados que usan algunas preguntas mixtas → especialidad canónica. */
const SPECIALTY_ALIASES: Record<string, string> = {
  INFECCIOSAS: "ENFERMEDADES INFECCIOSAS",
  "MEDICINA DE URGENCIAS": "URGENCIAS",
  VASCULAR: "CIRUGÍA VASCULAR",
};

/**
 * Una pregunta puede pertenecer a varias especialidades: `examArea` usa
 * " / " para las mixtas (p. ej. "REUMATOLOGÍA / NEFROLOGÍA").
 */
export function getQuestionSpecialtyKeys(question: TrainingQuestion): string[] {
  if (!question.examArea) return [];
  const keys = question.examArea
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => SPECIALTY_ALIASES[part] ?? part);
  return [...new Set(keys)];
}

/** "APARATO DIGESTIVO" → "Aparato digestivo". */
export function formatSpecialtyLabel(key: string): string {
  const lower = key.toLocaleLowerCase("es");
  return lower.charAt(0).toLocaleUpperCase("es") + lower.slice(1);
}

/** Especialidades del banco MIR, de la que más preguntas tiene a la que menos. */
export function getMirSpecialties(questions: TrainingQuestion[] = MIR_QUESTIONS): MirSpecialty[] {
  const counts = new Map<string, number>();
  for (const question of questions) {
    for (const key of getQuestionSpecialtyKeys(question)) {
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([key, questionCount]) => ({ key, label: formatSpecialtyLabel(key), questionCount }))
    .sort((a, b) => b.questionCount - a.questionCount || a.label.localeCompare(b.label, "es"));
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Bloque aleatorio de hasta `MIR_PRACTICE_BLOCK_SIZE` preguntas de una
 * especialidad (o mixto), con las opciones barajadas.
 */
export function pickMirPracticeQuestions(
  specialtyKey: string,
  questions: TrainingQuestion[] = MIR_QUESTIONS,
): TrainingQuestion[] {
  const pool =
    specialtyKey === MIR_MIXED_SPECIALTY
      ? questions
      : questions.filter((question) => getQuestionSpecialtyKeys(question).includes(specialtyKey));
  return shuffleMirQuestionsOptions(shuffle(pool).slice(0, MIR_PRACTICE_BLOCK_SIZE));
}

/** Preguntas listas para una sesión (opciones barajadas), en el orden de `ids`. */
export function getMirQuestionsByIds(
  ids: string[],
  questions: TrainingQuestion[] = MIR_QUESTIONS,
): TrainingQuestion[] {
  const byId = new Map(questions.map((question) => [question.id, question]));
  return shuffleMirQuestionsOptions(
    ids.map((id) => byId.get(id)).filter((question): question is TrainingQuestion => Boolean(question)),
  );
}

/** Qué preguntas entran en la práctica según lo que el alumno ya contestó. */
export type MirPracticeStatus = "all" | "new" | "wrong";

export type MirPracticeFilters = {
  status: MirPracticeStatus;
  /** Año del examen oficial; null = todos. */
  year: number | null;
};

export const MIR_DEFAULT_PRACTICE_FILTERS: MirPracticeFilters = { status: "all", year: null };

/** Lo que el alumno ya ha hecho, para filtrar (ver buildMirStudyItems en mir-study-log.ts). */
export type MirPracticeHistory = {
  /** Contestadas alguna vez (o falladas en el repaso). */
  seen: ReadonlySet<string>;
  /** Última respuesta fallada o pendiente en el repaso de errores. */
  wrong: ReadonlySet<string>;
};

/** Años de examen oficial del banco, del más reciente al más antiguo. */
export function getMirOfficialYears(questions: TrainingQuestion[] = MIR_QUESTIONS): number[] {
  const years = new Set<number>();
  for (const question of questions) {
    if (question.officialExam?.year) years.add(question.officialExam.year);
  }
  return [...years].sort((a, b) => b - a);
}

/** Preguntas del banco que cumplen los filtros (las de todas las especialidades). */
export function filterMirPracticePool(
  filters: MirPracticeFilters,
  history: MirPracticeHistory,
  questions: TrainingQuestion[] = MIR_QUESTIONS,
): TrainingQuestion[] {
  return questions.filter((question) => {
    if (filters.year !== null && question.officialExam?.year !== filters.year) return false;
    if (filters.status === "new") return !history.seen.has(question.id);
    if (filters.status === "wrong") return history.wrong.has(question.id);
    return true;
  });
}
