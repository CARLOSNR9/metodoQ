import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { buildMirProgressSeries } = await import("@/lib/training/mir-progress");

describe("buildMirProgressSeries", () => {
  // Miércoles 7 de octubre de 2026.
  const now = new Date(2026, 9, 7, 15, 0);

  it("por día: 30 puntos terminando hoy, con el % de cada día", () => {
    const series = buildMirProgressSeries(
      { "2026-10-07": 10, "2026-10-06": 4, "2026-10-05": 8 },
      { "2026-10-07": 7, "2026-10-06": 0 },
      "day",
      now,
    );
    expect(series.points).toHaveLength(30);
    expect(series.points.at(-1)).toMatchObject({ dateKey: "2026-10-07", correct: 7, incorrect: 3, accuracy: 70 });
    expect(series.points.at(-2)).toMatchObject({ correct: 0, incorrect: 4, accuracy: 0 });
    // Sin aciertos registrados ese día: no cuenta.
    expect(series.points.at(-3)).toMatchObject({ correct: 0, incorrect: 0, accuracy: null });
    expect(series).toMatchObject({ correct: 7, incorrect: 7, accuracy: 50 });
  });

  it("por semana: 12 semanas de lunes, sumando los días de cada una", () => {
    const series = buildMirProgressSeries(
      { "2026-10-05": 10, "2026-10-07": 10, "2026-09-28": 5 },
      { "2026-10-05": 9, "2026-10-07": 6, "2026-09-28": 1 },
      "week",
      now,
    );
    expect(series.points).toHaveLength(12);
    expect(series.points.at(-1)).toMatchObject({ dateKey: "2026-10-05", correct: 15, incorrect: 5, accuracy: 75 });
    expect(series.points.at(-2)).toMatchObject({ dateKey: "2026-09-28", correct: 1, incorrect: 4, accuracy: 20 });
  });

  it("calcula las netas (aciertos − errores / 3) y su valor por cada 100 respondidas", () => {
    const series = buildMirProgressSeries(
      { "2026-10-07": 12, "2026-10-06": 4 },
      { "2026-10-07": 9, "2026-10-06": 0 },
      "day",
      now,
    );
    expect(series.points.at(-1)).toMatchObject({ net: 8, netPercentage: 67 });
    // Todo mal: netas negativas.
    expect(series.points.at(-2)?.netPercentage).toBe(-33);
    expect(series.net).toBeCloseTo(9 - 7 / 3);
  });

  it("sin datos no hay %", () => {
    expect(buildMirProgressSeries({}, {}, "day", now)).toMatchObject({
      correct: 0,
      incorrect: 0,
      accuracy: null,
      net: 0,
      netPercentage: null,
    });
  });
});
