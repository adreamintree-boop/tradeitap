import { useEffect, useState } from "react";
import { PartnerButton } from "./Logo";
import tradeitLogo from "@/assets/tradeit-logo.png.asset.json";

const navLinks = [
  { label: "Why Join", href: "#why-join" },
  { label: "Who Can Join", href: "#who-can-join" },
  { label: "Rewards", href: "#rewards" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" aria-label="TradeIt home" className="flex items-center">
            <img
              src={tradeitLogo.url}
              alt="TradeIt"
              className="h-6 w-auto sm:h-7"
              width={1920}
              height={1080}
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
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Sign in
            </a>
            <PartnerButton size="md" />
          </div>
        </div>
      </div>
    </header>
  );
}
