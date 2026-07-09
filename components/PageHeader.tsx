import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="wf-glow border-b border-surface-border">
      <Container className="py-16 sm:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-bright">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-content sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-content-muted">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
