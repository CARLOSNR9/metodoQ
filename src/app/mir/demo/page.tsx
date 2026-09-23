import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MirDemoView } from "@/components/landing/mir-demo-view";

/**
 * Demo gratuita y anónima del módulo MIR (sin login, sin selección de
 * universidad ni especialidad — irrelevantes para este examen). Preguntas
 * reales tomadas del banco MIR de Método Q.
 */
export default function MirDemoPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#0A1F44] px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/mir"
        className="mx-auto mb-8 flex w-full max-w-2xl items-center gap-2 text-xs font-bold text-slate-400 transition hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al módulo MIR
      </Link>
      <MirDemoView />
    </main>
  );
}
