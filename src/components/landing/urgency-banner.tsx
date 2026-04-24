"use client";

import { Sparkles } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="relative z-[60] flex h-8 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-mq-accent via-[#33e0ff] to-mq-accent px-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent-foreground sm:h-9 sm:text-[11px]">
      <div className="relative z-10 flex items-center gap-3">
        <Sparkles className="h-3 w-3 fill-current opacity-80" />
        <span className="drop-shadow-sm">ACCESO ANTICIPADO GRATUITO POR TIEMPO LIMITADO</span>
        <Sparkles className="h-3 w-3 fill-current opacity-80" />
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
