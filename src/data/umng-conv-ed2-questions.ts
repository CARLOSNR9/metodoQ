import type { TrainingQuestion } from "@/lib/questions/types";
import { UMNG_CONV_ED2_01_10_QUESTIONS } from "./umng-conv-ed2-01-10-questions";
import { UMNG_CONV_ED2_11_20_QUESTIONS } from "./umng-conv-ed2-11-20-questions";
import { UMNG_CONV_ED2_21_30_QUESTIONS } from "./umng-conv-ed2-21-30-questions";
import { UMNG_CONV_ED2_31_40_QUESTIONS } from "./umng-conv-ed2-31-40-questions";
import { UMNG_CONV_ED2_41_50_QUESTIONS } from "./umng-conv-ed2-41-50-questions";
import { UMNG_CONV_ED2_51_60_QUESTIONS } from "./umng-conv-ed2-51-60-questions";
import { UMNG_CONV_ED2_61_70_QUESTIONS } from "./umng-conv-ed2-61-70-questions";
import { UMNG_CONV_ED2_71_80_QUESTIONS } from "./umng-conv-ed2-71-80-questions";
import { UMNG_CONV_ED2_81_90_QUESTIONS } from "./umng-conv-ed2-81-90-questions";
import { UMNG_CONV_ED2_91_100_QUESTIONS } from "./umng-conv-ed2-91-100-questions";

/**
 * Banco completo de preguntas para el Simulacro 2 (UMNG-ED2).
 */
export const UMNG_CONV_ED2_QUESTIONS: TrainingQuestion[] = [
  ...UMNG_CONV_ED2_01_10_QUESTIONS,
  ...UMNG_CONV_ED2_11_20_QUESTIONS,
  ...UMNG_CONV_ED2_21_30_QUESTIONS,
  ...UMNG_CONV_ED2_31_40_QUESTIONS,
  ...UMNG_CONV_ED2_41_50_QUESTIONS,
  ...UMNG_CONV_ED2_51_60_QUESTIONS,
  ...UMNG_CONV_ED2_61_70_QUESTIONS,
  ...UMNG_CONV_ED2_71_80_QUESTIONS,
  ...UMNG_CONV_ED2_81_90_QUESTIONS,
  ...UMNG_CONV_ED2_91_100_QUESTIONS,
];
