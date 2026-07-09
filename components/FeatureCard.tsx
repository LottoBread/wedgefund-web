export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface-raised p-6 transition-colors hover:border-brand/40 hover:bg-surface-elevated">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand-bright">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-content">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-content-muted">
        {description}
      </p>
    </div>
  );
}
