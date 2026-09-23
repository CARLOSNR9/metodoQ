"use client";

const WEEKDAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

/**
 * Franja semanal de racha del módulo MIR. Sin datos históricos inventados:
 * si el usuario aún no tiene actividad registrada, solo marca el día de
 * hoy como el punto de partida ("empieza hoy"), no un historial falso.
 */
export function MirStreakStrip({
  streakCount,
  activeDates,
}: {
  streakCount: number;
  /** Fechas locales (YYYY-MM-DD) en que el usuario practicó MIR. */
  activeDates: Set<string>;
}) {
  const today = new Date();
  const dayOfWeek = (today.getDay() + 6) % 7; // 0 = lunes ... 6 = domingo
  const monday = new Date(today);
  monday.setDate(today.getDate() - dayOfWeek);

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const key = date.toISOString().slice(0, 10);
    const isToday = i === dayOfWeek;
    const isFuture = date > today && !isToday;
    return {
      key,
      label: WEEKDAY_LABELS[i],
      isToday,
      isFuture,
      wasActive: activeDates.has(key),
    };
  });

  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="text-3xl font-black text-white">
          {streakCount}
          <span className="text-sm font-bold text-slate-400"> {streakCount === 1 ? "día" : "días"}</span>
        </p>
        <p className="text-xs font-semibold text-slate-400">Racha MIR</p>
      </div>
      <div className="flex gap-1.5">
        {days.map((day) => (
          <div key={day.key} className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-slate-500">{day.label}</span>
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-black ${
                day.wasActive
                  ? "border-mq-premium-gold bg-mq-premium-gold text-[#0A1F44]"
                  : day.isToday
                    ? "animate-pulse border-mq-premium-gold/70 bg-mq-premium-gold/10 text-mq-premium-gold"
                    : day.isFuture
                      ? "border-white/10 bg-white/[0.02] text-slate-600"
                      : "border-white/10 bg-white/[0.03] text-slate-500"
              }`}
              title={day.isToday ? "Hoy" : undefined}
            >
              {day.wasActive ? "✓" : day.isToday ? "•" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
