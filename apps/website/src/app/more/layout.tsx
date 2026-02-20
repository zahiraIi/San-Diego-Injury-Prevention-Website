import type { Metadata } from "next";
export const metadata: Metadata = { title: "More", description: "Additional resources and information about the San Diego Injury Prevention Program." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
