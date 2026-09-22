import { UCC_CONV_2026_09_20_01_10_QUESTIONS } from "@/data/ucc-conv-2026-09-20-01-10-questions";
import { UCC_CONV_2026_09_20_11_20_QUESTIONS } from "@/data/ucc-conv-2026-09-20-11-20-questions";
import { UCC_CONV_2026_09_20_21_30_QUESTIONS } from "@/data/ucc-conv-2026-09-20-21-30-questions";
import { UCC_CONV_2026_09_20_31_40_QUESTIONS } from "@/data/ucc-conv-2026-09-20-31-40-questions";
import { UCC_CONV_2026_09_20_41_50_QUESTIONS } from "@/data/ucc-conv-2026-09-20-41-50-questions";
import { UCC_CONV_2026_09_20_51_60_QUESTIONS } from "@/data/ucc-conv-2026-09-20-51-60-questions";
import { UCC_CONV_2026_09_20_61_70_QUESTIONS } from "@/data/ucc-conv-2026-09-20-61-70-questions";
import { UCC_CONV_2026_09_20_71_80_QUESTIONS } from "@/data/ucc-conv-2026-09-20-71-80-questions";
import { UCC_CONV_2026_09_20_81_90_QUESTIONS } from "@/data/ucc-conv-2026-09-20-81-90-questions";
import { UCC_CONV_2026_09_20_91_100_QUESTIONS } from "@/data/ucc-conv-2026-09-20-91-100-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · agregador.
 * Banco completo de 100 preguntas (#01–#100).
 */
export const UCC_CONV_2026_09_20_QUESTIONS: TrainingQuestion[] = [
  ...UCC_CONV_2026_09_20_01_10_QUESTIONS,
  ...UCC_CONV_2026_09_20_11_20_QUESTIONS,
  ...UCC_CONV_2026_09_20_21_30_QUESTIONS,
  ...UCC_CONV_2026_09_20_31_40_QUESTIONS,
  ...UCC_CONV_2026_09_20_41_50_QUESTIONS,
  ...UCC_CONV_2026_09_20_51_60_QUESTIONS,
  ...UCC_CONV_2026_09_20_61_70_QUESTIONS,
  ...UCC_CONV_2026_09_20_71_80_QUESTIONS,
  ...UCC_CONV_2026_09_20_81_90_QUESTIONS,
  ...UCC_CONV_2026_09_20_91_100_QUESTIONS,
];

export const UCC_CONV_2026_09_20_QUESTION_COUNT = UCC_CONV_2026_09_20_QUESTIONS.length;
