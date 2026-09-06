import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppButton } from "@/components/conversion/whatsapp-button";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { absoluteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Sabda Academy | Belajar Coding dengan Cara Menyenangkan",
    template: "%s | Sabda Academy",
  },
  description:
    "Sabda Academy membantu anak belajar coding, kreativitas, dan problem solving melalui project yang menyenangkan.",
  alternates: { canonical: absoluteUrl("/") },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Sabda Academy",
    locale: "id_ID",
    url: absoluteUrl("/"),
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <a href="#main-content" className="focus-ring sr-only absolute left-4 top-4 z-50 rounded-lg bg-white px-4 py-3 font-bold text-ink focus:not-sr-only">
          Lewati ke konten utama
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <WhatsAppButton />
        <SiteFooter />
      </body>
    </html>
  );
}
