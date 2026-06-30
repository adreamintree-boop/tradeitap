import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const linkGroups = [
  {
    title: "Program",
    links: ["Why Join", "Who Can Join", "Rewards", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Partner Terms", "Contact"],
  },
];

const socials = [Linkedin, Twitter, Youtube, Facebook];

export function Footer() {
  return (
    <footer className="gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
              Global trade data and AI-powered overseas sales platform. Helping companies discover
              buyers faster — and rewarding the partners who recommend it.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full bg-background/10 text-navy-foreground transition-colors hover:bg-background/20"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-navy-foreground/90">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-foreground/15 pt-8 sm:flex-row">
          <p className="text-sm text-navy-foreground/60">
            © {new Date().getFullYear()} TradeIt. All rights reserved.
          </p>
          <p className="text-sm text-navy-foreground/60">support@tradeit.co.kr</p>
        </div>
      </div>
    </footer>
  );
}
