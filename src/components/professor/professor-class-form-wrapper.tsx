"use client";

import { useEffect, useState } from "react";
import { listProfessorCoursesAction } from "@/app/profesor/course-actions";
import { ProfessorClassForm } from "@/components/professor/professor-class-form";
import { getStaffIdToken } from "@/lib/client/staff-id-token";
import type { CourseRecord } from "@/lib/courses/types";

export function ProfessorClassFormWrapper() {
  const [courses, setCourses] = useState<CourseRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const token = await getStaffIdToken();
        const result = await listProfessorCoursesAction(token);
        setCourses(result.courses ?? []);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse rounded-xl border border-slate-200 bg-white-raised p-6 h-48" />
    );
  }

  return <ProfessorClassForm courses={courses} />;
}
