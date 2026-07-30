"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line/70 bg-teal px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
        {t.stats.items.map((stat, i) => (
          <Reveal key={stat.label} style={{ transitionDelay: `${i * 90}ms` }}>
            <div className="text-[2.1rem] font-bold text-warm sm:text-[3rem]">{stat.value}</div>
            <div className="mt-2 text-[0.82rem] leading-snug text-warm/80 sm:text-[0.95rem]">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
