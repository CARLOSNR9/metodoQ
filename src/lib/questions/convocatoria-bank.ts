import { UCC_CONV_2025_06_21_QUESTIONS } from "@/data/ucc-conv-2025-06-21-questions";
import { UCC_CONV_2025_07_05_QUESTIONS } from "@/data/ucc-conv-2025-07-05-questions";
import { UCC_CONV_2025_07_19_QUESTIONS } from "@/data/ucc-conv-2025-07-19-questions";
import { UCC_CONV_2026_07_26_QUESTIONS } from "@/data/ucc-conv-2026-07-26-questions";
import { UCC_CONV_2026_08_09_QUESTIONS } from "@/data/ucc-conv-2026-08-09-questions";
import { UMNG_CONV_2026_07_26_QUESTIONS } from "@/data/umng-conv-2026-07-26-questions";
import { UMNG_CONV_ED2_QUESTIONS } from "@/data/umng-conv-ed2-questions";
import { UMNG_CONV_ED3_QUESTIONS } from "@/data/umng-conv-ed3-questions";
import { UMNG_CONV_ED4_QUESTIONS } from "@/data/umng-conv-ed4-questions";
import { enrichQuestionsWithTheoryPills } from "@/lib/questions/enrich-theory-pills";
import type { TrainingQuestion } from "@/lib/questions/types";

const BANK_BY_EDITION: Record<string, TrainingQuestion[]> = {
  "UCC-2025-06-21": UCC_CONV_2025_06_21_QUESTIONS,
  "UCC-2025-07-05": UCC_CONV_2025_07_05_QUESTIONS,
  "UCC-2025-07-19": UCC_CONV_2025_07_19_QUESTIONS,
  "UCC-2026-07-26": UCC_CONV_2026_07_26_QUESTIONS,
  "UCC-2026-08-09": UCC_CONV_2026_08_09_QUESTIONS,
  "UMNG-2026-07-26": UMNG_CONV_2026_07_26_QUESTIONS,
  "UMNG-ED2": UMNG_CONV_ED2_QUESTIONS,
  "UMNG-ED3": UMNG_CONV_ED3_QUESTIONS,
  "UMNG-ED4": UMNG_CONV_ED4_QUESTIONS,
};


/** Preguntas de una edición de convocatoria (aisladas del entrenamiento libre). */
export function getConvocatoriaQuestionBank(editionCode: string): TrainingQuestion[] {
  const bank = BANK_BY_EDITION[editionCode];
  if (!bank) return [];
  return enrichQuestionsWithTheoryPills([...bank]);
}

export function isKnownConvocatoriaEdition(editionCode: string): boolean {
  return editionCode in BANK_BY_EDITION;
}
