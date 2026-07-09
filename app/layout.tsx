import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://wedgefund.club";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wedgefund — Software for your buddy golf club",
    template: "%s — Wedgefund",
  },
  description:
    "Wedgefund is club software for private golf buddy groups: membership roster, dues and treasury, outing scheduling, tournament voting, and a shared leaderboard. Dues pay directly into your club's own bank account via Stripe Connect — Wedgefund never holds club funds.",
  keywords: [
    "golf club software",
    "golf buddy group app",
    "golf dues tracker",
    "golf treasury app",
    "golf tournament voting",
    "Stripe Connect club payments",
  ],
  openGraph: {
    title: "Wedgefund — Software for your buddy golf club",
    description:
      "Roster, dues, outings, tournaments, and a leaderboard for your golf buddy group. Dues go straight to your club's own bank account.",
    url: siteUrl,
    siteName: "Wedgefund",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Wedgefund — Software for your buddy golf club",
    description:
      "Roster, dues, outings, tournaments, and a leaderboard for your golf buddy group.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-surface font-sans text-content antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
