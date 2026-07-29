"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Statement() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line/70 bg-sand/50 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[0.8fr_1.2fr] sm:items-center sm:gap-16">
        <Reveal>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand-deep">
            <Image
              src="/images/cathy-gala.jpg"
              alt="Cathy Qin"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 35vw, 90vw"
            />
          </div>
        </Reveal>
        <Reveal style={{ transitionDelay: "90ms" }}>
          <span aria-hidden className="font-display text-[3.2rem] leading-none text-gold/70">
            &ldquo;
          </span>
          <p className="mt-2 font-display text-[1.7rem] italic leading-[1.4] tracking-[-0.005em] text-ink sm:text-[2.4rem] sm:leading-[1.35]">
            {t.about.quote}
          </p>
          <cite className="mt-8 block text-[0.9rem] not-italic tracking-wide text-muted">
            {t.about.quoteAttr}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
