"use client";

import { motion } from "framer-motion";
import { TrendingDown, Info } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import {
  buildRadarChartData,
  getTopicLossesFromRadar,
} from "@/lib/diagnostic/exam-blueprint";
import {
  buildSubjectStatusFromRadar,
} from "@/lib/diagnostic/question-subject";
import { ScoreComparisonCards } from "@/components/demo/score-comparison-cards";
import { SubjectPerformancePanel } from "@/components/demo/subject-performance-panel";
import { useUserWeeklyStats } from "@/hooks/use-user-weekly-stats";
import { toStandardizedScore } from "@/lib/scoring/cumulative-score";

interface Act2PredictiveDashboardProps {
  /** Fallback si aún no hay semana cargada (sesión actual). */
  scorePercentage: number;
  lastSessionScore?: number | null;
  university: string | null;
  specialty: string | null;
  totalQuestionsAnswered?: number;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
  sessionQuestions?: TrainingQuestion[];
  answersByQuestionId?: Record<string, string>;
  userId?: string;
}

function getCutoffScore(university: string | null): number {
  const n = (university ?? "").toLowerCase();
  if (n.includes("antioquia") || n.includes("udea")) return 700;
  if (n.includes("cooperativa") && n.includes("pasto")) return 640;
  return 685;
}

export function Act2PredictiveDashboard({
  scorePercentage,
  university = "Universidad Nacional",
  specialty = "Medicina Interna",
  totalQuestionsAnswered = 0,
  correctTopics = {},
  wrongTopics = {},
  sessionQuestions,
  answersByQuestionId,
  userId,
}: Act2PredictiveDashboardProps) {
  const { weeklyStats, loading: weeklyLoading } = useUserWeeklyStats(userId);

  const hasWeeklyData = Boolean(weeklyStats && weeklyStats.totalQuestions > 0);
  const useSessionFallback = !userId && (sessionQuestions?.length || Object.keys(correctTopics).length > 0);

  const displayPercentage = hasWeeklyData
    ? weeklyStats!.scorePercentage
    : useSessionFallback
      ? scorePercentage
      : 0;
  const displayCorrect = hasWeeklyData
    ? weeklyStats!.totalCorrect
    : useSessionFallback
      ? Math.round((scorePercentage / 100) * Math.max(totalQuestionsAnswered, 0))
      : 0;
  const displayWrong = hasWeeklyData
    ? weeklyStats!.wrongAnswers
    : useSessionFallback
      ? Math.max(totalQuestionsAnswered - displayCorrect, 0)
      : 0;
  const displayTotal = hasWeeklyData
    ? weeklyStats!.totalQuestions
    : useSessionFallback
      ? totalQuestionsAnswered
      : 0;

  const standardizedScore = toStandardizedScore(displayPercentage);
  const cutoffScore = getCutoffScore(university);
  const isAdmitted = displayTotal > 0 && standardizedScore >= cutoffScore;
  const gap = cutoffScore - standardizedScore;

  const weeklyRadarData = buildRadarChartData({
    university,
    specialty,
    correctTopics: weeklyStats?.correctTopicsByName || (useSessionFallback ? correctTopics : {}),
    wrongTopics: weeklyStats?.wrongTopicsByName || (useSessionFallback ? wrongTopics : {}),
    sessionQuestions: useSessionFallback ? sessionQuestions : undefined,
    answersByQuestionId: useSessionFallback ? answersByQuestionId : undefined,
  });
  const subjectStatuses = buildSubjectStatusFromRadar(weeklyRadarData);
  const topicLosses = getTopicLossesFromRadar(
    weeklyRadarData,
    weeklyStats?.wrongTopicsByName || (useSessionFallback ? wrongTopics : {}),
  );

  const bestTopics = subjectStatuses.filter((s) => s.status === "strong").map((s) => s.label);
  const worstTopics = topicLosses.map((t) => t.name);
  const weekLabel = weeklyStats?.weekLabel;

  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      <motion.div
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Puntaje estandarizado · total semanal
        </p>
        {weeklyLoading && userId ? (
          <p className="text-sm text-slate-500">Calculando tu semana…</p>
        ) : displayTotal > 0 ? (
          <>
            <motion.div className="relative inline-block">
              <motion.h3
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-7xl font-black italic border-4 px-8 py-2 rounded-3xl ${isAdmitted ? "text-emerald-500 border-emerald-500/20" : "text-red-500 border-red-500/20"}`}
              >
                {standardizedScore}
              </motion.h3>
              <motion.div
                initial={{ rotate: -8, opacity: 0 }}
                animate={{ rotate: 12, opacity: 1 }}
                className="absolute -right-12 top-0 border-2 border-red-500 px-2 py-1 text-[10px] font-black uppercase tracking-tighter text-red-500"
              >
                {isAdmitted ? "ADMITIDO" : "NO ADMITIDO"}
              </motion.div>
            </motion.div>
            <p className="mx-auto max-w-sm text-sm text-slate-500">
              {isAdmitted
                ? "Felicidades. Tu semana te ubica en rango competitivo de cupos."
                : `Te faltan ${gap} puntos para alcanzar el umbral de corte estimado (${cutoffScore}).`}
            </p>
          </>
        ) : (
          <p className="mx-auto max-w-sm text-sm text-slate-500">
            Esta semana (domingo a domingo) aún no tienes práctica registrada.
            Los simulacros no entran en este total.
          </p>
        )}

        {!weeklyLoading && (
          <ScoreComparisonCards
            scorePercentage={displayPercentage}
            totalQuestions={displayTotal}
            totalCorrect={displayCorrect}
            wrongAnswers={displayWrong}
            weekLabel={weekLabel}
            className="mx-auto max-w-lg pt-2 text-left"
          />
        )}
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          className="rounded-[2.5rem] border border-white/5 bg-slate-50 p-8 flex flex-col gap-8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
        >
          <SubjectPerformancePanel
            subjects={subjectStatuses}
            subtitle={
              weekLabel
                ? `Debilidad y mejora de la semana ${weekLabel}. Sin simulacros.`
                : "Temas de debilidad y de mejora de esta semana (domingo a domingo). Sin simulacros."
            }
            emptyMessage="Esta semana aún no hay práctica por asignatura. Completa diagnóstico, retos o entrenamiento (los simulacros no cuentan)."
          />
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-4 rounded-3xl border border-white/5 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-500"
                animate={topicLosses.length > 0 ? { scale: [1, 1.08, 1] } : undefined}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <TrendingDown size={18} />
              </motion.div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Debilidades de la semana
              </h5>
            </div>
            {topicLosses.length > 0 ? (
              <ul className="space-y-3">
                {topicLosses.map((t) => {
                  const subjectStat = subjectStatuses.find((s) => s.label === t.name);
                  const errorRate = subjectStat ? 100 - subjectStat.score : 0;
                  return (
                    <motion.li
                      key={t.name}
                      className="flex items-center justify-between text-xs"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span className="text-slate-500">{t.name}</span>
                      <span className="font-bold text-red-400">
                        {errorRate}% errores · {t.wrong} malas
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-xs text-slate-500">
                Sin fugas críticas esta semana. Mantén el ritmo de estudio.
              </p>
            )}
          </div>

          <motion.div
            className="space-y-3 rounded-3xl border border-mq-accent/20 bg-mq-accent/5 p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-3 text-mq-accent"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Info size={18} />
              <h5 className="text-sm font-black uppercase tracking-wider">Temas a mejorar</h5>
            </motion.div>
            <p className="text-xs leading-relaxed text-slate-500">
              {bestTopics.length > 0
                ? `Esta semana dominas ${bestTopics.join(", ")}, pero `
                : "Esta semana es prioritario reforzar "}
              {worstTopics.length > 0 ? (
                <>
                  las asignaturas de{" "}
                  <span className="font-bold text-slate-900">{worstTopics.join(" y ")}</span> están
                  limitando tu puntaje semanal. Enfoca módulos clínicos y guías MSPS/INS en esas áreas.
                </>
              ) : (
                <>tu nivel semanal es sólido. Sigue con práctica diaria; los simulacros no alteran este total.</>
              )}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
