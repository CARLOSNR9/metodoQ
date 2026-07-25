"use client";

import { Rocket, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 41,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="relative z-[60] flex min-h-10 w-full items-center justify-center overflow-hidden bg-[#F8FAFC] border-b border-slate-200 px-4 py-2 text-center text-[11px] sm:text-xs font-semibold text-slate-600">
      <Link href="/demo" className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 transition-opacity hover:opacity-80">
        <div className="flex items-center gap-1.5 text-mq-accent uppercase tracking-wider font-bold">
          <Rocket className="h-4 w-4" />
          <span>Oferta de Lanzamiento</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Acceso gratuito por tiempo limitado:</span>
          <span className="inline sm:hidden">Termina en:</span>
          <span className="font-mono tabular-nums font-bold bg-mq-accent/10 text-mq-accent px-2 py-0.5 rounded border border-mq-accent/20">
            {format(timeLeft.hours)} : {format(timeLeft.minutes)} : {format(timeLeft.seconds)}
          </span>
        </div>

        <div className="flex items-center text-slate-500 font-medium hidden sm:flex">
          <span>¡Regístrate ahora y asegura tu ventaja!</span>
          <ChevronRight className="h-3.5 w-3.5 ml-1 text-slate-400" />
        </div>
      </Link>
    </div>
  );
}
