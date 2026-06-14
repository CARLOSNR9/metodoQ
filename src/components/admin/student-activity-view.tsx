import Link from "next/link";
import { Check, Flame, Minus, X } from "lucide-react";
import {
  formatRelativeLastActive,
  getActivityStatusLabel,
  type ActivityStatus,
} from "@/lib/activity-status";
import { getPlanDisplayName } from "@/lib/plans/config";
import { getRoleLabel, normalizeUserRole } from "@/lib/roles";
import type { AdminStudentActivity } from "@/lib/server/student-activity";
import type { DailyHabitDay } from "@/lib/training/daily-activity";

const STATUS_STYLES: Record<ActivityStatus, string> = {
  activo: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  riesgo: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  inactivo: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  sin_datos: "bg-white/10 text-mq-muted border-white/10",
};

function ActivityBadge({ status }: { status: ActivityStatus }) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-0.5 text-xs font-semibold ${STATUS_STYLES[status]}`}
    >
      {getActivityStatusLabel(status)}
    </span>
  );
}

function HabitDayPill({ day }: { day: DailyHabitDay }) {
  const studied = day.status === "studied";
  const missed = day.status === "missed";
  const partial = day.status === "partial";
  const pending = day.status === "today_pending";

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all ${
          studied
            ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-300"
            : missed
              ? "border-rose-500/30 bg-rose-500/10 text-rose-400"
              : partial || pending
                ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                : "border-white/10 bg-white/[0.03] text-mq-muted"
        }`}
        title={
          studied
            ? `${day.questionsCount}/${day.minQuestions} preguntas — meta cumplida`
            : partial
              ? `${day.questionsCount}/${day.minQuestions} — meta no cumplida`
              : missed
                ? "Sin actividad"
                : pending
                  ? day.questionsCount > 0
                    ? `${day.questionsCount}/${day.minQuestions} hoy`
                    : `Meta: ${day.minQuestions} preguntas`
                  : "Antes del plan"
        }
      >
        {studied ? (
          <Check size={20} strokeWidth={3} />
        ) : missed ? (
          <X size={20} strokeWidth={3} />
        ) : partial ? (
          <Minus size={20} strokeWidth={3} />
        ) : pending && day.questionsCount > 0 ? (
          <span className="text-[10px] font-black leading-none">
            {day.questionsCount}/{day.minQuestions}
          </span>
        ) : (
          <span className="text-xs font-bold">{day.dayNumber}</span>
        )}
      </div>
      <span
        className={`text-[10px] font-bold uppercase tracking-wider ${
          day.isToday ? "text-mq-accent" : "text-mq-muted"
        }`}
      >
        {day.isToday ? "Hoy" : day.weekdayShort}
      </span>
    </div>
  );
}

function MetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      {hint ? <p className="mt-1 text-xs text-mq-muted">{hint}</p> : null}
    </article>
  );
}

type StudentActivityViewProps = {
  student: AdminStudentActivity;
};

export function StudentActivityView({ student }: StudentActivityViewProps) {
  const displayName =
    student.displayName !== "—" ? student.displayName : student.email.split("@")[0];

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <header>
          <Link
            href="/admin/usuarios"
            className="text-xs font-medium text-mq-accent hover:underline"
          >
            ← Volver al directorio
          </Link>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Actividad del estudiante
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {displayName}
          </h1>
          <p className="mt-2 text-sm text-mq-muted">{student.email}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-mq-muted">
            <span>{getPlanDisplayName(student.plan)}</span>
            <span className="text-white/30">·</span>
            <span>{getRoleLabel(normalizeUserRole(student.role))}</span>
            {student.goalUniversity ? (
              <>
                <span className="text-white/30">·</span>
                <span>{student.goalUniversity}</span>
              </>
            ) : null}
            {student.goalSpecialty ? (
              <>
                <span className="text-white/30">·</span>
                <span>{student.goalSpecialty}</span>
              </>
            ) : null}
          </div>
        </header>
        <ActivityBadge status={student.activityStatus} />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label="Última actividad"
          value={formatRelativeLastActive(student.lastActiveAt)}
        />
        <MetricCard
          label="Racha actual"
          value={student.streakCount}
          hint={
            student.streakLastTrainingDate
              ? `Último día: ${student.streakLastTrainingDate}`
              : undefined
          }
        />
        <MetricCard
          label="Preguntas totales"
          value={student.totalQuestionsAnswered}
          hint={`${student.questionsLast7Days} en los últimos 7 días`}
        />
        <MetricCard
          label="% acumulado"
          value={student.cumulativeScore != null ? `${student.cumulativeScore}%` : "—"}
          hint={`${student.attemptsCount} sesiones`}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <MetricCard
          label="Días con meta cumplida (30d)"
          value={student.studiedDaysLast30}
        />
        <MetricCard
          label="Tiempo respuesta prom."
          value={student.avgResponseTime > 0 ? `${student.avgResponseTime}s` : "—"}
        />
      </div>

      <section className="mt-10 rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
        <div className="flex items-center gap-2">
          <Flame size={18} className="text-mq-accent" />
          <h2 className="text-lg font-semibold text-white">Hábito de estudio — últimos 14 días</h2>
        </div>
        <p className="mt-1 text-sm text-mq-muted">
          Verde = meta diaria cumplida · Ámbar = actividad parcial o pendiente hoy · Rojo = sin
          actividad
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
          {student.habitDays.map((day) => (
            <HabitDayPill key={day.dateKey} day={day} />
          ))}
        </div>
      </section>

      {(student.strengths.length > 0 || student.weaknesses.length > 0) && (
        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {student.strengths.length > 0 ? (
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">Fortalezas</h3>
              <ul className="mt-3 space-y-1 text-sm text-mq-muted">
                {student.strengths.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {student.weaknesses.length > 0 ? (
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-5">
              <h3 className="text-sm font-semibold text-rose-300">Debilidades</h3>
              <ul className="mt-3 space-y-1 text-sm text-mq-muted">
                {student.weaknesses.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      )}

      <section className="mt-10 rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-white">Sesiones recientes</h2>
        <p className="mt-1 text-sm text-mq-muted">Últimas 20 sesiones registradas en Firestore.</p>

        {student.recentSessions.length === 0 ? (
          <p className="mt-6 text-sm text-mq-muted">Este usuario aún no tiene sesiones guardadas.</p>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
                  <th className="pb-3 pr-3">Fecha</th>
                  <th className="pb-3 pr-3">Tipo</th>
                  <th className="pb-3 pr-3">Preguntas</th>
                  <th className="pb-3">Rendimiento</th>
                </tr>
              </thead>
              <tbody>
                {student.recentSessions.map((session) => (
                  <tr key={session.id} className="border-b border-white/5">
                    <td className="py-3 pr-3 text-mq-muted whitespace-nowrap">
                      {session.fechaLabel}
                    </td>
                    <td className="py-3 pr-3 text-white">{session.sessionLabel}</td>
                    <td className="py-3 pr-3 text-mq-muted">
                      {session.correctAnswers + session.wrongAnswers} (
                      {session.correctAnswers}✓ / {session.wrongAnswers}✗)
                    </td>
                    <td className="py-3 font-medium text-white">{session.scorePercentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}

export { ActivityBadge, STATUS_STYLES };
