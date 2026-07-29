"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b border-line/70 bg-warm px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-5 block text-[0.78rem] tracking-[0.01em] text-gold-strong">
            ({t.about.eyebrow})
          </span>
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-[0.85fr_1.15fr] sm:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <Image
                src="/images/cathy-portrait.jpg"
                alt="Cathy Qin"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 40vw, 90vw"
              />
            </div>
          </Reveal>
          <Reveal style={{ transitionDelay: "90ms" }}>
            <h2 className="text-[2.2rem] leading-[1.15] sm:text-[2.9rem]">{t.about.h2}</h2>
            <p className="mt-7 text-[1.08rem] leading-[1.8] text-body sm:text-[1.15rem]">
              {t.about.p1}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20 sm:mt-28">
          <span className="mb-8 block text-[0.75rem] tracking-[0.01em] text-muted">
            ({t.about.platformsLabel})
          </span>
          <div className="flex flex-col border-t border-line/70">
            {t.about.platforms.map((platform, i) => (
              <div
                key={platform.name}
                className="flex flex-col gap-2 border-b border-line/70 py-8 sm:flex-row sm:items-baseline sm:gap-10 sm:py-10"
              >
                <span className="font-display text-[1.4rem] text-gold/70 sm:w-16 sm:shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.15rem] leading-snug text-ink">{platform.name}</h3>
                  <p className="mt-2 max-w-xl text-[0.98rem] leading-[1.7] text-body">
                    {platform.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
