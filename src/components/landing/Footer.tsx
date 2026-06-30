import { Linkedin, Youtube, Facebook } from "lucide-react";
import tradeitLogo from "@/assets/tradeit-logo-low.png.asset.json";

const socials = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl min-h-[140px] flex-col items-center gap-5 px-6 py-12 sm:px-10 md:flex-row md:justify-between md:gap-4">
        <div className="flex items-center gap-4">
          <img src={tradeitLogo.url} alt="TradeIt" className="h-6 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TradeIt. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href="#"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Privacy Policy
          </a>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
