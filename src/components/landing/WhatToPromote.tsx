import { useState } from "react";
import {
  Database,
  UserPlus,
  Sparkles,
  KanbanSquare,
  Mail,
  Check,
  Filter,
  Download,
  Search,
  Ship,
  TrendingUp,
  Target,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Clock,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";

type FeatureKey = "search" | "enrich" | "ai" | "crm" | "email";

const features: { key: FeatureKey; icon: LucideIcon; title: string; body: string }[] = [
  {
    key: "search",
    icon: Database,
    title: "B/L Trade Data Search",
    body: "Search billions of bill-of-lading records to find active importers and exporters.",
  },
  {
    key: "enrich",
    icon: UserPlus,
    title: "Buyer Enrichment",
    body: "Enrich companies with verified decision-maker contacts and firmographics.",
  },
  {
    key: "ai",
    icon: Sparkles,
    title: "AI Buyer Analysis",
    body: "Let AI score and prioritize the buyers most likely to convert.",
  },
  {
    key: "crm",
    icon: KanbanSquare,
    title: "CRM",
    body: "Manage every opportunity and pipeline stage in one global workspace.",
  },
  {
    key: "email",
    icon: Mail,
    title: "Email Integration",
    body: "Reach decision-makers directly with connected outreach and tracking.",
  },
];

/* ------------------------------- Mockup shell ------------------------------- */

function MockupShell({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="h-4 w-4" />
          <Download className="h-4 w-4" />
        </div>
      </div>
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
      {children}
    </span>
  );
}

/* --------------------------- 1. B/L Trade Data Search --------------------------- */

function TradeSearchMockup() {
  const rows = [
    { co: "Nordmann Foods", country: "🇩🇪 DE", vol: "1,240 T", date: "Jun 12" },
    { co: "Pacific Import Co.", country: "🇺🇸 US", vol: "980 T", date: "Jun 09" },
    { co: "Sakura Trading", country: "🇯🇵 JP", vol: "612 T", date: "Jun 04" },
    { co: "Estrela Global", country: "🇧🇷 BR", vol: "445 T", date: "May 28" },
  ];
  return (
    <MockupShell title="Trade Data Search" icon={Search}>
      <div className="space-y-3 border-b border-border p-4">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2.5">
          <Search className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">HS Code 0901.21 — Roasted coffee</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip>
            <Filter className="h-3 w-3" /> Country
          </Chip>
          <Chip>HS Code</Chip>
          <Chip>
            <Ship className="h-3 w-3" /> Shipment Date
          </Chip>
        </div>
      </div>
      <div className="grid grid-cols-[1.6fr_0.8fr_0.9fr_0.8fr] gap-2 border-b border-border bg-muted/30 px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
        <span>Company</span>
        <span>Country</span>
        <span>Volume</span>
        <span>Date</span>
      </div>
      <div className="divide-y divide-border">
        {rows.map((r) => (
          <div
            key={r.co}
            className="grid grid-cols-[1.6fr_0.8fr_0.9fr_0.8fr] items-center gap-2 px-4 py-3 text-sm"
          >
            <span className="truncate font-semibold">{r.co}</span>
            <span className="text-xs text-muted-foreground">{r.country}</span>
            <span className="text-xs font-medium">{r.vol}</span>
            <span className="text-xs text-muted-foreground">{r.date}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-border bg-muted/40 px-4 py-3">
        <Ship className="h-4 w-4 text-primary" />
        <span className="text-xs text-muted-foreground">2.4M shipment records matched</span>
        <span className="ml-auto rounded-md gradient-purple px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
          Export
        </span>
      </div>
    </MockupShell>
  );
}

/* ----------------------------- 2. Buyer Enrichment ----------------------------- */

function EnrichmentMockup() {
  const rows = [
    { name: "Anna Vogel", role: "Head of Procurement", co: "Nordmann Foods", on: true },
    { name: "James Carter", role: "Import Manager", co: "Pacific Import", on: true },
    { name: "Yuki Tanaka", role: "Sourcing Lead", co: "Sakura Trading", on: false },
    { name: "Lucas Almeida", role: "Buyer", co: "Estrela Global", on: false },
  ];
  return (
    <MockupShell title="Buyer Enrichment & CRM" icon={Sparkles}>
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
    </MockupShell>
  );
}

/* ----------------------------- 3. AI Buyer Analysis ----------------------------- */

function AiAnalysisMockup() {
  return (
    <MockupShell title="AI Buyer Analysis" icon={Sparkles}>
      <div className="flex items-center gap-4 border-b border-border p-4">
        <div className="relative grid h-20 w-20 shrink-0 place-items-center">
          <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--muted)" strokeWidth="3.5" />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="97.4"
              strokeDashoffset="14.6"
            />
          </svg>
          <div className="absolute text-center">
            <div className="font-display text-lg font-extrabold leading-none text-primary">85</div>
            <div className="text-[9px] font-semibold text-muted-foreground">FIT SCORE</div>
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-1 text-[10px] font-bold text-accent-foreground">
              <Target className="h-3 w-3" /> High opportunity
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold leading-snug">Nordmann Foods — strong match</p>
          <p className="text-xs text-muted-foreground">Active importer · 14 shipments / 90 days</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 border-b border-border p-4">
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-mint-foreground">
            <ShieldCheck className="h-3.5 w-3.5" /> Strengths
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            Rising import volume, matching HS codes, EU buyer.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" /> Risks
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            Existing supplier in Vietnam — needs differentiation.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2.5 bg-accent/60 px-4 py-3.5">
        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wide text-primary">Next action</div>
          <p className="text-xs text-foreground">
            Lead with cost-per-ton savings and faster lead times in first outreach.
          </p>
        </div>
      </div>
    </MockupShell>
  );
}

/* --------------------------------- 4. CRM --------------------------------- */

function CrmMockup() {
  const columns = [
    {
      stage: "New Lead",
      tint: "bg-muted text-muted-foreground",
      cards: [{ co: "Sakura Trading", tag: "🇯🇵 JP" }],
    },
    {
      stage: "Contacted",
      tint: "bg-accent text-accent-foreground",
      cards: [{ co: "Pacific Import", tag: "🇺🇸 US" }],
    },
    {
      stage: "Won",
      tint: "bg-mint text-mint-foreground",
      cards: [{ co: "Nordmann Foods", tag: "🇩🇪 DE" }],
    },
  ];
  return (
    <MockupShell title="Sales Pipeline" icon={KanbanSquare}>
      <div className="grid grid-cols-3 gap-2.5 border-b border-border p-4">
        {columns.map((col) => (
          <div key={col.stage} className="space-y-2">
            <div
              className={`rounded-lg px-2 py-1 text-center text-[10px] font-bold ${col.tint}`}
            >
              {col.stage}
            </div>
            {col.cards.map((c) => (
              <div key={c.co} className="rounded-xl border border-border bg-card p-2.5 shadow-sm">
                <div className="truncate text-xs font-semibold">{c.co}</div>
                <div className="mt-1 text-[10px] text-muted-foreground">{c.tag}</div>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-border py-2 text-center text-[10px] text-muted-foreground">
              + Add
            </div>
          </div>
        ))}
      </div>
      <div className="divide-y divide-border">
        {[
          { icon: CircleCheck, txt: "Call with Anna Vogel completed", time: "2h ago", done: true },
          { icon: Clock, txt: "Send proposal to Pacific Import", time: "Due today", done: false },
          { icon: Clock, txt: "Follow up — Sakura Trading", time: "Tomorrow", done: false },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5">
            <t.icon className={`h-4 w-4 ${t.done ? "text-mint-foreground" : "text-primary"}`} />
            <span className="flex-1 truncate text-xs font-medium">{t.txt}</span>
            <span className="text-[10px] text-muted-foreground">{t.time}</span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

/* ----------------------------- 5. Email Integration ----------------------------- */

function EmailMockup() {
  return (
    <MockupShell title="Outreach & Email" icon={Mail}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground">
          <Mail className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-semibold">sales@tradeit.com</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-mint px-2 py-1 text-[10px] font-semibold text-mint-foreground">
          <Check className="h-3 w-3" /> Connected
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 border-b border-border p-4">
        {[
          { l: "Sent", v: "1,820" },
          { l: "Opened", v: "61%" },
          { l: "Replied", v: "24%" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-muted/50 p-3">
            <div className="font-display text-lg font-extrabold leading-none">{s.v}</div>
            <div className="mt-1 text-[11px] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2 border-b border-border p-4">
        {[
          { step: "1 · Intro email", status: "Opened", on: true },
          { step: "2 · Follow-up", status: "Replied", on: true },
          { step: "3 · Case study", status: "Scheduled", on: false },
        ].map((s) => (
          <div
            key={s.step}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2"
          >
            <span className="flex-1 text-xs font-semibold">{s.step}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                s.on ? "bg-mint text-mint-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {s.status}
            </span>
          </div>
        ))}
      </div>
      <div className="px-4 py-3.5">
        <div className="rounded-xl border border-border bg-muted/30 p-3">
          <div className="text-[11px] font-bold text-foreground">
            Helping Nordmann Foods source coffee faster
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Hi Anna, I noticed your team imports green coffee from Brazil…
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="rounded-md gradient-purple px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
              Reply
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

const mockups: Record<FeatureKey, React.ReactNode> = {
  search: <TradeSearchMockup />,
  enrich: <EnrichmentMockup />,
  ai: <AiAnalysisMockup />,
  crm: <CrmMockup />,
  email: <EmailMockup />,
};

export function WhatToPromote() {
  const [active, setActive] = useState<FeatureKey>("search");

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
          {features.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onMouseEnter={() => setActive(f.key)}
                onFocus={() => setActive(f.key)}
                onClick={() => setActive(f.key)}
                aria-pressed={isActive}
                className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-primary/60 bg-accent/60 shadow-float ring-1 ring-primary/20"
                    : "border-border bg-card shadow-sm hover:border-primary/40"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-primary"
                  }`}
                >
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </button>
            );
          })}
        </div>
        <div className="lg:pl-2">
          <div key={active} className="animate-fade-in">
            {mockups[active]}
          </div>
        </div>
      </div>
    </section>
  );
}
