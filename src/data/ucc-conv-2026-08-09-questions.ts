import { UCC_CONV_2026_08_09_01_10_QUESTIONS } from "@/data/ucc-conv-2026-08-09-01-10-questions";
import { UCC_CONV_2026_08_09_11_20_QUESTIONS } from "@/data/ucc-conv-2026-08-09-11-20-questions";
import { UCC_CONV_2026_08_09_21_30_QUESTIONS } from "@/data/ucc-conv-2026-08-09-21-30-questions";
import { UCC_CONV_2026_08_09_31_40_QUESTIONS } from "@/data/ucc-conv-2026-08-09-31-40-questions";
import { UCC_CONV_2026_08_09_41_50_QUESTIONS } from "@/data/ucc-conv-2026-08-09-41-50-questions";
import { UCC_CONV_2026_08_09_51_60_QUESTIONS } from "@/data/ucc-conv-2026-08-09-51-60-questions";
import { UCC_CONV_2026_08_09_61_70_QUESTIONS } from "@/data/ucc-conv-2026-08-09-61-70-questions";
import { UCC_CONV_2026_08_09_71_80_QUESTIONS } from "@/data/ucc-conv-2026-08-09-71-80-questions";
import { UCC_CONV_2026_08_09_81_90_QUESTIONS } from "@/data/ucc-conv-2026-08-09-81-90-questions";
import { UCC_CONV_2026_08_09_91_100_QUESTIONS } from "@/data/ucc-conv-2026-08-09-91-100-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · agregador.
 * Banco completo de 100 preguntas (#01–#100).
 */
export const UCC_CONV_2026_08_09_QUESTIONS: TrainingQuestion[] = [
  ...UCC_CONV_2026_08_09_01_10_QUESTIONS,
  ...UCC_CONV_2026_08_09_11_20_QUESTIONS,
  ...UCC_CONV_2026_08_09_21_30_QUESTIONS,
  ...UCC_CONV_2026_08_09_31_40_QUESTIONS,
  ...UCC_CONV_2026_08_09_41_50_QUESTIONS,
  ...UCC_CONV_2026_08_09_51_60_QUESTIONS,
  ...UCC_CONV_2026_08_09_61_70_QUESTIONS,
  ...UCC_CONV_2026_08_09_71_80_QUESTIONS,
  ...UCC_CONV_2026_08_09_81_90_QUESTIONS,
  ...UCC_CONV_2026_08_09_91_100_QUESTIONS,
];

export const UCC_CONV_2026_08_09_QUESTION_COUNT = UCC_CONV_2026_08_09_QUESTIONS.length;
