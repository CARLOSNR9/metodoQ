"use server";

import { revalidatePath } from "next/cache";
import {
  adminCreateQuestion,
  adminSeedExtendedQuestions,
  adminSeedFallbackQuestions,
} from "@/lib/server/questions-admin";

export async function createQuestionAction(formData: FormData) {
  const topic = String(formData.get("topic") ?? "").trim();
  const statement = String(formData.get("statement") ?? "").trim();
  const correctOptionId = String(formData.get("correctOptionId") ?? "A");
  const explanation = String(formData.get("explanation") ?? "").trim();

  const options = ["A", "B", "C", "D"].map((id) => ({
    id,
    label: id,
    text: String(formData.get(`option_${id}`) ?? "").trim(),
  }));

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
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo guardar la pregunta." };
  }
}

export async function seedQuestionsAction() {
  try {
    const count = await adminSeedFallbackQuestions();
    revalidatePath("/admin");
    return { success: true, count };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo cargar el banco inicial." };
  }
}

export async function seedExtendedQuestionsAction() {
  try {
    const count = await adminSeedExtendedQuestions();
    revalidatePath("/admin");
    return { success: true, count };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo cargar el banco extendido." };
  }
}
