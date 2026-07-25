"use client";

import { TrendingUp, Sparkles, ArrowRight, Lock, Target } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Link from "next/link";
import { motion } from "framer-motion";


export function ProgressSimulator({ currentScore = 468 }: { currentScore?: number }) {
  // Generar datos dinámicos basados en el puntaje inicial
  // El plan Pro cierra el 65% de la brecha hacia el puntaje ideal (950)
  // El plan Free solo cierra el 5% debido a la falta de herramientas analíticas
  const targetPro = Math.min(950, Math.round(currentScore + (950 - currentScore) * 0.7));
  const targetFree = Math.min(950, Math.round(currentScore + (950 - currentScore) * 0.08));

  const dynamicData = [
    { day: "Hoy", current: currentScore, projected: currentScore },
    { 
      day: "Día 5", 
      current: Math.round(currentScore + (targetFree - currentScore) * 0.2), 
      projected: Math.round(currentScore + (targetPro - currentScore) * 0.25) 
    },
    { 
      day: "Día 10", 
      current: Math.round(currentScore + (targetFree - currentScore) * 0.45), 
      projected: Math.round(currentScore + (targetPro - currentScore) * 0.55) 
    },
    { 
      day: "Día 15", 
      current: Math.round(currentScore + (targetFree - currentScore) * 0.7), 
      projected: Math.round(currentScore + (targetPro - currentScore) * 0.8) 
    },
    { 
      day: "Día 20", 
      current: targetFree, 
      projected: targetPro 
    },
  ];

  const getStatusLabel = (score: number) => {
    if (score < 600) return { text: "Nivel Insuficiente", color: "text-red-400" };
    if (score < 685) return { text: "Cerca del Corte", color: "text-yellow-400" };
    if (score < 800) return { text: "Admisión Probable", color: "text-emerald-400" };
    return { text: "Cupo Asegurado", color: "text-mq-accent" };
  };

  const currentStatus = getStatusLabel(currentScore);
  const projectedStatus = getStatusLabel(targetPro);

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* INFO SIDE */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1">
            <TrendingUp size={14} className="text-mq-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">Simulador de Éxito IA</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              ¿Dónde estarás en <span className="text-mq-accent">20 días</span>?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Sin una estrategia, tu curva de aprendizaje es plana. Con el <span className="text-slate-900 font-bold">Arsenal Pro</span>, optimizamos cada minuto para disparar tu probabilidad de admisión.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-2xl border border-white/5 bg-slate-50 p-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Hoy (Diagnóstico)</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-900">{currentScore}</span>
                <span className="text-xs text-slate-500">pts</span>
              </div>
              <p className={`text-[10px] ${currentStatus.color} font-bold mt-1 italic uppercase`}>{currentStatus.text}</p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl border border-mq-accent/30 bg-mq-accent/10 p-4">
              <p className="text-[10px] font-bold text-mq-accent uppercase tracking-wider mb-1">Día 20 (Plan Pro)</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-mq-accent">{targetPro}</span>
                <span className="text-xs text-mq-accent">pts</span>
              </div>
              <p className={`text-[10px] ${projectedStatus.color} font-bold mt-1 italic uppercase tracking-tighter`}>
                {projectedStatus.text}
              </p>
              <Sparkles size={16} className="absolute top-2 right-2 text-mq-accent/40" />
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/dashboard/planes"
              className="mq-premium-glow inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-sm font-black text-mq-accent-foreground transition-all hover:scale-[1.02] active:scale-95"
            >
              ACTIVAR MI CURVA DE ÉXITO <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* CHART SIDE */}
        <div className="flex-[1.5] min-h-[300px] relative">
          <div className="absolute inset-0 bg-mq-accent/5 rounded-3xl blur-3xl" />
          <div className="relative h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dynamicData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D1FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00D1FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 'bold' }} 
                />
                <YAxis hide domain={[Math.min(180, currentScore - 50), 1000]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A1F44', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="current" 
                  stroke="rgba(255,255,255,0.2)" 
                  fill="transparent" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Sin Método Q"
                />
                <Area 
                  type="monotone" 
                  dataKey="projected" 
                  stroke="#00D1FF" 
                  fillOpacity={1} 
                  fill="url(#colorProjected)" 
                  strokeWidth={4}
                  name="Plan Método Q Pro"
                />
              </AreaChart>
            </ResponsiveContainer>
            
            {/* Legend overlays */}
            <div className="absolute top-0 right-0 space-y-2">
               <div className="flex items-center gap-2">
                 <div className="h-1 w-4 bg-mq-accent" />
                 <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter">Plan Pro</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="h-1 w-4 bg-white/20 border-t border-dashed border-white/40" />
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Sin Plan</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

