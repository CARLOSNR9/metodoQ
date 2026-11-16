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
