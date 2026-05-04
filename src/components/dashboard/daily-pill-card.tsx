"use client";

import { Sparkles, ArrowRight, Zap, Brain, Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface DailyPillCardProps {
  topic?: string;
}

export function DailyPillCard({ topic = "Medicina Interna" }: DailyPillCardProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-[2rem] border border-mq-accent/30 bg-gradient-to-br from-mq-accent/10 via-mq-surface to-transparent p-6 sm:p-8 shadow-xl"
    >
      {/* Background Decorative elements */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-mq-accent/20 blur-[60px] group-hover:bg-mq-accent/30 transition-colors" />
      <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/10 blur-[60px]" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/20 text-mq-accent shadow-[0_0_15px_rgba(0,210,255,0.2)]">
              <Brain size={22} className="animate-pulse" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent/80">LA PÍLDORA DEL DR. Q</p>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                Reto de Hoy
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-bold text-mq-muted border border-white/10">
                  GRATIS
                </span>
              </h3>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-base font-medium text-white/90">
              1 pregunta de alto nivel sobre <span className="text-mq-accent font-black italic">{topic}</span>.
            </p>
            <p className="text-sm text-mq-muted leading-relaxed max-w-md">
              Demuestra tu agilidad mental hoy. Una sola oportunidad para acertar. ¿Estás listo, Doc?
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex -space-x-2 mr-2">
             {[1, 2, 3].map((i) => (
               <div key={i} className="h-8 w-8 rounded-full border-2 border-mq-surface bg-mq-border-strong flex items-center justify-center text-[10px] font-bold text-mq-muted">
                 {i === 1 ? "👨‍⚕️" : i === 2 ? "👩‍⚕️" : "🩺"}
               </div>
             ))}
             <div className="flex h-8 items-center pl-4 text-[10px] font-bold text-mq-muted uppercase tracking-wider">
               +120 hoy
             </div>
          </div>
          
          <Link
            href="/demo?mode=daily-pill"
            className="w-full md:w-auto mq-premium-glow group/btn inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-8 text-sm font-black text-mq-accent-foreground transition-all hover:scale-105 active:scale-95"
          >
            <span>ACEPTAR RETO</span>
            <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative pulse element */}
      <div className="absolute right-4 top-4">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-mq-accent/20" />
          <div className="h-2 w-2 rounded-full bg-mq-accent" />
        </div>
      </div>
    </motion.section>
  );
}
