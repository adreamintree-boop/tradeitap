import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { Logo } from "@/components/landing/Logo";
import tradeitLogoAsset from "@/assets/tradeit-logo.png.asset.json";

type SignupSearch = {
  type?: string;
  source?: string;
};

export const Route = createFileRoute("/signup")({
  validateSearch: (search: Record<string, unknown>): SignupSearch => ({
    type: typeof search.type === "string" ? search.type : undefined,
    source: typeof search.source === "string" ? search.source : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Create your TradeIt Partner account" },
      {
        name: "description",
        content:
          "Sign up for the TradeIt Affiliate Partners Program and earn recurring commissions promoting a global trade data and AI sales platform.",
      },
    ],
  }),
  component: SignupPage,
});

const partnerPoints = [
  "15% direct recurring commission",
  "5% indirect partner commission",
  "Free to join",
  "Built for consultants, creators, communities, and trade networks",
];

function PartnerVisual() {
  return (
    <div className="relative mt-10 w-full">
      {/* Monthly Commission — primary card */}
      <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white">
              <Wallet className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                Monthly Commission
              </p>
              <p className="font-display text-3xl font-extrabold text-white">$1,800</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-100">
            <TrendingUp className="h-3.5 w-3.5" /> +23%
          </span>
        </div>

        {/* mini commission graph */}
        <div className="mt-5 flex h-20 items-end gap-2">
          {[38, 52, 44, 66, 58, 78, 70, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-white/25 to-white/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Direct / Indirect / Referral signups */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">Direct</p>
          <p className="mt-1 font-display text-2xl font-bold text-white">15%</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">Indirect</p>
          <p className="mt-1 font-display text-2xl font-bold text-white">5%</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">Signups</p>
          <p className="mt-1 font-display text-2xl font-bold text-white">42</p>
          <p className="text-[10px] text-white/60">This month</p>
        </div>
      </div>
    </div>
  );
}

function GeneralVisual() {
  return (
    <div className="relative mt-12 w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
      <p className="text-xs font-medium uppercase tracking-wide text-white/70">
        Buyer Company Overview
      </p>
      <p className="mt-2 font-display text-4xl font-extrabold text-white">254</p>
      <p className="text-sm text-white/70">+4.3% vs last week</p>
      <div className="mt-5 flex h-20 items-end gap-2">
        {[38, 52, 44, 66, 58, 78, 70, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-white/25 to-white/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function SignupPage() {
  const { type, source } = Route.useSearch();
  const navigate = useNavigate();
  const isPartner = type === "partner" || source === "affiliate-partners";

  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const pwValid = useMemo(
    () => /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(password),
    [password],
  );
  const pwMatch = confirm.length > 0 && password === confirm;
  const canSubmit = email && domain && code && pwValid && pwMatch && name && agree;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    // Front-end flow: mark this account as an Affiliate Partner via a local flag.
    // The same account/user system is reused; only the signup source is tagged.
    try {
      localStorage.setItem(
        "tradeit_signup",
        JSON.stringify({
          email: `${email}@${domain}`,
          name,
          isAffiliatePartner: isPartner,
          signupSource: isPartner ? "affiliate-partner" : "user",
          role: isPartner ? "partner" : "user",
          createdAt: new Date().toISOString(),
        }),
      );
    } catch {
      /* storage may be unavailable; non-blocking */
    }
    navigate({ to: isPartner ? "/dashboard/partners" : "/" });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left visual / brand panel */}
      <div className="relative hidden flex-col items-center justify-center overflow-hidden px-8 py-16 text-white lg:flex gradient-navy">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 18%, oklch(0.61 0.19 255 / 0.55), transparent 45%), radial-gradient(circle at 85% 70%, oklch(0.65 0.14 210 / 0.45), transparent 50%)",
          }}
        />
        <div className="relative w-full max-w-[560px]">
          <Link to="/" className="inline-flex">
            <div className="rounded-xl bg-white/95 px-5 py-2.5 shadow-lg transition hover:bg-white">
              <img
                src={tradeitLogoAsset.url}
                alt="TradeIt"
                className="h-8 w-auto object-contain"
              />
            </div>
          </Link>

          {isPartner ? (
            <>
              <h1 className="mt-10 font-display text-4xl font-extrabold leading-tight tracking-tight">
                Start Earning with TradeIt
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Join the TradeIt Affiliate Partners Program and earn recurring commissions by
                recommending a global trade data and AI-powered sales platform.
              </p>
              <ul className="mt-7 space-y-3">
                {partnerPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <PartnerVisual />
            </>
          ) : (
            <>
              <h1 className="mt-10 font-display text-4xl font-extrabold leading-tight tracking-tight">
                Experience the future of trade with TradeIt.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Empower your business to go global.
              </p>
              <GeneralVisual />
            </>
          )}
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center bg-background px-5 py-10 sm:px-10">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link to="/" className="inline-flex">
              <Logo />
            </Link>
          </div>

          {isPartner && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                Affiliate Partners Program
              </span>
            </div>
          )}

          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            {isPartner ? "Create your Partner account" : "Create your account"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {isPartner
              ? "Use your TradeIt account to access both the TradeIt platform and the Partner Program."
              : "Sign up to start exploring global trade data and AI-powered sales."}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Email <span className="text-destructive">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
                <span className="text-muted-foreground">@</span>
                <input
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="company.com"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
                <button
                  type="button"
                  className="h-11 shrink-0 rounded-lg border border-border bg-muted px-4 text-sm font-semibold text-foreground transition hover:bg-muted/70"
                >
                  Send Code
                </button>
              </div>
            </div>

            {/* Verification code */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Verification Code <span className="text-destructive">*</span>
              </label>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the code sent to your email"
                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Password <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 pr-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  aria-label="Toggle password visibility"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Confirm Password <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 pr-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <ul className="mt-2 space-y-1">
                <li
                  className={`flex items-center gap-1.5 text-xs ${pwValid ? "text-emerald-600" : "text-muted-foreground"}`}
                >
                  <Check className="h-3.5 w-3.5" /> 8–20 characters (letters and numbers)
                </li>
                <li
                  className={`flex items-center gap-1.5 text-xs ${pwMatch ? "text-emerald-600" : "text-muted-foreground"}`}
                >
                  <Check className="h-3.5 w-3.5" /> Passwords match
                </li>
              </ul>
            </div>

            {/* Name */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Name <span className="text-destructive">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-input accent-[var(--primary)]"
              />
              <span>
                By creating an account, you agree to the{" "}
                <a href="#" className="font-medium text-primary underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium text-primary underline">
                  Privacy Policy.
                </a>
              </span>
            </label>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                to="/"
                className="grid h-12 place-items-center rounded-lg border border-border bg-background text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                <span className="inline-flex items-center gap-1.5">
                  <ArrowLeft className="h-4 w-4" /> Back to login
                </span>
              </Link>
              <button
                type="submit"
                disabled={!canSubmit}
                className="h-12 rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-float transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
