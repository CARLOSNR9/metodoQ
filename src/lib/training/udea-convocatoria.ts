import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  UDEA_SIMULACRO_1_QUESTIONS,
  UDEA_SIMULACRO_2_QUESTIONS,
  UDEA_SIMULACRO_3_QUESTIONS,
  UDEA_SIMULACRO_4_QUESTIONS,
  UDEA_SIMULACRO_5_QUESTIONS,
  UDEA_SIMULACRO_6_QUESTIONS,
  UDEA_SIMULACRO_QUESTION_COUNT,
} from "@/data/udea-simulacros";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserDemoResults } from "@/lib/results";
import type { TrainingQuestion } from "@/lib/questions/types";

export const UDEA_EDITION_PREFIX = "UDEA-";

export type UdeaConvocatoriaEdition = {
  code: string;
  label: string;
  /** Subtítulo corto del simulacro (enfoque). */
  subtitle: string;
  /** Fecha desde la que se habilita (YYYY-MM-DD o ISO). */
  examDate: string;
  questionCount: number;
  minutes: number;
  questions: TrainingQuestion[];
};

export type UdeaConvocatoriaAttempt = {
  editionCode: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  completedAt: string;
  sessionQuestionIds?: string[];
  answersByQuestionId?: Record<string, string>;
  resultId?: string;
};

export type UdeaConvocatoriaEditionStatus = {
  edition: UdeaConvocatoriaEdition;
  phase: "upcoming" | "open" | "closed";
  attempt: UdeaConvocatoriaAttempt | null;
  canStart: boolean;
  opensLabel: string;
  closesLabel: string | null;
};

/** 70 preguntas en 105 min = 1,5 min por pregunta (ritmo objetivo de entrenamiento). */
const QUESTIONS = UDEA_SIMULACRO_QUESTION_COUNT;
const MINUTES = 105;

/** Edición que reproduce el examen real de la UdeA (se presenta en su orden original). */
export const UDEA_REAL_EXAM_EDITION_CODE = "UDEA-ED1";

/**
 * Calendario hacia el examen estimado de abril de 2027. Cada simulacro se
 * habilita en su fecha y queda abierto (un intento por edición).
 */
export const UDEA_CONVOCATORIA_EDITIONS: UdeaConvocatoriaEdition[] = [
  {
    code: UDEA_REAL_EXAM_EDITION_CODE,
    label: "Examen real UdeA",
    subtitle: "Las 70 preguntas de un examen de admisión de la UdeA · tu punto de partida",
    examDate: "2026-11-24",
    questionCount: QUESTIONS,
    minutes: MINUTES,
    questions: UDEA_SIMULACRO_1_QUESTIONS,
  },
  {
    code: "UDEA-ED2",
    label: "Simulacro #2",
    subtitle: "Medicina interna, pediatría y urgencias",
    examDate: "2026-12-14",
    questionCount: QUESTIONS,
    minutes: MINUTES,
    questions: UDEA_SIMULACRO_2_QUESTIONS,
  },
  {
    code: "UDEA-ED3",
    label: "Simulacro #3",
    subtitle: "Arranque de año · cobertura total",
    examDate: "2027-01-12",
    questionCount: QUESTIONS,
    minutes: MINUTES,
    questions: UDEA_SIMULACRO_3_QUESTIONS,
  },
  {
    code: "UDEA-ED4",
    label: "Simulacro #4",
    subtitle: "Ritmo de examen · 1,5 min por pregunta",
    examDate: "2027-02-08",
    questionCount: QUESTIONS,
    minutes: MINUTES,
    questions: UDEA_SIMULACRO_4_QUESTIONS,
  },
  {
    code: "UDEA-ED5",
    label: "Simulacro #5",
    subtitle: "Resistencia y repaso de errores",
    examDate: "2027-03-08",
    questionCount: QUESTIONS,
    minutes: MINUTES,
    questions: UDEA_SIMULACRO_5_QUESTIONS,
  },
  {
    code: "UDEA-ED6",
    label: "Simulacro final",
    subtitle: "Condiciones reales, dos semanas antes del examen",
    examDate: "2027-03-29",
    questionCount: QUESTIONS,
    minutes: MINUTES,
    questions: UDEA_SIMULACRO_6_QUESTIONS,
  },
];

function parseLocalDate(dateKey: string): Date {
  if (dateKey.includes("T")) return new Date(dateKey);
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

function formatEditionDate(dateKey: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parseLocalDate(dateKey));
}

function shuffleQuestions<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function isUdeaEditionCode(code: string | null | undefined): boolean {
  return Boolean(code?.startsWith(UDEA_EDITION_PREFIX));
}

/** El calendario UdeA es global (mismas fechas para todos). */
export function getUserConvocatoriaSchedule(): UdeaConvocatoriaEdition[] {
  return UDEA_CONVOCATORIA_EDITIONS;
}

export function getConvocatoriaEdition(code: string): UdeaConvocatoriaEdition | null {
  return UDEA_CONVOCATORIA_EDITIONS.find((edition) => edition.code === code) ?? null;
}

export function selectConvocatoriaExamQuestions(
  edition: UdeaConvocatoriaEdition,
): TrainingQuestion[] {
  // El examen real conserva el orden del cuadernillo.
  if (edition.code === UDEA_REAL_EXAM_EDITION_CODE) return [...edition.questions];
  return shuffleQuestions(edition.questions);
}

export function buildConvocatoriaExamHref(editionCode: string): string {
  const params = new URLSearchParams();
  params.set("mode", "convocatoria");
  params.set("edition", editionCode);
  return `/dashboard/entrenar?${params.toString()}`;
}

function getEditionPhase(
  edition: UdeaConvocatoriaEdition,
  today: Date,
): UdeaConvocatoriaEditionStatus["phase"] {
  if (edition.questions.length === 0) return "upcoming";
  return today.getTime() >= parseLocalDate(edition.examDate).getTime() ? "open" : "upcoming";
}

export async function getConvocatoriaAttempt(
  userId: string,
  editionCode: string,
): Promise<UdeaConvocatoriaAttempt | null> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const attempts = snap.data()?.convocatoriaAttempts as
      | Record<string, UdeaConvocatoriaAttempt>
      | undefined;
    return attempts?.[editionCode] ?? null;
  } catch (error) {
    console.error("No se pudo leer el intento de convocatoria.", error);
    return null;
  }
}

/** Lee el intento guardado o lo reconstruye desde el historial si falta. */
export async function resolveConvocatoriaAttempt(
  userId: string,
  editionCode: string,
): Promise<UdeaConvocatoriaAttempt | null> {
  const stored = await getConvocatoriaAttempt(userId, editionCode);
  if (stored?.sessionQuestionIds?.length && stored.answersByQuestionId) return stored;

  try {
    const results = await getUserDemoResults(userId);
    const match = results.find(
      (item) => item.sessionType === "convocatoria" && item.convocatoriaEdition === editionCode,
    );
    if (!match) return stored ?? null;

    const attempt: UdeaConvocatoriaAttempt = {
      editionCode,
      scorePercentage: match.scorePercentage,
      correctAnswers: match.correctAnswers,
      wrongAnswers: match.wrongAnswers,
      completedAt: stored?.completedAt ?? match.fechaIso ?? new Date().toISOString(),
      sessionQuestionIds: match.sessionQuestionIds,
      answersByQuestionId: match.answersByQuestionId,
      resultId: stored?.resultId ?? match.id,
    };
    void saveConvocatoriaAttempt(userId, attempt).catch((error) => {
      console.error("No se pudo sincronizar el intento de convocatoria.", error);
    });
    return attempt;
  } catch (error) {
    console.error("No se pudo resolver el intento de convocatoria.", error);
    return stored ?? null;
  }
}

export async function saveConvocatoriaAttempt(
  userId: string,
  attempt: UdeaConvocatoriaAttempt,
): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    { [`convocatoriaAttempts.${attempt.editionCode}`]: attempt },
    { merge: true },
  );
}

/** Última edición ya habilitada (la que se destaca en el panel). */
export function getFeaturedConvocatoriaEditionForUser(
  _planStartedAt?: string | null,
  today: Date = new Date(),
): UdeaConvocatoriaEdition | null {
  for (let i = UDEA_CONVOCATORIA_EDITIONS.length - 1; i >= 0; i -= 1) {
    const edition = UDEA_CONVOCATORIA_EDITIONS[i];
    if (getEditionPhase(edition, today) === "open") return edition;
  }
  return null;
}

export function buildConvocatoriaEditionStatus(options: {
  edition: UdeaConvocatoriaEdition;
  schedule: UdeaConvocatoriaEdition[];
  attempt?: UdeaConvocatoriaAttempt | null;
  today?: Date;
}): UdeaConvocatoriaEditionStatus {
  const phase = getEditionPhase(options.edition, options.today ?? new Date());
  const attempt = options.attempt ?? null;
  return {
    edition: options.edition,
    phase,
    attempt,
    canStart: phase === "open" && !attempt,
    opensLabel: formatEditionDate(options.edition.examDate),
    closesLabel: null,
  };
}
