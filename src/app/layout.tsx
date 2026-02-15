import type { Metadata, Viewport } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import StaticNavbar from "@/components/ui/static-navbar";
import SiteFooter from "@/components/ui/site-footer";
import GrainientBackground from "@/components/ui/GrainientBackground";
import GSAPScrollProvider from "@/components/ui/gsap-scroll-provider";

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
      <body className={`${rethinkSans.variable} font-sans antialiased relative`}>
        <GSAPScrollProvider>
          <GrainientBackground />
          <div className="relative min-h-screen flex flex-col">
            <StaticNavbar />
            <main className="flex-grow pt-0">
              {children}
            </main>
            <SiteFooter />
          </div>
        </GSAPScrollProvider>
      </body>
    </html>
  );
}
