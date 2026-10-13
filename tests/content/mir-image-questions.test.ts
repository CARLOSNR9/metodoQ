import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { MIR_OFICIAL_2024_IMAGENES_QUESTIONS } from "@/data/mir-oficial-2024-imagenes-questions";
import { MIR_EXAM_EDITIONS, MIR_OFFICIAL_QUESTIONS } from "@/lib/training/mir-convocatoria";

describe("preguntas MIR de imagen (2024)", () => {
  it("son las 25 preguntas de imagen, numeradas 1-25, con su imagen en public/", () => {
    expect(MIR_OFICIAL_2024_IMAGENES_QUESTIONS.map((q) => q.officialExam?.number)).toEqual(
      Array.from({ length: 25 }, (_, index) => index + 1),
    );
    for (const question of MIR_OFICIAL_2024_IMAGENES_QUESTIONS) {
      expect(question.officialExam?.year, question.id).toBe(2024);
      expect(question.tags, question.id).toContain("imagen");
      expect(question.image, question.id).toBeTruthy();
      const { src, alt, width, height } = question.image!;
      expect(src, question.id).toBe(`/mir/2024/imagen-${String(question.officialExam!.number).padStart(2, "0")}.jpg`);
      expect(existsSync(path.join(process.cwd(), "public", src)), src).toBe(true);
      expect(alt.length, question.id).toBeGreaterThan(10);
      expect(width > 0 && height > 0, question.id).toBe(true);
      expect(question.options.map((option) => option.id), question.id).toEqual(["1", "2", "3", "4"]);
      expect(question.explanation.length, question.id).toBeGreaterThan(300);
      expect(question.keyPoints.length, question.id).toBeGreaterThanOrEqual(2);
    }
  });

  it("las que siguen pendientes de verificar no entran en el banco", () => {
    const inBank = new Set(MIR_OFFICIAL_QUESTIONS.map((question) => question.id));
    for (const question of MIR_OFICIAL_2024_IMAGENES_QUESTIONS) {
      expect(inBank.has(question.id), question.id).toBe(question.reviewStatus !== "pending");
    }
  });

  it("entran en los simulacros mixtos en la proporción del MIR real (unas 25 de 210)", () => {
    const counts = ["MIR-MIXTO-1", "MIR-MIXTO-2"].map(
      (code) => MIR_EXAM_EDITIONS.find((item) => item.code === code)!.questions.filter((question) => question.image).length,
    );
    expect(counts[0]).toBe(counts[1]);
    expect(counts[0] + counts[1]).toBe(Math.floor(Math.min(25, Math.round((200 * 25) / 210)) / 2) * 2);
  });

  it("el simulacro «Ojo Clínico» reúne solo las preguntas de imagen del banco", () => {
    const imagesInBank = MIR_OFFICIAL_QUESTIONS.filter((question) => question.image);
    const edition = MIR_EXAM_EDITIONS.find((item) => item.code === "MIR-OJO-CLINICO");
    expect(edition?.questions ?? []).toEqual(imagesInBank);
    expect(edition?.questionCount).toBe(25);
  });
});

describe("vista previa de Vercel", () => {
  it("muestra también las preguntas de imagen pendientes y el simulacro «Ojo Clínico»", async () => {
    vi.stubEnv("NEXT_PUBLIC_VERCEL_ENV", "preview");
    vi.resetModules();
    const { MIR_EXAM_EDITIONS: editions } = await import("@/lib/training/mir-convocatoria");
    vi.unstubAllEnvs();
    vi.resetModules();
    expect(editions.find((item) => item.code === "MIR-OJO-CLINICO")?.questionCount).toBe(25);
    expect(editions.find((item) => item.code === "MIR-2024-OFICIAL")?.questionCount).toBe(182 + 25);
    expect(editions.find((item) => item.code === "MIR-MIXTO-1")?.questionCount).toBe(100);
  });
});
