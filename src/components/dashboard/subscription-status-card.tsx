"use client";

import { Calendar, CreditCard, ShieldCheck } from "lucide-react";
import {
  buildSubscriptionSummary,
  type SubscriptionProfile,
} from "@/lib/plans/subscription-display";
import { formatCOP } from "@/lib/plans/config";

type SubscriptionStatusCardProps = {
  profile: SubscriptionProfile | null | undefined;
  variant?: "compact" | "full";
};

export function SubscriptionStatusCard({
  profile,
  variant = "full",
}: SubscriptionStatusCardProps) {
  const summary = buildSubscriptionSummary(profile);
  if (!summary) return null;

  const daysLabel =
    summary.daysRemaining == null
      ? null
      : summary.daysRemaining <= 0
        ? "Vence hoy"
        : `${summary.daysRemaining} ${summary.daysRemaining === 1 ? "día" : "días"} restantes`;

  if (variant === "compact") {
    return (
      <div className="inline-flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-mq-accent/25 bg-mq-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-mq-accent">
          <ShieldCheck size={12} />
          {summary.planName} · {summary.billingCycleLabel}
        </span>
        {daysLabel ? (
          <span className="text-[10px] font-semibold text-slate-500">{daysLabel}</span>
        ) : null}
      </div>
    );
  }

  return (
    <section className="rounded-2xl border border-mq-accent/20 bg-gradient-to-br from-mq-accent/[0.08] via-mq-surface to-transparent p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
            Tu membresía
          </p>
          <h2 className="text-xl font-bold text-slate-900">
            Plan {summary.planName} · {summary.billingCycleLabel}
          </h2>
          {daysLabel ? <p className="text-sm text-slate-500">{daysLabel}</p> : null}
        </div>
        {summary.negotiatedPrice != null ? (
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Inversión
            </p>
            <p className="text-lg font-black text-slate-900">{summary.priceLabel}</p>
            {summary.listPrice != null && summary.listPrice > summary.negotiatedPrice ? (
              <p className="text-xs text-slate-500 line-through">
                {formatCOP(summary.listPrice)}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      {summary.progressPercent != null ? (
        <div className="mt-5">
          <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <span>Progreso del período</span>
            <span className="text-mq-accent">{summary.progressPercent}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-mq-accent transition-all duration-500"
              style={{ width: `${summary.progressPercent}%` }}
            />
          </div>
        </div>
      ) : null}

      <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <Calendar size={16} className="mt-0.5 shrink-0 text-mq-accent" />
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Inicio
            </dt>
            <dd className="font-medium text-slate-900">{summary.startedLabel}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <CreditCard size={16} className="mt-0.5 shrink-0 text-mq-accent" />
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Vence
            </dt>
            <dd className="font-medium text-slate-900">{summary.expiresLabel}</dd>
          </div>
        </div>
      </dl>
    </section>
  );
}
