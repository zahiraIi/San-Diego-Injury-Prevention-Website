import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ResizableNavbar from "@/components/ui/ResizableNavbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { Instagram, Link as LinkIcon } from "lucide-react";

const rosehot = localFont({
  src: "./fonts/Rosehot.ttf",
  variable: "--font-rosehot",
  display: "swap",
});

export const metadata: Metadata = {
  title: "San Diego Injury Prevention Program",
  description: "Promoting fitness and mobility among older individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rosehot.variable} antialiased`}>
        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            <ResizableNavbar />
            <main className="flex-grow pt-16 md:pt-20">
              {children}
            </main>
            <footer className="py-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-6 mb-2">
                  <a
                    href="https://www.instagram.com/sd__ipp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-blue hover:text-accent-red transition-colors text-lg font-bold"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <span className="text-foreground/30">|</span>
                  <a
                    href="https://linktr.ee/sdinjurypreventionprogram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-blue hover:text-accent-red transition-colors text-lg font-bold"
                  >
                    <LinkIcon className="w-5 h-5" />
                    Linktree
                  </a>
                </div>
                <p className="text-sm opacity-60">
                  &copy; {new Date().getFullYear()} San Diego Injury Prevention Program
                </p>
              </div>
            </footer>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
