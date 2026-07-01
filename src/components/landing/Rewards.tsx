import { useState } from "react";
import {
  User,
  Users,
  UserPlus,
  ArrowRight,
  ArrowDown,
  CircleDollarSign,
  Network,
  ChevronDown,
} from "lucide-react";
import { useLang } from "./i18n";

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
  const { t } = useLang();
  const r = t.rewards;
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <Network className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-bold">{r.diagTitle}</h3>
      </div>

      {/* Direct path */}
      <div className="rounded-2xl border border-border bg-muted/30 p-5">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {r.directCommission}
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
            15%
          </span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          {r.directCommissionDesc}
        </p>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row">
          <FlowNode icon={User} label={r.you} sub={r.referCustomers} highlight="navy" />
          <FlowArrow />
          <FlowNode icon={Users} label={r.directCustomersNode} sub={r.subscribe} />
          <FlowArrow />
          <FlowNode
            icon={CircleDollarSign}
            label={r.commission15}
            sub={r.recurringMonthly}
            highlight="purple"
          />
        </div>
      </div>

      {/* Indirect path */}
      <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-5">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {r.indirectCommission}
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
            5%
          </span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          {r.indirectCommissionDesc}
        </p>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row">
          <FlowNode icon={User} label={r.you} sub={r.inviteAPartner} highlight="navy" />
          <FlowArrow />
          <FlowNode
            icon={UserPlus}
            label={r.invitedPartner}
            sub={r.refersCustomers}
            highlight="mint"
          />
          <FlowArrow />
          <FlowNode icon={Users} label={r.partnersCustomers} sub={r.subscribe} />
          <FlowArrow />
          <FlowNode
            icon={CircleDollarSign}
            label={r.commission5}
            sub={r.recurringMonthly}
            highlight="purple"
          />
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
    <label className="flex flex-col gap-1 sm:gap-1.5">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <div className="flex items-center rounded-xl border border-border bg-background px-2.5 sm:px-3 focus-within:ring-2 focus-within:ring-ring">
        {prefix && <span className="text-sm font-semibold text-muted-foreground">{prefix}</span>}
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full bg-transparent py-2 text-sm font-bold text-foreground outline-none [appearance:textfield] sm:py-2.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
  recurringLabel,
  perMo,
  perYr,
}: {
  tier: string;
  rate: string;
  formula: string;
  monthly: number;
  annual: number;
  recurringLabel: string;
  perMo: string;
  perYr: string;
}) {
  return (
    <div className="rounded-2xl border border-border p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">{tier}</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary sm:px-2.5 sm:text-xs">
          {rate} {recurringLabel}
        </span>
      </div>
      <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{formula}</p>
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 sm:mt-3 sm:gap-x-4">
        <span className="whitespace-nowrap font-display text-xl font-extrabold sm:text-2xl">
          {formatMoney(monthly)}
          <span className="text-sm font-semibold text-muted-foreground sm:text-base">{perMo}</span>
        </span>
        <span className="whitespace-nowrap text-xs text-muted-foreground sm:text-sm">
          {formatMoney(annual)}{perYr}
        </span>
      </div>
    </div>
  );
}

function Calculator() {
  const { t } = useLang();
  const r = t.rewards;
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
      <div className="border-b border-border bg-muted/40 px-4 py-4 sm:px-6 sm:py-5">
        <h3 className="font-display text-lg font-bold">{r.calcTitle}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {r.calcSubtitle}
        </p>
      </div>

      <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
        {/* Inputs */}
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-muted/30 p-3 sm:gap-3 sm:p-4 sm:grid-cols-3">
          <CalcInput
            label={r.directCustomers}
            value={directCustomers}
            onChange={setDirectCustomers}
          />
          <CalcInput
            label={r.partnerCustomers}
            value={partnerCustomers}
            onChange={setPartnerCustomers}
          />
          <div className="col-span-2 flex flex-col gap-1.5 sm:col-span-1">
            <span className="text-xs font-semibold text-muted-foreground">{r.monthlyPlanPrice}</span>
            <div className="flex gap-2">
              {[20, 50, 100].map((price) => (
                <button
                  key={price}
                  type="button"
                  onClick={() => setPlanPrice(price)}
                  className={`flex-1 rounded-xl border py-2 text-sm font-bold transition-all sm:py-2.5 ${
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

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-3">
          <ResultCard
            tier={r.directTier}
            rate="15%"
            formula={`${directCustomers} × $${planPrice} × 15%`}
            monthly={directMonthly}
            annual={directAnnual}
            recurringLabel={r.recurring}
            perMo={r.perMo}
            perYr={r.perYr}
          />

          <ResultCard
            tier={r.indirectTier}
            rate="5%"
            formula={`${partnerCustomers} × $${planPrice} × 5%`}
            monthly={indirectMonthly}
            annual={indirectAnnual}
            recurringLabel={r.recurring}
            perMo={r.perMo}
            perYr={r.perYr}
          />
        </div>

        <div className="rounded-2xl gradient-purple p-4 text-primary-foreground shadow-float sm:p-5">
          <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
            {r.totalRecurring}
          </div>
          <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="whitespace-nowrap font-display text-3xl font-extrabold leading-none sm:text-4xl">
              {formatMoney(totalMonthly)}
              <span className="text-lg font-bold opacity-90 sm:text-xl">{r.perMo}</span>
            </span>
            <span className="ml-auto whitespace-nowrap font-display text-xl font-bold sm:text-2xl">
              {formatMoney(totalAnnual)}{r.perYr}
            </span>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          {r.disclaimer}
        </p>
      </div>
    </div>
  );
}

/* ── Mobile-only components ── */

function MobileSummaryCards() {
  const { t } = useLang();
  const r = t.rewards;
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Direct */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {r.directLabel}
        </div>
        <div className="mt-1 font-display text-3xl font-extrabold text-primary">15%</div>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {r.directDesc}
        </p>
      </div>

      {/* Indirect */}
      <div className="rounded-2xl border border-border bg-sky-50 p-4 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-wide text-sky-700">
          {r.indirectLabel}
        </div>
        <div className="mt-1 font-display text-3xl font-extrabold text-sky-700">5%</div>
        <p className="mt-1 text-xs leading-relaxed text-sky-800/80">
          {r.indirectDesc}
        </p>
      </div>
    </div>
  );
}

function MiniFlow({
  steps,
}: {
  steps: { label: string; highlight?: boolean; navy?: boolean }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
              step.navy
                ? "bg-navy text-navy-foreground"
                : step.highlight
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-foreground"
            }`}
          >
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
}

function MobileAccordions() {
  const { t } = useLang();
  const r = t.rewards;
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  const items = [
    {
      title: r.howDirect,
      steps: [
        { label: r.you, navy: true },
        { label: r.directCustomersNode },
        { label: r.commission15recurring, highlight: true },
      ],
    },
    {
      title: r.howIndirect,
      steps: [
        { label: r.you, navy: true },
        { label: r.invitedPartner },
        { label: r.partnersCustomers },
        { label: r.commission5recurring, highlight: true },
      ],
    },
  ];



  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left"
            >
              <span className="text-sm font-semibold text-foreground">{item.title}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border px-4 pb-4 pt-1">
                <MiniFlow steps={item.steps} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Rewards() {
  const { t } = useLang();
  return (
    <section id="rewards" className="scroll-mt-20 bg-muted/30 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            {t.rewards.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t.rewards.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.rewards.subtitle}
          </p>
        </div>


        {/* ── Mobile layout ── */}
        <div className="mt-8 space-y-6 lg:hidden">
          <MobileSummaryCards />
          <Calculator />
          <MobileAccordions />
        </div>

        {/* ── Desktop layout ── */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
          <TierDiagram />
          <Calculator />
        </div>
      </div>
    </section>
  );
}
