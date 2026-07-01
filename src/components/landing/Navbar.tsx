import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { PartnerButton } from "./Logo";
import { useLang } from "./i18n";
import tradeitLogo from "@/assets/tradeit-logo-low.png.asset.json";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
];

function LanguageDropdown({
  selected,
  onSelect,
  variant = "desktop",
}: {
  selected: string;
  onSelect: (code: string) => void;
  variant?: "desktop" | "mobile";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((l) => l.code === selected) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (variant === "mobile") {
    return (
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
        >
          <span className="flex items-center gap-2.5">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-lg leading-none">{selectedLang.flag}</span>
            <span>{selectedLang.label}</span>
          </span>
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="mt-1 rounded-xl border border-border bg-popover p-1.5 shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  onSelect(lang.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                  selected === lang.code
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span className="text-lg leading-none">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
      >
        <span className="text-base leading-none">{selectedLang.flag}</span>
        <span className="hidden sm:inline">{selectedLang.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-border bg-popover p-1.5 shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                onSelect(lang.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                selected === lang.code
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const { code, setCode, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.whyJoin, href: "#why-join" },
    { label: t.nav.whoCanJoin, href: "#who-can-join" },
    { label: t.nav.rewards, href: "#rewards" },
    { label: t.nav.stories, href: "#stories" },
    { label: t.nav.faq, href: "#faq" },
  ];

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
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageDropdown selected={selectedLang} onSelect={setSelectedLang} />
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
            menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
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
            <div className="mt-1 border-t border-border/60 pt-2">
              <LanguageDropdown
                selected={selectedLang}
                onSelect={setSelectedLang}
                variant="mobile"
              />
            </div>
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
