import { Star } from "lucide-react";

type Testimonial = {
  type: "User" | "Partner";
  quote: string;
  role: string;
  context: string;
};

const testimonials: Testimonial[] = [
  {
    type: "User",
    role: "Export Manager",
    context: "Food Manufacturer",
    quote:
      "Finding verified buyers used to take days. With TradeIt, we can identify qualified prospects in minutes.",
  },
  {
    type: "User",
    role: "International Sales Manager",
    context: "Industrial Equipment",
    quote:
      "Buyer Enrichment helped us reach the right decision-makers instead of generic company emails.",
  },
  {
    type: "Partner",
    role: "Business Consultant",
    context: "Independent Advisor",
    quote: "TradeIt is easy to recommend because clients immediately understand the value.",
  },
  {
    type: "Partner",
    role: "Content Creator",
    context: "B2B Growth Channel",
    quote:
      "My audience is always looking for practical global sales tools. TradeIt has become one of the products I recommend most.",
  },
  {
    type: "User",
    role: "Sourcing Lead",
    context: "Consumer Goods",
    quote:
      "TradeIt helps us understand who is buying, who is supplying, and where new opportunities are emerging.",
  },
  {
    type: "User",
    role: "Overseas Sales Team",
    context: "Manufacturing",
    quote:
      "We can manage buyer discovery, contact enrichment, and outreach in one workflow instead of switching between tools.",
  },
  {
    type: "Partner",
    role: "Affiliate Marketer",
    context: "SaaS Partnership",
    quote:
      "The recurring commission structure makes TradeIt much more attractive than one-time referral programs.",
  },
  {
    type: "Partner",
    role: "Trade Association Manager",
    context: "Member Benefits",
    quote:
      "TradeIt gives our members a practical way to explore global markets with real trade data.",
  },
  {
    type: "User",
    role: "Procurement Manager",
    context: "Import Business",
    quote:
      "TradeIt gives us visibility into global suppliers and trade relationships that are difficult to find elsewhere.",
  },
  {
    type: "Partner",
    role: "Community Operator",
    context: "Global Business Community",
    quote:
      "It is a strong fit for communities focused on export, sourcing, and international sales.",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  const isPartner = t.type === "Partner";
  return (
    <article className="flex w-[330px] shrink-0 flex-col rounded-3xl border border-border bg-card p-7 shadow-card sm:w-[380px]">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
            isPartner
              ? "bg-emerald-100 text-emerald-700"
              : "bg-sky-100 text-sky-700"
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
      <p className="mt-5 flex-1 text-base font-medium leading-relaxed text-foreground">
        “{t.quote}”
      </p>
      <div className="mt-6 border-t border-border pt-5">
        <div className="text-sm font-bold text-foreground">{t.role}</div>
        <div className="text-xs text-muted-foreground">{t.context}</div>
      </div>
    </article>
  );
}

export function SuccessStories() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="stories" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
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

      <div className="group relative mt-14 overflow-hidden">
        {/* edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div
          className="flex w-max animate-marquee gap-6 px-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ ["--marquee-duration" as string]: "55s" }}
        >
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.role}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
