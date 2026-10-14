import { describe, expect, it } from "vitest";
import { MIR_PEARLS, MIR_PEARL_CATEGORIES, getMirPearlOfTheDay } from "@/lib/mir/colombia-spain-pearls";

describe("perlas Colombia vs España", () => {
  it("cada perla tiene id único, categoría conocida y todos los textos", () => {
    const categories = new Set(MIR_PEARL_CATEGORIES.map((category) => category.value));
    expect(new Set(MIR_PEARLS.map((pearl) => pearl.id)).size).toBe(MIR_PEARLS.length);
    for (const pearl of MIR_PEARLS) {
      expect(categories.has(pearl.category)).toBe(true);
      expect(pearl.title && pearl.colombia && pearl.spain && pearl.mirTip).toBeTruthy();
    }
  });

  it("todas las categorías tienen al menos una perla", () => {
    for (const { value } of MIR_PEARL_CATEGORIES) {
      expect(MIR_PEARLS.some((pearl) => pearl.category === value)).toBe(true);
    }
  });

  it("la perla del día es estable durante el día y cambia al siguiente", () => {
    const morning = getMirPearlOfTheDay(new Date(2026, 9, 13, 8, 0));
    const night = getMirPearlOfTheDay(new Date(2026, 9, 13, 23, 0));
    const tomorrow = getMirPearlOfTheDay(new Date(2026, 9, 14, 8, 0));
    expect(night.id).toBe(morning.id);
    expect(tomorrow.id).not.toBe(morning.id);
  });

  it("recorre todas las perlas en tantos días como perlas hay", () => {
    const seen = new Set(
      Array.from({ length: MIR_PEARLS.length }, (_, day) => getMirPearlOfTheDay(new Date(2026, 0, 1 + day)).id),
    );
    expect(seen.size).toBe(MIR_PEARLS.length);
  });
});
