import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Security & How Money Moves",
  description:
    "How Wedgefund uses Stripe Connect so each club's dues go directly into that club's own bank account. Plain-language explanation of Express accounts, direct charges, payouts, and card data handling.",
};

const steps = [
  {
    n: "1",
    title: "Your club creates its own Stripe Express account",
    body: "When a club sets up dues collection, we hand off to Stripe's own hosted onboarding flow. Your club's treasurer or admin enters their bank details, business or individual information, and identity verification (KYC) directly into Stripe's UI — not ours. That data goes straight to Stripe. Wedgefund's servers never see bank account numbers, government ID, or identity documents.",
  },
  {
    n: "2",
    title: "Members pay dues with a card, on a Stripe-hosted checkout",
    body: "When a member pays dues, the card entry happens on Stripe-hosted checkout or Stripe Elements — a form served and secured by Stripe, embedded in the app but never touching our servers. Wedgefund never receives, transmits, or stores full card numbers.",
  },
  {
    n: "3",
    title: "The charge is a direct charge into your club's account",
    body: "The payment is created as a direct charge on your club's own connected Stripe account, not on a Wedgefund account. That means the money legally and technically belongs to your club from the moment the charge succeeds. It never pools with other clubs' money, and it never sits in an account Wedgefund controls.",
  },
  {
    n: "4",
    title: "Stripe pays your club's bank on Stripe's own schedule",
    body: "Payouts from the connected account to your club's bank happen automatically on Stripe's standard payout schedule for your account (commonly a rolling daily or weekly schedule, depending on the account's history and country). Wedgefund does not initiate, hold, delay, or approve payouts — that relationship is between your club and Stripe.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Security & payments"
        title="How money actually moves through Wedgefund"
        description="Short version: it doesn't move through Wedgefund. Every club's dues flow through that club's own Stripe Express account, straight to that club's own bank. Here's the plain-language explanation of how, and what that means for the data involved."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">
              How the money flows
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-sm font-bold text-brand-bright">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-content">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-content-muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-surface-border bg-surface-raised py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">
              Card data & PCI compliance
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-content-muted">
              Because card entry happens entirely on Stripe-hosted pages and Stripe
              Elements, Wedgefund never receives, processes, or stores primary account
              numbers, CVV codes, or magnetic-stripe data. That keeps our own PCI DSS
              compliance burden to the simplest applicable level (a self-assessment
              questionnaire for merchants who fully outsource card handling to a
              certified processor) rather than the far heavier requirements that apply
              to businesses that touch raw card data directly. Stripe carries that
              certification so individual clubs and their treasurers don&apos;t have to.
            </p>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-content sm:text-3xl">
              What Wedgefund can and can&apos;t see
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-surface-border bg-surface p-6">
                <h3 className="text-sm font-semibold text-content">Wedgefund can see</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-content-muted">
                  <li>Dues amounts, who paid, and when (via the Stripe API)</li>
                  <li>Whether a club&apos;s Stripe onboarding is complete</li>
                  <li>High-level payout status (paid out / pending)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-surface-border bg-surface p-6">
                <h3 className="text-sm font-semibold text-content">Wedgefund cannot see</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-content-muted">
                  <li>Full card numbers, CVV, or expiration dates</li>
                  <li>Bank account or routing numbers</li>
                  <li>Government ID or identity verification documents</li>
                </ul>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-content sm:text-3xl">
              General data practices
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-content-muted">
              All traffic to and from Wedgefund is encrypted in transit (HTTPS/TLS).
              Access to club and member data is restricted to what&apos;s needed to run the
              product, and we don&apos;t sell member data to third parties. For the specifics
              of what account and club data we collect and how it&apos;s used, see our{" "}
              <Link href="/privacy" className="font-medium text-brand-bright hover:text-brand">
                Privacy Policy
              </Link>
              .
            </p>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-content sm:text-3xl">
              Wedgefund is not a money transmitter
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-content-muted">
              Because dues are charged directly into each club&apos;s own Stripe account and
              paid out directly to that club&apos;s own bank, Wedgefund never takes custody
              of member funds. We&apos;re a software vendor charging a flat subscription fee
              for the app that helps a club organize itself — Stripe is the regulated
              payments infrastructure underneath, handling money movement, identity
              verification, and payouts.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-3xl border border-surface-border bg-surface-raised px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-content">Have a question about this?</h2>
              <p className="mt-2 text-sm text-content-muted">
                Treasurers, admins, and reviewers alike — happy to walk through it.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-pressed"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
