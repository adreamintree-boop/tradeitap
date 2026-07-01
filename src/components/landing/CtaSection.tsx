import { PartnerButton } from "./Logo";
import { useLang } from "./i18n";

export function CtaSection() {
  const { t } = useLang();
  const badges = t.cta.badges;
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem] gradient-cta px-5 py-10 sm:px-12 sm:py-20">
        {/* abstract trade-route network pattern */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 600"
        >
          <defs>
            <radialGradient id="routeGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="oklch(0.6 0.18 250)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.6 0.18 250)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#routeGlow)" />
          <g
            fill="none"
            stroke="oklch(0.55 0.16 240)"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          >
            <path d="M80 480 C 320 220, 520 460, 760 200" />
            <path d="M120 120 C 380 360, 620 140, 1080 380" />
            <path d="M40 300 C 360 300, 700 540, 1140 240" />
            <path d="M200 540 C 480 320, 820 520, 1120 120" />
          </g>
          <g fill="oklch(0.55 0.16 250)">
            {[
              [80, 480],
              [760, 200],
              [120, 120],
              [1080, 380],
              [40, 300],
              [1140, 240],
              [200, 540],
              [1120, 120],
              [520, 460],
              [620, 140],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fillOpacity="0.7" />
            ))}
          </g>
        </svg>

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[26px] font-extrabold leading-[1.2] tracking-tight text-balance text-foreground sm:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 sm:mt-5">
            {t.cta.subcopy}
          </p>
          <div className="mt-5 flex justify-center sm:mt-8">
            <PartnerButton variant="navy" className="w-full sm:w-auto" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 max-w-[320px] mx-auto sm:mt-8 sm:gap-3 sm:max-w-none">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-foreground/10 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
