import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, Target, ArrowRight } from "lucide-react";

export type FinalResultsScreenProps = {
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalSeconds: number;
  avgResponseTime: number;
  onRepeatDemo: () => void;
  className?: string;
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
  onRepeatDemo,
  className,
}: FinalResultsScreenProps) {
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
            Análisis de Desempeño
          </div>

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

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {profile.title}
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-mq-muted sm:text-lg">
            {profile.message}
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
              <h4 className="text-sm font-bold text-white">Tu brecha para la plaza</h4>
              <p className="mt-1 text-sm leading-relaxed text-mq-muted">
                Estás a <span className="text-white font-bold">{80 - scorePercentage} puntos</span> de alcanzar el promedio competitivo. Con Método Q podrías cerrar esta brecha en solo <span className="text-white font-bold text-mq-accent">4 semanas de entrenamiento activo</span>.
              </p>
            </div>
          </div>
        </motion.div>

        <footer className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#precios"
            className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.5)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
          >
            Ver Plan de Mejora Personalizado
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            onClick={onRepeatDemo}
            className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
          >
            Repetir Diagnóstico
          </button>
        </footer>
      </motion.article>
    </div>
  );
}

