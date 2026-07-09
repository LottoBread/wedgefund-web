import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="14" fill="var(--wf-brand-tint)" />
      <path
        d="M17 18 L24.5 44 L32 26 L39.5 44 L47 18"
        fill="none"
        stroke="var(--wf-brand-bright)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
    >
      <LogoMark className="h-8 w-8 shrink-0 transition-transform group-hover:scale-105" />
      <span className="text-lg font-semibold tracking-tight text-content">
        Wedgefund
      </span>
    </Link>
  );
}
