import { Globe2, RefreshCw, Handshake, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: Globe2,
    title: "Help Companies Grow Globally",
    body: "Introduce businesses to verified buyers using global trade data and AI-powered sales tools.",
    theme: "navy",
  },
  {
    icon: RefreshCw,
    title: "Earn While They Grow",
    body: "Receive recurring commissions every month as your referrals continue using TradeIt.",
    theme: "lavender",
  },
  {
    icon: Handshake,
    title: "Partner With Us, Not Just Promote Us",
    body: "Get continuous product updates, marketing support and resources to help you grow together.",
    theme: "mint",
  },
] as const;

export function WhyJoin() {
  return (
    <section id="why-join" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Why partner with TradeIt
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Why Join the TradeIt Affiliate Program?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A partnership built for long-term, recurring income — not one-off payouts.
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
                <h3 className="font-display text-base font-bold md:mt-6 md:text-xl">{c.title}</h3>
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
