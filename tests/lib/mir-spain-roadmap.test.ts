import { describe, expect, it } from "vitest";
import {
  MIR_MEDICINE_PLACES,
  MIR_NON_RESIDENT_QUOTA,
  MIR_ROADMAP_STEPS,
} from "@/lib/mir/spain-roadmap";

describe("Tu camino a España", () => {
  it("cada paso tiene un id único (se guarda el progreso por id)", () => {
    const ids = MIR_ROADMAP_STEPS.map((step) => step.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("cada paso tiene título, cuándo, resumen y al menos un detalle", () => {
    for (const step of MIR_ROADMAP_STEPS) {
      expect(step.title && step.when && step.summary).toBeTruthy();
      expect(step.details.length).toBeGreaterThan(0);
    }
  });

  it("solo enlaza a sitios oficiales por HTTPS", () => {
    const hosts = MIR_ROADMAP_STEPS.flatMap((step) => step.links ?? []).map((link) => new URL(link.href));
    for (const url of hosts) {
      expect(url.protocol).toBe("https:");
      expect(url.hostname).toMatch(/(\.gob\.es|\.gov\.co|boe\.es)$/);
    }
  });

  it("el cupo de no residentes es el 10 % de las plazas de Medicina", () => {
    expect(MIR_NON_RESIDENT_QUOTA).toBe(Math.round(MIR_MEDICINE_PLACES * 0.1));
  });
});
