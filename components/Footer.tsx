import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";

const productLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-raised">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-content-muted">
            The club software your buddy group actually runs on: roster,
            dues, outings, tournaments, and a leaderboard everybody argues
            about. Built by golfers who got tired of spreadsheets and group
            texts.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-content-faint">
            Product
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-content-muted transition-colors hover:text-content"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-content-faint">
            Legal
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-content-muted transition-colors hover:text-content"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:stringzbeats@icloud.com"
                className="text-sm text-content-muted transition-colors hover:text-content"
              >
                Email us
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-surface-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-content-faint sm:flex-row">
          <p>&copy; {year} Wedgefund. All rights reserved.</p>
          <p>Wedgefund is not a bank, money transmitter, or payment processor.</p>
        </Container>
      </div>
    </footer>
  );
}
