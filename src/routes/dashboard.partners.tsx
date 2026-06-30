import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Link2, Copy, LayoutDashboard } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

export const Route = createFileRoute("/dashboard/partners")({
  head: () => ({
    meta: [
      { title: "Welcome to the TradeIt Affiliate Partners Program" },
      {
        name: "description",
        content:
          "Your TradeIt partner account is ready. Find your referral link and start earning recurring commissions.",
      },
    ],
  }),
  component: PartnersWelcome,
});

function PartnersWelcome() {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/">
            <Logo />
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
            <LayoutDashboard className="h-3.5 w-3.5" /> Partners
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
            <CheckCircle2 className="h-7 w-7" />
          </span>
          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-foreground">
            Welcome to the TradeIt Affiliate Partners Program.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Your partner account has been created. You can find your referral link in the Partners
            section of your profile menu.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-5">
            <p className="text-sm font-semibold text-foreground">Your referral link</p>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-background p-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Link2 className="h-4 w-4" />
              </span>
              <p className="min-w-0 flex-1 truncate font-mono text-sm font-semibold text-foreground">
                tradeit.global/ref/partner
              </p>
              <button className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground transition hover:bg-muted/70">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-medium text-muted-foreground">Direct Commission</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">15%</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-medium text-muted-foreground">Indirect Commission</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">5%</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-medium text-muted-foreground">Cost to join</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">Free</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="grid h-12 flex-1 place-items-center rounded-lg border border-border bg-background text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
