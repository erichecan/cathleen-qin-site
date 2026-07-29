"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Journal() {
  const { t } = useLanguage();

  return (
    <section id="journal" className="border-b border-line/70 px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="mb-5 block text-[0.78rem] tracking-[0.01em] text-gold-strong">
            ({t.journal.eyebrow})
          </span>
          <h2 className="text-[2.3rem] leading-[1.1] sm:text-[3.1rem]">{t.journal.h2}</h2>
          <p className="mt-8 max-w-xl text-[1.1rem] leading-[1.8] text-body sm:text-[1.2rem]">
            {t.journal.intro}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col sm:mt-20">
          {t.journal.posts.map((post) => (
            <Reveal key={post.title} className="border-t border-line/70 py-9 first:border-t-0 sm:py-11">
              <a
                href="#"
                className="group flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
              >
                <span>
                  <h3 className="text-[1.4rem] leading-snug text-ink transition-colors group-hover:text-gold-strong">
                    {post.title}
                  </h3>
                  <span className="mt-2 block max-w-xl text-[1rem] leading-[1.65] text-body">{post.dek}</span>
                </span>
                <span className="shrink-0 text-[0.82rem] uppercase tracking-[0.08em] text-muted">
                  {post.meta}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
