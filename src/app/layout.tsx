import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { ReferralTracker } from "@/components/referrals/referral-tracker";
import { BRAND_DESCRIPTION, BRAND_KEYWORDS, BRAND_NAME, BRAND_TAGLINE } from "@/lib/brand";
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
    default: `${BRAND_NAME} — Residencia médica Colombia`,
    template: `%s · ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  keywords: [...BRAND_KEYWORDS],
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: `${BRAND_NAME} — Residencia médica Colombia`,
    description: BRAND_TAGLINE,
    type: "website",
    locale: "es_CO",
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
