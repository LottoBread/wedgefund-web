import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Wedgefund charges one flat monthly or annual fee per club — never a percentage of dues. See illustrative pricing and exactly what's included.",
};

const included = [
  "Unlimited members on your roster",
  "Invite-by-link signup, no manual approvals needed",
  "Dues & treasury, paid directly into your club's Stripe account",
  "Outing scheduling with RSVPs and spot caps",
  "Admin-proposed tournaments with member voting",
  "Casual round & scorecard tracking",
  "Club-wide leaderboard",
  "Email support",
];

const faqs = [
  {
    q: "Do you take a percentage of our dues?",
    a: "No. Wedgefund does not take a cut, a percentage, or any per-transaction fee from dues your club collects. Your club pays one flat subscription fee for the software. That's the whole business model.",
  },
  {
    q: "Are there any other fees on top of the subscription?",
    a: "Yes, one: Stripe's own standard card processing fee on each dues payment (commonly around 2.9% + $0.30 per transaction, set entirely by Stripe, not Wedgefund). That fee is charged by Stripe for moving the money and is deducted before the rest settles into your club's connected bank account — the same as it would be for any online card payment anywhere. Wedgefund never sees or touches that money.",
  },
  {
    q: "What happens if we stop paying the subscription?",
    a: "Your club keeps its Stripe account, its bank connection, and its money — that's Stripe's relationship with your club, not ours. You'd lose access to the Wedgefund app itself: the roster, scheduling, voting, and leaderboard tools.",
  },
  {
    q: "Is this pricing final?",
    a: "No — it's illustrative. Wedgefund is a new product and pricing may change as we learn what clubs actually need. We'll give existing clubs notice before any price change takes effect on their next billing cycle.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Reach out on the Contact page — we're happy to talk through options for a new club getting started.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="One flat fee per club. Never a cut of your dues."
        description="Wedgefund charges your club a simple subscription for the software. Every dollar of dues your members pay goes straight into your club's own bank account — we don't touch it."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Monthly */}
            <div className="rounded-2xl border border-surface-border bg-surface-raised p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-content-faint">
                Monthly
              </h2>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-content">$6</span>
                <span className="text-sm text-content-muted">/ month per club</span>
              </p>
              <p className="mt-2 text-sm text-content-muted">
                Billed monthly. Cancel anytime.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-surface-border px-5 py-2.5 text-sm font-semibold text-content transition-colors hover:bg-surface-hover"
              >
                Ask about getting started
              </Link>
            </div>

            {/* Annual */}
            <div className="relative rounded-2xl border border-brand/50 bg-surface-elevated p-8 shadow-lg shadow-black/30">
              <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-surface">
                Save ~18%
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-content-faint">
                Annual
              </h2>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-content">$59</span>
                <span className="text-sm text-content-muted">/ year per club</span>
              </p>
              <p className="mt-2 text-sm text-content-muted">
                Billed once a year. Works out to about $4.92/month.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-brand-pressed"
              >
                Ask about getting started
              </Link>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-content-faint">
            Pricing shown above is illustrative and subject to change — Wedgefund is a new
            product and these are our current planning numbers, not a locked-in rate card.
            One subscription covers your whole club, regardless of member count.
          </p>

          {/* No per-transaction cut banner */}
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-success/30 bg-success-bg px-6 py-5">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-success-text" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3 4 6.5v5.2c0 4.9 3.4 8.9 8 10.3 4.6-1.4 8-5.4 8-10.3V6.5L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m9 12 2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm leading-relaxed text-success-text">
              <strong className="font-semibold">Zero percent of dues, always.</strong> Wedgefund&apos;s
              revenue comes entirely from the subscription fee above. We never take a
              percentage, a transaction fee, or any cut of the money your members pay into
              your club&apos;s treasury.
            </p>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="border-t border-surface-border bg-surface-raised py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">
            What&apos;s included, at every club size
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-brand-bright" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12.5 10 17l9-10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm leading-relaxed text-content-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">
            Pricing questions
          </h2>
          <div className="mt-8 divide-y divide-surface-border border-t border-surface-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-base font-semibold text-content">{faq.q}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-content-muted">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
