type ProgressSummaryProps = {
  bestScore: number;
  averageScore: number;
};

export function ProgressSummary({ bestScore, averageScore }: ProgressSummaryProps) {
  return (
    <div className="mb-4 grid gap-3 sm:grid-cols-2">
      <article className="rounded-xl border border-slate-200 bg-white/[0.03] px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Tu mejor resultado
        </p>
        <p className="mt-1 text-xl font-semibold text-emerald-300">{bestScore}%</p>
      </article>
      <article className="rounded-xl border border-slate-200 bg-white/[0.03] px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-slate-500">Promedio</p>
        <p className="mt-1 text-xl font-semibold text-mq-accent">{averageScore}%</p>
      </article>
    </div>
  );
}
