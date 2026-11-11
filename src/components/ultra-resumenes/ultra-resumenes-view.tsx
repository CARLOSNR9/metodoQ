"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpenText,
  Check,
  ChevronRight,
  GalleryHorizontalEnd,
  Loader2,
  Lock,
  RotateCcw,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  ULTRA_LEVEL_LABELS,
  isUltraCard,
  type UltraCard,
  type UltraCategory,
  type UltraEntry,
  type UltraLevel,
} from "@/lib/ultra-resumenes/types";
import { useUltraProgress, type UltraProgressField } from "@/lib/ultra-resumenes/progress";

/** Fichas visibles por categoría sin plan de pago. */
export const ULTRA_FREE_PREVIEW_CARDS = 3;

type Variant = "default" | "mir";

const THEMES = {
  default: {
    title: "text-slate-900",
    text: "text-slate-700",
    muted: "text-slate-500",
    accent: "text-mq-accent",
    accentBg: "bg-mq-accent text-mq-accent-foreground",
    panel: "border-slate-200 bg-white",
    panelHover: "hover:border-mq-accent/50 hover:shadow-md",
    soft: "border-slate-200 bg-slate-50",
    input: "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-mq-accent",
    chip: "border-slate-200 text-slate-600 hover:border-slate-300",
    chipActive: "border-mq-accent bg-mq-accent/10 text-slate-900",
    track: "bg-slate-200",
    bar: "bg-mq-accent",
    hero: "border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white",
    heroAccent: "text-mq-accent",
    spinner: "text-mq-accent",
  },
  mir: {
    title: "text-white",
    text: "text-slate-200",
    muted: "text-slate-400",
    accent: "text-mq-premium-gold",
    accentBg: "bg-mq-premium-gold text-[#0A1F44]",
    panel: "border-white/10 bg-white/[0.04]",
    panelHover: "hover:border-mq-premium-gold/50 hover:bg-white/[0.06]",
    soft: "border-white/10 bg-white/[0.03]",
    input: "border-white/15 bg-white/[0.05] text-white placeholder:text-slate-500 focus:border-mq-premium-gold",
    chip: "border-white/15 text-slate-300 hover:border-white/30",
    chipActive: "border-mq-premium-gold bg-mq-premium-gold/10 text-white",
    track: "bg-white/10",
    bar: "bg-mq-premium-gold",
    hero: "border-white/10 bg-gradient-to-br from-[#5b1650] via-[#3b1150] to-[#0A1F44] text-white",
    heroAccent: "text-lime-300",
    spinner: "text-mq-premium-gold",
  },
} as const;

/** Colores por nivel, iguales en los dos temas para que el código de color se aprenda una vez. */
const LEVEL_STYLES: Record<UltraLevel, { bar: string; badge: string }> = {
  1: { bar: "bg-lime-400", badge: "border-lime-400/50 bg-lime-400/15 text-lime-700" },
  2: { bar: "bg-lime-200", badge: "border-lime-300/60 bg-lime-200/30 text-lime-800" },
  3: { bar: "bg-sky-300", badge: "border-sky-300/60 bg-sky-300/20 text-sky-800" },
  4: { bar: "bg-fuchsia-300", badge: "border-fuchsia-300/60 bg-fuchsia-300/20 text-fuchsia-800" },
  5: { bar: "bg-slate-400", badge: "border-slate-400/60 bg-slate-400/20 text-slate-700" },
};

const MIR_LEVEL_BADGES: Record<UltraLevel, string> = {
  1: "border-lime-400/50 bg-lime-400/15 text-lime-300",
  2: "border-lime-200/50 bg-lime-200/10 text-lime-100",
  3: "border-sky-300/50 bg-sky-300/10 text-sky-200",
  4: "border-fuchsia-300/50 bg-fuchsia-300/10 text-fuchsia-200",
  5: "border-slate-400/50 bg-slate-400/10 text-slate-300",
};

function LevelBadge({ level, variant }: { level: UltraLevel; variant: Variant }) {
  const style = variant === "mir" ? MIR_LEVEL_BADGES[level] : LEVEL_STYLES[level].badge;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-black uppercase tracking-wide ${style}`}>
      Nivel {level} · {ULTRA_LEVEL_LABELS[level]}
    </span>
  );
}

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function matchesQuery(card: UltraCard, query: string): boolean {
  if (!query) return true;
  const haystack = normalize(`${card.title} ${card.points.join(" ")}`);
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

/** "Clínica: fiebre…" → etiqueta en negrita y el resto normal. */
function PointText({ text }: { text: string }) {
  const match = text.match(/^([^:]{2,40}):\s+([\s\S]+)$/);
  if (!match) return <>{text}</>;
  return (
    <>
      <strong className="font-bold">{match[1]}:</strong> {match[2]}
    </>
  );
}

type UltraResumenesViewProps = {
  userId: string;
  variant: Variant;
  progressField: UltraProgressField;
  eyebrow: string;
  title: string;
  description: string;
  categories: UltraCategory[];
  /** Orden de los grupos en la portada; los que no aparezcan van al final. */
  groupOrder?: string[];
  groupDescriptions?: Record<string, string>;
  hero?: ReactNode;
  /** Sin plan de pago: solo las primeras fichas de cada categoría. */
  locked?: boolean;
  upgradeHref?: string;
  footnote?: ReactNode;
};

export function UltraResumenesView({
  userId,
  variant,
  progressField,
  eyebrow,
  title,
  description,
  categories,
  groupOrder = [],
  groupDescriptions = {},
  hero,
  locked = false,
  upgradeHref = "/dashboard/planes",
  footnote,
}: UltraResumenesViewProps) {
  const theme = THEMES[variant];
  const { mastered, toggle, error } = useUltraProgress(userId, progressField);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [loaded, setLoaded] = useState<Record<string, UltraEntry[]>>({});
  const [globalQuery, setGlobalQuery] = useState("");

  const activeCategory = categories.find((category) => category.slug === activeSlug) ?? null;

  // Carga perezosa de la categoría abierta.
  useEffect(() => {
    if (!activeCategory || loaded[activeCategory.slug]) return;
    let cancelled = false;
    activeCategory.load().then((entries) => {
      if (!cancelled) setLoaded((current) => ({ ...current, [activeCategory.slug]: entries }));
    });
    return () => {
      cancelled = true;
    };
  }, [activeCategory, loaded]);

  // El buscador global y el progreso por categoría necesitan todas las
  // categorías: se cargan al buscar por primera vez o si ya hay fichas dominadas.
  const wantsGlobalSearch = globalQuery.trim().length >= 3;
  const allLoaded = categories.every((category) => loaded[category.slug]);
  const hasMastered = Object.keys(mastered ?? {}).length > 0;
  const needsAll = wantsGlobalSearch || hasMastered;
  const isLoadingAll = wantsGlobalSearch && !allLoaded;
  useEffect(() => {
    if (!needsAll || allLoaded) return;
    let cancelled = false;
    Promise.all(categories.map(async (category) => [category.slug, await category.load()] as const)).then((pairs) => {
      if (!cancelled) setLoaded((current) => ({ ...Object.fromEntries(pairs), ...current }));
    });
    return () => {
      cancelled = true;
    };
  }, [needsAll, allLoaded, categories]);

  const masteredIds = useMemo(() => new Set(Object.keys(mastered ?? {})), [mastered]);
  const totalCards = categories.reduce((sum, category) => sum + category.cardCount, 0);

  /** Dominadas de una categoría (null mientras no esté cargada). */
  function masteredIn(category: UltraCategory): number | null {
    const entries = loaded[category.slug];
    if (!entries) return null;
    return entries.filter((entry) => isUltraCard(entry) && masteredIds.has(entry.id)).length;
  }

  const totalMastered = masteredIds.size;
  const progress = totalCards > 0 ? Math.min(100, Math.round((totalMastered / totalCards) * 100)) : 0;

  if (activeCategory) {
    return (
      <CategoryDetail
        key={activeCategory.slug}
        category={activeCategory}
        entries={loaded[activeCategory.slug] ?? null}
        variant={variant}
        masteredIds={masteredIds}
        onToggle={toggle}
        onBack={() => {
          setActiveSlug(null);
          window.scrollTo({ top: 0 });
        }}
        locked={locked}
        upgradeHref={upgradeHref}
        error={error}
      />
    );
  }

  const groups = [...new Set(categories.map((category) => category.group))].sort((a, b) => {
    const ia = groupOrder.indexOf(a);
    const ib = groupOrder.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b, "es");
  });

  const searchResults = wantsGlobalSearch
    ? categories.flatMap((category) =>
        (loaded[category.slug] ?? [])
          .filter(isUltraCard)
          .filter((card) => matchesQuery(card, globalQuery.trim()))
          .map((card) => ({ card, category })),
      )
    : [];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${theme.accent}`}>
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </p>
        <h1 className={`text-2xl font-black sm:text-3xl ${theme.title}`}>{title}</h1>
        <p className={`max-w-3xl text-sm leading-relaxed ${theme.muted}`}>{description}</p>
      </header>

      {hero}

      <section className={`grid gap-3 rounded-2xl border p-5 sm:grid-cols-3 ${theme.panel}`}>
        <div>
          <p className={`text-3xl font-black ${theme.title}`}>{totalCards.toLocaleString("es")}</p>
          <p className={`text-xs ${theme.muted}`}>fichas en {categories.length} categorías</p>
        </div>
        <div>
          <p className={`text-3xl font-black ${theme.title}`}>{mastered ? totalMastered.toLocaleString("es") : "—"}</p>
          <p className={`text-xs ${theme.muted}`}>fichas que ya dominas</p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className={theme.muted}>Tu avance</span>
            <span className={`font-black ${theme.title}`}>{progress} %</span>
          </div>
          <div className={`h-2 overflow-hidden rounded-full ${theme.track}`}>
            <div className={`h-full rounded-full ${theme.bar}`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      </section>

      {locked ? <UpgradeBanner variant={variant} href={upgradeHref} /> : null}

      <div className="relative">
        <Search className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${theme.muted}`} />
        <input
          type="search"
          value={globalQuery}
          onChange={(event) => setGlobalQuery(event.target.value)}
          placeholder="Busca en todas las fichas: preeclampsia, CURB-65, litio…"
          className={`min-h-12 w-full rounded-2xl border pl-11 pr-4 text-sm outline-none transition ${theme.input}`}
        />
      </div>

      {wantsGlobalSearch ? (
        <section className="space-y-3">
          <p className={`text-xs font-bold ${theme.muted}`}>
            {isLoadingAll ? "Buscando…" : `${searchResults.length} ${searchResults.length === 1 ? "ficha encontrada" : "fichas encontradas"}`}
          </p>
          {searchResults.slice(0, 60).map(({ card, category }) => {
            const position = (loaded[category.slug] ?? []).filter(isUltraCard).findIndex((c) => c.id === card.id);
            const isLocked = locked && position >= ULTRA_FREE_PREVIEW_CARDS;
            return (
              <FichaCard
                key={card.id}
                card={card}
                variant={variant}
                context={category.title}
                isMastered={masteredIds.has(card.id)}
                onToggle={(value) => toggle(card.id, value)}
                isLocked={isLocked}
                upgradeHref={upgradeHref}
              />
            );
          })}
          {searchResults.length > 60 ? (
            <p className={`text-xs ${theme.muted}`}>Mostrando las primeras 60. Afina la búsqueda para ver más.</p>
          ) : null}
        </section>
      ) : (
        groups.map((group) => (
          <section key={group} className="space-y-3">
            <div>
              <h2 className={`text-sm font-black uppercase tracking-[0.15em] ${theme.title}`}>{group}</h2>
              {groupDescriptions[group] ? <p className={`text-xs ${theme.muted}`}>{groupDescriptions[group]}</p> : null}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {categories
                .filter((category) => category.group === group)
                .map((category) => {
                  const done = masteredIn(category);
                  const pct = done !== null && category.cardCount > 0 ? Math.round((done / category.cardCount) * 100) : 0;
                  return (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() => {
                        setActiveSlug(category.slug);
                        window.scrollTo({ top: 0 });
                      }}
                      className={`group flex flex-col gap-3 rounded-2xl border p-5 text-left transition ${theme.panel} ${theme.panelHover}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className={`text-base font-black leading-tight ${theme.title}`}>{category.title}</h3>
                        <ChevronRight className={`h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 ${theme.muted}`} />
                      </div>
                      <LevelBadge level={category.level} variant={variant} />
                      <div className="mt-auto space-y-1.5">
                        <div className={`flex justify-between text-[11px] ${theme.muted}`}>
                          <span>{category.cardCount} fichas</span>
                          <span>{done !== null ? `${done} dominadas` : ""}</span>
                        </div>
                        <div className={`h-1.5 overflow-hidden rounded-full ${theme.track}`}>
                          <div className={`h-full rounded-full ${LEVEL_STYLES[category.level].bar}`} style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </section>
        ))
      )}

      {footnote ? <div className={`text-[11px] leading-relaxed ${theme.muted}`}>{footnote}</div> : null}
    </div>
  );
}

function UpgradeBanner({ variant, href }: { variant: Variant; href: string }) {
  const theme = THEMES[variant];
  return (
    <div className={`flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between ${theme.soft}`}>
      <div className="flex items-start gap-3">
        <Lock className={`mt-0.5 h-5 w-5 shrink-0 ${theme.accent}`} />
        <p className={`text-sm ${theme.text}`}>
          Estás viendo una muestra: {ULTRA_FREE_PREVIEW_CARDS} fichas por categoría. Con el plan Pro desbloqueas todas
          las fichas, el modo tarjetas y tu progreso.
        </p>
      </div>
      <Link href={href} className={`inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl px-5 text-sm font-black ${theme.accentBg}`}>
        Ver planes
      </Link>
    </div>
  );
}

type FichaCardProps = {
  card: UltraCard;
  variant: Variant;
  isMastered: boolean;
  onToggle: (value: boolean) => void;
  context?: string;
  isLocked?: boolean;
  upgradeHref: string;
};

function FichaCard({ card, variant, isMastered, onToggle, context, isLocked = false, upgradeHref }: FichaCardProps) {
  const theme = THEMES[variant];
  return (
    <article
      className={`relative rounded-2xl border p-5 transition ${theme.panel} ${
        isMastered ? (variant === "mir" ? "border-lime-300/40" : "border-emerald-300 bg-emerald-50/40") : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          {context ? <p className={`text-[10px] font-black uppercase tracking-wide ${theme.accent}`}>{context}</p> : null}
          <h3 className={`text-base font-black leading-snug ${theme.title}`}>{card.title}</h3>
          {card.badge || card.meta ? (
            <p className="flex flex-wrap items-center gap-2 text-[11px]">
              {card.badge ? (
                <span className={`rounded-full px-2 py-0.5 font-black ${variant === "mir" ? "bg-lime-300/15 text-lime-300" : "bg-amber-100 text-amber-800"}`}>
                  {card.badge}
                </span>
              ) : null}
              {card.meta ? <span className={theme.muted}>{card.meta}</span> : null}
            </p>
          ) : null}
        </div>
        {!isLocked ? (
          <button
            type="button"
            onClick={() => onToggle(!isMastered)}
            aria-pressed={isMastered}
            className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-xl border px-3 text-xs font-black transition ${
              isMastered
                ? variant === "mir"
                  ? "border-lime-300/50 bg-lime-300/15 text-lime-300"
                  : "border-emerald-300 bg-emerald-100 text-emerald-800"
                : theme.chip
            }`}
          >
            <Check className="h-3.5 w-3.5" />
            {isMastered ? "Dominada" : "Marcar"}
          </button>
        ) : null}
      </div>
      {isLocked ? (
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className={`select-none text-sm blur-[3px] ${theme.text}`} aria-hidden>
            Contenido disponible con el plan Pro: puntos clave, cifras y conductas para el examen.
          </p>
          <Link href={upgradeHref} className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-xl px-3 text-xs font-black ${theme.accentBg}`}>
            <Lock className="h-3.5 w-3.5" />
            Pro
          </Link>
        </div>
      ) : (
        <ul className={`mt-3 space-y-1.5 text-sm leading-relaxed ${theme.text}`}>
          {card.points.map((point, index) => (
            <li key={index} className="flex gap-2">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bar}`} />
              <span className="min-w-0">
                <PointText text={point} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

type Filter = "all" | "pending" | "mastered";
type Mode = "read" | "cards";

type CategoryDetailProps = {
  category: UltraCategory;
  entries: UltraEntry[] | null;
  variant: Variant;
  masteredIds: Set<string>;
  onToggle: (cardId: string, value: boolean) => Promise<void>;
  onBack: () => void;
  locked: boolean;
  upgradeHref: string;
  error: string | null;
};

function CategoryDetail({ category, entries, variant, masteredIds, onToggle, onBack, locked, upgradeHref, error }: CategoryDetailProps) {
  const theme = THEMES[variant];
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [mode, setMode] = useState<Mode>("read");

  const cards = useMemo(() => (entries ?? []).filter(isUltraCard), [entries]);
  const cardIndex = useMemo(() => new Map(cards.map((card, index) => [card.id, index])), [cards]);
  const doneCount = cards.filter((card) => masteredIds.has(card.id)).length;
  const pct = cards.length > 0 ? Math.round((doneCount / cards.length) * 100) : 0;

  const visibleEntries = (entries ?? []).filter((entry) => {
    if (!isUltraCard(entry)) return !query && filter === "all";
    if (!matchesQuery(entry, query.trim())) return false;
    if (filter === "pending") return !masteredIds.has(entry.id);
    if (filter === "mastered") return masteredIds.has(entry.id);
    return true;
  });

  return (
    <div className="space-y-6">
      <button type="button" onClick={onBack} className={`inline-flex items-center gap-2 text-sm font-bold ${theme.muted} hover:opacity-80`}>
        <ArrowLeft className="h-4 w-4" />
        Todas las categorías
      </button>

      <header className={`space-y-4 rounded-[2rem] border p-6 sm:p-8 ${theme.hero}`}>
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={category.level} variant="mir" />
          {category.group && !category.group.startsWith("Nivel") ? (
            <span className="text-[11px] font-bold text-white/60">{category.group}</span>
          ) : null}
        </div>
        <h1 className="text-2xl font-black sm:text-4xl">{category.title}</h1>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-white/70">
            <span>
              {doneCount} de {cards.length || category.cardCount} fichas dominadas
            </span>
            <span className="font-black text-white">{pct} %</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/15">
            <div className={`h-full rounded-full ${LEVEL_STYLES[category.level].bar}`} style={{ width: `${pct}%` }} />
          </div>
        </div>
        {category.stats && category.stats.length > 0 ? (
          <div className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-4">
            {category.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 p-4">
                <p className={`text-3xl font-black ${theme.heroAccent}`}>{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </header>

      {error ? <p className="rounded-xl border border-red-300/50 bg-red-500/10 px-4 py-2 text-sm text-red-500">{error}</p> : null}
      {locked ? <UpgradeBanner variant={variant} href={upgradeHref} /> : null}

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex gap-2">
          {(
            [
              ["read", "Leer", BookOpenText],
              ["cards", "Tarjetas", GalleryHorizontalEnd],
            ] as const
          ).map(([value, label, Icon]) => (
            <button
              key={value}
              type="button"
              disabled={value === "cards" && locked}
              onClick={() => setMode(value)}
              className={`inline-flex min-h-10 items-center gap-2 rounded-xl border px-4 text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-40 ${
                mode === value ? theme.chipActive : theme.chip
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
        {mode === "read" ? (
          <>
            <div className="relative flex-1">
              <Search className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${theme.muted}`} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Buscar en ${category.title}…`}
                className={`min-h-10 w-full rounded-xl border pl-9 pr-3 text-sm outline-none transition ${theme.input}`}
              />
            </div>
            <div className="flex gap-2">
              {(
                [
                  ["all", "Todas"],
                  ["pending", "Pendientes"],
                  ["mastered", "Dominadas"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilter(value)}
                  className={`min-h-10 rounded-xl border px-3 text-xs font-black transition ${filter === value ? theme.chipActive : theme.chip}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>

      {!entries ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <Loader2 className={`h-8 w-8 animate-spin ${theme.spinner}`} />
        </div>
      ) : mode === "cards" && !locked ? (
        <FlashcardDeck cards={cards} variant={variant} masteredIds={masteredIds} onToggle={onToggle} />
      ) : visibleEntries.length === 0 ? (
        <p className={`rounded-2xl border p-6 text-center text-sm ${theme.soft} ${theme.muted}`}>
          {filter === "mastered" ? "Aún no has marcado fichas como dominadas aquí." : "No hay fichas con ese filtro."}
        </p>
      ) : (
        <div className="space-y-3">
          {visibleEntries.map((entry) =>
            isUltraCard(entry) ? (
              <FichaCard
                key={entry.id}
                card={entry}
                variant={variant}
                isMastered={masteredIds.has(entry.id)}
                onToggle={(value) => onToggle(entry.id, value)}
                isLocked={locked && (cardIndex.get(entry.id) ?? 0) >= ULTRA_FREE_PREVIEW_CARDS}
                upgradeHref={upgradeHref}
              />
            ) : (
              <div key={entry.id} className="space-y-1.5 pt-6">
                {entry.level ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <LevelBadge level={entry.level} variant={variant} />
                    {entry.meta ? <span className={`text-[11px] font-bold ${theme.muted}`}>{entry.meta}</span> : null}
                  </div>
                ) : null}
                <h2
                  className={
                    entry.level
                      ? `text-lg font-black sm:text-xl ${theme.title}`
                      : `text-xs font-black uppercase tracking-[0.2em] ${theme.accent}`
                  }
                >
                  {entry.title}
                </h2>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

type FlashcardDeckProps = {
  cards: UltraCard[];
  variant: Variant;
  masteredIds: Set<string>;
  onToggle: (cardId: string, value: boolean) => Promise<void>;
};

/**
 * Modo tarjetas: título en el anverso, puntos clave al girarla. "La domino"
 * la marca como dominada; "Repasar" la deja pendiente. Primero salen las
 * pendientes, en orden aleatorio.
 */
function FlashcardDeck({ cards, variant, masteredIds, onToggle }: FlashcardDeckProps) {
  const theme = THEMES[variant];
  const buildQueue = (includeMastered: boolean) =>
    shuffle(cards.filter((card) => includeMastered || !masteredIds.has(card.id)));
  const [queue, setQueue] = useState<UltraCard[]>(() => buildQueue(false));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [stats, setStats] = useState({ known: 0, review: 0 });

  const card = queue[index];

  function restart(includeMastered: boolean) {
    setQueue(buildQueue(includeMastered));
    setIndex(0);
    setFlipped(false);
    setStats({ known: 0, review: 0 });
  }

  function rate(known: boolean) {
    if (!card) return;
    if (known !== masteredIds.has(card.id)) void onToggle(card.id, known);
    setStats((current) => ({ known: current.known + (known ? 1 : 0), review: current.review + (known ? 0 : 1) }));
    setFlipped(false);
    setIndex((current) => current + 1);
  }

  if (!card) {
    const reviewed = stats.known + stats.review;
    return (
      <div className={`space-y-4 rounded-2xl border p-8 text-center ${theme.panel}`}>
        <Sparkles className={`mx-auto h-8 w-8 ${theme.accent}`} />
        <h2 className={`text-xl font-black ${theme.title}`}>
          {reviewed === 0 ? "¡Ya dominas todas las fichas de esta categoría!" : "Ronda terminada"}
        </h2>
        {reviewed > 0 ? (
          <p className={`text-sm ${theme.muted}`}>
            {stats.known} dominadas · {stats.review} para repasar
          </p>
        ) : null}
        <div className="flex flex-wrap justify-center gap-2">
          {cards.some((c) => !masteredIds.has(c.id)) ? (
            <button type="button" onClick={() => restart(false)} className={`inline-flex min-h-10 items-center gap-2 rounded-xl px-5 text-sm font-black ${theme.accentBg}`}>
              <RotateCcw className="h-4 w-4" />
              Repasar pendientes
            </button>
          ) : null}
          <button type="button" onClick={() => restart(true)} className={`inline-flex min-h-10 items-center gap-2 rounded-xl border px-5 text-sm font-black ${theme.chip}`}>
            Repasar todas
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className={`flex items-center justify-between text-xs font-bold ${theme.muted}`}>
        <span>
          Tarjeta {index + 1} de {queue.length}
        </span>
        <span>
          {stats.known} ✓ · {stats.review} ↺
        </span>
      </div>
      <div className={`h-1.5 overflow-hidden rounded-full ${theme.track}`}>
        <div className={`h-full rounded-full ${theme.bar}`} style={{ width: `${(index / queue.length) * 100}%` }} />
      </div>
      <button
        type="button"
        onClick={() => setFlipped((current) => !current)}
        className={`block min-h-[280px] w-full rounded-[2rem] border p-6 text-left transition sm:p-8 ${theme.panel}`}
      >
        {card.badge ? (
          <span className={`mb-3 inline-block rounded-full px-2 py-0.5 text-[11px] font-black ${variant === "mir" ? "bg-lime-300/15 text-lime-300" : "bg-amber-100 text-amber-800"}`}>
            {card.badge}
          </span>
        ) : null}
        <h2 className={`text-xl font-black leading-snug sm:text-2xl ${theme.title}`}>{card.title}</h2>
        {flipped ? (
          <ul className={`mt-5 space-y-2 text-sm leading-relaxed sm:text-base ${theme.text}`}>
            {card.points.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bar}`} />
                <span className="min-w-0">
                  <PointText text={point} />
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={`mt-6 text-sm ${theme.muted}`}>Intenta recordar lo clave y toca la tarjeta para girarla.</p>
        )}
      </button>
      {flipped ? (
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => rate(false)}
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border text-sm font-black ${theme.chip}`}
          >
            <X className="h-4 w-4" />
            Repasar
          </button>
          <button
            type="button"
            onClick={() => rate(true)}
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl text-sm font-black ${theme.accentBg}`}
          >
            <Check className="h-4 w-4" />
            La domino
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setFlipped(true)}
          className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl text-sm font-black ${theme.accentBg}`}
        >
          Ver respuesta
        </button>
      )}
    </div>
  );
}
