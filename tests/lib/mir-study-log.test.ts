import { describe, expect, it } from "vitest";
import { buildMirStudyItems, type MirStudyLogEntry } from "@/lib/training/mir-study-log";

const entry = (overrides: Partial<MirStudyLogEntry>): MirStudyLogEntry => ({
  answer: "1",
  correct: true,
  answeredAt: "2026-10-01T10:00:00.000Z",
  timesWrong: 0,
  ...overrides,
});

describe("buildMirStudyItems", () => {
  it("une lo contestado con los fallos antiguos del repaso, más recientes primero", () => {
    const items = buildMirStudyItems(
      {
        a: entry({ answer: "2", correct: false, answeredAt: "2026-10-03T10:00:00.000Z", timesWrong: 2 }),
        b: entry({ answeredAt: "2026-10-02T10:00:00.000Z" }),
      },
      { c: { lastWrongAt: "2026-09-20T10:00:00.000Z" } },
    );
    expect(items.map((item) => item.questionId)).toEqual(["a", "b", "c"]);
    expect(items[0]).toMatchObject({ answer: "2", isWrong: true, inReview: false, timesWrong: 2 });
    expect(items[1]).toMatchObject({ answer: "1", isWrong: false });
    // Fallo de antes de guardar respuestas: sin opción marcada, pero cuenta como fallo.
    expect(items[2]).toMatchObject({ answer: undefined, isWrong: true, inReview: true, timesWrong: 1 });
  });

  it("una pregunta acertada después pero aún en el repaso sigue contando como fallo", () => {
    const [item] = buildMirStudyItems({ a: entry({ correct: true }) }, { a: { lastWrongAt: "2026-09-01" } });
    expect(item).toMatchObject({ answer: "1", isWrong: true, inReview: true });
  });
});
