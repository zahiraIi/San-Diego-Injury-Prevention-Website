import type { Metadata } from "next";
export const metadata: Metadata = { title: "Resources", description: "Resources for community members, partners, and volunteers in the San Diego Injury Prevention Program." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
