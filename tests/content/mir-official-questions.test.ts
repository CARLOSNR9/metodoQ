import { describe, expect, it } from "vitest";
import { MIR_EXAM_EDITIONS, MIR_OFFICIAL_QUESTIONS, MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { shuffleMirQuestionOptions } from "@/lib/training/mir-options";
import { getMirSpecialties } from "@/lib/training/mir-practice";

describe("preguntas MIR oficiales", () => {
  it("cada pregunta oficial es única por año y número", () => {
    const keys = MIR_OFFICIAL_QUESTIONS.map((q) => `${q.officialExam?.year}-${q.officialExam?.number}`);
    expect(new Set(keys).size).toBe(MIR_OFFICIAL_QUESTIONS.length);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2025)).toHaveLength(175);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2024)).toHaveLength(172);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2023)).toHaveLength(178);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2022)).toHaveLength(174);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2021)).toHaveLength(153);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2020)).toHaveLength(151);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2019)).toHaveLength(194);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2018)).toHaveLength(185);
    expect(MIR_OFFICIAL_QUESTIONS.filter((q) => q.officialExam?.year === 2017)).toHaveLength(185);
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

  it("sus especialidades ya existen en el mapa de dominio y tienen su simulacro", () => {
    const ownSpecialties = new Set(
      getMirSpecialties(MIR_QUESTIONS.filter((question) => !question.officialExam)).map((s) => s.key),
    );
    for (const { key } of getMirSpecialties(MIR_OFFICIAL_QUESTIONS)) {
      expect(ownSpecialties, key).toContain(key);
    }
    const edition = MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2025-OFICIAL-1");
    expect(edition?.questionCount).toBe(175);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2024-OFICIAL")?.questionCount).toBe(172);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2023-OFICIAL")?.questionCount).toBe(178);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2022-OFICIAL")?.questionCount).toBe(174);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2021-OFICIAL")?.questionCount).toBe(153);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2020-OFICIAL")?.questionCount).toBe(151);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2019-OFICIAL")?.questionCount).toBe(194);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2018-OFICIAL")?.questionCount).toBe(185);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2017-OFICIAL")?.questionCount).toBe(185);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2027-SIMULACRO-COMPLETO")?.questionCount).toBe(200);
  });
});
