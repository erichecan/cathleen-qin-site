import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cathy Qin — Founder, Pioneer Group",
  description:
    "Cathy Qin immigrated with a dream and no roadmap, and spent 19 years turning that experience into Pioneer Group — a Toronto-based platform for career, community, and healing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
