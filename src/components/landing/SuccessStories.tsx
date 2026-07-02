import { Star } from "lucide-react";
import { useLang } from "./i18n";

type Kind = "User" | "Partner";

const kinds: Kind[] = [
  "User",
  "User",
  "Partner",
  "Partner",
  "User",
  "User",
  "Partner",
  "Partner",
  "User",
  "Partner",
];

type Testimonial = {
  type: Kind;
  quote: string;
  role: string;
  context: string;
};

function TestimonialCard({
  t,
  lovedLabel,
  recommendedLabel,
}: {
  t: Testimonial;
  lovedLabel: string;
  recommendedLabel: string;
}) {
  const isPartner = t.type === "Partner";
  return (
    <article className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-border bg-card p-6 shadow-card sm:w-[380px] sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
            isPartner
              ? "bg-emerald-100 text-emerald-700"
              : "bg-sky-100 text-sky-700"
          }`}
        >
          {isPartner ? recommendedLabel : lovedLabel}
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
  const { t: copy } = useLang();
  const testimonials: Testimonial[] = copy.stories.items.map((item, i) => ({
    type: kinds[i] ?? "User",
    role: item.role,
    context: item.context,
    quote: item.quote,
  }));
  const loop = [...testimonials, ...testimonials];


  return (
    <section id="stories" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          {copy.stories.eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl sm:whitespace-pre-line">
          {copy.stories.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground sm:whitespace-pre-line">
          {copy.stories.subtitle}
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
            <TestimonialCard
              key={`${t.role}-${i}`}
              t={t}
              lovedLabel={copy.stories.lovedByUsers}
              recommendedLabel={copy.stories.recommendedByPartners}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
