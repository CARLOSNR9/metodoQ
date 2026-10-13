import { describe, expect, it, vi } from "vitest";
import type { TrainingQuestion } from "@/lib/questions/types";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { buildMirExamWeights, buildMirStudyPriorities, getMirWeightYears } = await import(
  "@/lib/training/mir-exam-weight"
);
const { buildMirMastery } = await import("@/lib/training/mir-mastery");

const q = (id: string, examArea: string, extra: Partial<TrainingQuestion> = {}) =>
  ({ id, examArea, ...extra }) as TrainingQuestion;

describe("buildMirExamWeights", () => {
  it("reparte por especialidad principal, sin anuladas, y proyecta a 200 preguntas", () => {
    const weights = buildMirExamWeights([
      q("a", "CARDIOLOGÍA"),
      q("b", "CARDIOLOGÍA / NEFROLOGÍA"),
      q("c", "NEFROLOGÍA"),
      q("d", "PEDIATRÍA"),
      q("e", "PEDIATRÍA", { tags: ["anulada"] }),
    ]);
    expect(weights.map((w) => [w.key, w.questionCount, w.perExam])).toEqual([
      ["CARDIOLOGÍA", 2, 100],
      ["NEFROLOGÍA", 1, 50],
      ["PEDIATRÍA", 1, 50],
    ]);
    expect(weights.reduce((sum, w) => sum + w.share, 0)).toBeCloseTo(1);
  });

  it("con el banco real suma un examen de 200 y usa los años oficiales", () => {
    const weights = buildMirExamWeights();
    expect(weights.reduce((sum, w) => sum + w.perExam, 0)).toBeCloseTo(200);
    expect(weights[0].perExam).toBeGreaterThan(weights[weights.length - 1].perExam);
    expect(getMirWeightYears()).toEqual([2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]);
  });
});

describe("buildMirStudyPriorities", () => {
  it("ordena por preguntas que fallaría (peso × fallo) y deja al final las de pocos datos", () => {
    const weights = [
      { key: "CARDIOLOGÍA", label: "Cardiología", questionCount: 10, share: 0.1, perExam: 20 },
      { key: "NEUMOLOGÍA", label: "Neumología", questionCount: 5, share: 0.05, perExam: 10 },
      { key: "PEDIATRÍA", label: "Pediatría", questionCount: 8, share: 0.08, perExam: 16 },
    ];
    const mastery = buildMirMastery({
      CARDIOLOGÍA: { answered: 10, correct: 9 }, // falla 2 de 20
      NEUMOLOGÍA: { answered: 10, correct: 3 }, // falla 7 de 10
      PEDIATRÍA: { answered: 1, correct: 0 }, // pocos datos
    });
    const priorities = buildMirStudyPriorities(weights, mastery);
    expect(priorities.map((p) => p.key)).toEqual(["NEUMOLOGÍA", "CARDIOLOGÍA", "PEDIATRÍA"]);
    expect(priorities[0].expectedMisses).toBeCloseTo(7);
    expect(priorities[1].expectedMisses).toBeCloseTo(2);
    expect(priorities[2].expectedMisses).toBeNull();
  });
});
