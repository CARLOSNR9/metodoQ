"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { enrollStudentAction, listProfessorCoursesAction } from "@/app/profesor/course-actions";
import { getStaffIdToken } from "@/lib/client/staff-id-token";
import { getPlanDisplayName } from "@/lib/plans/config";
import { ThemeSelect } from "@/components/ui/theme-select";
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
  const [loadError, setLoadError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const token = await getStaffIdToken();
        const result = await listProfessorCoursesAction(token);
        if (result.error) {
          setLoadError(result.error);
        }
        const nextCourses = result.courses ?? [];
        setCourses(nextCourses);
        setSelectedCourse(nextCourses[0]?.id ?? "");
      } finally {
        setLoadingCourses(false);
      }
    }
    load();
  }, []);

  const groupOptions = useMemo(
    () => courses.map((course) => ({ value: course.id, label: course.name })),
    [courses],
  );

  const enrolledInSelectedGroup = useMemo(() => {
    const course = courses.find((item) => item.id === selectedCourse);
    return new Set(course?.studentIds ?? []);
  }, [courses, selectedCourse]);

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
      const token = await getStaffIdToken();
      const result = await enrollStudentAction(token, selectedCourse, studentId);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Alumno matriculado correctamente.");
        const refreshed = await listProfessorCoursesAction(token);
        setCourses(refreshed.courses ?? []);
        router.refresh();
      }
    });
  }

  return (
    <div className="space-y-6">
      {loadingCourses ? (
        <div className="animate-pulse rounded-xl border border-slate-200 bg-white-raised p-6 h-16" />
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
                : "bg-slate-100 text-slate-500 hover:text-slate-900"
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
          className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
        />
        <ThemeSelect
          value={selectedCourse}
          onChange={setSelectedCourse}
          options={groupOptions}
          placeholder="Grupo para matricular"
          disabled={courses.length === 0}
        />
      </div>

      {loadError ? <p className="text-sm text-rose-400">{loadError}</p> : null}

      {courses.length === 0 ? (
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          Crea un grupo en &quot;Mis grupos&quot; antes de matricular alumnos desde aquí.
        </p>
      ) : null}

      {message ? <p className="text-sm text-mq-accent">{message}</p> : null}
      {error ? <p className="text-sm text-rose-400">{error}</p> : null}

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white-raised">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
              <th className="px-4 py-3">Alumno</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3 text-right">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-slate-500">
                  No hay alumnos con este filtro.
                </td>
              </tr>
            ) : (
              filtered.map((student) => {
                const isEnrolled = enrolledInSelectedGroup.has(student.uid);

                return (
                <tr key={student.uid} className="border-b border-white/5">
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-900">{student.displayName}</p>
                    <p className="text-xs text-slate-500">{student.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                      {getPlanDisplayName(student.plan)}
                    </span>
                    {student.plan !== "PRO" && student.plan !== "RESIDENTE" ? (
                      <p className="mt-1 text-[10px] text-amber-300">
                        No verá clases en vivo hasta subir a Pro
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {isEnrolled ? (
                      <span className="inline-flex rounded-lg bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                        Matriculado
                      </span>
                    ) : (
                      <button
                        type="button"
                        disabled={isPending || !selectedCourse}
                        onClick={() => handleEnroll(student.uid)}
                        className="rounded-lg bg-mq-accent/15 px-3 py-1.5 text-xs font-semibold text-mq-accent hover:bg-mq-accent/25 disabled:opacity-50"
                      >
                        Matricular
                      </button>
                    )}
                  </td>
                </tr>
              );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
