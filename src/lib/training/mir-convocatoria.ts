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
import { MIR_2026_81_90_QUESTIONS } from "@/data/mir-2026-81-90-questions";
import { MIR_2026_91_100_QUESTIONS } from "@/data/mir-2026-91-100-questions";
import { MIR_2026_101_110_QUESTIONS } from "@/data/mir-2026-101-110-questions";
import { MIR_2026_111_120_QUESTIONS } from "@/data/mir-2026-111-120-questions";
import { MIR_2026_121_130_QUESTIONS } from "@/data/mir-2026-121-130-questions";
import { MIR_2026_131_140_QUESTIONS } from "@/data/mir-2026-131-140-questions";
import { MIR_2026_141_150_QUESTIONS } from "@/data/mir-2026-141-150-questions";
import { MIR_2026_151_160_QUESTIONS } from "@/data/mir-2026-151-160-questions";
import { MIR_2026_161_170_QUESTIONS } from "@/data/mir-2026-161-170-questions";
import { MIR_2026_171_180_QUESTIONS } from "@/data/mir-2026-171-180-questions";
import { MIR_2026_181_190_QUESTIONS } from "@/data/mir-2026-181-190-questions";
import { MIR_2026_191_200_QUESTIONS } from "@/data/mir-2026-191-200-questions";
import { MIR_EXAM_DATE } from "@/lib/mir/config";
import { shuffleMirQuestionsOptions } from "@/lib/training/mir-options";
import type { TrainingQuestion } from "@/lib/questions/types";

/** Simulacro 1: preguntas 1–100 del banco (se amplía por lotes de 10). */
const MIR_SIMULACRO_1_QUESTIONS: TrainingQuestion[] = [
  ...MIR_2026_01_10_QUESTIONS,
  ...MIR_2026_11_20_QUESTIONS,
  ...MIR_2026_21_30_QUESTIONS,
  ...MIR_2026_31_40_QUESTIONS,
  ...MIR_2026_41_50_QUESTIONS,
  ...MIR_2026_51_60_QUESTIONS,
  ...MIR_2026_61_70_QUESTIONS,
  ...MIR_2026_71_80_QUESTIONS,
  ...MIR_2026_81_90_QUESTIONS,
  ...MIR_2026_91_100_QUESTIONS,
];

/** Simulacro 2: preguntas 101–200, con más peso en las áreas poco cubiertas del 1. */
const MIR_SIMULACRO_2_QUESTIONS: TrainingQuestion[] = [
  ...MIR_2026_101_110_QUESTIONS,
  ...MIR_2026_111_120_QUESTIONS,
  ...MIR_2026_121_130_QUESTIONS,
  ...MIR_2026_131_140_QUESTIONS,
  ...MIR_2026_141_150_QUESTIONS,
  ...MIR_2026_151_160_QUESTIONS,
  ...MIR_2026_161_170_QUESTIONS,
  ...MIR_2026_171_180_QUESTIONS,
  ...MIR_2026_181_190_QUESTIONS,
  ...MIR_2026_191_200_QUESTIONS,
];

/** Banco completo de preguntas del módulo MIR. */
export const MIR_QUESTIONS: TrainingQuestion[] = [
  ...MIR_SIMULACRO_1_QUESTIONS,
  ...MIR_SIMULACRO_2_QUESTIONS,
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
  description: string;
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

/** Ritmo real del MIR: 4 h 30 min para 210 preguntas (200 + 10 de reserva). */
function getMirExamMinutes(questionCount: number): number {
  return Math.round(questionCount * (270 / 210));
}

function buildEdition(
  code: string,
  label: string,
  description: string,
  questions: TrainingQuestion[],
): MirExamEdition {
  return {
    code,
    label,
    description,
    examDate: MIR_EXAM_DATE,
    questionCount: questions.length,
    minutes: getMirExamMinutes(questions.length),
    questions,
  };
}

/**
 * Preguntas propias de Método Q, calibradas al temario/nivel del examen MIR
 * más reciente (MIR 2026, 24 ene 2026). No son transcripción literal del
 * cuadernillo oficial ni de material editorial de terceros.
 *
 * "MIR-2027-SIMULACRO" conserva su código original para que los intentos ya
 * guardados sigan asociados al Simulacro 1. Las ediciones sin preguntas no
 * se muestran.
 */
export const MIR_EXAM_EDITIONS: MirExamEdition[] = [
  buildEdition(
    "MIR-2027-SIMULACRO",
    "Simulacro 1",
    "Primer bloque del banco: todas las grandes especialidades.",
    MIR_SIMULACRO_1_QUESTIONS,
  ),
  buildEdition(
    "MIR-2027-SIMULACRO-2",
    "Simulacro 2",
    "Preguntas nuevas, con más estadística, gineco-obstetricia y especialidades pequeñas.",
    MIR_SIMULACRO_2_QUESTIONS,
  ),
  buildEdition(
    "MIR-2027-SIMULACRO-COMPLETO",
    "Simulacro completo",
    "Las 200 preguntas del banco en una sola sesión, como el examen real.",
    MIR_SIMULACRO_2_QUESTIONS.length > 0 ? MIR_QUESTIONS : [],
  ),
].filter((edition) => edition.questions.length > 0);

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
  return shuffleMirQuestionsOptions(shuffleQuestions(edition.questions));
}

/** Pantalla del simulacro con la edición ya elegida. */
export function buildMirSimulacroHref(editionCode: string): string {
  return `/dashboard/mir/simulacro?edicion=${encodeURIComponent(editionCode)}`;
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
    const data = snap.data();
    const attempts = data?.mirAttempts as Record<string, MirExamAttempt> | undefined;
    // Intentos antiguos quedaron en un campo literal "mirAttempts.<code>" (setDoc no
    // interpreta los puntos como ruta anidada); se siguen leyendo como respaldo.
    const legacyAttempt = data?.[`mirAttempts.${editionCode}`] as MirExamAttempt | undefined;
    return attempts?.[editionCode] ?? legacyAttempt ?? null;
  } catch (error) {
    console.error("No se pudo leer el intento del simulacro MIR.", error);
    return null;
  }
}

export async function saveMirAttempt(userId: string, attempt: MirExamAttempt): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    { mirAttempts: { [attempt.editionCode]: attempt } },
    { merge: true },
  );
}
