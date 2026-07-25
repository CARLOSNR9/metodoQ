"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { AuthDrawer } from "./auth-drawer";
import { trackClickDemo } from "@/lib/analytics/events";
import { useUserRole } from "@/hooks/use-user-role";
import { logoutUser } from "@/lib/auth";
import { getPostLoginPath } from "@/lib/roles";
import { UrgencyBanner } from "@/components/landing/urgency-banner";

const nav = [
  { label: "Método", href: "/#como-funciona" },
  { label: "Simulacros", href: "/#simulacros" },
  { label: "Precios", href: "/#precios" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "FAQ", href: "/#faq" },
] as const;

function AuthNavActions({
  onOpenAuth,
  compact = false,
}: {
  onOpenAuth: () => void;
  compact?: boolean;
}) {
  const router = useRouter();
  const { role, email, loading } = useUserRole();
  const isLoggedIn = Boolean(email);

  if (loading) {
    return (
      <span
        className={`inline-block animate-pulse rounded-lg bg-slate-100 ${
          compact ? "h-11 min-w-[4.5rem] flex-1" : "hidden h-9 w-24 sm:block"
        }`}
        aria-hidden
      />
    );
  }

  if (isLoggedIn) {
    const panelPath = getPostLoginPath(role, email);

    return (
      <>
        <Link
          href={panelPath}
          className={
            compact
              ? "min-h-11 flex-1 rounded-lg px-1 py-2 text-center text-[0.75rem] font-bold uppercase tracking-wider transition duration-200 hover:bg-slate-50 hover:text-mq-accent flex items-center justify-center text-slate-600"
              : "hidden text-sm font-semibold text-slate-600 transition hover:text-slate-900 sm:block"
          }
        >
          Mi panel
        </Link>
        <button
          type="button"
          onClick={async () => {
            await logoutUser();
            router.refresh();
          }}
          className={
            compact
              ? "min-h-11 flex-1 rounded-lg px-1 py-2 text-center text-[0.75rem] font-bold uppercase tracking-wider transition duration-200 hover:bg-red-50 hover:text-red-500 flex items-center justify-center gap-1 text-slate-500"
              : "hidden items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-red-500 sm:inline-flex"
          }
        >
          {!compact ? <LogOut size={14} /> : null}
          <span>{compact ? "Salir" : "Cerrar sesión"}</span>
        </button>
      </>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpenAuth}
      className={
        compact
          ? "min-h-11 flex-1 rounded-lg px-1 py-2 text-center text-[0.75rem] font-bold uppercase tracking-wider transition duration-200 hover:bg-slate-50 hover:text-mq-accent flex items-center justify-center text-slate-600"
          : "hidden text-sm font-semibold text-slate-600 transition hover:text-slate-900 sm:block"
      }
    >
      Iniciar sesión
    </button>
  );
}

export function SiteHeader() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const pathname = usePathname();

  const isStaffPanel =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/profesor") ||
    pathname?.startsWith("/moderador");

  if (pathname?.startsWith("/dashboard") || isStaffPanel) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50">
      {pathname === "/" && <UrgencyBanner />}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center transition duration-200 hover:scale-[1.02] active:scale-95 gap-2"
          >
            <Logo />
            <span className="text-[10px] font-bold text-mq-accent bg-mq-accent/10 px-2 py-0.5 rounded-full border border-mq-accent/20">PRO</span>
          </Link>
          
          <nav
            className="hidden items-center gap-8 text-sm font-semibold text-slate-600 sm:flex ml-4"
            aria-label="Principal"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition duration-200 hover:text-mq-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
            <AuthNavActions onOpenAuth={() => setIsAuthOpen(true)} />
            <Link
              href="/demo"
              onClick={() => trackClickDemo()}
              className="group relative inline-flex min-h-10 items-center justify-center rounded-xl bg-mq-accent px-5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md active:translate-y-0 sm:min-h-11 sm:px-6 sm:text-sm"
            >
              <span className="relative">Haz tu diagnóstico gratis</span>
            </Link>
          </div>
        </div>
        
        <AuthDrawer isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        
        {/* Mobile Nav */}
        <nav
          className="flex border-t border-slate-200/60 bg-white/95 px-3 py-2 sm:hidden"
          aria-label="Secciones"
        >
          <div className="flex w-full justify-between gap-1 text-[0.75rem] font-bold text-slate-500 uppercase tracking-wider">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-11 flex-1 rounded-lg px-1 py-2 text-center transition duration-200 hover:bg-slate-50 hover:text-mq-accent flex items-center justify-center"
              >
                {item.label}
              </Link>
            ))}
            <AuthNavActions onOpenAuth={() => setIsAuthOpen(true)} compact />
          </div>
        </nav>
      </header>
    </div>
  );
}
