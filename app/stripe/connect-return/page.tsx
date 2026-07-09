import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "You're all set",
  robots: { index: false, follow: false },
};

export default function StripeConnectReturnPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-tint">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-brand-bright"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight text-content sm:text-3xl">
        You&apos;re all set
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-content-muted">
        Stripe has your club&apos;s onboarding info. You can close this tab now and go back to
        the Wedgefund app — your club&apos;s payment status will update automatically.
      </p>
    </Container>
  );
}
