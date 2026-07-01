import consultant from "@/assets/who-consultant-realistic.png.asset.json";
import creator from "@/assets/who-creator-realistic.png.asset.json";
import association from "@/assets/who-association-realistic.png.asset.json";
import social from "@/assets/who-social-realistic.png.asset.json";
import marketer from "@/assets/who-marketer-realistic.png.asset.json";
import { PartnerButton } from "./Logo";
import { useLang } from "./i18n";
import type { ReactNode } from "react";

const images = [consultant.url, creator.url, association.url, social.url, marketer.url];

const enMobileBreaks: Record<string, [string, string]> = {
  "Business Consultants": ["Business", "Consultants"],
  "Content Creators": ["Content", "Creators"],
  "Trade Associations": ["Trade", "Associations"],
  "Social Media & Communities": ["Social Media", "& Communities"],
  "Affiliate Marketers": ["Affiliate", "Marketers"],
};

function MobileTitle({ title }: { title: string }) {
  const { lang } = useLang();
  if (lang !== "en") return <>{title}</>;
  const pair = enMobileBreaks[title];
  if (!pair) return <>{title}</>;
  return (
    <>
      {pair[0]}
      <br />
      {pair[1]}
    </>
  );
}

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
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{body}</p>
      </div>
    </article>
  );
}

function MobilePersonCard({ img, title, body, className }: { img: string; title: ReactNode; body: string; className?: string }) {
  return (
    <article className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card ${className || ""}`}>
      <div className="h-[120px] overflow-hidden bg-muted">
        <img
          src={img}
          alt={typeof title === "string" ? title : ""}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="font-display text-sm font-bold leading-tight min-h-[2.5em]">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground whitespace-pre-line line-clamp-2">{body}</p>
      </div>
    </article>
  );
}

export function WhoCanJoin() {
  const { t } = useLang();
  const people = t.who.people.map((p, i) => ({ img: images[i], title: p.title, body: p.body }));
  return (
    <section id="who-can-join" className="scroll-mt-20 bg-muted/30 py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Mobile layout */}
        <div className="sm:hidden">
          <div className="mb-5 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {t.who.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance">
              {t.who.title}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:whitespace-pre-line">
              {t.who.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3">
            {people.slice(0, 4).map((p, i) => (
              <MobilePersonCard key={i} img={p.img} title={<MobileTitle title={p.title} />} body={p.body} />
            ))}
            <MobilePersonCard img={people[4].img} title={<MobileTitle title={people[4].title} />} body={people[4].body} className="min-[360px]:col-span-2" />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-card sm:col-span-2 lg:col-span-1">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {t.who.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                {t.who.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:whitespace-pre-line">
                {t.who.subtitle}
              </p>
            </div>
            <div className="mt-8">
              <PartnerButton className="w-full sm:w-auto" />
            </div>
          </div>
          <PersonCard {...people[0]} />
          <PersonCard {...people[1]} />
          <PersonCard {...people[2]} />
          <PersonCard {...people[3]} />
          <PersonCard {...people[4]} />
        </div>
      </div>
    </section>
  );
}
