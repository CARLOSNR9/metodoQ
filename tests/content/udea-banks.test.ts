import { describe, expect, it } from "vitest";
import {
  UDEA_EXAMEN_REAL_QUESTIONS,
  UDEA_MEDICINA_DEPORTE_QUESTIONS,
  UDEA_OWN_QUESTIONS,
} from "@/data/udea";
import { UDEA_CONVOCATORIA_EDITIONS } from "@/lib/training/udea-convocatoria";
import { UDEA_REAL_EXAM_BLUEPRINT } from "@/lib/diagnostic/udea-track";

const ALL = [...UDEA_EXAMEN_REAL_QUESTIONS, ...UDEA_MEDICINA_DEPORTE_QUESTIONS];

describe("examen real UdeA", () => {
  it("tiene las 70 preguntas en orden y con IDs únicos", () => {
    expect(UDEA_EXAMEN_REAL_QUESTIONS).toHaveLength(70);
    UDEA_EXAMEN_REAL_QUESTIONS.forEach((q, index) => {
      expect(q.id).toBe(`udea-real-${String(index + 1).padStart(2, "0")}`);
    });
    const ids = ALL.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("el reparto por área del panel coincide con el banco", () => {
    const total = UDEA_REAL_EXAM_BLUEPRINT.reduce((sum, item) => sum + item.count, 0);
    expect(total).toBe(70);
    for (const item of UDEA_REAL_EXAM_BLUEPRINT) {
      const count = UDEA_EXAMEN_REAL_QUESTIONS.filter((q) =>
        (item.examAreas as readonly string[]).includes(q.examArea ?? ""),
      ).length;
      expect(count, item.area).toBe(item.count);
    }
  });
});

describe("integridad de preguntas UdeA", () => {
  it("cada pregunta es válida: 3–4 opciones, respuesta existente y retroalimentación en las incorrectas", () => {
    for (const question of ALL) {
      expect(question.university, question.id).toBe("UdeA");
      expect([3, 4], question.id).toContain(question.options.length);
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

  it("la ruta de deporte tiene 20 preguntas de 4 opciones con respuestas repartidas", () => {
    expect(UDEA_MEDICINA_DEPORTE_QUESTIONS).toHaveLength(20);
    expect(UDEA_OWN_QUESTIONS).toEqual(UDEA_MEDICINA_DEPORTE_QUESTIONS);
    const counts: Record<string, number> = {};
    for (const q of UDEA_MEDICINA_DEPORTE_QUESTIONS) {
      expect(q.options, q.id).toHaveLength(4);
      expect(q.topic.toLowerCase(), q.id).toContain("medicina del deporte");
      counts[q.correctOptionId] = (counts[q.correctOptionId] ?? 0) + 1;
    }
    for (const letter of ["A", "B", "C", "D"]) {
      expect(counts[letter] ?? 0, letter).toBeGreaterThanOrEqual(4);
    }
  });
});

describe("simulacros UdeA", () => {
  it("son 6 ediciones de 70 preguntas sin repetir preguntas entre ediciones", () => {
    expect(UDEA_CONVOCATORIA_EDITIONS).toHaveLength(6);
    const seen = new Set<string>();
    for (const edition of UDEA_CONVOCATORIA_EDITIONS) {
      expect(edition.code.startsWith("UDEA-"), edition.code).toBe(true);
      expect(edition.questions, edition.code).toHaveLength(70);
      expect(edition.questionCount).toBe(70);
      for (const question of edition.questions) {
        expect(seen.has(question.id), question.id).toBe(false);
        seen.add(question.id);
      }
    }
  });

  it("el primero es el examen real y los demás no mencionan otra universidad", () => {
    expect(UDEA_CONVOCATORIA_EDITIONS[0].questions).toBe(UDEA_EXAMEN_REAL_QUESTIONS);
    const foreign = /pasto|nari[ñn]o|cooperativa|\bucc\b|\bumng\b|militar|nueva granada|bogot[áa]/i;
    for (const edition of UDEA_CONVOCATORIA_EDITIONS.slice(1)) {
      for (const question of edition.questions) {
        expect(question.options, question.id).toHaveLength(4);
        expect(foreign.test(question.statement), question.id).toBe(false);
      }
    }
  });
});
