"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Speaking() {
  const { t } = useLanguage();

  return (
    <section id="speaking" className="border-b border-line/70 bg-warm px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="mb-5 block text-[0.9rem] font-bold text-coral-deep">
            {t.speaking.eyebrow}
          </span>
          <h2 className="text-[2.3rem] leading-[1.1] sm:text-[3.1rem]">{t.speaking.h2}</h2>
          <p className="mt-8 max-w-xl text-[1.1rem] leading-[1.8] text-body sm:text-[1.2rem]">
            {t.speaking.body}
          </p>
        </Reveal>
      </div>

      <Reveal
        className="relative mx-auto mt-16 aspect-[16/9] w-full max-w-5xl overflow-hidden bg-sand-deep sm:mt-20"
        style={{ transitionDelay: "90ms" }}
      >
        <Image
          src="/images/community-seminar.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </Reveal>

      <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-10">
          {t.speaking.talks.map((talk, i) => (
            <Reveal key={talk.title} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="font-display text-[1.6rem] text-coral/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.2rem] leading-snug text-ink">{talk.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-[1.7] text-body">{talk.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
