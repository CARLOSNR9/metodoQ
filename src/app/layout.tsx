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
    default: "Método Q",
    template: "%s · Método Q",
  },
  description:
    "Plataforma SaaS Método Q — landing y producto en construcción.",
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
