import Link from "next/link";
import { adminListQuestionsForReview } from "@/lib/server/questions-admin";
import { adminListClasses } from "@/lib/server/classes-admin";
import { getProfessorStudentDirectory } from "@/lib/server/professor-users";
import { ChevronRight, Users, BookOpen, Calendar, GraduationCap } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ProfessorHomePage() {
  let pendingCount = 0;
  let totalQuestions = 0;
  let upcomingClasses = 0;
  let studentCounts = { total: 0, pro: 0, residente: 0 };

  try {
    const questions = await adminListQuestionsForReview();
    totalQuestions = questions.length;
    pendingCount = questions.filter((q) => (q.reviewStatus ?? "pending") === "pending").length;
  } catch {
    /* panel usable sin contadores */
  }

  try {
    const classes = await adminListClasses();
    const now = Date.now();
    upcomingClasses = classes.filter((cls) => {
      if (!cls.dateIso) return false;
      const endMs = new Date(cls.dateIso).getTime() + cls.duration * 60_000;
      return endMs > now;
    }).length;
  } catch {
    /* ignore */
  }

  try {
    const students = await getProfessorStudentDirectory();
    studentCounts = {
      total: students.length,
      pro: students.filter((s) => s.plan === "PRO").length,
      residente: students.filter((s) => s.plan === "RESIDENTE").length,
    };
  } catch {
    /* ignore */
  }

  const quickLinks = [
    {
      href: "/profesor/preguntas",
      icon: BookOpen,
      title: "Revisar preguntas",
      detail:
        totalQuestions > 0
          ? `${pendingCount} pendiente${pendingCount === 1 ? "" : "s"} de ${totalQuestions}`
          : "Abrir banco clínico",
    },
    {
      href: "/profesor/cursos",
      icon: GraduationCap,
      title: "Mis cursos",
      detail: "Crea grupos y matricula alumnos",
    },
    {
      href: "/profesor/clases",
      icon: Calendar,
      title: "Programar clases",
      detail:
        upcomingClasses > 0
          ? `${upcomingClasses} próxima${upcomingClasses === 1 ? "" : "s"} en el sistema`
          : "Publicar sesión en vivo",
    },
    {
      href: "/profesor/alumnos",
      icon: Users,
      title: "Alumnos",
      detail:
        studentCounts.total > 0
          ? `${studentCounts.pro + studentCounts.residente} con acceso a clases en vivo`
          : "Ver listas por plan",
    },
  ] as const;

  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Panel docente
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tu espacio de enseñanza
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Gestiona el banco de preguntas, organiza cursos, matricula alumnos y programa clases
          que aparecerán en el panel de los estudiantes.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-mq-border bg-mq-surface-raised/60 p-5">
          <p className="text-xs uppercase tracking-wider text-mq-muted">Preguntas pendientes</p>
          <p className="mt-2 text-3xl font-bold text-white">{pendingCount}</p>
        </div>
        <div className="rounded-xl border border-mq-border bg-mq-surface-raised/60 p-5">
          <p className="text-xs uppercase tracking-wider text-mq-muted">Clases próximas</p>
          <p className="mt-2 text-3xl font-bold text-white">{upcomingClasses}</p>
        </div>
        <div className="rounded-xl border border-mq-border bg-mq-surface-raised/60 p-5">
          <p className="text-xs uppercase tracking-wider text-mq-muted">Alumnos Pro</p>
          <p className="mt-2 text-3xl font-bold text-white">{studentCounts.pro}</p>
        </div>
        <div className="rounded-xl border border-mq-border bg-mq-surface-raised/60 p-5">
          <p className="text-xs uppercase tracking-wider text-mq-muted">Residentes</p>
          <p className="mt-2 text-3xl font-bold text-white">{studentCounts.residente}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Accesos rápidos</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-mq-accent/25 bg-mq-accent/10 px-5 py-4 transition hover:bg-mq-accent/15"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-mq-accent" />
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-mq-muted">{item.detail}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-mq-accent" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
