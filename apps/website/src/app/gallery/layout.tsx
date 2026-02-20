import type { Metadata } from "next";
export const metadata: Metadata = { title: "Gallery", description: "Photos from SDIPP events, volunteering sessions, health fairs, and community outreach activities." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
