import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LegalNotice } from "@/components/LegalNotice";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Wedgefund's Terms of Service: how the club software works, subscription billing, and how dues payments through Stripe Connect are handled.",
};

const effectiveDate = "July 8, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" description={`Effective ${effectiveDate}`} />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <LegalNotice />

            <div className="flex flex-col gap-10 text-sm leading-relaxed text-content-muted">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
                Wedgefund, a software product for organizing private golf buddy groups
                (&ldquo;Wedgefund,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By creating an
                account, joining a club, or otherwise using Wedgefund, you agree to these
                Terms. If you&apos;re joining a club on behalf of a group, you&apos;re agreeing on
                behalf of yourself as a member of that group.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-content">1. What Wedgefund is</h2>
                <p className="mt-3">
                  Wedgefund is software that helps a private, invite-only group of golfers
                  run itself: a membership roster with invite-by-link signup, dues and
                  treasury tracking, outing scheduling with RSVPs, admin-proposed
                  tournaments with member voting, and casual round and scorecard tracking
                  with a club leaderboard. Wedgefund is not a golf course, a tee-time
                  booking service, or a public marketplace — clubs are private groups that
                  choose who joins.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">2. Accounts and eligibility</h2>
                <p className="mt-3">
                  You need an account to use Wedgefund. You&apos;re responsible for keeping your
                  login credentials secure and for activity that happens under your
                  account. You must be at least 18 years old to create an account. Clubs
                  are created and administered by &ldquo;club admins&rdquo; — members with
                  elevated permissions to manage the roster, dues settings, outings, and
                  tournaments for their club.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">3. Club admins and treasurers</h2>
                <p className="mt-3">
                  If you&apos;re a club admin, you&apos;re responsible for how your club uses
                  Wedgefund: who you invite, what dues you set, how you communicate dues
                  obligations to members, and decisions you make about outings and
                  tournaments. Wedgefund provides the tools; your club decides how to use
                  them. Wedgefund is not a party to, and takes no responsibility for,
                  informal agreements among your club&apos;s members about dues, wagers, or
                  side games.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">
                  4. Dues, payments, and Stripe Connect
                </h2>
                <p className="mt-3">
                  Wedgefund uses Stripe Connect to let clubs collect dues. Each club that
                  turns on dues collection creates its own Stripe Express account through
                  Stripe&apos;s own onboarding. Dues payments are processed as direct charges
                  into that club&apos;s Stripe account, and payouts go directly from Stripe to
                  that club&apos;s bank account on Stripe&apos;s standard schedule. See our{" "}
                  <a href="/security" className="font-medium text-brand-bright hover:text-brand">
                    Security page
                  </a>{" "}
                  for a full explanation.
                </p>
                <p className="mt-3">
                  Because of this structure, Wedgefund never takes custody of club funds
                  and is not a party to the payment between a member and their club.
                  Wedgefund is not a bank, escrow agent, or money transmitter, and dues
                  paid through Wedgefund are between the paying member and their club,
                  facilitated by Stripe&apos;s payment infrastructure. You authorize Stripe to
                  process payments you make or receive through Wedgefund, and your use of
                  Stripe-powered payment features is also subject to the{" "}
                  <a
                    href="https://stripe.com/legal/connect-account"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-bright hover:text-brand"
                  >
                    Stripe Connected Account Agreement
                  </a>{" "}
                  and Stripe&apos;s terms of service.
                </p>
                <p className="mt-3">
                  Wedgefund does not guarantee that any member will pay dues on time or at
                  all, and is not responsible for resolving disputes between a club and
                  its members about dues, refunds of dues, or use of club treasury funds.
                  Those are matters for the club to handle internally; Wedgefund can
                  provide records of transactions through the app to help.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">
                  5. Subscription fees and billing
                </h2>
                <p className="mt-3">
                  Wedgefund charges each club a flat subscription fee, billed monthly or
                  annually depending on the plan the club selects, as described on our{" "}
                  <a href="/pricing" className="font-medium text-brand-bright hover:text-brand">
                    Pricing page
                  </a>
                  . This fee is for use of the software and is entirely separate from any
                  dues your club collects — Wedgefund does not take a percentage or
                  per-transaction cut of dues. Subscriptions renew automatically at the end
                  of each billing period unless cancelled beforehand. You can cancel at any
                  time; cancellation takes effect at the end of the current billing period,
                  and we don&apos;t provide prorated refunds for partial periods except where
                  required by law or at our discretion.
                </p>
                <p className="mt-3">
                  Pricing may change. If we change the price of your plan, we&apos;ll give you
                  notice before the change applies to your next billing cycle.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">6. Acceptable use</h2>
                <p className="mt-3">You agree not to:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>Use Wedgefund for any unlawful purpose, including fraud or money laundering</li>
                  <li>Attempt to circumvent Stripe&apos;s identity verification or payment processes</li>
                  <li>Harass, threaten, or abuse other members through the app</li>
                  <li>Attempt to gain unauthorized access to another club&apos;s data or account</li>
                  <li>Interfere with or disrupt the operation of Wedgefund&apos;s infrastructure</li>
                  <li>Scrape, reverse-engineer, or resell access to the service without our written permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">7. Your content</h2>
                <p className="mt-3">
                  You retain ownership of the content you add to Wedgefund (scores,
                  messages, outing details, and the like). You grant Wedgefund a license to
                  store, display, and process that content solely to operate the service
                  for you and your club.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">8. Third-party services</h2>
                <p className="mt-3">
                  Wedgefund relies on third-party providers — most importantly Stripe for
                  payments, and cloud infrastructure providers for hosting — to operate.
                  Your use of features built on those providers is also governed by their
                  own terms. We&apos;re not responsible for outages or issues caused by
                  third-party providers outside our control.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">9. Disclaimer of warranties</h2>
                <p className="mt-3">
                  Wedgefund is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
                  without warranties of any kind, express or implied, including implied
                  warranties of merchantability, fitness for a particular purpose, and
                  non-infringement. We don&apos;t guarantee the service will be uninterrupted,
                  error-free, or available at all times.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">10. Limitation of liability</h2>
                <p className="mt-3">
                  To the fullest extent permitted by law, Wedgefund will not be liable for
                  any indirect, incidental, special, consequential, or punitive damages, or
                  any loss of dues, treasury funds, data, or goodwill, arising out of your
                  use of the service — including funds handled through your club&apos;s Stripe
                  account, which Wedgefund never takes custody of. Our total liability for
                  any claim relating to the service is limited to the amount your club paid
                  us in subscription fees in the twelve months before the claim arose.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">11. Indemnification</h2>
                <p className="mt-3">
                  You agree to indemnify and hold Wedgefund harmless from claims, damages,
                  and expenses (including reasonable legal fees) arising from your misuse
                  of the service or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">12. Termination</h2>
                <p className="mt-3">
                  You can stop using Wedgefund and delete your account at any time. We may
                  suspend or terminate accounts that violate these Terms, or that we
                  reasonably believe pose a risk to other members, the club, or the
                  integrity of the payments infrastructure we rely on.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">13. Changes to these Terms</h2>
                <p className="mt-3">
                  We may update these Terms from time to time. If we make material
                  changes, we&apos;ll provide notice (such as an email or an in-app notice)
                  before the changes take effect. Continued use of Wedgefund after changes
                  take effect means you accept the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">14. Governing law</h2>
                <p className="mt-3">
                  These Terms are governed by the laws of the State of Delaware, United
                  States, without regard to conflict-of-law principles.{" "}
                  <em>
                    (Placeholder jurisdiction — confirm with counsel before relying on
                    this.)
                  </em>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">15. Contact</h2>
                <p className="mt-3">
                  Questions about these Terms? Email us at{" "}
                  <a href="mailto:support@wedgefund.club" className="font-medium text-brand-bright hover:text-brand">
                    support@wedgefund.club
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
