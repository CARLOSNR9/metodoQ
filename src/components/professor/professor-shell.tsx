"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useUserRole } from "@/hooks/use-user-role";
import { logoutUser } from "@/lib/auth";
import { getUserGreetingName } from "@/lib/plans/subscription-display";
import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  GraduationCap,
  Users,
  Calendar,
  ClipboardList,
  LogOut,
  ClipboardCheck,
  Flag,
  Shield,
} from "lucide-react";

type ProfessorShellProps = {
  children: React.ReactNode;
};

const navigationItems = [
  { label: "Inicio", href: "/profesor", icon: LayoutDashboard, exact: true },
  { label: "Banco de preguntas", href: "/profesor/preguntas", icon: BookOpen, exact: true },
  { label: "Preguntas reportadas", href: "/profesor/preguntas-reportadas", icon: Flag },
  { label: "Revisar convocatorias", href: "/profesor/convocatorias", icon: ClipboardCheck },
  { label: "Agregar preguntas", href: "/profesor/preguntas/nueva", icon: PlusCircle, exact: true },
  { label: "Mis grupos", href: "/profesor/cursos", icon: GraduationCap },
  { label: "Alumnos", href: "/profesor/alumnos", icon: Users },
  { label: "Programar clases", href: "/profesor/clases", icon: Calendar },
  { label: "Asistencia", href: "/profesor/asistencia", icon: ClipboardList },
] as const;

function isNavActive(pathname: string, href: string, exact?: boolean) {
  if (exact) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ProfessorShell({ children }: ProfessorShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { profile } = useUserProfile();
  const { isAdmin, loading: isLoadingRole } = useUserRole();
  const greetingName = getUserGreetingName(profile);

  return (
    <main className="flex min-h-screen flex-1 flex-col bg-slate-50 md:flex-row">
      <aside className="relative z-20 w-full border-b border-slate-200 bg-slate-50 p-4 md:min-h-full md:w-64 md:border-b-0 md:border-r md:p-6">
        <div className="mb-8 hidden md:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-mq-accent">
              <span className="text-xl font-bold text-mq-accent-foreground">Q</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mq-accent">
                Método Q
              </p>
              <h2 className="text-sm font-semibold text-slate-900">Panel Docente</h2>
            </div>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
          {navigationItems.map((item) => {
            const active = isNavActive(pathname, item.href, "exact" in item ? item.exact : false);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 shrink-0 items-center gap-3 rounded-xl px-4 text-sm font-semibold transition-all duration-300 md:w-full ${
                  active
                    ? "bg-mq-accent text-mq-accent-foreground shadow-[0_8px_20px_-8px_rgb(0_209_255/0.8)]"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.5 : 2} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="mq-glass sticky top-0 z-10 flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mq-accent to-indigo-500 text-xs font-bold text-white sm:flex">
              {profile?.email?.[0]?.toUpperCase() ?? "P"}
            </div>
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              <span className="hidden sm:inline">Sesión de </span>
              <span className="text-slate-900">
                {greetingName !== "Doc" ? greetingName : profile?.email}
              </span>
              {greetingName !== "Doc" && profile?.email ? (
                <span className="hidden text-slate-500 lg:inline"> · {profile.email}</span>
              ) : null}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {!isLoadingRole && isAdmin ? (
              <Link
                href="/admin"
                className="group flex items-center gap-2 rounded-lg border border-mq-accent/30 bg-mq-accent/10 px-3 py-1.5 text-xs font-semibold text-mq-accent transition-colors hover:bg-mq-accent/20"
              >
                <Shield size={14} className="transition-transform group-hover:-translate-x-0.5" />
                <span className="hidden sm:inline">Panel admin</span>
              </Link>
            ) : null}
            <button
              type="button"
              onClick={async () => {
                await logoutUser();
                router.replace("/login");
              }}
              className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
            >
            <LogOut size={14} className="transition-transform group-hover:translate-x-0.5" />
            <span>Salir</span>
          </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-5xl">{children}</div>
        </div>
      </section>
    </main>
  );
}
