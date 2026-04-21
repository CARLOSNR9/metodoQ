import Link from "next/link";

const nav = [
  { label: "Método", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-mq-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-[3.75rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition hover:text-white sm:text-base"
        >
          Método Q
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm text-mq-muted sm:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#precios"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-mq-accent px-5 text-sm font-semibold text-mq-accent-foreground shadow-[0_1px_0_rgb(255_255_255/0.12)_inset] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent active:translate-y-0"
        >
          Empezar gratis
        </Link>
      </div>
      <nav
        className="flex border-t border-mq-border/60 bg-background/95 px-3 py-2 sm:hidden"
        aria-label="Secciones"
      >
        <div className="flex w-full justify-between gap-1 text-[0.8125rem] font-medium text-mq-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 flex-1 rounded-lg px-1 py-2 text-center transition duration-200 hover:bg-white/[0.04] hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
