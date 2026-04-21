import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mq-border bg-mq-surface/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-12 text-sm text-mq-muted sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} Método Q. Todos los derechos reservados.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            href="#faq"
            className="min-h-11 inline-flex items-center transition hover:text-foreground"
          >
            Ayuda
          </Link>
          <Link
            href="#precios"
            className="min-h-11 inline-flex items-center transition hover:text-foreground"
          >
            Planes
          </Link>
          <span className="text-center sm:text-right">
            Next.js · Tailwind · App Router
          </span>
        </div>
      </div>
    </footer>
  );
}
