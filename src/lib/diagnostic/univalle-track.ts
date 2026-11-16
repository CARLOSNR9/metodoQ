import { hasProFeatures } from "@/lib/plans/access";
import {
  isDermatologiaSpecialty,
  isUnivalleUniversity,
} from "@/lib/diagnostic/university-match";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";

/**
 * Universidad del Valle (Cali) — Posgrados Clínicos de la Escuela de Medicina.
 *
 * Fuentes (consultadas nov-2026):
 * - Convocatoria 2026: inscripciones 15 ene – 20 feb, lista de citados 20 mar,
 *   examen presencial 30 mar, admitidos 27 abr.
 * - Manual de Ciencias Clínicas (Admisiones Univalle): examen ÚNICO para todos
 *   los aspirantes, nivel medicina general — ciencias básicas, ciencias
 *   clínicas, normas del ejercicio médico en Colombia y cultura general.
 * - Ponderación reportada para 2026: examen de conocimientos ~95% + inglés 5%.
 *   (Documentos históricos usaban otras ponderaciones con entrevista; verificar
 *   en cada convocatoria.)
 * - Formato: selección múltiple con única respuesta. El número de preguntas no
 *   es oficial; guías de aspirantes reportan 120–180 preguntas en 3,5–4,5 h.
 * - Especialización en Dermatología: SNIES 54444, 3 años, creada en 1971 en el
 *   Hospital Universitario del Valle Evaristo García (Dr. Rafael Falabella).
 */
export const UNIVALLE_EXAM_INFO = {
  shortName: "Univalle",
  fullName: "Universidad del Valle",
  city: "Cali",
  /** Fecha estimada (la convocatoria 2026 fue el 30 de marzo). */
  estimatedExamDate: "2027-03-29T07:00:00-05:00",
  estimatedExamLabel: "finales de marzo de 2027 (estimado)",
  estimatedInscriptionsLabel: "mediados de enero a finales de febrero de 2027 (estimado)",
  /** Ritmo objetivo de entrenamiento: 1,5 min por pregunta. */
  targetSecondsPerQuestion: 90,
  reportedQuestionsRange: "120–180",
  reportedDurationRange: "3,5–4,5 h",
  weighting: [
    { label: "Examen de conocimientos", value: "≈95%" },
    { label: "Inglés", value: "≈5%" },
  ],
  examAreas: [
    "Ciencias clínicas (medicina interna, pediatría, cirugía, ginecobstetricia, urgencias)",
    "Ciencias básicas",
    "Normas del ejercicio médico en Colombia y salud pública",
    "Cultura general",
  ],
} as const;

export const UNIVALLE_DERMATOLOGY_PROGRAM = {
  name: "Especialización en Dermatología",
  snies: "54444",
  durationYears: 3,
  foundedYear: 1971,
  hospital: "Hospital Universitario del Valle Evaristo García",
  founder: "Dr. Rafael Falabella",
} as const;

/** Usuario cuya universidad objetivo es la Universidad del Valle. */
export function isUnivalleTrack(goalUniversity?: string | null): boolean {
  return isUnivalleUniversity(goalUniversity);
}

export function isUnivalleDermatologiaTrack(
  goalUniversity?: string | null,
  goalSpecialty?: string | null,
): boolean {
  return isUnivalleUniversity(goalUniversity) && isDermatologiaSpecialty(goalSpecialty);
}

/** Plan Pro (o Residente) + Univalle (cualquier especialidad). */
export function isUnivalleProUser(profile: LearningTrackProfile | null | undefined): boolean {
  if (!profile) return false;
  return hasProFeatures(profile.plan) && isUnivalleTrack(profile.goalUniversity);
}

export function getDaysUntilUnivalleExam(today: Date = new Date()): number {
  const exam = new Date(UNIVALLE_EXAM_INFO.estimatedExamDate);
  const ms = exam.getTime() - today.getTime();
  return Math.max(0, Math.ceil(ms / (24 * 60 * 60 * 1000)));
}

export type UnivallePhase = {
  id: number;
  title: string;
  window: string;
  /** Inicio de la fase (inclusive), YYYY-MM-DD. */
  startsOn: string;
  focus: string;
  goals: string[];
};

/** Ruta de estudio hacia el examen de marzo (4 fases). */
export const UNIVALLE_PHASES: UnivallePhase[] = [
  {
    id: 1,
    title: "Calibración y bases",
    window: "Noviembre – diciembre",
    startsOn: "2026-11-01",
    focus: "Diagnóstico, medicina interna y pediatría",
    goals: [
      "Hacer el diagnóstico Univalle (10 preguntas)",
      "Simulacro #1 completo para medir tu punto de partida",
      "30–40 preguntas diarias priorizando tus áreas débiles",
    ],
  },
  {
    id: 2,
    title: "Cobertura total",
    window: "Enero",
    startsOn: "2027-01-01",
    focus: "Cirugía, ginecobstetricia, urgencias y normatividad colombiana",
    goals: [
      "Inscribirte a la convocatoria apenas abra (enero)",
      "Bloque diario de normatividad y salud pública",
      "Un simulacro cada 3–4 semanas",
    ],
  },
  {
    id: 3,
    title: "Ritmo de examen",
    window: "Febrero",
    startsOn: "2027-02-01",
    focus: "Simulacros cronometrados y repaso de errores",
    goals: [
      "Entrenar a 1,5 minutos por pregunta",
      "Repasar todas tus preguntas falladas",
      "Ruta Dermatología para la entrevista y la motivación",
    ],
  },
  {
    id: 4,
    title: "Afinación final",
    window: "Marzo",
    startsOn: "2027-03-01",
    focus: "Simulacro final, inglés y descanso estratégico",
    goals: [
      "Simulacro final en condiciones reales",
      "Repaso de perlas y ultra resúmenes",
      "Dormir bien la semana del examen",
    ],
  },
];

export function getCurrentUnivallePhase(today: Date = new Date()): UnivallePhase {
  let current = UNIVALLE_PHASES[0];
  for (const phase of UNIVALLE_PHASES) {
    if (today.getTime() >= new Date(`${phase.startsOn}T00:00:00-05:00`).getTime()) {
      current = phase;
    }
  }
  return current;
}
