import type { Metadata } from "next";
export const metadata: Metadata = { title: "Recognitions", description: "Awards and recognitions earned by SDIPP members and the organization." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
