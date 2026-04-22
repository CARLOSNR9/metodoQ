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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/85 px-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="free-plan-paywall-title"
    >
      <div className="mq-fade-up w-full max-w-xl rounded-3xl border border-[#27406B] bg-[#06132B] p-5 shadow-[0_28px_80px_-28px_rgb(0_209_255/0.6)] will-change-transform sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-accent">
          Metodo Q
        </p>
        <h2
          id="free-plan-paywall-title"
          className="mt-3 text-2xl font-semibold text-white sm:text-3xl"
        >
          Ya diste el primer paso 🚀
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#BFD0EC] sm:text-base">
          {performanceMessage}
        </p>
        <p className="mt-2 text-sm font-semibold text-mq-accent sm:text-base">
          No más estudio perdido, solo lo que necesitas
        </p>
        <p className="mt-3 text-sm text-[#DCE7FA]">
          Acceso limitado a sesiones en vivo
        </p>
        <p className="mt-3 text-sm text-[#DCE7FA]">
          +500 médicos ya están entrenando
        </p>
        <p className="mt-1 text-sm font-medium text-[#BFD0EC]">
          Tu progreso depende de lo que hagas hoy
        </p>

        <ul className="mt-5 space-y-2 rounded-2xl border border-[#27406B] bg-[#0A1F44]/70 p-4">
          <li className="text-sm text-[#DCE7FA]">- Clases en vivo con médicos aprobados</li>
          <li className="text-sm text-[#DCE7FA]">- Estrategias reales para tu examen</li>
          <li className="text-sm text-[#DCE7FA]">- Preguntas y simulacros ilimitados</li>
          <li className="text-sm text-[#DCE7FA]">- Análisis de rendimiento avanzado</li>
        </ul>

        <div className="mt-7 grid gap-3">
          <Link
            href="/upgrade"
            onClick={onUpgradeClick}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-[#00D1FF] px-5 text-base font-semibold text-[#04203C] transition duration-150 hover:brightness-110"
          >
            Desbloquear acceso completo
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-[#3B5684] bg-white/[0.03] px-5 text-base font-semibold text-[#DCE7FA] transition duration-150 hover:border-[#5F7CAF] hover:bg-white/[0.07]"
          >
            Seguir luego
          </button>
        </div>
      </div>
    </div>
  );
}
