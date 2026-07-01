import { Globe2, RefreshCw, Handshake, ArrowUpRight } from "lucide-react";
import { useLang } from "./i18n";

const cardMeta = [
  { icon: Globe2, theme: "navy" },
  { icon: RefreshCw, theme: "lavender" },
  { icon: Handshake, theme: "mint" },
] as const;

export function WhyJoin() {
  const { t } = useLang();
  const cards = cardMeta.map((m, i) => ({ ...m, ...t.why.cards[i] }));
  return (
    <section id="why-join" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          {t.why.eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          {t.why.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground sm:whitespace-pre-line">
          {t.why.subtitle}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:mt-14 md:gap-6 lg:grid-cols-3">
        {cards.map((c) => {
          const isNavy = c.theme === "navy";
          const bg =
            c.theme === "navy"
              ? "gradient-navy text-navy-foreground"
              : c.theme === "lavender"
                ? "bg-lavender text-lavender-foreground"
                : "bg-mint text-mint-foreground";
          return (
            <article
              key={c.title}
              className={`group relative flex flex-row gap-4 overflow-hidden rounded-2xl border p-5 transition-transform duration-300 hover:-translate-y-1 md:flex-col md:rounded-3xl md:p-8 ${bg} ${
                isNavy ? "border-transparent shadow-elevated" : "border-border/60 shadow-card"
              }`}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl md:h-14 md:w-14 md:rounded-2xl ${
                  isNavy ? "bg-background/15 text-navy-foreground" : "bg-background text-primary shadow-sm"
                }`}
              >
                <c.icon className="h-5 w-5 md:h-7 md:w-7" strokeWidth={2} />
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-display text-base font-bold whitespace-pre-line md:mt-6 md:text-xl">{c.title}</h3>
                <p
                  className={`mt-1 text-sm leading-relaxed md:mt-3 md:text-base ${
                    isNavy ? "text-navy-foreground/80" : "opacity-80"
                  }`}
                >
                  {c.body}
                </p>
              </div>
              <ArrowUpRight
                className={`ml-auto h-4 w-4 shrink-0 self-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:ml-0 md:mt-6 md:h-5 md:w-5 md:self-auto ${
                  isNavy ? "text-navy-foreground/70" : "text-primary"
                }`}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
