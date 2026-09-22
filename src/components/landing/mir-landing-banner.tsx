import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Banner de cruce hacia la landing del módulo MIR (/mir). */
export function MirLandingBanner() {
  return (
    <Link
      href="/mir"
      className="relative z-[60] flex min-h-10 w-full items-center justify-center gap-2 bg-slate-900 px-4 py-2 text-center text-[11px] font-semibold text-white transition-opacity hover:opacity-90 sm:text-xs"
    >
      <span className="uppercase tracking-wider text-mq-accent">Nuevo</span>
      <span>¿Vas para el examen MIR? Conoce nuestro módulo especial</span>
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}
