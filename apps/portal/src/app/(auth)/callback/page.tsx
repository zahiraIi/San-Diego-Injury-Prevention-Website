"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function CallbackPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      router.replace(user ? "/dashboard" : "/login");
    }
  }, [user, loading, router]);

  return (
    <div className="text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-r-transparent mx-auto" />
      <p className="text-white/80 text-sm mt-4">Completing sign in...</p>
    </div>
  );
}
