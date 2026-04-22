import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mq-border bg-mq-surface/50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Logo />
            <p className="max-w-xs text-center text-sm leading-relaxed text-mq-muted sm:text-left">
              Transformando la forma en que el mundo entiende lo complejo.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6 sm:items-end">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-mq-muted">
              <Link href="#como-funciona" className="transition hover:text-white">Método</Link>
              <Link href="#precios" className="transition hover:text-white">Precios</Link>
              <Link href="#faq" className="transition hover:text-white">Preguntas</Link>
              <Link href="/login" className="transition hover:text-white">Entrar</Link>
            </nav>
            
            <p className="text-xs text-mq-muted/60">
              © {year} Método Q. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
