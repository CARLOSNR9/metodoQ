import { describe, expect, it } from "vitest";
import { MIR_EXAM_EDITIONS, MIR_OFFICIAL_QUESTIONS, MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { shuffleMirQuestionOptions } from "@/lib/training/mir-options";
import { getMirSpecialties } from "@/lib/training/mir-practice";

describe("preguntas MIR oficiales", () => {
  it("el lote 1 tiene 100 preguntas únicas del MIR 2025", () => {
    expect(MIR_OFFICIAL_QUESTIONS).toHaveLength(100);
    const numbers = MIR_OFFICIAL_QUESTIONS.map((question) => question.officialExam?.number);
    expect(new Set(numbers).size).toBe(100);
    expect(MIR_OFFICIAL_QUESTIONS.every((question) => question.officialExam?.year === 2025)).toBe(true);
    expect(new Set(MIR_QUESTIONS.map((question) => question.id)).size).toBe(MIR_QUESTIONS.length);
  });

  it("cada pregunta tiene 4 opciones numeradas 1-4, respuesta oficial y explicación", () => {
    for (const question of MIR_OFFICIAL_QUESTIONS) {
      expect(question.options.map((option) => option.id), question.id).toEqual(["1", "2", "3", "4"]);
      expect(question.options.every((option) => option.text.trim().length > 0), question.id).toBe(true);
      expect(["1", "2", "3", "4"], question.id).toContain(question.correctOptionId);
      expect(question.statement.length, question.id).toBeGreaterThan(30);
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
    expect(edition?.questionCount).toBe(100);
    expect(MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-2027-SIMULACRO-COMPLETO")?.questionCount).toBe(200);
  });
});
