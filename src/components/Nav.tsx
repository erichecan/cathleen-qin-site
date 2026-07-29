"use client";

import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const { lang, toggle, t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#speaking", label: t.nav.speaking },
    { href: "#moments", label: t.nav.moments },
    { href: "#journal", label: t.nav.journal },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-warm/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-1.5 px-3 py-4 sm:gap-3 sm:px-10">
        <a
          href="#top"
          className="shrink-0 font-display text-[0.62rem] font-semibold tracking-[0.02em] text-ink sm:text-[0.95rem] sm:tracking-[0.08em]"
        >
          CATHLEEN QIN
        </a>
        <div className="flex items-center gap-1.5 sm:gap-6">
          <nav className="flex items-center gap-1.5 text-[0.58rem] tracking-wide text-body sm:gap-8 sm:text-[0.82rem]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggle}
            className="shrink-0 border border-line px-1.5 py-1 text-[0.58rem] font-medium tracking-wide text-body transition-colors hover:border-gold hover:text-ink sm:px-2 sm:text-[0.65rem]"
            aria-label="Switch language"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}
