"use server";

import type { ConvocatoriaOverrideMap } from "@/lib/questions/convocatoria-overrides";
import { adminGetQuestionCorrections } from "@/lib/server/question-corrections-admin";

const MAX_IDS = 400;

/**
 * Correcciones editoriales vigentes para las preguntas de una sesión (repaso
 * de simulacros y convocatorias). El contenido de las preguntas ya viaja en el
 * bundle del cliente, así que solo se devuelven las versiones corregidas.
 */
export async function getQuestionCorrectionsAction(
  questionIds: string[],
): Promise<ConvocatoriaOverrideMap> {
  if (!Array.isArray(questionIds) || questionIds.length === 0) return {};
  const ids = questionIds
    .filter((id): id is string => typeof id === "string" && id.length > 0 && id.length < 200)
    .slice(0, MAX_IDS);
  try {
    return await adminGetQuestionCorrections(ids);
  } catch (error) {
    console.error("getQuestionCorrectionsAction", error);
    return {};
  }
}
