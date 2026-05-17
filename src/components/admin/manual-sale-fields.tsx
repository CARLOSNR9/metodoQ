"use client";

import { useMemo, useState } from "react";
import {
  BILLING_CYCLES,
  formatCOP,
  getPlanById,
  type BillingCycle,
  type PlanId,
} from "@/lib/plans/config";
import { buildManualPlanDates, getCatalogListPrice } from "@/lib/plans/manual-sale";
const CYCLE_OPTIONS = BILLING_CYCLES.map((cycle) => ({
  value: String(cycle),
  label: `${cycle} ${cycle === 1 ? "mes" : "meses"}`,
}));

type ManualSaleFieldsProps = {
  planId: PlanId;
};

function todayInputValue() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function ManualSaleFields({ planId }: ManualSaleFieldsProps) {
  const plan = getPlanById(planId);
  const [cycle, setCycle] = useState<BillingCycle>(3);
  const [startDate, setStartDate] = useState(todayInputValue());

  const listPrice = plan ? getCatalogListPrice(planId, cycle) : 0;

  const endPreview = useMemo(() => {
    const start = parsePlanStartDateClient(startDate);
    if (!start) return null;
    return buildManualPlanDates(start, cycle).planExpiresAt;
  }, [startDate, cycle]);

  if (planId === "FREE" || !plan) {
    return null;
  }

  return (
    <fieldset className="space-y-4 rounded-xl border border-mq-accent/25 bg-mq-accent/[0.04] p-5">
      <legend className="px-1 text-sm font-semibold text-mq-accent">
        Venta interna (negociador)
      </legend>
      <p className="text-xs leading-relaxed text-mq-muted">
        Registra el acuerdo fuera de Stripe. El acceso del usuario va desde la fecha de inicio
        hasta el fin del período elegido.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
            Período del plan
          </label>
          <select
            name="planBillingCycle"
            value={String(cycle)}
            onChange={(e) => setCycle(Number(e.target.value) as BillingCycle)}
            className="w-full cursor-pointer appearance-none rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-sm font-medium text-white outline-none focus:border-mq-accent focus:ring-1 focus:ring-mq-accent [color-scheme:dark]"
          >
            {CYCLE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#0f2744] text-white">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
            Fecha de inicio
          </label>
          <input
            name="planStartDate"
            type="date"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-white outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent [color-scheme:dark]"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
            Precio negociado (COP)
          </label>
          <input
            name="negotiatedPriceCOP"
            type="text"
            inputMode="numeric"
            required
            placeholder={`Ej: 220000`}
            className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-white placeholder:text-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
          />
          <p className="text-[11px] text-mq-muted">
            Precio de lista ({cycle} {cycle === 1 ? "mes" : "meses"}):{" "}
            <span className="text-white">{formatCOP(listPrice)}</span>
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
            Negociador (opcional)
          </label>
          <input
            name="negotiatorName"
            type="text"
            placeholder="Ej: María López"
            className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-white placeholder:text-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
            Notas internas (opcional)
          </label>
          <input
            name="saleNotes"
            type="text"
            placeholder="Ej: Pago transferencia 15/05"
            className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-white placeholder:text-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
          />
        </div>
      </div>

      {endPreview ? (
        <p className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-mq-muted">
          <span className="font-medium text-emerald-300">Fin del plan:</span>{" "}
          {new Date(endPreview).toLocaleDateString("es-CO", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      ) : null}
    </fieldset>
  );
}

function parsePlanStartDateClient(value: string): Date | null {
  const parsed = new Date(`${value}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}
