"use client";

import { ChevronRight, Stethoscope } from "lucide-react";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import { getDaysUntilMirExam } from "@/lib/mir/config";

const noopSubscribe = () => () => {};

/**
 * Franja superior de la portada: cuenta atrás real al examen MIR y acceso
 * directo a la demo gratuita. Los días se calculan en el navegador para que
 * no se queden congelados en la versión estática de la página.
 */
export function UrgencyBanner() {
  const days = useSyncExternalStore(
    noopSubscribe,
    () => getDaysUntilMirExam(),
    () => null,
  );

  return (
    <div className="relative z-[60] flex min-h-10 w-full items-center justify-center bg-[#0A1F44] px-4 py-2 text-center text-[11px] font-semibold text-white sm:text-xs">
      <Link
        href="/mir/demo"
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 transition-opacity hover:opacity-90"
      >
        <span className="flex items-center gap-1.5 font-black uppercase tracking-wider text-mq-premium-gold">
          <Stethoscope className="h-4 w-4" />
          MIR 2027 · 23 de enero
        </span>
        {days !== null && days > 0 ? (
          <span className="rounded border border-mq-premium-gold/40 bg-mq-premium-gold/10 px-2 py-0.5 font-mono font-bold tabular-nums text-mq-premium-gold">
            Faltan {days} días
          </span>
        ) : null}
        <span className="flex items-center">
          Prueba 10 preguntas reales gratis
          <ChevronRight className="ml-0.5 h-3.5 w-3.5 text-mq-premium-gold" />
        </span>
      </Link>
    </div>
  );
}
