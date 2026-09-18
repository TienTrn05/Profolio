import Icon from "../../components/ui/Icon";

export function StudyHeading({ index, title, children }) {
  return (
    <div className="mb-5">
      <span className="font-mono text-xs font-semibold tracking-wider text-brand uppercase">
        {index}
      </span>
      <h3 className="mt-2 text-2xl leading-tight font-bold text-ink">
        {title}
      </h3>
      {children && (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          {children}
        </p>
      )}
    </div>
  );
}

export function StudyFlow({ steps, label }) {
  return (
    <div className="grid gap-3 md:grid-cols-4" aria-label={label}>
      {steps.map(([name, purpose], index) => (
        <div
          key={name}
          className="relative rounded-xl border border-brand/25 bg-brand/5 p-4"
        >
          <strong className="block text-base text-ink">{name}</strong>
          <small className="text-xs text-muted">{purpose}</small>
          {index < steps.length - 1 && (
            <Icon
              name="arrow-right"
              className="absolute top-1/2 -right-5 z-10 hidden size-4 -translate-y-1/2 text-brand md:block"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function StudyFacts({ facts }) {
  return (
    <dl className="mt-8 grid gap-3 sm:grid-cols-3">
      {facts.map(([label, value]) => (
        <div
          key={label}
          className="rounded-xl border border-[var(--border)] bg-surface p-4"
        >
          <dt className="font-mono text-xs tracking-wider text-brand uppercase">
            {label}
          </dt>
          <dd className="mt-2 text-sm font-bold text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function StudyLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center gap-2 rounded-md bg-slate-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand"
    >
      {children}
      <Icon name="arrow-up-right" className="size-4" />
    </a>
  );
}
