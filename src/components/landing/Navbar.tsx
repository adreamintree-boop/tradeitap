import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PartnerButton } from "./Logo";
import tradeitLogo from "@/assets/tradeit-logo-low.png.asset.json";

const navLinks = [
  { label: "Why Join", href: "#why-join" },
  { label: "Who Can Join", href: "#who-can-join" },
  { label: "Rewards", href: "#rewards" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_1px_20px_-12px_rgba(0,0,0,0.25)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-[68px]">
          <a href="#" aria-label="TradeIt home" className="flex items-center">
            <img
              src={tradeitLogo.url}
              alt="TradeIt"
              className="h-3.5 w-auto object-contain md:h-4"
            />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center lg:flex">
            <PartnerButton size="md" />
          </div>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/70 text-foreground lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden ${
            menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <PartnerButton
              size="md"
              className="mt-3 w-full"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
