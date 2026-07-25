"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Ambulance,
  BookOpen,
  CheckCircle2,
  Clock,
  FlaskConical,
  Flag,
  Layers,
  Medal,
  Stethoscope,
  Target,
  Trophy,
  Users,
  XCircle,
} from "lucide-react";
import {
  buildSubjectStatusFromStats,
  type SubjectStatus,
} from "@/lib/diagnostic/question-subject";

type UccPastoInsightCardProps = {
  totalQuestions?: number;
  totalCorrect?: number;
  totalWrong?: number;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
};

const EXAM_AREAS = [
  {
    label: "Ciencias básicas",
    pct: 20,
    detail: "Farmaco, inmunología, fisiología, bioquímica",
    icon: FlaskConical,
    color: "text-cyan-400",
    barClass: "bg-cyan-400",
    borderClass: "border-cyan-500/20",
  },
  {
    label: "Clínica del adulto",
    pct: 50,
    detail: "Cardio, infecto, neumo, neuro, nefro, endocrino",
    icon: Stethoscope,
    color: "text-mq-accent",
    barClass: "bg-mq-accent",
    borderClass: "border-mq-accent/25",
  },
  {
    label: "APS y urgencias",
    pct: 20,
    detail: "Epidemiología, Res. 3280, toxicología, MBE",
    icon: Ambulance,
    color: "text-amber-400",
    barClass: "bg-amber-400",
    borderClass: "border-amber-500/20",
  },
  {
    label: "Comprensión lectora",
    pct: 10,
    detail: "Abstracts, deontología, lectura crítica",
    icon: BookOpen,
    color: "text-purple-400",
    barClass: "bg-purple-400",
    borderClass: "border-purple-500/20",
  },
] as const;

const ROADMAP_STEPS = [
  {
    step: "01",
    title: "Prueba escrita",
    detail: "100–200 preg · 3–4 h · ≈1,8 min/preg",
    sub: "Hasta 40/60 pts en Fase I (Res. 108/2022)",
    icon: Layers,
    highlight: false,
  },
  {
    step: "02",
    title: "Percentil 75+",
    detail: "Solo los mejores pasan el filtro",
    sub: "Sin P75 no evalúan tu hoja de vida",
    icon: Flag,
    highlight: true,
  },
  {
    step: "03",
    title: "Hoja de vida",
    detail: "12 preseleccionados · 3 cupos/sem",
    sub: "Fase II: experiencia, publicaciones, mérito",
    icon: Trophy,
    highlight: false,
  },
] as const;

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
        <Medal size={14} />
      </span>
    );
  }
  if (rank === 2) {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-900/70">
        2
      </span>
    );
  }
  if (rank === 3) {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-sm font-black text-orange-300/80">
        3
      </span>
    );
  }
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-xs font-bold tabular-nums text-slate-500">
      {rank}
    </span>
  );
}

function TopicRankRow({ subject, rank }: { subject: SubjectStatus; rank: number }) {
  const barColor =
    subject.status === "strong"
      ? "bg-emerald-500"
      : subject.status === "ok"
        ? "bg-amber-400"
        : "bg-rose-500";

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rank * 0.04 }}
      className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-50 px-3 py-2.5"
    >
      <RankBadge rank={rank} />
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-xs font-bold text-slate-900">{subject.label}</span>
          <span className="shrink-0 text-[11px] tabular-nums text-slate-500">
            {subject.score}% · {subject.correct}/{subject.questions}
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-50">
          <motion.div
            className={`h-full rounded-full ${barColor}`}
            initial={{ width: 0 }}
            animate={{ width: `${subject.score}%` }}
            transition={{ duration: 0.5, delay: rank * 0.04 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function UccPastoInsightCard({
  totalQuestions = 0,
  totalCorrect = 0,
  totalWrong = 0,
  correctTopics = {},
  wrongTopics = {},
}: UccPastoInsightCardProps) {
  const accuracy =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const correctPct =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const rankedTopics = useMemo(() => {
    return buildSubjectStatusFromStats(correctTopics, wrongTopics, 50)
      .filter((s) => s.questions > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.questions - a.questions;
      })
      .slice(0, 8);
  }, [correctTopics, wrongTopics]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[2rem] border border-mq-accent/25 bg-gradient-to-br from-mq-accent/10 via-[#071428] to-purple-500/5"
    >
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/30 bg-mq-accent/10 px-3 py-1">
            <Target size={14} className="text-mq-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
              Examen UCC Pasto · Medicina Interna
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1">
            <AlertTriangle size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300">
              Percentil 75 = mínimo para evaluar HV
            </span>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-black text-slate-900 sm:text-2xl">
          Tu examen en una mirada
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-500">
          Así es la convocatoria, qué pesa en la prueba y cómo se llega al cupo.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        {/* Left: exam info */}
        <div className="space-y-6 border-b border-white/5 p-6 sm:p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
          {/* Roadmap */}
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-mq-accent">
              Cómo se pasa el examen
            </p>
            <div className="relative grid gap-3 sm:grid-cols-3">
              <div
                aria-hidden
                className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-7 hidden h-px bg-gradient-to-r from-mq-accent/40 via-rose-400/40 to-purple-400/40 sm:block"
              />
              {ROADMAP_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`relative rounded-2xl border p-4 ${
                      step.highlight
                        ? "border-rose-500/30 bg-rose-500/[0.06] shadow-[0_0_24px_-8px_rgba(244,63,94,0.35)]"
                        : "border-slate-200 bg-white/[0.03]"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest ${
                          step.highlight ? "text-rose-300" : "text-slate-500"
                        }`}
                      >
                        Paso {step.step}
                      </span>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                          step.highlight ? "bg-rose-500/20 text-rose-300" : "bg-slate-50 text-mq-accent"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                    </div>
                    <p className="text-sm font-black text-slate-900">{step.title}</p>
                    <p className="mt-1 text-[11px] leading-snug text-slate-500">{step.detail}</p>
                    <p className="mt-2 text-[10px] leading-relaxed text-slate-900/50">{step.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Content areas */}
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-mq-accent">
              De qué trata el examen
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {EXAM_AREAS.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ y: -2 }}
                    className={`rounded-xl border ${area.borderClass} bg-white/[0.03] p-4`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`rounded-lg bg-slate-50 p-1.5 ${area.color}`}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">{area.label}</p>
                          <p className="text-[10px] text-slate-500">{area.detail}</p>
                        </div>
                      </div>
                      <span className={`text-xl font-black tabular-nums ${area.color}`}>
                        {area.pct}%
                      </span>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-50">
                      <motion.div
                        className={`h-full rounded-full ${area.barClass}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${area.pct}%` }}
                        transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Footer meta */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5">
              <Clock size={14} className="text-mq-accent" />
              180 min · ritmo de simulacro
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5">
              <Users size={14} className="text-mq-accent" />
              3 cupos/semestre · 12 preseleccionados
            </span>
          </div>
        </div>

        {/* Right: user stats */}
        <div className="space-y-5 p-6 sm:p-8 lg:col-span-2">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-mq-accent">
              Tu progreso acumulado
            </p>
            <p className="text-xs text-slate-500">
              Diagnóstico + retos + entrenamiento
            </p>
          </div>

          {totalQuestions > 0 ? (
            <>
              <div className="rounded-2xl border border-slate-200 bg-white/[0.03] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Preguntas respondidas
                </p>
                <p className="mt-1 text-4xl font-black tabular-nums text-slate-900">
                  {totalQuestions}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{accuracy}% de acierto global</p>

                <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-slate-50">
                  <motion.div
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${correctPct}%` }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="h-full bg-rose-500/80"
                    initial={{ width: 0 }}
                    animate={{ width: `${100 - correctPct}%` }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
                    <div>
                      <p className="text-lg font-black tabular-nums text-emerald-300">
                        {totalCorrect}
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-wide text-emerald-200/70">
                        Buenas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-3 py-2">
                    <XCircle size={16} className="shrink-0 text-rose-400" />
                    <div>
                      <p className="text-lg font-black tabular-nums text-rose-300">
                        {totalWrong}
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-wide text-rose-200/70">
                        Malas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {rankedTopics.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Trophy size={14} className="text-amber-400" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                      Ranking por tema estudiado
                    </p>
                  </div>
                  <div className="max-h-[18rem] space-y-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
                    {rankedTopics.map((subject, i) => (
                      <TopicRankRow key={subject.key} subject={subject} rank={i + 1} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex min-h-[14rem] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 text-center">
              <Layers size={28} className="mb-3 text-mq-accent/50" />
              <p className="text-sm font-bold text-slate-900">Aún sin preguntas</p>
              <p className="mt-1 text-xs text-slate-500">
                Completa el diagnóstico o una sesión de entrenamiento para ver tus stats y ranking.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
