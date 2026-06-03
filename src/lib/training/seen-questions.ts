import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import type { TrainingQuestion } from "@/lib/questions/types";
import {
  buildBankIdSet,
  isBankCycleComplete,
  pruneSeenIdsForBank,
} from "@/lib/training/question-cycle";

export async function getSeenQuestionIds(userId: string): Promise<Set<string>> {
  const snapshot = await getDoc(doc(getFirebaseDb(), "users", userId));
  const raw = snapshot.data()?.seenQuestionIds;
  if (!Array.isArray(raw)) return new Set();
  return new Set(raw.filter((id): id is string => typeof id === "string"));
}

/** Si ya vio todo el banco activo, reinicia el ciclo antes de seleccionar la sesión. */
export async function prepareQuestionCycle(
  userId: string,
  fullBank: TrainingQuestion[],
): Promise<{ seenIds: Set<string>; cycleReset: boolean }> {
  const bankIds = buildBankIdSet(fullBank);
  const seenIds = await getSeenQuestionIds(userId);

  if (!isBankCycleComplete(seenIds, bankIds)) {
    return { seenIds, cycleReset: false };
  }

  const remaining = pruneSeenIdsForBank(seenIds, bankIds);
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      seenQuestionIds: remaining,
      questionCycleCount: increment(1),
      lastQuestionCycleResetAt: serverTimestamp(),
    },
    { merge: true },
  );

  return { seenIds: new Set(remaining), cycleReset: true };
}

export async function markQuestionSeen(userId: string, questionId: string): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      seenQuestionIds: arrayUnion(questionId),
      lastQuestionSeenAt: serverTimestamp(),
    },
    { merge: true },
  );
}
