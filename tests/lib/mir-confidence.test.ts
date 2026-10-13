import { describe, expect, it, vi } from "vitest";
import type { TrainingQuestion } from "@/lib/questions/types";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const {
  countMirConfidenceAnswers,
  getMirConfidenceAdvice,
  getMirConfidenceFeedback,
  getMirConfidenceNet,
  tallyMirConfidence,
} = await import("@/lib/training/mir-confidence");

const q = (id: string) => ({ id, correctOptionId: "1" }) as TrainingQuestion;
const questions = ["a", "b", "c", "d", "e", "f"].map(q);
const stats = (sure: [number, number], doubt: [number, number], guess: [number, number]) => ({
  sure: { answered: sure[0], correct: sure[1] },
  doubt: { answered: doubt[0], correct: doubt[1] },
  guess: { answered: guess[0], correct: guess[1] },
});

describe("tallyMirConfidence", () => {
  it("cuenta por nivel solo las respondidas con seguridad marcada", () => {
    const result = tallyMirConfidence(
      questions,
      { a: "1", b: "2", c: "1", d: "3", e: "1" },
      { a: "sure", b: "sure", c: "guess", d: "doubt", f: "sure" },
    );
    expect(result).toEqual(stats([2, 1], [1, 0], [1, 1]));
    expect(countMirConfidenceAnswers(result)).toBe(4);
  });
});

describe("netas y mensajes", () => {
  it("calcula las netas del nivel", () => {
    expect(getMirConfidenceNet({ answered: 4, correct: 1 })).toBe(0);
    expect(getMirConfidenceNet({ answered: 6, correct: 3 })).toBe(2);
  });

  it("avisa solo cuando seguridad y resultado no cuadran", () => {
    expect(getMirConfidenceFeedback("sure", false)).toMatch(/error de concepto/);
    expect(getMirConfidenceFeedback("guess", true)).toMatch(/al azar/);
    expect(getMirConfidenceFeedback("sure", true)).toBeNull();
    expect(getMirConfidenceFeedback("doubt", false)).toBeNull();
    expect(getMirConfidenceFeedback(undefined, false)).toBeNull();
  });
});

describe("getMirConfidenceAdvice", () => {
  it("prioriza el exceso de confianza", () => {
    expect(getMirConfidenceAdvice(stats([5, 3], [0, 0], [5, 4]))).toMatch(/das por seguras/);
  });

  it("recomienda arriesgar o dejar en blanco según el acierto al azar (umbral 1 de 4)", () => {
    expect(getMirConfidenceAdvice(stats([5, 5], [0, 0], [4, 2]))).toMatch(/arriesgar/);
    expect(getMirConfidenceAdvice(stats([5, 5], [0, 0], [4, 1]))).toMatch(/en blanco/);
  });

  it("no aconseja con pocos datos", () => {
    expect(getMirConfidenceAdvice(stats([2, 0], [1, 1], [2, 0]))).toBeNull();
  });
});
