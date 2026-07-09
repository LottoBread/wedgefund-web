export function LegalNotice() {
  return (
    <div className="mb-10 flex gap-3 rounded-2xl border border-warning/30 bg-warning-bg px-5 py-4">
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 h-5 w-5 shrink-0 text-warning-text"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a1.5 1.5 0 0 0 1.29 2.25h17.78A1.5 1.5 0 0 0 22.18 18L13.71 3.86a1.5 1.5 0 0 0-2.42 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-sm leading-relaxed text-warning-text">
        <strong className="font-semibold">
          This is a draft template, not a legal document reviewed by a lawyer.
        </strong>{" "}
        We wrote it to be honest and reasonable, in the same spirit as the
        disclaimer on the document generator inside the Wedgefund app itself
        — but it hasn&apos;t been reviewed by counsel. Please have an
        attorney review and adapt this before relying on it for legal
        protection.
      </p>
    </div>
  );
}
