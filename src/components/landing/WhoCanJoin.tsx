import consultant from "@/assets/who-consultant-realistic.png.asset.json";
import creator from "@/assets/who-creator-realistic.png.asset.json";
import association from "@/assets/who-association-realistic.png.asset.json";
import social from "@/assets/who-social-realistic.png.asset.json";
import marketer from "@/assets/who-marketer-realistic.png.asset.json";
import { PartnerButton } from "./Logo";

const people = [
  {
    img: consultant.url,
    title: "Business Consultants",
    body: "Recommend TradeIt to the companies you advise and already trust.",
  },
  {
    img: creator.url,
    title: "Content Creators",
    body: "Share tools your audience loves and earn recurring commissions.",
  },
  {
    img: association.url,
    title: "Trade Associations",
    body: "Deliver exclusive value to your members with a trusted global sales platform.",
  },
  {
    img: social.url,
    title: "Social Media & Communities",
    body: "Guide your community with insights that drive real business growth.",
  },
  {
    img: marketer.url,
    title: "Affiliate Marketers",
    body: "Promote a high-value SaaS and build a predictable income stream.",
  },
];

function PersonCard({ img, title, body }: { img: string; title: string; body: string }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={768}
          height={576}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}

export function WhoCanJoin() {
  return (
    <section id="who-can-join" className="scroll-mt-20 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 3-column desktop grid: title top-left, 5 cards filling the rest */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Title block — top-left */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-card sm:col-span-2 lg:col-span-1">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Open to everyone
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Who Can Join As A Partner?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Anyone with a business network can become a partner.
              </p>
            </div>
            <div className="mt-8">
              <PartnerButton />
            </div>
          </div>

          {/* Row 1 — cards 1 & 2 */}
          <PersonCard {...people[0]} />
          <PersonCard {...people[1]} />

          {/* Row 2 — cards 3, 4 & 5 */}
          <PersonCard {...people[2]} />
          <PersonCard {...people[3]} />
          <PersonCard {...people[4]} />
        </div>
      </div>
    </section>
  );
}
