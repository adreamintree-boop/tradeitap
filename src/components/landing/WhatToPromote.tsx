import { useState } from "react";
import {
  Database,
  UserPlus,
  Sparkles,
  KanbanSquare,
  Mail,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import promoteSearch from "@/assets/promote-search.png.asset.json";
import promoteEnrich from "@/assets/promote-enrich.png.asset.json";
import promoteAi from "@/assets/promote-ai.png.asset.json";
import promoteCrm from "@/assets/promote-crm.png.asset.json";
import promoteEmail from "@/assets/promote-email.png.asset.json";

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

const previews: Record<FeatureKey, { src: string; alt: string }> = {
  search: { src: promoteSearch.url, alt: "B/L Trade Data Search dashboard showing roasted coffee shipment records" },
  enrich: { src: promoteEnrich.url, alt: "Buyer Enrichment dashboard showing company overview and contacts" },
  ai: { src: promoteAi.url, alt: "AI Buyer Analysis dashboard showing buyer fit analysis results" },
  crm: { src: promoteCrm.url, alt: "CRM dashboard showing global map and sales pipeline kanban board" },
  email: { src: promoteEmail.url, alt: "Email Integration interface with buyer and contact selection" },
};

export function WhatToPromote() {
  const [active, setActive] = useState<FeatureKey>("search");

  const toggleFeature = (key: FeatureKey) => {
    setActive((prev) => (prev === key ? prev : key));
  };

  return (
    <section className="mx-auto max-w-[110rem] px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
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

      {/* Desktop: hover-driven split grid */}
      <div className="mt-16 hidden items-start gap-8 lg:grid lg:grid-cols-[35%_1fr] lg:gap-16">
        <div className="grid gap-3 lg:mt-14">
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
                className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-primary/60 bg-accent/60 shadow-float ring-1 ring-primary/20"
                    : "border-border bg-card shadow-sm hover:border-primary/40"
                }`}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
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
        <div className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
              {features.map((f) => {
                const isActive = active === f.key;
                return (
                  <img
                    key={f.key}
                    src={previews[f.key].src}
                    alt={previews[f.key].alt}
                    loading="eager"
                    className={`absolute inset-0 h-full w-full object-contain transition-all duration-300 ease-out ${
                      isActive ? "scale-100 opacity-100" : "pointer-events-none scale-[0.97] opacity-0"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: accordion with inline previews */}
      <div className="mt-10 grid gap-3 lg:hidden">
        {features.map((f) => {
          const isActive = active === f.key;
          return (
            <div
              key={f.key}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isActive
                  ? "border-primary/60 bg-accent/60 shadow-float ring-1 ring-primary/20"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFeature(f.key)}
                aria-expanded={isActive}
                className="flex w-full items-start gap-3 p-4 text-left"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors duration-300 ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-accent text-primary"
                  }`}
                >
                  <f.icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm font-bold sm:text-base">{f.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {f.body}
                  </p>
                </div>
                <ChevronDown
                  className={`mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isActive && (
                <div className="px-4 pb-4">
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-card">
                    <img
                      src={previews[f.key].src}
                      alt={previews[f.key].alt}
                      loading="eager"
                      className="h-auto max-h-[220px] w-full object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
