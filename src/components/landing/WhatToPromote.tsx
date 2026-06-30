import {
  Database,
  UserPlus,
  Sparkles,
  KanbanSquare,
  Mail,
  Check,
  Filter,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "B/L Trade Data Search",
    body: "Search billions of bill-of-lading records to find active importers and exporters.",
  },
  {
    icon: UserPlus,
    title: "Buyer Enrichment",
    body: "Enrich companies with verified decision-maker contacts and firmographics.",
  },
  {
    icon: Sparkles,
    title: "AI Buyer Analysis",
    body: "Let AI score and prioritize the buyers most likely to convert.",
  },
  {
    icon: KanbanSquare,
    title: "CRM",
    body: "Manage every opportunity and pipeline stage in one global workspace.",
  },
  {
    icon: Mail,
    title: "Email Integration",
    body: "Reach decision-makers directly with connected outreach and tracking.",
  },
];

function ContactMockup() {
  const rows = [
    { name: "Anna Vogel", role: "Head of Procurement", co: "Nordmann Foods", on: true },
    { name: "James Carter", role: "Import Manager", co: "Pacific Import", on: true },
    { name: "Yuki Tanaka", role: "Sourcing Lead", co: "Sakura Trading", on: false },
    { name: "Lucas Almeida", role: "Buyer", co: "Estrela Global", on: false },
  ];
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">Buyer Enrichment & CRM</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="h-4 w-4" />
          <Download className="h-4 w-4" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 border-b border-border p-4">
        {[
          { l: "Contacts", v: "230M+" },
          { l: "Enriched", v: "1,204" },
          { l: "Replied", v: "38%" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-muted/50 p-3">
            <div className="font-display text-lg font-extrabold leading-none">{s.v}</div>
            <div className="mt-1 text-[11px] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="divide-y divide-border">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-3 px-4 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {r.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold">{r.name}</div>
              <div className="truncate text-xs text-muted-foreground">
                {r.role} · {r.co}
              </div>
            </div>
            {r.on ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-mint px-2 py-1 text-[10px] font-semibold text-mint-foreground">
                <Check className="h-3 w-3" /> Verified
              </span>
            ) : (
              <span className="rounded-full bg-muted px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                Enriching…
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-border bg-muted/40 px-4 py-3">
        <Mail className="h-4 w-4 text-primary" />
        <span className="text-xs text-muted-foreground">Connected outreach — 12 sequences active</span>
        <span className="ml-auto rounded-md gradient-purple px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
          Send
        </span>
      </div>
    </div>
  );
}

export function WhatToPromote() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          What you promote
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Promote Solutions Every Business Actually Needs
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Help businesses find verified buyers, enrich company and contact data, and manage global
          sales — all in one platform.
        </p>
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="grid gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:pl-2">
          <ContactMockup />
        </div>
      </div>
    </section>
  );
}
