"use server";

import { revalidatePath } from "next/cache";
import { canManageQuestions } from "@/lib/roles";
import type { QuestionReviewStatus } from "@/lib/questions/types";
import {
  adminCreateQuestion,
  adminDeleteQuestion,
  adminImportLocalQuestion,
  adminListQuestionsForReview,
  adminSeedExtendedQuestions,
  adminSeedFallbackQuestions,
  adminSeedFullQuestionBank,
  adminSetQuestionActive,
  adminUpdateQuestion,
} from "@/lib/server/questions-admin";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

const REVIEW_PATHS = ["/admin", "/profesor", "/profesor/preguntas", "/teoria"] as const;

function revalidateQuestionPaths() {
  for (const path of REVIEW_PATHS) {
    revalidatePath(path);
  }
}

async function requireQuestionManager(idToken: string | null) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) {
    return { ok: false as const, error: caller.error };
  }
  if (!canManageQuestions(caller.role, caller.email)) {
    return { ok: false as const, error: "No tienes permiso para gestionar preguntas." };
  }
  return { ok: true as const, uid: caller.uid };
}

function parseOptionsFromForm(formData: FormData) {
  return ["A", "B", "C", "D"].map((id) => ({
    id,
    label: id,
    text: String(formData.get(`option_${id}`) ?? "").trim(),
  }));
}

function parseReviewStatus(value: string): QuestionReviewStatus {
  if (
    value === "approved" ||
    value === "needs_changes" ||
    value === "rejected" ||
    value === "pending"
  ) {
    return value;
  }
  return "pending";
}

export async function listQuestionsForReviewAction() {
  try {
    return { ok: true as const, questions: await adminListQuestionsForReview() };
  } catch (e) {
    console.error(e);
    return { ok: false as const, error: "No se pudo cargar el banco de preguntas." };
  }
}

export async function createQuestionAction(formData: FormData) {
  const auth = await requireQuestionManager(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  const topic = String(formData.get("topic") ?? "").trim();
  const statement = String(formData.get("statement") ?? "").trim();
  const correctOptionId = String(formData.get("correctOptionId") ?? "A");
  const explanation = String(formData.get("explanation") ?? "").trim();
  const options = parseOptionsFromForm(formData);

  if (!topic || !statement || options.some((o) => !o.text) || !explanation) {
    return { error: "Completa todos los campos." };
  }

  try {
    await adminCreateQuestion({
      topic,
      statement,
      options,
      correctOptionId,
      explanation,
      keyPoints: [explanation.slice(0, 120)],
      source: "manual",
      reviewStatus: "pending",
    });
    revalidateQuestionPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo guardar la pregunta." };
  }
}

export async function updateQuestionAction(formData: FormData) {
  const auth = await requireQuestionManager(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  const firestoreId = String(formData.get("firestoreId") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const statement = String(formData.get("statement") ?? "").trim();
  const correctOptionId = String(formData.get("correctOptionId") ?? "A");
  const explanation = String(formData.get("explanation") ?? "").trim();
  const reviewStatus = parseReviewStatus(String(formData.get("reviewStatus") ?? "pending"));
  const reviewNotes = String(formData.get("reviewNotes") ?? "").trim();
  const active = formData.get("active") === "on" || formData.get("active") === "true";
  const university = String(formData.get("university") ?? "").trim();
  const examArea = String(formData.get("examArea") ?? "").trim();
  const keyPointsRaw = String(formData.get("keyPoints") ?? "").trim();
  const theoryUrl = String(formData.get("theoryUrl") ?? "").trim();
  const theoryContent = String(formData.get("theoryContent") ?? "").trim();
  const options = parseOptionsFromForm(formData);

  if (!firestoreId || !topic || !statement || options.some((o) => !o.text) || !explanation) {
    return { error: "Completa todos los campos obligatorios." };
  }

  try {
    await adminUpdateQuestion(
      firestoreId,
      {
        topic,
        statement,
        options,
        correctOptionId,
        explanation,
        keyPoints: keyPointsRaw
          ? keyPointsRaw.split("\n").map((s) => s.trim()).filter(Boolean)
          : [],
        university: university || undefined,
        examArea: examArea || undefined,
        active,
        reviewStatus,
        reviewNotes,
        theoryUrl: theoryUrl || undefined,
        theoryContent: theoryContent || undefined,
      },
      auth.uid,
    );
    revalidateQuestionPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo actualizar la pregunta." };
  }
}

export async function importLocalQuestionAction(formData: FormData) {
  const auth = await requireQuestionManager(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  const questionId = String(formData.get("questionId") ?? "").trim();
  if (!questionId) return { error: "ID de pregunta inválido." };

  try {
    const firestoreId = await adminImportLocalQuestion(questionId);
    revalidateQuestionPaths();
    return { success: true, firestoreId };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo importar la pregunta a Firestore." };
  }
}

export async function setQuestionActiveAction(formData: FormData) {
  const auth = await requireQuestionManager(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  const firestoreId = String(formData.get("firestoreId") ?? "").trim();
  const active = formData.get("active") === "true";
  if (!firestoreId) return { error: "ID inválido." };

  try {
    await adminSetQuestionActive(firestoreId, active);
    revalidateQuestionPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo cambiar el estado de la pregunta." };
  }
}

export async function deleteQuestionAction(formData: FormData) {
  const auth = await requireQuestionManager(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  const firestoreId = String(formData.get("firestoreId") ?? "").trim();
  if (!firestoreId) return { error: "ID inválido." };

  try {
    await adminDeleteQuestion(firestoreId);
    revalidateQuestionPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo eliminar la pregunta." };
  }
}

export async function seedQuestionsAction(formData?: FormData) {
  const auth = await requireQuestionManager(
    (formData?.get("idToken") as string | null) ?? null,
  );
  if (!auth.ok) return { error: auth.error };

  try {
    const count = await adminSeedFallbackQuestions();
    revalidateQuestionPaths();
    return { success: true, count };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo cargar el banco inicial." };
  }
}

export async function seedExtendedQuestionsAction(formData?: FormData) {
  const auth = await requireQuestionManager(
    (formData?.get("idToken") as string | null) ?? null,
  );
  if (!auth.ok) return { error: auth.error };

  try {
    const count = await adminSeedExtendedQuestions();
    revalidateQuestionPaths();
    return { success: true, count };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo cargar el banco extendido." };
  }
}

export async function seedFullQuestionBankAction(formData: FormData) {
  const auth = await requireQuestionManager(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  try {
    const count = await adminSeedFullQuestionBank();
    revalidateQuestionPaths();
    return { success: true, count };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo sincronizar el banco completo." };
  }
}
