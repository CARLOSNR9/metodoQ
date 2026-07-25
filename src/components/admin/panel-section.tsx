type PanelSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function PanelSection({
  title,
  description,
  children,
  className = "",
}: PanelSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-3xl text-sm text-slate-500 sm:text-base">{description}</p>
        ) : null}
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}
