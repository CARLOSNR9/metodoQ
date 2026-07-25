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
    default: `${BRAND_NAME} | Preparación Residencia Médica Colombia`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  keywords: [...BRAND_KEYWORDS],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${BRAND_NAME} | Preparación Residencia Médica Colombia`,
    description: BRAND_TAGLINE,
    type: "website",
    locale: "es_CO",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Método Q",
  url: "https://www.metodoq.pro/",
  logo: "https://www.metodoq.pro/icon.png",
  description: "Entrenamiento adaptativo y simulacros tipo examen para la residencia médica en Colombia.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
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
