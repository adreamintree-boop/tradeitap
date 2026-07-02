import { Linkedin, Youtube, Facebook } from "lucide-react";
import tradeitLogo from "@/assets/tradeit-logo-low.png.asset.json";
import { useLang } from "./i18n";

const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/tradeitnow/" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/people/Trade-it/100072312823472/#" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Trade.It.2026" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 sm:px-10 md:min-h-[140px] md:flex-row md:justify-between md:gap-4 md:py-12">
        {/* Mobile: first row (links + socials). Desktop: right side. */}
        <div className="order-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:order-2 md:gap-x-6 md:gap-y-3">
          <a
            href="#"
            className="text-[13px] font-medium text-foreground transition-colors hover:text-primary md:text-sm"
          >
            {t.footer.terms}
          </a>
          <a
            href="#"
            className="text-[13px] font-medium text-foreground transition-colors hover:text-primary md:text-sm"
          >
            {t.footer.privacy}
          </a>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: second row (logo + copyright). Desktop: left side. */}
        <div className="order-2 flex items-center gap-2 md:order-1 md:gap-4">
          <img
            src={tradeitLogo.url}
            alt="TradeIt"
            className="h-auto w-[100px] md:h-6 md:w-auto"
          />
          <p className="whitespace-nowrap text-xs text-muted-foreground md:text-sm">
            © {new Date().getFullYear()} TradeIt. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
