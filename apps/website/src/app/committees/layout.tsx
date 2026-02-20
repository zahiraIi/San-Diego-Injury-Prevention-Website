import type { Metadata } from "next";
export const metadata: Metadata = { title: "Committees", description: "Explore SDIPP committees including outreach, legal, research, and more." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
