"use client";

import { Sparkles, Clock } from "lucide-react";
import { useState, useEffect } from "react";

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
    <div className="relative z-[60] flex h-8 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-mq-accent via-[#33e0ff] to-mq-accent px-4 text-center text-[10px] font-black uppercase tracking-[0.12em] text-mq-accent-foreground sm:h-9 sm:text-[11px]">
      <div className="relative z-10 flex items-center gap-2 sm:gap-6">
        <div className="hidden items-center gap-2 sm:flex">
          <Sparkles className="h-3 w-3 fill-current opacity-80" />
          <span>Oferta de Lanzamiento</span>
        </div>

        <div className="flex items-center gap-2 bg-mq-accent-foreground/10 px-3 py-0.5 rounded-full backdrop-blur-sm border border-mq-accent-foreground/10">
          <Clock className="h-3 w-3 animate-pulse" />
          <span className="drop-shadow-sm">
            EL ACCESO GRATUITO TERMINA EN: 
            <span className="ml-2 font-mono tabular-nums bg-mq-accent-foreground text-mq-accent px-1.5 py-0.5 rounded shadow-sm">
              {format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
            </span>
          </span>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <span>¡Regístrate ahora!</span>
          <Sparkles className="h-3 w-3 fill-current opacity-80" />
        </div>
      </div>
      
      {/* Refined shimmer effect */}
      <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
