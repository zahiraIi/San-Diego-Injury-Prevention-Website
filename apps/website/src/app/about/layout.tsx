import type { Metadata } from "next";
export const metadata: Metadata = { title: "About", description: "Learn about the San Diego Injury Prevention Program, our mission, and the team behind our community outreach." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
