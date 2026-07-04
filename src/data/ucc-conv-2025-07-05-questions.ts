import { UCC_CONV_2025_07_05_01_10_QUESTIONS } from "@/data/ucc-conv-2025-07-05-01-10-questions";
import { UCC_CONV_2025_07_05_11_20_QUESTIONS } from "@/data/ucc-conv-2025-07-05-11-20-questions";
import { UCC_CONV_2025_07_05_21_30_QUESTIONS } from "@/data/ucc-conv-2025-07-05-21-30-questions";
import { UCC_CONV_2025_07_05_31_40_QUESTIONS } from "@/data/ucc-conv-2025-07-05-31-40-questions";
import { UCC_CONV_2025_07_05_41_50_QUESTIONS } from "@/data/ucc-conv-2025-07-05-41-50-questions";
import { UCC_CONV_2025_07_05_51_60_QUESTIONS } from "@/data/ucc-conv-2025-07-05-51-60-questions";
import { UCC_CONV_2025_07_05_61_70_QUESTIONS } from "@/data/ucc-conv-2025-07-05-61-70-questions";
import { UCC_CONV_2025_07_05_71_80_QUESTIONS } from "@/data/ucc-conv-2025-07-05-71-80-questions";
import { UCC_CONV_2025_07_05_81_90_QUESTIONS } from "@/data/ucc-conv-2025-07-05-81-90-questions";
import { UCC_CONV_2025_07_05_91_100_QUESTIONS } from "@/data/ucc-conv-2025-07-05-91-100-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #2 (5 jul 2025) · agregador.
 * Banco completo de 100 preguntas (#01–#100).
 */
export const UCC_CONV_2025_07_05_QUESTIONS: TrainingQuestion[] = [
  ...UCC_CONV_2025_07_05_01_10_QUESTIONS,
  ...UCC_CONV_2025_07_05_11_20_QUESTIONS,
  ...UCC_CONV_2025_07_05_21_30_QUESTIONS,
  ...UCC_CONV_2025_07_05_31_40_QUESTIONS,
  ...UCC_CONV_2025_07_05_41_50_QUESTIONS,
  ...UCC_CONV_2025_07_05_51_60_QUESTIONS,
  ...UCC_CONV_2025_07_05_61_70_QUESTIONS,
  ...UCC_CONV_2025_07_05_71_80_QUESTIONS,
  ...UCC_CONV_2025_07_05_81_90_QUESTIONS,
  ...UCC_CONV_2025_07_05_91_100_QUESTIONS,
];

export const UCC_CONV_2025_07_05_QUESTION_COUNT = UCC_CONV_2025_07_05_QUESTIONS.length;
