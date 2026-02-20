import type { Metadata } from "next";
export const metadata: Metadata = { title: "Events", description: "View upcoming SDIPP events, health fairs, fitness classes, and community outreach opportunities in San Diego." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
