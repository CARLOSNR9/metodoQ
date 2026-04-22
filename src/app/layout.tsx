import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { ReferralTracker } from "@/components/referrals/referral-tracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Método Q — Aprende cualquier tema en minutos",
    template: "%s · Método Q",
  },
  description:
    "La forma inteligente de aprender. Método Q utiliza IA para explicarte lo complejo de forma simple, clara y rápida. Empieza gratis hoy mismo.",
  keywords: ["aprendizaje", "inteligencia artificial", "estudio", "método q", "educación"],
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Método Q — Aprende cualquier tema en minutos",
    description: "De la confusión a la claridad en segundos. Prueba Método Q gratis.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-background antialiased text-foreground`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <GoogleAnalytics />
        <ReferralTracker />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
