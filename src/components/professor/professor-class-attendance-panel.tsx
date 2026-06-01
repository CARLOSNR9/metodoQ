"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getClassAttendanceSheetAction,
  saveClassAttendanceAction,
} from "@/app/profesor/attendance-actions";
import { getStaffIdToken } from "@/lib/client/staff-id-token";
import type { AttendanceStatus } from "@/lib/attendance/types";
import { ArrowLeft, Save } from "lucide-react";

type ProfessorClassAttendancePanelProps = {
  classId: string;
};

export function ProfessorClassAttendancePanel({ classId }: ProfessorClassAttendancePanelProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [courseName, setCourseName] = useState<string | null>(null);
  const [dateIso, setDateIso] = useState<string | null>(null);
  const [students, setStudents] = useState<
    { uid: string; email: string; displayName: string }[]
  >([]);
  const [records, setRecords] = useState<Record<string, AttendanceStatus>>({});
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      const result = await getClassAttendanceSheetAction(await getStaffIdToken(), classId);
      if (result.error || !result.sheet) {
        setError(result.error ?? "No se pudo cargar la clase.");
        setLoading(false);
        return;
      }

      const { classSession, students: roster, records: existing } = result.sheet;
      setTitle(classSession.title);
      setCourseName(classSession.courseName);
      setDateIso(classSession.dateIso);
      setStudents(roster);
      setRecords(existing);
      setLoading(false);
    }

    void load();
  }, [classId]);

  const formattedDate =
    dateIso &&
    new Date(dateIso).toLocaleString("es-CO", {
      dateStyle: "full",
      timeStyle: "short",
    });

  const counts = useMemo(() => {
    let present = 0;
    let absent = 0;
    for (const student of students) {
      const status = records[student.uid];
      if (status === "present") present += 1;
      else if (status === "absent") absent += 1;
    }
    return { present, absent, pending: students.length - present - absent };
  }, [students, records]);

  function setStatus(studentId: string, status: AttendanceStatus) {
    setRecords((prev) => ({ ...prev, [studentId]: status }));
  }

  function markAll(status: AttendanceStatus) {
    setRecords(
      Object.fromEntries(students.map((student) => [student.uid, status])) as Record<
        string,
        AttendanceStatus
      >,
    );
  }

  function handleSave() {
    setError("");
    setMessage("");
    startTransition(async () => {
      const entries = students
        .map((student) => ({
          studentId: student.uid,
          status: records[student.uid],
        }))
        .filter((entry): entry is { studentId: string; status: AttendanceStatus } =>
          Boolean(entry.status),
        );

      if (entries.length === 0) {
        setError("Marca al menos un alumno como presente o ausente.");
        return;
      }

      const result = await saveClassAttendanceAction(await getStaffIdToken(), classId, entries);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Asistencia guardada correctamente.");
        router.refresh();
      }
    });
  }

  if (loading) {
    return (
      <div className="animate-pulse rounded-xl border border-mq-border-strong bg-mq-surface-raised p-8 h-64" />
    );
  }

  if (error && students.length === 0 && !title) {
    return (
      <p className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        href="/profesor/clases"
        className="inline-flex items-center gap-1 text-sm text-mq-accent hover:underline"
      >
        <ArrowLeft size={16} />
        Volver a clases
      </Link>

      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Lista de asistencia
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-2 text-sm text-mq-muted capitalize">{formattedDate}</p>
        {courseName ? (
          <p className="mt-1 text-sm text-mq-accent/80">Grupo: {courseName}</p>
        ) : null}
      </header>

      {students.length === 0 ? (
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          Esta clase no tiene un grupo asignado o no hay alumnos matriculados. Solo puedes llevar
          asistencia en clases vinculadas a un grupo con alumnos.
        </p>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => markAll("present")}
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"
            >
              Marcar todos presentes
            </button>
            <button
              type="button"
              onClick={() => markAll("absent")}
              className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs font-semibold text-rose-300"
            >
              Marcar todos ausentes
            </button>
            <span className="text-xs text-mq-muted">
              {counts.present} presente{counts.present === 1 ? "" : "s"} · {counts.absent} ausente
              {counts.absent === 1 ? "" : "s"}
              {counts.pending > 0 ? ` · ${counts.pending} sin marcar` : ""}
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-mq-border-strong bg-mq-surface-raised">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
                  <th className="px-4 py-3">Alumno</th>
                  <th className="px-4 py-3 text-right">Asistencia</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  const status = records[student.uid];
                  return (
                    <tr key={student.uid} className="border-b border-white/5">
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{student.displayName}</p>
                        <p className="text-xs text-mq-muted">{student.email}</p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setStatus(student.uid, "present")}
                            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                              status === "present"
                                ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40"
                                : "bg-white/[0.04] text-mq-muted hover:text-white"
                            }`}
                          >
                            Presente
                          </button>
                          <button
                            type="button"
                            onClick={() => setStatus(student.uid, "absent")}
                            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                              status === "absent"
                                ? "bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/40"
                                : "bg-white/[0.04] text-mq-muted hover:text-white"
                            }`}
                          >
                            Ausente
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              disabled={isPending}
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-lg bg-mq-accent px-5 py-2.5 text-sm font-bold text-mq-accent-foreground disabled:opacity-50"
            >
              <Save size={16} />
              {isPending ? "Guardando..." : "Guardar asistencia"}
            </button>
            {message ? <p className="text-sm text-mq-accent">{message}</p> : null}
            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          </div>
        </>
      )}
    </div>
  );
}
