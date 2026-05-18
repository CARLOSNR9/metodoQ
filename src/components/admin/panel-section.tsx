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
      <div className="border-b border-mq-border-strong pb-4">
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-3xl text-sm text-mq-muted sm:text-base">{description}</p>
        ) : null}
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}
