"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

const cardStyles = [
  { bg: "bg-sand", accent: "text-teal" },
  { bg: "bg-[#f6ded1]", accent: "text-coral-deep" },
];

export default function Offerings() {
  const { t } = useLanguage();

  return (
    <section id="offerings" className="border-b border-line/70 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-5 block text-[0.9rem] font-bold text-coral-deep">
            {t.offerings.eyebrow}
          </span>
          <h2 className="max-w-xl text-[2.1rem] leading-[1.15] sm:text-[2.8rem]">
            {t.offerings.h2}
          </h2>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.8] text-body sm:text-[1.15rem]">
            {t.offerings.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8">
          {t.offerings.items.map((item, i) => (
            <Reveal
              key={item.name}
              className={`rounded-[1.75rem] ${cardStyles[i].bg} p-9 sm:p-11`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className={`block text-[0.85rem] font-bold ${cardStyles[i].accent}`}>
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[1.4rem] leading-snug text-ink">{item.name}</h3>
              <p className="mt-4 text-[1rem] leading-[1.75] text-body">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
