"use client";

import { Users, Star, Quote } from "lucide-react";
import { TRUST_UNIVERSITIES } from "@/lib/brand";
import { formatUserCount, usePublicStats } from "@/hooks/use-public-stats";
import { motion } from "framer-motion";

export function SocialProofSection() {
  const { stats, loading } = usePublicStats();

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute -left-[10%] top-[20%] w-[40%] h-[50%] rounded-full bg-blue-100/50 blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-6">
              Credibilidad
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Diseñado para el médico que <span className="text-blue-600">no tiene tiempo que perder</span>
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-slate-500 font-medium">
              {loading
                ? "Comunidad de preparación para residencia médica con entrenamiento medible."
                : `${formatUserCount(stats.displayUsers)} médicos registrados y ${stats.completedSessions} sesiones de entrenamiento registradas en la plataforma.`}
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 shadow-sm">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">Micro-aprendizaje</p>
                  <p className="mt-1 text-sm font-medium text-slate-500 leading-relaxed">
                    Sesiones desde 4 minutos. Estudia entre turnos y aprovecha cada momento libre sin abrumarte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 shadow-sm">
                  <Star className="h-6 w-6 fill-blue-600/20" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">Cero relleno</p>
                  <p className="mt-1 text-sm font-medium text-slate-500 leading-relaxed">
                    Solo los temas que realmente evalúan las universidades colombianas. Retroalimentación al instante.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Universidades preparadas</p>
              <div className="flex flex-wrap gap-2">
                {TRUST_UNIVERSITIES.map((name) => (
                  <span
                    key={name}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Testimonial Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:pl-10"
          >
            <div className="absolute top-0 right-10 -mt-8 text-blue-100 opacity-50 z-0 hidden sm:block">
              <Quote className="w-40 h-40 fill-current" />
            </div>
            
            <div className="relative z-10 rounded-[2rem] border border-slate-100 bg-white p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-medium leading-relaxed text-slate-800 mb-10">
                &ldquo;El diagnóstico me mostró en 10 minutos qué temas tenía flojos. Dejé de estudiar a ciegas y empecé a practicar solo lo que el examen me puede tumbar. Es exactamente lo que necesitaba.&rdquo;
              </p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg shadow-md">
                  MR
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-0.5">Médico en preparación</p>
                  <p className="text-xs font-medium text-slate-500">R2 · Objetivo Cirugía General</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-[10px] font-bold text-green-700 shadow-sm uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Diagnóstico Gratis Disponible
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
