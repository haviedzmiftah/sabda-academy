import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppButton } from "@/components/conversion/whatsapp-button";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

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
  openGraph: {
    type: "website",
    siteName: "Sabda Academy",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <SiteHeader />
        <main>{children}</main>
        <WhatsAppButton />
        <SiteFooter />
      </body>
    </html>
  );
}
