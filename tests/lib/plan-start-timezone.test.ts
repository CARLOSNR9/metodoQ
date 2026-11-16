import { describe, expect, it } from "vitest";
import { buildManualPlanDates, parsePlanStartDate } from "@/lib/plans/manual-sale";
import { getPlanStartDateKey } from "@/lib/training/daily-activity";

describe("inicio del plan en hora de Colombia", () => {
  it("una venta manual del 16/11 empieza a medianoche de Colombia, no de UTC", () => {
    const start = parsePlanStartDate("2026-11-16")!;
    const { planStartedAt } = buildManualPlanDates(start, 6);
    expect(planStartedAt).toBe("2026-11-16T05:00:00.000Z");
  });

  it("las ventas antiguas guardadas a medianoche UTC conservan su día calendario", () => {
    expect(getPlanStartDateKey("2026-11-16T00:00:00.000Z")).toBe("2026-11-16");
    expect(getPlanStartDateKey("2026-11-16T00:00:00Z")).toBe("2026-11-16");
  });
});

import { formatSubscriptionDate } from "@/lib/plans/subscription-display";
import { isRelevantPastClassForStudent } from "@/lib/classes/student-classes";

describe("fechas visibles del plan", () => {
  it("una fecha antigua a medianoche UTC se muestra con su día calendario", () => {
    expect(formatSubscriptionDate("2026-11-16T00:00:00.000Z")).toBe("16 de noviembre de 2026");
    expect(formatSubscriptionDate("2027-05-16T00:00:00.000Z")).toBe("16 de mayo de 2027");
  });
});

describe("clases anteriores visibles", () => {
  const plan = "2026-11-16T05:00:00.000Z";
  it("oculta clases sin grabación de antes del inicio del plan", () => {
    expect(isRelevantPastClassForStudent({ classDate: new Date("2026-07-07T20:00:00Z") }, plan)).toBe(false);
  });
  it("mantiene las que tienen grabación o son posteriores al inicio", () => {
    expect(
      isRelevantPastClassForStudent({ classDate: new Date("2026-07-07T20:00:00Z"), recordingLink: "https://x" }, plan),
    ).toBe(true);
    expect(isRelevantPastClassForStudent({ classDate: new Date("2026-11-20T20:00:00Z") }, plan)).toBe(true);
  });
});
