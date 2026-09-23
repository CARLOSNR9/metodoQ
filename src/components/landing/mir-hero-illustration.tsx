"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, ClipboardList, Clock } from "lucide-react";

/**
 * Gráfico decorativo del hero de /mir: un globo estilizado con un punto
 * pulsante (España) y chips flotantes con datos reales del examen, para
 * reforzar visualmente que este es el módulo internacional.
 */
export function MirHeroIllustration() {
  return (
    <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px]">
      <div className="absolute inset-8 rounded-full bg-mq-premium-gold/20 blur-[70px]" />

      <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-10 rounded-full border border-dashed border-white/10" />

      <svg viewBox="0 0 200 200" className="relative h-44 w-44 sm:h-56 sm:w-56" fill="none">
        <defs>
          <linearGradient id="mirGoldStroke" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="70" stroke="url(#mirGoldStroke)" strokeWidth="1.5" />
        <ellipse cx="100" cy="100" rx="70" ry="26" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="70" ry="50" stroke="white" strokeOpacity="0.16" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="26" ry="70" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="30" y1="100" x2="170" y2="100" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
      </svg>

      <span className="absolute left-[36%] top-[30%] flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mq-premium-gold opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-mq-premium-gold ring-2 ring-[#0A1F44]" />
      </span>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-2 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#0A1F44]/90 px-3 py-2 shadow-lg backdrop-blur"
      >
        <ClipboardList className="h-4 w-4 text-mq-premium-gold" />
        <span className="text-[11px] font-bold text-white">200 preguntas</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-2 top-1/3 flex items-center gap-2 rounded-full border border-white/15 bg-[#0A1F44]/90 px-3 py-2 shadow-lg backdrop-blur"
      >
        <Clock className="h-4 w-4 text-mq-premium-gold" />
        <span className="text-[11px] font-bold text-white">4h 30 min</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-2 left-1/4 flex items-center gap-2 rounded-full border border-white/15 bg-[#0A1F44]/90 px-3 py-2 shadow-lg backdrop-blur"
      >
        <CalendarCheck2 className="h-4 w-4 text-mq-premium-gold" />
        <span className="text-[11px] font-bold text-white">23 ene 2027</span>
      </motion.div>
    </div>
  );
}
