"use client";

import { TrendingUp, Sparkles, ArrowRight, Lock, Target } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Link from "next/link";
import { motion } from "framer-motion";

const data = [
  { day: "Hoy", current: 468, projected: 468 },
  { day: "Día 5", current: 472, projected: 520 },
  { day: "Día 10", current: 478, projected: 610 },
  { day: "Día 15", current: 482, projected: 730 },
  { day: "Día 20", current: 485, projected: 840 },
];

export function ProgressSimulator({ currentScore = 468 }: { currentScore?: number }) {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* INFO SIDE */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1">
            <TrendingUp size={14} className="text-mq-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">Simulador de Éxito</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white leading-tight">
              ¿Dónde estarás en <span className="text-mq-accent">20 días</span>?
            </h2>
            <p className="text-mq-muted text-sm leading-relaxed max-w-md">
              Sin una estrategia, tu curva de aprendizaje es plana. Con el <span className="text-white font-bold">Arsenal Pro</span>, optimizamos cada minuto para disparar tu probabilidad de admisión.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="text-[10px] font-bold text-mq-muted uppercase tracking-wider mb-1">Hoy (Gratis)</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white">{currentScore}</span>
                <span className="text-xs text-mq-muted">pts</span>
              </div>
              <p className="text-[10px] text-red-400 font-bold mt-1 italic">Nivel Insuficiente</p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl border border-mq-accent/30 bg-mq-accent/10 p-4">
              <p className="text-[10px] font-bold text-mq-accent uppercase tracking-wider mb-1">Día 20 (Pro)</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-mq-accent">840</span>
                <span className="text-xs text-mq-accent">pts</span>
              </div>
              <p className="text-[10px] text-mq-accent font-bold mt-1 italic">ADMISION PROBABLE</p>
              <Sparkles size={16} className="absolute top-2 right-2 text-mq-accent/40" />
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/dashboard/planes"
              className="mq-premium-glow inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-sm font-black text-mq-accent-foreground transition-all hover:scale-[1.02]"
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
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                <YAxis hide domain={[400, 900]} />
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
                  name="Tu ritmo actual"
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
                 <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Plan Pro</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="h-1 w-4 bg-white/20 border-t border-dashed border-white/40" />
                 <span className="text-[10px] font-bold text-mq-muted uppercase tracking-tighter">Sin Plan</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
