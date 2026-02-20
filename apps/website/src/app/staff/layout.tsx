import type { Metadata } from "next";
export const metadata: Metadata = { title: "Our Staff", description: "Meet the SDIPP board members and staff who lead our injury prevention initiatives." };
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
