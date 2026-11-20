import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "@/app/[locale]/globals.css";
import Header from "@/app/[locale]/_components/layout/header";
import Footer from "@/app/[locale]/_components/layout/footer";
import { CartProvider } from "@/app/[locale]/context/cartContext";
import { ThemeProvider } from "@/app/[locale]/context/themeContext";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexa Shopping",
  description: "Shop electronics, wearables, and footwear at Nexa Shopping.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider>
          <CartProvider>
            <body className="flex h-dvh flex-col overflow-hidden">
              <Header />
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
                {children}
              </div>
              <Footer />
            </body>
          </CartProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </html>
  );
}
