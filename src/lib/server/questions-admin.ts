import { FieldValue } from "firebase-admin/firestore";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { EXTENDED_QUESTIONS } from "@/data/extended-questions";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";

const COLLECTION = "questions";

export async function adminCreateQuestion(input: {
  topic: string;
  statement: string;
  options: { id: string; label: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  keyPoints?: string[];
}) {
  const ref = await getFirebaseAdminDb().collection(COLLECTION).add({
    ...input,
    keyPoints: input.keyPoints ?? [],
    active: true,
    createdAt: FieldValue.serverTimestamp(),
  });
  return ref.id;
}

export async function adminSeedFallbackQuestions() {
  const db = getFirebaseAdminDb();
  const existing = await db.collection(COLLECTION).limit(1).get();
  if (!existing.empty) {
    return 0;
  }

  let count = 0;
  for (const question of FALLBACK_QUESTIONS) {
    await db.collection(COLLECTION).add({
      ...question,
      active: true,
      createdAt: FieldValue.serverTimestamp(),
    });
    count += 1;
  }
  return count;
}

/** Agrega preguntas extendidas usando el id como documento (omite las que ya existen). */
export async function adminSeedExtendedQuestions() {
  const db = getFirebaseAdminDb();
  let added = 0;

  for (const question of EXTENDED_QUESTIONS) {
    const ref = db.collection(COLLECTION).doc(question.id);
    const existing = await ref.get();
    if (existing.exists) continue;

    await ref.set({
      ...question,
      active: true,
      createdAt: FieldValue.serverTimestamp(),
    });
    added += 1;
  }

  return added;
}
