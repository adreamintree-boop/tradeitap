import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-muted/30 py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Good to know
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
