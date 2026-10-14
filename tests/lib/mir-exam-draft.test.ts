import { describe, expect, it } from "vitest";
import {
  buildMirExamDraft,
  parseMirExamDraft,
  pickNewerMirExamDraft,
  restoreMirExamQuestions,
} from "@/lib/training/mir-exam-draft";
import type { TrainingQuestion } from "@/lib/questions/types";

const question = (id: string, official = false) =>
  ({
    id,
    correctOptionId: `${id}-1`,
    options: ["1", "2", "3", "4"].map((n, index) => ({
      id: `${id}-${n}`,
      label: String.fromCharCode(65 + index),
      text: `Opción ${n}`,
    })),
    ...(official ? { officialExam: { year: 2016, number: 90 } } : {}),
  }) as unknown as TrainingQuestion;

const bank = [question("a"), question("b"), question("c", true)];

function shown(q: TrainingQuestion, order: string[]): TrainingQuestion {
  const byId = new Map(q.options.map((option) => [option.id, option]));
  return { ...q, options: order.map((id) => byId.get(id)!) };
}

describe("borrador del simulacro MIR", () => {
  const questions = [shown(bank[1], ["b-3", "b-1", "b-4", "b-2"]), bank[2], bank[0]];
  const draft = buildMirExamDraft(
    {
      userId: "u1",
      editionCode: "mir-2016",
      questions,
      answersByQuestionId: { b: "b-3" },
      doubts: new Set(["c"]),
      currentQuestionIndex: 1,
      secondsLeft: 15552.7,
      startedAt: "2026-10-01T10:00:00.000Z",
    },
    new Date("2026-10-02T10:00:00.000Z"),
  );

  it("sobrevive a serializar y leer (localStorage / Firestore)", () => {
    const parsed = parseMirExamDraft(JSON.parse(JSON.stringify(draft)));
    expect(parsed).toEqual(draft);
    expect(parsed?.secondsLeft).toBe(15552);
    expect(parsed?.doubtQuestionIds).toEqual(["c"]);
  });

  it("rechaza borradores de otro tipo o sin tiempo", () => {
    expect(parseMirExamDraft({ ...draft, kind: "simulacro" })).toBeNull();
    expect(parseMirExamDraft({ ...draft, secondsLeft: 0 })).toBeNull();
  });

  it("restaura el mismo orden de preguntas y de opciones", () => {
    const restored = restoreMirExamQuestions(bank, draft)!;
    expect(restored.map((q) => q.id)).toEqual(["b", "c", "a"]);
    expect(restored[0].options.map((o) => o.id)).toEqual(["b-3", "b-1", "b-4", "b-2"]);
    expect(restored[0].options.map((o) => o.label)).toEqual(["A", "B", "C", "D"]);
    expect(restored[1]).toBe(bank[2]);
  });

  it("no restaura si alguna pregunta ya no está en el banco", () => {
    expect(restoreMirExamQuestions(bank.slice(0, 2), draft)).toBeNull();
  });

  it("se queda con el guardado más reciente entre dispositivos", () => {
    const older = { ...draft, updatedAt: "2026-10-01T10:00:00.000Z" };
    expect(pickNewerMirExamDraft(older, draft)).toBe(draft);
    expect(pickNewerMirExamDraft(null, older)).toBe(older);
  });
});
