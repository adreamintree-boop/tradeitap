import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
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
import tradeitLogoTransparent from "@/assets/tradeit-logo-transparent.png.asset.json";
import {
  normalizeSignupLang,
  signupDict,
  type SignupCopy,
  type SignupLang,
} from "./signup-i18n";

type SignupSearch = {
  type?: string;
  source?: string;
  lang?: string;
};

export const Route = createFileRoute("/signup")({
  validateSearch: (search: Record<string, unknown>): SignupSearch => ({
    type: typeof search.type === "string" ? search.type : undefined,
    source: typeof search.source === "string" ? search.source : undefined,
    lang: typeof search.lang === "string" ? search.lang : undefined,
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

function PartnerVisual({ c }: { c: SignupCopy }) {
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
                {c.monthlyCommission}
              </p>
              <p className="font-display text-3xl font-extrabold text-white">{c.amount}</p>
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
          <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">{c.directLabel}</p>
          <p className="mt-1 font-display text-2xl font-bold text-white">{c.directValue}</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">{c.indirectLabel}</p>
          <p className="mt-1 font-display text-2xl font-bold text-white">{c.indirectValue}</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">{c.signupsLabel}</p>
          <p className="mt-1 font-display text-2xl font-bold text-white">{c.signupsValue}</p>
          <p className="text-[10px] text-white/60">{c.thisMonth}</p>
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

/** Renders the terms sentence with inline Terms of Service / Privacy Policy links. */
function TermsText({ c }: { c: SignupCopy }) {
  const parts = c.termsTemplate.split(/(\{tos\}|\{privacy\})/);
  return (
    <span>
      {parts.map((part, i) => {
        if (part === "{tos}") {
          return (
            <a key={i} href="#" className="font-medium text-primary underline">
              {c.tosLabel}
            </a>
          );
        }
        if (part === "{privacy}") {
          return (
            <a key={i} href="#" className="font-medium text-primary underline">
              {c.privacyLabel}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function SignupPage() {
  const { type, source, lang } = Route.useSearch();
  const navigate = useNavigate();
  const isPartner = type === "partner" || source === "affiliate-partners";

  // Language priority: 1) lang query param, 2) saved language, 3) English.
  const queryLang = normalizeSignupLang(lang);
  const [uiLang, setUiLang] = useState<SignupLang>(queryLang ?? "en");
  useEffect(() => {
    if (queryLang) {
      setUiLang(queryLang);
      return;
    }
    try {
      const saved = normalizeSignupLang(localStorage.getItem("tradeit_lang"));
      if (saved) setUiLang(saved);
    } catch {
      /* storage may be unavailable */
    }
  }, [queryLang]);
  const c = signupDict[uiLang];

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
            <img
              src={tradeitLogoTransparent.url}
              alt="TradeIt"
              className="h-9 w-auto object-contain transition hover:opacity-90"
            />
          </Link>

          {isPartner ? (
            <>
              <h1 className="mt-10 font-display text-4xl font-extrabold leading-tight tracking-tight">
                {c.earnTitle}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                {c.earnDesc}
              </p>
              <ul className="mt-7 space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <PartnerVisual c={c} />
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
                {c.programBadge}
              </span>
            </div>
          )}

          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            {isPartner ? c.createTitle : "Create your account"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {isPartner
              ? c.createDesc
              : "Sign up to start exploring global trade data and AI-powered sales."}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                {c.emailLabel} <span className="text-destructive">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
                <span className="text-muted-foreground">@</span>
                <input
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder={c.domainPlaceholder}
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
                <button
                  type="button"
                  className="h-11 shrink-0 rounded-lg border border-border bg-muted px-4 text-sm font-semibold text-foreground transition hover:bg-muted/70"
                >
                  {c.sendCode}
                </button>
              </div>
            </div>

            {/* Verification code */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                {c.verifyLabel} <span className="text-destructive">*</span>
              </label>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={c.verifyPlaceholder}
                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                {c.passwordLabel} <span className="text-destructive">*</span>
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
                {c.confirmLabel} <span className="text-destructive">*</span>
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
                  <Check className="h-3.5 w-3.5" /> {c.pwHint}
                </li>
                <li
                  className={`flex items-center gap-1.5 text-xs ${pwMatch ? "text-emerald-600" : "text-muted-foreground"}`}
                >
                  <Check className="h-3.5 w-3.5" /> {c.pwMatch}
                </li>
              </ul>
            </div>

            {/* Name */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                {c.nameLabel} <span className="text-destructive">*</span>
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
              <TermsText c={c} />
            </label>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                to="/"
                className="grid h-12 place-items-center rounded-lg border border-border bg-background text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                <span className="inline-flex items-center gap-1.5">
                  <ArrowLeft className="h-4 w-4" /> {c.backToLogin}
                </span>
              </Link>
              <button
                type="submit"
                disabled={!canSubmit}
                className="h-12 rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-float transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {c.signUp}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
