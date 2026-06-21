import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import {
  getFeaturedConvocatoriaEdition,
  type UccConvocatoriaAttempt,
} from "@/lib/training/ucc-convocatoria";

export type AdminConvocatoriaAttemptStatus = {
  editionCode: string;
  editionLabel: string;
  examDate: string;
  questionCount: number;
  status: "completed" | "pending";
  scorePercentage: number | null;
  correctAnswers: number | null;
  wrongAnswers: number | null;
  completedAt: string | null;
  resultId: string | null;
};

export type AdminConvocatoriaRow = {
  uid: string;
  email: string;
  displayName: string;
  plan: string;
  role: string;
  status: "completed" | "pending";
  scorePercentage: number | null;
  correctAnswers: number | null;
  wrongAnswers: number | null;
  completedAt: string | null;
  resultId: string | null;
};

export type AdminConvocatoriaSummary = {
  editionCode: string;
  editionLabel: string;
  examDate: string;
  questionCount: number;
  totalUsers: number;
  completedCount: number;
  pendingCount: number;
  averageScore: number | null;
  completionRate: number;
};

function toIso(value: unknown): string | null {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (typeof (value as { toDate?: () => Date }).toDate === "function") {
    return (value as { toDate: () => Date }).toDate().toISOString();
  }
  return null;
}

type ConvocatoriaResultCandidate = {
  id: string;
  sessionType?: string;
  convocatoriaEdition?: string | null;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  fechaIso: string | null;
};

function parseStoredAttempt(
  editionCode: string,
  raw: unknown,
): UccConvocatoriaAttempt | null {
  if (!raw || typeof raw !== "object") return null;
  const data = raw as Record<string, unknown>;
  if (data.editionCode !== editionCode) return null;

  return {
    editionCode,
    scorePercentage: Number(data.scorePercentage ?? 0),
    correctAnswers: Number(data.correctAnswers ?? 0),
    wrongAnswers: Number(data.wrongAnswers ?? 0),
    completedAt: String(data.completedAt ?? ""),
    sessionQuestionIds: Array.isArray(data.sessionQuestionIds)
      ? (data.sessionQuestionIds as string[])
      : undefined,
    answersByQuestionId:
      data.answersByQuestionId && typeof data.answersByQuestionId === "object"
        ? (data.answersByQuestionId as Record<string, string>)
        : undefined,
    resultId: data.resultId ? String(data.resultId) : undefined,
  };
}

function resolveUserConvocatoriaAttempt(
  editionCode: string,
  userData: Record<string, unknown>,
  results: ConvocatoriaResultCandidate[],
): UccConvocatoriaAttempt | null {
  const attempts = userData.convocatoriaAttempts as Record<string, unknown> | undefined;
  const stored = parseStoredAttempt(editionCode, attempts?.[editionCode]);
  if (stored) return stored;

  const matches = results.filter((result) => result.convocatoriaEdition === editionCode);
  if (matches.length === 0) return null;

  const latest = matches.reduce((best, current) => {
    const bestTime = best.fechaIso ? new Date(best.fechaIso).getTime() : 0;
    const currentTime = current.fechaIso ? new Date(current.fechaIso).getTime() : 0;
    return currentTime >= bestTime ? current : best;
  });

  return {
    editionCode,
    scorePercentage: latest.scorePercentage,
    correctAnswers: latest.correctAnswers,
    wrongAnswers: latest.wrongAnswers,
    completedAt: latest.fechaIso ?? new Date().toISOString(),
    resultId: latest.id,
  };
}

export function resolveAdminConvocatoriaAttempt(options: {
  userData: Record<string, unknown>;
  results: ConvocatoriaResultCandidate[];
}): AdminConvocatoriaAttemptStatus | null {
  const edition = getFeaturedConvocatoriaEdition();
  if (!edition) return null;

  const attempt = resolveUserConvocatoriaAttempt(
    edition.code,
    options.userData,
    options.results,
  );

  if (!attempt) {
    return {
      editionCode: edition.code,
      editionLabel: edition.label,
      examDate: edition.examDate,
      questionCount: edition.questionCount,
      status: "pending",
      scorePercentage: null,
      correctAnswers: null,
      wrongAnswers: null,
      completedAt: null,
      resultId: null,
    };
  }

  return {
    editionCode: edition.code,
    editionLabel: edition.label,
    examDate: edition.examDate,
    questionCount: edition.questionCount,
    status: "completed",
    scorePercentage: attempt.scorePercentage,
    correctAnswers: attempt.correctAnswers,
    wrongAnswers: attempt.wrongAnswers,
    completedAt: attempt.completedAt || null,
    resultId: attempt.resultId ?? null,
  };
}

function buildRowFromAttempt(
  user: {
    uid: string;
    email: string;
    displayName: string;
    plan: string;
    role: string;
  },
  attempt: UccConvocatoriaAttempt | null,
): AdminConvocatoriaRow {
  if (!attempt) {
    return {
      ...user,
      status: "pending",
      scorePercentage: null,
      correctAnswers: null,
      wrongAnswers: null,
      completedAt: null,
      resultId: null,
    };
  }

  return {
    ...user,
    status: "completed",
    scorePercentage: attempt.scorePercentage,
    correctAnswers: attempt.correctAnswers,
    wrongAnswers: attempt.wrongAnswers,
    completedAt: attempt.completedAt || null,
    resultId: attempt.resultId ?? null,
  };
}

export async function getAdminConvocatoriaTracking(options?: {
  userLimit?: number;
}): Promise<{
  summary: AdminConvocatoriaSummary;
  rows: AdminConvocatoriaRow[];
  loadError: string | null;
}> {
  const edition = getFeaturedConvocatoriaEdition();
  if (!edition) {
    return {
      summary: {
        editionCode: "",
        editionLabel: "Sin edición",
        examDate: "",
        questionCount: 0,
        totalUsers: 0,
        completedCount: 0,
        pendingCount: 0,
        averageScore: null,
        completionRate: 0,
      },
      rows: [],
      loadError: "No hay ediciones de convocatoria configuradas.",
    };
  }

  const userLimit = options?.userLimit ?? 500;

  try {
    const db = getFirebaseAdminDb();

    const [usersSnapshot, resultsSnapshot] = await Promise.all([
      db.collection("users").orderBy("createdAt", "desc").limit(userLimit).get(),
      db
        .collection("results")
        .where("convocatoriaEdition", "==", edition.code)
        .get(),
    ]);

    const resultsByUserId = new Map<
      string,
      {
        id: string;
        scorePercentage: number;
        correctAnswers: number;
        wrongAnswers: number;
        completedAt: string | null;
      }
    >();

    for (const doc of resultsSnapshot.docs) {
      const data = doc.data();
      const userId = String(data.userId ?? "");
      if (!userId) continue;

      const fechaIso = toIso(data.fecha);
      const candidate = {
        id: doc.id,
        scorePercentage: Number(data.scorePercentage ?? 0),
        correctAnswers: Number(data.correctAnswers ?? 0),
        wrongAnswers: Number(data.wrongAnswers ?? 0),
        completedAt: fechaIso,
      };

      const existing = resultsByUserId.get(userId);
      if (!existing) {
        resultsByUserId.set(userId, candidate);
        continue;
      }

      const existingTime = existing.completedAt
        ? new Date(existing.completedAt).getTime()
        : 0;
      const candidateTime = candidate.completedAt
        ? new Date(candidate.completedAt).getTime()
        : 0;
      if (candidateTime >= existingTime) {
        resultsByUserId.set(userId, candidate);
      }
    }

    const rows: AdminConvocatoriaRow[] = usersSnapshot.docs.map((doc) => {
      const data = doc.data();
      const user = {
        uid: doc.id,
        email: String(data.email ?? ""),
        displayName: String(data.displayName ?? "—"),
        plan: String(data.plan ?? "FREE"),
        role: String(data.role ?? "student"),
      };

      const attempt = resolveUserConvocatoriaAttempt(edition.code, data, [
        ...(resultsByUserId.has(doc.id)
          ? [
              {
                id: resultsByUserId.get(doc.id)!.id,
                sessionType: "convocatoria",
                convocatoriaEdition: edition.code,
                scorePercentage: resultsByUserId.get(doc.id)!.scorePercentage,
                correctAnswers: resultsByUserId.get(doc.id)!.correctAnswers,
                wrongAnswers: resultsByUserId.get(doc.id)!.wrongAnswers,
                fechaIso: resultsByUserId.get(doc.id)!.completedAt,
              },
            ]
          : []),
      ]);

      return buildRowFromAttempt(user, attempt);
    });

    const completedRows = rows.filter((row) => row.status === "completed");
    const averageScore =
      completedRows.length > 0
        ? Math.round(
            completedRows.reduce((sum, row) => sum + (row.scorePercentage ?? 0), 0) /
              completedRows.length,
          )
        : null;

    const summary: AdminConvocatoriaSummary = {
      editionCode: edition.code,
      editionLabel: edition.label,
      examDate: edition.examDate,
      questionCount: edition.questionCount,
      totalUsers: rows.length,
      completedCount: completedRows.length,
      pendingCount: rows.length - completedRows.length,
      averageScore,
      completionRate:
        rows.length > 0 ? Math.round((completedRows.length / rows.length) * 100) : 0,
    };

    rows.sort((a, b) => {
      if (a.status !== b.status) {
        return a.status === "pending" ? 1 : -1;
      }
      if (a.status === "completed" && b.status === "completed") {
        const aTime = a.completedAt ? new Date(a.completedAt).getTime() : 0;
        const bTime = b.completedAt ? new Date(b.completedAt).getTime() : 0;
        return bTime - aTime;
      }
      return a.email.localeCompare(b.email, "es");
    });

    return { summary, rows, loadError: null };
  } catch (error) {
    console.error("[admin] convocatoria tracking", error);
    const message =
      error instanceof Error && error.message.includes("FIREBASE_ADMIN")
        ? error.message
        : "No se pudo cargar el seguimiento de convocatorias. Revisa Firebase Admin.";
    return {
      summary: {
        editionCode: edition.code,
        editionLabel: edition.label,
        examDate: edition.examDate,
        questionCount: edition.questionCount,
        totalUsers: 0,
        completedCount: 0,
        pendingCount: 0,
        averageScore: null,
        completionRate: 0,
      },
      rows: [],
      loadError: message,
    };
  }
}
