import { describe, expect, it, vi } from "vitest";
import type { TrainingQuestion } from "@/lib/questions/types";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { getMirEdition, pickMirStratifiedSample, selectMirExamQuestions } = await import(
  "@/lib/training/mir-convocatoria"
);

/** Generador reproducible para los tests. */
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
}

const question = (id: string, examArea: string) => ({ id, examArea }) as TrainingQuestion;

describe("pickMirStratifiedSample", () => {
  const pool = [
    ...Array.from({ length: 60 }, (_, i) => question(`card-${i}`, "CARDIOLOGÍA")),
    ...Array.from({ length: 30 }, (_, i) => question(`neum-${i}`, "NEUMOLOGÍA / ALERGIA")),
    ...Array.from({ length: 10 }, (_, i) => question(`ped-${i}`, "PEDIATRÍA")),
  ];

  it("respeta el reparto por especialidad y no repite preguntas", () => {
    const sample = pickMirStratifiedSample(pool, 10, seeded(1));
    expect(sample).toHaveLength(10);
    expect(new Set(sample.map((q) => q.id)).size).toBe(10);
    const count = (prefix: string) => sample.filter((q) => q.id.startsWith(prefix)).length;
    expect([count("card"), count("neum"), count("ped")]).toEqual([6, 3, 1]);
  });

  it("cambia de preguntas entre intentos", () => {
    const first = pickMirStratifiedSample(pool, 10, seeded(1)).map((q) => q.id);
    const second = pickMirStratifiedSample(pool, 10, seeded(2)).map((q) => q.id);
    expect(first).not.toEqual(second);
  });

  it("no pide más de las que hay", () => {
    expect(pickMirStratifiedSample(pool.slice(0, 5), 25, seeded(3))).toHaveLength(5);
  });
});

describe("simulacro rápido", () => {
  const edition = getMirEdition("MIR-RAPIDO");

  it("son 25 preguntas en 32 minutos (ritmo del MIR real)", () => {
    expect(edition).toMatchObject({ label: "Simulacro rápido", questionCount: 25, minutes: 32, sampleSize: 25 });
  });

  it("cada intento trae 25 preguntas oficiales distintas, sin anuladas", () => {
    const attempt = selectMirExamQuestions(edition!);
    expect(attempt).toHaveLength(25);
    expect(new Set(attempt.map((q) => q.id)).size).toBe(25);
    for (const q of attempt) {
      expect(q.officialExam).toBeTruthy();
      expect(q.tags ?? []).not.toContain("anulada");
    }
  });
});
