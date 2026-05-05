"use client";

import { Sparkles, ArrowRight, Zap, Brain, Lightbulb, Trophy, CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUserProfile } from "@/hooks/use-user-profile";
import { getLocalDateKey } from "@/lib/results";

interface DailyPillCardProps {
  topic?: string;
  isLocked?: boolean;
}

export function DailyPillCard({ topic = "Medicina Interna", isLocked = false }: DailyPillCardProps) {
  const { profile } = useUserProfile();
  const todayKey = getLocalDateKey(new Date());
  const dailyPill = (profile as any)?.dailyPillStatus;
  const isCompletedToday = dailyPill?.lastCompletedDate === todayKey;
  const wasCorrect = dailyPill?.wasCorrect;
  const streak = dailyPill?.streak ?? 0;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative overflow-hidden rounded-[2rem] border ${
        isCompletedToday 
          ? 'border-emerald-500/30 bg-emerald-500/5' 
          : isLocked 
            ? 'border-white/10 bg-white/[0.02] grayscale-[0.5]' 
            : 'border-mq-accent/30 bg-gradient-to-br from-mq-accent/10 via-mq-surface to-transparent'
      } p-6 sm:p-8 shadow-xl transition-all duration-500`}
    >
      {/* Background Decorative elements */}
      {!isLocked && (
        <>
          <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${isCompletedToday ? 'bg-emerald-500/10' : 'bg-mq-accent/20'} blur-[60px] group-hover:bg-mq-accent/30 transition-colors`} />
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/10 blur-[60px]" />
        </>
      )}
      
      {isLocked && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-20 flex items-center justify-center">
          <div className="bg-mq-surface/90 border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col items-center gap-2 max-w-[200px] text-center transform -rotate-2">
            <Lock size={24} className="text-mq-accent" />
            <p className="text-[10px] font-black uppercase tracking-widest text-white">Reto Bloqueado</p>
            <p className="text-[9px] text-mq-muted font-medium">Completa tu diagnóstico inicial para desbloquear tu reto personalizado.</p>
          </div>
        </div>
      )}

      <div className={`relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 ${isLocked ? 'opacity-40' : ''}`}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isCompletedToday ? 'bg-emerald-500/20 text-emerald-400' : 'bg-mq-accent/20 text-mq-accent'} shadow-[0_0_15px_rgba(0,210,255,0.2)]`}>
              {isCompletedToday ? <CheckCircle2 size={22} /> : <Brain size={22} className={isLocked ? "" : "animate-pulse"} />}
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent/80">LA PÍLDORA DEL DR. Q</p>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                {isCompletedToday ? `Reto ${streak} Completado` : 'Reto de Hoy'}
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${isCompletedToday ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-white/5 text-mq-muted border-white/10'}`}>
                  {isCompletedToday ? '¡CONSEGUIDO!' : 'GRATIS'}
                </span>
              </h3>
            </div>
          </div>

          <div className="space-y-2">
            {isCompletedToday ? (
              <p className="text-base font-medium text-white/90">
                {wasCorrect ? (
                  <>¡Impresionante, Doc! Has ganado el trofeo del <span className="text-mq-accent font-black">Día {streak}</span>.</>
                ) : (
                  <>Reto del <span className="text-rose-400 font-black">Día {streak}</span> finalizado. ¡Mañana más!</>
                )}
              </p>
            ) : (
              <p className="text-base font-medium text-white/90">
                1 pregunta de alto nivel sobre <span className="text-mq-accent font-black italic">{isLocked ? "???" : topic}</span>.
              </p>
            )}
            <p className="text-sm text-mq-muted leading-relaxed max-w-md">
              {isCompletedToday 
                ? "Has cumplido con tu dosis de conocimiento diaria. El 85% de los aspirantes fallan por falta de constancia. Tú no eres uno de ellos."
                : isLocked
                  ? "Este reto se adapta a tus debilidades. Primero necesitamos conocerte."
                  : "Demuestra tu agilidad mental hoy. Una sola oportunidad para acertar. ¿Estás listo, Doc?"}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {!isCompletedToday && (
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
          )}
          
          {isCompletedToday ? (
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${wasCorrect ? 'bg-mq-accent/20 text-mq-accent shadow-[0_0_20px_rgba(0,209,255,0.4)]' : 'bg-white/10 text-white/30'}`}>
                <Trophy size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-mq-muted">Estado</p>
                <p className="text-sm font-bold text-white">{wasCorrect ? 'Trofeo Ganado' : 'Fallo'}</p>
              </div>
            </div>
          ) : null}
          
          <Link
            href={isLocked ? "#" : isCompletedToday ? "/dashboard/planes" : "/dashboard/entrenar?mode=daily-pill"}
            onClick={(e) => {
              if (isLocked) e.preventDefault();
            }}
            className={`w-full md:w-auto mq-premium-glow group/btn inline-flex h-14 items-center justify-center gap-3 rounded-2xl ${
              isLocked
                ? 'bg-white/5 text-white/30 border border-white/10 cursor-not-allowed'
                : isCompletedToday 
                  ? 'bg-white/10 text-white border border-white/10 hover:bg-white/20' 
                  : 'bg-mq-accent text-mq-accent-foreground hover:scale-105'
            } px-8 text-sm font-black transition-all active:scale-95`}
          >
            {isLocked && <Lock size={16} />}
            <span>{isCompletedToday ? "REPETIR EN PRO" : "ACEPTAR RETO"}</span>
            {!isLocked && <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />}
          </Link>
        </div>
      </div>

      {/* Decorative pulse element */}
      {!isCompletedToday && !isLocked && (
        <div className="absolute right-4 top-4">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-mq-accent/20" />
            <div className="h-2 w-2 rounded-full bg-mq-accent" />
          </div>
        </div>
      )}
    </motion.section>
  );
}
