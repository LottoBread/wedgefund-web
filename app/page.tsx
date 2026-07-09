import Link from "next/link";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    title: "Roster & invites",
    description:
      "Add your club once, then hand out an invite link. New members sign up, land on the roster, and you're not the guy manually forwarding a group text anymore.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3" strokeLinecap="round" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
        <path d="M16.5 4.5c1.4.4 2.4 1.7 2.4 3.2s-1 2.8-2.4 3.2M20.5 20a5 5 0 0 0-4-4.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dues & treasury",
    description:
      "Collect dues through your club's own Stripe-connected account. See the running balance, who's paid, and who still owes for the summer skins game.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 14.5h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Outings & RSVPs",
    description:
      "Post a Saturday tee time, set a cap, and let the club RSVP. No more counting replies across three different text threads.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3.5 10h17" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tournaments & voting",
    description:
      "Admins propose a format and a date, members vote, and the club decides together — instead of one guy unilaterally picking a scramble again.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v13" strokeLinecap="round" />
        <path d="M12 4h7l-1.8 4L19 12h-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21h8M12 15v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Scorecards & leaderboard",
    description:
      "Log casual rounds, track handicap trends, and settle the club leaderboard with numbers instead of vibes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 21V9l8-5 8 5v12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="wf-glow border-b border-surface-border">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-raised px-3 py-1 text-xs font-medium text-content-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
              Now with Stripe Connect for club dues
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-content sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              The club software your buddy group actually runs on.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-content-muted">
              Wedgefund is a home base for a private golf group: a roster you
              invite people into, dues that go straight into your club&apos;s
              own bank account, outings people actually RSVP to, tournaments
              the club votes on, and a leaderboard to argue about. Not a
              tee-time marketplace. Not a public app. Just your club, run
              properly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-pressed"
              >
                See pricing
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-surface-border bg-surface-raised px-6 py-3 text-sm font-semibold text-content transition-colors hover:bg-surface-hover"
              >
                Talk to us
              </Link>
            </div>
            <p className="mt-4 text-xs text-content-faint">
              Wedgefund is a new product setting up its Stripe Connect
              integration — this site describes exactly how it works today.
            </p>
          </div>

          {/* Visual: club summary mock, CSS/SVG only, no external images */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-surface-border bg-surface-raised p-6 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-content-faint">
                    Ridgeline Buddy Trip
                  </p>
                  <p className="text-lg font-semibold text-content">Club treasury</p>
                </div>
                <span className="rounded-full bg-success-bg px-3 py-1 text-xs font-semibold text-success-text">
                  Active
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-surface-elevated p-4">
                <p className="text-xs text-content-faint">Balance in club&apos;s Stripe account</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-content">$2,140.00</p>
                <p className="mt-1 text-xs text-content-muted">18 of 20 members paid 2026 dues</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-surface-border p-3">
                  <p className="text-xs text-content-faint">Next outing</p>
                  <p className="mt-1 text-sm font-semibold text-content">Sat, 7:40 AM</p>
                  <p className="text-xs text-content-muted">14 of 16 spots filled</p>
                </div>
                <div className="rounded-xl border border-surface-border p-3">
                  <p className="text-xs text-content-faint">Tournament vote</p>
                  <p className="mt-1 text-sm font-semibold text-content">Ryder Cup format</p>
                  <p className="text-xs text-content-muted">Closes in 2 days</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-surface-border p-3">
                <div>
                  <p className="text-xs text-content-faint">Club leaderboard</p>
                  <p className="text-sm font-semibold text-content">J. Alvarez leads, 71.4 avg</p>
                </div>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-bright" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 20V10M12 20V4M19 20v-7" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-bright">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-content sm:text-4xl">
              Everything a buddy club needs, none of the stuff it doesn&apos;t.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-content-muted">
              Wedgefund is built around five things every informal golf club
              already does — it just does them without a spreadsheet, a
              group text, and a guy named Dave holding the cash.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust callout */}
      <section className="border-y border-surface-border bg-surface-raised py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tint text-brand-bright">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3 4 6.5v5.2c0 4.9 3.4 8.9 8 10.3 4.6-1.4 8-5.4 8-10.3V6.5L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m9 12 2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">
                Why your dues go straight to your club&apos;s bank
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-content-muted">
                Every club on Wedgefund gets its own Stripe Express account,
                set up through Stripe&apos;s own onboarding flow. When a
                member pays dues, the money moves directly into that
                account and out to your club&apos;s bank on Stripe&apos;s
                normal payout schedule. It never sits in a Wedgefund
                account, and we never take a cut of it — Wedgefund makes
                money from a flat platform fee your club pays us, not from
                your members&apos; dues.
              </p>
              <Link
                href="/security"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-bright hover:text-brand"
              >
                Read how the money flows
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="wf-glow rounded-3xl border border-surface-border bg-surface-raised px-8 py-14 text-center sm:px-16">
            <h2 className="text-3xl font-semibold tracking-tight text-content sm:text-4xl">
              Run your club on something better than a group text.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-content-muted">
              One flat fee per club, per month or year. No cut of your
              dues, ever.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-pressed"
              >
                See pricing
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-surface-border px-6 py-3 text-sm font-semibold text-content transition-colors hover:bg-surface-hover"
              >
                Ask us a question
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
