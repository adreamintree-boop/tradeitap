import {
  Search,
  LayoutGrid,
  Database,
  Users,
  Mail,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  Building2,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react";
import { PartnerButton } from "./Logo";

const buyers = [
  { name: "Nordmann Foods GmbH", country: "Germany", flag: "🇩🇪", score: 94, vol: "$2.4M" },
  { name: "Pacific Import Co.", country: "United States", flag: "🇺🇸", score: 89, vol: "$1.8M" },
  { name: "Sakura Trading Ltd.", country: "Japan", flag: "🇯🇵", score: 86, vol: "$1.2M" },
  { name: "Estrela Global SA", country: "Brazil", flag: "🇧🇷", score: 81, vol: "$960K" },
];

function HeroDashboard() {
  return (
    <div className="relative">
      {/* Main dashboard card */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <BadgeCheck className="h-3.5 w-3.5 text-primary" />
            app.tradeit.co
          </div>
          <div className="h-6 w-6 rounded-full gradient-purple" />
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="hidden w-14 flex-col items-center gap-4 border-r border-border bg-muted/30 py-5 sm:flex">
            {[LayoutGrid, Database, Users, Mail, Sparkles].map((Icon, i) => (
              <span
                key={i}
                className={`grid h-9 w-9 place-items-center rounded-xl ${
                  i === 1 ? "gradient-purple text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
              </span>
            ))}
          </div>

          {/* content */}
          <div className="flex-1 p-4 sm:p-5">
            {/* search */}
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
              <Search className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">B/L Trade Data: frozen seafood importers</span>
              <span className="ml-auto rounded-md gradient-purple px-2 py-1 text-[11px] font-semibold text-primary-foreground">
                Search
              </span>
            </div>

            {/* stat chips */}
            <div className="mb-4 grid grid-cols-3 gap-2.5">
              {[
                { l: "Buyers found", v: "1,248", i: Building2 },
                { l: "Verified", v: "892", i: BadgeCheck },
                { l: "Est. volume", v: "$48M", i: CircleDollarSign },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-muted/40 p-2.5">
                  <s.i className="mb-1 h-3.5 w-3.5 text-primary" />
                  <div className="font-display text-base font-bold leading-none">{s.v}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            {/* buyer table */}
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border bg-muted/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                <span>Buyer</span>
                <span>AI score</span>
                <span className="text-right">Volume</span>
              </div>
              {buyers.map((b) => (
                <div
                  key={b.name}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border px-3 py-2.5 last:border-0"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-sm">{b.flag}</span>
                    <div className="min-w-0">
                      <div className="truncate text-xs font-semibold">{b.name}</div>
                      <div className="text-[10px] text-muted-foreground">{b.country}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-12 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full gradient-purple"
                        style={{ width: `${b.score}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold tabular-nums">{b.score}</span>
                  </div>
                  <div className="text-right text-xs font-semibold tabular-nums">{b.vol}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating: AI buyer analysis */}
      <div className="absolute -left-4 top-28 hidden w-52 rounded-2xl border border-border bg-card p-3.5 shadow-float md:block">
        <div className="mb-2 flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg gradient-purple text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-semibold">AI Buyer Analysis</span>
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Strong fit — active importer with rising volume and verified decision-makers.
        </p>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-mint px-2 py-0.5 text-[10px] font-semibold text-mint-foreground">
          Match 94%
        </div>
      </div>

      {/* Floating: Monthly commission */}
      <div className="absolute -right-3 -top-5 hidden w-44 rounded-2xl border border-border bg-card p-3.5 shadow-float sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Monthly Commission
        </div>
        <div className="mt-1 flex items-end gap-1">
          <span className="font-display text-2xl font-extrabold">$2,480</span>
          <span className="mb-1 inline-flex items-center text-[11px] font-semibold text-primary">
            <ArrowUpRight className="h-3 w-3" />
            18%
          </span>
        </div>
        <div className="mt-2 flex h-8 items-end gap-1">
          {[40, 55, 48, 70, 62, 85, 100].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm gradient-purple opacity-90"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating: Active referrals + recurring */}
      <div className="absolute -bottom-6 right-6 hidden w-56 rounded-2xl border border-border bg-card p-3.5 shadow-float sm:flex sm:items-center sm:gap-4">
        <div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Active Referrals
            </span>
          </div>
          <div className="mt-0.5 font-display text-xl font-extrabold">36</div>
        </div>
        <div className="h-9 w-px bg-border" />
        <div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Recurring
            </span>
          </div>
          <div className="mt-0.5 font-display text-xl font-extrabold text-primary">+23%</div>
        </div>
      </div>
    </div>
  );
}

const trustItems = [
  "Exporters",
  "Manufacturers",
  "Trading Companies",
  "Consultants",
  "Global Sales Teams",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-mint/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              TradeIt Affiliate Partner Program
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
              Earn Recurring Revenue by Helping Companies Grow Their{" "}
              <span className="bg-gradient-to-r from-primary to-[oklch(0.5_0.2_278)] bg-clip-text text-transparent">
                Global Sales
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              TradeIt enables exporters, manufacturers, and overseas sales teams to discover buyers
              faster with global trade data and AI. Recommend TradeIt and earn recurring commissions
              every month.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PartnerButton />
              <a
                href="#rewards"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                See how rewards work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-7 flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-primary" /> Free to join
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CircleDollarSign className="h-4 w-4 text-primary" /> 15% + 5% commissions
              </span>
            </div>
          </div>

          <div className="lg:pl-6">
            <HeroDashboard />
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-20 border-t border-border/70 pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by the people who power global trade
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-foreground/70 sm:gap-x-12">
            {trustItems.map((t, i) => (
              <span key={t} className="flex items-center gap-8 sm:gap-12">
                {t}
                {i < trustItems.length - 1 && (
                  <span className="hidden h-1 w-1 rounded-full bg-primary/40 sm:inline-block" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
