import { hasProFeatures } from "@/lib/plans/access";
import {
  isMedicinaDeporteSpecialty,
  isUdeaUniversity,
} from "@/lib/diagnostic/university-match";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";

/**
 * Universidad de Antioquia (Medellín) — admisión a posgrados clínicos de la
 * Facultad de Medicina.
 *
 * - El examen de conocimientos es el mismo para todas las especialidades
 *   clínicas: medicina general (interna, pediatría, cirugía, ginecobstetricia,
 *   urgencias, psiquiatría, salud pública y normatividad colombiana).
 * - El examen 2026 se aplicó a comienzos de abril (prensa del 12–14 abr 2026
 *   sobre el fraude con dispositivos). La fecha 2027 es una ESTIMACIÓN: hay que
 *   confirmarla en la convocatoria oficial (udea.edu.co › Posgrados).
 * - Formato del examen real entregado a Método Q: 70 preguntas de selección
 *   múltiple con única respuesta, con 3 o 4 opciones, casos clínicos largos y
 *   normatividad reciente (p. ej. Resolución 207 de 2024, Res. 2350 de 2020).
 * - Prohibido ingresar dispositivos electrónicos (Acuerdo Superior 472 de 2021,
 *   Resolución 00006 de 2026 del Comité Central de Posgrados).
 */
export const UDEA_EXAM_INFO = {
  shortName: "UdeA",
  fullName: "Universidad de Antioquia",
  city: "Medellín",
  /** Fecha estimada (el examen 2026 fue a comienzos de abril). */
  estimatedExamDate: "2027-04-11T07:00:00-05:00",
  estimatedExamLabel: "abril de 2027 (estimado)",
  estimatedInscriptionsLabel: "febrero–marzo de 2027 (estimado)",
  /** Ritmo objetivo de entrenamiento: 1,5 min por pregunta. */
  targetSecondsPerQuestion: 90,
  realExamQuestions: 70,
  examAreas: [
    "Medicina interna (cardiología, neumología, endocrino, reumatología)",
    "Pediatría y neonatología (incluye normas del Ministerio de Salud)",
    "Cirugía, trauma y ortopedia",
    "Ginecología y obstetricia",
    "Urgencias, reanimación (AHA) y toxicología",
    "Neurología, psiquiatría y oftalmología",
    "Salud pública, epidemiología y normatividad colombiana",
  ],
} as const;

/** Conteo por área del examen real de la UdeA (70 preguntas). */
export const UDEA_REAL_EXAM_BLUEPRINT = [
  { area: "Pediatría", count: 12, examAreas: ["PEDIATRÍA"] },
  { area: "Medicina interna", count: 12, examAreas: ["MEDICINA INTERNA"] },
  { area: "Cirugía y ortopedia", count: 11, examAreas: ["CIRUGÍA", "ORTOPEDIA"] },
  { area: "Ginecobstetricia", count: 10, examAreas: ["GINECOBSTETRICIA"] },
  { area: "Urgencias y toxicología", count: 7, examAreas: ["URGENCIAS", "TOXICOLOGÍA"] },
  { area: "Neurología", count: 6, examAreas: ["NEUROLOGÍA"] },
  { area: "Psiquiatría", count: 4, examAreas: ["PSIQUIATRÍA"] },
  { area: "Medicina del deporte", count: 3, examAreas: ["MEDICINA DEL DEPORTE"] },
  { area: "Oftalmología", count: 3, examAreas: ["OFTALMOLOGÍA"] },
  { area: "Dermatología y salud pública", count: 2, examAreas: ["DERMATOLOGÍA", "SALUD PÚBLICA"] },
] as const;

/** Usuario cuya universidad objetivo es la Universidad de Antioquia. */
export function isUdeaTrack(goalUniversity?: string | null): boolean {
  return isUdeaUniversity(goalUniversity);
}

export function isUdeaMedicinaDeporteTrack(
  goalUniversity?: string | null,
  goalSpecialty?: string | null,
): boolean {
  return isUdeaUniversity(goalUniversity) && isMedicinaDeporteSpecialty(goalSpecialty);
}

/** Plan Pro (o Residente) + UdeA (cualquier especialidad). */
export function isUdeaProUser(profile: LearningTrackProfile | null | undefined): boolean {
  if (!profile) return false;
  return hasProFeatures(profile.plan) && isUdeaTrack(profile.goalUniversity);
}

const DAY_MS = 24 * 60 * 60 * 1000;
/** Colombia no tiene horario de verano: siempre UTC-5. */
const COLOMBIA_OFFSET_MS = 5 * 60 * 60 * 1000;

/** Día calendario en Colombia, como medianoche UTC de ese día. */
function colombiaCalendarDay(date: Date): number {
  const shifted = new Date(date.getTime() - COLOMBIA_OFFSET_MS);
  return Date.UTC(shifted.getUTCFullYear(), shifted.getUTCMonth(), shifted.getUTCDate());
}

/** Días calendario que faltan para el examen (baja de uno en uno cada día). */
export function getDaysUntilUdeaExam(today: Date = new Date()): number {
  const exam = new Date(UDEA_EXAM_INFO.estimatedExamDate);
  const days = Math.round((colombiaCalendarDay(exam) - colombiaCalendarDay(today)) / DAY_MS);
  return Math.max(0, days);
}

export type UdeaPhase = {
  id: number;
  title: string;
  window: string;
  /** Inicio de la fase (inclusive), YYYY-MM-DD. */
  startsOn: string;
  focus: string;
  goals: string[];
};

/** Ruta de estudio hacia el examen de abril (4 fases). */
export const UDEA_PHASES: UdeaPhase[] = [
  {
    id: 1,
    title: "Calibración y bases",
    window: "Noviembre – diciembre",
    startsOn: "2026-11-01",
    focus: "Diagnóstico, examen real UdeA y medicina interna",
    goals: [
      "Hacer el diagnóstico UdeA (10 preguntas)",
      "Presentar el examen real UdeA (70 preguntas) para medir tu punto de partida",
      "Cumplir tu meta diaria de 10 preguntas (si puedes, llega a 30)",
    ],
  },
  {
    id: 2,
    title: "Cobertura total",
    window: "Enero",
    startsOn: "2027-01-01",
    focus: "Pediatría, ginecobstetricia, cirugía y normatividad colombiana",
    goals: [
      "Bloque diario de pediatría y normas del Ministerio de Salud",
      "Repasar las preguntas falladas del examen real",
      "Un simulacro cada 3–4 semanas",
    ],
  },
  {
    id: 3,
    title: "Ritmo de examen",
    window: "Febrero – marzo",
    startsOn: "2027-02-01",
    focus: "Simulacros cronometrados, urgencias y psiquiatría",
    goals: [
      "Inscribirte a la convocatoria apenas abra",
      "Entrenar a 1,5 minutos por pregunta",
      "Ruta Medicina del Deporte para la entrevista y la motivación",
    ],
  },
  {
    id: 4,
    title: "Afinación final",
    window: "Abril",
    startsOn: "2027-04-01",
    focus: "Repaso de errores, perlas y descanso estratégico",
    goals: [
      "Repaso de perlas y ultra resúmenes",
      "Revisar la lista de elementos prohibidos el día del examen",
      "Dormir bien la semana del examen",
    ],
  },
];

export function getCurrentUdeaPhase(today: Date = new Date()): UdeaPhase {
  let current = UDEA_PHASES[0];
  for (const phase of UDEA_PHASES) {
    if (today.getTime() >= new Date(`${phase.startsOn}T00:00:00-05:00`).getTime()) {
      current = phase;
    }
  }
  return current;
}
