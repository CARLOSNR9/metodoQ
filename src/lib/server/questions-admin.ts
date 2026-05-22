import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { getAllRepositoryQuestions } from "@/lib/questions/local-bank";
import type {
  QuestionAdminRecord,
  QuestionReviewStatus,
  QuestionSource,
  TrainingQuestion,
} from "@/lib/questions/types";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { EXTENDED_QUESTIONS } from "@/data/extended-questions";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";

const COLLECTION = "questions";

type QuestionWriteInput = {
  topic: string;
  statement: string;
  options: TrainingQuestion["options"];
  correctOptionId: string;
  explanation: string;
  keyPoints?: string[];
  difficulty?: TrainingQuestion["difficulty"];
  tags?: string[];
  examArea?: string;
  university?: string;
  active?: boolean;
  reviewStatus?: QuestionReviewStatus;
  reviewNotes?: string;
  source?: QuestionSource;
};

function mapDocToAdminRecord(
  docId: string,
  data: Record<string, unknown>,
): QuestionAdminRecord {
  const logicalId = String(data.id ?? docId);
  const reviewedAt = data.reviewedAt;
  let reviewedAtIso: string | undefined;
  if (reviewedAt instanceof Timestamp) {
    reviewedAtIso = reviewedAt.toDate().toISOString();
  } else if (typeof reviewedAt === "string") {
    reviewedAtIso = reviewedAt;
  }

  const createdAt = data.createdAt;
  let createdAtIso: string | undefined;
  if (createdAt instanceof Timestamp) {
    createdAtIso = createdAt.toDate().toISOString();
  }

  return {
    id: logicalId,
    firestoreId: docId,
    inFirestore: true,
    topic: String(data.topic ?? "General"),
    statement: String(data.statement ?? ""),
    options: (data.options as TrainingQuestion["options"]) ?? [],
    correctOptionId: String(data.correctOptionId ?? "A"),
    explanation: String(data.explanation ?? ""),
    keyPoints: (data.keyPoints as string[]) ?? [],
    difficulty: (data.difficulty as TrainingQuestion["difficulty"]) ?? "medium",
    tags: (data.tags as string[]) ?? [],
    active: data.active !== false,
    examArea: data.examArea ? String(data.examArea) : undefined,
    university: data.university ? String(data.university) : undefined,
    reviewStatus: (data.reviewStatus as QuestionReviewStatus) ?? "pending",
    reviewNotes: data.reviewNotes ? String(data.reviewNotes) : undefined,
    reviewedAt: reviewedAtIso,
    reviewedBy: data.reviewedBy ? String(data.reviewedBy) : undefined,
    source: (data.source as QuestionSource) ?? "manual",
    createdAt: createdAtIso,
  };
}

function localToAdminRecord(question: TrainingQuestion): QuestionAdminRecord {
  return {
    ...question,
    firestoreId: question.id,
    inFirestore: false,
    active: question.active !== false,
    reviewStatus: question.reviewStatus ?? "pending",
    source: question.source ?? "seed",
  };
}

function firestoreMatchesLocal(
  docId: string,
  data: Record<string, unknown>,
  localId: string,
): boolean {
  return docId === localId || String(data.id ?? "") === localId;
}

/** Lista unificada: Firestore + preguntas solo en código aún no subidas. */
export async function adminListQuestionsForReview(): Promise<QuestionAdminRecord[]> {
  const db = getFirebaseAdminDb();
  const snap = await db.collection(COLLECTION).get();
  const records: QuestionAdminRecord[] = snap.docs.map((doc) =>
    mapDocToAdminRecord(doc.id, doc.data()),
  );

  const coveredLocalIds = new Set<string>();
  for (const doc of snap.docs) {
    const data = doc.data();
    coveredLocalIds.add(String(data.id ?? doc.id));
    coveredLocalIds.add(doc.id);
  }

  for (const local of getAllRepositoryQuestions()) {
    const inFirestore = [...snap.docs].some((doc) =>
      firestoreMatchesLocal(doc.id, doc.data(), local.id),
    );
    if (!inFirestore) {
      records.push(localToAdminRecord(local));
    }
  }

  records.sort((a, b) => {
    const statusOrder: Record<QuestionReviewStatus, number> = {
      pending: 0,
      needs_changes: 1,
      rejected: 2,
      approved: 3,
    };
    const sa = statusOrder[a.reviewStatus ?? "pending"];
    const sb = statusOrder[b.reviewStatus ?? "pending"];
    if (sa !== sb) return sa - sb;
    return a.topic.localeCompare(b.topic, "es");
  });

  return records;
}

export async function adminCreateQuestion(input: QuestionWriteInput) {
  const ref = await getFirebaseAdminDb().collection(COLLECTION).add({
    ...input,
    keyPoints: input.keyPoints ?? [],
    active: input.active !== false,
    reviewStatus: input.reviewStatus ?? "pending",
    source: input.source ?? "manual",
    createdAt: FieldValue.serverTimestamp(),
  });
  return ref.id;
}

export async function adminUpdateQuestion(
  firestoreId: string,
  input: QuestionWriteInput,
  reviewerUid: string,
) {
  const db = getFirebaseAdminDb();
  const ref = db.collection(COLLECTION).doc(firestoreId);
  const existing = await ref.get();
  if (!existing.exists) {
    throw new Error("Pregunta no encontrada.");
  }

  const reviewStatus = input.reviewStatus ?? "approved";
  const isReviewed = reviewStatus !== "pending";

  await ref.update({
    topic: input.topic,
    statement: input.statement,
    options: input.options,
    correctOptionId: input.correctOptionId,
    explanation: input.explanation,
    keyPoints: input.keyPoints ?? [],
    difficulty: input.difficulty ?? "medium",
    tags: input.tags ?? [],
    examArea: input.examArea ?? null,
    university: input.university ?? null,
    active: input.active !== false,
    reviewStatus,
    reviewNotes: input.reviewNotes?.trim() || null,
    reviewedAt: isReviewed ? FieldValue.serverTimestamp() : null,
    reviewedBy: isReviewed ? reviewerUid : null,
    updatedAt: FieldValue.serverTimestamp(),
  });
}

export async function adminImportLocalQuestion(questionId: string): Promise<string> {
  const local = getAllRepositoryQuestions().find((q) => q.id === questionId);
  if (!local) {
    throw new Error("Pregunta no encontrada en el repositorio.");
  }

  const db = getFirebaseAdminDb();
  const ref = db.collection(COLLECTION).doc(local.id);
  const { id: _id, reviewStatus: _rs, reviewNotes: _rn, ...rest } = local;

  await ref.set({
    ...rest,
    id: local.id,
    keyPoints: local.keyPoints ?? [],
    active: local.active !== false,
    reviewStatus: "pending",
    source: "seed",
    createdAt: FieldValue.serverTimestamp(),
    reviewedAt: null,
    reviewedBy: null,
  });

  return ref.id;
}

export async function adminSetQuestionActive(firestoreId: string, active: boolean) {
  await getFirebaseAdminDb().collection(COLLECTION).doc(firestoreId).update({
    active,
    updatedAt: FieldValue.serverTimestamp(),
  });
}

export async function adminDeleteQuestion(firestoreId: string) {
  await getFirebaseAdminDb().collection(COLLECTION).doc(firestoreId).delete();
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
      reviewStatus: "pending",
      source: "seed",
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
      reviewStatus: "pending",
      source: "seed",
      createdAt: FieldValue.serverTimestamp(),
    });
    added += 1;
  }

  return added;
}

/** Sincroniza todo el banco del repositorio a Firestore (ids estables). */
export async function adminSeedFullQuestionBank() {
  const db = getFirebaseAdminDb();
  let added = 0;

  for (const question of getAllRepositoryQuestions()) {
    const ref = db.collection(COLLECTION).doc(question.id);
    const existing = await ref.get();
    if (existing.exists) continue;

    const { id: _id, reviewStatus: _rs, reviewNotes: _rn, reviewedAt: _ra, reviewedBy: _rb, ...rest } =
      question;

    await ref.set({
      ...rest,
      id: question.id,
      keyPoints: question.keyPoints ?? [],
      active: true,
      reviewStatus: "pending",
      source: "seed",
      createdAt: FieldValue.serverTimestamp(),
    });
    added += 1;
  }

  return added;
}
