import { describe, expect, it } from "vitest";
import { getNextMirDoubtIndex, summarizeMirDoubts } from "@/lib/training/mir-doubts";
import type { TrainingQuestion } from "@/lib/questions/types";

const question = (id: string, correctOptionId = "1") => ({ id, correctOptionId }) as TrainingQuestion;
const questions = ["a", "b", "c", "d", "e"].map((id) => question(id));

describe("summarizeMirDoubts", () => {
  it("cuenta solo las marcadas y calcula las netas que aportaron", () => {
    const summary = summarizeMirDoubts(
      questions,
      { a: "1", b: "2", c: "1", d: "3" },
      new Set(["a", "b", "c", "e"]),
    );
    expect(summary).toMatchObject({ marked: 4, correct: 2, wrong: 1, blank: 1 });
    expect(summary.net).toBeCloseTo(2 - 1 / 3);
  });

  it("ignora marcas de preguntas que no están en el simulacro", () => {
    expect(summarizeMirDoubts(questions, {}, new Set(["zzz"]))).toMatchObject({ marked: 0, net: 0 });
  });
});

describe("getNextMirDoubtIndex", () => {
  it("va a la siguiente marcada y da la vuelta al final", () => {
    const doubts = new Set(["b", "d"]);
    expect(getNextMirDoubtIndex(questions, doubts, 0)).toBe(1);
    expect(getNextMirDoubtIndex(questions, doubts, 1)).toBe(3);
    expect(getNextMirDoubtIndex(questions, doubts, 3)).toBe(1);
  });

  it("sin otra marcada que la actual, o sin ninguna, no se mueve", () => {
    expect(getNextMirDoubtIndex(questions, new Set(["c"]), 2)).toBeNull();
    expect(getNextMirDoubtIndex(questions, new Set(), 2)).toBeNull();
  });
});
