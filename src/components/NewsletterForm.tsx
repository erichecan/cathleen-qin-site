"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

export default function NewsletterForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return <p className="text-[0.98rem] text-ink">{t.contact.submittedMsg}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder={t.contact.emailPlaceholder}
        className="w-full rounded-full border border-line bg-warm px-5 py-3 text-[0.95rem] text-ink placeholder:text-muted outline-none focus:border-coral"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-coral px-7 py-3 text-[0.9rem] font-bold text-warm transition-colors hover:bg-coral-deep"
      >
        {t.contact.submitLabel}
      </button>
    </form>
  );
}
