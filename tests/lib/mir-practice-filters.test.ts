import { describe, expect, it, vi } from "vitest";
import type { TrainingQuestion } from "@/lib/questions/types";

vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { filterMirPracticePool, getMirOfficialYears, MIR_DEFAULT_PRACTICE_FILTERS } = await import(
  "@/lib/training/mir-practice"
);
const { buildMirPracticeHistory, buildMirStudyItems } = await import("@/lib/training/mir-study-log");

const question = (id: string, year?: number) =>
  ({ id, officialExam: year ? { year, number: 1 } : undefined }) as TrainingQuestion;
const bank = [question("a", 2025), question("b", 2025), question("c", 2024), question("d", 2023), question("e")];
const history = { seen: new Set(["a", "c", "d"]), wrong: new Set(["c"]) };

describe("filterMirPracticePool", () => {
  it("sin filtros devuelve todo el banco", () => {
    expect(filterMirPracticePool(MIR_DEFAULT_PRACTICE_FILTERS, history, bank)).toHaveLength(5);
  });

  it("filtra por nuevas, falladas y año, combinables", () => {
    const ids = (status: "all" | "new" | "wrong", year: number | null) =>
      filterMirPracticePool({ status, year }, history, bank).map((q) => q.id);
    expect(ids("new", null)).toEqual(["b", "e"]);
    expect(ids("wrong", null)).toEqual(["c"]);
    expect(ids("all", 2025)).toEqual(["a", "b"]);
    expect(ids("new", 2025)).toEqual(["b"]);
    expect(ids("wrong", 2025)).toEqual([]);
  });
});

describe("getMirOfficialYears", () => {
  it("lista los años del más reciente al más antiguo, sin repetir", () => {
    expect(getMirOfficialYears(bank)).toEqual([2025, 2024, 2023]);
  });

  it("el banco real tiene los exámenes oficiales de 2016 a 2025", () => {
    expect(getMirOfficialYears()).toEqual([2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]);
  });
});

describe("buildMirPracticeHistory", () => {
  it("cuenta como fallada la última respuesta mal o la que sigue en el repaso", () => {
    const items = buildMirStudyItems(
      {
        a: { answer: "1", correct: true, answeredAt: "2026-10-01", timesWrong: 0 },
        b: { answer: "2", correct: false, answeredAt: "2026-10-01", timesWrong: 1 },
      },
      { c: { lastWrongAt: "2026-09-01" } },
    );
    const result = buildMirPracticeHistory(items);
    expect([...result.seen].sort()).toEqual(["a", "b", "c"]);
    expect([...result.wrong].sort()).toEqual(["b", "c"]);
  });
});
