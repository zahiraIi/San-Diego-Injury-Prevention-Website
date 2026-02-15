import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact", description: "Get in touch with the San Diego Injury Prevention Program for questions, partnerships, or volunteer opportunities." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
