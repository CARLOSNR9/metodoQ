import type { PlanId } from "./config";
import { normalizeUserPlan } from "./access";

export type TrainingLimits = {
  questionsPerSession: number;
  sessionsPerDay: number;
  simulacrosPerMonth: number;
  simulacroQuestionCount: number;
  simulacroMinutes: number;
};

/** Mínimo de preguntas por día para cumplir el hábito diario del plan Pro genérico. */
export const PRO_DAILY_MIN_QUESTIONS = 10;

export const PLAN_TRAINING_LIMITS: Record<PlanId, TrainingLimits> = {
  FREE: {
    questionsPerSession: 10,
    sessionsPerDay: 2,
    simulacrosPerMonth: 0,
    simulacroQuestionCount: 0,
    simulacroMinutes: 0,
  },
  BASICO: {
    questionsPerSession: 25,
    sessionsPerDay: 5,
    simulacrosPerMonth: 2,
    simulacroQuestionCount: 40,
    simulacroMinutes: 90,
  },
  PRO: {
    questionsPerSession: 50,
    sessionsPerDay: 3,
    simulacrosPerMonth: 999,
    simulacroQuestionCount: 80,
    simulacroMinutes: 120,
  },
  RESIDENTE: {
    questionsPerSession: 50,
    sessionsPerDay: 3,
    simulacrosPerMonth: 999,
    simulacroQuestionCount: 80,
    simulacroMinutes: 120,
  },
};

export function getTrainingLimits(plan: string | null | undefined): TrainingLimits {
  const normalized = normalizeUserPlan(plan ?? undefined);
  return PLAN_TRAINING_LIMITS[normalized];
}
