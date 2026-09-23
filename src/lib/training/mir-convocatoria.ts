import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import type { TrainingQuestion } from "@/lib/questions/types";

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
 * TODO(contenido): cargar aquí las ediciones reales una vez definido el
 * banco de preguntas (fuente: exámenes oficiales publicados por el
 * Ministerio de Sanidad; los comentarios/explicaciones deben redactarse
 * con contenido propio, no copiados de material editorial de terceros).
 */
export const MIR_EXAM_EDITIONS: MirExamEdition[] = [];

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
