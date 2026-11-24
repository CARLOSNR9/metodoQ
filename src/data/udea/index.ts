import type { TrainingQuestion } from "@/lib/questions/types";
import { UDEA_EXAMEN_REAL_01_10 } from "./examen-real-01-10";
import { UDEA_EXAMEN_REAL_11_20 } from "./examen-real-11-20";
import { UDEA_EXAMEN_REAL_21_30 } from "./examen-real-21-30";
import { UDEA_EXAMEN_REAL_31_40 } from "./examen-real-31-40";
import { UDEA_EXAMEN_REAL_41_50 } from "./examen-real-41-50";
import { UDEA_EXAMEN_REAL_51_60 } from "./examen-real-51-60";
import { UDEA_EXAMEN_REAL_61_70 } from "./examen-real-61-70";
import { UDEA_MEDICINA_DEPORTE_01_10 } from "./medicina-deporte-01-10";
import { UDEA_MEDICINA_DEPORTE_11_20 } from "./medicina-deporte-11-20";

/**
 * Examen real de admisión a posgrados clínicos de la UdeA (70 preguntas),
 * entregado a Método Q por la universidad. Orden original del cuadernillo.
 */
export const UDEA_EXAMEN_REAL_QUESTIONS: TrainingQuestion[] = [
  ...UDEA_EXAMEN_REAL_01_10,
  ...UDEA_EXAMEN_REAL_11_20,
  ...UDEA_EXAMEN_REAL_21_30,
  ...UDEA_EXAMEN_REAL_31_40,
  ...UDEA_EXAMEN_REAL_41_50,
  ...UDEA_EXAMEN_REAL_51_60,
  ...UDEA_EXAMEN_REAL_61_70,
];

/** Ruta Medicina del Deporte (20 preguntas propias). */
export const UDEA_MEDICINA_DEPORTE_QUESTIONS: TrainingQuestion[] = [
  ...UDEA_MEDICINA_DEPORTE_01_10,
  ...UDEA_MEDICINA_DEPORTE_11_20,
];

/** Banco propio UdeA para el entrenamiento libre (ruta deporte). */
export const UDEA_OWN_QUESTIONS: TrainingQuestion[] = [...UDEA_MEDICINA_DEPORTE_QUESTIONS];
