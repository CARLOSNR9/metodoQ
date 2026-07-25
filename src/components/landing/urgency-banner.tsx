"use client";

import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18
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
    <div className="relative z-[60] flex h-10 w-full items-center justify-center overflow-hidden bg-slate-900 px-4 text-center text-xs font-medium text-slate-200">
      <Link href="/demo" className="relative z-10 flex items-center gap-3 sm:gap-4 transition-opacity hover:opacity-90">
        <div className="flex items-center gap-1.5">
          <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="font-bold text-white hidden sm:inline">Oferta de Lanzamiento</span>
        </div>

        <div className="h-4 w-px bg-slate-700 hidden sm:block" />

        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-teal-400" />
          <span>
            Acceso gratuito por tiempo limitado:
            <span className="ml-2 font-mono font-bold text-teal-400">
              {format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
            </span>
          </span>
        </div>

        <div className="items-center gap-1 text-teal-400 hidden sm:flex font-bold">
          <span className="ml-2 border-b border-teal-400/30 pb-0.5">Regístrate ahora</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </Link>
    </div>
  );
}
