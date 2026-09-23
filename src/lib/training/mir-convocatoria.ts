import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { MIR_2026_01_10_QUESTIONS } from "@/data/mir-2026-01-10-questions";
import { MIR_2026_11_20_QUESTIONS } from "@/data/mir-2026-11-20-questions";
import { MIR_2026_21_30_QUESTIONS } from "@/data/mir-2026-21-30-questions";
import { MIR_2026_31_40_QUESTIONS } from "@/data/mir-2026-31-40-questions";
import { MIR_2026_41_50_QUESTIONS } from "@/data/mir-2026-41-50-questions";
import { MIR_2026_51_60_QUESTIONS } from "@/data/mir-2026-51-60-questions";
import { MIR_2026_61_70_QUESTIONS } from "@/data/mir-2026-61-70-questions";
import { MIR_2026_71_80_QUESTIONS } from "@/data/mir-2026-71-80-questions";
import { MIR_EXAM_DATE } from "@/lib/mir/config";
import type { TrainingQuestion } from "@/lib/questions/types";

/** Banco acumulado de preguntas del módulo MIR (se amplía por lotes de 10). */
const MIR_QUESTIONS: TrainingQuestion[] = [
  ...MIR_2026_01_10_QUESTIONS,
  ...MIR_2026_11_20_QUESTIONS,
  ...MIR_2026_21_30_QUESTIONS,
  ...MIR_2026_31_40_QUESTIONS,
  ...MIR_2026_41_50_QUESTIONS,
  ...MIR_2026_51_60_QUESTIONS,
  ...MIR_2026_61_70_QUESTIONS,
  ...MIR_2026_71_80_QUESTIONS,
];

/**
 * Modelo del módulo "Simulacro MIR". Sigue el mismo patrón que las
 * convocatorias UCC/UMNG (src/lib/training/ucc-convocatoria.ts), pero sin
 * la ventana personalizada por plan: el acceso aquí lo controla la compra
 * (ver src/lib/mir/access.ts), no la fecha de inicio del plan mensual.
 */
export type MirExamEdition = {
  code: string;
  label: string;
  /** Fecha objetivo de estudio o de la convocatoria real (YYYY-MM-DD). */
  examDate: string | null;
  questionCount: number;
  minutes: number;
  questions: TrainingQuestion[];
};

export type MirExamAttempt = {
  editionCode: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  completedAt: string;
  sessionQuestionIds?: string[];
  answersByQuestionId?: Record<string, string>;
  resultId?: string;
};

/**
 * Preguntas propias de Método Q, calibradas al temario/nivel del examen MIR
 * más reciente (MIR 2026, 24 ene 2026). No son transcripción literal del
 * cuadernillo oficial ni de material editorial de terceros — ver TODO en
 * cada lote para ampliar la cobertura por especialidad.
 */
export const MIR_EXAM_EDITIONS: MirExamEdition[] = [
  {
    code: "MIR-2027-SIMULACRO",
    label: "Simulacro MIR",
    examDate: MIR_EXAM_DATE,
    questionCount: MIR_QUESTIONS.length,
    minutes: Math.round(MIR_QUESTIONS.length * (270 / 210)), // ritmo real MIR: 4h30m / 210 preguntas
    questions: MIR_QUESTIONS,
  },
];

function shuffleQuestions<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getMirEdition(code: string): MirExamEdition | null {
  return MIR_EXAM_EDITIONS.find((edition) => edition.code === code) ?? null;
}

export function selectMirExamQuestions(edition: MirExamEdition): TrainingQuestion[] {
  return shuffleQuestions(edition.questions);
}

export function buildMirExamHref(editionCode: string): string {
  const params = new URLSearchParams();
  params.set("mode", "mir");
  params.set("edition", editionCode);
  return `/dashboard/entrenar?${params.toString()}`;
}

export async function getMirAttempt(
  userId: string,
  editionCode: string,
): Promise<MirExamAttempt | null> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const attempts = snap.data()?.mirAttempts as Record<string, MirExamAttempt> | undefined;
    return attempts?.[editionCode] ?? null;
  } catch (error) {
    console.error("No se pudo leer el intento del simulacro MIR.", error);
    return null;
  }
}

export async function saveMirAttempt(userId: string, attempt: MirExamAttempt): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      [`mirAttempts.${attempt.editionCode}`]: attempt,
    },
    { merge: true },
  );
}
