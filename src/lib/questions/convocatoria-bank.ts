import { UCC_CONV_2025_06_21_QUESTIONS } from "@/data/ucc-conv-2025-06-21-questions";
import { UCC_CONV_2025_07_05_QUESTIONS } from "@/data/ucc-conv-2025-07-05-questions";
import { UCC_CONV_2025_07_19_QUESTIONS } from "@/data/ucc-conv-2025-07-19-questions";
import { UCC_CONV_2026_07_26_QUESTIONS } from "@/data/ucc-conv-2026-07-26-questions";
import { UCC_CONV_2026_08_09_QUESTIONS } from "@/data/ucc-conv-2026-08-09-questions";
import { UCC_CONV_2026_08_23_QUESTIONS } from "@/data/ucc-conv-2026-08-23-questions";
import { UCC_CONV_2026_09_06_QUESTIONS } from "@/data/ucc-conv-2026-09-06-questions";
import { UCC_CONV_2026_09_20_QUESTIONS } from "@/data/ucc-conv-2026-09-20-questions";
import { UMNG_CONV_2026_07_26_QUESTIONS } from "@/data/umng-conv-2026-07-26-questions";
import { UMNG_CONV_ED2_QUESTIONS } from "@/data/umng-conv-ed2-questions";
import { UMNG_CONV_ED3_QUESTIONS } from "@/data/umng-conv-ed3-questions";
import { UMNG_CONV_ED4_QUESTIONS } from "@/data/umng-conv-ed4-questions";
import { UMNG_CONV_ED5_QUESTIONS } from "@/data/umng-conv-ed5-questions";
import { UMNG_CONV_ED6_QUESTIONS } from "@/data/umng-conv-ed6-questions";
import { UMNG_CONV_ED7_QUESTIONS } from "@/data/umng-conv-ed7-questions";
import {
  UNIVALLE_SIMULACRO_1_QUESTIONS,
  UNIVALLE_SIMULACRO_2_QUESTIONS,
  UNIVALLE_SIMULACRO_3_QUESTIONS,
  UNIVALLE_SIMULACRO_4_QUESTIONS,
  UNIVALLE_SIMULACRO_5_QUESTIONS,
  UNIVALLE_SIMULACRO_6_QUESTIONS,
} from "@/data/univalle-simulacros";
import {
  UDEA_SIMULACRO_1_QUESTIONS,
  UDEA_SIMULACRO_2_QUESTIONS,
  UDEA_SIMULACRO_3_QUESTIONS,
  UDEA_SIMULACRO_4_QUESTIONS,
  UDEA_SIMULACRO_5_QUESTIONS,
  UDEA_SIMULACRO_6_QUESTIONS,
} from "@/data/udea-simulacros";
import { enrichQuestionsWithTheoryPills } from "@/lib/questions/enrich-theory-pills";
import type { TrainingQuestion } from "@/lib/questions/types";

const BANK_BY_EDITION: Record<string, TrainingQuestion[]> = {
  "UCC-2025-06-21": UCC_CONV_2025_06_21_QUESTIONS,
  "UCC-2025-07-05": UCC_CONV_2025_07_05_QUESTIONS,
  "UCC-2025-07-19": UCC_CONV_2025_07_19_QUESTIONS,
  "UCC-2026-07-26": UCC_CONV_2026_07_26_QUESTIONS,
  "UCC-2026-08-09": UCC_CONV_2026_08_09_QUESTIONS,
  "UCC-2026-08-23": UCC_CONV_2026_08_23_QUESTIONS,
  "UCC-2026-09-06": UCC_CONV_2026_09_06_QUESTIONS,
  "UCC-2026-09-20": UCC_CONV_2026_09_20_QUESTIONS,
  "UMNG-2026-07-26": UMNG_CONV_2026_07_26_QUESTIONS,
  "UMNG-ED2": UMNG_CONV_ED2_QUESTIONS,
  "UMNG-ED3": UMNG_CONV_ED3_QUESTIONS,
  "UMNG-ED4": UMNG_CONV_ED4_QUESTIONS,
  "UMNG-ED5": UMNG_CONV_ED5_QUESTIONS,
  "UMNG-ED6": UMNG_CONV_ED6_QUESTIONS,
  "UMNG-ED7": UMNG_CONV_ED7_QUESTIONS,
  "UNIVALLE-ED1": UNIVALLE_SIMULACRO_1_QUESTIONS,
  "UNIVALLE-ED2": UNIVALLE_SIMULACRO_2_QUESTIONS,
  "UNIVALLE-ED3": UNIVALLE_SIMULACRO_3_QUESTIONS,
  "UNIVALLE-ED4": UNIVALLE_SIMULACRO_4_QUESTIONS,
  "UNIVALLE-ED5": UNIVALLE_SIMULACRO_5_QUESTIONS,
  "UNIVALLE-ED6": UNIVALLE_SIMULACRO_6_QUESTIONS,
  "UDEA-ED1": UDEA_SIMULACRO_1_QUESTIONS,
  "UDEA-ED2": UDEA_SIMULACRO_2_QUESTIONS,
  "UDEA-ED3": UDEA_SIMULACRO_3_QUESTIONS,
  "UDEA-ED4": UDEA_SIMULACRO_4_QUESTIONS,
  "UDEA-ED5": UDEA_SIMULACRO_5_QUESTIONS,
  "UDEA-ED6": UDEA_SIMULACRO_6_QUESTIONS,
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
