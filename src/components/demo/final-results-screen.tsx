import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, Target, ArrowRight, Lock, Sparkles } from "lucide-react";

export type FinalResultsScreenProps = {
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalSeconds: number;
  avgResponseTime: number;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
  onRepeatDemo: () => void;
  className?: string;
  source?: string | null;
  university?: string | null;
  specialty?: string | null;
};

import { Act2PredictiveDashboard } from "./act2-predictive-dashboard";

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
}: FinalResultsScreenProps) {
  const isAct1 = source === "act1";
  const isDailyPill = source === "daily-pill";
  const profile = getPerformanceProfile(scorePercentage);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scorePercentage / 100) * circumference;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  return (
    <div className={`mt-10 flex justify-center px-4 ${className ?? ""}`}>
      <motion.article 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0C1425]/80 p-6 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] sm:p-10"
      >
        {/* Decorative background effects */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-mq-accent/10 blur-[80px]" />
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-[80px]" />

        <header className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-mq-accent">
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
                  className="text-4xl font-black text-white"
                >
                  {scorePercentage}%
                </motion.span>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-mq-muted">Puntaje</span>
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {isDailyPill ? (scorePercentage === 100 ? "¡Dosis Inyectada!" : "Casi lo logras, Doc") : isAct1 ? "Diagnóstico Predictivo de Plaza" : profile.title}
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-mq-muted sm:text-lg">
            {isDailyPill
              ? (scorePercentage === 100 
                  ? "Tu agilidad clínica hoy ha sido impecable. Has ganado el trofeo del día y tu racha se mantiene activa."
                  : "La medicina no es lineal, pero la constancia sí. Mañana tendrás una nueva oportunidad para redimirte.")
              : isAct1 
              ? `Hemos calibrado tus resultados contra el histórico de la ${university} para la especialidad de ${specialty}.`
              : profile.message
            }
          </p>
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Tiempo Total</p>
              <p className="text-lg font-bold text-white">{formatTime(totalSeconds)}</p>
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Velocidad</p>
              <p className="text-lg font-bold text-white">{avgResponseTime}s <span className="text-xs font-normal text-mq-muted">/ preg</span></p>
            </div>
          </motion.div>
        </div>

        {/* 2. BLOQUE DE ANÁLISIS PREDICTIVO (GRAFICAS) - SOLO PARA ACT 1 */}
        {isAct1 && (
          <div className="mt-12 space-y-10 border-t border-white/5 pt-10">
            <Act2PredictiveDashboard 
               scorePercentage={scorePercentage}
               university={university}
               specialty={specialty}
               correctTopics={correctTopics}
               wrongTopics={wrongTopics}
            />
          </div>
        )}

        {isDailyPill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-mq-accent/20 bg-mq-accent/5 p-6"
          >
            <div className="absolute -right-4 -top-4 h-16 w-16 bg-mq-accent/10 blur-2xl" />
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mq-accent/20 text-mq-accent shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                <Sparkles size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-white">¿Quieres más que una píldora?</h4>
                <p className="text-xs leading-relaxed text-mq-muted">
                  Los usuarios <span className="text-mq-accent font-bold">PRO</span> resuelven <span className="text-white font-bold">5 retos diarios</span> especializados en sus debilidades. No dejes tu plaza al azar.
                </p>
                <Link href="/dashboard/planes" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-mq-accent hover:underline">
                  Ver beneficios PRO <ArrowRight size={10} className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {!isDailyPill && (
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
                <h4 className="text-sm font-bold text-white">
                  {scorePercentage >= 80 ? "Nivel de Residente" : "Tu brecha para la plaza"}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-mq-muted">
                  {scorePercentage >= 90 ? (
                    <>Estás en el <span className="text-white font-bold">Top 1%</span> de aspirantes. Mantén este ritmo para asegurar tu primera opción de plaza.</>
                  ) : scorePercentage >= 80 ? (
                    <>Tu puntaje actual es <span className="text-white font-bold">superior al promedio</span> de ingreso. Método Q te ayudará a blindar este resultado.</>
                  ) : (
                    <>Estás a <span className="text-white font-bold">{80 - scorePercentage} puntos</span> de alcanzar el promedio competitivo. Con Método Q podrías cerrar esta brecha en solo <span className="text-white font-bold text-mq-accent">4 semanas de entrenamiento activo</span>.</>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <footer className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard/planes"
            className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
          >
            {isDailyPill ? "Pasar a Método Q PRO" : isAct1 ? "Desbloquear mi Plan de Supervivencia PRO" : "Activar mis 7 días GRATIS"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={isDailyPill ? "/dashboard" : "/dashboard/planes"}
            className="group flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-bold text-white/70 transition-all hover:bg-white/10 hover:text-white active:scale-[0.98]"
          >
            {isDailyPill ? "Volver al Dashboard" : (
              <>
                <Lock className="mr-2 h-4 w-4" />
                Repetir Diagnóstico (PRO)
              </>
            )}
          </Link>
        </footer>
      </motion.article>
    </div>
  );
}

