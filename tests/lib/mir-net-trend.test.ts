import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { buildMirNetTrend } = await import("@/lib/training/mir-net-trend");

const entry = (completedAt: string, correct: number, wrong: number, total: number, editionCode = "MIR-MIXTO-1") => ({
  editionCode,
  correct,
  wrong,
  total,
  completedAt,
});

describe("buildMirNetTrend", () => {
  it("ordena por fecha y proyecta las netas a 200 preguntas", () => {
    const trend = buildMirNetTrend([
      entry("2026-10-10T10:00:00Z", 70, 15, 100),
      entry("2026-10-01T10:00:00Z", 60, 30, 100),
    ]);
    expect(trend.points.map((point) => point.attempt)).toEqual([1, 2]);
    // (60 − 30/3) / 100 × 200 = 100; (70 − 15/3) / 100 × 200 = 130.
    expect(trend.points.map((point) => point.projectedNet)).toEqual([100, 130]);
    expect(trend.last?.projectedNet).toBe(130);
    expect(trend.best?.projectedNet).toBe(130);
    expect(trend.changeSinceFirst).toBe(30);
    expect(trend.domain).toEqual([90, 140]);
    expect(trend.ticks).toEqual([90, 100, 110, 120, 130, 140]);
  });

  it("la mejor nota no tiene por qué ser la última", () => {
    const trend = buildMirNetTrend([
      entry("2026-10-01T10:00:00Z", 150, 30, 200),
      entry("2026-10-05T10:00:00Z", 120, 60, 200),
    ]);
    expect(trend.best?.attempt).toBe(1);
    expect(trend.changeSinceFirst).toBe(-40);
  });

  it("con un solo simulacro no hay cambio, y el eje no baja de 0 ni pasa de 200", () => {
    const low = buildMirNetTrend([entry("2026-10-01T10:00:00Z", 4, 3, 100)]);
    expect(low.changeSinceFirst).toBeNull();
    expect(low.domain[0]).toBe(0);
    const high = buildMirNetTrend([entry("2026-10-01T10:00:00Z", 98, 0, 100)]);
    expect(high.domain[1]).toBe(200);
    expect(high.ticks.at(-1)).toBe(200);
    expect(high.ticks).toEqual([...high.ticks].sort((a, b) => a - b));
  });

  it("deja el eje por debajo de 0 si alguna nota es negativa y descarta intentos vacíos", () => {
    const trend = buildMirNetTrend([
      entry("2026-10-01T10:00:00Z", 2, 30, 100),
      entry("2026-10-02T10:00:00Z", 0, 0, 0),
    ]);
    expect(trend.points).toHaveLength(1);
    expect(trend.domain[0]).toBeLessThan(0);
  });

  it("con mucha distancia entre notas usa un paso mayor para no saturar el eje", () => {
    const trend = buildMirNetTrend([
      entry("2026-10-01T10:00:00Z", 30, 30, 100),
      entry("2026-10-05T10:00:00Z", 90, 0, 100),
    ]);
    // 40 → 180 netas: con paso 10 serían 16 marcas; con paso 50, de 0 a 200.
    expect(trend.ticks).toEqual([0, 50, 100, 150, 200]);
  });

  it("sin simulacros no hay puntos", () => {
    expect(buildMirNetTrend([])).toMatchObject({ points: [], last: null, best: null, changeSinceFirst: null });
  });
});
