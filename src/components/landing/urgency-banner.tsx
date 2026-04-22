"use client";

import { Sparkles } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="relative z-[60] flex h-10 w-full items-center justify-center overflow-hidden bg-mq-accent px-4 text-center text-[13px] font-bold tracking-tight text-mq-accent-foreground sm:h-12 sm:text-sm">
      <div className="flex items-center gap-2 animate-pulse">
        <Sparkles className="h-4 w-4 fill-current" />
        <span>🔥 ACCESO ANTICIPADO GRATUITO POR TIEMPO LIMITADO</span>
        <Sparkles className="h-4 w-4 fill-current" />
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
      
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
