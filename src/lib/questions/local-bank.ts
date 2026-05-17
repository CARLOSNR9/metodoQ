import { EXTENDED_QUESTIONS } from "@/data/extended-questions";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";
import type { TrainingQuestion } from "./types";

/** Banco local completo cuando Firestore no está disponible o está vacío. */
export function getLocalQuestionBank(): TrainingQuestion[] {
  const byId = new Map<string, TrainingQuestion>();
  for (const q of [...FALLBACK_QUESTIONS, ...EXTENDED_QUESTIONS]) {
    byId.set(q.id, q);
  }
  return Array.from(byId.values());
}
