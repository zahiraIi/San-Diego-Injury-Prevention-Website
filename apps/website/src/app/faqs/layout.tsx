import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about joining and volunteering with SDIPP.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
