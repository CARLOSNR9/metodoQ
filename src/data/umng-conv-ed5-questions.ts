import type { TrainingQuestion } from "@/lib/questions/types";
import { UMNG_CONV_ED5_01_10_QUESTIONS } from "./umng-conv-ed5-01-10-questions";
import { UMNG_CONV_ED5_11_20_QUESTIONS } from "./umng-conv-ed5-11-20-questions";
import { UMNG_CONV_ED5_21_30_QUESTIONS } from "./umng-conv-ed5-21-30-questions";
import { UMNG_CONV_ED5_31_40_QUESTIONS } from "./umng-conv-ed5-31-40-questions";
import { UMNG_CONV_ED5_41_50_QUESTIONS } from "./umng-conv-ed5-41-50-questions";
import { UMNG_CONV_ED5_51_60_QUESTIONS } from "./umng-conv-ed5-51-60-questions";
import { UMNG_CONV_ED5_61_70_QUESTIONS } from "./umng-conv-ed5-61-70-questions";
import { UMNG_CONV_ED5_71_80_QUESTIONS } from "./umng-conv-ed5-71-80-questions";
import { UMNG_CONV_ED5_81_90_QUESTIONS } from "./umng-conv-ed5-81-90-questions";
import { UMNG_CONV_ED5_91_100_QUESTIONS } from "./umng-conv-ed5-91-100-questions";

/**
 * Banco completo de preguntas para el Simulacro 5 (UMNG-ED5).
 */
export const UMNG_CONV_ED5_QUESTIONS: TrainingQuestion[] = [
  ...UMNG_CONV_ED5_01_10_QUESTIONS,
  ...UMNG_CONV_ED5_11_20_QUESTIONS,
  ...UMNG_CONV_ED5_21_30_QUESTIONS,
  ...UMNG_CONV_ED5_31_40_QUESTIONS,
  ...UMNG_CONV_ED5_41_50_QUESTIONS,
  ...UMNG_CONV_ED5_51_60_QUESTIONS,
  ...UMNG_CONV_ED5_61_70_QUESTIONS,
  ...UMNG_CONV_ED5_71_80_QUESTIONS,
  ...UMNG_CONV_ED5_81_90_QUESTIONS,
  ...UMNG_CONV_ED5_91_100_QUESTIONS,
];
