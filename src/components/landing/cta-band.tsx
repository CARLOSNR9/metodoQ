"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { trackClickDemo } from "@/lib/analytics/events";

export type CtaBandProps = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  className?: string;
};

export function CtaBand({
  title = "Tu residencia empieza hoy.",
  subtitle = "No dejes tu preparación para el último mes. Haz tu diagnóstico gratuito y descubre en qué nivel estás.",
  cta = { label: "Iniciar mi prueba gratis de 10 min", href: "/demo" },
  className,
}: CtaBandProps) {
  return (
    <aside
      className={`bg-slate-900 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-8 rounded-[2rem] border border-slate-700 bg-slate-800/50 p-8 text-center shadow-2xl backdrop-blur-sm sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <Link
              href={cta.href}
              onClick={() => trackClickDemo()}
              className="inline-flex min-h-[4rem] items-center justify-center rounded-2xl bg-mq-accent px-10 text-xl font-bold text-white shadow-[0_0_30px_rgba(13,148,136,0.4)] transition duration-300 hover:-translate-y-1 hover:brightness-110 active:translate-y-0 min-w-[18rem]"
            >
              {cta.label}
            </Link>
            
            <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-mq-accent" />
                Sin tarjeta
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Acceso inmediato</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
