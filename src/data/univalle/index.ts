import type { TrainingQuestion } from "@/lib/questions/types";
import { UNIVALLE_DERMATOLOGIA_01_10 } from "./dermatologia-01-10";
import { UNIVALLE_DERMATOLOGIA_11_20 } from "./dermatologia-11-20";
import { UNIVALLE_DERMATOLOGIA_21_30 } from "./dermatologia-21-30";
import { UNIVALLE_DERMATOLOGIA_31_45 } from "./dermatologia-31-45";
import { UNIVALLE_DERMATOLOGIA_46_60 } from "./dermatologia-46-60";
import { UNIVALLE_DIAGNOSTICO } from "./diagnostico";
import { UNIVALLE_NORMATIVIDAD_01_10 } from "./normatividad-01-10";
import { UNIVALLE_NORMATIVIDAD_11_20 } from "./normatividad-11-20";

/** Ruta Dermatología Univalle (60 preguntas). */
export const UNIVALLE_DERMATOLOGIA_QUESTIONS: TrainingQuestion[] = [
  ...UNIVALLE_DERMATOLOGIA_01_10,
  ...UNIVALLE_DERMATOLOGIA_11_20,
  ...UNIVALLE_DERMATOLOGIA_21_30,
  ...UNIVALLE_DERMATOLOGIA_31_45,
  ...UNIVALLE_DERMATOLOGIA_46_60,
];

/** Normatividad colombiana, ética y epidemiología (20 preguntas). */
export const UNIVALLE_NORMATIVIDAD_QUESTIONS: TrainingQuestion[] = [
  ...UNIVALLE_NORMATIVIDAD_01_10,
  ...UNIVALLE_NORMATIVIDAD_11_20,
];

/** Diagnóstico Act1 para aspirantes a Univalle (10 preguntas, fijo). */
export const UNIVALLE_DIAGNOSTIC_QUESTIONS: TrainingQuestion[] = UNIVALLE_DIAGNOSTICO;

/** Todo el banco propio Univalle (entrenamiento libre). */
export const UNIVALLE_OWN_QUESTIONS: TrainingQuestion[] = [
  ...UNIVALLE_DIAGNOSTIC_QUESTIONS,
  ...UNIVALLE_DERMATOLOGIA_QUESTIONS,
  ...UNIVALLE_NORMATIVIDAD_QUESTIONS,
];

export function getUnivalleDiagnosticSession(): TrainingQuestion[] {
  return [...UNIVALLE_DIAGNOSTIC_QUESTIONS];
}
