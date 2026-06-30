import { useState } from "react";
import { User, Users, UserPlus, ArrowRight, ArrowDown, CircleDollarSign, Network } from "lucide-react";

function FlowNode({
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
      className={`flex flex-1 flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center shadow-sm ${styles[highlight ?? "muted"]}`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background/20">
        <Icon className="h-5 w-5" />
      </span>
      <div className="leading-tight">
        <div className="text-sm font-bold">{label}</div>
        {sub && <div className="mt-0.5 text-xs opacity-80">{sub}</div>}
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <>
      <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 self-center text-muted-foreground sm:block" />
      <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-muted-foreground sm:hidden" />
    </>
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
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Direct commission
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
            15%
          </span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Refer customers directly and earn 15% recurring commission.
        </p>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row">
          <FlowNode icon={User} label="You" sub="Refer customers" highlight="navy" />
          <FlowArrow />
          <FlowNode icon={Users} label="Direct Customers" sub="Subscribe to TradeIt" />
          <FlowArrow />
          <FlowNode icon={CircleDollarSign} label="15% Commission" sub="Recurring, monthly" highlight="purple" />
        </div>
      </div>

      {/* Indirect path */}
      <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-5">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Indirect commission
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
            5%
          </span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Invite partners. When they bring paying customers, you earn 5% recurring indirect
          commission.
        </p>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row">
          <FlowNode icon={User} label="You" sub="Invite a partner" highlight="navy" />
          <FlowArrow />
          <FlowNode icon={UserPlus} label="Invited Partner" sub="Refers customers" highlight="mint" />
          <FlowArrow />
          <FlowNode icon={Users} label="Partner's Customers" sub="Subscribe to TradeIt" />
          <FlowArrow />
          <FlowNode icon={CircleDollarSign} label="5% Commission" sub="Recurring, monthly" highlight="purple" />
        </div>
      </div>
    </div>
  );
}

const DIRECT_RATE = 0.15;
const INDIRECT_RATE = 0.05;

function formatMoney(value: number) {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

function CalcInput({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <div className="flex items-center rounded-xl border border-border bg-background px-3 focus-within:ring-2 focus-within:ring-ring">
        {prefix && <span className="text-sm font-semibold text-muted-foreground">{prefix}</span>}
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full bg-transparent py-2.5 text-sm font-bold text-foreground outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>
    </label>
  );
}

function ResultCard({
  tier,
  rate,
  formula,
  monthly,
  annual,
}: {
  tier: string;
  rate: string;
  formula: string;
  monthly: number;
  annual: number;
}) {
  return (
    <div className="rounded-2xl border border-border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">{tier}</span>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
          {rate} recurring
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{formula}</p>
      <div className="mt-3 flex items-baseline justify-between">
        <span className="font-display text-2xl font-extrabold">
          {formatMoney(monthly)}
          <span className="text-base font-semibold text-muted-foreground">/mo</span>
        </span>
        <span className="text-sm text-muted-foreground">{formatMoney(annual)}/yr</span>
      </div>
    </div>
  );
}

function Calculator() {
  const [directCustomers, setDirectCustomers] = useState(10);
  const [partnerCustomers, setPartnerCustomers] = useState(30);
  const [planPrice, setPlanPrice] = useState(50);

  const directMonthly = directCustomers * planPrice * DIRECT_RATE;
  const directAnnual = directMonthly * 12;
  const indirectMonthly = partnerCustomers * planPrice * INDIRECT_RATE;
  const indirectAnnual = indirectMonthly * 12;
  const totalMonthly = directMonthly + indirectMonthly;
  const totalAnnual = directAnnual + indirectAnnual;

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
      <div className="border-b border-border bg-muted/40 px-6 py-5">
        <h3 className="font-display text-lg font-bold">Earnings calculator</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Adjust the numbers to estimate your recurring earnings.
        </p>
      </div>

      <div className="space-y-4 p-6">
        {/* Inputs */}
        <div className="grid gap-3 rounded-2xl border border-border bg-muted/30 p-4 sm:grid-cols-3">
          <CalcInput
            label="Direct customers"
            value={directCustomers}
            onChange={setDirectCustomers}
          />
          <CalcInput
            label="Partner's customers"
            value={partnerCustomers}
            onChange={setPartnerCustomers}
          />
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-muted-foreground">Monthly plan price</span>
            <div className="flex gap-2">
              {[20, 50, 100].map((price) => (
                <button
                  key={price}
                  type="button"
                  onClick={() => setPlanPrice(price)}
                  className={`flex-1 rounded-xl border py-2.5 text-sm font-bold transition-all ${
                    planPrice === price
                      ? "gradient-purple border-transparent text-primary-foreground shadow-float"
                      : "border-border bg-background text-foreground hover:border-primary/40 hover:shadow-sm"
                  }`}
                >
                  ${price}
                </button>
              ))}
            </div>
          </div>
        </div>

        <ResultCard
          tier="Direct"
          rate="15%"
          formula={`${directCustomers} customers × $${planPrice} × 15%`}
          monthly={directMonthly}
          annual={directAnnual}
        />

        <ResultCard
          tier="Indirect"
          rate="5%"
          formula={`${partnerCustomers} partner customers × $${planPrice} × 5%`}
          monthly={indirectMonthly}
          annual={indirectAnnual}
        />

        <div className="rounded-2xl gradient-purple p-5 text-primary-foreground shadow-float">
          <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
            Total recurring earnings
          </div>
          <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="font-display text-4xl font-extrabold leading-none">
              {formatMoney(totalMonthly)}
              <span className="text-xl font-bold opacity-90">/mo</span>
            </span>
            <span className="ml-auto font-display text-2xl font-bold">
              {formatMoney(totalAnnual)}/yr
            </span>
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
