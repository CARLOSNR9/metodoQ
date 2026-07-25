import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, Target, ArrowRight, Lock, Sparkles, BookOpenCheck } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import {
  getRecommendedUpgradePlanId,
  hasPaidPlan,
  hasProFeatures,
  normalizeUserPlan,
  type StoredUserPlan,
} from "@/lib/plans/access";
import { Act2PredictiveDashboard } from "./act2-predictive-dashboard";
import { ScoreComparisonCards } from "./score-comparison-cards";
import type { UccBlockCompletionCTA } from "@/lib/training/ucc-mi-daily-plan";
import { UccConvocatoriaResultsPanel } from "@/components/dashboard/ucc-convocatoria-results-panel";
import { SessionQuestionReview } from "@/components/demo/session-question-review";

export type FinalResultsScreenProps = {
  /** Puntaje de esta sesión (%). */
  scorePercentage: number;
  /** Promedio global tras incluir esta sesión (%). */
  cumulativeScorePercentage?: number;
  totalQuestionsAnswered?: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalSeconds: number;
  avgResponseTime: number;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
  sessionQuestions?: TrainingQuestion[];
  answersByQuestionId?: Record<string, string>;
  onRepeatDemo: () => void;
  className?: string;
  source?: string | null;
  university?: string | null;
  specialty?: string | null;
  userPlan?: StoredUserPlan | null;
  uccBlockCompletion?: UccBlockCompletionCTA | null;
  onContinueNextUccBlock?: () => void;
  /** En /dashboard/entrenar, evita enlazar a la misma ruta (no navega). */
  preferDashboardReturn?: boolean;
  convocatoriaEdition?: string | null;
  savedResultId?: string | null;
};

function getPerformanceProfile(scorePercentage: number) {
  if (scorePercentage < 50) {
    return {
      title: "Bases por Fortalecer",
      message: "Tu nivel actual muestra vacíos importantes que el examen de residencia no perdona.",
      color: "#f43f5e", // rose-500
      badge: "Necesita Refuerzo",
    };
  }
  if (scorePercentage <= 75) {
    return {
      title: "Nivel Intermedio",
      message: "Tienes buen conocimiento, pero te falta la precisión clínica para asegurar tu plaza.",
      color: "#00d1ff", // mq-accent
      badge: "Cerca de la Meta",
    };
  }
  return {
    title: "Nivel Competitivo",
    message: "Excelente dominio. Estás en el rango de los médicos que obtienen plaza.",
    color: "#10b981", // emerald-500
    badge: "Alta Probabilidad",
  };
}

export function FinalResultsScreen({
  scorePercentage,
  correctAnswers,
  wrongAnswers,
  totalSeconds,
  avgResponseTime,
  correctTopics = {},
  wrongTopics = {},
  onRepeatDemo,
  className,
  source,
  university,
  specialty,
  sessionQuestions,
  answersByQuestionId,
  cumulativeScorePercentage,
  totalQuestionsAnswered = 0,
  userPlan,
  uccBlockCompletion = null,
  onContinueNextUccBlock,
  preferDashboardReturn = false,
  convocatoriaEdition = null,
  savedResultId = null,
}: FinalResultsScreenProps) {
  const isAct1 = source === "act1";
  const isDailyPill = source === "daily-pill";
  const isConvocatoria = source === "convocatoria";
  const normalizedPlan = normalizeUserPlan(userPlan ?? undefined);
  const isFreePlan = normalizedPlan === "FREE";
  const isProUser = hasProFeatures(userPlan);
  const isResidenteUser = normalizedPlan === "RESIDENTE";
  const isPaidUser = hasPaidPlan(userPlan);
  const upgradePlanId = getRecommendedUpgradePlanId(userPlan);
  const repeatDiagnosticHref =
    university && specialty
      ? `/dashboard/diagnostico?source=act1&university=${encodeURIComponent(university)}&specialty=${encodeURIComponent(specialty)}`
      : "/dashboard/diagnostico?source=act1";
  const sessionScore = scorePercentage;
  const globalScore = cumulativeScorePercentage ?? sessionScore;
  const profile = getPerformanceProfile(sessionScore);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (sessionScore / 100) * circumference;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  const hasUccBlockFlow = Boolean(uccBlockCompletion);

  const uccPrimaryLabel = uccBlockCompletion?.nextBlock
    ? `Siguiente: ${uccBlockCompletion.nextBlock.label}`
    : "Ver misión del día";

  const uccPrimaryHref =
    uccBlockCompletion?.nextHref ?? uccBlockCompletion?.dashboardHref ?? "/dashboard";

  const trainingContinueHref = preferDashboardReturn ? "/dashboard" : "/dashboard/entrenar";
  const trainingContinueLabel = preferDashboardReturn
    ? "Volver al dashboard"
    : "Continuar entrenamiento";

  return (
    <div className={`mt-10 flex w-full max-w-4xl flex-col items-center px-4 ${className ?? ""}`}>
      <motion.article 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0C1425]/80 p-6 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] sm:p-10"
      >
        {/* Decorative background effects */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-mq-accent/10 blur-[80px]" />
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-[80px]" />

        <header className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-mq-accent">
            <TrendingUp className="h-3 w-3" />
            {isDailyPill ? "ESTADO DEL RETO" : "Análisis de Desempeño"}
          </div>

          {isDailyPill ? (
             <div className="relative mb-8 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 100 }}
                  className={`flex h-32 w-32 items-center justify-center rounded-full ${scorePercentage === 100 ? 'bg-mq-accent/20 text-mq-accent shadow-[0_0_50px_rgba(0,209,255,0.3)]' : 'bg-rose-500/20 text-rose-500'}`}
                >
                  {scorePercentage === 100 ? (
                    <span className="text-6xl">🏆</span>
                  ) : (
                    <span className="text-6xl">❌</span>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <p className={`text-2xl font-black uppercase tracking-tighter ${scorePercentage === 100 ? 'text-mq-accent' : 'text-rose-500'}`}>
                    {scorePercentage === 100 ? "RETO CONSEGUIDO" : "RETO FALLIDO"}
                  </p>
                  {scorePercentage === 100 && (
                    <p className="text-[10px] font-bold text-mq-accent/60 uppercase tracking-[0.2em]">Trofeo Ganado - Día 1</p>
                  )}
                </motion.div>
             </div>
          ) : (
            <div className="relative mb-8 flex h-40 w-40 items-center justify-center">
              {/* SVG Radial Progress */}
              <svg className="h-full w-full -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="stroke-white/5"
                  strokeWidth="8"
                  fill="transparent"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke={profile.color}
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-4xl font-black text-slate-900"
                >
                  {sessionScore}%
                </motion.span>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                  Esta sesión
                </span>
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {isDailyPill
              ? sessionScore === 100
                ? "¡Dosis Inyectada!"
                : "Casi lo logras, Doc"
              : isConvocatoria
                ? `Convocatoria ${convocatoriaEdition ?? "UCC"}`
                : isAct1
                  ? "Diagnóstico Predictivo de Plaza"
                  : profile.title}
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            {isDailyPill
              ? sessionScore === 100
                ? "Tu agilidad clínica hoy ha sido impecable. Has ganado el trofeo del día y tu racha se mantiene activa."
                : "La medicina no es lineal, pero la constancia sí. Mañana tendrás una nueva oportunidad para redimirte."
              : isConvocatoria
                ? `Obtuviste ${correctAnswers} aciertos de ${sessionQuestions?.length ?? 100}. Revisa el radar por eje y la retroalimentación de cada pregunta abajo.`
                : isAct1
                  ? `Hemos calibrado tus resultados contra el histórico de la ${university} para la especialidad de ${specialty}.`
                  : profile.message}
          </p>

          {(isDailyPill || isAct1) && cumulativeScorePercentage !== undefined && (
            <ScoreComparisonCards
              globalScorePercentage={globalScore}
              lastSessionScore={sessionScore}
              totalQuestionsAnswered={totalQuestionsAnswered}
              className="mt-8 max-w-lg"
            />
          )}
        </header>

        <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Tiempo Total</p>
              <p className="text-lg font-bold text-slate-900">{formatTime(totalSeconds)}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Velocidad</p>
              <p className="text-lg font-bold text-slate-900">{avgResponseTime}s <span className="text-xs font-normal text-slate-500">/ preg</span></p>
            </div>
          </motion.div>
        </div>

        {/* 2. BLOQUE DE ANÁLISIS PREDICTIVO (GRAFICAS) - SOLO PARA DIAGNÓSTICO (NO DAILY PILL) */}
        {!isDailyPill && isConvocatoria && sessionQuestions && answersByQuestionId ? (
          <UccConvocatoriaResultsPanel
            correctAnswers={correctAnswers}
            totalQuestions={sessionQuestions.length}
            sessionQuestions={sessionQuestions}
            answersByQuestionId={answersByQuestionId}
          />
        ) : null}

        {!isDailyPill && !isConvocatoria && (
          <section className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
            <Act2PredictiveDashboard 
               scorePercentage={globalScore}
               lastSessionScore={sessionScore}
               university={university ?? null}
               specialty={specialty ?? null}
               totalQuestionsAnswered={totalQuestionsAnswered}
               correctTopics={correctTopics}
               wrongTopics={wrongTopics}
               sessionQuestions={sessionQuestions}
               answersByQuestionId={answersByQuestionId}
            />
          </section>
        )}

        {isDailyPill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`relative z-10 mt-8 overflow-hidden rounded-2xl border p-6 ${
              upgradePlanId === "RESIDENTE"
                ? "border-amber-400/25 bg-amber-400/5"
                : isResidenteUser
                  ? "border-emerald-500/25 bg-emerald-500/5"
                  : "border-mq-accent/20 bg-mq-accent/5"
            }`}
          >
            <div
              className={`absolute -right-4 -top-4 h-16 w-16 blur-2xl ${
                upgradePlanId === "RESIDENTE"
                  ? "bg-amber-400/10"
                  : isResidenteUser
                    ? "bg-emerald-500/10"
                    : "bg-mq-accent/10"
              }`}
            />
            <div className="flex items-start gap-4">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  upgradePlanId === "RESIDENTE"
                    ? "bg-amber-400/20 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                    : isResidenteUser
                      ? "bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      : "bg-mq-accent/20 text-mq-accent shadow-[0_0_15px_rgba(0,210,255,0.2)]"
                }`}
              >
                <Sparkles size={20} />
              </div>
              <div className="space-y-2">
                {upgradePlanId === "PRO" ? (
                  <>
                    <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                      ¿Quieres más que una píldora?
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-500">
                      Los usuarios <span className="text-mq-accent font-bold">PRO</span> resuelven{" "}
                      <span className="text-slate-900 font-bold">5 retos diarios</span> especializados en
                      sus debilidades. No dejes tu plaza al azar.
                    </p>
                    <Link
                      href="/dashboard/planes"
                      className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-mq-accent hover:underline"
                    >
                      Ver beneficios PRO <ArrowRight size={10} className="ml-1" />
                    </Link>
                  </>
                ) : upgradePlanId === "RESIDENTE" ? (
                  <>
                    <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                      ¿Quieres asegurar tu plaza?
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-500">
                      Ya tienes acceso <span className="text-mq-accent font-bold">PRO</span>. El plan{" "}
                      <span className="text-amber-200 font-bold">Residente</span> suma seguimiento 1
                      a 1, preparación para entrevistas y acompañamiento personalizado hasta el día del
                      examen.
                    </p>
                    <Link
                      href="/residente"
                      className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-amber-200 hover:underline"
                    >
                      Postular a Residente <ArrowRight size={10} className="ml-1" />
                    </Link>
                  </>
                ) : (
                  <>
                    <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                      Sigues en el camino correcto
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-500">
                      Tu plan <span className="text-emerald-300 font-bold">Residente</span> incluye
                      seguimiento personalizado. Mantén la racha y revisa tu radar de debilidades en el
                      panel.
                    </p>
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-300 hover:underline"
                    >
                      Volver al panel <ArrowRight size={10} className="ml-1" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {!isDailyPill && hasUccBlockFlow && uccBlockCompletion ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="relative z-10 mt-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">
                  {uccBlockCompletion.completedBlock.label} completado
                </p>
                <p className="mt-1 text-sm leading-relaxed text-emerald-100/90">
                  {uccBlockCompletion.nextBlock
                    ? `Tu misión de hoy continúa con ${uccBlockCompletion.nextBlock.label.toLowerCase()}.`
                    : "Completaste los tres bloques de hoy. Revisa tu misión en el panel para cerrar el día o hacer bonus."}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {!isDailyPill && !isConvocatoria && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative z-10 mt-6 rounded-2xl border border-white/5 bg-gradient-to-br from-mq-accent/10 to-indigo-500/5 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {scorePercentage >= 80 ? "Nivel de Residente" : "Tu brecha para la plaza"}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {scorePercentage >= 90 ? (
                    <>Estás en el <span className="text-slate-900 font-bold">Top 1%</span> de aspirantes. Mantén este ritmo para asegurar tu primera opción de plaza.</>
                  ) : scorePercentage >= 80 ? (
                    isProUser ? (
                      <>Tu puntaje actual es <span className="text-slate-900 font-bold">superior al promedio</span> de ingreso. Usa simulacros y la píldora diaria para blindar este resultado.</>
                    ) : (
                      <>Tu puntaje actual es <span className="text-slate-900 font-bold">superior al promedio</span> de ingreso. Método Q te ayudará a blindar este resultado.</>
                    )
                  ) : isResidenteUser ? (
                    <>Estás a <span className="text-slate-900 font-bold">{80 - scorePercentage} puntos</span> del rango competitivo. Tu plan Residente incluye seguimiento 1 a 1 para cerrar esa brecha.</>
                  ) : isProUser ? (
                    <>Estás a <span className="text-slate-900 font-bold">{80 - scorePercentage} puntos</span> del promedio competitivo. Con tu plan Pro, enfoca las próximas <span className="font-bold text-mq-accent">4 semanas</span> en tus áreas rojas del radar.</>
                  ) : (
                    <>Estás a <span className="text-slate-900 font-bold">{80 - scorePercentage} puntos</span> de alcanzar el promedio competitivo. Con Método Q podrías cerrar esta brecha en solo <span className="font-bold text-mq-accent">4 semanas de entrenamiento activo</span>.</>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <footer className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
          {isDailyPill ? (
            upgradePlanId === "PRO" ? (
              <>
                <Link
                  href="/dashboard/planes"
                  className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
                >
                  Pasar a Método Q PRO
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/dashboard"
                  className="group flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900/70 transition-all hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]"
                >
                  Volver al dashboard
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                Volver al dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )
          ) : isConvocatoria ? (
            <>
              <a
                href="#session-question-review"
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                <BookOpenCheck className="mr-2 h-4 w-4" />
                Revisar preguntas
              </a>
              <Link
                href="/dashboard/convocatorias"
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Volver a simulacros
              </Link>
              <Link
                href="/dashboard/historial"
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Ver historial
              </Link>
            </>
          ) : isAct1 && isResidenteUser ? (
            <>
              <Link
                href="/dashboard/entrenar"
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                Continuar entrenamiento
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={repeatDiagnosticHref}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Repetir diagnóstico
              </Link>
            </>
          ) : isAct1 && isProUser ? (
            <>
              <Link
                href="/residente"
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                Postular a Residente
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={repeatDiagnosticHref}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Repetir diagnóstico
              </Link>
            </>
          ) : isAct1 && isPaidUser && !isProUser ? (
            <>
              <Link
                href="/dashboard/planes"
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                Pasar a Método Q PRO
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={repeatDiagnosticHref}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Repetir diagnóstico
              </Link>
            </>
          ) : isAct1 && isFreePlan ? (
            <>
              <Link
                href="/dashboard/planes"
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                Desbloquear mi Plan de Supervivencia PRO
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/dashboard/planes"
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900/70 transition-all hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]"
              >
                <Lock className="mr-2 h-4 w-4" />
                Repetir Diagnóstico (PRO)
              </Link>
            </>
          ) : hasUccBlockFlow ? (
            <>
              {uccBlockCompletion?.nextBlock && onContinueNextUccBlock ? (
                <button
                  type="button"
                  onClick={onContinueNextUccBlock}
                  className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
                >
                  {uccPrimaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <Link
                  href={uccPrimaryHref}
                  className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
                >
                  {uccPrimaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              <Link
                href={uccBlockCompletion?.dashboardHref ?? "/dashboard"}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Volver al panel
              </Link>
            </>
          ) : isResidenteUser ? (
            <>
              <Link
                href={trainingContinueHref}
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                {trainingContinueLabel}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={onRepeatDemo}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Repetir entrenamiento
              </button>
            </>
          ) : isProUser ? (
            <>
              <Link
                href={trainingContinueHref}
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                {trainingContinueLabel}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={onRepeatDemo}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Repetir entrenamiento
              </button>
            </>
          ) : isPaidUser ? (
            <>
              <Link
                href="/dashboard/planes"
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                Pasar a Método Q PRO
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={onRepeatDemo}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Repetir entrenamiento
              </button>
            </>
          ) : (
            <>
              <Link
                href="/dashboard/planes"
                className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                Activar mis 7 días GRATIS
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={onRepeatDemo}
                className="group flex h-14 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                Repetir entrenamiento
              </button>
            </>
          )}
        </footer>
      </motion.article>

      {!isDailyPill && sessionQuestions && answersByQuestionId && sessionQuestions.length > 0 ? (
        <SessionQuestionReview
          sessionQuestions={sessionQuestions}
          answersByQuestionId={answersByQuestionId}
          savedResultId={savedResultId}
          title={
            isConvocatoria
              ? `Retroalimentación de tus ${sessionQuestions.length} preguntas`
              : "Retroalimentación de la sesión"
          }
          className="w-full"
        />
      ) : null}
    </div>
  );
}

