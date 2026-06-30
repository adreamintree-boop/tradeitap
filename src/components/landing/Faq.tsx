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
    a: "You can earn 15% recurring direct commissions from every customer who subscribes through your referral link. You'll also earn 5% recurring indirect commissions from customers referred by the partners you personally invite into the TradeIt Partner Program. As your customer base and partner network continue to grow, so does your recurring earning potential.",
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
    q: "How are referrals tracked?",
    a: "Every partner receives a unique referral link. Once a customer signs up through your referral link, the referral is permanently attributed to your partner account.",
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
