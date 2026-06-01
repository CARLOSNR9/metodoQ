"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProfessorAttendanceSummaryAction } from "@/app/profesor/attendance-actions";
import { getStaffIdToken } from "@/lib/client/staff-id-token";
import type { StudentAttendanceSummary } from "@/lib/attendance/types";
import { AlertTriangle, ClipboardList } from "lucide-react";

export function ProfessorAttendanceOverview() {
  const [summary, setSummary] = useState<StudentAttendanceSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      const result = await getProfessorAttendanceSummaryAction(await getStaffIdToken());
      if (result.error) {
        setError(result.error);
      }
      setSummary(result.summary ?? []);
      setLoading(false);
    }
    void load();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse rounded-xl border border-mq-border-strong bg-mq-surface-raised p-8 h-64" />
    );
  }

  return (
    <div className="space-y-6">
      {error ? <p className="text-sm text-rose-400">{error}</p> : null}

      {summary.length === 0 ? (
        <section className="rounded-xl border border-dashed border-mq-border-strong bg-white/[0.02] p-8 text-center">
          <ClipboardList className="mx-auto h-10 w-10 text-mq-accent" />
          <p className="mt-4 text-sm text-mq-muted">
            Aún no hay registros de asistencia. Pasa lista desde una clase de un grupo en{" "}
            <Link href="/profesor/clases" className="text-mq-accent hover:underline">
              Programar clases
            </Link>
            .
          </p>
        </section>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-mq-border-strong bg-mq-surface-raised">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
                <th className="px-4 py-3">Alumno</th>
                <th className="px-4 py-3">Presente</th>
                <th className="px-4 py-3">Ausente</th>
                <th className="px-4 py-3">Sesiones</th>
                <th className="px-4 py-3">Últimas faltas</th>
              </tr>
            </thead>
            <tbody>
              {summary.map((student) => (
                <tr key={student.uid} className="border-b border-white/5 align-top">
                  <td className="px-4 py-3">
                    <p className="font-medium text-white">{student.displayName}</p>
                    <p className="text-xs text-mq-muted">{student.email}</p>
                    {student.absentCount >= 3 ? (
                      <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300">
                        <AlertTriangle size={12} />
                        {student.absentCount} faltas — conviene seguimiento
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-emerald-300">{student.presentCount}</td>
                  <td className="px-4 py-3 text-rose-300">{student.absentCount}</td>
                  <td className="px-4 py-3 text-mq-muted">{student.totalMarkedSessions}</td>
                  <td className="px-4 py-3">
                    {student.recentAbsences.length === 0 ? (
                      <span className="text-mq-muted">—</span>
                    ) : (
                      <ul className="space-y-1">
                        {student.recentAbsences.slice(0, 3).map((absence) => (
                          <li key={`${absence.classId}-${absence.classDateIso}`}>
                            <Link
                              href={`/profesor/clases/${absence.classId}/asistencia`}
                              className="text-xs text-mq-accent hover:underline"
                            >
                              {absence.classTitle}
                            </Link>
                            {absence.classDateIso ? (
                              <span className="block text-[11px] text-mq-muted">
                                {new Date(absence.classDateIso).toLocaleDateString("es-CO", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
