"use client";

import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";
import { toStandardizedScore } from "@/lib/scoring/cumulative-score";

type ScoreComparisonCardsProps = {
  globalScorePercentage: number;
  lastSessionScore?: number | null;
  totalQuestionsAnswered?: number;
  className?: string;
};

export function ScoreComparisonCards({
  globalScorePercentage,
  lastSessionScore,
  totalQuestionsAnswered = 0,
  className,
}: ScoreComparisonCardsProps) {
  const showLastSession =
    typeof lastSessionScore === "number" && Number.isFinite(lastSessionScore);
  const globalStandardized = toStandardizedScore(globalScorePercentage);
  const sessionStandardized = showLastSession
    ? toStandardizedScore(lastSessionScore)
    : null;

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
          <Globe size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Promedio global
          </span>
        </motion.div>
        <p className="text-3xl font-black text-white">{globalScorePercentage}%</p>
        <p className="mt-1 text-xs text-mq-muted">
          {globalStandardized} estandarizado
          {totalQuestionsAnswered > 0
            ? ` · ${totalQuestionsAnswered} preguntas en total`
            : ""}
        </p>
        <p className="mt-2 text-[10px] leading-relaxed text-mq-muted/80">
          Diagnóstico + retos diarios + entrenamiento acumulados.
        </p>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
        whileHover={{ scale: 1.01 }}
      >
        <div className="mb-3 flex items-center gap-2 text-amber-300/90">
          <Zap size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Última sesión
          </span>
        </div>
        {showLastSession ? (
          <>
            <p className="text-3xl font-black text-white">{lastSessionScore}%</p>
            <p className="mt-1 text-xs text-mq-muted">
              {sessionStandardized} estandarizado · intento más reciente
            </p>
            {lastSessionScore !== globalScorePercentage && (
              <p className="mt-2 text-[10px] leading-relaxed text-amber-200/70">
                {lastSessionScore > globalScorePercentage
                  ? "Subió tu última sesión; el promedio global se actualiza con todas las preguntas."
                  : "Tu última sesión fue más baja; el promedio global refleja todo tu historial."}
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-mq-muted">Sin sesiones registradas aún.</p>
        )}
      </motion.div>
    </motion.div>
  );
}
