"use client";

import Reveal from "./Reveal";
import NewsletterForm from "./NewsletterForm";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t-2 border-coral bg-sand/60 px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="mb-5 block text-[0.9rem] font-bold text-coral-deep">
            {t.contact.eyebrow}
          </span>
          <h2 className="text-[2.3rem] leading-[1.1] sm:text-[3.1rem]">{t.contact.h2}</h2>
          <p className="mt-7 max-w-md text-[1.1rem] leading-[1.8] text-body sm:text-[1.2rem]">
            {t.contact.body}
          </p>

          <div className="mt-10">
            <NewsletterForm />
          </div>

          <p className="mt-16 border-t border-line pt-8 text-[0.92rem] text-muted sm:mt-20">
            {t.contact.contactNote}{" "}
            <a
              href="mailto:hello@cathleenqin.com"
              className="text-ink underline decoration-line underline-offset-4 hover:text-coral-deep"
            >
              hello@cathleenqin.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
