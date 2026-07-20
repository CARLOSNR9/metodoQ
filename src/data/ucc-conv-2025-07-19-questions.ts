import { UCC_CONV_2025_07_19_01_10_QUESTIONS } from "@/data/ucc-conv-2025-07-19-01-10-questions";
import { UCC_CONV_2025_07_19_11_20_QUESTIONS } from "@/data/ucc-conv-2025-07-19-11-20-questions";
import { UCC_CONV_2025_07_19_21_30_QUESTIONS } from "@/data/ucc-conv-2025-07-19-21-30-questions";
import { UCC_CONV_2025_07_19_31_40_QUESTIONS } from "@/data/ucc-conv-2025-07-19-31-40-questions";
import { UCC_CONV_2025_07_19_41_50_QUESTIONS } from "@/data/ucc-conv-2025-07-19-41-50-questions";
import { UCC_CONV_2025_07_19_51_60_QUESTIONS } from "@/data/ucc-conv-2025-07-19-51-60-questions";
import { UCC_CONV_2025_07_19_61_70_QUESTIONS } from "@/data/ucc-conv-2025-07-19-61-70-questions";
import { UCC_CONV_2025_07_19_71_80_QUESTIONS } from "@/data/ucc-conv-2025-07-19-71-80-questions";
import { UCC_CONV_2025_07_19_81_90_QUESTIONS } from "@/data/ucc-conv-2025-07-19-81-90-questions";
import { UCC_CONV_2025_07_19_91_100_QUESTIONS } from "@/data/ucc-conv-2025-07-19-91-100-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) · agregador.
 * Banco completo (Lotes 1 a 10: Preguntas #01–#100).
 */
export const UCC_CONV_2025_07_19_QUESTIONS: TrainingQuestion[] = [
  ...UCC_CONV_2025_07_19_01_10_QUESTIONS,
  ...UCC_CONV_2025_07_19_11_20_QUESTIONS,
  ...UCC_CONV_2025_07_19_21_30_QUESTIONS,
  ...UCC_CONV_2025_07_19_31_40_QUESTIONS,
  ...UCC_CONV_2025_07_19_41_50_QUESTIONS,
  ...UCC_CONV_2025_07_19_51_60_QUESTIONS,
  ...UCC_CONV_2025_07_19_61_70_QUESTIONS,
  ...UCC_CONV_2025_07_19_71_80_QUESTIONS,
  ...UCC_CONV_2025_07_19_81_90_QUESTIONS,
  ...UCC_CONV_2025_07_19_91_100_QUESTIONS,
];

export const UCC_CONV_2025_07_19_QUESTION_COUNT = UCC_CONV_2025_07_19_QUESTIONS.length;
