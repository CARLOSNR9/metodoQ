"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  dateKey,
  formatClassDate,
  formatClassTime,
  type StudentClassView,
} from "@/lib/classes/student-classes";
import { ClassSessionDetails } from "@/components/dashboard/class-session-details";

type ClassesCalendarProps = {
  classes: StudentClassView[];
};

const WEEKDAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function buildMonthGrid(viewMonth: Date) {
  const firstDay = startOfMonth(viewMonth);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(firstDay);
  gridStart.setDate(firstDay.getDate() - startOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart);
    day.setDate(gridStart.getDate() + index);
    return day;
  });
}

export function ClassesCalendar({ classes }: ClassesCalendarProps) {
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(new Date()));
  const [selectedKey, setSelectedKey] = useState(() => dateKey(new Date()));

  const classesByDay = useMemo(() => {
    const map = new Map<string, StudentClassView[]>();
    for (const cls of classes) {
      const key = dateKey(cls.classDate);
      const current = map.get(key) ?? [];
      current.push(cls);
      map.set(key, current);
    }
    return map;
  }, [classes]);

  const monthDays = useMemo(() => buildMonthGrid(viewMonth), [viewMonth]);
  const monthLabel = viewMonth.toLocaleDateString("es-CO", {
    month: "long",
    year: "numeric",
  });

  const selectedClasses = classesByDay.get(selectedKey) ?? [];

  return (
    <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Calendario</h2>
          <p className="mt-1 text-sm text-mq-muted capitalize">{monthLabel}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMonth((current) => addMonths(current, -1))}
            className="rounded-lg border border-mq-border p-2 text-mq-muted transition hover:text-white"
            aria-label="Mes anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => {
              const today = startOfMonth(new Date());
              setViewMonth(today);
              setSelectedKey(dateKey(new Date()));
            }}
            className="rounded-lg border border-mq-border px-3 py-2 text-xs font-semibold text-mq-muted transition hover:text-white"
          >
            Hoy
          </button>
          <button
            type="button"
            onClick={() => setViewMonth((current) => addMonths(current, 1))}
            className="rounded-lg border border-mq-border p-2 text-mq-muted transition hover:text-white"
            aria-label="Mes siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {WEEKDAY_LABELS.map((label) => (
          <div
            key={label}
            className="pb-1 text-center text-[10px] font-bold uppercase tracking-wider text-mq-muted"
          >
            {label}
          </div>
        ))}

        {monthDays.map((day) => {
          const key = dateKey(day);
          const dayClasses = classesByDay.get(key) ?? [];
          const inCurrentMonth = day.getMonth() === viewMonth.getMonth();
          const isSelected = key === selectedKey;
          const isToday = key === dateKey(new Date());
          const hasClass = dayClasses.length > 0;

          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedKey(key)}
              className={`flex min-h-[4.5rem] flex-col items-center rounded-xl border p-2 transition ${
                isSelected
                  ? "border-mq-accent bg-mq-accent/10"
                  : hasClass
                    ? "border-mq-accent/30 bg-mq-accent/5 hover:border-mq-accent/50"
                    : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
              } ${inCurrentMonth ? "" : "opacity-35"}`}
            >
              <span
                className={`text-sm font-bold ${
                  isToday ? "text-mq-accent" : inCurrentMonth ? "text-white" : "text-mq-muted"
                }`}
              >
                {day.getDate()}
              </span>
              {hasClass ? (
                <div className="mt-auto flex flex-wrap justify-center gap-1 pt-2">
                  {dayClasses.slice(0, 3).map((cls) => (
                    <span
                      key={cls.id}
                      className={`h-1.5 w-1.5 rounded-full ${
                        cls.isLiveNow ? "bg-red-400" : cls.isPast ? "bg-white/30" : "bg-mq-accent"
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <span className="mt-auto h-1.5 w-1.5 rounded-full bg-transparent" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-mq-muted">
          Clases del día seleccionado
        </p>
        {selectedClasses.length === 0 ? (
          <p className="mt-3 text-sm text-mq-muted">No hay clases en esta fecha.</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {selectedClasses.map((cls) => (
              <li
                key={cls.id}
                className="rounded-xl border border-mq-border bg-mq-surface-raised/70 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">{cls.title}</p>
                    <p className="mt-1 text-sm capitalize text-mq-muted">
                      {formatClassDate(cls.classDate)} · {formatClassTime(cls.classDate)}
                    </p>
                    {cls.courseName ? (
                      <p className="mt-1 text-xs text-mq-accent/80">Grupo: {cls.courseName}</p>
                    ) : null}
                    <ClassSessionDetails cls={cls} layout="row" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
