"use client";

import { useAuth } from "@/lib/auth-context";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const { profile, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  const initials = profile?.fullName
    ? profile.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  return (
    <header className="sticky top-0 z-30 h-14 bg-white/80 backdrop-blur-sm border-b border-border flex items-center justify-between px-6">
      <div />
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium leading-tight">{profile?.fullName || "User"}</p>
          <p className="text-xs text-muted-foreground capitalize">{profile?.role || "member"}</p>
        </div>

        <Link
          href="/settings"
          className="w-8 h-8 rounded-full overflow-hidden bg-accent-blue/10 flex items-center justify-center text-accent-blue hover:ring-2 hover:ring-accent-blue/30 transition-all"
        >
          {profile?.avatarUrl ? (
            <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs font-bold">{initials}</span>
          )}
        </Link>

        <button
          onClick={handleSignOut}
          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          title="Sign out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
