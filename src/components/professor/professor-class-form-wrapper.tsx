"use client";

import { useEffect, useState } from "react";
import { listProfessorCoursesAction } from "@/app/profesor/course-actions";
import { ProfessorClassForm } from "@/components/professor/professor-class-form";
import { getFirebaseAuth } from "@/lib/firebase";
import type { CourseRecord } from "@/lib/courses/types";

export function ProfessorClassFormWrapper() {
  const [courses, setCourses] = useState<CourseRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const token = (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
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
      <div className="animate-pulse rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 h-48" />
    );
  }

  return <ProfessorClassForm courses={courses} />;
}
