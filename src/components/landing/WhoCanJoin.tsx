import consultant from "@/assets/who-consultant.jpg";
import creator from "@/assets/who-creator.jpg";
import association from "@/assets/who-association.jpg";
import social from "@/assets/who-social.jpg";
import marketer from "@/assets/who-marketer.jpg";
import { PartnerButton } from "./Logo";

const people = [
  {
    img: consultant,
    title: "Business Consultants",
    body: "Recommend TradeIt to the companies you advise and already trust.",
  },
  {
    img: creator,
    title: "Content Creators",
    body: "Share tools your audience loves and earn recurring commissions.",
  },
  {
    img: association,
    title: "Trade Associations",
    body: "Deliver exclusive value to your members with a trusted global sales platform.",
  },
  {
    img: social,
    title: "Social Media & Communities",
    body: "Guide your community with insights that drive real business growth.",
  },
  {
    img: marketer,
    title: "Affiliate Marketers",
    body: "Promote a high-value SaaS and build a predictable income stream.",
  },
];

function PersonCard({ img, title, body }: { img: string; title: string; body: string }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-muted/40 shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={768}
          height={576}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}

export function WhoCanJoin() {
  return (
    <section id="who-can-join" className="scroll-mt-20 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Open to everyone
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Who Can Join As A Partner?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Anyone with a business network can become a partner. If you talk to companies that sell
              globally, you can earn with TradeIt.
            </p>
            <div className="mt-8">
              <PartnerButton />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {people.slice(0, 4).map((p) => (
              <PersonCard key={p.title} {...p} />
            ))}
            <div className="sm:col-span-2">
              <PersonCard {...people[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
