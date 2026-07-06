import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export type QuestionReportStatus = "pending" | "reviewed" | "dismissed";

export type StudentReport = {
  userId: string | null;
  category: string;
  comments: string;
  createdAt: string;
};

export type QuestionReport = {
  id: string;
  questionId: string;
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
  return {
    id: doc.id,
    questionId: String(data.questionId ?? doc.id),
    topic: String(data.topic ?? ""),
    theoryCharCount:
      typeof data.theoryCharCount === "number" ? data.theoryCharCount : null,
    reportedBy: String(data.reportedBy ?? ""),
    reportedByEmail: data.reportedByEmail ? String(data.reportedByEmail) : null,
    status: (data.status as QuestionReportStatus) ?? "pending",
    reportsList: Array.isArray(data.reportsList) ? data.reportsList : [],
    createdAt: parseTimestamp(data.createdAt) ?? new Date().toISOString(),
    updatedAt: parseTimestamp(data.updatedAt),
  };
}

export async function adminListQuestionReports(
  status: "pending" | "all" = "pending",
): Promise<QuestionReport[]> {
  let query = getFirebaseAdminDb()
    .collection("question_reports")
    .orderBy("createdAt", "desc");

  if (status === "pending") {
    query = query.where("status", "==", "pending") as typeof query;
  }

  const snap = await query.limit(500).get();
  return snap.docs.map(mapReportDoc);
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
