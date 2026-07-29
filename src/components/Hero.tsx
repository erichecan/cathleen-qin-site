"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] items-center overflow-hidden px-6 py-28 sm:px-10 sm:py-32"
    >
      <Image
        src="/images/cathy-speaking-closeup.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_22%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#141b12]/80 via-[#141b12]/55 to-[#141b12]/85"
      />
      <div className="relative mx-auto w-full max-w-4xl">
        <Reveal>
          <span className="mb-8 block text-[0.8rem] tracking-[0.01em] text-gold">
            ({t.hero.eyebrow})
          </span>
          <h1 className="text-[2.7rem] leading-[1.16] tracking-[-0.01em] text-warm sm:text-[4.8rem] sm:leading-[1.08]">
            {t.hero.h1[0]}
            <br />
            <span className="underline decoration-gold decoration-[3px] underline-offset-[10px]">
              {t.hero.h1[1]}
            </span>
          </h1>
          <p className="mt-9 max-w-xl text-[1.15rem] leading-[1.75] text-warm/75 sm:text-[1.25rem]">
            {t.hero.sub}
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.98rem]">
            <a
              href="#speaking"
              className="rounded-full bg-gold px-7 py-3 font-medium text-[#1c1408] transition-colors hover:bg-gold-strong"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#journal"
              className="border-b border-warm/40 pb-1 text-warm/85 transition-colors hover:border-warm hover:text-warm"
            >
              {t.hero.cta2}
            </a>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="h-12 w-px bg-warm/30" />
      </div>
    </section>
  );
}
