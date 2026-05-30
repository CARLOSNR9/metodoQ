import { getLocalDateKey, type DemoResultItem } from "@/lib/results";
import { PRO_DAILY_MIN_QUESTIONS } from "@/lib/plans/limits";
import type { UccMiBlockKind } from "@/lib/training/ucc-mi-daily-plan";

export { PRO_DAILY_MIN_QUESTIONS };

export type DayHabitStatus =
  | "studied"
  | "partial"
  | "missed"
  | "before_plan"
  | "today_pending";

export type DailyHabitDay = {
  dateKey: string;
  dayNumber: number;
  weekdayShort: string;
  questionsCount: number;
  minQuestions: number;
  streakMinimum: number;
  status: DayHabitStatus;
  isToday: boolean;
};

function parseLocalDateKey(key: string): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function meetsDailyStudyGoal(
  questionsCount: number,
  minQuestions = PRO_DAILY_MIN_QUESTIONS,
): boolean {
  return questionsCount >= minQuestions;
}

export function meetsStreakGoal(
  questionsCount: number,
  streakMinimum = PRO_DAILY_MIN_QUESTIONS,
): boolean {
  return questionsCount >= streakMinimum;
}

export function aggregateQuestionsByDateKey(
  results: DemoResultItem[],
): Map<string, number> {
  const map = new Map<string, number>();

  for (const result of results) {
    if (!result.fechaIso) continue;
    const date = new Date(result.fechaIso);
    const key = getLocalDateKey(date);
    const questions = result.correctAnswers + result.wrongAnswers;
    map.set(key, (map.get(key) ?? 0) + questions);
  }

  return map;
}

export function getTodayQuestionsCount(results: DemoResultItem[]): number {
  const todayKey = getLocalDateKey(new Date());
  return aggregateQuestionsByDateKey(results).get(todayKey) ?? 0;
}

/** Preguntas de hoy que cuentan para la misión diaria (excluye píldora y diagnóstico). */
export function getTodayMissionQuestionsCount(results: DemoResultItem[]): number {
  const todayKey = getLocalDateKey(new Date());
  let total = 0;

  for (const result of results) {
    if (!result.fechaIso) continue;
    if (
      result.sessionType === "daily-pill" ||
      result.sessionType === "diagnostico" ||
      result.sessionType === "repaso" ||
      result.sessionType === "repaso-cierre"
    ) {
      continue;
    }
    if (getLocalDateKey(new Date(result.fechaIso)) !== todayKey) continue;
    total += result.correctAnswers + result.wrongAnswers;
  }

  return total;
}

export function aggregateTodayUccBlockQuestions(
  results: DemoResultItem[],
): Record<UccMiBlockKind, number> {
  const counts: Record<UccMiBlockKind, number> = { new: 0, review: 0, weak: 0 };
  const todayKey = getLocalDateKey(new Date());

  for (const result of results) {
    if (!result.fechaIso || !result.uccBlockKind) continue;
    if (getLocalDateKey(new Date(result.fechaIso)) !== todayKey) continue;
    counts[result.uccBlockKind] += result.correctAnswers + result.wrongAnswers;
  }

  return counts;
}

export function getPlanStartDateKey(planStartedAt: string | null | undefined): string | null {
  if (!planStartedAt) return null;
  const date = new Date(planStartedAt);
  if (Number.isNaN(date.getTime())) return null;
  return getLocalDateKey(date);
}

function resolveDayStatus(options: {
  dateKey: string;
  questionsCount: number;
  isToday: boolean;
  planStartKey: string | null;
  minQuestions: number;
}): DayHabitStatus {
  const { dateKey, questionsCount, isToday, planStartKey, minQuestions } = options;

  if (planStartKey && dateKey < planStartKey) {
    return "before_plan";
  }
  if (meetsDailyStudyGoal(questionsCount, minQuestions)) {
    return "studied";
  }
  if (isToday) {
    return "today_pending";
  }
  if (questionsCount > 0) {
    return "partial";
  }
  return "missed";
}

export function buildHabitDaysRange(options: {
  results: DemoResultItem[];
  planStartedAt: string | null | undefined;
  fromDateKey: string;
  toDateKey: string;
  minQuestions?: number;
  streakMinimum?: number;
}): DailyHabitDay[] {
  const minQuestions = options.minQuestions ?? PRO_DAILY_MIN_QUESTIONS;
  const streakMinimum = options.streakMinimum ?? minQuestions;
  const questionsByDay = aggregateQuestionsByDateKey(options.results);
  const planStartKey = getPlanStartDateKey(options.planStartedAt);
  const todayKey = getLocalDateKey(new Date());

  const days: DailyHabitDay[] = [];
  const cursor = parseLocalDateKey(options.fromDateKey);
  const end = parseLocalDateKey(options.toDateKey);

  while (cursor <= end) {
    const dateKey = getLocalDateKey(cursor);
    const questionsCount = questionsByDay.get(dateKey) ?? 0;
    const isToday = dateKey === todayKey;

    days.push({
      dateKey,
      dayNumber: cursor.getDate(),
      weekdayShort: cursor
        .toLocaleDateString("es-CO", { weekday: "short" })
        .replace(/\./g, ""),
      questionsCount,
      minQuestions,
      streakMinimum,
      status: resolveDayStatus({
        dateKey,
        questionsCount,
        isToday,
        planStartKey,
        minQuestions,
      }),
      isToday,
    });

    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

export function buildLastNDays(options: {
  results: DemoResultItem[];
  planStartedAt: string | null | undefined;
  n: number;
  minQuestions?: number;
  streakMinimum?: number;
}): DailyHabitDay[] {
  const today = new Date();
  const from = new Date(today);
  from.setDate(from.getDate() - (options.n - 1));

  return buildHabitDaysRange({
    results: options.results,
    planStartedAt: options.planStartedAt,
    fromDateKey: getLocalDateKey(from),
    toDateKey: getLocalDateKey(today),
    minQuestions: options.minQuestions,
    streakMinimum: options.streakMinimum,
  });
}

export function buildPlanPeriodDays(options: {
  results: DemoResultItem[];
  planStartedAt: string | null | undefined;
  minQuestions?: number;
  streakMinimum?: number;
}): DailyHabitDay[] {
  const planStartKey = getPlanStartDateKey(options.planStartedAt);
  if (!planStartKey) {
    return buildLastNDays({ ...options, n: 14 });
  }

  return buildHabitDaysRange({
    results: options.results,
    planStartedAt: options.planStartedAt,
    fromDateKey: planStartKey,
    toDateKey: getLocalDateKey(new Date()),
    minQuestions: options.minQuestions,
    streakMinimum: options.streakMinimum,
  });
}

function dayMaintainsStreak(day: DailyHabitDay): boolean {
  return meetsStreakGoal(day.questionsCount, day.streakMinimum);
}

export function countStudiedStreak(days: DailyHabitDay[]): number {
  const planDays = days.filter((day) => day.status !== "before_plan");
  if (planDays.length === 0) return 0;

  const byKey = new Map(planDays.map((day) => [day.dateKey, day]));
  const todayKey = getLocalDateKey(new Date());
  let cursor = new Date();

  const today = byKey.get(todayKey);
  if (!today || !dayMaintainsStreak(today)) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  const planStartKey = planDays[0]?.dateKey;

  while (true) {
    const key = getLocalDateKey(cursor);
    if (planStartKey && key < planStartKey) break;

    const day = byKey.get(key);
    if (!day) break;

    if (dayMaintainsStreak(day)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
      continue;
    }

    break;
  }

  return streak;
}

export function countStudiedDays(days: DailyHabitDay[]): number {
  return days.filter((day) => day.status === "studied").length;
}

export function countMissedPlanDays(days: DailyHabitDay[]): number {
  return days.filter((day) => day.status === "missed").length;
}

export function countPartialPlanDays(days: DailyHabitDay[]): number {
  return days.filter((day) => day.status === "partial").length;
}

/** Días del plan sin cumplir la meta (0 preguntas o menos de 10). */
export function countIncompletePlanDays(days: DailyHabitDay[]): number {
  return days.filter(
    (day) => day.status === "missed" || day.status === "partial",
  ).length;
}

/** Días seguidos sin cumplir el mínimo de racha, desde hoy hacia atrás. */
export function countConsecutiveInactiveDays(days: DailyHabitDay[]): number {
  const planDays = days.filter((day) => day.status !== "before_plan");
  let count = 0;

  for (let index = planDays.length - 1; index >= 0; index -= 1) {
    const day = planDays[index];
    if (dayMaintainsStreak(day)) break;
    if (
      day.status === "missed" ||
      day.status === "partial" ||
      day.status === "today_pending"
    ) {
      count += 1;
    }
  }

  return count;
}
