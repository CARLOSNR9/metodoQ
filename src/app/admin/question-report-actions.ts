"use server";

import { revalidatePath } from "next/cache";
import { canManageQuestions } from "@/lib/roles";
import {
  adminReportQuestion,
  adminUpdateQuestionReportStatus,
} from "@/lib/server/question-reports-admin";
import type { QuestionReportStatus } from "@/lib/server/question-reports-admin";

import { verifyStaffCaller } from "@/lib/server/verify-staff";

const REPORT_PATHS = ["/admin/preguntas", "/admin/preguntas-reportadas", "/profesor/preguntas-reportadas"] as const;

function revalidateReportPaths() {
  for (const path of REPORT_PATHS) {
    revalidatePath(path);
  }
}

async function requireManageQuestions(idToken: string | null | undefined) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) {
    return { ok: false as const, error: caller.error };
  }
  if (!canManageQuestions(caller.role, caller.email)) {
    return { ok: false as const, error: "Solo administradores y profesores pueden gestionar reportes." };
  }
  return { ok: true as const, uid: caller.uid, email: caller.email };
}

export async function reportQuestionAction(
  questionId: string,
  topic: string,
  theoryCharCount: number | null,
  idToken: string | null | undefined,
) {
  const auth = await requireManageQuestions(idToken);
  if (!auth.ok) return { error: auth.error };

  const trimmedId = questionId.trim();
  if (!trimmedId) {
    return { error: "Código de pregunta no válido." };
  }

  try {
    await adminReportQuestion({
      questionId: trimmedId,
      topic: topic.trim(),
      theoryCharCount,
      reportedBy: auth.uid,
      reportedByEmail: auth.email,
    });
    revalidateReportPaths();
    return { success: true as const };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo reportar la pregunta." };
  }
}

export async function updateQuestionReportStatusAction(
  questionId: string,
  status: QuestionReportStatus,
  idToken: string | null | undefined,
) {
  const auth = await requireManageQuestions(idToken);
  if (!auth.ok) return { error: auth.error };

  if (status !== "pending" && status !== "reviewed" && status !== "dismissed") {
    return { error: "Estado no válido." };
  }

  try {
    await adminUpdateQuestionReportStatus(questionId, status);
    revalidateReportPaths();
    return { success: true as const };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo actualizar el reporte." };
  }
}
