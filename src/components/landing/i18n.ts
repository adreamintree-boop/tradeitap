import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./i18n-en";
import { ko } from "./i18n-ko";
import { ja } from "./i18n-ja";
import { zh } from "./i18n-zh";
import { ru } from "./i18n-ru";
import { es } from "./i18n-es";
import { vi } from "./i18n-vi";

export type Lang = "en" | "ko" | "ja" | "zh" | "ru" | "es" | "vi";

type Person = { title: string; body: string };
type Feature = { title: string; body: string };
type Card = { title: string; body: string };
type Stat = { value: string; label: string; body: string };
type Story = { role: string; context: string; quote: string };
type Faq = { q: string; a: string };

export type Copy = {
  nav: {
    whyJoin: string;
    whoCanJoin: string;
    rewards: string;
    stories: string;
    faq: string;
  };
  becomeAPartner: string;
  hero: {
    badge: string;
    headBefore: string;
    headHighlight: string;
    headAfter: string;
    subcopy: string;
    seeRewards: string;
    freeToJoin: string;
    commissions: string;
    trustLabel: string;
    trustItems: string[];
    incomeTitle: string;
    incomeMonth: string;
    indirectCommission: string;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: Card[];
  };
  who: {
    eyebrow: string;
    title: string;
    subtitle: string;
    people: Person[];
  };
  promote: {
    eyebrow: string;
    title: string;
    subtitle: string;
    features: Feature[];
  };
  rewards: {
    eyebrow: string;
    title: string;
    subtitle: string;
    directLabel: string;
    directDesc: string;
    indirectLabel: string;
    indirectDesc: string;
    calcTitle: string;
    calcSubtitle: string;
    directCustomers: string;
    partnerCustomers: string;
    monthlyPlanPrice: string;
    directTier: string;
    indirectTier: string;
    recurring: string;
    perMo: string;
    perYr: string;
    totalRecurring: string;
    disclaimer: string;
    diagTitle: string;
    directCommission: string;
    indirectCommission: string;
    directCommissionDesc: string;
    indirectCommissionDesc: string;
    you: string;
    referCustomers: string;
    directCustomersNode: string;
    subscribe: string;
    commission15: string;
    commission5: string;
    recurringMonthly: string;
    inviteAPartner: string;
    invitedPartner: string;
    refersCustomers: string;
    partnersCustomers: string;
    howDirect: string;
    howIndirect: string;
    commission15recurring: string;
    commission5recurring: string;
  };
  stories: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lovedByUsers: string;
    recommendedByPartners: string;
    items: Story[];
  };
  proof: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: Stat[];
    badges: string[];
  };
  cta: {
    title: string;
    subcopy: string;
    badges: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Faq[];
  };
  footer: {
    terms: string;
    privacy: string;
    rights: string;
  };
};

export const translations: Record<Lang, Copy> = {
  en,
  ko,
  ja,
  zh,
  ru,
  es,
  vi,
};

const dict = translations;

type LangContextValue = {
  code: string;
  setCode: (code: string) => void;
  lang: Lang;
  t: Copy;
};

const LangContext = createContext<LangContextValue>({
  code: "en",
  setCode: () => {},
  lang: "en",
  t: dict.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tradeit_lang");
      if (saved) setCode(saved);
    } catch {
      /* storage may be unavailable */
    }
  }, []);
  const value = useMemo<LangContextValue>(() => {
    const lang: Lang =
      code === "ko"
        ? "ko"
        : code === "ja"
          ? "ja"
          : code === "zh"
            ? "zh"
            : code === "ru"
              ? "ru"
              : code === "es"
                ? "es"
                : code === "vi"
                  ? "vi"
                  : "en";
    return { code, setCode, lang, t: dict[lang] };
  }, [code]);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-language", value.lang);
    }
    try {
      localStorage.setItem("tradeit_lang", value.lang);
    } catch {
      /* storage may be unavailable */
    }
  }, [value.lang]);
  return createElement(LangContext.Provider, { value }, children);
}

export function useLang() {
  return useContext(LangContext);
}
