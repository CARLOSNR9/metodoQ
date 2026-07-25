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
    hint: "Menos del 55% de aciertos. Empieza por estas antes del examen.",
    icon: AlertCircle,
    iconClass: "text-red-400",
    borderClass: "border-red-500/20 bg-red-500/[0.04]",
    barClass: "bg-red-400",
    labelClass: "text-red-200",
  },
  ok: {
    title: "Sigue practicando",
    hint: "Vas bien, pero aún puedes subir. Un poco más de estudio y pasan a verde.",
    icon: TrendingUp,
    iconClass: "text-amber-400",
    borderClass: "border-amber-500/20 bg-amber-500/[0.04]",
    barClass: "bg-amber-400",
    labelClass: "text-amber-200",
  },
  strong: {
    title: "Lo dominas",
    hint: "70% o más de aciertos. Mantén repaso ligero para no perderlo.",
    icon: Sparkles,
    iconClass: "text-emerald-400",
    borderClass: "border-emerald-500/20 bg-emerald-500/[0.04]",
    barClass: "bg-emerald-400",
    labelClass: "text-emerald-200",
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
          <span className="font-bold text-emerald-400">{buenas}% Buenas</span> {" · "}
          <span className="font-bold text-red-400/80">{malas}% Malas</span>
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
  emptyMessage = "Completa el diagnóstico para ver tu desempeño por asignatura.",
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
          {subtitle ?? "Cuánto aciertas en cada asignatura. Más barra = mejor rendimiento."}
        </p>
      </div>

      {subjects.length === 0 ? (
        <div className="flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 text-center text-xs text-slate-500">
          {emptyMessage}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-center">
              <p className="text-lg font-black text-red-300">{weak.length}</p>
              <p className="text-[9px] font-bold uppercase tracking-wide text-red-200/80">
                A reforzar
              </p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-center">
              <p className="text-lg font-black text-amber-300">{ok.length}</p>
              <p className="text-[9px] font-bold uppercase tracking-wide text-amber-200/80">
                En progreso
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center">
              <p className="text-lg font-black text-emerald-300">{strong.length}</p>
              <p className="text-[9px] font-bold uppercase tracking-wide text-emerald-200/80">
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
