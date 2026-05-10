export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm text-white/70">{subtitle}</p> : null}
    </div>
  );
}
