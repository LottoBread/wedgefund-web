import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Wedgefund. Email support@wedgefund.club directly, or use the contact form to open a pre-filled email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about setting up a club, dues and Stripe Connect, pricing, or anything else — we're a small team and we read every message ourselves."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-lg font-semibold text-content">Email us directly</h2>
              <a
                href="mailto:support@wedgefund.club"
                className="mt-3 inline-flex items-center gap-2 text-xl font-semibold text-brand-bright hover:text-brand"
              >
                support@wedgefund.club
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-content-muted">
                This is the fastest way to reach us. We typically reply within
                one to two business days.
              </p>

              <div className="mt-10 rounded-2xl border border-surface-border bg-surface-raised p-6">
                <h3 className="text-sm font-semibold text-content">Are you a club treasurer?</h3>
                <p className="mt-2 text-sm leading-relaxed text-content-muted">
                  Mention that in your message and we&apos;ll route it straight to
                  someone who can talk through dues, payouts, and Stripe
                  Connect setup for your club.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-surface-border bg-surface-raised p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-content">Or send a message</h2>
              <p className="mt-2 text-sm text-content-muted">
                Fill this out and we&apos;ll open it as an email you can send from
                your own inbox.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
