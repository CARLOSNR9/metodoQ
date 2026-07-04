"use server";

import { revalidatePath } from "next/cache";
import { canManageQuestions } from "@/lib/roles";
import type { QuestionOption, TrainingQuestion } from "@/lib/questions/types";
import type { ConvocatoriaOverrideMap } from "@/lib/questions/convocatoria-overrides";
import {
  adminDeleteConvocatoriaOverride,
  adminGetMergedConvocatoriaBank,
  adminListConvocatoriaOverrides,
  adminSaveConvocatoriaOverride,
} from "@/lib/server/convocatoria-edits-admin";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

async function requireQuestionManager(idToken: string | null) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) {
    return { ok: false as const, error: caller.error };
  }
  if (!canManageQuestions(caller.role, caller.email)) {
    return {
      ok: false as const,
      error: "No tienes permiso para editar convocatorias.",
    };
  }
  return { ok: true as const, uid: caller.uid };
}

function parseOptions(raw: string): QuestionOption[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed)) return [];

  const options: QuestionOption[] = [];
  for (const item of parsed) {
    if (!item || typeof item !== "object") continue;
    const record = item as Record<string, unknown>;
    const id = String(record.id ?? "").trim();
    if (!id) continue;
    const option: QuestionOption = {
      id,
      label: String(record.label ?? id).trim() || id,
      text: String(record.text ?? "").trim(),
    };
    const distractorProfile = String(record.distractorProfile ?? "").trim();
    if (distractorProfile) option.distractorProfile = distractorProfile;
    const incorrectFeedback = String(record.incorrectFeedback ?? "").trim();
    if (incorrectFeedback) option.incorrectFeedback = incorrectFeedback;
    options.push(option);
  }
  return options;
}

export async function listConvocatoriaOverridesAction(editionCode: string) {
  try {
    const overrides = await adminListConvocatoriaOverrides(editionCode);
    return { ok: true as const, overrides };
  } catch (e) {
    console.error("listConvocatoriaOverridesAction", e);
    return {
      ok: false as const,
      error: "No se pudieron cargar las correcciones.",
      overrides: {} as ConvocatoriaOverrideMap,
    };
  }
}

export async function saveConvocatoriaQuestionEditAction(formData: FormData) {
  const auth = await requireQuestionManager(
    formData.get("idToken") as string | null,
  );
  if (!auth.ok) return { error: auth.error };

  const editionCode = String(formData.get("editionCode") ?? "").trim();
  const questionId = String(formData.get("questionId") ?? "").trim();
  const statement = String(formData.get("statement") ?? "").trim();
  const correctOptionId = String(formData.get("correctOptionId") ?? "").trim();
  const explanation = String(formData.get("explanation") ?? "").trim();
  const keyPointsRaw = String(formData.get("keyPoints") ?? "");
  const options = parseOptions(String(formData.get("options") ?? "[]"));

  if (!editionCode || !questionId) {
    return { error: "Edición o pregunta inválida." };
  }
  if (!statement || !explanation || options.length === 0) {
    return { error: "Completa el caso, las opciones y la explicación." };
  }
  if (options.some((o) => !o.text)) {
    return { error: "Todas las opciones deben tener texto." };
  }
  if (!options.some((o) => o.id === correctOptionId)) {
    return { error: "Selecciona una respuesta correcta válida." };
  }

  const keyPoints = keyPointsRaw
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  try {
    await adminSaveConvocatoriaOverride(
      editionCode,
      questionId,
      { statement, options, correctOptionId, explanation, keyPoints },
      auth.uid,
    );
    revalidatePath(`/profesor/convocatorias/${editionCode}`);
    revalidatePath("/profesor/convocatorias");
    revalidatePath("/dashboard/convocatorias");
    revalidatePath("/dashboard/entrenar");
    return { success: true as const };
  } catch (e) {
    console.error("saveConvocatoriaQuestionEditAction", e);
    return { error: "No se pudo guardar la corrección." };
  }
}

export async function restoreConvocatoriaQuestionAction(formData: FormData) {
  const auth = await requireQuestionManager(
    formData.get("idToken") as string | null,
  );
  if (!auth.ok) return { error: auth.error };

  const editionCode = String(formData.get("editionCode") ?? "").trim();
  const questionId = String(formData.get("questionId") ?? "").trim();
  if (!editionCode || !questionId) {
    return { error: "Edición o pregunta inválida." };
  }

  try {
    await adminDeleteConvocatoriaOverride(editionCode, questionId);
    revalidatePath(`/profesor/convocatorias/${editionCode}`);
    revalidatePath("/profesor/convocatorias");
    revalidatePath("/dashboard/convocatorias");
    revalidatePath("/dashboard/entrenar");
    return { success: true as const };
  } catch (e) {
    console.error("restoreConvocatoriaQuestionAction", e);
    return { error: "No se pudo restaurar la pregunta original." };
  }
}

/** Banco fusionado (código + correcciones) para el simulacro del estudiante. */
export async function getConvocatoriaBankAction(
  editionCode: string,
): Promise<{ questions: TrainingQuestion[] }> {
  try {
    const questions = await adminGetMergedConvocatoriaBank(editionCode);
    return { questions };
  } catch (e) {
    console.error("getConvocatoriaBankAction", e);
    return { questions: [] };
  }
}
