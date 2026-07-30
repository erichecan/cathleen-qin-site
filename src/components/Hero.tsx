"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="border-b border-line/70 px-6 pb-16 pt-32 sm:px-10 sm:pb-24 sm:pt-40">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-center sm:gap-14">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-sand">
            <Image
              src="/images/cathy-portrait.jpg"
              alt="Cathy Qin"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 640px) 45vw, 90vw"
            />
          </div>
        </Reveal>
        <Reveal style={{ transitionDelay: "90ms" }}>
          <h1 className="text-[3rem] leading-[1.05] text-ink sm:text-[4rem]">
            {t.hero.h1[0]}
            <br />
            {t.hero.h1[1]}
          </h1>
          <p className="mt-7 max-w-md text-[1.1rem] leading-[1.75] text-body">
            {t.hero.sub}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.98rem]">
            <a
              href="#offerings"
              className="rounded-full bg-coral px-7 py-3 font-bold text-warm transition-colors hover:bg-coral-deep"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#journal"
              className="text-body underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              {t.hero.cta2}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
