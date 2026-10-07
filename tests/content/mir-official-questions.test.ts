import { describe, expect, it } from "vitest";
import { MIR_EXAM_EDITIONS, MIR_OFFICIAL_QUESTIONS, MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { shuffleMirQuestionOptions } from "@/lib/training/mir-options";
import { getMirSpecialties } from "@/lib/training/mir-practice";

describe("preguntas MIR oficiales", () => {
  it("cada pregunta oficial es única por año y número", () => {
    const keys = MIR_OFFICIAL_QUESTIONS.map((q) => `${q.officialExam?.year}-${q.officialExam?.number}`);
    expect(new Set(keys).size).toBe(MIR_OFFICIAL_QUESTIONS.length);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2025)).toHaveLength(183);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2024)).toHaveLength(182);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2023)).toHaveLength(181);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2022)).toHaveLength(183);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2021)).toHaveLength(158);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2020)).toHaveLength(155);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2019)).toHaveLength(197);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2018)).toHaveLength(199);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2017)).toHaveLength(202);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2016)).toHaveLength(202);
    expect(new Set(MIR_QUESTIONS.map((question) => question.id)).size).toBe(MIR_QUESTIONS.length);
  });

  it("cada pregunta tiene 4 opciones numeradas 1-4, respuesta oficial y explicación", () => {
    for (const question of MIR_OFFICIAL_QUESTIONS) {
      expect(question.options.map((option) => option.id), question.id).toEqual(["1", "2", "3", "4"]);
      expect(question.options.every((option) => option.text.trim().length > 0), question.id).toBe(true);
      expect(question.options.some((option) => /^[1-4]\.\s/.test(option.text)), question.id).toBe(false);
      expect(["1", "2", "3", "4"], question.id).toContain(question.correctOptionId);
      expect(question.statement.length, question.id).toBeGreaterThan(15);
      expect(question.explanation.length, question.id).toBeGreaterThan(300);
      expect(question.keyPoints.length, question.id).toBeGreaterThanOrEqual(2);
      expect(question.examArea, question.id).toBeTruthy();
    }
  });

  it("no se barajan: conservan el orden y la numeración del cuadernillo", () => {
    const question = MIR_OFFICIAL_QUESTIONS[0];
    expect(shuffleMirQuestionOptions(question, () => 0)).toBe(question);
  });

  it("cada año oficial tiene su simulacro con todas sus preguntas", () => {
    const edition = MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2025-OFICIAL-1");
    expect(edition?.questionCount).toBe(183);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2024-OFICIAL")?.questionCount).toBe(182);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2023-OFICIAL")?.questionCount).toBe(181);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2022-OFICIAL")?.questionCount).toBe(183);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2021-OFICIAL")?.questionCount).toBe(158);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2020-OFICIAL")?.questionCount).toBe(155);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2019-OFICIAL")?.questionCount).toBe(197);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2018-OFICIAL")?.questionCount).toBe(199);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2017-OFICIAL")?.questionCount).toBe(202);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2016-OFICIAL")?.questionCount).toBe(202);
  });
});

describe("banco MIR sin preguntas propias", () => {
  it("el banco solo contiene preguntas oficiales", () => {
    expect(MIR_QUESTIONS.every((question) => question.officialExam)).toBe(true);
    expect(MIR_QUESTIONS.some((question) => question.id.startsWith("mir-2026-"))).toBe(false);
    expect(getMirSpecialties().length).toBeGreaterThan(15);
  });
});

describe("simulacros mixtos", () => {
  const edition = (code: string) => MIR_EXAM_EDITIONS.find((item) => item.code === code)!;
  const first = edition("MIR-MIXTO-1").questions;
  const second = edition("MIR-MIXTO-2").questions;
  const area = (question: (typeof first)[number]) => (question.examArea ?? "").split("/")[0].trim();

  it("son dos bloques de 100 preguntas oficiales distintas y el completo suma ambos", () => {
    expect(first).toHaveLength(100);
    expect(second).toHaveLength(100);
    expect(new Set([...first, ...second].map((question) => question.id)).size).toBe(200);
    expect(edition("MIR-MIXTO-COMPLETO").questionCount).toBe(200);
    for (const question of [...first, ...second]) {
      expect(question.officialExam, question.id).toBeTruthy();
      expect(question.tags ?? [], question.id).not.toContain("anulada");
    }
  });

  it("mezclan varias convocatorias y respetan el reparto por especialidad", () => {
    for (const block of [first, second]) {
      expect(new Set(block.map((question) => question.officialExam?.year)).size).toBeGreaterThanOrEqual(9);
    }
    const eligible = MIR_OFFICIAL_QUESTIONS.filter((question) => !question.tags?.includes("anulada"));
    for (const key of new Set(eligible.map(area))) {
      const expected = (eligible.filter((question) => area(question) === key).length * 200) / eligible.length;
      const actual = [...first, ...second].filter((question) => area(question) === key).length;
      expect(Math.abs(actual - expected), key).toBeLessThan(1);
      const inFirst = first.filter((question) => area(question) === key).length;
      expect(Math.abs(inFirst - (actual - inFirst)), key).toBeLessThanOrEqual(1);
    }
  });
});
