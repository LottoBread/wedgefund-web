"use client";

import { useState } from "react";

const SUPPORT_EMAIL = "stringzbeats@icloud.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General question");
  const [message, setMessage] = useState("");

  const mailtoHref = (() => {
    const subject = `[Wedgefund contact] ${topic}${name ? ` — ${name}` : ""}`;
    const bodyLines = [
      message || "(no message entered)",
      "",
      "---",
      `From: ${name || "(no name entered)"}`,
      `Reply-to: ${email || "(no email entered)"}`,
    ];
    const params = new URLSearchParams({
      subject,
      body: bodyLines.join("\n"),
    });
    return `mailto:${SUPPORT_EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
  })();

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-content">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-surface-border bg-surface px-4 py-2.5 text-sm text-content placeholder:text-content-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-content">
            Your email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-surface-border bg-surface px-4 py-2.5 text-sm text-content placeholder:text-content-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="text-sm font-medium text-content">
          Topic
        </label>
        <select
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-2 w-full rounded-xl border border-surface-border bg-surface px-4 py-2.5 text-sm text-content focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        >
          <option>General question</option>
          <option>Setting up a new club</option>
          <option>Dues & Stripe Connect</option>
          <option>Billing & pricing</option>
          <option>Something&apos;s broken</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-content">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="What's going on?"
          className="mt-2 w-full resize-none rounded-xl border border-surface-border bg-surface px-4 py-2.5 text-sm text-content placeholder:text-content-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-pressed sm:w-auto"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" opacity="0" />
          <path d="m4 6 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Open in email
      </button>

      <p className="text-xs leading-relaxed text-content-faint">
        There&apos;s no backend behind this form yet — clicking &ldquo;Open in
        email&rdquo; opens your email app with a message pre-filled, using
        whatever you&apos;ve typed above. Nothing is sent anywhere until you
        actually hit send in your own email client. If that&apos;s awkward on
        your device, you can{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-medium text-content-muted underline hover:text-content"
        >
          email us directly
        </a>{" "}
        instead.
      </p>
    </form>
  );
}
