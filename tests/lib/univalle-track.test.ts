import { describe, expect, it } from "vitest";
import { evaluatePasswordRules, isPasswordAcceptable } from "@/lib/password-policy";
import {
  getCurrentUnivallePhase,
  getDaysUntilUnivalleExam,
  isUnivalleDermatologiaTrack,
} from "@/lib/diagnostic/univalle-track";
import { isUnivalleUniversity, isUnalUniversity } from "@/lib/diagnostic/university-match";
import { resolveUniversityFromProfile } from "@/lib/diagnostic/resolve-profile-target";
import {
  buildConvocatoriaEditionStatus,
  getFeaturedConvocatoriaEditionForUser,
  UNIVALLE_CONVOCATORIA_EDITIONS,
} from "@/lib/training/univalle-convocatoria";
import { getConvocatoriaTrack, getConvocatoriaEdition } from "@/lib/training/convocatorias";
import { getAct1DiagnosticSession } from "@/lib/diagnostic/get-diagnostic-session";

describe("detección Univalle", () => {
  it("reconoce las formas en que se escribe la universidad", () => {
    expect(isUnivalleUniversity("Universidad del Valle (Univalle)")).toBe(true);
    expect(isUnivalleUniversity("Universidad del Valle")).toBe(true);
    expect(isUnivalleUniversity("univalle")).toBe(true);
    expect(isUnivalleUniversity("Universidad Cooperativa (Pasto)")).toBe(false);
    expect(isUnalUniversity("Universidad del Valle (Univalle)")).toBe(false);
    expect(resolveUniversityFromProfile("Universidad del Valle")).toBe("Universidad del Valle (Univalle)");
  });

  it("identifica la ruta Univalle · Dermatología", () => {
    expect(isUnivalleDermatologiaTrack("Universidad del Valle (Univalle)", "Dermatología")).toBe(true);
    expect(isUnivalleDermatologiaTrack("Universidad del Valle (Univalle)", "Pediatría")).toBe(false);
  });

  it("usa el diagnóstico Univalle para cualquier especialidad", () => {
    const session = getAct1DiagnosticSession("Universidad del Valle (Univalle)", "Dermatología");
    expect(session).toHaveLength(10);
    expect(session?.every((q) => q.id.startsWith("univalle-diag-"))).toBe(true);
  });
});

describe("calendario Univalle", () => {
  it("cuenta los días hasta el examen y ubica la fase", () => {
    const nov16 = new Date("2026-11-16T10:00:00-05:00");
    expect(getDaysUntilUnivalleExam(nov16)).toBeGreaterThan(130);
    expect(getCurrentUnivallePhase(nov16).id).toBe(1);
    expect(getCurrentUnivallePhase(new Date("2027-02-10T10:00:00-05:00")).id).toBe(3);
    expect(getDaysUntilUnivalleExam(new Date("2027-06-01T00:00:00-05:00"))).toBe(0);
  });

  it("habilita los simulacros de forma progresiva", () => {
    const nov16 = new Date("2026-11-16T10:00:00-05:00");
    const statuses = UNIVALLE_CONVOCATORIA_EDITIONS.map((edition) =>
      buildConvocatoriaEditionStatus({ edition, schedule: UNIVALLE_CONVOCATORIA_EDITIONS, today: nov16 }),
    );
    expect(statuses.map((s) => s.phase)).toEqual(["open", "upcoming", "upcoming", "upcoming", "upcoming", "upcoming"]);
    expect(statuses[0].canStart).toBe(true);
    expect(getFeaturedConvocatoriaEditionForUser(null, nov16)?.code).toBe("UNIVALLE-ED1");
    expect(getFeaturedConvocatoriaEditionForUser(null, new Date("2027-03-20T10:00:00-05:00"))?.code).toBe("UNIVALLE-ED6");
  });

  it("se enruta como pista UNIVALLE en la capa de convocatorias", () => {
    expect(getConvocatoriaTrack("UNIVALLE-ED2")).toBe("UNIVALLE");
    expect(getConvocatoriaTrack("UMNG-ED2")).toBe("UMNG");
    expect(getConvocatoriaTrack("UCC-2026-08-09")).toBe("UCC");
    expect(getConvocatoriaEdition("UNIVALLE-ED3")?.questions).toHaveLength(100);
  });
});

describe("política de contraseña personal", () => {
  it("exige 8 caracteres, letra, número y que sea distinta a la temporal", () => {
    expect(isPasswordAcceptable("Dermato2027", "jp123456")).toBe(true);
    expect(isPasswordAcceptable("corta1", "jp123456")).toBe(false);
    expect(isPasswordAcceptable("solamenteletras", "jp123456")).toBe(false);
    expect(isPasswordAcceptable("1234567890", "jp123456")).toBe(false);
    expect(isPasswordAcceptable("jp123456", "jp123456")).toBe(false);
    expect(isPasswordAcceptable("Pérez2027", "jp123456")).toBe(true);
    expect(evaluatePasswordRules("", "x").every((r) => !r.ok)).toBe(true);
  });
});

describe("cuenta regresiva por días calendario", () => {
  it("baja de uno en uno al cambiar el día en Colombia", () => {
    expect(getDaysUntilUnivalleExam(new Date("2026-11-16T16:00:00-05:00"))).toBe(133);
    expect(getDaysUntilUnivalleExam(new Date("2026-11-16T23:59:00-05:00"))).toBe(133);
    expect(getDaysUntilUnivalleExam(new Date("2026-11-17T00:14:00-05:00"))).toBe(132);
    expect(getDaysUntilUnivalleExam(new Date("2027-03-29T05:00:00-05:00"))).toBe(0);
  });
});
