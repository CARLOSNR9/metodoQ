"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Lock, RotateCcw, Sparkles } from "lucide-react";
import { useUserProfile } from "@/hooks/use-user-profile";
import {
  getTodayFailedQuestions,
  type FailedQuestionRecord,
} from "@/lib/training/failed-questions";
import { getRepasoCierreStatus, type RepasoCierreStatus } from "@/lib/training/repaso-cierre";

type RefuerzoViewProps = {
  userId: string;
};

export function RefuerzoView({ userId }: RefuerzoViewProps) {
  const { profile } = useUserProfile();
  const [failed, setFailed] = useState<FailedQuestionRecord[]>([]);
  const [cierreStatus, setCierreStatus] = useState<RepasoCierreStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const [items, status] = await Promise.all([
          getTodayFailedQuestions(userId),
          getRepasoCierreStatus(userId, profile, profile?.planStartedAt),
        ]);
        if (!mounted) return;
        setFailed(items);
        setCierreStatus(status);
      } catch (error) {
        console.error("No se pudo cargar refuerzo.", error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId, profile]);

  const pending = failed.filter((item) => !item.resolved);
  const resolved = failed.filter((item) => item.resolved);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
              Segunda oportunidad
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">Refuerzo</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Cada error del día queda registrado aquí. Repasa sin presión y, al cerrar tu
              misión, enfrenta el examen final solo con lo que aún no dominas.
            </p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mq-accent/10 text-mq-accent ring-1 ring-mq-accent/25">
            <RotateCcw size={28} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Falladas hoy" value={failed.length} />
        <StatCard label="Pendientes" value={pending.length} accent />
        <StatCard label="Dominadas en refuerzo" value={resolved.length} />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Examen de cierre del día</h2>
            <p className="mt-1 text-sm text-slate-500">
              Se desbloquea al completar tu misión diaria. Solo incluye fallas pendientes.
            </p>
          </div>
          {isLoading ? (
            <div className="h-11 w-40 animate-pulse rounded-xl bg-slate-50" />
          ) : cierreStatus?.cierreAvailable ? (
            <Link
              href={`/dashboard/entrenar?mode=repaso-cierre&count=${pending.length}`}
              className="mq-premium-glow inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground hover:brightness-110"
            >
              <Sparkles size={16} />
              Iniciar cierre ({pending.length})
            </Link>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 text-sm font-bold text-slate-500">
              <Lock size={16} />
              Bloqueado
            </span>
          )}
        </div>
        {!isLoading && cierreStatus?.cierreLockedReason ? (
          <p className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
            {cierreStatus.cierreLockedReason}
          </p>
        ) : null}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-slate-900">Preguntas falladas hoy</h2>
          {pending.length > 0 ? (
            <Link
              href={`/dashboard/entrenar?mode=repaso&count=${pending.length}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-mq-accent/30 bg-mq-accent/10 px-5 text-sm font-bold text-mq-accent hover:bg-mq-accent/20"
            >
              Repasar ahora
              <ArrowRight size={16} />
            </Link>
          ) : null}
        </div>

        {isLoading ? (
          <ul className="space-y-3">
            {[1, 2, 3].map((key) => (
              <li key={key} className="h-20 animate-pulse rounded-xl bg-slate-50" />
            ))}
          </ul>
        ) : failed.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate-200 py-12 text-center">
            <CheckCircle2 className="text-emerald-400" size={32} />
            <p className="text-sm font-semibold text-slate-900">Sin fallas registradas hoy</p>
            <p className="max-w-sm text-xs text-slate-500">
              Entrena, completa bloques o el reto del día: aquí aparecerá cada pregunta que
              no aciertes.
            </p>
            <Link
              href="/dashboard/entrenar"
              className="text-sm font-bold text-mq-accent hover:underline"
            >
              Ir a entrenar
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {failed.map((item) => (
              <li
                key={item.id}
                className={`rounded-xl border p-4 ${
                  item.resolved
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : "border-slate-200 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start gap-3">
                  {item.resolved ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-amber-400" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-mq-accent">
                      {item.topic}
                      {item.failCount > 1 ? ` · ${item.failCount} intentos` : ""}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-900/90">
                      {item.statementPreview}
                    </p>
                    <p className="mt-2 text-[11px] text-slate-500">
                      {item.resolved ? "Resuelta en refuerzo" : "Pendiente para el cierre"}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        accent
          ? "border-mq-accent/30 bg-mq-accent/10"
          : "border-slate-200 bg-white"
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-2 text-3xl font-black ${accent ? "text-mq-accent" : "text-slate-900"}`}>
        {value}
      </p>
    </div>
  );
}
