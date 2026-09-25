import { deleteField, doc, getDoc, increment, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";

/**
 * Repaso de errores MIR con repetición espaciada. Cada pregunta fallada
 * (en práctica, simulacro o repaso) entra al mazo y vuelve a salir a los
 * 1, 3 y 7 días. Acertarla en el repaso la sube de paso; acertarla en el
 * último paso la da por dominada y sale del mazo. Fallarla la reinicia.
 *
 * Se guarda en `users/{uid}.mirReview` (mapa questionId → entrada) y el
 * total de dominadas en `users/{uid}.mirReviewMastered`.
 */
export const MIR_REVIEW_INTERVAL_DAYS = [1, 3, 7] as const;

export type MirReviewEntry = {
  /** Índice en MIR_REVIEW_INTERVAL_DAYS del intervalo actual. */
  step: number;
  /** Fecha local (YYYY-MM-DD) desde la que la pregunta toca repasarse. */
  dueDate: string;
  lastWrongAt: string;
};

export type MirReviewDeck = {
  entries: Record<string, MirReviewEntry>;
  masteredCount: number;
};

export type MirAnswerOutcome = { questionId: string; correct: boolean };

/** "practice" y "exam" solo añaden fallos; "review" además avanza los aciertos. */
export type MirAnswerSource = "practice" | "exam" | "review";

const EMPTY_DECK: MirReviewDeck = { entries: {}, masteredCount: 0 };
const KNOWN_QUESTION_IDS = new Set(MIR_QUESTIONS.map((question) => question.id));

function addDays(date: Date, days: number): string {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return getLocalDateKey(next);
}

export async function getMirReviewDeck(userId: string): Promise<MirReviewDeck> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const data = snap.data();
    if (!data) return EMPTY_DECK;
    const rawEntries = (data.mirReview ?? {}) as Record<string, MirReviewEntry>;
    // Ignora preguntas que ya no estén en el banco.
    const entries = Object.fromEntries(
      Object.entries(rawEntries).filter(([questionId]) => KNOWN_QUESTION_IDS.has(questionId)),
    );
    return { entries, masteredCount: Number(data.mirReviewMastered ?? 0) };
  } catch (error) {
    console.error("No se pudo leer el repaso de errores MIR.", error);
    return EMPTY_DECK;
  }
}

/** Ids de las preguntas que toca repasar hoy, primero las más atrasadas. */
export function getDueMirReviewIds(deck: MirReviewDeck, today: Date = new Date()): string[] {
  const todayKey = getLocalDateKey(today);
  return Object.entries(deck.entries)
    .filter(([, entry]) => entry.dueDate <= todayKey)
    .sort(([, a], [, b]) => a.dueDate.localeCompare(b.dueDate))
    .map(([questionId]) => questionId);
}

/**
 * Calcula los cambios del mazo tras una sesión. `null` significa que la
 * pregunta queda dominada y sale del mazo.
 */
export function computeMirReviewUpdates(
  currentEntries: Record<string, MirReviewEntry>,
  outcomes: MirAnswerOutcome[],
  source: MirAnswerSource,
  now: Date = new Date(),
): { updates: Record<string, MirReviewEntry | null>; newlyMastered: number } {
  const updates: Record<string, MirReviewEntry | null> = {};
  let newlyMastered = 0;

  for (const { questionId, correct } of outcomes) {
    if (!correct) {
      updates[questionId] = {
        step: 0,
        dueDate: addDays(now, MIR_REVIEW_INTERVAL_DAYS[0]),
        lastWrongAt: now.toISOString(),
      };
      continue;
    }
    if (source !== "review") continue;

    const entry = currentEntries[questionId];
    if (!entry) continue;
    const nextStep = entry.step + 1;
    if (nextStep >= MIR_REVIEW_INTERVAL_DAYS.length) {
      updates[questionId] = null;
      newlyMastered += 1;
    } else {
      updates[questionId] = {
        ...entry,
        step: nextStep,
        dueDate: addDays(now, MIR_REVIEW_INTERVAL_DAYS[nextStep]),
      };
    }
  }

  return { updates, newlyMastered };
}

/** Actualiza el mazo en Firestore con las respuestas de una sesión. */
export async function recordMirAnswers(
  userId: string,
  outcomes: MirAnswerOutcome[],
  source: MirAnswerSource,
): Promise<void> {
  if (outcomes.length === 0) return;

  const needsCurrentDeck = source === "review" && outcomes.some((outcome) => outcome.correct);
  const currentEntries = needsCurrentDeck ? (await getMirReviewDeck(userId)).entries : {};
  const { updates, newlyMastered } = computeMirReviewUpdates(currentEntries, outcomes, source);

  if (Object.keys(updates).length === 0) return;

  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      mirReview: Object.fromEntries(
        Object.entries(updates).map(([questionId, entry]) => [questionId, entry ?? deleteField()]),
      ),
      ...(newlyMastered > 0 ? { mirReviewMastered: increment(newlyMastered) } : {}),
    },
    { merge: true },
  );
}
