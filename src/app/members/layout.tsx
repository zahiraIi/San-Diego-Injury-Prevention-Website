import type { Metadata } from "next";
export const metadata: Metadata = { title: "Members", description: "Current members of the San Diego Injury Prevention Program." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
