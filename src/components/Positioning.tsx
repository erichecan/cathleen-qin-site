"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Positioning() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line/70 bg-sand/40 px-6 py-14 sm:px-10 sm:py-16">
      <Reveal>
        <p className="mx-auto max-w-3xl text-center text-[1.3rem] leading-[1.6] text-ink sm:text-[1.6rem]">
          <span className="font-bold text-teal">{t.positioning.pre}</span>
          {t.positioning.mid}
          {t.positioning.post}
        </p>
      </Reveal>
    </section>
  );
}
