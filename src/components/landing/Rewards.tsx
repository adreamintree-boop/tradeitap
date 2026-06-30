import { User, Users, ArrowRight, ArrowDown, CircleDollarSign, Network } from "lucide-react";

function Node({
  icon: Icon,
  label,
  sub,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  sub?: string;
  highlight?: "purple" | "navy" | "mint" | "muted";
}) {
  const styles = {
    purple: "gradient-purple text-primary-foreground border-transparent",
    navy: "gradient-navy text-navy-foreground border-transparent",
    mint: "bg-mint text-mint-foreground border-border/60",
    muted: "bg-card text-foreground border-border",
  } as const;
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm ${styles[highlight ?? "muted"]}`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-background/20">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div className="leading-tight">
        <div className="text-sm font-bold">{label}</div>
        {sub && <div className="text-xs opacity-80">{sub}</div>}
      </div>
    </div>
  );
}

function TierDiagram() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <Network className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-bold">How Tier 2 commissions work</h3>
      </div>

      {/* Direct path */}
      <div className="rounded-2xl border border-border bg-muted/30 p-5">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
          Direct commission
        </div>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <Node icon={User} label="You" highlight="navy" />
          <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
          <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground sm:hidden" />
          <Node icon={Users} label="Direct Customers" />
          <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
          <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground sm:hidden" />
          <Node icon={CircleDollarSign} label="15%" sub="Direct" highlight="purple" />
        </div>
      </div>

      {/* Indirect path */}
      <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-5">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
          Indirect commission
        </div>
        <div className="flex flex-col items-stretch gap-2">
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <Node icon={User} label="You" highlight="navy" />
            <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
            <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground sm:hidden" />
            <Node icon={User} label="Invited Partner" highlight="mint" />
          </div>
          <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground" />
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <Node icon={Users} label="Partner's Customers" />
            <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
            <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground sm:hidden" />
            <Node icon={CircleDollarSign} label="5%" sub="Indirect" highlight="purple" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Calculator() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
      <div className="border-b border-border bg-muted/40 px-6 py-5">
        <h3 className="font-display text-lg font-bold">Earnings example</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          A simple scenario on a $50/month plan.
        </p>
      </div>

      <div className="space-y-4 p-6">
        <div className="rounded-2xl border border-border p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Direct
            </span>
            <span className="text-xs text-muted-foreground">15% recurring</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            10 customers subscribe to a $50/month plan
          </p>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="font-display text-2xl font-extrabold">$75</span>
            <span className="text-sm text-muted-foreground">/mo · $900/yr</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Indirect
            </span>
            <span className="text-xs text-muted-foreground">5% recurring</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Your invited partner brings 30 customers on a $50/month plan
          </p>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="font-display text-2xl font-extrabold">$75</span>
            <span className="text-sm text-muted-foreground">/mo · $900/yr</span>
          </div>
        </div>

        <div className="rounded-2xl gradient-purple p-5 text-primary-foreground shadow-float">
          <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
            Total recurring earnings
          </div>
          <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="font-display text-4xl font-extrabold leading-none">$150</span>
            <span className="text-sm font-medium opacity-90">/ month</span>
            <span className="ml-auto font-display text-2xl font-bold">$1,800/yr</span>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Example earnings are for illustration only. Actual earnings may vary depending on
          subscription plans, customer retention, and partner status.
        </p>
      </div>
    </div>
  );
}

export function Rewards() {
  return (
    <section id="rewards" className="scroll-mt-20 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Tier 2 partner rewards
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Grow Your Network. Multiply Your Rewards.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Earn recurring commissions from both your direct referrals and the partners you
            introduce. As your network grows, so does your recurring revenue.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <TierDiagram />
          <Calculator />
        </div>
      </div>
    </section>
  );
}
