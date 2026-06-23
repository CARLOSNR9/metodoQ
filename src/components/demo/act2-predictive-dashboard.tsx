"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  ReferenceLine,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { TrendingDown, Info, AlertTriangle } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import {
  buildRadarChartData,
  getTopicLossesFromRadar,
} from "@/lib/diagnostic/exam-blueprint";
import {
  getSubjectPerformanceColor,
  getSubjectPerformanceLevel,
} from "@/lib/diagnostic/question-subject";
import {
  supportsDedicatedDiagnosticBattery,
} from "@/lib/diagnostic/university-match";
import { ScoreComparisonCards } from "@/components/demo/score-comparison-cards";

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
  const hasRadarValues = radarData.some((d) => d.A > 0);
  const bestTopics = radarData.filter((d) => getSubjectPerformanceLevel(d.A) === "strong").map((d) => d.subject);
  const worstTopics = topicLosses.map((t) => t.name);
  const radarOuterRadius = radarData.length > 6 ? "48%" : "55%";

  const subjectChipClass = (score: number) => {
    const level = getSubjectPerformanceLevel(score);
    if (level === "strong") {
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
    }
    if (level === "ok") {
      return "border-amber-500/30 bg-amber-500/10 text-amber-200";
    }
    return "border-red-500/30 bg-red-500/10 text-red-300";
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      <motion.div
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mq-muted">
          Puntaje estandarizado · promedio global
        </p>
        <motion.div className="relative inline-block">
          <motion.h3
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-7xl font-black italic ${isAdmitted ? "text-emerald-400" : "text-red-500"}`}
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
        <p className="mx-auto max-w-sm text-sm text-mq-muted">
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
        className="space-y-6 rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-black uppercase tracking-widest text-white">
            Distribución de aspirantes
          </h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-[10px] font-bold text-mq-muted">Tú</span>
            </div>
            <div className="flex items-center gap-1.5">
              <motion.div
                className="h-2 w-2 rounded-full bg-emerald-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold text-mq-muted">Corte</span>
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
          className="flex items-start gap-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-red-400" />
          <p className="text-xs italic leading-relaxed text-red-200">
            {isAdmitted
              ? `"En ${university ?? "tu universidad"}, tu promedio acumulado te ubica en rango competitivo para ${specialty ?? "tu especialidad"}, pero el examen exige constancia diaria."`
              : `"En ${university ?? "tu universidad"}, la competencia por cupos de ${specialty ?? "tu especialidad"} es alta. Tu promedio acumulado (${scorePercentage}% en ${totalQuestionsAnswered || "varias"} preguntas) aún tiene margen de mejora."`}
          </p>
        </motion.div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          className="flex flex-col space-y-4 rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
        >
          <motion.div className="space-y-1">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">
              Anatomía de tus fallos
            </h4>
            <p className="text-[10px] text-mq-muted">
              {dedicatedDiagnostic
                ? "Asignaturas evaluadas en tu diagnóstico"
                : "Asignaturas de las preguntas que has respondido"}
            </p>
          </motion.div>

          {radarData.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">
                Tus asignaturas
              </p>
              <div className="flex flex-wrap gap-2">
                {radarData.map((point) => (
                  <span
                    key={point.key ?? point.subject}
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${subjectChipClass(point.A)}`}
                  >
                    <span>{point.subject}</span>
                    <span className="opacity-80">{point.A}%</span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-[9px] text-mq-muted">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Fortaleza (≥70%)
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  En progreso (55–69%)
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  Debilidad (&lt;55%)
                </span>
              </div>
            </div>
          )}

          <motion.div className="h-72 w-full" layout>
            {radarData.length === 0 ? (
              <div className="flex h-full items-center justify-center text-center text-xs text-mq-muted">
                Completa el diagnóstico para ver tu perfil por asignatura.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius={radarOuterRadius} data={radarData}>
                  <PolarGrid stroke="#ffffff18" />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: "#5c6b8a", fontSize: 8 }}
                    tickCount={5}
                    axisLine={false}
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={({ x, y, payload }) => {
                      const point = radarData.find((item) => item.subject === payload?.value);
                      const color = point ? getSubjectPerformanceColor(point.A) : "#8A99B8";
                      return (
                        <text
                          x={x}
                          y={y}
                          fill={color}
                          fontSize={9}
                          fontWeight={600}
                          textAnchor="middle"
                        >
                          {payload?.value}
                        </text>
                      );
                    }}
                  />
                  <Radar
                    name="Aciertos"
                    dataKey="A"
                    stroke="#00d1ff"
                    fill="#00d1ff"
                    fillOpacity={hasRadarValues ? 0.35 : 0.1}
                    strokeWidth={2}
                    isAnimationActive
                    animationDuration={800}
                  />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {dedicatedDiagnostic && !hasRadarValues && (
            <p className="text-center text-[10px] text-mq-muted">
              Responde las 10 preguntas para trazar tu mapa de debilidades.
            </p>
          )}
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
              <h5 className="text-sm font-bold uppercase tracking-wider text-white">
                Fuga crítica de puntos
              </h5>
            </div>
            {topicLosses.length > 0 ? (
              <ul className="space-y-3">
                {topicLosses.map((t) => (
                  <motion.li
                    key={t.name}
                    className="flex items-center justify-between text-xs"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <span className="text-mq-muted">{t.name}</span>
                    <span className="font-bold text-red-400">-{t.loss} pts</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-mq-muted">
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
            <p className="text-xs leading-relaxed text-mq-muted">
              {bestTopics.length > 0
                ? `Tu dominio en ${bestTopics.join(", ")} te mantiene competitivo, pero `
                : "Es prioritario reforzar "}
              {worstTopics.length > 0 ? (
                <>
                  las asignaturas de{" "}
                  <span className="font-bold text-white">{worstTopics.join(" y ")}</span> están
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
