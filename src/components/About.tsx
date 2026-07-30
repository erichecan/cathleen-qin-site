"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b border-line/70 bg-warm px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mb-5 block text-[0.9rem] font-bold text-coral-deep">
            {t.about.eyebrow}
          </span>
          <h2 className="text-[2.1rem] leading-[1.15] sm:text-[2.8rem]">{t.about.h2}</h2>
          <p className="mt-7 text-[1.08rem] leading-[1.8] text-body sm:text-[1.15rem]">
            {t.about.p1}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
