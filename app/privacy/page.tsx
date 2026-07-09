import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LegalNotice } from "@/components/LegalNotice";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Wedgefund's Privacy Policy: what data we collect from clubs and members, how payment data is handled through Stripe Connect, and your choices.",
};

const effectiveDate = "July 8, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description={`Effective ${effectiveDate}`} />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <LegalNotice />

            <div className="flex flex-col gap-10 text-sm leading-relaxed text-content-muted">
              <p>
                This Privacy Policy explains what information Wedgefund collects when you
                use our club software, how we use it, and the choices you have. It applies
                to everyone who uses Wedgefund — club admins and regular members alike.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-content">1. Information we collect</h2>
                <p className="mt-3 font-medium text-content">Account information</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  <li>Name and email address</li>
                  <li>Password (stored as a salted hash, never in plain text)</li>
                  <li>Profile details you choose to add (photo, handicap, home club)</li>
                </ul>
                <p className="mt-4 font-medium text-content">Club and activity data</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  <li>Club membership, roster status, and role (admin or member)</li>
                  <li>Outing RSVPs, tournament votes, and scorecards you submit</li>
                  <li>Dues payment status (paid, owed, amount, date) as reported by Stripe</li>
                </ul>
                <p className="mt-4 font-medium text-content">Payment information</p>
                <p className="mt-2">
                  When you pay dues or your club sets up dues collection, payment details
                  (card numbers, bank account numbers, identity verification documents) are
                  collected and stored directly by Stripe, not by Wedgefund. We receive
                  limited transaction metadata back from Stripe — amounts, timestamps,
                  payment status — needed to show your club&apos;s treasury inside the app. See
                  our{" "}
                  <a href="/security" className="font-medium text-brand-bright hover:text-brand">
                    Security page
                  </a>{" "}
                  for the full breakdown of what we can and can&apos;t see.
                </p>
                <p className="mt-4 font-medium text-content">Technical information</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  <li>Log data such as IP address, browser type, and access times</li>
                  <li>Basic, aggregate usage analytics to understand how the product is used</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">2. How we use information</h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>To operate the core features of Wedgefund: rosters, dues tracking, outings, tournaments, and leaderboards</li>
                  <li>To communicate with you about your account, your club, or billing</li>
                  <li>To detect, investigate, and prevent fraud, abuse, or security incidents</li>
                  <li>To improve the product based on aggregate usage patterns</li>
                  <li>To comply with legal obligations</li>
                </ul>
                <p className="mt-3">
                  We do not sell your personal information, and we don&apos;t use your club&apos;s
                  membership or dues data for advertising.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">3. Who we share information with</h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    <span className="font-medium text-content">Stripe</span> — for all
                    payment processing, identity verification, and payouts related to dues.
                    Stripe acts as the payment processor and, for connected accounts, as an
                    independent controller of the data needed to onboard and pay out your
                    club.
                  </li>
                  <li>
                    <span className="font-medium text-content">Hosting and infrastructure providers</span> —
                    to run the application and store data securely.
                  </li>
                  <li>
                    <span className="font-medium text-content">Other members of your club</span> —
                    your name, roster status, RSVPs, votes, and scorecards are visible to
                    other members of clubs you belong to, since that&apos;s the point of the
                    product.
                  </li>
                  <li>
                    <span className="font-medium text-content">Legal and safety</span> — if
                    required by law, or to protect the rights, property, or safety of
                    Wedgefund, our users, or the public.
                  </li>
                </ul>
                <p className="mt-3">We do not sell personal information to data brokers or advertisers.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">4. Cookies and similar technologies</h2>
                <p className="mt-3">
                  We use essential cookies or similar local storage to keep you signed in
                  and remember basic preferences. We may use privacy-conscious, aggregate
                  analytics tools to understand overall product usage; we do not use
                  cookies to build cross-site advertising profiles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">5. Data retention</h2>
                <p className="mt-3">
                  We keep account and club data for as long as your account is active, and
                  for a reasonable period afterward in case you or your club return, or as
                  needed for legal, tax, or dispute-resolution purposes. You can request
                  deletion of your account at any time (see Section 7).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">6. Data security</h2>
                <p className="mt-3">
                  We encrypt data in transit using HTTPS/TLS, restrict access to personal
                  data to what&apos;s needed to operate the service, and never store full card
                  numbers or bank account credentials on our own systems — that data lives
                  with Stripe. No system is perfectly secure, and we can&apos;t guarantee
                  absolute security, but we take reasonable, industry-standard measures to
                  protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">7. Your choices and rights</h2>
                <p className="mt-3">
                  You can access, update, or delete most of your account information
                  directly in the app. You can also{" "}
                  <a href="mailto:stringzbeats@icloud.com" className="font-medium text-brand-bright hover:text-brand">
                    email us
                  </a>{" "}
                  to request a copy of your data, ask us to correct it, or ask us to delete
                  your account. Depending on where you live, you may have additional
                  rights under laws like the GDPR or CCPA/CPRA; we&apos;ll honor requests
                  consistent with applicable law.
                </p>
                <p className="mt-3">
                  Because dues payment data is held by Stripe as part of your club&apos;s
                  connected account, requests related to that data may also need to go
                  through Stripe directly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">8. Children&apos;s privacy</h2>
                <p className="mt-3">
                  Wedgefund is not directed at children, and you must be at least 18 to
                  create an account. We don&apos;t knowingly collect personal information from
                  children under 13. If you believe a child has provided us with personal
                  information, contact us and we&apos;ll delete it.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">9. International users</h2>
                <p className="mt-3">
                  Wedgefund is operated from, and data is primarily processed in, the
                  United States. If you use Wedgefund from outside the United States, your
                  information will be transferred to and processed in the United States.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">10. Changes to this policy</h2>
                <p className="mt-3">
                  We may update this Privacy Policy from time to time. If we make material
                  changes, we&apos;ll provide notice (such as an email or an in-app notice)
                  before the changes take effect.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-content">11. Contact</h2>
                <p className="mt-3">
                  Questions about this policy or your data?{" "}
                  <a href="mailto:stringzbeats@icloud.com" className="font-medium text-brand-bright hover:text-brand">
                    Email us
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
