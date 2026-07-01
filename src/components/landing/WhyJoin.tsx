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

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${bg} ${
                isNavy ? "border-transparent shadow-elevated" : "border-border/60 shadow-card"
              }`}
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl ${
                  isNavy ? "bg-background/15 text-navy-foreground" : "bg-background text-primary shadow-sm"
                }`}
              >
                <c.icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">{c.title}</h3>
              <p
                className={`mt-3 leading-relaxed ${
                  isNavy ? "text-navy-foreground/80" : "opacity-80"
                }`}
              >
                {c.body}
              </p>
              <ArrowUpRight
                className={`mt-6 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
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
