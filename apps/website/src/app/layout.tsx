import type { Metadata, Viewport } from "next";
import { Rethink_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const StaticNavbar = dynamic(() => import("@/components/ui/static-navbar"));
const SiteFooter = dynamic(() => import("@/components/ui/site-footer"));
const GrainientBackground = dynamic(
  () => import("@/components/ui/GrainientBackground")
);
const ScrollReveal = dynamic(() => import("@/components/ui/scroll-reveal"));

const rethinkSans = Rethink_Sans({ subsets: ["latin"], variable: "--font-sans" });

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
      <body className={`${rethinkSans.variable} font-sans antialiased relative`}>
        <GrainientBackground />
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
