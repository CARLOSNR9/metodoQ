"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  ReferenceLine,
} from "recharts";
import { TrendingDown, Info, AlertTriangle } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import {
  buildRadarChartData,
  getTopicLossesFromRadar,
} from "@/lib/diagnostic/exam-blueprint";
import {
  buildSubjectStatusFromRadar,
} from "@/lib/diagnostic/question-subject";
import {
  supportsDedicatedDiagnosticBattery,
} from "@/lib/diagnostic/university-match";
import { ScoreComparisonCards } from "@/components/demo/score-comparison-cards";
import { SubjectPerformancePanel } from "@/components/demo/subject-performance-panel";

interface Act2PredictiveDashboardProps {
  /** Promedio global acumulado (%). */
  scorePercentage: number;
  /** Puntaje de la última sesión completada (%). */
  lastSessionScore?: number | null;
  university: string | null;
  specialty: string | null;
  totalQuestionsAnswered?: number;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
  sessionQuestions?: TrainingQuestion[];
  answersByQuestionId?: Record<string, string>;
}

const gaussData = (() => {
  const points = [];
  const mean = 550;
  const stdDev = 150;
  for (let i = 0; i <= 1000; i += 20) {
    const exponent = -Math.pow(i - mean, 2) / (2 * Math.pow(stdDev, 2));
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
    points.push({ x: i, y });
  }
  return points;
})();

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
  lastSessionScore = null,
  totalQuestionsAnswered = 0,
  correctTopics = {},
  wrongTopics = {},
  sessionQuestions,
  answersByQuestionId,
}: Act2PredictiveDashboardProps) {
  const standardizedScore = Math.round(scorePercentage * 7.2 + 180);
  const cutoffScore = getCutoffScore(university);
  const isAdmitted = standardizedScore >= cutoffScore;
  const gap = cutoffScore - standardizedScore;
  const dedicatedDiagnostic = supportsDedicatedDiagnosticBattery(university, specialty);

  const radarData = buildRadarChartData({
    university,
    specialty,
    correctTopics,
    wrongTopics,
    sessionQuestions,
    answersByQuestionId,
  });

  const topicLosses = getTopicLossesFromRadar(radarData, wrongTopics);
  const subjectStatuses = buildSubjectStatusFromRadar(radarData);
  const bestTopics = subjectStatuses.filter((s) => s.status === "strong").map((s) => s.label);
  const worstTopics = topicLosses.map((t) => t.name);

  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      <motion.div
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Puntaje estandarizado · promedio global
        </p>
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
            ? "Felicidades. Estadísticamente estás dentro del rango competitivo de cupos."
            : `Te faltan ${gap} puntos para alcanzar el umbral de corte estimado (${cutoffScore}).`}
        </p>

        <ScoreComparisonCards
          globalScorePercentage={scorePercentage}
          lastSessionScore={lastSessionScore}
          totalQuestionsAnswered={totalQuestionsAnswered}
          className="mx-auto max-w-lg pt-2 text-left"
        />
      </motion.div>

      <motion.div
        className="space-y-6 rounded-[2.5rem] border border-white/5 bg-slate-50 p-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
            Distribución de aspirantes
          </h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-[10px] font-bold text-slate-500">Tú</span>
            </div>
            <div className="flex items-center gap-1.5">
              <motion.div
                className="h-2 w-2 rounded-full bg-emerald-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold text-slate-500">Corte</span>
            </div>
          </div>
        </div>

        <motion.div
          className="h-48 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={gaussData} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
              <XAxis dataKey="x" type="number" domain={["dataMin", "dataMax"]} hide />
              <defs>
                <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00d1ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="y"
                stroke="#00d1ff"
                fillOpacity={1}
                fill="url(#colorY)"
                strokeWidth={2}
              />
              <ReferenceLine
                x={standardizedScore}
                stroke="#ef4444"
                strokeWidth={3}
                label={{
                  value: "Tú",
                  position: "top",
                  fill: "#ef4444",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              />
              <ReferenceLine
                x={cutoffScore}
                stroke="#10b981"
                strokeWidth={3}
                strokeDasharray="3 3"
                label={{
                  value: "Corte",
                  position: "top",
                  fill: "#10b981",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className={`flex items-start gap-4 rounded-2xl border p-4 ${isAdmitted ? "border-emerald-500/20 bg-emerald-500/10" : "border-red-500/20 bg-red-500/10"}`}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AlertTriangle size={20} className={`mt-0.5 shrink-0 ${isAdmitted ? "text-emerald-600" : "text-red-600"}`} />
          <p className={`text-xs italic leading-relaxed ${isAdmitted ? "text-emerald-800" : "text-red-800"}`}>
            {isAdmitted
              ? `"En ${university ?? "tu universidad"}, tu promedio acumulado te ubica en rango competitivo para ${specialty ?? "tu especialidad"}, pero el examen exige constancia diaria."`
              : `"En ${university ?? "tu universidad"}, la competencia por cupos de ${specialty ?? "tu especialidad"} es alta. Tu promedio acumulado (${scorePercentage}% en ${totalQuestionsAnswered || "varias"} preguntas) aún tiene margen de mejora."`}
          </p>
        </motion.div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          className="rounded-[2.5rem] border border-white/5 bg-slate-50 p-8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
        >
          <SubjectPerformancePanel
            subjects={subjectStatuses}
            subtitle={
              dedicatedDiagnostic
                ? "Cuánto aciertas en cada asignatura de tu diagnóstico."
                : "Cuánto aciertas en cada asignatura que has practicado."
            }
            emptyMessage="Completa el diagnóstico para ver tu desempeño por asignatura."
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
                Fuga crítica de puntos
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
                      <span className="font-bold text-red-400">{errorRate}% errores</span>
                    </motion.li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-xs text-slate-500">
                Sin fugas críticas en esta sesión. Mantén el ritmo de estudio.
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
              <h5 className="text-sm font-black uppercase tracking-wider">Plan de supervivencia</h5>
            </motion.div>
            <p className="text-xs leading-relaxed text-slate-500">
              {bestTopics.length > 0
                ? `Tu dominio en ${bestTopics.join(", ")} te mantiene competitivo, pero `
                : "Es prioritario reforzar "}
              {worstTopics.length > 0 ? (
                <>
                  las asignaturas de{" "}
                  <span className="font-bold text-slate-900">{worstTopics.join(" y ")}</span> están
                  limitando tu puntaje. Enfoca módulos clínicos y guías MSPS/INS en esas áreas.
                </>
              ) : (
                <>tu nivel en esta sesión es sólido. Sigue con simulacros cronometrados.</>
              )}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
