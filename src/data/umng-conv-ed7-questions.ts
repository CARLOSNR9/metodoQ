import type { TrainingQuestion } from "@/lib/questions/types";
import { UMNG_CONV_ED7_01_10_QUESTIONS } from "./umng-conv-ed7-01-10-questions";
import { UMNG_CONV_ED7_11_20_QUESTIONS } from "./umng-conv-ed7-11-20-questions";
import { UMNG_CONV_ED7_21_30_QUESTIONS } from "./umng-conv-ed7-21-30-questions";
import { UMNG_CONV_ED7_31_40_QUESTIONS } from "./umng-conv-ed7-31-40-questions";
import { UMNG_CONV_ED7_41_50_QUESTIONS } from "./umng-conv-ed7-41-50-questions";
import { UMNG_CONV_ED7_51_60_QUESTIONS } from "./umng-conv-ed7-51-60-questions";
import { UMNG_CONV_ED7_61_70_QUESTIONS } from "./umng-conv-ed7-61-70-questions";
import { UMNG_CONV_ED7_71_80_QUESTIONS } from "./umng-conv-ed7-71-80-questions";
import { UMNG_CONV_ED7_81_90_QUESTIONS } from "./umng-conv-ed7-81-90-questions";
import { UMNG_CONV_ED7_91_100_QUESTIONS } from "./umng-conv-ed7-91-100-questions";

/**
 * Banco completo de preguntas para el Simulacro 7 (UMNG-ED7).
 */
export const UMNG_CONV_ED7_QUESTIONS: TrainingQuestion[] = [
  ...UMNG_CONV_ED7_01_10_QUESTIONS,
  ...UMNG_CONV_ED7_11_20_QUESTIONS,
  ...UMNG_CONV_ED7_21_30_QUESTIONS,
  ...UMNG_CONV_ED7_31_40_QUESTIONS,
  ...UMNG_CONV_ED7_41_50_QUESTIONS,
  ...UMNG_CONV_ED7_51_60_QUESTIONS,
  ...UMNG_CONV_ED7_61_70_QUESTIONS,
  ...UMNG_CONV_ED7_71_80_QUESTIONS,
  ...UMNG_CONV_ED7_81_90_QUESTIONS,
  ...UMNG_CONV_ED7_91_100_QUESTIONS,
];
