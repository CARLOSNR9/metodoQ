import Link from "next/link";

export type FinalResultsScreenProps = {
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalSeconds: number;
  avgResponseTime: number;
  onRepeatDemo: () => void;
  className?: string;
};

function getPerformanceMessage(scorePercentage: number) {
  if (scorePercentage < 50) {
    return "Tienes bases debiles. Necesitas reforzar temas clave.";
  }

  if (scorePercentage <= 75) {
    return "Vas bien, pero aun tienes lagunas importantes.";
  }

  return "Buen nivel. Estas cerca de competir por una plaza.";
}

function getVelocityMessage(avgResponseTime: number) {
  if (avgResponseTime <= 45) {
    return {
      label: "Excelente",
      color: "text-emerald-400",
      description: "Tu velocidad de respuesta es óptima para el examen.",
    };
  }
  if (avgResponseTime <= 75) {
    return {
      label: "Buen ritmo",
      color: "text-mq-accent",
      description: "Estás dentro del tiempo promedio, pero podrías agilizar.",
    };
  }
  return {
    label: "Lento",
    color: "text-rose-400",
    description: "Estás tardando demasiado. En el examen real el tiempo es crítico.",
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
  const performanceMessage = getPerformanceMessage(scorePercentage);
  const velocity = getVelocityMessage(avgResponseTime);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  return (
    <div className={`mq-fade-up mt-10 flex justify-center ${className ?? ""}`}>
      <article className="w-full max-w-2xl rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 text-center shadow-[0_24px_60px_-34px_rgb(0_209_255/0.45)] sm:p-8">
        <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
          Tu nivel actual es {scorePercentage}%… pero necesitas mínimo 80% para competir
        </h2>
        <p className="mt-4 text-sm text-mq-muted sm:text-base">
          Has respondido {correctAnswers} correctas y {wrongAnswers} incorrectas
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-mq-border bg-background/50 p-4 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-mq-accent/70">
              Tiempo Total
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              {formatTime(totalSeconds)}
            </p>
          </div>
          <div className="rounded-xl border border-mq-border bg-background/50 p-4 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-mq-accent/70">
              Promedio por pregunta
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              {avgResponseTime}s
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-mq-border bg-background/50 p-5 text-left">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-mq-accent">Análisis de Resultados</p>
            <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded border border-current ${velocity.color}`}>
              Velocidad: {velocity.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-mq-muted sm:text-base">
            {performanceMessage} {velocity.description}
          </p>
        </div>

        {scorePercentage < 80 && (
          <div className="mt-4 p-4 rounded-xl bg-mq-accent/5 border border-mq-accent/20">
            <p className="text-sm font-bold text-mq-accent">
              🚀 Con Método Q puedes subir esto en semanas
            </p>
            <p className="mt-1 text-xs text-mq-muted">
              Estás a {80 - scorePercentage} puntos de una plaza de especialidad.
            </p>
          </div>
        )}


        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/#precios"
            className="touch-manipulation inline-flex min-h-14 items-center justify-center rounded-xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground shadow-[0_0_30px_rgba(0,209,255,0.4)] transition duration-200 hover:-translate-y-1 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:text-base"
          >
            Ver cómo mejorar mi puntaje
          </Link>
          <button
            type="button"
            onClick={onRepeatDemo}
            className="touch-manipulation inline-flex min-h-14 items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.03] px-7 text-sm font-semibold text-foreground transition duration-150 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:text-base"
          >
            Repetir diagnóstico
          </button>
        </div>
      </article>
    </div>
  );
}
