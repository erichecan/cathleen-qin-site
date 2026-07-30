"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

const photos = [
  "/images/community-healing.jpg",
  "/images/cathy-gala-award.jpg",
  "/images/community-orchard.jpg",
  "/images/community-roundtable.jpg",
  "/images/community-ribbon-cutting.jpg",
];

export default function Moments() {
  const { t } = useLanguage();

  return (
    <section id="moments" className="border-b border-line/70 bg-sand/40 px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="mb-5 block text-[0.9rem] font-bold text-coral-deep">
            {t.moments.eyebrow}
          </span>
          <h2 className="text-[2.3rem] leading-[1.1] sm:text-[3.1rem]">{t.moments.h2}</h2>
          <p className="mt-8 max-w-xl text-[1.1rem] leading-[1.8] text-body sm:text-[1.2rem]">
            {t.moments.intro}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4">
        {photos.map((src, i) => (
          <Reveal
            key={src}
            className="relative aspect-[4/5] overflow-hidden bg-sand-deep"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(min-width: 640px) 30vw, 50vw"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
