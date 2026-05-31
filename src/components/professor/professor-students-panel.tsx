"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { enrollStudentAction, listProfessorCoursesAction } from "@/app/profesor/course-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import { getPlanDisplayName } from "@/lib/plans/config";
import type { CourseRecord } from "@/lib/courses/types";
import type { ProfessorStudentRow } from "@/lib/server/professor-users";
import type { UserPlan } from "@/lib/auth";

type PlanTab = "ALL" | UserPlan;

const PLAN_TABS: { key: PlanTab; label: string }[] = [
  { key: "ALL", label: "Todos" },
  { key: "FREE", label: "Gratis" },
  { key: "BASICO", label: "Básico" },
  { key: "PRO", label: "Pro" },
  { key: "RESIDENTE", label: "Residente" },
];

type ProfessorStudentsPanelProps = {
  students: ProfessorStudentRow[];
};

export function ProfessorStudentsPanel({ students }: ProfessorStudentsPanelProps) {
  const router = useRouter();
  const [courses, setCourses] = useState<CourseRecord[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState<PlanTab>("ALL");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const token = (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
        const result = await listProfessorCoursesAction(token);
        const nextCourses = result.courses ?? [];
        setCourses(nextCourses);
        setSelectedCourse(nextCourses[0]?.id ?? "");
      } finally {
        setLoadingCourses(false);
      }
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return students.filter((student) => {
      if (tab !== "ALL" && student.plan !== tab) return false;
      if (!q) return true;
      return (
        student.email.toLowerCase().includes(q) ||
        student.displayName.toLowerCase().includes(q)
      );
    });
  }, [students, tab, search]);

  const counts = useMemo(
    () => ({
      ALL: students.length,
      FREE: students.filter((s) => s.plan === "FREE").length,
      BASICO: students.filter((s) => s.plan === "BASICO").length,
      PRO: students.filter((s) => s.plan === "PRO").length,
      RESIDENTE: students.filter((s) => s.plan === "RESIDENTE").length,
    }),
    [students],
  );

  function handleEnroll(studentId: string) {
    if (!selectedCourse) {
      setError("Selecciona un grupo primero.");
      return;
    }

    setError("");
    setMessage("");
    startTransition(async () => {
      const token = (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
      const result = await enrollStudentAction(token, selectedCourse, studentId);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Alumno matriculado correctamente.");
        const token = (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
        const refreshed = await listProfessorCoursesAction(token);
        setCourses(refreshed.courses ?? []);
        router.refresh();
      }
    });
  }

  return (
    <div className="space-y-6">
      {loadingCourses ? (
        <div className="animate-pulse rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 h-16" />
      ) : null}
      <div className="flex flex-wrap gap-2">
        {PLAN_TABS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setTab(item.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              tab === item.key
                ? "bg-mq-accent text-mq-accent-foreground"
                : "bg-white/[0.05] text-mq-muted hover:text-white"
            }`}
          >
            {item.label} ({counts[item.key]})
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre o correo"
          className="rounded-lg border border-mq-border bg-mq-surface px-3 py-2.5 text-sm text-white"
        />
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="rounded-lg border border-mq-border bg-mq-surface px-3 py-2.5 text-sm text-white"
        >
          <option value="">Grupo para matricular</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {courses.length === 0 ? (
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          Crea un grupo en &quot;Mis grupos&quot; antes de matricular alumnos desde aquí.
        </p>
      ) : null}

      {message ? <p className="text-sm text-mq-accent">{message}</p> : null}
      {error ? <p className="text-sm text-rose-400">{error}</p> : null}

      <div className="overflow-x-auto rounded-xl border border-mq-border-strong bg-mq-surface-raised">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
              <th className="px-4 py-3">Alumno</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3 text-right">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-mq-muted">
                  No hay alumnos con este filtro.
                </td>
              </tr>
            ) : (
              filtered.map((student) => (
                <tr key={student.uid} className="border-b border-white/5">
                  <td className="px-4 py-3">
                    <p className="font-medium text-white">{student.displayName}</p>
                    <p className="text-xs text-mq-muted">{student.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-mq-muted">
                      {getPlanDisplayName(student.plan)}
                    </span>
                    {student.plan !== "PRO" && student.plan !== "RESIDENTE" ? (
                      <p className="mt-1 text-[10px] text-amber-300">
                        No verá clases en vivo hasta subir a Pro
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      disabled={isPending || !selectedCourse}
                      onClick={() => handleEnroll(student.uid)}
                      className="rounded-lg bg-mq-accent/15 px-3 py-1.5 text-xs font-semibold text-mq-accent hover:bg-mq-accent/25 disabled:opacity-50"
                    >
                      Matricular
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
