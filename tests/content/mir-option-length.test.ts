import { describe, expect, it } from "vitest";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";

/**
 * Sesgo de longitud: si la opción correcta suele ser la más larga (o mucho más
 * larga que las demás), el alumno puede acertar sin saber medicina y la nota
 * estimada deja de medir conocimiento. Este test impide reintroducirlo al
 * añadir o editar preguntas del banco MIR.
 */
type Question = (typeof MIR_QUESTIONS)[number];

/** Posición de la correcta por longitud: 1 = la más larga (los empates cuentan como más largas). */
function lengthRank(question: Question): number {
  const correct = question.options.find((option) => option.id === question.correctOptionId);
  if (!correct) throw new Error(`${question.id}: falta la opción correcta`);
  const distractors = question.options.filter((option) => option.id !== question.correctOptionId);
  return 1 + distractors.filter((option) => option.text.length >= correct.text.length).length;
}

/** Longitud de la correcta respecto a la media de las incorrectas. */
function lengthRatio(question: Question): number {
  const correct = question.options.find((option) => option.id === question.correctOptionId)!;
  const distractors = question.options.filter((option) => option.id !== question.correctOptionId);
  const mean = distractors.reduce((sum, option) => sum + option.text.length, 0) / distractors.length;
  return correct.text.length / mean;
}

describe("banco MIR: sin sesgo de la opción más larga", () => {
  const total = MIR_QUESTIONS.length;
  const ranks = MIR_QUESTIONS.map(lengthRank);

  it("la correcta no es la opción más larga en más del 30% de las preguntas", () => {
    const longest = ranks.filter((rank) => rank === 1).length;
    expect(longest / total).toBeLessThanOrEqual(0.3);
  });

  it("ninguna posición por longitud concentra más del 35% de las respuestas correctas", () => {
    for (const position of [1, 2, 3, 4]) {
      const share = ranks.filter((rank) => rank === position).length / total;
      expect(share, `posición ${position}`).toBeLessThanOrEqual(0.35);
    }
  });

  it("de media, la correcta mide lo mismo que las incorrectas (±15%)", () => {
    const meanRatio = MIR_QUESTIONS.reduce((sum, question) => sum + lengthRatio(question), 0) / total;
    expect(meanRatio).toBeGreaterThan(0.85);
    expect(meanRatio).toBeLessThan(1.15);
  });

  it("ninguna correcta duplica la longitud media de sus incorrectas", () => {
    const outliers = MIR_QUESTIONS.filter((question) => lengthRatio(question) >= 1.6).map((q) => q.id);
    expect(outliers).toEqual([]);
  });

  it("las opciones de cada pregunta son distintas entre sí", () => {
    for (const question of MIR_QUESTIONS) {
      const texts = question.options.map((option) => option.text.trim());
      expect(new Set(texts).size, question.id).toBe(texts.length);
    }
  });
});

/**
 * Palabras absolutas («siempre», «nunca», «todos», «cualquier», «exclusivamente»…):
 * si abundan en las incorrectas, el alumno aprende a descartarlas sin saber
 * medicina; si solo aparecen en la correcta, la delatan. Deben aparecer en
 * proporciones parecidas. No cuentan expresiones hechas como «sobre todo»,
 * «siempre que», «dosis única» o «dieta absoluta».
 */
const ABSOLUTE_WORDS =
  /(?<![\p{L}])(siempre|nunca|jamás|exclusiva(?:mente)?|exclusivo|únicamente|únic[oa]s?|sol[oa]mente|solo|tod[oa]s?|ning[uú]n[oa]?|cualquiera?|independientemente|indefinid[oa]|absolut[oa]s?|obligatori[oa]s?|obligatoriamente|sistemátic[oa]s?|sistemáticamente)(?![\p{L}])/iu;
const IDIOMS = /(?<![\p{L}])(sobre todo|siempre que|dosis únicas?|dieta absoluta|reposo absoluto|ayuno absoluto)(?![\p{L}])/giu;
const hasAbsolute = (text: string) => ABSOLUTE_WORDS.test(text.replace(IDIOMS, " "));

describe("banco MIR: sin pista de palabras absolutas", () => {
  const total = MIR_QUESTIONS.length;
  const rows = MIR_QUESTIONS.map((question) => ({
    correct: hasAbsolute(question.options.find((o) => o.id === question.correctOptionId)!.text),
    distractors: question.options.filter((o) => o.id !== question.correctOptionId).map((o) => hasAbsolute(o.text)),
  }));

  it("aparecen en proporciones parecidas en correctas e incorrectas (±5 puntos)", () => {
    const correctRate = rows.filter((row) => row.correct).length / total;
    const distractorFlags = rows.flatMap((row) => row.distractors);
    const distractorRate = distractorFlags.filter(Boolean).length / distractorFlags.length;
    expect(Math.abs(correctRate - distractorRate)).toBeLessThanOrEqual(0.05);
  });

  it("casi nunca la correcta es la única opción sin palabras absolutas", () => {
    const onlyWithout = rows.filter((row) => !row.correct && row.distractors.every(Boolean)).length;
    expect(onlyWithout / total).toBeLessThanOrEqual(0.03);
  });

  it("casi nunca la correcta es la única opción con palabras absolutas", () => {
    const onlyWith = rows.filter((row) => row.correct && !row.distractors.some(Boolean)).length;
    expect(onlyWith / total).toBeLessThanOrEqual(0.03);
  });
});

