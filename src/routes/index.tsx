import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/components/landing/i18n";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { WhyJoin } from "@/components/landing/WhyJoin";
import { WhoCanJoin } from "@/components/landing/WhoCanJoin";
import { WhatToPromote } from "@/components/landing/WhatToPromote";
import { Rewards } from "@/components/landing/Rewards";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { TrustStats } from "@/components/landing/TrustStats";
import { CtaSection } from "@/components/landing/CtaSection";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TradeIt Affiliate Partners — Earn Recurring Revenue" },
      {
        name: "description",
        content:
          "Join the TradeIt Affiliate Partner Program. Earn 15% direct + 5% indirect recurring commissions helping companies grow global sales with trade data and AI.",
      },
      { property: "og:title", content: "TradeIt Affiliate Partners Program" },
      {
        property: "og:description",
        content:
          "Recommend TradeIt and earn recurring monthly commissions. Free to join, Tier 2 partner rewards.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <WhoCanJoin />
        <WhatToPromote />
        <Rewards />
        <SuccessStories />
        <TrustStats />
        <CtaSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
