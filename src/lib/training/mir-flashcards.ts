import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { MIR_MIXED_SPECIALTY, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Tarjetas de repaso rápido MIR: una por pregunta del banco. El anverso es
 * el tema (y su especialidad); el reverso, sus puntos clave. El estudiante
 * se autoevalúa ("Lo sabía" / "Repasar") y el último estado de cada tarjeta
 * se guarda en `users/{uid}.mirFlashcards` (questionId → estado).
 */
export const MIR_FLASHCARD_DECK_SIZE = 10;

/** Mazo especial con las tarjetas marcadas como "Repasar". */
export const MIR_FLASHCARDS_TO_REVIEW = "__repasar__";

export type MirFlashcard = {
  id: string;
  topic: string;
  examArea: string;
  keyPoints: string[];
};

export type MirFlashcardStatus = "known" | "review";
export type MirFlashcardStatuses = Record<string, { status: MirFlashcardStatus; updatedAt: string }>;

function toFlashcard(question: TrainingQuestion): MirFlashcard {
  return {
    id: question.id,
    topic: question.topic,
    examArea: question.examArea ?? "",
    keyPoints: question.keyPoints,
  };
}

/** Solo preguntas con puntos clave dan una tarjeta útil. */
export const MIR_FLASHCARDS: MirFlashcard[] = MIR_QUESTIONS.filter(
  (question) => question.keyPoints.length > 0,
).map(toFlashcard);

const QUESTIONS_BY_ID = new Map(MIR_QUESTIONS.map((question) => [question.id, question]));

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Tarjetas de un mazo sin límite de tamaño (para contar cuántas hay). */
export function getMirFlashcardPool(deckKey: string, statuses: MirFlashcardStatuses): MirFlashcard[] {
  if (deckKey === MIR_FLASHCARDS_TO_REVIEW) {
    return MIR_FLASHCARDS.filter((card) => statuses[card.id]?.status === "review");
  }
  if (deckKey === MIR_MIXED_SPECIALTY) return MIR_FLASHCARDS;
  return MIR_FLASHCARDS.filter((card) => {
    const question = QUESTIONS_BY_ID.get(card.id);
    return question ? getQuestionSpecialtyKeys(question).includes(deckKey) : false;
  });
}

/**
 * Ronda de hasta `MIR_FLASHCARD_DECK_SIZE` tarjetas: primero las que aún no
 * se han visto o están para repasar, y al final las que ya se sabían.
 */
export function buildMirFlashcardRound(deckKey: string, statuses: MirFlashcardStatuses): MirFlashcard[] {
  const pool = shuffle(getMirFlashcardPool(deckKey, statuses));
  const pending = pool.filter((card) => statuses[card.id]?.status !== "known");
  const known = pool.filter((card) => statuses[card.id]?.status === "known");
  return [...pending, ...known].slice(0, MIR_FLASHCARD_DECK_SIZE);
}

export async function getMirFlashcardStatuses(userId: string): Promise<MirFlashcardStatuses> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    return (snap.data()?.mirFlashcards ?? {}) as MirFlashcardStatuses;
  } catch (error) {
    console.error("No se pudieron leer las tarjetas MIR.", error);
    return {};
  }
}

export async function saveMirFlashcardStatuses(
  userId: string,
  ratings: Record<string, MirFlashcardStatus>,
): Promise<void> {
  const updatedAt = new Date().toISOString();
  const update = Object.fromEntries(
    Object.entries(ratings).map(([cardId, status]) => [cardId, { status, updatedAt }]),
  );
  if (Object.keys(update).length === 0) return;
  await setDoc(doc(getFirebaseDb(), "users", userId), { mirFlashcards: update }, { merge: true });
}
