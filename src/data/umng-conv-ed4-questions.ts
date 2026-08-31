import type { TrainingQuestion } from "@/lib/questions/types";
import { UMNG_CONV_ED4_01_10_QUESTIONS } from "./umng-conv-ed4-01-10-questions";
import { UMNG_CONV_ED4_11_20_QUESTIONS } from "./umng-conv-ed4-11-20-questions";
import { UMNG_CONV_ED4_21_30_QUESTIONS } from "./umng-conv-ed4-21-30-questions";
import { UMNG_CONV_ED4_31_40_QUESTIONS } from "./umng-conv-ed4-31-40-questions";
import { UMNG_CONV_ED4_41_50_QUESTIONS } from "./umng-conv-ed4-41-50-questions";
import { UMNG_CONV_ED4_51_60_QUESTIONS } from "./umng-conv-ed4-51-60-questions";
import { UMNG_CONV_ED4_61_70_QUESTIONS } from "./umng-conv-ed4-61-70-questions";
import { UMNG_CONV_ED4_71_80_QUESTIONS } from "./umng-conv-ed4-71-80-questions";
import { UMNG_CONV_ED4_81_90_QUESTIONS } from "./umng-conv-ed4-81-90-questions";
import { UMNG_CONV_ED4_91_100_QUESTIONS } from "./umng-conv-ed4-91-100-questions";

/**
 * Banco completo de preguntas para el Simulacro 4 (UMNG-ED4).
 */
export const UMNG_CONV_ED4_QUESTIONS: TrainingQuestion[] = [
  ...UMNG_CONV_ED4_01_10_QUESTIONS,
  ...UMNG_CONV_ED4_11_20_QUESTIONS,
  ...UMNG_CONV_ED4_21_30_QUESTIONS,
  ...UMNG_CONV_ED4_31_40_QUESTIONS,
  ...UMNG_CONV_ED4_41_50_QUESTIONS,
  ...UMNG_CONV_ED4_51_60_QUESTIONS,
  ...UMNG_CONV_ED4_61_70_QUESTIONS,
  ...UMNG_CONV_ED4_71_80_QUESTIONS,
  ...UMNG_CONV_ED4_81_90_QUESTIONS,
  ...UMNG_CONV_ED4_91_100_QUESTIONS,
];
