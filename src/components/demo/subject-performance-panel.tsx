"use client";

import { motion } from "framer-motion";
import { AlertCircle, Sparkles, TrendingUp } from "lucide-react";
import type { SubjectStatus } from "@/lib/diagnostic/question-subject";

type SubjectPerformancePanelProps = {
  subjects: SubjectStatus[];
  subtitle?: string;
  emptyMessage?: string;
};

const SECTION_CONFIG = {
  weak: {
    title: "Refuerza primero",
    hint: "Menos del 55% de aciertos esta semana. Empieza por estas antes del examen.",
    icon: AlertCircle,
    iconClass: "text-red-500",
    borderClass: "border-red-200 bg-red-50",
    barClass: "bg-red-400",
    labelClass: "text-red-500",
  },
  ok: {
    title: "Sigue practicando",
    hint: "Vas bien esta semana, pero aún puedes subir. Un poco más de estudio y pasan a verde.",
    icon: TrendingUp,
    iconClass: "text-amber-500",
    borderClass: "border-amber-200 bg-amber-50",
    barClass: "bg-amber-400",
    labelClass: "text-amber-600",
  },
  strong: {
    title: "Lo dominas",
    hint: "70% o más de aciertos esta semana. Mantén repaso ligero para no perderlo.",
    icon: Sparkles,
    iconClass: "text-emerald-500",
    borderClass: "border-emerald-200 bg-emerald-50",
    barClass: "bg-emerald-400",
    labelClass: "text-emerald-600",
  },
} as const;

function SubjectBar({ subject, barClass }: { subject: SubjectStatus; barClass: string }) {
  const buenas = subject.score;
  const malas = 100 - buenas;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="truncate font-semibold text-slate-900">{subject.label}</span>
        <span className="shrink-0 text-slate-500 text-[10px]">
          <span className="font-bold text-emerald-600">
            {buenas}% Buenas ({subject.correct})
          </span>
          {" · "}
          <span className="font-bold text-red-500/90">
            {malas}% Malas ({subject.wrong})
          </span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-red-500/20">
        <motion.div
          className={`h-full rounded-full ${barClass}`}
          initial={{ width: 0 }}
          animate={{ width: `${buenas}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SubjectSection({
  status,
  subjects,
}: {
  status: keyof typeof SECTION_CONFIG;
  subjects: SubjectStatus[];
}) {
  if (subjects.length === 0) return null;

  const config = SECTION_CONFIG[status];
  const Icon = config.icon;

  return (
    <div className={`space-y-3 rounded-2xl border p-4 ${config.borderClass}`}>
      <div className="flex items-start gap-2">
        <Icon size={16} className={`mt-0.5 shrink-0 ${config.iconClass}`} />
        <div className="min-w-0 space-y-0.5">
          <h5 className={`text-xs font-black uppercase tracking-wider ${config.labelClass}`}>
            {config.title}{" "}
            <span className="font-bold text-slate-900/70">({subjects.length})</span>
          </h5>
          <p className="text-[10px] leading-relaxed text-slate-500">{config.hint}</p>
        </div>
      </div>
      <div className="space-y-3">
        {subjects.map((subject) => (
          <SubjectBar key={subject.key} subject={subject} barClass={config.barClass} />
        ))}
      </div>
    </div>
  );
}

export function SubjectPerformancePanel({
  subjects,
  subtitle,
  emptyMessage = "Esta semana aún no hay práctica por asignatura. Completa diagnóstico, retos o entrenamiento (los simulacros no cuentan).",
}: SubjectPerformancePanelProps) {
  const weak = subjects.filter((s) => s.status === "weak");
  const ok = subjects.filter((s) => s.status === "ok");
  const strong = subjects.filter((s) => s.status === "strong");

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
          Anatomía de tus fallos
        </h4>
        <p className="text-[10px] text-slate-500">
          {subtitle ??
            "Temas de debilidad y de mejora de esta semana (domingo a domingo)."}
        </p>
      </div>

      {subjects.length === 0 ? (
        <div className="flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 text-center text-xs text-slate-500">
          {emptyMessage}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 p-3 text-center">
              <p className="text-2xl font-black text-red-600 leading-none">{weak.length}</p>
              <p className="mt-1.5 text-[9px] font-bold uppercase tracking-tight text-red-700/80">
                A reforzar
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 p-3 text-center">
              <p className="text-2xl font-black text-amber-600 leading-none">{ok.length}</p>
              <p className="mt-1.5 text-[9px] font-bold uppercase tracking-tight text-amber-700/80">
                En progreso
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-center">
              <p className="text-2xl font-black text-emerald-600 leading-none">{strong.length}</p>
              <p className="mt-1.5 text-[9px] font-bold uppercase tracking-tight text-emerald-700/80">
                Dominadas
              </p>
            </div>
          </div>

          <div className="max-h-[28rem] space-y-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
            <SubjectSection status="weak" subjects={weak} />
            <SubjectSection status="ok" subjects={ok} />
            <SubjectSection status="strong" subjects={strong} />
          </div>
        </>
      )}
    </div>
  );
}
