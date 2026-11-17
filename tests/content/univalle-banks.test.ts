import { describe, expect, it } from "vitest";
import {
  UNIVALLE_DERMATOLOGIA_QUESTIONS,
  UNIVALLE_DIAGNOSTIC_QUESTIONS,
  UNIVALLE_NORMATIVIDAD_QUESTIONS,
  UNIVALLE_OWN_QUESTIONS,
} from "@/data/univalle";
import { UNIVALLE_CONVOCATORIA_EDITIONS } from "@/lib/training/univalle-convocatoria";

describe("banco propio Univalle", () => {
  it("tiene 30 de dermatología, 20 de normatividad y 10 de diagnóstico, con IDs únicos", () => {
    expect(UNIVALLE_DERMATOLOGIA_QUESTIONS).toHaveLength(30);
    expect(UNIVALLE_NORMATIVIDAD_QUESTIONS).toHaveLength(20);
    expect(UNIVALLE_DIAGNOSTIC_QUESTIONS).toHaveLength(10);
    const ids = UNIVALLE_OWN_QUESTIONS.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("cada pregunta es válida: 4 opciones, respuesta existente y retroalimentación en las incorrectas", () => {
    for (const question of UNIVALLE_OWN_QUESTIONS) {
      expect(question.university, question.id).toBe("Univalle");
      expect(question.options.map((o) => o.id), question.id).toEqual(["A", "B", "C", "D"]);
      const correct = question.options.find((o) => o.id === question.correctOptionId);
      expect(correct, question.id).toBeTruthy();
      expect(correct?.incorrectFeedback, question.id).toBeUndefined();
      for (const option of question.options) {
        if (option.id === question.correctOptionId) continue;
        expect(option.incorrectFeedback?.length ?? 0, `${question.id}-${option.id}`).toBeGreaterThan(20);
      }
      expect(question.explanation.length, question.id).toBeGreaterThan(300);
      expect(question.keyPoints.length, question.id).toBeGreaterThanOrEqual(2);
    }
  });

  it("reparte la respuesta correcta entre las cuatro letras", () => {
    const counts: Record<string, number> = {};
    for (const q of UNIVALLE_OWN_QUESTIONS) counts[q.correctOptionId] = (counts[q.correctOptionId] ?? 0) + 1;
    for (const letter of ["A", "B", "C", "D"]) {
      expect(counts[letter] ?? 0, letter).toBeGreaterThanOrEqual(8);
    }
  });

  it("toda la dermatología se encuentra con el filtro de la Ruta Dermatología", () => {
    for (const q of UNIVALLE_DERMATOLOGIA_QUESTIONS) {
      expect(`${q.topic} ${q.examArea}`.toLowerCase(), q.id).toContain("dermatolog");
    }
  });
});

describe("simulacros Univalle", () => {
  it("son 6 ediciones de 100 preguntas de 4 opciones, sin repetir preguntas entre ediciones", () => {
    expect(UNIVALLE_CONVOCATORIA_EDITIONS).toHaveLength(6);
    const seen = new Set<string>();
    for (const edition of UNIVALLE_CONVOCATORIA_EDITIONS) {
      expect(edition.code.startsWith("UNIVALLE-"), edition.code).toBe(true);
      expect(edition.questions, edition.code).toHaveLength(100);
      expect(edition.questionCount).toBe(100);
      for (const question of edition.questions) {
        expect(question.options, question.id).toHaveLength(4);
        expect(seen.has(question.id), question.id).toBe(false);
        seen.add(question.id);
      }
    }
  });

  it("no mencionan otra universidad ni ciudad en el enunciado", () => {
    const foreign = /pasto|nari[ñn]o|cooperativa|\bucc\b|\bumng\b|militar|nueva granada|bogot[áa]/i;
    for (const edition of UNIVALLE_CONVOCATORIA_EDITIONS) {
      for (const question of edition.questions) {
        expect(foreign.test(question.statement), question.id).toBe(false);
      }
    }
  });
});

describe("sin pista por el largo de las opciones", () => {
  it("la correcta no es sistemáticamente la opción más larga", () => {
    let longest = 0;
    let ratioSum = 0;
    for (const q of UNIVALLE_OWN_QUESTIONS) {
      const lens = q.options.map((o) => o.text.length);
      const correct = q.options.find((o) => o.id === q.correctOptionId)!.text.length;
      if (correct === Math.max(...lens)) longest += 1;
      const others = q.options.filter((o) => o.id !== q.correctOptionId).map((o) => o.text.length);
      ratioSum += correct / (others.reduce((a, b) => a + b, 0) / others.length);
    }
    expect(longest / UNIVALLE_OWN_QUESTIONS.length).toBeLessThanOrEqual(0.35);
    expect(ratioSum / UNIVALLE_OWN_QUESTIONS.length).toBeLessThanOrEqual(1.15);
  });
});
