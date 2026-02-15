import type { Metadata, Viewport } from "next";
import { Rethink_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const StaticNavbar = dynamic(() => import("@/components/ui/static-navbar"));
const SiteFooter = dynamic(() => import("@/components/ui/site-footer"));
const GrainientBackground = dynamic(
  () => import("@/components/ui/GrainientBackground")
);

const rethinkSans = Rethink_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "San Diego Injury Prevention Program",
    template: "%s | SDIPP",
  },
  description: "Promoting fitness and mobility among older individuals in San Diego through evidence-based programs.",
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
      </head>
      <body className={`${rethinkSans.variable} font-sans antialiased relative`}>
        <GrainientBackground />
        <div className="relative min-h-screen flex flex-col">
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
