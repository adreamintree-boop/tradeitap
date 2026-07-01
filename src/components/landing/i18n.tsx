import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { zh as zhRaw } from "./i18n-zh";
import { ru as ruRaw } from "./i18n-ru";



export type Lang = "en" | "ko" | "ja" | "zh" | "ru";

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

const en: Copy = {
  nav: {
    whyJoin: "Why Join",
    whoCanJoin: "Who Can Join",
    rewards: "Rewards",
    stories: "Stories",
    faq: "FAQ",
  },
  becomeAPartner: "Become a Partner",
  hero: {
    badge: "Affiliate Partner Program",
    headBefore: "Earn Recurring Revenue by Helping Companies Grow Their ",
    headHighlight: "Global Sales",
    headAfter: "",
    subcopy:
      "TradeIt enables exporters, manufacturers, and overseas sales teams to discover buyers faster with global trade data and AI. Recommend TradeIt and earn recurring commissions every month.",
    seeRewards: "See how rewards work",
    freeToJoin: "Free to join",
    commissions: "15% + 5% commissions",
    trustLabel: "Trusted by professionals across global trade",
    trustItems: [
      "Exporters",
      "Manufacturers",
      "Trading Companies",
      "Sourcing Teams",
      "Procurement Teams",
      "Importers",
    ],
    incomeTitle: "Your affiliate income",
    incomeMonth: "this month",
    indirectCommission: "Indirect Commission",
  },
  why: {
    eyebrow: "Why partner with TradeIt",
    title: "Why Join the TradeIt Affiliate Program?",
    subtitle: "A partnership built for long-term, recurring income — not one-off payouts.",
    cards: [
      {
        title: "Help Companies Grow Globally",
        body: "Introduce businesses to verified buyers using global trade data and AI-powered sales tools.",
      },
      {
        title: "Earn While They Grow",
        body: "Receive recurring commissions every month as your referrals continue using TradeIt.",
      },
      {
        title: "Partner With Us, Not Just Promote Us",
        body: "Get continuous product updates, marketing support and resources to help you grow together.",
      },
    ],
  },
  who: {
    eyebrow: "Open to everyone",
    title: "Who Can Join As A Partner?",
    subtitle: "Anyone with a business network can become a partner.",
    people: [
      { title: "Business Consultants", body: "Recommend TradeIt to companies you advise." },
      { title: "Content Creators", body: "Share tools your audience loves." },
      { title: "Trade Associations", body: "Deliver value to your members." },
      { title: "Social Media & Communities", body: "Guide your community to better tools." },
      { title: "Affiliate Marketers", body: "Promote SaaS and earn recurring income." },
    ],
  },
  promote: {
    eyebrow: "What you promote",
    title: "Promote Solutions Every Business Actually Needs",
    subtitle:
      "Help businesses find verified buyers, enrich company and contact data, and manage global sales — all in one platform.",
    features: [
      {
        title: "B/L Trade Data Search",
        body: "Search billions of bill-of-lading records to find active importers and exporters.",
      },
      {
        title: "Buyer Enrichment",
        body: "Enrich companies with verified decision-maker contacts and firmographics.",
      },
      {
        title: "AI Buyer Analysis",
        body: "Let AI score and prioritize the buyers most likely to convert.",
      },
      {
        title: "CRM",
        body: "Manage every opportunity and pipeline stage in one global workspace.",
      },
      {
        title: "Email Integration",
        body: "Reach decision-makers directly with connected outreach and tracking.",
      },
    ],
  },
  rewards: {
    eyebrow: "Tier 2 partner rewards",
    title: "Grow Your Network. Multiply Your Rewards.",
    subtitle:
      "Earn recurring commissions from both your direct referrals and the partners you introduce. As your network grows, so does your recurring revenue.",
    directLabel: "Direct Commission",
    directDesc: "Refer customers directly and earn recurring monthly commission.",
    indirectLabel: "Indirect Commission",
    indirectDesc: "Invite partners and earn commission when their customers subscribe.",
    calcTitle: "Earnings calculator",
    calcSubtitle: "Adjust the numbers to estimate your recurring earnings.",
    directCustomers: "Direct customers",
    partnerCustomers: "Partner's customers",
    monthlyPlanPrice: "Monthly plan price",
    directTier: "Direct",
    indirectTier: "Indirect",
    recurring: "recurring",
    perMo: "/mo",
    perYr: "/yr",
    totalRecurring: "Total recurring earnings",
    disclaimer:
      "Example earnings are for illustration only. Actual earnings may vary depending on subscription plans, customer retention, and partner status.",
    diagTitle: "How Tier 2 commissions work",
    directCommission: "Direct commission",
    indirectCommission: "Indirect commission",
    directCommissionDesc: "Refer customers directly and earn 15% recurring commission.",
    indirectCommissionDesc:
      "Invite partners. When they bring paying customers, you earn 5% recurring indirect commission.",
    you: "You",
    referCustomers: "Refer customers",
    directCustomersNode: "Direct Customers",
    subscribe: "Subscribe to TradeIt",
    commission15: "15% Commission",
    commission5: "5% Commission",
    recurringMonthly: "Recurring, monthly",
    inviteAPartner: "Invite a partner",
    invitedPartner: "Invited Partner",
    refersCustomers: "Refers customers",
    partnersCustomers: "Partner's Customers",
    howDirect: "How direct commissions work",
    howIndirect: "How indirect commissions work",
    commission15recurring: "15% recurring commission",
    commission5recurring: "5% recurring commission",
  },
  stories: {
    eyebrow: "Trusted on both sides",
    title: "A Platform Businesses Trust. A Program Partners Love.",
    subtitle:
      "When businesses achieve better global sales, partners build recurring income. TradeIt creates value for both sides.",
    lovedByUsers: "Loved by Users",
    recommendedByPartners: "Recommended by Partners",
    items: [
      {
        role: "Export Manager",
        context: "Food Manufacturer",
        quote:
          "Finding verified buyers used to take days. With TradeIt, we can identify qualified prospects in minutes.",
      },
      {
        role: "International Sales Manager",
        context: "Industrial Equipment",
        quote:
          "Buyer Enrichment helped us reach the right decision-makers instead of generic company emails.",
      },
      {
        role: "Business Consultant",
        context: "Independent Advisor",
        quote: "TradeIt is easy to recommend because clients immediately understand the value.",
      },
      {
        role: "Content Creator",
        context: "B2B Growth Channel",
        quote:
          "My audience is always looking for practical global sales tools. TradeIt has become one of the products I recommend most.",
      },
      {
        role: "Sourcing Lead",
        context: "Consumer Goods",
        quote:
          "TradeIt helps us understand who is buying, who is supplying, and where new opportunities are emerging.",
      },
      {
        role: "Overseas Sales Team",
        context: "Manufacturing",
        quote:
          "We can manage buyer discovery, contact enrichment, and outreach in one workflow instead of switching between tools.",
      },
      {
        role: "Affiliate Marketer",
        context: "SaaS Partnership",
        quote:
          "The recurring commission structure makes TradeIt much more attractive than one-time referral programs.",
      },
      {
        role: "Trade Association Manager",
        context: "Member Benefits",
        quote:
          "TradeIt gives our members a practical way to explore global markets with real trade data.",
      },
      {
        role: "Procurement Manager",
        context: "Import Business",
        quote:
          "TradeIt gives us visibility into global suppliers and trade relationships that are difficult to find elsewhere.",
      },
      {
        role: "Community Operator",
        context: "Global Business Community",
        quote:
          "It is a strong fit for communities focused on export, sourcing, and international sales.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof you can stand behind",
    title: "Built on Data. Trusted Worldwide.",
    subtitle:
      "TradeIt combines one of the world's largest trade databases with verified business contacts and AI-powered insights.",
    stats: [
      {
        value: "8B+",
        label: "Trade Records",
        body: "Access one of the world's largest global trade intelligence databases.",
      },
      {
        value: "200+",
        label: "Countries & Regions",
        body: "Explore import and export data from markets around the world.",
      },
      {
        value: "230M+",
        label: "Verified Companies & Contacts",
        body: "Reach decision-makers through a global B2B contact database.",
      },
    ],
    badges: [
      "AI-Powered Buyer Analysis",
      "Global Trade Intelligence",
      "Verified B2B Contacts",
      "CRM & Sales Workflow",
    ],
  },
  cta: {
    title: "Start Monetizing Your Global Network",
    subcopy:
      "Join the TradeIt Partner Program and turn your business connections into recurring monthly revenue.",
    badges: ["15% Direct Commission", "5% Indirect Commission", "Tier 2 Partner Rewards"],
  },
  faq: {
    eyebrow: "Good to know",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Who can become a TradeIt Partner?",
        a: "Anyone with a business network can join—including consultants, content creators, trade associations, communities, agencies, entrepreneurs, and existing TradeIt users.",
      },
      {
        q: "How do I earn commissions?",
        a: "You'll earn recurring commissions whenever a customer subscribes through your referral link and remains an active subscriber.",
      },
      {
        q: "What is the Tier 2 Partner Program?",
        a: "In addition to earning direct commissions from your own referrals, you can recruit other partners and receive indirect commissions from their successful referrals.",
      },
      {
        q: "How much commission can I earn?",
        a: "You can earn 15% recurring direct commissions from every customer who subscribes through your referral link. You'll also earn 5% recurring indirect commissions from customers referred by the partners you personally invite into the TradeIt Partner Program.\u00a0\n\n\nAs your customer base and partner network continue to grow, so does your recurring earning potential.",
      },
      {
        q: "When do I get paid?",
        a: "Commission payouts are processed monthly once your payout request has been approved and the minimum payout threshold has been reached.",
      },
      {
        q: "Which products are eligible for commissions?",
        a: "All paid TradeIt subscription plans are eligible unless otherwise stated.",
      },
      {
        q: "Where can I find my affiliate link?",
        a: "After signing up for the TradeIt Affiliate Partners Program, log in to your TradeIt account.\n\nGo to the “Partners” section from your profile dropdown menu. There, you’ll find your referral URL and partner-related tracking information.\n\nYour referral URL is important because it allows TradeIt to track sign-ups, paid subscriptions, and commissions attributed to your partner account.\n\nPlease make sure to use the referral link exactly as provided, including any tracking parameters. If the link is modified, removed, or shared incorrectly, referrals may not be tracked properly.\n\nIf you have any questions or issues with your referral link, please contact our support team at support@tradeit.co.kr.",
      },
      {
        q: "How are referrals tracked?",
        a: "Every partner receives a unique referral link. Once a customer signs up through your referral link, the referral is permanently attributed to your partner account.",
      },
      {
        q: "What am I not allowed to do as an affiliate?",
        a: "As a TradeIt affiliate partner, you must promote TradeIt in a fair, accurate, and ethical manner. Certain promotional activities are strictly prohibited. Please take note of the following key restrictions:\n\nFraudulent Activities: You are not allowed to engage in fraudulent activities, including but not limited to click fraud, fake sign-ups, self-referrals, cookie stuffing, unauthorized tracking manipulation, or any other activity intended to artificially generate commissions. Misleading or\n\nFalse Claims: You must not misrepresent TradeIt, its services, features, pricing, data coverage, or expected results. Affiliates may not make false claims, guarantee sales outcomes, present unavailable offers, or use deceptive marketing tactics.\n\nUnauthorized Paid Advertising: Paid advertising campaigns using TradeIt-related keywords, brand terms, or misspelled brand terms must receive prior approval from the TradeIt team. Affiliates are not allowed to bid on TradeIt branded keywords, use misleading ad copy, directly link paid ads to TradeIt without approval, or engage in ad hijacking.\n\nRestricted Promotion Channels: You may not promote TradeIt on adult websites, gambling platforms, hate speech websites, violent or illegal content platforms, or any channels that may damage TradeIt’s brand reputation. Promotion through low-quality, deceptive, or unauthorized traffic sources is also prohibited.\n\nSpam and Unauthorized Outreach: Affiliates must not send promotional emails, messages, or campaigns to people who have not given permission to be contacted. Spam, mass unsolicited outreach, and the use of purchased or unauthorized contact lists are strictly prohibited.\n\nUnauthorized Use of TradeIt Brand Assets: You may not use TradeIt’s trademarks, logos, brand name, or similar variations in domain names, social media accounts, community names, paid ads, or misleading promotional materials without prior written approval.\n\nProhibited Incentives or Discount Claims: Affiliates may not advertise unauthorized discounts, coupons, free trials, bonuses, or special offers unless they have been officially approved by TradeIt.\n\n\u00a0Please carefully review and follow the TradeIt Affiliate Partners Program Terms and Conditions to ensure compliance with all program rules and promotional guidelines. Violations may result in rejected commissions, suspension, or termination of your partner account.",
      },
      {
        q: "Is there a cost to join?",
        a: "No. Joining the TradeIt Partner Program is completely free.",
      },
      {
        q: "Can I promote TradeIt worldwide?",
        a: "Yes. TradeIt is built for global businesses, and partners can promote the platform internationally.",
      },
      {
        q: "Can I track my referrals and commissions?",
        a: "Yes. Your Partner Dashboard provides real-time insights into clicks, sign-ups, paid customers, recurring commissions, and payout history.",
      },
      {
        q: "Who can I contact if I need help?",
        a: "Our Partner Success Team is available to help with onboarding, commission questions, and technical support. Please contact support@tradeit.co.kr for further information.",
      },
    ],
  },
  footer: {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    rights: "All rights reserved.",
  },
};

const ko: Copy = {
  nav: {
    whyJoin: "왜 함께해야 할까요?",
    whoCanJoin: "누가 참여할 수 있나요?",
    rewards: "수익 구조",
    stories: "파트너 후기",
    faq: "자주 묻는 질문",
  },
  becomeAPartner: "파트너로 시작하기",
  hero: {
    badge: "트레이드잇 파트너 프로그램",
    headBefore: "기업의 ",
    headHighlight: "글로벌 영업",
    headAfter: " 성장을 돕고, 매월 반복 수익을 만들어보세요",
    subcopy:
      "트레이드잇은 글로벌 무역 데이터와 AI를 활용해 수출기업, 제조사, 해외영업팀이 더 빠르게 바이어를 찾을 수 있도록 돕는 서비스입니다. 트레이드잇을 필요한 기업에 소개하고, 매월 반복 커미션을 받아보세요.",
    seeRewards: "수익 구조 알아보기",
    freeToJoin: "무료로 참여 가능",
    commissions: "15% + 5% 커미션",
    trustLabel: "글로벌 무역 실무자들이 활용하는 플랫폼",
    trustItems: ["수출기업", "제조사", "무역회사", "소싱팀", "구매팀", "수입기업"],
    incomeTitle: "내 파트너 수익",
    incomeMonth: "이번 달",
    indirectCommission: "파트너 추천 커미션",
  },
  why: {
    eyebrow: "왜 트레이드잇과 함께해야 할까요?",
    title: "트레이드잇 파트너 프로그램이 특별한 이유",
    subtitle:
      "한 번의 소개로 끝나는 수익이 아니라, 고객이 계속 사용할수록 함께 쌓이는 반복 수익 구조입니다.",
    cards: [
      {
        title: "기업의 해외영업 성장을 도울 수 있습니다",
        body: "글로벌 무역 데이터와 AI 기반 세일즈 도구를 통해 기업이 검증된 바이어를 더 빠르게 찾을 수 있도록 소개해보세요.",
      },
      {
        title: "고객이 성장할수록 수익도 함께 커집니다",
        body: "소개한 고객이 트레이드잇을 계속 사용하는 동안, 매월 반복 커미션을 받을 수 있습니다.",
      },
      {
        title: "단순 홍보가 아닌, 함께 성장하는 파트너십",
        body: "제품 업데이트, 마케팅 자료, 파트너 지원을 통해 트레이드잇과 함께 성장할 수 있습니다.",
      },
    ],
  },
  who: {
    eyebrow: "누구에게나 열려 있습니다",
    title: "누가 파트너가 될 수 있나요?",
    subtitle: "비즈니스 네트워크가 있다면 누구나 트레이드잇 파트너로 시작할 수 있습니다.",
    people: [
      {
        title: "비즈니스 컨설턴트",
        body: "자문 중인 기업에게 실질적으로 도움이 되는 글로벌 세일즈 솔루션을 소개해보세요.",
      },
      {
        title: "콘텐츠 크리에이터",
        body: "구독자와 팔로워에게 유용한 툴을 소개하고, 반복 수익을 만들어보세요.",
      },
      {
        title: "무역·산업 협회",
        body: "회원사에게 해외영업에 바로 활용할 수 있는 실질적인 솔루션을 제공해보세요.",
      },
      {
        title: "커뮤니티 운영자",
        body: "커뮤니티에 실무적으로 도움이 되는 글로벌 세일즈 인사이트와 도구를 소개해보세요.",
      },
      {
        title: "어필리에이트 마케터",
        body: "수요가 명확한 B2B SaaS를 소개하고, 예측 가능한 수익 흐름을 만들어보세요.",
      },
    ],
  },
  promote: {
    eyebrow: "무엇을 소개하나요?",
    title: "기업이 실제로 필요로 하는 솔루션을 소개하세요",
    subtitle:
      "바이어 발굴부터 기업·담당자 정보 확보, 글로벌 영업 관리까지 하나의 플랫폼에서 해결할 수 있도록 도와주세요.",
    features: [
      {
        title: "B/L 무역 데이터 검색",
        body: "수십억 건의 선하증권 데이터를 기반으로 실제 거래 이력이 있는 수입·수출기업을 찾을 수 있습니다.",
      },
      {
        title: "바이어 정보 강화",
        body: "기업 정보와 의사결정자 연락처를 보강해, 더 정확한 바이어 리스트를 만들 수 있습니다.",
      },
      {
        title: "AI 바이어 분석",
        body: "AI가 바이어와의 적합성을 분석해 우선 공략할 잠재고객을 선별해줍니다.",
      },
      {
        title: "CRM",
        body: "바이어 발굴부터 영업 진행 단계까지 한곳에서 체계적으로 관리할 수 있습니다.",
      },
      {
        title: "이메일 연동",
        body: "담당자에게 직접 이메일을 발송하고, 아웃리치 이력과 반응까지 함께 관리할 수 있습니다.",
      },
    ],
  },
  rewards: {
    eyebrow: "2단계 파트너 수익 구조",
    title: "네트워크가 커질수록 수익 기회도 커집니다",
    subtitle:
      "직접 소개한 고객뿐만 아니라, 내가 초대한 파트너가 만든 고객 성과에서도 추가 커미션을 받을 수 있습니다. 파트너 네트워크가 커질수록 반복 수익 기회도 함께 확장됩니다.",
    directLabel: "직접 추천 커미션",
    directDesc: "고객을 직접 소개하고 매월 반복 커미션을 받을 수 있습니다.",
    indirectLabel: "파트너 추천 커미션",
    indirectDesc: "파트너를 초대하고, 그 파트너가 유치한 고객의 결제에서도 추가 커미션을 받을 수 있습니다.",
    calcTitle: "예상 수익 계산기",
    calcSubtitle: "고객 수와 요금제를 조정해 예상 반복 수익을 확인해보세요.",
    directCustomers: "직접 추천 고객",
    partnerCustomers: "파트너가 유치한 고객",
    monthlyPlanPrice: "월 요금제",
    directTier: "직접 추천",
    indirectTier: "파트너 추천",
    recurring: "반복",
    perMo: "/월",
    perYr: "/년",
    totalRecurring: "총 예상 반복 수익",
    disclaimer:
      "위 금액은 이해를 돕기 위한 예시입니다. 실제 수익은 요금제, 고객 유지 여부, 파트너 상태에 따라 달라질 수 있습니다.",
    diagTitle: "2단계 커미션 구조",
    directCommission: "직접 추천 커미션",
    indirectCommission: "파트너 추천 커미션",
    directCommissionDesc: "고객을 직접 소개하고 매월 15% 반복 커미션을 받을 수 있습니다.",
    indirectCommissionDesc:
      "파트너를 초대하면, 그 파트너가 유치한 유료 고객으로부터 5% 반복 커미션을 받을 수 있습니다.",
    you: "나",
    referCustomers: "고객 추천",
    directCustomersNode: "직접 추천 고객",
    subscribe: "트레이드잇 구독",
    commission15: "15% 커미션",
    commission5: "5% 커미션",
    recurringMonthly: "매월 반복",
    inviteAPartner: "파트너 초대",
    invitedPartner: "초대한 파트너",
    refersCustomers: "고객 추천",
    partnersCustomers: "파트너 고객",
    howDirect: "직접 추천 커미션 구조",
    howIndirect: "파트너 추천 커미션 구조",
    commission15recurring: "15% 반복 커미션",
    commission5recurring: "5% 반복 커미션",
  },
  stories: {
    eyebrow: "고객과 파트너 모두에게 필요한 서비스",
    title: "기업은 신뢰하고, 파트너는 추천하고 싶은 플랫폼",
    subtitle:
      "기업은 더 나은 해외영업 성과를 만들고, 파트너는 반복 수익을 쌓아갑니다. 트레이드잇은 고객과 파트너 모두에게 가치를 만듭니다.",
    lovedByUsers: "고객 사용 후기",
    recommendedByPartners: "파트너 추천 후기",
    items: [
      {
        role: "수출 담당자",
        context: "식품 제조사",
        quote:
          "검증된 바이어를 찾는 데 며칠씩 걸리던 일이 트레이드잇을 통해 몇 분 만에 가능해졌습니다.",
      },
      {
        role: "해외영업 매니저",
        context: "산업장비",
        quote: "일반 대표 이메일이 아니라 실제 의사결정자에게 접근할 수 있다는 점이 가장 유용했습니다.",
      },
      {
        role: "비즈니스 컨설턴트",
        context: "독립 자문가",
        quote: "고객사가 바로 가치를 이해할 수 있는 서비스라 추천하기가 쉽습니다.",
      },
      {
        role: "콘텐츠 크리에이터",
        context: "B2B 성장 채널",
        quote:
          "제 구독자들은 실무에 바로 쓸 수 있는 해외영업 도구를 찾고 있습니다. 트레이드잇은 가장 자주 추천하는 솔루션 중 하나입니다.",
      },
      {
        role: "소싱 담당자",
        context: "소비재",
        quote: "누가 구매하고, 누가 공급하며, 어디에서 새로운 기회가 생기는지 파악하는 데 큰 도움이 됩니다.",
      },
      {
        role: "해외영업팀",
        context: "제조업",
        quote:
          "바이어 발굴부터 연락처 확보, 아웃리치까지 여러 툴을 오가지 않고 하나의 흐름으로 관리할 수 있습니다.",
      },
      {
        role: "어필리에이트 마케터",
        context: "SaaS 파트너십",
        quote: "반복 커미션 구조 덕분에 일회성 추천 프로그램보다 훨씬 매력적입니다.",
      },
      {
        role: "무역협회 담당자",
        context: "회원 혜택",
        quote:
          "실제 무역 데이터를 통해 회원사들이 글로벌 시장을 탐색할 수 있는 실질적인 방법을 제공합니다.",
      },
      {
        role: "구매 담당자",
        context: "수입 비즈니스",
        quote:
          "다른 곳에서는 찾기 어려운 글로벌 공급사와 거래 관계를 한눈에 파악할 수 있습니다.",
      },
      {
        role: "커뮤니티 운영자",
        context: "글로벌 비즈니스 커뮤니티",
        quote: "수출, 소싱, 해외영업에 집중하는 커뮤니티에 특히 잘 맞습니다.",
      },
    ],
  },
  proof: {
    eyebrow: "자신 있게 소개할 수 있는 이유",
    title: "데이터를 기반으로, 전 세계에서 활용되는 플랫폼",
    subtitle:
      "트레이드잇은 방대한 글로벌 무역 데이터, 검증된 B2B 연락처, AI 기반 인사이트를 결합해 해외영업에 필요한 정보를 제공합니다.",
    stats: [
      {
        value: "8B+",
        label: "무역 데이터",
        body: "세계 최대 규모 수준의 글로벌 무역 인텔리전스 데이터를 활용할 수 있습니다.",
      },
      {
        value: "200+",
        label: "국가 및 지역",
        body: "전 세계 주요 시장의 수출입 데이터를 확인할 수 있습니다.",
      },
      {
        value: "230M+",
        label: "검증된 기업·담당자 데이터",
        body: "글로벌 B2B 연락처 데이터를 통해 실제 의사결정자에게 접근할 수 있습니다.",
      },
    ],
    badges: ["AI 바이어 분석", "글로벌 무역 인텔리전스", "검증된 B2B 연락처", "CRM 및 세일즈 관리"],
  },
  cta: {
    title: "글로벌 네트워크를 수익으로 연결해보세요",
    subcopy:
      "트레이드잇 파트너 프로그램에 참여하고, 기업의 글로벌 성장을 돕는 동시에 반복 커미션을 받아보세요.",
    badges: ["직접 추천 15%", "파트너 추천 5%", "2단계 파트너 수익"],
  },
  faq: {
    eyebrow: "궁금한 점이 있나요?",
    title: "자주 묻는 질문",
    items: [
      {
        q: "누가 트레이드잇 파트너가 될 수 있나요?",
        a: "비즈니스 네트워크를 가진 분이라면 누구나 참여할 수 있습니다. 컨설턴트, 콘텐츠 크리에이터, 무역·산업 협회, 커뮤니티, 에이전시, 창업가, 그리고 기존 트레이드잇 사용자까지 모두 환영합니다.",
      },
      {
        q: "커미션은 어떻게 발생하나요?",
        a: "고객이 회원님의 추천 링크를 통해 구독을 시작하고 계속 이용하는 동안, 매월 반복 커미션이 발생합니다.",
      },
      {
        q: "2단계 파트너 구조는 무엇인가요?",
        a: "직접 추천한 고객에게서 커미션을 받는 것뿐만 아니라, 다른 파트너를 초대하고 그 파트너의 추천 성과에서도 추가(파트너 추천) 커미션을 받을 수 있는 구조입니다.",
      },
      {
        q: "커미션은 얼마나 받을 수 있나요?",
        a: "추천 링크를 통해 구독한 모든 고객에게서 15% 반복 커미션을 받을 수 있습니다. 또한 회원님이 직접 초대한 파트너가 유치한 고객으로부터 5% 반복 커미션도 받을 수 있습니다.\u00a0\n\n\n고객과 파트너 네트워크가 늘어날수록 반복 수익 기회도 함께 커집니다.",
      },
      {
        q: "정산은 언제 받을 수 있나요?",
        a: "커미션은 정산 요청이 승인되고 최소 정산 기준 금액에 도달하면 매월 지급됩니다.",
      },
      {
        q: "어떤 상품이 커미션 대상인가요?",
        a: "별도의 안내가 없는 한, 모든 유료 트레이드잇 구독 요금제가 커미션 대상입니다.",
      },
      {
        q: "내 추천 링크는 어디에서 확인하나요?",
        a: "트레이드잇 파트너 프로그램에 가입한 후 트레이드잇 계정에 로그인하세요.\n\n프로필 드롭다운 메뉴에서 ‘파트너(Partners)’ 섹션으로 이동하면 추천 링크(URL)와 파트너 관련 추적 정보를 확인할 수 있습니다.\n\n추천 링크는 가입, 유료 구독, 커미션이 회원님의 파트너 계정에 정확히 연결되도록 해주는 중요한 정보입니다.\n\n추적 파라미터를 포함해 제공된 형태 그대로 링크를 사용해 주세요. 링크가 변경되거나 삭제되거나 잘못 공유되면 추천이 정상적으로 추적되지 않을 수 있습니다.\n\n추천 링크에 대해 궁금한 점이나 문제가 있으면 support@tradeit.co.kr 로 문의해 주세요.",
      },
      {
        q: "추천 가입은 어떻게 추적되나요?",
        a: "모든 파트너는 고유한 추천 링크를 받습니다. 고객이 회원님의 추천 링크를 통해 가입하면 해당 추천은 회원님의 파트너 계정에 영구적으로 연결됩니다.",
      },
      {
        q: "파트너 활동 시 주의할 점은 무엇인가요?",
        a: "트레이드잇 파트너는 공정하고 정확하며 윤리적인 방식으로 트레이드잇을 홍보해야 합니다. 다음과 같은 활동은 엄격히 금지되니 주요 제한 사항을 확인해 주세요:\n\n부정 행위: 클릭 조작, 허위 가입, 자기 추천, 쿠키 스터핑, 무단 추적 조작 등 커미션을 인위적으로 발생시키려는 모든 행위는 허용되지 않습니다.\n\n허위·과장 정보: 트레이드잇의 서비스, 기능, 가격, 데이터 범위, 기대 성과 등을 사실과 다르게 소개해서는 안 됩니다. 성과를 보장하거나, 제공되지 않는 혜택을 안내하거나, 기만적인 마케팅을 사용할 수 없습니다.\n\n무단 유료 광고: 트레이드잇 관련 키워드, 브랜드명, 오타 브랜드명을 활용한 유료 광고는 사전에 트레이드잇 팀의 승인을 받아야 합니다. 브랜드 키워드 입찰, 오해를 유발하는 광고 문구, 승인 없는 직접 연결 광고, 광고 하이재킹은 금지됩니다.\n\n제한된 홍보 채널: 성인, 도박, 혐오, 폭력·불법 콘텐츠 사이트 등 트레이드잇 브랜드 이미지를 훼손할 수 있는 채널에서는 홍보할 수 없습니다. 저품질·기만적·무단 트래픽을 통한 홍보도 금지됩니다.\n\n스팸 및 무단 아웃리치: 수신 동의를 받지 않은 대상에게 홍보 이메일이나 메시지를 보내는 행위, 스팸, 대량 무단 발송, 구매하거나 무단으로 확보한 연락처 목록 사용은 엄격히 금지됩니다.\n\n브랜드 자산 무단 사용: 사전 서면 승인 없이 트레이드잇의 상표, 로고, 브랜드명 또는 유사 변형을 도메인, SNS 계정, 커뮤니티명, 유료 광고, 오해를 유발하는 홍보물에 사용할 수 없습니다.\n\n무단 혜택·할인 안내: 트레이드잇이 공식적으로 승인하지 않은 할인, 쿠폰, 무료 체험, 보너스, 특별 혜택을 광고할 수 없습니다.\n\n\u00a0모든 프로그램 규정과 홍보 가이드라인을 준수할 수 있도록 트레이드잇 파트너 프로그램 이용약관을 반드시 확인하고 따라주세요. 위반 시 커미션 지급 거절, 계정 정지 또는 파트너 자격 해지가 발생할 수 있습니다.",
      },
      {
        q: "참여 비용이 있나요?",
        a: "아니요. 트레이드잇 파트너 프로그램 참여는 완전히 무료입니다.",
      },
      {
        q: "해외에서도 홍보할 수 있나요?",
        a: "네. 트레이드잇은 글로벌 비즈니스를 위해 만들어졌으며, 파트너는 전 세계에서 플랫폼을 홍보할 수 있습니다.",
      },
      {
        q: "추천 현황과 커미션을 확인할 수 있나요?",
        a: "네. 파트너 대시보드에서 클릭, 가입, 유료 고객, 반복 커미션, 정산 내역을 실시간으로 확인할 수 있습니다.",
      },
      {
        q: "도움이 필요하면 어디로 문의하면 되나요?",
        a: "파트너 성공팀이 온보딩, 커미션 관련 문의, 기술 지원을 도와드립니다. 자세한 내용은 support@tradeit.co.kr 로 문의해 주세요.",
      },
    ],
  },
  footer: {
    terms: "이용약관",
    privacy: "개인정보처리방침",
    rights: "All rights reserved.",
  },
};

const ja: Copy = {
  nav: {
    whyJoin: "選ばれる理由",
    whoCanJoin: "参加できる方",
    rewards: "報酬の仕組み",
    stories: "パートナーの声",
    faq: "よくある質問",
  },
  becomeAPartner: "パートナーとして始める",
  hero: {
    badge: "TradeIt パートナープログラム",
    headBefore: "企業の海外営業を支援しながら、",
    headHighlight: "継続的な収益",
    headAfter: "をつくりませんか",
    subcopy:
      "TradeItは、グローバル貿易データとAIを活用し、輸出企業・メーカー・海外営業チームがより早く見込みバイヤーを見つけられるよう支援するプラットフォームです。TradeItを必要とする企業に紹介し、毎月の継続コミッションを受け取ることができます。",
    seeRewards: "報酬の仕組みを見る",
    freeToJoin: "無料で参加可能",
    commissions: "15% + 5% コミッション",
    trustLabel: "グローバル貿易に関わる実務者に活用されています",
    trustItems: [
      "輸出企業",
      "メーカー",
      "商社・貿易会社",
      "調達・ソーシングチーム",
      "購買チーム",
      "輸入企業",
    ],
    incomeTitle: "あなたのパートナー収益",
    incomeMonth: "今月",
    indirectCommission: "パートナー紹介コミッション",
  },
  why: {
    eyebrow: "TradeItとパートナーになる理由",
    title: "TradeItパートナープログラムが選ばれる理由",
    subtitle:
      "一度きりの紹介料ではなく、顧客が使い続けるほど積み上がる継続型の報酬モデルです。",
    cards: [
      {
        title: "企業の海外営業を後押しできます",
        body: "グローバル貿易データとAI営業ツールを通じて、企業が信頼できるバイヤーをより早く見つけられるよう紹介できます。",
      },
      {
        title: "顧客の成長が、あなたの収益にもつながります",
        body: "紹介した顧客がTradeItを継続利用している間、毎月コミッションを受け取ることができます。",
      },
      {
        title: "単なる紹介ではなく、共に成長するパートナーシップ",
        body: "製品アップデートやマーケティング資料、パートナー向けサポートを活用しながら、TradeItとともに成長できます。",
      },
    ],
  },
  who: {
    eyebrow: "どなたでも参加できます",
    title: "どんな方がパートナーになれますか？",
    subtitle: "ビジネスネットワークをお持ちの方であれば、どなたでもTradeItパートナーとして始められます。",
    people: [
      {
        title: "ビジネスコンサルタント",
        body: "支援先企業に、実務で役立つ海外営業ソリューションとしてTradeItを紹介できます。",
      },
      {
        title: "コンテンツクリエイター",
        body: "フォロワーや読者に役立つツールを紹介しながら、継続的な収益につなげられます。",
      },
      {
        title: "貿易・業界団体",
        body: "会員企業に、海外営業にすぐ活用できる実用的なソリューションを提供できます。",
      },
      {
        title: "コミュニティ運営者",
        body: "コミュニティに、ビジネス成長につながる海外営業のインサイトとツールを届けられます。",
      },
      {
        title: "アフィリエイトマーケター",
        body: "ニーズの明確なB2B SaaSを紹介し、安定した収益の流れをつくることができます。",
      },
    ],
  },
  promote: {
    eyebrow: "紹介できるソリューション",
    title: "企業が本当に必要としているソリューションを紹介できます",
    subtitle:
      "バイヤー発掘から企業・担当者情報の取得、海外営業管理まで、ひとつのプラットフォームで完結できる環境を企業に届けられます。",
    features: [
      {
        title: "B/L貿易データ検索",
        body: "数十億件の船荷証券データをもとに、実際に取引履歴のある輸入・輸出企業を見つけられます。",
      },
      {
        title: "バイヤー情報の強化",
        body: "企業情報や意思決定者の連絡先を補完し、より精度の高いバイヤーリストを作成できます。",
      },
      {
        title: "AIバイヤー分析",
        body: "AIがバイヤーとの相性を分析し、優先的にアプローチすべき見込み顧客を見つけます。",
      },
      {
        title: "CRM",
        body: "バイヤー発掘から営業進捗まで、ひとつのワークスペースで効率よく管理できます。",
      },
      {
        title: "メール連携",
        body: "担当者へ直接メールを送り、アプローチ履歴や反応までまとめて管理できます。",
      },
    ],
  },
  rewards: {
    eyebrow: "2段階パートナー報酬",
    title: "ネットワークが広がるほど、報酬のチャンスも広がります",
    subtitle:
      "直接紹介した顧客だけでなく、あなたが招待したパートナーが獲得した顧客からも追加コミッションを受け取れます。パートナーネットワークが広がるほど、継続収益の可能性も広がります。",
    directLabel: "直接紹介コミッション",
    directDesc: "顧客を直接紹介し、毎月の継続コミッションを受け取れます。",
    indirectLabel: "パートナー紹介コミッション",
    indirectDesc: "パートナーを招待し、そのパートナーが獲得した顧客の契約から追加コミッションを受け取れます。",
    calcTitle: "収益シミュレーター",
    calcSubtitle: "顧客数とプラン金額を調整して、想定される継続収益を確認できます。",
    directCustomers: "直接紹介した顧客",
    partnerCustomers: "パートナーが獲得した顧客",
    monthlyPlanPrice: "月額プラン",
    directTier: "直接紹介",
    indirectTier: "パートナー紹介",
    recurring: "継続",
    perMo: "/月",
    perYr: "/年",
    totalRecurring: "想定される継続収益の合計",
    disclaimer:
      "表示される金額は参考例です。実際の収益は、契約プラン、顧客の継続状況、パートナー条件によって変動する場合があります。",
    diagTitle: "2段階コミッションの仕組み",
    directCommission: "直接紹介コミッション",
    indirectCommission: "パートナー紹介コミッション",
    directCommissionDesc: "顧客を直接紹介し、毎月15%の継続コミッションを受け取れます。",
    indirectCommissionDesc:
      "パートナーを招待すると、そのパートナーが獲得した有料顧客から5%の継続コミッションを受け取れます。",
    you: "あなた",
    referCustomers: "顧客を紹介",
    directCustomersNode: "直接紹介した顧客",
    subscribe: "TradeItを契約",
    commission15: "15% コミッション",
    commission5: "5% コミッション",
    recurringMonthly: "毎月継続",
    inviteAPartner: "パートナーを招待",
    invitedPartner: "招待したパートナー",
    refersCustomers: "顧客を紹介",
    partnersCustomers: "パートナーが獲得した顧客",
    howDirect: "直接紹介コミッションの仕組み",
    howIndirect: "パートナー紹介コミッションの仕組み",
    commission15recurring: "15% 継続コミッション",
    commission5recurring: "5% 継続コミッション",
  },
  stories: {
    eyebrow: "顧客にもパートナーにも選ばれる理由",
    title: "企業が信頼し、パートナーが紹介したくなるプラットフォーム",
    subtitle:
      "企業はより良い海外営業の成果を生み出し、パートナーは継続的な収益を積み上げられます。TradeItは、双方に価値を生み出す仕組みです。",
    lovedByUsers: "ユーザーの声",
    recommendedByPartners: "パートナーの声",
    items: [
      {
        role: "輸出担当者",
        context: "食品メーカー",
        quote:
          "以前は信頼できるバイヤーを見つけるのに何日もかかっていましたが、TradeItなら数分で有望な候補を見つけられます。",
      },
      {
        role: "海外営業マネージャー",
        context: "産業機器",
        quote: "代表メールではなく、実際の意思決定者にアプローチできる点がとても役立っています。",
      },
      {
        role: "ビジネスコンサルタント",
        context: "独立アドバイザー",
        quote: "クライアントが価値をすぐに理解してくれるので、TradeItは紹介しやすいサービスです。",
      },
      {
        role: "コンテンツクリエイター",
        context: "B2B成長支援チャンネル",
        quote:
          "私の読者は、実務で使える海外営業ツールを探しています。TradeItは、その中でも特に紹介しやすいサービスのひとつです。",
      },
      {
        role: "ソーシング担当者",
        context: "消費財",
        quote:
          "誰が買っていて、誰が供給していて、どこに新しい商機があるのかを把握するのに役立っています。",
      },
      {
        role: "海外営業チーム",
        context: "製造業",
        quote:
          "バイヤー発掘、連絡先の強化、アプローチまでを、複数のツールを行き来せずにひとつの流れで管理できます。",
      },
      {
        role: "アフィリエイトマーケター",
        context: "SaaSパートナーシップ",
        quote: "継続コミッション型なので、一度きりの紹介プログラムよりもずっと魅力的です。",
      },
      {
        role: "貿易協会担当者",
        context: "会員向けサービス",
        quote:
          "実際の貿易データを活用し、会員企業がグローバル市場を開拓できる実用的な手段を提供できます。",
      },
      {
        role: "購買マネージャー",
        context: "輸入ビジネス",
        quote:
          "他ではなかなか見えにくいグローバルなサプライヤーや取引関係を、まとめて把握できます。",
      },
      {
        role: "コミュニティ運営者",
        context: "グローバルビジネスコミュニティ",
        quote: "輸出・ソーシング・海外営業に注力するコミュニティに特によくマッチします。",
      },
    ],
  },
  proof: {
    eyebrow: "自信を持って紹介できる理由",
    title: "データをもとに、世界中で活用されています",
    subtitle:
      "TradeItは、膨大なグローバル貿易データ、信頼できるB2B連絡先、AIによるインサイトを組み合わせ、海外営業に必要な情報を提供します。",
    stats: [
      {
        value: "8B+",
        label: "件の貿易データ",
        body: "世界最大級のグローバル貿易インテリジェンスデータを活用できます。",
      },
      {
        value: "200+",
        label: "の国・地域",
        body: "世界中の主要市場における輸出入データを確認できます。",
      },
      {
        value: "230M+",
        label: "件の企業・担当者データ",
        body: "グローバルB2B連絡先データを通じて、実際の意思決定者にアプローチできます。",
      },
    ],
    badges: [
      "AIバイヤー分析",
      "グローバル貿易インテリジェンス",
      "確認済みB2B連絡先",
      "CRM・営業管理",
    ],
  },
  cta: {
    title: "あなたのグローバルネットワークを収益につなげましょう",
    subcopy:
      "TradeItパートナープログラムに参加し、企業の海外展開を支援しながら継続コミッションを受け取りましょう。",
    badges: ["直接紹介 15%", "パートナー紹介 5%", "無料で参加可能"],
  },
  faq: {
    eyebrow: "気になることはありますか？",
    title: "よくある質問",
    items: [
      {
        q: "どのような人がTradeItパートナーになれますか？",
        a: "ビジネスネットワークをお持ちの方であれば、どなたでも参加できます。コンサルタント、コンテンツクリエイター、貿易・業界団体、コミュニティ運営者、代理店、起業家、そして既存のTradeItユーザーまで、幅広く歓迎しています。",
      },
      {
        q: "コミッションはどのように発生しますか？",
        a: "紹介リンク経由で顧客が契約し、その後も継続して利用している間、毎月コミッションが発生します。",
      },
      {
        q: "2段階パートナー制度とは何ですか？",
        a: "自分が直接紹介した顧客からコミッションを得られるだけでなく、他のパートナーを招待し、そのパートナーの成果に応じて追加コミッションを受け取ることができる仕組みです。",
      },
      {
        q: "どれくらいのコミッションを受け取れますか？",
        a: "紹介リンク経由で契約したすべての顧客から、15%の継続コミッションを受け取れます。さらに、あなたが直接招待したパートナーが獲得した顧客からも、5%の継続コミッションを受け取れます。\u00a0\n\n\n顧客とパートナーネットワークが広がるほど、継続的な収益の可能性も高まります。",
      },
      {
        q: "報酬はいつ支払われますか？",
        a: "コミッションは、支払いリクエストが承認され、最低支払い金額に達すると、毎月お支払いされます。",
      },
      {
        q: "どの商品がコミッション対象ですか？",
        a: "特に記載がない限り、TradeItのすべての有料プランがコミッション対象となります。",
      },
      {
        q: "自分の紹介リンクはどこで確認できますか？",
        a: "TradeItパートナープログラムに登録後、TradeItアカウントにログインしてください。\n\nプロフィールのドロップダウンメニューから「Partners」セクションを開くと、紹介リンク（URL）とパートナー関連のトラッキング情報を確認できます。\n\n紹介リンクは、登録・有料契約・コミッションをあなたのパートナーアカウントに正しく紐づけるための重要な情報です。\n\nトラッキングパラメータを含め、提供された形のまま紹介リンクをご利用ください。リンクが変更・削除されたり、正しく共有されなかった場合、紹介が正しく計測されないことがあります。\n\n紹介リンクについてご不明な点や問題がある場合は、support@tradeit.co.kr までお問い合わせください。",
      },
      {
        q: "紹介はどのように計測されますか？",
        a: "すべてのパートナーには固有の紹介リンクが発行されます。顧客がその紹介リンク経由で登録すると、その紹介は永続的にあなたのパートナーアカウントに紐づけられます。",
      },
      {
        q: "パートナー活動で注意すべきことは何ですか？",
        a: "TradeItパートナーとして、公正かつ正確で倫理的な方法でTradeItを紹介していただく必要があります。以下の行為は固く禁止されていますので、主な制限事項をご確認ください。\n\n不正行為: クリック詐欺、虚偽の登録、自己紹介、クッキースタッフィング、不正なトラッキング操作など、コミッションを人為的に発生させる行為は一切禁止されています。\n\n虚偽・誇大な表現: TradeItのサービス、機能、価格、データ範囲、期待される成果などを事実と異なる形で紹介してはいけません。成果を保証したり、提供されていない特典を案内したり、誤解を招くマーケティングを行うことはできません。\n\n無許可の有料広告: TradeItに関連するキーワード、ブランド名、そのスペルミスを利用した有料広告は、事前にTradeItチームの承認が必要です。ブランドキーワードへの入札、誤解を招く広告文、承認のない直接リンク広告、広告ハイジャックは禁止されています。\n\n制限された宣伝チャネル: アダルト、ギャンブル、ヘイト、暴力・違法コンテンツを含むサイトなど、TradeItのブランドイメージを損なう可能性のあるチャネルでの宣伝はできません。低品質・欺瞞的・無許可のトラフィックを通じた宣伝も禁止です。\n\nスパム・無許可のアウトリーチ: 連絡の同意を得ていない相手への宣伝メールやメッセージの送信、スパム、大量の無許可送信、購入または無許可で入手した連絡先リストの使用は固く禁止されています。\n\nブランド資産の無断使用: 事前の書面による承認なく、TradeItの商標、ロゴ、ブランド名、またはその類似表現を、ドメイン名、SNSアカウント、コミュニティ名、有料広告、誤解を招く宣伝物に使用することはできません。\n\n無許可の特典・割引の案内: TradeItが公式に承認していない割引、クーポン、無料トライアル、ボーナス、特別オファーを宣伝することはできません。\n\n\u00a0すべてのプログラム規約と宣伝ガイドラインを遵守できるよう、TradeItパートナープログラムの利用規約を必ずご確認ください。違反した場合、コミッションの支払い拒否、アカウントの停止、またはパートナー資格の取り消しとなる場合があります。",
      },
      {
        q: "参加費はかかりますか？",
        a: "いいえ。TradeItパートナープログラムへの参加は完全に無料です。",
      },
      {
        q: "海外でもTradeItを紹介できますか？",
        a: "はい。TradeItはグローバルなビジネスのために作られており、パートナーは世界中でプラットフォームを紹介できます。",
      },
      {
        q: "紹介状況やコミッションを確認できますか？",
        a: "はい。パートナーダッシュボードで、クリック数、登録、有料顧客、継続コミッション、支払い履歴をリアルタイムに確認できます。",
      },
      {
        q: "困ったときはどこに問い合わせればよいですか？",
        a: "パートナーサクセスチームが、オンボーディング、コミッションに関するご質問、技術サポートをお手伝いします。詳しくは support@tradeit.co.kr までお問い合わせください。",
      },
    ],
  },
  footer: {
    terms: "利用規約",
    privacy: "プライバシーポリシー",
    rights: "All rights reserved.",
  },
};

const zh: Copy = zhRaw;
const ru: Copy = ruRaw;

const dict: Record<Lang, Copy> = { en, ko, ja, zh, ru };

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
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState("en");
  const value = useMemo<LangContextValue>(() => {
    const lang: Lang = code === "ko" ? "ko" : code === "ja" ? "ja" : code === "zh" ? "zh" : code === "ru" ? "ru" : "en";
    return { code, setCode, lang, t: dict[lang] };
  }, [code]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
