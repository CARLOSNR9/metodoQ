import { DAILY_CHALLENGES } from "@/data/daily-challenges";
import { DR_Q_BANCO_GENERAL_276_325_QUESTIONS } from "@/data/dr-q-banco-general-276-325-questions";
import { DR_Q_COEXAM_EXTENSION_326_345_QUESTIONS } from "@/data/dr-q-coexam-extension-326-345-questions";
import { DR_Q_COEXAM_EXTENSION_346_355_QUESTIONS } from "@/data/dr-q-coexam-extension-346-355-questions";
import { DR_Q_COEXAM_EXTENSION_356_380_QUESTIONS } from "@/data/dr-q-coexam-extension-356-380-questions";
import { DR_Q_COEXAM_EXTENSION_381_410_QUESTIONS } from "@/data/dr-q-coexam-extension-381-410-questions";
import { DR_Q_COEXAM_EXTENSION_411_420_QUESTIONS } from "@/data/dr-q-coexam-extension-411-420-questions";
import { DR_Q_COEXAM_QUESTIONS } from "@/data/dr-q-coexam-questions";
import { DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS } from "@/data/dr-q-hematologia-banco-general-questions";
import { DR_Q_MULTISPECIALTY_QUESTIONS } from "@/data/dr-q-multispecialty-questions";
import { DR_Q_UNIVERSAL_QUESTIONS } from "@/data/dr-q-universal-questions";
import { EXTENDED_QUESTIONS } from "@/data/extended-questions";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";
import { UCC_CONV_2025_06_21_QUESTIONS } from "@/data/ucc-conv-2025-06-21-questions";
import { UCC_CONV_2025_07_05_QUESTIONS } from "@/data/ucc-conv-2025-07-05-questions";
import { UCC_PASTO_DIAGNOSTIC_QUESTIONS } from "@/data/ucc-pasto-diagnostico-questions";
import { UCC_PASTO_PRO_QUESTIONS } from "@/data/ucc-pasto-pro-questions";
import { UDEA_DIAGNOSTIC_QUESTIONS } from "@/data/udea-diagnostico-questions";
import { UNAL_DIAGNOSTIC_QUESTIONS } from "@/data/unal-diagnostico-questions";
import { enrichQuestionsWithTheoryPills } from "@/lib/questions/enrich-theory-pills";
import type { TrainingQuestion } from "./types";

function mergeQuestionsById(sources: TrainingQuestion[][]): TrainingQuestion[] {
  const byId = new Map<string, TrainingQuestion>();
  for (const list of sources) {
    for (const q of list) {
      byId.set(q.id, q);
    }
  }
  return enrichQuestionsWithTheoryPills(Array.from(byId.values()));
}

/** Banco local para entrenamiento cuando Firestore no está disponible o está vacío. */
export function getLocalQuestionBank(): TrainingQuestion[] {
  return mergeQuestionsById([
    FALLBACK_QUESTIONS,
    EXTENDED_QUESTIONS,
    DR_Q_UNIVERSAL_QUESTIONS,
    DR_Q_MULTISPECIALTY_QUESTIONS,
    DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS,
    DR_Q_BANCO_GENERAL_276_325_QUESTIONS,
    DR_Q_COEXAM_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_326_345_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_346_355_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_356_380_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_381_410_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_411_420_QUESTIONS,
    UDEA_DIAGNOSTIC_QUESTIONS,
    UNAL_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_PRO_QUESTIONS,
  ]);
}

/** Todas las preguntas definidas en el repositorio (revisión editorial). */
export function getAllRepositoryQuestions(): TrainingQuestion[] {
  return mergeQuestionsById([
    FALLBACK_QUESTIONS,
    EXTENDED_QUESTIONS,
    DR_Q_UNIVERSAL_QUESTIONS,
    DR_Q_MULTISPECIALTY_QUESTIONS,
    DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS,
    DR_Q_BANCO_GENERAL_276_325_QUESTIONS,
    DR_Q_COEXAM_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_326_345_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_346_355_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_356_380_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_381_410_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_411_420_QUESTIONS,
    UDEA_DIAGNOSTIC_QUESTIONS,
    UNAL_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_PRO_QUESTIONS,
    UCC_CONV_2025_06_21_QUESTIONS,
    UCC_CONV_2025_07_05_QUESTIONS,
    DAILY_CHALLENGES,
  ]);
}
