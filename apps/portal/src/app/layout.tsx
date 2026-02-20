import type { Metadata, Viewport } from "next";
import { Rethink_Sans } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

const rethinkSans = Rethink_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "SDIPP Portal",
    template: "%s | SDIPP Portal",
  },
  description: "Member portal for the San Diego Injury Prevention Program.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} font-sans antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
