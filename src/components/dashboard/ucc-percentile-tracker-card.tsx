"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Target, TrendingUp } from "lucide-react";
import {
  buildUccPercentileEstimate,
  getPercentileLabel,
  getScoreForP75,
  UCC_P75_CUTOFF,
} from "@/lib/diagnostic/ucc-percentile";
import {
  buildSubjectStatusFromStats,
  type SubjectStatus,
} from "@/lib/diagnostic/question-subject";
import { getPlanWeekNumber } from "@/lib/training/ucc-mi-daily-plan";
import { useUccCohortPercentile } from "@/hooks/use-ucc-cohort-percentile";
import { Users } from "lucide-react";

type UccPercentileTrackerCardProps = {
  cumulativeScore: number;
  totalQuestions: number;
  planStartedAt?: string | null;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
};

function SubjectRow({ subject }: { subject: SubjectStatus }) {
  const barColor =
    subject.status === "strong"
      ? "bg-emerald-500"
      : subject.status === "weak"
        ? "bg-rose-500"
        : subject.status === "ok"
          ? "bg-amber-400"
          : "bg-white/20";

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="font-bold text-slate-900">{subject.label}</span>
        <span className="shrink-0 text-slate-500">
          {subject.questions > 0 ? (
            <>
              {subject.score}% · {subject.questions} preg.
            </>
          ) : (
            "—"
          )}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-50">
        <div
          className={`h-full rounded-full transition-all ${barColor}`}
          style={{ width: `${subject.questions > 0 ? subject.score : 0}%` }}
        />
      </div>
    </div>
  );
}

export function UccPercentileTrackerCard({
  cumulativeScore,
  totalQuestions,
  planStartedAt,
  correctTopics = {},
  wrongTopics = {},
}: UccPercentileTrackerCardProps) {
  const weekNumber = getPlanWeekNumber(planStartedAt);
  const estimate = useMemo(
    () =>
      buildUccPercentileEstimate({
        cumulativeScore,
        planWeekNumber: weekNumber,
        questionsPerWeek: 315,
      }),
    [cumulativeScore, weekNumber],
  );

  const subjects = useMemo(
    () => buildSubjectStatusFromStats(correctTopics, wrongTopics),
    [correctTopics, wrongTopics],
  );

  const { stats: cohortStats, loading: cohortLoading } = useUccCohortPercentile(
    cumulativeScore,
    cumulativeScore > 0,
  );

  const displayPercentile =
    cohortStats?.source === "cohort" && cohortStats.percentile !== null
      ? cohortStats.percentile
      : estimate.estimatedPercentile;

  const passesP75 = displayPercentile >= UCC_P75_CUTOFF;
  const p75Score = getScoreForP75();
  const gaugePercent = Math.min(100, displayPercentile);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-mq-accent/25 bg-mq-accent/10 px-3 py-1">
            <Target size={14} className="text-mq-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
              Percentil competitivo · Fase I
            </span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">Tu posición vs cohorte</h2>
          <p className="mt-1 text-sm text-slate-500">
            Meta UCC: percentil {UCC_P75_CUTOFF}+ para que evalúen tu hoja de vida.
          </p>
        </div>
        <div
          className={`rounded-2xl border px-5 py-3 text-right ${
            passesP75
              ? "border-emerald-500/30 bg-emerald-500/10"
              : "border-rose-500/25 bg-rose-500/10"
          }`}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            {cohortStats?.source === "cohort" ? "Percentil cohorte" : "Percentil est."}
          </p>
          <p className="text-3xl font-black text-slate-900">
            {cohortLoading ? "…" : `P${displayPercentile}`}
          </p>
          <p className="text-xs font-medium text-slate-500">
            {getPercentileLabel(displayPercentile)}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative pt-2">
            <div className="relative h-4 overflow-hidden rounded-full bg-slate-50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${gaugePercent}%` }}
                className={`absolute inset-y-0 left-0 rounded-full ${
                  passesP75 ? "bg-emerald-500" : "bg-mq-accent"
                }`}
              />
              <div
                className="absolute inset-y-0 w-0.5 bg-rose-400"
                style={{ left: `${UCC_P75_CUTOFF}%` }}
                title={`Corte P${UCC_P75_CUTOFF}`}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <span>P0</span>
              <span className="text-rose-300">P{UCC_P75_CUTOFF} corte</span>
              <span>P100</span>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Promedio acumulado
              </dt>
              <dd className="mt-1 text-xl font-black text-slate-900">{estimate.score}%</dd>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Puntaje ~P75
              </dt>
              <dd className="mt-1 text-xl font-black text-rose-300">{p75Score}%</dd>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Preguntas base
              </dt>
              <dd className="mt-1 text-xl font-black text-slate-900">{totalQuestions}</dd>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Semana plan
              </dt>
              <dd className="mt-1 text-xl font-black text-slate-900">{weekNumber}/24</dd>
            </div>
          </dl>

          {cohortStats?.source === "cohort" && cohortStats.cohortSize >= 3 && (
            <div className="flex items-start gap-3 rounded-xl border border-mq-accent/25 bg-mq-accent/10 p-4">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-mq-accent" />
              <p className="text-sm text-mq-accent">
                Cohort MetodoQ UCC:{" "}
                <span className="font-bold text-slate-900">
                  #{cohortStats.rank} de {cohortStats.cohortSize}
                </span>
                {cohortStats.p75 !== null ? (
                  <>
                    {" "}
                    · P75 cohorte ≈{" "}
                    <span className="font-bold text-slate-900">{cohortStats.p75}%</span>
                  </>
                ) : null}
              </p>
            </div>
          )}

          {!passesP75 && estimate.projectionWeeksToP75 !== null && (
            <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
              <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
              <p className="text-sm text-amber-100">
                A este ritmo (~45 preg/día), podrías alcanzar P75 en aproximadamente{" "}
                <span className="font-bold text-slate-900">
                  {estimate.projectionWeeksToP75} semana
                  {estimate.projectionWeeksToP75 === 1 ? "" : "s"}
                </span>
                . Te faltan{" "}
                <span className="font-bold text-slate-900">
                  {Math.max(0, UCC_P75_CUTOFF - displayPercentile)} pts
                </span>{" "}
                de percentil.
              </p>
            </div>
          )}

          {passesP75 && (
            <div className="flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <p className="text-sm text-emerald-100">
                Estás en zona segura (P{displayPercentile}). Mantén el ritmo diario y
                refuerza asignaturas débiles antes del examen.
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
              Desglose por asignatura
            </h3>
            {subjects.length > 0 && (
              <span className="text-[10px] text-slate-500">
                {subjects.length} asignatura{subjects.length === 1 ? "" : "s"}
              </span>
            )}
          </div>
          {subjects.length === 0 ? (
            <p className="text-xs text-slate-500">
              Responde preguntas para ver tu desempeño por asignatura.
            </p>
          ) : (
            <div className="space-y-4">
              {subjects.map((subject) => (
                <SubjectRow key={subject.key} subject={subject} />
              ))}
            </div>
          )}
          {subjects.some((subject) => subject.status === "weak") && (
            <div className="flex items-start gap-2 rounded-xl border border-rose-500/20 bg-rose-500/5 p-3">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-rose-400" />
              <p className="text-xs text-rose-100">
                Asignaturas en rojo: prioriza en bloques 1 y 3 de tu misión diaria.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
