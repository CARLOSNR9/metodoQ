"use client";

import { motion } from "framer-motion";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar,
  ReferenceLine
} from "recharts";
import { ShieldAlert, TrendingDown, Info, AlertTriangle } from "lucide-react";

interface Act2PredictiveDashboardProps {
  scorePercentage: number;
  university: string | null;
  specialty: string | null;
}

// Generar puntos para una campana de Gauss
const generateNormalDistribution = (mean: number, stdDev: number) => {
  const points = [];
  for (let i = 0; i <= 1000; i += 20) {
    const exponent = -Math.pow(i - mean, 2) / (2 * Math.pow(stdDev, 2));
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
    points.push({ x: i, y });
  }
  return points;
};

const gaussData = generateNormalDistribution(550, 150);

const radarData = [
  { subject: "C. Básicas", A: 35, fullMark: 100 },
  { subject: "Casos Clínicos", A: 78, fullMark: 100 },
  { subject: "Listening", A: 22, fullMark: 100 },
  { subject: "S. Pública", A: 50, fullMark: 100 },
  { subject: "C. General", A: 40, fullMark: 100 },
];

export function Act2PredictiveDashboard({ 
  scorePercentage, 
  university = "Universidad Nacional", 
  specialty = "Especialidad" 
}: Act2PredictiveDashboardProps) {
  // Escalar el puntaje a formato UNAL (0-1000)
  // Simulamos que el puntaje de corte para la especialidad es alto
  const standardizedScore = Math.round(scorePercentage * 7.2 + 180);
  const cutoffScore = 685; // Puntaje de corte ficticio pero realista para UNAL
  const isAdmitted = standardizedScore >= cutoffScore;
  const gap = cutoffScore - standardizedScore;

  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      {/* 1. EL PUNTAJE ESTANDARIZADO */}
      <div className="text-center space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mq-muted">Puntaje Estandarizado Calibrado</p>
        <div className="relative inline-block">
            <motion.h3 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-7xl font-black italic ${isAdmitted ? "text-emerald-400" : "text-red-500"}`}
            >
                {standardizedScore}
            </motion.h3>
            <div className="absolute -right-12 top-0 rotate-12 border-2 border-red-500 px-2 py-1 text-[10px] font-black text-red-500 uppercase tracking-tighter">
                {isAdmitted ? "ADMITIDO" : "NO ADMITIDO"}
            </div>
        </div>
        <p className="text-sm text-mq-muted max-w-sm mx-auto">
            {isAdmitted 
                ? "Felicidades. Estadísticamente estás dentro de los cupos ofertados." 
                : `Te faltan ${gap} puntos para alcanzar el umbral de corte del último admitido.`
            }
        </p>
      </div>

      {/* 2. LA BRECHA DE ADMISIÓN (GAUSS) */}
      <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 space-y-6">
        <div className="flex items-center justify-between">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Distribución de Aspirantes</h4>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-[10px] text-mq-muted font-bold">Tú</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-mq-muted font-bold">Corte</span>
                </div>
            </div>
        </div>

        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={gaussData}>
                    <defs>
                        <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00d1ff" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area 
                        type="monotone" 
                        dataKey="y" 
                        stroke="#00d1ff" 
                        fillOpacity={1} 
                        fill="url(#colorY)" 
                        strokeWidth={2}
                    />
                    {/* Línea del Usuario */}
                    <ReferenceLine x={standardizedScore} stroke="#ef4444" strokeWidth={3} label={{ value: 'Tú', position: 'top', fill: '#ef4444', fontSize: 10, fontWeight: 'bold' }} />
                    {/* Línea de Corte */}
                    <ReferenceLine x={cutoffScore} stroke="#10b981" strokeWidth={3} strokeDasharray="3 3" label={{ value: 'Corte', position: 'top', fill: '#10b981', fontSize: 10, fontWeight: 'bold' }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
            <AlertTriangle size={20} className="text-red-400 shrink-0 mt-0.5" />
            <p className="text-xs text-red-200 leading-relaxed italic">
                {`"El 85% de los aspirantes fracasa en la ${university} debido a la desproporción entre cupos y demanda. Tu puntaje actual te sitúa en el percentil inferior de las vacantes de ${specialty}."`}
            </p>
        </div>
      </div>

      {/* 3. RADAR DE FALLOS (DISMORFIA ACADÉMICA) */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 flex flex-col items-center justify-center space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white self-start">Anatomía de tus Fallos</h4>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#ffffff10" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#8A99B8', fontSize: 10 }} />
                        <Radar
                            name="Desempeño"
                            dataKey="A"
                            stroke="#00d1ff"
                            fill="#00d1ff"
                            fillOpacity={0.4}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="space-y-4">
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                        <TrendingDown size={18} />
                    </div>
                    <h5 className="text-sm font-bold text-white uppercase tracking-wider">Fuga Crítica de Puntos</h5>
                </div>
                <ul className="space-y-3">
                    <li className="flex justify-between items-center text-xs">
                        <span className="text-mq-muted">Ciencias Básicas</span>
                        <span className="text-red-400 font-bold">-185 pts</span>
                    </li>
                    <li className="flex justify-between items-center text-xs">
                        <span className="text-mq-muted">Listening (Inglés)</span>
                        <span className="text-red-400 font-bold">-120 pts</span>
                    </li>
                    <li className="flex justify-between items-center text-xs">
                        <span className="text-mq-muted">Cultura General</span>
                        <span className="text-red-400 font-bold">-45 pts</span>
                    </li>
                </ul>
            </div>

            <div className="rounded-3xl border border-mq-accent/20 bg-mq-accent/5 p-6 space-y-3">
                <div className="flex items-center gap-3 text-mq-accent">
                    <Info size={18} />
                    <h5 className="text-sm font-black uppercase tracking-wider">Plan de Supervivencia</h5>
                </div>
                <p className="text-xs text-mq-muted leading-relaxed">
                    Tu dominio clínico es alto (78%), pero las <span className="text-white font-bold">Ciencias Básicas</span> y el <span className="text-white font-bold">Listening</span> están hundiendo tu promedio estandarizado. Necesitas un entrenamiento focalizado en estas áreas para asegurar la plaza.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
