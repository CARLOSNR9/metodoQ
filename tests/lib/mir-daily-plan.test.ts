import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { buildMirDailyPlan, buildMirPlanPace } = await import("@/lib/training/mir-daily-plan");
const { buildMirWeekSummary } = await import("@/lib/training/mir-weekly");

// Lunes 12 de octubre de 2026: faltan 103 días para el MIR (23 ene 2027).
const now = new Date(2026, 9, 12, 10, 0);
const emptyDeck = { entries: {}, masteredCount: 0 };

function plan(overrides: Partial<Parameters<typeof buildMirDailyPlan>[0]> = {}) {
  return buildMirDailyPlan(
    {
      reviewDeck: emptyDeck,
      week: buildMirWeekSummary({}, now),
      specialtyStats: {},
      flashcardStatuses: {},
      answeredQuestionIds: [],
      totalQuestions: 1800,
      ...overrides,
    },
    now,
  );
}

describe("buildMirPlanPace", () => {
  it("reparte lo que queda por ver entre los días restantes, en bloques de 10", () => {
    expect(buildMirPlanPace(1800, 103)).toEqual({ daysLeft: 103, unseenCount: 1800, perDay: 18, dailyTarget: 20 });
  });

  it("la meta nunca baja de un bloque ni sube de seis", () => {
    expect(buildMirPlanPace(0, 103).dailyTarget).toBe(10);
    expect(buildMirPlanPace(1800, 5).dailyTarget).toBe(60);
    expect(buildMirPlanPace(1800, 0).perDay).toBe(1800);
  });
});

describe("buildMirDailyPlan", () => {
  it("sin errores en el mazo, el plan es práctica y tarjetas, y empieza por la práctica", () => {
    const result = plan();
    expect(result.steps.map((step) => step.id)).toEqual(["practice", "flashcards"]);
    expect(result.completedCount).toBe(0);
    expect(result.nextStep?.id).toBe("practice");
    expect(result.pace.dailyTarget).toBe(20);
  });

  it("incluye el repaso cuando hay errores y lo da por hecho si no queda nada para hoy", () => {
    const pending = plan({
      reviewDeck: { entries: { a: { step: 0, dueDate: "2026-10-12", lastWrongAt: "" } }, masteredCount: 0 },
    });
    expect(pending.steps[0]).toMatchObject({ id: "review", pending: 1, completed: false });
    expect(pending.nextStep?.id).toBe("review");

    const upToDate = plan({
      reviewDeck: { entries: { a: { step: 1, dueDate: "2026-10-15", lastWrongAt: "" } }, masteredCount: 0 },
    });
    expect(upToDate.steps[0]).toMatchObject({ id: "review", pending: 0, completed: true });
  });

  it("sugiere la especialidad más floja y cuenta las respuestas de hoy", () => {
    const result = plan({
      specialtyStats: { CARDIOLOGÍA: { answered: 10, correct: 3 }, NEUMOLOGÍA: { answered: 10, correct: 8 } },
      week: buildMirWeekSummary({ "2026-10-12": 20 }, now),
    });
    const practice = result.steps.find((step) => step.id === "practice");
    expect(practice).toMatchObject({ completed: true, answeredToday: 20, specialty: { key: "CARDIOLOGÍA", accuracy: 30 } });
    expect(practice?.href).toBe(`/dashboard/mir/practica?especialidad=${encodeURIComponent("CARDIOLOGÍA")}`);
  });

  it("solo cuenta las tarjetas autoevaluadas hoy y descuenta lo ya visto del ritmo", () => {
    const today = new Date(2026, 9, 12, 9, 0).toISOString();
    const yesterday = new Date(2026, 9, 11, 9, 0).toISOString();
    const statuses = Object.fromEntries(
      Array.from({ length: 12 }, (_, i) => [`c${i}`, { status: "known" as const, updatedAt: i < 10 ? today : yesterday }]),
    );
    const result = plan({ flashcardStatuses: statuses, answeredQuestionIds: ["a", "b", "a"] });
    expect(result.steps.find((step) => step.id === "flashcards")).toMatchObject({ ratedToday: 10, completed: true });
    expect(result.pace.unseenCount).toBe(1798);
    expect(result.nextStep?.id).toBe("practice");
  });
});
