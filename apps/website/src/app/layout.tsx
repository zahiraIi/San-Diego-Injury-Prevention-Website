import type { Metadata, Viewport } from "next";
import { Rethink_Sans, Oswald } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const StaticNavbar = dynamic(() => import("@/components/ui/static-navbar"));
const SiteFooter = dynamic(() => import("@/components/ui/site-footer"));
const ScrollReveal = dynamic(() => import("@/components/ui/scroll-reveal"));

const rethinkSans = Rethink_Sans({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://sdipp.org";

export const metadata: Metadata = {
  title: {
    default: "San Diego Injury Prevention Program",
    template: "%s | SDIPP",
  },
  description:
    "Student-run organization empowering their San Diego community through education, outreach, and injury prevention.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "San Diego Injury Prevention Program",
    title: "San Diego Injury Prevention Program",
    description:
      "Student-run organization empowering their San Diego community through education, outreach, and injury prevention.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: "San Diego Injury Prevention Program",
    description:
      "Student-run organization empowering their San Diego community through education, outreach, and injury prevention.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://linktr.ee" />

        {/* Favicon links (fallback / explicit) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "San Diego Injury Prevention Program",
              url: SITE_URL,
              description:
                "Student-run organization empowering their San Diego community through education, outreach, and injury prevention.",
              areaServed: {
                "@type": "City",
                name: "San Diego",
              },
            }),
          }}
        />
      </head>
      <body className={`${rethinkSans.variable} ${oswald.variable} font-sans antialiased relative bg-white`}>
        <div className="relative min-h-screen flex flex-col">
          <ScrollReveal />
          <StaticNavbar />
          <main className="flex-grow pt-0">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
