"use client";

import { ArrowRight, Brain, CheckCircle2, Lock, Trophy } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUserProfile } from "@/hooks/use-user-profile";
import { hasProFeatures } from "@/lib/plans/access";
import { getPlanUpgradeCta } from "@/lib/plans/upgrade-cta";
import { getLocalDateKey } from "@/lib/results";

interface DailyPillCardProps {
  topic?: string;
  isLocked?: boolean;
}

export function DailyPillCard({ topic = "Medicina Interna", isLocked = false }: DailyPillCardProps) {
  const { profile } = useUserProfile();
  const isProUser = hasProFeatures(profile?.plan);
  const upgradeCta = getPlanUpgradeCta(profile?.plan);
  const todayKey = getLocalDateKey(new Date());
  const dailyPill = (profile as any)?.dailyPillStatus;
  const isCompletedToday = dailyPill?.lastCompletedDate === todayKey;
  const wasCorrect = dailyPill?.wasCorrect;
  const streak = dailyPill?.streak ?? 0;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative rounded-[2rem] border ${
        isCompletedToday 
          ? 'border-emerald-500/30 bg-emerald-500/5' 
          : isLocked 
            ? 'border-slate-200 bg-slate-50 grayscale-[0.5]' 
            : 'border-mq-accent/30 bg-gradient-to-br from-mq-accent/10 via-mq-surface to-transparent'
      } shadow-xl transition-all duration-500`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
        {!isLocked && (
          <>
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${isCompletedToday ? 'bg-emerald-500/10' : 'bg-mq-accent/20'} blur-[60px] group-hover:bg-mq-accent/30 transition-colors`} />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/10 blur-[60px]" />
          </>
        )}
      </div>
      
      {isLocked && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-20 flex items-center justify-center">
          <div className="bg-white/90 border border-slate-200 p-4 rounded-2xl shadow-2xl flex flex-col items-center gap-2 max-w-[200px] text-center transform -rotate-2">
            <Lock size={24} className="text-mq-accent" />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Reto Bloqueado</p>
            <p className="text-[9px] text-slate-500 font-medium">Completa tu diagnóstico inicial para desbloquear tu reto personalizado.</p>
          </div>
        </div>
      )}

      <div className={`relative z-10 flex min-w-0 flex-col gap-5 p-5 sm:p-6 ${isLocked ? 'opacity-40' : ''}`}>
        <div className="min-w-0 space-y-3 pr-6">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isCompletedToday ? 'bg-emerald-500/20 text-emerald-400' : 'bg-mq-accent/20 text-mq-accent'} shadow-[0_0_15px_rgba(0,210,255,0.2)]`}>
              {isCompletedToday ? <CheckCircle2 size={22} /> : <Brain size={22} className={isLocked ? "" : "animate-pulse"} />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent/80">LA PÍLDORA DEL DR. Q</p>
              <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-lg font-black leading-tight text-slate-900 sm:text-xl">
                  {isCompletedToday ? `Reto Día ${streak} Completado` : `Reto del Día ${streak + 1}`}
                </h3>
                <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${isCompletedToday ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                  {isCompletedToday ? '¡CONSEGUIDO!' : 'GRATIS'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {isCompletedToday ? (
              <p className="text-base font-medium text-slate-900/90">
                {wasCorrect ? (
                  <>¡Impresionante, Doc! Has ganado el trofeo del <span className="text-mq-accent font-black">Día {streak}</span>.</>
                ) : (
                  <>Reto del <span className="text-rose-400 font-black">Día {streak}</span> finalizado. ¡Mañana más!</>
                )}
              </p>
            ) : (
              <p className="text-base font-medium text-slate-900/90">
                1 pregunta de alto nivel sobre <span className="text-mq-accent font-black italic">{isLocked ? "???" : topic}</span>.
              </p>
            )}
            <p className="text-sm text-slate-500 leading-relaxed">
              {isCompletedToday 
                ? "Has cumplido con tu dosis de conocimiento diaria. El 85% de los aspirantes fallan por falta de constancia. Tú no eres uno de ellos."
                : isLocked
                  ? "Este reto se adapta a tus debilidades. Primero necesitamos conocerte."
                  : "Demuestra tu agilidad mental hoy. Una sola oportunidad para acertar. ¿Estás listo, Doc?"}
            </p>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-3">
          {!isCompletedToday && (
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-mq-surface bg-mq-border-strong text-[10px] font-bold text-slate-500">
                    {i === 1 ? "👨‍⚕️" : i === 2 ? "👩‍⚕️" : "🩺"}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">+120 hoy</span>
            </div>
          )}

          {isCompletedToday ? (
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${wasCorrect ? 'bg-mq-accent/20 text-mq-accent shadow-[0_0_20px_rgba(0,209,255,0.4)]' : 'bg-slate-100 text-white/30'}`}>
                <Trophy size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Estado</p>
                <p className="text-sm font-bold text-slate-900">{wasCorrect ? 'Trofeo Ganado' : 'Fallo'}</p>
              </div>
            </div>
          ) : null}
          
          <Link
            href={
              isLocked
                ? "#"
                : isCompletedToday
                  ? isProUser || !upgradeCta
                    ? "/dashboard/entrenar"
                    : upgradeCta.href
                  : "/dashboard/entrenar?mode=daily-pill"
            }
            onClick={(e) => {
              if (isLocked) e.preventDefault();
            }}
            className={`mq-premium-glow group/btn inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-2xl sm:h-14 ${
              isLocked
                ? 'bg-slate-50 text-slate-900/30 border border-slate-200 cursor-not-allowed'
                : isCompletedToday 
                  ? 'bg-slate-100 text-slate-900 border border-slate-200 hover:bg-white/20' 
                  : 'bg-mq-accent text-mq-accent-foreground hover:brightness-110'
            } px-8 text-sm font-black transition-all active:scale-95`}
          >
            {isLocked && <Lock size={16} />}
            <span className="truncate">
              {isCompletedToday
                ? isProUser || !upgradeCta
                  ? "CONTINUAR ENTRENANDO"
                  : upgradeCta.planId === "RESIDENTE"
                    ? "SUBIR A RESIDENTE"
                    : "REPETIR EN PRO"
                : "ACEPTAR RETO"}
            </span>
            {!isLocked && <ArrowRight size={18} className="shrink-0 transition-transform group-hover/btn:translate-x-1" />}
          </Link>
        </div>
      </div>

      {/* Decorative pulse element */}
      {!isCompletedToday && !isLocked && (
        <div className="pointer-events-none absolute right-4 top-4 z-10">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-mq-accent/20" />
            <div className="h-2 w-2 rounded-full bg-mq-accent" />
          </div>
        </div>
      )}
    </motion.section>
  );
}
