"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Hash } from "lucide-react";
import { toStandardizedScore } from "@/lib/scoring/cumulative-score";

type ScoreComparisonCardsProps = {
  scorePercentage: number;
  totalQuestions: number;
  totalCorrect: number;
  wrongAnswers: number;
  weekLabel?: string;
  title?: string;
  subtitle?: string;
  emptyMessage?: string;
  className?: string;
};

export function ScoreComparisonCards({
  scorePercentage,
  totalQuestions,
  totalCorrect,
  wrongAnswers,
  weekLabel,
  title = "Total semanal",
  subtitle = "Diagnóstico, retos diarios y entrenamiento. Los simulacros no cuentan.",
  emptyMessage = "Aún no hay práctica esta semana. Completa preguntas para ver tu total.",
  className,
}: ScoreComparisonCardsProps) {
  const standardized = toStandardizedScore(scorePercentage);
  const hasData = totalQuestions > 0;

  return (
    <motion.div
      className={`grid gap-3 sm:grid-cols-2 ${className ?? ""}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <motion.div
        className="rounded-2xl border border-mq-accent/25 bg-mq-accent/5 p-4"
        whileHover={{ scale: 1.01 }}
      >
        <motion.div
          className="mb-3 flex items-center gap-2 text-mq-accent"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <CalendarDays size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            {title}
          </span>
        </motion.div>
        {hasData ? (
          <>
            <p className="text-3xl font-black text-slate-900">{scorePercentage}%</p>
            <p className="mt-1 text-xs text-slate-500">
              {standardized} estandarizado
              {weekLabel ? ` · ${weekLabel}` : ""}
            </p>
            <p className="mt-2 text-[10px] leading-relaxed text-slate-500/80">
              {subtitle}
            </p>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-slate-500">{emptyMessage}</p>
        )}
      </motion.div>

      <motion.div
        className="rounded-2xl border border-amber-200 bg-amber-50 p-4"
        whileHover={{ scale: 1.01 }}
      >
        <div className="mb-3 flex items-center gap-2 text-amber-600">
          <CheckCircle2 size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Desglose
          </span>
        </div>
        {hasData ? (
          <>
            <div className="flex items-baseline gap-4">
              <div>
                <p className="text-3xl font-black text-emerald-600">{totalCorrect}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700/80">
                  Buenas
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-red-500">{wrongAnswers}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-600/80">
                  Malas
                </p>
              </div>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-600">
              <Hash size={12} className="text-slate-400" />
              {totalQuestions} preguntas en total
              {weekLabel ? ` · ${weekLabel}` : ""}
            </p>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-slate-500">
            0 buenas · 0 malas · 0 preguntas esta semana.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
