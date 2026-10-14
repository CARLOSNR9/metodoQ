import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { isMirQuestionId } from "@/lib/mir/question-reports";

export type QuestionReportStatus = "pending" | "reviewed" | "dismissed";

/** Producto al que pertenece la pregunta reportada. */
export type QuestionReportModule = "metodo-q" | "mir";

export type StudentReport = {
  userId: string | null;
  userEmail?: string | null;
  category: string;
  comments: string;
  createdAt: string;
};

export type QuestionReport = {
  id: string;
  questionId: string;
  module: QuestionReportModule;
  topic: string;
  theoryCharCount: number | null;
  reportedBy: string;
  reportedByEmail: string | null;
  status: QuestionReportStatus;
  reportsList?: StudentReport[];
  createdAt: string;
  updatedAt: string | null;
};

function parseTimestamp(value: unknown): string | null {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (typeof value === "object" && value !== null && "toDate" in value) {
    const date = (value as { toDate: () => Date }).toDate();
    return date.toISOString();
  }
  return null;
}

function mapReportDoc(doc: { id: string; data: () => Record<string, unknown> | undefined }): QuestionReport {
  const data = doc.data() ?? {};
  
  // Sanitize reportsList to ensure no complex objects like Timestamps are passed to Client Components
  let safeReportsList: StudentReport[] = [];
  if (Array.isArray(data.reportsList)) {
    safeReportsList = data.reportsList.map((r: any) => ({
      userId: r.userId ? String(r.userId) : null,
      userEmail: r.userEmail ? String(r.userEmail) : null,
      category: String(r.category ?? "Sin categoría"),
      comments: String(r.comments ?? ""),
      createdAt: parseTimestamp(r.createdAt) ?? new Date().toISOString(),
    }));
  }

  const questionId = String(data.questionId ?? doc.id);
  return {
    id: doc.id,
    questionId,
    // Reportes anteriores al campo `module`: se deduce del ID.
    module: data.module === "mir" || isMirQuestionId(questionId) ? "mir" : "metodo-q",
    topic: String(data.topic ?? ""),
    theoryCharCount:
      typeof data.theoryCharCount === "number" ? data.theoryCharCount : null,
    reportedBy: String(data.reportedBy ?? ""),
    reportedByEmail: data.reportedByEmail ? String(data.reportedByEmail) : null,
    status: (data.status as QuestionReportStatus) ?? "pending",
    reportsList: safeReportsList,
    createdAt: parseTimestamp(data.createdAt) ?? new Date().toISOString(),
    updatedAt: parseTimestamp(data.updatedAt),
  };
}

export async function adminListQuestionReports(
  status: "pending" | "all" = "pending",
  module: QuestionReportModule | "all" = "all",
): Promise<QuestionReport[]> {
  const collection = getFirebaseAdminDb().collection("question_reports");

  if (module === "mir") {
    // Consulta propia (sin orderBy para no exigir índice compuesto): así los
    // reportes MIR no quedan fuera del límite de 500 por los del Método Q.
    let mirQuery = collection.where("module", "==", "mir");
    if (status === "pending") {
      mirQuery = mirQuery.where("status", "==", "pending");
    }
    const snap = await mirQuery.limit(1000).get();
    return snap.docs
      .map(mapReportDoc)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  let query = collection.orderBy("createdAt", "desc");

  if (status === "pending") {
    query = query.where("status", "==", "pending") as typeof query;
  }

  const snap = await query.limit(500).get();
  const reports = snap.docs.map(mapReportDoc);
  return module === "all" ? reports : reports.filter((report) => report.module === module);
}

export async function adminGetReportedQuestionIds(): Promise<Set<string>> {
  const snap = await getFirebaseAdminDb()
    .collection("question_reports")
    .where("status", "==", "pending")
    .select()
    .get();

  return new Set(snap.docs.map((doc) => String(doc.data().questionId ?? doc.id)));
}

export async function adminReportQuestion(input: {
  questionId: string;
  topic: string;
  theoryCharCount: number | null;
  reportedBy: string;
  reportedByEmail: string | null;
}): Promise<void> {
  const now = new Date().toISOString();
  const ref = getFirebaseAdminDb().collection("question_reports").doc(input.questionId);

  await ref.set(
    {
      questionId: input.questionId,
      module: isMirQuestionId(input.questionId) ? "mir" : "metodo-q",
      topic: input.topic,
      theoryCharCount: input.theoryCharCount,
      reportedBy: input.reportedBy,
      reportedByEmail: input.reportedByEmail,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    },
    { merge: true },
  );
}

export async function adminUpdateQuestionReportStatus(
  questionId: string,
  status: QuestionReportStatus,
): Promise<void> {
  await getFirebaseAdminDb()
    .collection("question_reports")
    .doc(questionId)
    .set({ status, updatedAt: new Date().toISOString() }, { merge: true });
}

const FIRESTORE_BATCH_LIMIT = 500;

export async function adminBulkUpdateQuestionReportStatus(
  questionIds: string[],
  status: QuestionReportStatus,
): Promise<void> {
  const db = getFirebaseAdminDb();
  const now = new Date().toISOString();
  const uniqueIds = [...new Set(questionIds)];

  for (let i = 0; i < uniqueIds.length; i += FIRESTORE_BATCH_LIMIT) {
    const chunk = uniqueIds.slice(i, i + FIRESTORE_BATCH_LIMIT);
    const batch = db.batch();
    for (const questionId of chunk) {
      batch.set(
        db.collection("question_reports").doc(questionId),
        { status, updatedAt: now },
        { merge: true },
      );
    }
    await batch.commit();
  }
}
