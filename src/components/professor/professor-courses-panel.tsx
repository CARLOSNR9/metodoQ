"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  createCourseAction,
  deleteCourseAction,
  enrollStudentAction,
  listProfessorCoursesAction,
  unenrollStudentAction,
} from "@/app/profesor/course-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import type { CourseRecord } from "@/lib/courses/types";
import type { ProfessorStudentRow } from "@/lib/server/professor-users";
import { Trash2, UserMinus, UserPlus } from "lucide-react";

type ProfessorCoursesPanelProps = {
  students: ProfessorStudentRow[];
};

export function ProfessorCoursesPanel({ students }: ProfessorCoursesPanelProps) {
  const router = useRouter();
  const [courses, setCourses] = useState<CourseRecord[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(courses[0]?.id ?? null);
  const [enrollQuery, setEnrollQuery] = useState<Record<string, string>>({});

  async function getToken() {
    return (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
  }

  async function reloadCourses() {
    const result = await listProfessorCoursesAction(await getToken());
    setCourses(result.courses ?? []);
  }

  useEffect(() => {
    reloadCourses().finally(() => setLoadingCourses(false));
  }, []);

  const studentsById = useMemo(() => {
    const map = new Map<string, ProfessorStudentRow>();
    for (const student of students) {
      map.set(student.uid, student);
    }
    return map;
  }, [students]);

  function handleCreate(formData: FormData) {
    setMessage("");
    setError("");
    startTransition(async () => {
      const result = await createCourseAction(await getToken(), formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Grupo creado correctamente.");
        await reloadCourses();
        router.refresh();
      }
    });
  }

  function handleEnroll(courseId: string, studentId: string) {
    setError("");
    startTransition(async () => {
      const result = await enrollStudentAction(await getToken(), courseId, studentId);
      if (result.error) {
        setError(result.error);
      } else {
        await reloadCourses();
        router.refresh();
      }
    });
  }

  function handleUnenroll(courseId: string, studentId: string) {
    setError("");
    startTransition(async () => {
      const result = await unenrollStudentAction(await getToken(), courseId, studentId);
      if (result.error) {
        setError(result.error);
      } else {
        await reloadCourses();
        router.refresh();
      }
    });
  }

  function handleDelete(courseId: string, courseName: string) {
    if (!window.confirm(`¿Eliminar el grupo "${courseName}"?`)) return;

    setError("");
    startTransition(async () => {
      const result = await deleteCourseAction(await getToken(), courseId);
      if (result.error) {
        setError(result.error);
      } else {
        await reloadCourses();
        router.refresh();
      }
    });
  }

  return (
    <div className="space-y-8">
      {loadingCourses ? (
        <div className="animate-pulse rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 h-32" />
      ) : null}
      <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-white">Crear grupo</h2>
        <p className="mt-1 text-sm text-mq-muted">
          Un grupo reúne a tus alumnos. Matrícalos y luego programa clases solo para ese
          grupo.
        </p>

        <form action={handleCreate} className="mt-6 grid gap-4">
          <div>
            <label className="text-xs font-semibold uppercase text-mq-muted">Nombre</label>
            <input
              name="name"
              required
              placeholder="Cardiología — Grupo A"
              className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-mq-muted">Descripción</label>
            <textarea
              name="description"
              rows={2}
              placeholder="Objetivo del grupo, universidad, especialidad..."
              className="mt-1 w-full resize-none rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isPending}
              className="rounded-lg bg-mq-accent px-5 py-2.5 text-sm font-bold text-mq-accent-foreground disabled:opacity-50"
            >
              {isPending ? "Creando..." : "Crear grupo"}
            </button>
          </div>
        </form>

        {message ? <p className="mt-4 text-sm text-mq-accent">{message}</p> : null}
        {error ? <p className="mt-4 text-sm text-rose-400">{error}</p> : null}
      </section>

      <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-white">Mis grupos</h2>
        <p className="mt-1 text-sm text-mq-muted">
          {courses.length} grupo{courses.length === 1 ? "" : "s"} activo
          {courses.length === 1 ? "" : "s"}.
        </p>

        {courses.length === 0 ? (
          <p className="mt-6 text-sm text-mq-muted">
            Aún no tienes grupos. Crea el primero arriba para empezar a matricular alumnos.
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {courses.map((course) => {
              const isOpen = expandedId === course.id;
              const query = (enrollQuery[course.id] ?? "").trim().toLowerCase();
              const enrolled = course.studentIds
                .map((id) => studentsById.get(id))
                .filter(Boolean) as ProfessorStudentRow[];
              const available = students.filter(
                (student) =>
                  !course.studentIds.includes(student.uid) &&
                  (!query ||
                    student.email.toLowerCase().includes(query) ||
                    student.displayName.toLowerCase().includes(query)),
              );

              return (
                <li
                  key={course.id}
                  className="rounded-xl border border-mq-border bg-mq-surface/60 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isOpen ? null : course.id)}
                      className="text-left"
                    >
                      <p className="text-lg font-semibold text-white">{course.name}</p>
                      {course.description ? (
                        <p className="mt-1 text-sm text-mq-muted">{course.description}</p>
                      ) : null}
                      <p className="mt-2 text-xs text-mq-accent">
                        {enrolled.length} alumno{enrolled.length === 1 ? "" : "s"} matriculado
                        {enrolled.length === 1 ? "" : "s"}
                      </p>
                    </button>
                    <button
                      type="button"
                      disabled={isPending}
                      onClick={() => handleDelete(course.id, course.name)}
                      className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/10"
                    >
                      <Trash2 size={14} />
                      Eliminar
                    </button>
                  </div>

                  {isOpen ? (
                    <div className="mt-5 space-y-5 border-t border-white/10 pt-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
                          Matriculados
                        </p>
                        {enrolled.length === 0 ? (
                          <p className="mt-2 text-sm text-mq-muted">Sin alumnos aún.</p>
                        ) : (
                          <ul className="mt-3 space-y-2">
                            {enrolled.map((student) => (
                              <li
                                key={student.uid}
                                className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
                              >
                                <div>
                                  <p className="text-sm font-medium text-white">
                                    {student.displayName}
                                  </p>
                                  <p className="text-xs text-mq-muted">{student.email}</p>
                                </div>
                                <button
                                  type="button"
                                  disabled={isPending}
                                  onClick={() => handleUnenroll(course.id, student.uid)}
                                  className="inline-flex items-center gap-1 text-xs font-semibold text-mq-muted hover:text-rose-300"
                                >
                                  <UserMinus size={14} />
                                  Quitar
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
                          Agregar alumno
                        </p>
                        <input
                          type="search"
                          value={enrollQuery[course.id] ?? ""}
                          onChange={(e) =>
                            setEnrollQuery((prev) => ({
                              ...prev,
                              [course.id]: e.target.value,
                            }))
                          }
                          placeholder="Buscar por nombre o correo"
                          className="mt-2 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white"
                        />
                        <ul className="mt-3 max-h-48 space-y-2 overflow-y-auto">
                          {available.slice(0, 8).map((student) => (
                            <li
                              key={student.uid}
                              className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
                            >
                              <div>
                                <p className="text-sm font-medium text-white">
                                  {student.displayName}
                                </p>
                                <p className="text-xs text-mq-muted">
                                  {student.email} · {student.plan}
                                </p>
                              </div>
                              <button
                                type="button"
                                disabled={isPending}
                                onClick={() => handleEnroll(course.id, student.uid)}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-mq-accent hover:underline"
                              >
                                <UserPlus size={14} />
                                Matricular
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
