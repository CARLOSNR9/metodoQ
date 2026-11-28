import { describe, expect, it } from "vitest";
import { selectReportsToAutoResolve } from "@/lib/questions/report-auto-resolve";

const registry = { "q-1": { resolvedAt: "2026-11-28T12:00:00.000Z", note: "fix" } };

function report(questionId: string, status: string, dates: string[]) {
  return {
    questionId,
    status,
    createdAt: dates[0],
    reportsList: dates.map((createdAt) => ({ createdAt })),
  };
}

describe("selectReportsToAutoResolve", () => {
  it("cierra un reporte pendiente anterior a la corrección", () => {
    const r = report("q-1", "pending", ["2026-10-01T00:00:00.000Z", "2026-11-20T00:00:00.000Z"]);
    expect(selectReportsToAutoResolve([r], registry)).toEqual([r]);
  });

  it("no cierra si un estudiante la reportó después de la corrección", () => {
    const r = report("q-1", "pending", ["2026-10-01T00:00:00.000Z", "2026-11-29T00:00:00.000Z"]);
    expect(selectReportsToAutoResolve([r], registry)).toEqual([]);
  });

  it("ignora preguntas fuera del registro y reportes ya revisados", () => {
    const other = report("q-2", "pending", ["2026-10-01T00:00:00.000Z"]);
    const done = report("q-1", "reviewed", ["2026-10-01T00:00:00.000Z"]);
    expect(selectReportsToAutoResolve([other, done], registry)).toEqual([]);
  });
});
