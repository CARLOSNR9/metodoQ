"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { AuthDrawer } from "./auth-drawer";

const nav = [
  { label: "Método", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
] as const;

export function SiteHeader() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mq-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center transition duration-200 hover:scale-[1.02] active:scale-95"
        >
          <Logo />
        </Link>
        
        <nav
          className="hidden items-center gap-10 text-sm font-medium text-mq-muted sm:flex"
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

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsAuthOpen(true)}
            className="hidden text-sm font-medium text-mq-muted transition hover:text-white lg:block"
          >
            Acceder
          </button>
          <Link
            href="/demo"
            className="group relative inline-flex min-h-11 items-center justify-center rounded-full bg-mq-accent px-6 text-[13px] font-bold text-mq-accent-foreground transition duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:text-sm"
          >
            {/* Pulsing Glow Background */}
            <div className="absolute inset-0 animate-[pulse-glow_3s_infinite] rounded-full bg-mq-accent/40 blur-md transition-all group-hover:bg-mq-accent/60" />
            
            <span className="relative">Haz tu diagnóstico gratis</span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
      
      <AuthDrawer isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      
      {/* Mobile Nav */}
      <nav
        className="flex border-t border-mq-border/60 bg-background/95 px-3 py-2 sm:hidden"
        aria-label="Secciones"
      >
        <div className="flex w-full justify-between gap-1 text-[0.75rem] font-bold text-mq-muted uppercase tracking-wider">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 flex-1 rounded-lg px-1 py-2 text-center transition duration-200 hover:bg-white/[0.04] hover:text-mq-accent flex items-center justify-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
