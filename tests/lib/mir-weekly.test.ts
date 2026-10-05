import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { buildMirWeekSummary } = await import("@/lib/training/mir-weekly");

describe("buildMirWeekSummary", () => {
  // Miércoles 7 de octubre de 2026.
  const now = new Date(2026, 9, 7, 15, 0);

  it("arma la semana de lunes a domingo y suma sus respuestas", () => {
    const summary = buildMirWeekSummary(
      { "2026-10-05": 10, "2026-10-07": 4, "2026-10-04": 99, "2026-09-30": 6, "2026-09-28": 5 },
      now,
    );
    expect(summary.days.map((day) => day.dateKey)).toEqual([
      "2026-10-05",
      "2026-10-06",
      "2026-10-07",
      "2026-10-08",
      "2026-10-09",
      "2026-10-10",
      "2026-10-11",
    ]);
    expect(summary.total).toBe(14);
    expect(summary.previousWeekTotal).toBe(99 + 6 + 5);
    expect(summary.days[2]).toMatchObject({ isToday: true, isFuture: false, count: 4 });
    expect(summary.days[3]).toMatchObject({ isToday: false, isFuture: true, count: 0 });
  });

  it("el domingo pertenece a la semana que empezó el lunes anterior", () => {
    const sunday = new Date(2026, 9, 11, 9, 0);
    const summary = buildMirWeekSummary({ "2026-10-05": 3, "2026-10-11": 2 }, sunday);
    expect(summary.days[0].dateKey).toBe("2026-10-05");
    expect(summary.total).toBe(5);
  });

  it("sin datos devuelve ceros", () => {
    expect(buildMirWeekSummary({}, now)).toMatchObject({ total: 0, previousWeekTotal: 0 });
  });
});
