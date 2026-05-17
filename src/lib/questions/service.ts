import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";
import type { TrainingQuestion } from "./types";

const COLLECTION = "questions";

function mapDocToQuestion(id: string, data: Record<string, unknown>): TrainingQuestion {
  return {
    id,
    topic: String(data.topic ?? "General"),
    statement: String(data.statement ?? ""),
    options: (data.options as TrainingQuestion["options"]) ?? [],
    correctOptionId: String(data.correctOptionId ?? "A"),
    explanation: String(data.explanation ?? ""),
    keyPoints: (data.keyPoints as string[]) ?? [],
    difficulty: (data.difficulty as TrainingQuestion["difficulty"]) ?? "medium",
    tags: (data.tags as string[]) ?? [],
    active: data.active !== false,
  };
}

/** Preguntas activas: Firestore primero; fallback local si la colección está vacía. */
export async function getActiveQuestions(): Promise<TrainingQuestion[]> {
  try {
    const db = getFirebaseDb();
    const q = query(collection(db, COLLECTION), where("active", "==", true));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return [...FALLBACK_QUESTIONS];
    }

    return snapshot.docs.map((docItem) => mapDocToQuestion(docItem.id, docItem.data()));
  } catch (error) {
    console.warn("Firestore questions unavailable, using fallback.", error);
    return [...FALLBACK_QUESTIONS];
  }
}

export async function createQuestion(
  input: Omit<TrainingQuestion, "id">,
): Promise<string> {
  const db = getFirebaseDb();
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...input,
    active: input.active !== false,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function seedFallbackQuestionsToFirestore(): Promise<number> {
  const existing = await getDocs(collection(getFirebaseDb(), COLLECTION));
  if (existing.size > 0) {
    return 0;
  }

  let count = 0;
  for (const question of FALLBACK_QUESTIONS) {
    await createQuestion({ ...question, active: true });
    count += 1;
  }
  return count;
}
