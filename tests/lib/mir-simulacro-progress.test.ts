import { describe, expect, it } from "vitest";
import { getMirEdition, restoreMirSimulacro, type MirSimulacroProgress } from "@/lib/training/mir-convocatoria";

const edition = getMirEdition("MIR-2016-OFICIAL")!;
const ids = edition.questions.map((question) => question.id);

function progress(overrides: Partial<MirSimulacroProgress>): MirSimulacroProgress {
  return {
    editionCode: edition.code,
    questionIds: [...ids].reverse(),
    answersByQuestionId: {},
    currentIndex: 0,
    secondsLeft: 3600,
    updatedAt: "2026-10-13T00:00:00.000Z",
    ...overrides,
  };
}

describe("retomar un simulacro MIR a medias", () => {
  it("conserva el orden guardado y retoma tras la última respondida", () => {
    const order = [...ids].reverse();
    const answers = Object.fromEntries(order.slice(0, 15).map((id) => [id, "1"]));
    const restored = restoreMirSimulacro(edition, progress({ answersByQuestionId: answers, currentIndex: 14 }));
    expect(restored.questions.map((question) => question.id)).toEqual(order);
    expect(restored.answers).toEqual(answers);
    expect(restored.currentIndex).toBe(15);
  });

  it("vuelve a la primera sin responder si las siguientes ya están respondidas", () => {
    const order = [...ids].reverse();
    const answers = Object.fromEntries(order.filter((_, index) => index !== 3).map((id) => [id, "2"]));
    const restored = restoreMirSimulacro(edition, progress({ answersByQuestionId: answers, currentIndex: 10 }));
    expect(restored.currentIndex).toBe(3);
  });

  it("descarta preguntas que ya no están y añade al final las nuevas", () => {
    const [first, ...rest] = ids;
    const restored = restoreMirSimulacro(
      edition,
      progress({ questionIds: ["retirada", ...rest], answersByQuestionId: { retirada: "1", [rest[0]]: "3" } }),
    );
    expect(restored.questions.map((question) => question.id)).toEqual([...rest, first]);
    expect(restored.answers).toEqual({ [rest[0]]: "3" });
    expect(restored.currentIndex).toBe(1);
  });

  it("recupera las preguntas marcadas con duda que siguen en el banco", () => {
    const restored = restoreMirSimulacro(edition, progress({ doubtQuestionIds: [ids[5], "retirada"] }));
    expect(restored.doubtQuestionIds).toEqual([ids[5]]);
    expect(restoreMirSimulacro(edition, progress({})).doubtQuestionIds).toEqual([]);
  });
});
