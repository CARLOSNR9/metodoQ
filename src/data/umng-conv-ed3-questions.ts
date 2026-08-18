import { UMNG_CONV_ED3_01_10_QUESTIONS } from "./umng-conv-ed3-01-10-questions";
import { UMNG_CONV_ED3_11_20_QUESTIONS } from "./umng-conv-ed3-11-20-questions";
import { UMNG_CONV_ED3_21_30_QUESTIONS } from "./umng-conv-ed3-21-30-questions";
import { UMNG_CONV_ED3_31_40_QUESTIONS } from "./umng-conv-ed3-31-40-questions";
import { UMNG_CONV_ED3_41_50_QUESTIONS } from "./umng-conv-ed3-41-50-questions";
import { UMNG_CONV_ED3_51_60_QUESTIONS } from "./umng-conv-ed3-51-60-questions";
import { UMNG_CONV_ED3_61_70_QUESTIONS } from "./umng-conv-ed3-61-70-questions";
import { UMNG_CONV_ED3_71_80_QUESTIONS } from "./umng-conv-ed3-71-80-questions";
import { UMNG_CONV_ED3_81_90_QUESTIONS } from "./umng-conv-ed3-81-90-questions";
import { UMNG_CONV_ED3_91_100_QUESTIONS } from "./umng-conv-ed3-91-100-questions";

import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco completo de preguntas para el Simulacro 3 (UMNG-ED3).
 */
export const UMNG_CONV_ED3_QUESTIONS: TrainingQuestion[] = [
  ...UMNG_CONV_ED3_01_10_QUESTIONS,
  ...UMNG_CONV_ED3_11_20_QUESTIONS,
  ...UMNG_CONV_ED3_21_30_QUESTIONS,
  ...UMNG_CONV_ED3_31_40_QUESTIONS,
  ...UMNG_CONV_ED3_41_50_QUESTIONS,
  ...UMNG_CONV_ED3_51_60_QUESTIONS,
  ...UMNG_CONV_ED3_61_70_QUESTIONS,
  ...UMNG_CONV_ED3_71_80_QUESTIONS,
  ...UMNG_CONV_ED3_81_90_QUESTIONS,
  ...UMNG_CONV_ED3_91_100_QUESTIONS,
];

export const UMNG_CONV_ED3_QUESTION_COUNT = UMNG_CONV_ED3_QUESTIONS.length;
