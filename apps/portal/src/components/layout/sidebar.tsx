"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  Bookmark,
  UserCircle,
  Shield,
  Settings,
  Users,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useState } from "react";

const memberNav = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "My RSVPs", href: "/my-rsvps", icon: Bookmark },
  { name: "Profile", href: "/profile", icon: UserCircle },
  { name: "Settings", href: "/settings", icon: Settings },
];

const adminNav = [
  { name: "Admin", href: "/admin", icon: Shield },
  { name: "Manage Events", href: "/admin/events", icon: Calendar },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Contacts", href: "/admin/contacts", icon: Mail },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { profile } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const isAdmin = profile?.role === "admin" || profile?.role === "board";

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-full bg-[#0f2a42] text-white transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold flex-shrink-0">
          S
        </div>
        {!collapsed && (
          <span className="font-semibold text-sm truncate">SDIPP Portal</span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        <p className={cn("text-[10px] uppercase tracking-wider text-white/40 px-2 mb-2", collapsed && "sr-only")}>
          Member
        </p>
        {memberNav.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              )}
              title={collapsed ? item.name : undefined}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}

        {isAdmin && (
          <>
            <div className="my-3 border-t border-white/10" />
            <p className={cn("text-[10px] uppercase tracking-wider text-white/40 px-2 mb-2", collapsed && "sr-only")}>
              Admin
            </p>
            {adminNav.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </>
        )}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-10 border-t border-white/10 text-white/50 hover:text-white transition-colors"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </aside>
  );
}
