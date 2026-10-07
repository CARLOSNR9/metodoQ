import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";

/**
 * «Mi estudio» MIR: la última respuesta del alumno a cada pregunta que ha
 * contestado (práctica, repaso o simulacro), para poder repasarlas leyendo.
 *
 * Se guarda en `users/{uid}.mirStudyLog` (mapa questionId → entrada). Con el
 * banco completo ocupa del orden de 100 KB, muy por debajo del límite de 1 MB
 * de un documento de Firestore.
 */
export type MirStudyLogEntry = {
  /** Opción marcada la última vez. */
  answer: string;
  correct: boolean;
  /** ISO de la última vez que se contestó. */
  answeredAt: string;
  /** Veces que se ha fallado en total. */
  timesWrong: number;
};

export type MirStudyAnswer = { questionId: string; answer: string; correct: boolean };

const KNOWN_QUESTION_IDS = new Set(MIR_QUESTIONS.map((question) => question.id));

export async function getMirStudyLog(userId: string): Promise<Record<string, MirStudyLogEntry>> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const raw = (snap.data()?.mirStudyLog ?? {}) as Record<string, Partial<MirStudyLogEntry>>;
    return Object.fromEntries(
      Object.entries(raw)
        .filter(([questionId, entry]) => KNOWN_QUESTION_IDS.has(questionId) && entry?.answer)
        .map(([questionId, entry]) => [
          questionId,
          {
            answer: String(entry.answer),
            correct: Boolean(entry.correct),
            answeredAt: String(entry.answeredAt ?? ""),
            timesWrong: Number(entry.timesWrong ?? 0),
          },
        ]),
    );
  } catch (error) {
    console.error("No se pudo leer «Mi estudio» MIR.", error);
    return {};
  }
}

/** Guarda las respuestas de una sesión (solo las contestadas). */
export async function recordMirStudyAnswers(userId: string, answers: MirStudyAnswer[]): Promise<void> {
  if (answers.length === 0) return;
  const answeredAt = new Date().toISOString();
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      mirStudyLog: Object.fromEntries(
        answers.map(({ questionId, answer, correct }) => [
          questionId,
          { answer, correct, answeredAt, timesWrong: increment(correct ? 0 : 1) },
        ]),
      ),
    },
    { merge: true },
  );
}

export type MirStudyItem = {
  questionId: string;
  /** Última opción marcada; `undefined` si es un fallo antiguo sin respuesta guardada. */
  answer?: string;
  /** Última respuesta fallada o pendiente en el repaso de errores. */
  isWrong: boolean;
  /** Pendiente en el repaso de errores. */
  inReview: boolean;
  /** ISO de la última vez que se contestó (o se falló). */
  lastAt: string;
  timesWrong: number;
};

/**
 * Une lo contestado (`mirStudyLog`) con el mazo de repaso (`mirReview`),
 * que tiene fallos de antes de que se guardaran las respuestas. Más
 * recientes primero.
 */
export function buildMirStudyItems(
  log: Record<string, MirStudyLogEntry>,
  reviewEntries: Record<string, { lastWrongAt: string }>,
): MirStudyItem[] {
  const ids = new Set([...Object.keys(log), ...Object.keys(reviewEntries)]);
  return [...ids]
    .map((questionId) => {
      const entry = log[questionId];
      const review = reviewEntries[questionId];
      return {
        questionId,
        answer: entry?.answer,
        isWrong: Boolean(review) || (entry ? !entry.correct : false),
        inReview: Boolean(review),
        lastAt: entry?.answeredAt || review?.lastWrongAt || "",
        timesWrong: entry?.timesWrong ?? (review ? 1 : 0),
      };
    })
    .sort((a, b) => b.lastAt.localeCompare(a.lastAt) || a.questionId.localeCompare(b.questionId));
}
