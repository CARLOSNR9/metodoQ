import { describe, expect, it } from "vitest";
import { GENERAL_ULTRA_CATEGORIES, GENERAL_ULTRA_GROUP_ORDER } from "@/lib/ultra-resumenes/general";
import { buildMirUltraSummary, getMirLevel, getTopicBase } from "@/lib/ultra-resumenes/mir";
import { isUltraCard, type UltraEntry } from "@/lib/ultra-resumenes/types";
import type { TrainingQuestion } from "@/lib/questions/types";

describe("ultra resúmenes generales", () => {
  it("cada categoría carga tantas fichas como declara, con id único y contenido", async () => {
    const ids = new Set<string>();
    for (const category of GENERAL_ULTRA_CATEGORIES) {
      const entries: UltraEntry[] = await category.load();
      const cards = entries.filter(isUltraCard);
      expect(cards.length, category.slug).toBe(category.cardCount);
      expect(GENERAL_ULTRA_GROUP_ORDER).toContain(category.group);
      for (const entry of entries) {
        expect(ids.has(entry.id), entry.id).toBe(false);
        ids.add(entry.id);
        expect(entry.title.trim().length).toBeGreaterThan(1);
        if (isUltraCard(entry)) expect(entry.points.length, entry.id).toBeGreaterThan(0);
      }
    }
    expect(ids.size).toBeGreaterThan(1000);
  });

  it("los slugs de categoría no se repiten", () => {
    const slugs = GENERAL_ULTRA_CATEGORIES.map((category) => category.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

function question(id: string, examArea: string, topic: string, year: number, keyPoints: string[], tags: string[] = []): TrainingQuestion {
  return {
    id,
    university: "MIR (España)",
    examArea,
    topic,
    difficulty: "medium",
    tags: ["mir", ...tags],
    officialExam: { year, number: 1 },
    statement: "",
    options: [],
    correctOptionId: "1",
    explanation: "",
    keyPoints,
  } as unknown as TrainingQuestion;
}

describe("ultra resúmenes MIR", () => {
  it("asigna el nivel según las preguntas por convocatoria", () => {
    expect(getMirLevel(13)).toBe(1);
    expect(getMirLevel(9)).toBe(2);
    expect(getMirLevel(5)).toBe(3);
    expect(getMirLevel(3.2)).toBe(4);
    expect(getMirLevel(1)).toBe(5);
  });

  it("agrupa por tema base, ordena por repetición y descarta anuladas", () => {
    expect(getTopicBase("INSUFICIENCIA CARDIACA: TRATAMIENTO")).toBe("INSUFICIENCIA CARDIACA");
    const summary = buildMirUltraSummary([
      question("a", "CARDIOLOGÍA", "ESTENOSIS AÓRTICA", 2020, ["Punto 1"]),
      question("b", "CARDIOLOGÍA", "INSUFICIENCIA CARDIACA: IECA", 2021, ["Punto 2", "Punto 3"]),
      question("c", "CARDIOLOGÍA / NEFROLOGÍA", "INSUFICIENCIA CARDIACA (AGUDA)", 2022, ["punto 2", "Punto 4"]),
      question("d", "NEFROLOGÍA", "NEFROPATÍA IGA", 2022, ["Punto 5"], ["anulada"]),
    ]);
    expect(summary.questionCount).toBe(3);
    expect(summary.specialties).toHaveLength(1);
    const [cardio] = summary.specialties;
    expect(cardio.cards[0].title).toBe("Insuficiencia cardiaca");
    expect(cardio.cards[0].points).toEqual(["Punto 2", "Punto 3", "Punto 4"]);
    expect(cardio.cards[0].badge).toBe("Preguntado 2 veces");
    expect(cardio.cards[0].meta).toBe("MIR 2021 · 2022");
    expect(cardio.repeatedTopicCount).toBe(1);
    expect(summary.levels.reduce((sum, level) => sum + level.share, 0)).toBeCloseTo(1);
  });

  it("con el banco real genera ids únicos y cubre todas las preguntas válidas", () => {
    const summary = buildMirUltraSummary();
    const ids = summary.specialties.flatMap((s) => s.cards.map((card) => card.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(summary.specialties.reduce((sum, s) => sum + s.questionCount, 0)).toBe(summary.questionCount);
    expect(summary.specialties.some((s) => s.level === 1)).toBe(true);
  });
});
