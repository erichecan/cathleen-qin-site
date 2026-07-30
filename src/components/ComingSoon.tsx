"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function ComingSoon() {
  const { t } = useLanguage();

  return (
    <section id="membership" className="border-b border-line/70 bg-sand/40 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-5 block text-[0.9rem] font-bold text-coral-deep">
            {t.comingSoon.eyebrow}
          </span>
          <h2 className="max-w-xl text-[2.1rem] leading-[1.15] sm:text-[2.8rem]">
            {t.comingSoon.h2}
          </h2>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.8] text-body sm:text-[1.15rem]">
            {t.comingSoon.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {t.comingSoon.items.map((item, i) => (
            <Reveal
              key={item.name}
              className="rounded-[1.5rem] border border-line bg-warm p-8"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="inline-block rounded-full bg-coral/15 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-coral-deep">
                {t.comingSoon.badge}
              </span>
              <h3 className="mt-5 text-[1.2rem] leading-snug text-ink">{item.name}</h3>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-body">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
