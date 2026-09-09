import { UCC_CONV_2026_09_06_01_10_QUESTIONS } from "@/data/ucc-conv-2026-09-06-01-10-questions";
import { UCC_CONV_2026_09_06_11_20_QUESTIONS } from "@/data/ucc-conv-2026-09-06-11-20-questions";
import { UCC_CONV_2026_09_06_21_30_QUESTIONS } from "@/data/ucc-conv-2026-09-06-21-30-questions";
import { UCC_CONV_2026_09_06_31_40_QUESTIONS } from "@/data/ucc-conv-2026-09-06-31-40-questions";
import { UCC_CONV_2026_09_06_41_50_QUESTIONS } from "@/data/ucc-conv-2026-09-06-41-50-questions";
import { UCC_CONV_2026_09_06_51_60_QUESTIONS } from "@/data/ucc-conv-2026-09-06-51-60-questions";
import { UCC_CONV_2026_09_06_61_70_QUESTIONS } from "@/data/ucc-conv-2026-09-06-61-70-questions";
import { UCC_CONV_2026_09_06_71_80_QUESTIONS } from "@/data/ucc-conv-2026-09-06-71-80-questions";
import { UCC_CONV_2026_09_06_81_90_QUESTIONS } from "@/data/ucc-conv-2026-09-06-81-90-questions";
import { UCC_CONV_2026_09_06_91_100_QUESTIONS } from "@/data/ucc-conv-2026-09-06-91-100-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · agregador.
 * Banco completo de 100 preguntas (#01–#100).
 */
export const UCC_CONV_2026_09_06_QUESTIONS: TrainingQuestion[] = [
  ...UCC_CONV_2026_09_06_01_10_QUESTIONS,
  ...UCC_CONV_2026_09_06_11_20_QUESTIONS,
  ...UCC_CONV_2026_09_06_21_30_QUESTIONS,
  ...UCC_CONV_2026_09_06_31_40_QUESTIONS,
  ...UCC_CONV_2026_09_06_41_50_QUESTIONS,
  ...UCC_CONV_2026_09_06_51_60_QUESTIONS,
  ...UCC_CONV_2026_09_06_61_70_QUESTIONS,
  ...UCC_CONV_2026_09_06_71_80_QUESTIONS,
  ...UCC_CONV_2026_09_06_81_90_QUESTIONS,
  ...UCC_CONV_2026_09_06_91_100_QUESTIONS,
];

export const UCC_CONV_2026_09_06_QUESTION_COUNT = UCC_CONV_2026_09_06_QUESTIONS.length;
