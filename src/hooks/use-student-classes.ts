"use client";

import { useEffect, useMemo, useState } from "react";
import { getClasses } from "@/lib/classes/service";
import { buildStudentClassViews, type StudentClassView } from "@/lib/classes/student-classes";
import { getEnrolledCourseIds } from "@/lib/courses/service";

export function useStudentClasses(userId: string | undefined, enabled: boolean) {
  const [views, setViews] = useState<StudentClassView[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (!enabled || !userId) {
        setViews([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const [data, enrolledCourseIds] = await Promise.all([
          getClasses(true),
          getEnrolledCourseIds(userId),
        ]);
        if (!mounted) return;
        setViews(buildStudentClassViews(data, enrolledCourseIds));
      } catch (err) {
        console.error("Error al cargar clases del estudiante:", err);
        if (mounted) {
          setError("No se pudieron cargar tus clases.");
          setViews([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId, enabled]);

  const upcoming = useMemo(
    () => views.filter((item) => item.isUpcoming),
    [views],
  );

  const past = useMemo(
    () => views.filter((item) => item.isPast).sort((a, b) => b.classDate.getTime() - a.classDate.getTime()),
    [views],
  );

  const nextClass = useMemo(() => {
    const liveNow = upcoming.find((item) => item.isLiveNow);
    if (liveNow) return liveNow;
    return upcoming.find((item) => !item.isLiveNow) ?? null;
  }, [upcoming]);

  return { views, upcoming, past, nextClass, loading, error };
}
