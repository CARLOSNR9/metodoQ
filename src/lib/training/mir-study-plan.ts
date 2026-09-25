import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { MIR_EXAM_DATE } from "@/lib/mir/config";
import { getLocalDateKey } from "@/lib/results";
import { getMirSpecialties, type MirSpecialty } from "@/lib/training/mir-practice";

/**
 * Plan de estudio MIR hasta el examen, por semanas (lunes a domingo):
 *
 * 1. Primera vuelta (~70 % de las semanas): recorre todas las especialidades
 *    del banco; las que más preguntas tienen (más peso) se llevan más días.
 * 2. Segunda vuelta: cada semana se centra en las especialidades más débiles
 *    del mapa de dominio en ese momento.
 * 3. Sprint final (las 2 últimas semanas): bloques mixtos y simulacros.
 *
 * El plan es determinista a partir de su fecha de inicio (el lunes de la
 * semana en que se abrió por primera vez), guardada en
 * `users/{uid}.mirStudyPlan.startDate`, para que no se reordene cada día.
 * Para saber si hoy se practicó la especialidad del día se guarda la última
 * fecha de práctica por especialidad en `users/{uid}.mirLastPracticeBySpecialty`.
 */
export type MirPlanPhase = "first_pass" | "second_pass" | "final_sprint";

export type MirPlanWeek = {
  /** 1-based. */
  number: number;
  startDate: string;
  endDate: string;
  phase: MirPlanPhase;
  /** Especialidades de la semana en la primera vuelta; vacío en las otras fases. */
  specialtyKeys: string[];
  containsExam: boolean;
};

export type MirStudyPlan = {
  startDate: string;
  examDate: string;
  weeks: MirPlanWeek[];
};

export const MIR_PLAN_FINAL_SPRINT_WEEKS = 2;
const FIRST_PASS_SHARE = 0.7;
/** Día de la semana (0 = domingo) en que el sprint final propone simulacro. */
const SIMULACRO_WEEKDAY = 6;

function parseDateKey(dateKey: string): Date {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(dateKey: string, days: number): string {
  const date = parseDateKey(dateKey);
  date.setDate(date.getDate() + days);
  return getLocalDateKey(date);
}

/** Lunes de la semana de `dateKey`. */
export function getWeekStart(dateKey: string): string {
  const date = parseDateKey(dateKey);
  const daysSinceMonday = (date.getDay() + 6) % 7;
  return addDays(dateKey, -daysSinceMonday);
}

/**
 * Reparte las especialidades (ya ordenadas por peso) en `weekCount` semanas
 * consecutivas con un peso lo más parecido posible, sin dejar semanas vacías.
 */
export function distributeSpecialties(specialties: MirSpecialty[], weekCount: number): string[][] {
  if (weekCount <= 0) return [];
  const weeks: string[][] = Array.from({ length: weekCount }, () => []);
  let remainingWeight = specialties.reduce((sum, item) => sum + item.questionCount, 0);
  let week = 0;
  let weekWeight = 0;

  specialties.forEach((specialty, index) => {
    const remainingWeeks = weekCount - week;
    const remainingSpecialties = specialties.length - index;
    const target = remainingWeight / remainingWeeks;
    // Pasa a la semana siguiente si esta ya llegó a su cuota, siempre que
    // queden especialidades para llenar las semanas restantes.
    if (
      weeks[week].length > 0 &&
      week < weekCount - 1 &&
      (weekWeight + specialty.questionCount / 2 > target || remainingSpecialties <= remainingWeeks - 1)
    ) {
      remainingWeight -= weekWeight;
      week += 1;
      weekWeight = 0;
    }
    weeks[week].push(specialty.key);
    weekWeight += specialty.questionCount;
  });

  return weeks.filter((keys) => keys.length > 0);
}

export function buildMirStudyPlan(
  startDateKey: string,
  examDateKey: string = MIR_EXAM_DATE,
  specialties: MirSpecialty[] = getMirSpecialties(),
): MirStudyPlan {
  const firstMonday = getWeekStart(startDateKey);
  const examMonday = getWeekStart(examDateKey);
  const totalWeeks = Math.max(
    1,
    Math.round((parseDateKey(examMonday).getTime() - parseDateKey(firstMonday).getTime()) / (7 * 86400000)) + 1,
  );

  const sprintWeeks = Math.min(MIR_PLAN_FINAL_SPRINT_WEEKS, totalWeeks);
  const studyWeeks = totalWeeks - sprintWeeks;
  const firstPassWeeks = Math.min(
    specialties.length,
    studyWeeks <= 1 ? studyWeeks : Math.max(1, Math.round(studyWeeks * FIRST_PASS_SHARE)),
  );
  const firstPass = distributeSpecialties(specialties, firstPassWeeks);

  const weeks: MirPlanWeek[] = [];
  for (let index = 0; index < totalWeeks; index += 1) {
    const weekStart = addDays(firstMonday, index * 7);
    const weekEnd = addDays(weekStart, 6);
    let phase: MirPlanPhase = "second_pass";
    if (index < firstPass.length) phase = "first_pass";
    else if (index >= totalWeeks - sprintWeeks) phase = "final_sprint";
    weeks.push({
      number: index + 1,
      startDate: weekStart,
      endDate: weekEnd,
      phase,
      specialtyKeys: phase === "first_pass" ? firstPass[index] : [],
      containsExam: examDateKey >= weekStart && examDateKey <= weekEnd,
    });
  }

  return { startDate: firstMonday, examDate: examDateKey, weeks };
}

export type MirPlanDayTask =
  | { kind: "specialty"; specialtyKey: string }
  | { kind: "mixed" }
  | { kind: "simulacro" }
  | { kind: "exam" }
  | { kind: "rest" };

/** Semana del plan que contiene `dateKey` (null si está fuera del plan). */
export function getPlanWeek(plan: MirStudyPlan, dateKey: string): MirPlanWeek | null {
  return plan.weeks.find((week) => dateKey >= week.startDate && dateKey <= week.endDate) ?? null;
}

/**
 * Tarea principal del día. En la primera vuelta rota entre las
 * especialidades de la semana; en la segunda, entre las más débiles
 * (`weakSpecialtyKeys`, de peor a mejor); en el sprint, bloque mixto y
 * simulacro los sábados.
 */
export function getPlanDayTask(
  plan: MirStudyPlan,
  dateKey: string,
  weakSpecialtyKeys: string[],
): MirPlanDayTask {
  if (dateKey === plan.examDate) return { kind: "exam" };
  if (dateKey > plan.examDate) return { kind: "rest" };
  const week = getPlanWeek(plan, dateKey);
  if (!week) return { kind: "mixed" };

  const dayIndex = (parseDateKey(dateKey).getDay() + 6) % 7; // lunes = 0
  if (week.phase === "final_sprint") {
    // El día antes del examen, nada de simulacros: repaso ligero.
    const isEve = addDays(dateKey, 1) === plan.examDate;
    if (!isEve && parseDateKey(dateKey).getDay() === SIMULACRO_WEEKDAY) return { kind: "simulacro" };
    return { kind: "mixed" };
  }
  const keys = week.phase === "first_pass" ? week.specialtyKeys : weakSpecialtyKeys.slice(0, 2);
  if (keys.length === 0) return { kind: "mixed" };
  return { kind: "specialty", specialtyKey: keys[dayIndex % keys.length] };
}

export type MirStudyPlanData = {
  plan: MirStudyPlan;
  lastPracticeBySpecialty: Record<string, string>;
};

/** Lee el plan del usuario; si nunca lo abrió, lo crea desde esta semana. */
export async function getOrCreateMirStudyPlan(userId: string): Promise<MirStudyPlanData> {
  const todayKey = getLocalDateKey(new Date());
  const userRef = doc(getFirebaseDb(), "users", userId);
  let data: Record<string, unknown> | undefined;
  try {
    data = (await getDoc(userRef)).data();
  } catch (error) {
    console.error("No se pudo leer el plan de estudio MIR.", error);
  }

  const storedStart = (data?.mirStudyPlan as { startDate?: string } | undefined)?.startDate;
  const startDate = storedStart ?? getWeekStart(todayKey);
  if (!storedStart && data) {
    setDoc(userRef, { mirStudyPlan: { startDate } }, { merge: true }).catch((error) =>
      console.error("No se pudo guardar el inicio del plan MIR.", error),
    );
  }

  return {
    plan: buildMirStudyPlan(startDate),
    lastPracticeBySpecialty: (data?.mirLastPracticeBySpecialty ?? {}) as Record<string, string>,
  };
}

/** Registra que hoy se practicó una especialidad (para la checklist del plan). */
export async function markMirSpecialtyPracticed(userId: string, specialtyKey: string): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    { mirLastPracticeBySpecialty: { [specialtyKey]: getLocalDateKey(new Date()) } },
    { merge: true },
  );
}
