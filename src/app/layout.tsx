import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cathy Qin — Emotional Healing & Growth Mentor",
  description:
    "Cathy Qin helps you release what's heavy and grow into who you're becoming — through Huizhimei Healing Center and the Huizhiling Women's Growth Circle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
