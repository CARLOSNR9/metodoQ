import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { getAllRepositoryQuestions } from "@/lib/questions/local-bank";
import {
  normalizeReviewStatus,
  reviewStatusPriority,
} from "@/lib/questions/review-status";
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
  theoryUrl?: string;
  theoryContent?: string;
};

function buildStatementIndex(): Map<string, string> {
  const byStatement = new Map<string, string>();
  for (const q of getAllRepositoryQuestions()) {
    const key = q.statement.trim().slice(0, 240);
    if (!byStatement.has(key)) {
      byStatement.set(key, q.id);
    }
  }
  return byStatement;
}

function resolveLogicalId(
  docId: string,
  data: Record<string, unknown>,
  statementIndex: Map<string, string>,
): string {
  const explicitId = String(data.id ?? "").trim();
  if (explicitId) return explicitId;

  const statementKey = String(data.statement ?? "").trim().slice(0, 240);
  const fromStatement = statementIndex.get(statementKey);
  if (fromStatement) return fromStatement;

  return docId;
}

function mapDocToAdminRecord(
  docId: string,
  data: Record<string, unknown>,
  logicalIdOverride?: string,
): QuestionAdminRecord {
  const logicalId = logicalIdOverride ?? String(data.id ?? docId);
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
    reviewStatus: normalizeReviewStatus(data.reviewStatus),
    reviewNotes: data.reviewNotes ? String(data.reviewNotes) : undefined,
    reviewedAt: reviewedAtIso,
    reviewedBy: data.reviewedBy ? String(data.reviewedBy) : undefined,
    source: (data.source as QuestionSource) ?? "manual",
    createdAt: createdAtIso,
    theoryUrl: data.theoryUrl ? String(data.theoryUrl) : undefined,
    theoryContent: data.theoryContent ? String(data.theoryContent) : undefined,
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

function isStableFirestoreDoc(record: QuestionAdminRecord): boolean {
  return record.inFirestore && record.firestoreId === record.id;
}

/** Conserva un solo registro por id lógico (evita duplicados por seeds repetidos). */
function pickPreferredRecord(
  existing: QuestionAdminRecord,
  candidate: QuestionAdminRecord,
): QuestionAdminRecord {
  const existingStatus = normalizeReviewStatus(existing.reviewStatus);
  const candidateStatus = normalizeReviewStatus(candidate.reviewStatus);
  const statusDiff =
    reviewStatusPriority(candidateStatus) - reviewStatusPriority(existingStatus);
  if (statusDiff !== 0) {
    return statusDiff > 0 ? candidate : existing;
  }

  if (candidate.inFirestore !== existing.inFirestore) {
    return candidate.inFirestore ? candidate : existing;
  }

  if (isStableFirestoreDoc(candidate) && !isStableFirestoreDoc(existing)) {
    return candidate;
  }
  if (isStableFirestoreDoc(existing) && !isStableFirestoreDoc(candidate)) {
    return existing;
  }

  const existingReviewed = existing.reviewedAt ? Date.parse(existing.reviewedAt) : 0;
  const candidateReviewed = candidate.reviewedAt ? Date.parse(candidate.reviewedAt) : 0;
  if (candidateReviewed !== existingReviewed) {
    return candidateReviewed > existingReviewed ? candidate : existing;
  }

  return existing;
}

function dedupeQuestionRecords(records: QuestionAdminRecord[]): QuestionAdminRecord[] {
  const byLogicalId = new Map<string, QuestionAdminRecord>();

  for (const record of records) {
    const normalized: QuestionAdminRecord = {
      ...record,
      reviewStatus: normalizeReviewStatus(record.reviewStatus),
    };
    const existing = byLogicalId.get(normalized.id);
    byLogicalId.set(
      normalized.id,
      existing ? pickPreferredRecord(existing, normalized) : normalized,
    );
  }

  return Array.from(byLogicalId.values());
}

/** Lista unificada: Firestore + preguntas solo en código aún no subidas. */
export async function adminListQuestionsForReview(): Promise<QuestionAdminRecord[]> {
  const db = getFirebaseAdminDb();
  const snap = await db.collection(COLLECTION).get();
  const statementIndex = buildStatementIndex();
  const records: QuestionAdminRecord[] = snap.docs.map((doc) => {
    const data = doc.data();
    const logicalId = resolveLogicalId(doc.id, data, statementIndex);
    return mapDocToAdminRecord(doc.id, data, logicalId);
  });

  for (const local of getAllRepositoryQuestions()) {
    const inFirestore = [...snap.docs].some((doc) =>
      firestoreMatchesLocal(doc.id, doc.data(), local.id),
    );
    if (!inFirestore) {
      records.push(localToAdminRecord(local));
    }
  }

  const deduped = dedupeQuestionRecords(records);

  deduped.sort((a, b) => {
    const statusOrder: Record<QuestionReviewStatus, number> = {
      pending: 0,
      needs_changes: 1,
      rejected: 2,
      approved: 3,
    };
    const sa = statusOrder[normalizeReviewStatus(a.reviewStatus)];
    const sb = statusOrder[normalizeReviewStatus(b.reviewStatus)];
    if (sa !== sb) return sa - sb;
    return a.topic.localeCompare(b.topic, "es");
  });

  return deduped;
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
    theoryUrl: input.theoryUrl?.trim() || null,
    theoryContent: input.theoryContent?.trim() || null,
    reviewedAt: isReviewed ? FieldValue.serverTimestamp() : null,
    reviewedBy: isReviewed ? reviewerUid : null,
    updatedAt: FieldValue.serverTimestamp(),
  });
}

export type QuestionTheoryPageData = {
  id: string;
  topic: string;
  examArea?: string;
  theoryContent: string;
  theoryUrl?: string;
};

function mapTheoryFromDoc(
  logicalId: string,
  data: Record<string, unknown>,
): QuestionTheoryPageData | null {
  const theoryContent = String(data.theoryContent ?? "").trim();
  const theoryUrl = data.theoryUrl ? String(data.theoryUrl).trim() : undefined;
  if (!theoryContent && !theoryUrl) return null;

  return {
    id: logicalId,
    topic: String(data.topic ?? "General"),
    examArea: data.examArea ? String(data.examArea) : undefined,
    theoryContent,
    theoryUrl,
  };
}

/** Datos para la página `/teoria/[id]` (Firestore o banco local). */
export async function getQuestionTheoryPageData(
  questionId: string,
): Promise<QuestionTheoryPageData | null> {
  const id = questionId.trim();
  if (!id) return null;

  const db = getFirebaseAdminDb();
  const direct = await db.collection(COLLECTION).doc(id).get();
  if (direct.exists) {
    const mapped = mapTheoryFromDoc(id, direct.data() as Record<string, unknown>);
    if (mapped) return mapped;
  }

  const byField = await db.collection(COLLECTION).where("id", "==", id).limit(1).get();
  if (!byField.empty) {
    const doc = byField.docs[0];
    const mapped = mapTheoryFromDoc(id, doc.data() as Record<string, unknown>);
    if (mapped) return mapped;
  }

  const local = getAllRepositoryQuestions().find((q) => q.id === id);
  if (!local) return null;
  return mapTheoryFromDoc(local.id, local as unknown as Record<string, unknown>);
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
