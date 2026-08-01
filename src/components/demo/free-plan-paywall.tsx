"use client";

import Link from "next/link";

type FreePlanPaywallProps = {
  open: boolean;
  onClose: () => void;
  onUpgradeClick?: () => void;
  scorePercentage: number;
};

function getPerformancePaywallMessage(scorePercentage: number) {
  if (scorePercentage < 50) {
    return "Tienes una gran oportunidad de mejorar con practica guiada";
  }

  if (scorePercentage <= 75) {
    return "Estas cerca. Un poco mas de entrenamiento puede marcar la diferencia";
  }

  return "Tienes buen nivel. Ahora es momento de consolidarlo";
}

export function FreePlanPaywall({
  open,
  onClose,
  onUpgradeClick,
  scorePercentage,
}: FreePlanPaywallProps) {
  if (!open) {
    return null;
  }

  const performanceMessage = getPerformancePaywallMessage(scorePercentage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="free-plan-paywall-title"
    >
      <div className="mq-fade-up w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl will-change-transform sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-mq-accent">
          Metodo Q
        </p>
        <h2
          id="free-plan-paywall-title"
          className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Ya diste el primer paso 🚀
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          {performanceMessage}
        </p>
        <p className="mt-2 text-sm font-bold text-mq-accent sm:text-base">
          No más estudio perdido, solo lo que necesitas
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Acceso limitado a sesiones en vivo
        </p>
        <p className="mt-1 text-sm text-slate-500">
          +500 médicos ya están entrenando
        </p>
        <p className="mt-3 text-sm font-semibold text-slate-700">
          Tu progreso depende de lo que hagas hoy
        </p>

        <ul className="mt-5 space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <li className="text-sm font-medium text-slate-700">- Clases en vivo con médicos aprobados</li>
          <li className="text-sm font-medium text-slate-700">- Estrategias reales para tu examen</li>
          <li className="text-sm font-medium text-slate-700">- Preguntas y simulacros ilimitados</li>
          <li className="text-sm font-medium text-slate-700">- Análisis de rendimiento avanzado</li>
        </ul>

        <div className="mt-7 grid gap-3">
          <Link
            href="/upgrade"
            onClick={onUpgradeClick}
            className="mq-premium-glow inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-5 text-base font-bold text-[#0A1F44] transition duration-150 hover:scale-[1.02] active:scale-[0.98]"
          >
            Desbloquear acceso completo
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-600 transition duration-150 hover:bg-slate-50 hover:text-slate-900"
          >
            Seguir luego
          </button>
        </div>
      </div>
    </div>
  );
}
