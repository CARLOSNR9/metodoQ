import type { TrainingQuestion } from "@/lib/questions/types";
import { UMNG_CONV_ED6_01_10_QUESTIONS } from "./umng-conv-ed6-01-10-questions";
import { UMNG_CONV_ED6_11_20_QUESTIONS } from "./umng-conv-ed6-11-20-questions";
import { UMNG_CONV_ED6_21_30_QUESTIONS } from "./umng-conv-ed6-21-30-questions";
import { UMNG_CONV_ED6_31_40_QUESTIONS } from "./umng-conv-ed6-31-40-questions";
import { UMNG_CONV_ED6_41_50_QUESTIONS } from "./umng-conv-ed6-41-50-questions";
import { UMNG_CONV_ED6_51_60_QUESTIONS } from "./umng-conv-ed6-51-60-questions";
import { UMNG_CONV_ED6_61_70_QUESTIONS } from "./umng-conv-ed6-61-70-questions";
import { UMNG_CONV_ED6_71_80_QUESTIONS } from "./umng-conv-ed6-71-80-questions";
import { UMNG_CONV_ED6_81_90_QUESTIONS } from "./umng-conv-ed6-81-90-questions";
import { UMNG_CONV_ED6_91_100_QUESTIONS } from "./umng-conv-ed6-91-100-questions";

/**
 * Banco completo de preguntas para el Simulacro 6 (UMNG-ED6).
 */
export const UMNG_CONV_ED6_QUESTIONS: TrainingQuestion[] = [
  ...UMNG_CONV_ED6_01_10_QUESTIONS,
  ...UMNG_CONV_ED6_11_20_QUESTIONS,
  ...UMNG_CONV_ED6_21_30_QUESTIONS,
  ...UMNG_CONV_ED6_31_40_QUESTIONS,
  ...UMNG_CONV_ED6_41_50_QUESTIONS,
  ...UMNG_CONV_ED6_51_60_QUESTIONS,
  ...UMNG_CONV_ED6_61_70_QUESTIONS,
  ...UMNG_CONV_ED6_71_80_QUESTIONS,
  ...UMNG_CONV_ED6_81_90_QUESTIONS,
  ...UMNG_CONV_ED6_91_100_QUESTIONS,
];
