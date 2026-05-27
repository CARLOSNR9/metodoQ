import { DAILY_CHALLENGES } from "@/data/daily-challenges";
import { EXTENDED_QUESTIONS } from "@/data/extended-questions";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";
import { UCC_PASTO_DIAGNOSTIC_QUESTIONS } from "@/data/ucc-pasto-diagnostico-questions";
import { UDEA_DIAGNOSTIC_QUESTIONS } from "@/data/udea-diagnostico-questions";
import { UNAL_DIAGNOSTIC_QUESTIONS } from "@/data/unal-diagnostico-questions";
import type { TrainingQuestion } from "./types";

function mergeQuestionsById(sources: TrainingQuestion[][]): TrainingQuestion[] {
  const byId = new Map<string, TrainingQuestion>();
  for (const list of sources) {
    for (const q of list) {
      byId.set(q.id, q);
    }
  }
  return Array.from(byId.values());
}

/** Banco local para entrenamiento cuando Firestore no está disponible o está vacío. */
export function getLocalQuestionBank(): TrainingQuestion[] {
  return mergeQuestionsById([
    FALLBACK_QUESTIONS,
    EXTENDED_QUESTIONS,
    UDEA_DIAGNOSTIC_QUESTIONS,
    UNAL_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_DIAGNOSTIC_QUESTIONS,
  ]);
}

/** Todas las preguntas definidas en el repositorio (revisión editorial). */
export function getAllRepositoryQuestions(): TrainingQuestion[] {
  return mergeQuestionsById([
    FALLBACK_QUESTIONS,
    EXTENDED_QUESTIONS,
    UDEA_DIAGNOSTIC_QUESTIONS,
    UNAL_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_DIAGNOSTIC_QUESTIONS,
    DAILY_CHALLENGES,
  ]);
}
