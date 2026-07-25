"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useStudyNotesCount } from "@/hooks/use-study-notes-count";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useUserRole } from "@/hooks/use-user-role";
import { logoutUser } from "@/lib/auth";
import { getDoctorGreetingName, getUserGreetingName } from "@/lib/plans/subscription-display";
import { hasProFeatures } from "@/lib/plans/access";
import { PomodoroProvider } from "@/contexts/pomodoro-context";
import { AchievementNotification } from "./achievement-notification";
import { PomodoroHeaderChip } from "./pomodoro-header-chip";
import { PomodoroGlobalOverlay } from "./pomodoro-global-overlay";
import { QBotWidget } from "./q-bot-widget";
import {
  LayoutDashboard,
  GraduationCap,
  History,
  User,
  LogOut,
  Timer,
  CreditCard,
  StickyNote,
  RotateCcw,
  CalendarDays,
  ClipboardCheck,
  Shield,
} from "lucide-react";
import { useFailedQuestionsCount } from "@/hooks/use-failed-questions-count";

type DashboardShellProps = {
  children: React.ReactNode;
};

const navigationItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Entrenar", href: "/dashboard/entrenar", icon: GraduationCap },
  { label: "Refuerzo", href: "/dashboard/refuerzo", icon: RotateCcw },
  { label: "Estudio", href: "/dashboard/estudio", icon: StickyNote },
  { label: "Simulacros", href: "/dashboard/convocatorias", icon: ClipboardCheck, proOnly: true },
  { label: "Mis clases", href: "/dashboard/clases", icon: CalendarDays, proOnly: true },
  { label: "Planes", href: "/dashboard/planes", icon: CreditCard },
  { label: "Historial", href: "/dashboard/historial", icon: History },
  { label: "Perfil", href: "/dashboard/perfil", icon: User },
] as const;

export function DashboardShell({ children }: DashboardShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile } = useUserProfile();
  const { isAdmin, loading: isLoadingRole } = useUserRole();
  const studyNotesCount = useStudyNotesCount(user?.uid);
  const failedQuestionsCount = useFailedQuestionsCount(user?.uid);
  const greetingName = getUserGreetingName(profile);
  const doctorGreetingName = getDoctorGreetingName(profile);
  const isProUser = hasProFeatures(profile?.plan);

  if (isCheckingAuth) {
    return (
      <main className="flex min-h-screen flex-1 items-center justify-center bg-slate-50 px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
          <p className="text-sm font-medium text-slate-500">Sincronizando con el servidor...</p>
        </div>
      </main>
    );
  }

  return (
    <PomodoroProvider userId={user?.uid} isProUser={isProUser}>
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
              <h2 className="text-sm font-semibold text-slate-900">Panel de Control</h2>
            </div>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
          {navigationItems
            .filter((item) => !("proOnly" in item && item.proOnly) || isProUser)
            .map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 shrink-0 items-center gap-3 rounded-xl px-4 text-sm font-semibold transition-all duration-300 md:w-full ${
                  isActive
                    ? "bg-mq-accent text-mq-accent-foreground shadow-[0_8px_20px_-8px_rgb(0_209_255/0.8)]"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="md:inline">{item.label}</span>
                {item.href === "/dashboard/estudio" && studyNotesCount > 0 ? (
                  <span className="ml-auto hidden rounded-full bg-mq-accent/20 px-2 py-0.5 text-[10px] font-black text-mq-accent md:inline">
                    {studyNotesCount}
                  </span>
                ) : null}
                {item.href === "/dashboard/refuerzo" && failedQuestionsCount > 0 ? (
                  <span className="ml-auto hidden rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-black text-amber-300 md:inline">
                    {failedQuestionsCount}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="mq-glass sticky top-0 z-10 flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mq-accent to-indigo-500 text-xs font-bold text-white sm:flex">
              {user?.email?.[0].toUpperCase()}
            </div>
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              <span className="hidden sm:inline">Sesión de </span>
              <span className="text-slate-900">
                {greetingName !== "Doc" ? greetingName : user?.email}
              </span>
              {greetingName !== "Doc" && user?.email ? (
                <span className="hidden text-slate-500 lg:inline"> · {user.email}</span>
              ) : null}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <PomodoroHeaderChip />
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
          <div className="mx-auto max-w-7xl">
            {!isLoadingRole && isAdmin ? (
              <p className="mb-4 rounded-xl border border-mq-accent/20 bg-mq-accent/5 px-4 py-2.5 text-xs text-slate-500">
                Vista previa de estudiante con plan{" "}
                <span className="font-semibold text-mq-accent">Pro</span>. No modifica tu cuenta
                real.
              </p>
            ) : null}
            {children}
          </div>
        </div>
      </section>
      <AchievementNotification userId={user?.uid ?? ""} />
      {isProUser ? <PomodoroGlobalOverlay greetingName={doctorGreetingName} /> : null}
      <QBotWidget />
    </main>
    </PomodoroProvider>
  );
}
