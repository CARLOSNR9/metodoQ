import { EXTENDED_QUESTIONS } from "@/data/extended-questions";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";
import { UDEA_DIAGNOSTIC_QUESTIONS } from "@/data/udea-diagnostico-questions";
import { UNAL_DIAGNOSTIC_QUESTIONS } from "@/data/unal-diagnostico-questions";
import type { TrainingQuestion } from "./types";

/** Banco local completo cuando Firestore no está disponible o está vacío. */
export function getLocalQuestionBank(): TrainingQuestion[] {
  const byId = new Map<string, TrainingQuestion>();
  for (const q of [
    ...FALLBACK_QUESTIONS,
    ...EXTENDED_QUESTIONS,
    ...UDEA_DIAGNOSTIC_QUESTIONS,
    ...UNAL_DIAGNOSTIC_QUESTIONS,
  ]) {
    byId.set(q.id, q);
  }
  return Array.from(byId.values());
}
