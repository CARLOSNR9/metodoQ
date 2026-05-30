import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";
import type { SessionTypeLabel } from "@/lib/results";
import type { UccMiBlockKind } from "@/lib/training/ucc-mi-daily-plan";

const COLLECTION = "failedQuestions";

export type FailedQuestionContext = {
  sessionType: SessionTypeLabel | "training";
  uccBlockKind?: UccMiBlockKind | null;
  mode?: string | null;
  source?: string | null;
};

export type FailedQuestionRecord = {
  id: string;
  userId: string;
  questionId: string;
  dateKey: string;
  topic: string;
  statementPreview: string;
  selectedOptionId: string;
  context: FailedQuestionContext;
  failCount: number;
  resolved: boolean;
  failedAtIso: string | null;
};

function buildDocId(userId: string, dateKey: string, questionId: string) {
  return `${userId}_${dateKey}_${questionId}`;
}

function truncateStatement(statement: string, max = 120) {
  const trimmed = statement.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1)}…`;
}

function mapFailedDoc(
  docId: string,
  data: Record<string, unknown>,
): FailedQuestionRecord {
  const failedAt = data.failedAt as { toDate?: () => Date } | undefined;
  const date = failedAt?.toDate?.() ?? null;

  return {
    id: docId,
    userId: String(data.userId ?? ""),
    questionId: String(data.questionId ?? ""),
    dateKey: String(data.dateKey ?? ""),
    topic: String(data.topic ?? "General"),
    statementPreview: String(data.statementPreview ?? ""),
    selectedOptionId: String(data.selectedOptionId ?? ""),
    context: (data.context as FailedQuestionContext) ?? {
      sessionType: "training",
    },
    failCount: Number(data.failCount ?? 1),
    resolved: data.resolved === true,
    failedAtIso: date ? date.toISOString() : null,
  };
}

export async function recordFailedQuestion(input: {
  userId: string;
  questionId: string;
  topic: string;
  statement: string;
  selectedOptionId: string;
  context: FailedQuestionContext;
  date?: Date;
}) {
  const dateKey = getLocalDateKey(input.date ?? new Date());
  const docId = buildDocId(input.userId, dateKey, input.questionId);
  const ref = doc(getFirebaseDb(), COLLECTION, docId);
  const existingSnap = await getDoc(ref);
  const previous = existingSnap.data() as Record<string, unknown> | undefined;
  const failCount = Number(previous?.failCount ?? 0) + 1;

  await setDoc(
    ref,
    {
      userId: input.userId,
      questionId: input.questionId,
      dateKey,
      topic: input.topic,
      statementPreview: truncateStatement(input.statement),
      selectedOptionId: input.selectedOptionId,
      context: input.context,
      failCount,
      resolved: false,
      failedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function resolveFailedQuestion(
  userId: string,
  questionId: string,
  date?: Date,
) {
  const dateKey = getLocalDateKey(date ?? new Date());
  const docId = buildDocId(userId, dateKey, questionId);
  const ref = doc(getFirebaseDb(), COLLECTION, docId);

  await setDoc(
    ref,
    {
      resolved: true,
      resolvedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function getFailedQuestionsForDate(
  userId: string,
  dateKey: string,
  options?: { unresolvedOnly?: boolean },
): Promise<FailedQuestionRecord[]> {
  const q = query(
    collection(getFirebaseDb(), COLLECTION),
    where("userId", "==", userId),
    where("dateKey", "==", dateKey),
  );
  const snapshot = await getDocs(q);

  return snapshot.docs
    .map((docItem) => mapFailedDoc(docItem.id, docItem.data()))
    .filter((item) => (options?.unresolvedOnly ? !item.resolved : true))
    .sort(
      (a, b) =>
        new Date(b.failedAtIso ?? 0).getTime() -
        new Date(a.failedAtIso ?? 0).getTime(),
    );
}

export async function getTodayFailedQuestions(
  userId: string,
  options?: { unresolvedOnly?: boolean },
) {
  const todayKey = getLocalDateKey(new Date());
  return getFailedQuestionsForDate(userId, todayKey, options);
}

export function pickQuestionsFromBankByIds<T extends { id: string }>(
  bank: T[],
  questionIds: string[],
): T[] {
  const byId = new Map(bank.map((q) => [q.id, q]));
  return questionIds
    .map((id) => byId.get(id))
    .filter((q): q is T => Boolean(q));
}
