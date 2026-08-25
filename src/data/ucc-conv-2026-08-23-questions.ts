import { UCC_CONV_2026_08_23_01_10_QUESTIONS } from "@/data/ucc-conv-2026-08-23-01-10-questions";
import { UCC_CONV_2026_08_23_11_20_QUESTIONS } from "@/data/ucc-conv-2026-08-23-11-20-questions";
import { UCC_CONV_2026_08_23_21_30_QUESTIONS } from "@/data/ucc-conv-2026-08-23-21-30-questions";
import { UCC_CONV_2026_08_23_31_40_QUESTIONS } from "@/data/ucc-conv-2026-08-23-31-40-questions";
import { UCC_CONV_2026_08_23_41_50_QUESTIONS } from "@/data/ucc-conv-2026-08-23-41-50-questions";
import { UCC_CONV_2026_08_23_51_60_QUESTIONS } from "@/data/ucc-conv-2026-08-23-51-60-questions";
import { UCC_CONV_2026_08_23_61_70_QUESTIONS } from "@/data/ucc-conv-2026-08-23-61-70-questions";
import { UCC_CONV_2026_08_23_71_80_QUESTIONS } from "@/data/ucc-conv-2026-08-23-71-80-questions";
import { UCC_CONV_2026_08_23_81_90_QUESTIONS } from "@/data/ucc-conv-2026-08-23-81-90-questions";
import { UCC_CONV_2026_08_23_91_100_QUESTIONS } from "@/data/ucc-conv-2026-08-23-91-100-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · agregador.
 * Banco completo de 100 preguntas (#01–#100).
 */
export const UCC_CONV_2026_08_23_QUESTIONS: TrainingQuestion[] = [
  ...UCC_CONV_2026_08_23_01_10_QUESTIONS,
  ...UCC_CONV_2026_08_23_11_20_QUESTIONS,
  ...UCC_CONV_2026_08_23_21_30_QUESTIONS,
  ...UCC_CONV_2026_08_23_31_40_QUESTIONS,
  ...UCC_CONV_2026_08_23_41_50_QUESTIONS,
  ...UCC_CONV_2026_08_23_51_60_QUESTIONS,
  ...UCC_CONV_2026_08_23_61_70_QUESTIONS,
  ...UCC_CONV_2026_08_23_71_80_QUESTIONS,
  ...UCC_CONV_2026_08_23_81_90_QUESTIONS,
  ...UCC_CONV_2026_08_23_91_100_QUESTIONS,
];

export const UCC_CONV_2026_08_23_QUESTION_COUNT = UCC_CONV_2026_08_23_QUESTIONS.length;
