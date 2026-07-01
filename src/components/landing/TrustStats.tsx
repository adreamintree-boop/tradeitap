import { Database, Globe2, Users, Sparkles, BarChart3, ShieldCheck, KanbanSquare } from "lucide-react";
import { useLang } from "./i18n";

const statIcons = [Database, Globe2, Users];
const badgeIcons = [Sparkles, BarChart3, ShieldCheck, KanbanSquare];

export function TrustStats() {
  const { t } = useLang();
  const stats = t.proof.stats.map((s, i) => ({ ...s, icon: statIcons[i] ?? Database }));
  const badges = t.proof.badges.map((label, i) => ({
    label,
    icon: badgeIcons[i] ?? Sparkles,
  }));

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          {t.proof.eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          {t.proof.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t.proof.subtitle}
        </p>
      </div>

      {/* Mobile: compact unified card */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-card lg:hidden">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-primary">
                <s.icon className="h-4 w-4" />
              </span>
              <div className="mt-2.5 font-display text-2xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-[oklch(0.45_0.17_250)] bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold leading-tight text-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: large individual cards */}
      <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
        {stats.map((s) => (
          <article
            key={s.label}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
              <s.icon className="h-6 w-6" />
            </span>
            <div className="mt-6 font-display text-5xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-[oklch(0.45_0.17_250)] bg-clip-text text-transparent">
              {s.value}
            </div>
            <div className="mt-2 font-display text-lg font-bold">{s.label}</div>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </div>

      {/* Mobile: compact 2-col badge grid */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:hidden">
        {badges.map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-semibold text-foreground"
          >
            <b.icon className="h-3.5 w-3.5 text-primary" />
            {b.label}
          </span>
        ))}
      </div>

      {/* Desktop: flex badge row */}
      <div className="mt-10 hidden flex-wrap items-center justify-center gap-3 lg:flex">
        {badges.map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-semibold text-foreground"
          >
            <b.icon className="h-4 w-4 text-primary" />
            {b.label}
          </span>
        ))}
      </div>
    </section>
  );
}
