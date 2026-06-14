"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUserProfile } from "@/hooks/use-user-profile";
import { logoutUser } from "@/lib/auth";
import { getUserGreetingName } from "@/lib/plans/subscription-display";
import {
  LayoutDashboard,
  Users,
  Receipt,
  GraduationCap,
  BarChart3,
  BookOpen,
  LogOut,
  ExternalLink,
} from "lucide-react";

type AdminShellProps = {
  children: React.ReactNode;
};

const navigationItems = [
  { label: "Inicio", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Usuarios", href: "/admin/usuarios", icon: Users, exact: true },
  { label: "Ventas manuales", href: "/admin/ventas", icon: Receipt, exact: true },
  { label: "Plan Residente", href: "/admin/residente", icon: GraduationCap, exact: true },
  { label: "Métricas", href: "/admin/metricas", icon: BarChart3, exact: true },
  { label: "Contenido", href: "/admin/contenido", icon: BookOpen, exact: true },
] as const;

const externalLinks = [
  { label: "Panel profesor", href: "/profesor" },
  { label: "Panel moderador", href: "/moderador" },
] as const;

function isNavActive(pathname: string, href: string, exact?: boolean) {
  if (exact) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminShell({ children }: AdminShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { profile } = useUserProfile();
  const greetingName = getUserGreetingName(profile);

  return (
    <main className="flex min-h-screen flex-1 flex-col bg-[#0A1F44] md:flex-row">
      <aside className="relative z-20 w-full border-b border-mq-border-strong bg-white/[0.02] p-4 md:min-h-full md:w-64 md:border-b-0 md:border-r md:p-6">
        <div className="mb-8 hidden md:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-mq-accent">
              <span className="text-xl font-bold text-mq-accent-foreground">Q</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mq-accent">
                Método Q
              </p>
              <h2 className="text-sm font-semibold text-white">Panel Admin</h2>
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
                    : "text-mq-muted hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.5 : 2} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 hidden border-t border-mq-border-strong pt-4 md:block">
          <p className="mb-2 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-mq-muted">
            Otros paneles
          </p>
          {externalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-mq-muted transition-all hover:bg-white/[0.05] hover:text-white"
            >
              <ExternalLink size={16} />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="mq-glass sticky top-0 z-10 flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mq-accent to-indigo-500 text-xs font-bold text-white sm:flex">
              {profile?.email?.[0]?.toUpperCase() ?? "A"}
            </div>
            <p className="text-xs font-medium text-mq-muted sm:text-sm">
              <span className="hidden sm:inline">Sesión de </span>
              <span className="text-white">
                {greetingName !== "Doc" ? greetingName : profile?.email}
              </span>
              {greetingName !== "Doc" && profile?.email ? (
                <span className="hidden text-mq-muted lg:inline"> · {profile.email}</span>
              ) : null}
            </p>
          </div>

          <button
            type="button"
            onClick={async () => {
              await logoutUser();
              router.replace("/login");
            }}
            className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-mq-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={14} className="transition-transform group-hover:translate-x-0.5" />
            <span>Salir</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-5xl">{children}</div>
        </div>
      </section>
    </main>
  );
}
