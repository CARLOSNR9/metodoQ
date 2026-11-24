import { describe, expect, it } from "vitest";
import {
  getCurrentUdeaPhase,
  getDaysUntilUdeaExam,
  isUdeaMedicinaDeporteTrack,
} from "@/lib/diagnostic/udea-track";
import { isMedicinaDeporteSpecialty, isUdeaUniversity } from "@/lib/diagnostic/university-match";
import {
  buildConvocatoriaEditionStatus,
  getFeaturedConvocatoriaEditionForUser,
  selectConvocatoriaExamQuestions,
  UDEA_CONVOCATORIA_EDITIONS,
} from "@/lib/training/udea-convocatoria";
import {
  getConvocatoriaEdition,
  getConvocatoriaTrack,
  getConvocatoriaTrackLabel,
} from "@/lib/training/convocatorias";
import { getAct1DiagnosticSession } from "@/lib/diagnostic/get-diagnostic-session";
import { getConvocatoriaQuestionBank } from "@/lib/questions/convocatoria-bank";
import { applyAdminStudentPreviewProfile, isAdminPreviewUniversity } from "@/lib/admin/student-preview";

describe("detección UdeA · Medicina del Deporte", () => {
  it("reconoce la universidad y la especialidad", () => {
    expect(isUdeaUniversity("Universidad de Antioquia (UdeA)")).toBe(true);
    expect(isMedicinaDeporteSpecialty("Medicina del Deporte")).toBe(true);
    expect(isMedicinaDeporteSpecialty("Medicina Deportiva")).toBe(true);
    expect(isMedicinaDeporteSpecialty("Medicina Interna")).toBe(false);
    expect(isUdeaMedicinaDeporteTrack("Universidad de Antioquia (UdeA)", "Medicina del Deporte")).toBe(true);
  });

  it("usa el diagnóstico UdeA para cualquier especialidad", () => {
    for (const specialty of ["Medicina del Deporte", "Medicina Interna"]) {
      const session = getAct1DiagnosticSession("Universidad de Antioquia (UdeA)", specialty);
      expect(session).toHaveLength(10);
      expect(session?.every((q) => q.id.startsWith("udea-dx-"))).toBe(true);
    }
  });

  it("la vista previa de admin arma un perfil UdeA · Medicina del Deporte", () => {
    expect(isAdminPreviewUniversity("udea")).toBe(true);
    const profile = applyAdminStudentPreviewProfile(
      { uid: "x", email: "admin@test.co", plan: "FREE" } as never,
      "admin",
      "udea",
    );
    expect(profile.goalUniversity).toBe("Universidad de Antioquia (UdeA)");
    expect(profile.goalSpecialty).toBe("Medicina del Deporte");
  });
});

describe("calendario UdeA", () => {
  it("cuenta los días hasta el examen y ubica la fase", () => {
    const nov24 = new Date("2026-11-24T10:00:00-05:00");
    expect(getDaysUntilUdeaExam(nov24)).toBe(138);
    expect(getDaysUntilUdeaExam(new Date("2026-11-25T00:30:00-05:00"))).toBe(137);
    expect(getCurrentUdeaPhase(nov24).id).toBe(1);
    expect(getCurrentUdeaPhase(new Date("2027-02-10T10:00:00-05:00")).id).toBe(3);
    expect(getDaysUntilUdeaExam(new Date("2027-06-01T00:00:00-05:00"))).toBe(0);
  });

  it("el examen real está disponible desde el 24 de noviembre y el resto se habilita después", () => {
    const nov24 = new Date("2026-11-24T08:00:00-05:00");
    const statuses = UDEA_CONVOCATORIA_EDITIONS.map((edition) =>
      buildConvocatoriaEditionStatus({ edition, schedule: UDEA_CONVOCATORIA_EDITIONS, today: nov24 }),
    );
    expect(statuses[0].phase).toBe("open");
    expect(statuses[0].canStart).toBe(true);
    expect(statuses.slice(1).every((s) => s.phase === "upcoming")).toBe(true);
    expect(getFeaturedConvocatoriaEditionForUser(null, nov24)?.code).toBe("UDEA-ED1");
  });

  it("el examen real conserva su orden; los demás se barajan", () => {
    const real = selectConvocatoriaExamQuestions(UDEA_CONVOCATORIA_EDITIONS[0]);
    expect(real.map((q) => q.id)).toEqual(UDEA_CONVOCATORIA_EDITIONS[0].questions.map((q) => q.id));
  });

  it("el ruteo de convocatorias reconoce la pista UdeA", () => {
    expect(getConvocatoriaTrack("UDEA-ED3")).toBe("UDEA");
    expect(getConvocatoriaTrackLabel("UDEA-ED1")).toBe("UdeA");
    expect(getConvocatoriaEdition("UDEA-ED2")?.label).toBe("Simulacro #2");
    expect(getConvocatoriaTrack("UNIVALLE-ED1")).toBe("UNIVALLE");
    expect(getConvocatoriaQuestionBank("UDEA-ED1")).toHaveLength(70);
  });
});
