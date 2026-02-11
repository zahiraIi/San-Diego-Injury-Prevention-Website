import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import StaticNavbar from "@/components/ui/StaticNavbar";
import SiteFooter from "@/components/ui/SiteFooter";
import SmoothScroll from "@/components/ui/SmoothScroll";

const rethinkSans = Rethink_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "San Diego Injury Prevention Program",
  description: "Promoting fitness and mobility among older individuals.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} font-sans antialiased`}>
        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            <StaticNavbar />
            <main className="flex-grow pt-0"> {/* Removed pt-16 since navbar is absolute/transparent over hero */}
              {children}
            </main>
            <SiteFooter />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
