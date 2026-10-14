import { describe, expect, it, vi } from "vitest";
import type { TrainingQuestion } from "@/lib/questions/types";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { buildMixedSimulacros, getMirEdition } = await import("@/lib/training/mir-convocatoria");

const text = (i: number, area: string) => ({ id: `t-${i}`, examArea: area }) as TrainingQuestion;
const image = (i: number, extra: Partial<TrainingQuestion> = {}) =>
  ({ id: `img-${i}`, examArea: "DERMATOLOGÍA", image: { src: `/x-${i}.jpg` }, ...extra }) as TrainingQuestion;

describe("buildMixedSimulacros", () => {
  const pool = [
    ...Array.from({ length: 300 }, (_, i) => text(i, i % 3 === 0 ? "CARDIOLOGÍA" : "NEUMOLOGÍA")),
    ...Array.from({ length: 30 }, (_, i) => image(i)),
    image(99, { reviewStatus: "pending" } as Partial<TrainingQuestion>),
    { ...text(999, "CARDIOLOGÍA"), tags: ["anulada"] } as TrainingQuestion,
  ];

  it("dos simulacros de 100 con 12 de imagen cada uno (proporción 25/210)", () => {
    const [first, second] = buildMixedSimulacros(pool);
    expect(first).toHaveLength(100);
    expect(second).toHaveLength(100);
    expect(first.filter((q) => q.image)).toHaveLength(12);
    expect(second.filter((q) => q.image)).toHaveLength(12);
  });

  it("sin repetir entre ellos, sin anuladas ni imágenes pendientes, y estable", () => {
    const [first, second] = buildMixedSimulacros(pool);
    const ids = [...first, ...second].map((q) => q.id);
    expect(new Set(ids).size).toBe(200);
    expect(ids).not.toContain("img-99");
    expect(ids).not.toContain("t-999");
    expect(buildMixedSimulacros([...pool].reverse())[0].map((q) => q.id)).toEqual(first.map((q) => q.id));
  });

  it("si hay pocas imágenes usa las que hay, en número par", () => {
    const [first, second] = buildMixedSimulacros([...pool.slice(0, 300), image(1), image(2), image(3)]);
    expect(first.filter((q) => q.image)).toHaveLength(1);
    expect(second.filter((q) => q.image)).toHaveLength(1);
    expect(first).toHaveLength(100);
  });
});

describe("simulacros reales", () => {
  it("el simulacro completo lleva preguntas de imagen verificadas", () => {
    const completo = getMirEdition("MIR-MIXTO-COMPLETO")!;
    const images = completo.questions.filter((q) => q.image);
    expect(completo.questionCount).toBe(200);
    expect(images.length).toBeGreaterThan(0);
    expect(images.length % 2).toBe(0);
    expect(images.every((q) => q.reviewStatus !== "pending")).toBe(true);
  });
});
