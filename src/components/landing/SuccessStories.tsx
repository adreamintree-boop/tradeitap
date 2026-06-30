import { Star } from "lucide-react";

const testimonials = [
  {
    type: "User",
    quote:
      "Finding verified buyers used to take days. With TradeIt, we can identify qualified prospects in minutes.",
    name: "Export Manager",
    role: "Food Manufacturer",
  },
  {
    type: "Partner",
    quote:
      "TradeIt is easy to recommend because clients immediately understand the value. That makes recurring commissions much easier to build.",
    name: "Business Consultant",
    role: "Independent Advisor",
  },
  {
    type: "User",
    quote:
      "Buyer Enrichment helped us reach the right decision-makers instead of generic company emails.",
    name: "International Sales",
    role: "Industrial Equipment",
  },
  {
    type: "Partner",
    quote:
      "My audience is always looking for practical global sales tools. TradeIt has become one of the products I recommend most.",
    name: "Content Creator",
    role: "B2B Growth Channel",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
      {initials}
    </span>
  );
}

export function SuccessStories() {
  return (
    <section id="stories" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Trusted on both sides
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          A Platform Businesses Trust. A Program Partners Love.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          When businesses achieve better global sales, partners build recurring income. TradeIt
          creates value for both sides.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => {
          const isPartner = t.type === "Partner";
          return (
            <article
              key={t.quote}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    isPartner
                      ? "bg-lavender text-lavender-foreground"
                      : "bg-mint text-mint-foreground"
                  }`}
                >
                  {isPartner ? "Recommended by Partners" : "Loved by Users"}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-chart-4 text-chart-4" />
                  ))}
                </div>
              </div>
              <p className="mt-5 flex-1 text-lg font-medium leading-relaxed text-foreground">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Avatar name={t.name} />
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
