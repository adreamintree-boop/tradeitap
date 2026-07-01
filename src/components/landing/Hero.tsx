import {
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react";
import { PartnerButton } from "./Logo";
import heroImage from "@/assets/hero-affiliate.jpg";
import { useState, useEffect } from "react";

function IncomeGraphCard() {
  return (
    <div className="w-56 rounded-2xl border border-border bg-card p-4 shadow-float">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground">Your affiliate income</span>
        <span className="inline-flex items-center text-[11px] font-semibold text-primary">
          <ArrowUpRight className="h-3 w-3" />
          +42%
        </span>
      </div>
      <svg viewBox="0 0 200 80" className="mt-3 h-16 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.12 190)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="oklch(0.7 0.12 190)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 68 L34 60 L70 64 L104 44 L140 34 L172 20 L200 6 L200 80 L0 80 Z"
          fill="url(#incomeFill)"
        />
        <path
          d="M0 68 L34 60 L70 64 L104 44 L140 34 L172 20 L200 6"
          fill="none"
          stroke="oklch(0.62 0.13 188)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="200" cy="6" r="3.5" fill="oklch(0.62 0.13 188)" />
      </svg>
      <div className="mt-1 flex items-end justify-between">
        <span className="font-display text-lg font-extrabold leading-none">$2,480</span>
        <span className="text-[10px] font-medium text-muted-foreground">this month</span>
      </div>
    </div>
  );
}

function FloatingBadges() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let to: ReturnType<typeof setTimeout>;
    const loop = () => {
      setShow(true);
      to = setTimeout(() => {
        setShow(false);
        to = setTimeout(loop, 2500);
      }, 3200);
    };
    loop();
    return () => clearTimeout(to);
  }, []);

  const pills = [
    { v: "+$350", cls: "bg-badge-mint text-navy", pos: "right-6 top-20 sm:-right-4" },
    { v: "+$200", cls: "bg-primary text-primary-foreground", pos: "left-4 top-1/2 sm:-left-7" },
    { v: "+$120", cls: "bg-badge-lavender text-navy", pos: "left-6 bottom-40 sm:-left-4" },
  ];

  return (
    <>
      {pills.map((p, i) => (
        <span
          key={p.v}
          className={`absolute ${p.pos} inline-flex items-center rounded-full px-[18px] py-[10px] font-display text-base font-bold shadow-badge transition-all duration-500 ease-out ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"} ${p.cls}`}
          style={{ transitionDelay: show ? `${i * 180}ms` : "0ms" }}
        >
          {p.v}
        </span>
      ))}
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-3xl" />

      {/* image */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevated">
        <img
          src={heroImage}
          alt="Affiliate partner smiling while reviewing recurring commission earnings on a laptop"
          width={1024}
          height={1216}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      {/* floating commission pills */}
      <FloatingBadges />

      {/* monthly commission summary card */}
      <div className="absolute -left-4 top-6 hidden w-40 rounded-2xl border border-border bg-card p-3.5 shadow-float sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Indirect Commission
        </div>
        <div className="mt-1 flex items-end gap-1.5">
          <span className="font-display text-xl font-extrabold leading-none">$1,800</span>
          <span className="inline-flex items-center text-[11px] font-semibold text-primary">
            <TrendingUp className="h-3 w-3" />
            +23%
          </span>
        </div>
      </div>

      {/* income graph card overlapping lower-right */}
      <div className="absolute -bottom-6 -right-4 hidden sm:block">
        <IncomeGraphCard />
      </div>
    </div>
  );
}

const trustItems = [
  "Exporters",
  "Manufacturers",
  "Trading Companies",
  "Sourcing Teams",
  "Procurement Teams",
  "Importers",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-mint/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Affiliate Partner Program
            </span>
            <h1 className="mt-6 font-display text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Earn Recurring Revenue by Helping Companies Grow Their{" "}
              <span className="bg-gradient-to-r from-primary to-[oklch(0.5_0.18_250)] bg-clip-text text-transparent">
                Global Sales
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              TradeIt enables exporters, manufacturers, and overseas sales teams to discover buyers
              faster with global trade data and AI. Recommend TradeIt and earn recurring commissions
              every month.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <PartnerButton className="w-full sm:w-auto" />
              <a
                href="#rewards"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                See how rewards work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-primary" /> Free to join
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CircleDollarSign className="h-4 w-4 text-primary" /> 15% + 5% commissions
              </span>
            </div>
          </div>

          <div className="lg:pl-6">
            <HeroVisual />
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-20 border-t border-border/70 pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by professionals across global trade
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm font-semibold text-foreground/70 sm:gap-x-10">
            {trustItems.map((t, i) => (
              <span key={t} className="flex items-center gap-6 sm:gap-10">
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
