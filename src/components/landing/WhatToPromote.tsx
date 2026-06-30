import { useState } from "react";
import {
  Database,
  UserPlus,
  Sparkles,
  KanbanSquare,
  Mail,
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

  return (
    <section className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8">
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

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[42%_1fr] lg:gap-16">
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
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-elevated sm:p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted/30">
              {features.map((f) => {
                const isActive = active === f.key;
                return (
                  <img
                    key={f.key}
                    src={previews[f.key].src}
                    alt={previews[f.key].alt}
                    loading="lazy"
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
    </section>
  );
}
