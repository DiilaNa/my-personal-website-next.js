import type { ReactNode } from "react";

export function classNames(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mx-auto mb-4 h-px w-24 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.45em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "group relative overflow-hidden rounded-[28px] border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_35%)] opacity-80" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
