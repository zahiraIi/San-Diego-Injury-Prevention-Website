"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      } else if (profile && !["admin", "board"].includes(profile.role)) {
        router.replace("/dashboard");
      }
    }
  }, [user, profile, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-r-transparent" />
      </div>
    );
  }

  if (!user || (profile && !["admin", "board"].includes(profile.role))) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-60 transition-all duration-300">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
