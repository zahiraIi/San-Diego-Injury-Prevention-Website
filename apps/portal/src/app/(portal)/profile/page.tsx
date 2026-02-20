"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import {
  Calendar,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
  CalendarCheck,
  Star,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.1a8.16 8.16 0 0 0 4.76 1.52v-3.4c-.83 0-1.63-.18-2.36-.53h-.01z" />
    </svg>
  );
}

const socialIcons = {
  instagram: Instagram,
  x: XIcon,
  youtube: Youtube,
  tiktok: TikTokIcon,
  linkedin: Linkedin,
  website: Globe,
} as const;

const socialUrls: Record<string, string> = {
  instagram: "https://instagram.com/",
  x: "https://x.com/",
  youtube: "https://youtube.com/@",
  tiktok: "https://tiktok.com/@",
  linkedin: "https://linkedin.com/in/",
  website: "",
};

export default function ProfilePage() {
  const { profile, token } = useAuth();
  const [stats, setStats] = useState({ hosted: 0, attended: 0 });

  useEffect(() => {
    if (!token) return;
    // Fetch RSVP count as "attended"
    fetch("/api/events", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Count events the user created as "hosted"
          const hosted = data.filter((e: { createdBy?: string }) => e.createdBy === profile?.uid).length;
          setStats((prev) => ({ ...prev, hosted }));
        }
      })
      .catch(() => {});

    // Count RSVPs
    fetch("/api/me/rsvps", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => { if (r.ok) return r.json(); return []; })
      .then((data) => {
        if (Array.isArray(data)) {
          setStats((prev) => ({ ...prev, attended: data.length }));
        }
      })
      .catch(() => {});
  }, [token, profile?.uid]);

  const initials = profile?.fullName
    ? profile.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  const joinedDate = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : null;

  const activeSocials = profile?.socialLinks
    ? Object.entries(profile.socialLinks).filter(([, val]) => val)
    : [];

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-[#0f2a42] to-[#1a3a5c] rounded-2xl p-8 text-white relative overflow-hidden"
      >
        {/* Edit button */}
        <Link
          href="/settings"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          title="Edit profile"
        >
          <Settings className="w-4 h-4" />
        </Link>

        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-white/10 flex items-center justify-center ring-4 ring-white/20 mb-4">
            {profile?.avatarUrl ? (
              <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-white/80">{initials}</span>
            )}
          </div>

          {/* Name & username */}
          <h1 className="text-xl font-bold">{profile?.fullName || "User"}</h1>
          {profile?.username && (
            <p className="text-white/60 text-sm">@{profile.username}</p>
          )}

          {/* Bio */}
          {profile?.bio && (
            <p className="text-white/70 text-sm mt-2 max-w-md">{profile.bio}</p>
          )}

          {/* Joined date */}
          {joinedDate && (
            <div className="flex items-center gap-1.5 text-white/50 text-xs mt-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Joined {joinedDate}</span>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5 text-sm">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="font-semibold">{stats.hosted}</span>
              <span className="text-white/60">Hosted</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-1.5 text-sm">
              <CalendarCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">{stats.attended}</span>
              <span className="text-white/60">Attended</span>
            </div>
          </div>

          {/* Social links */}
          {activeSocials.length > 0 && (
            <div className="flex items-center gap-3 mt-5">
              {activeSocials.map(([key, value]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                const url = socialUrls[key]
                  ? `${socialUrls[key]}${value}`
                  : (value as string).startsWith("http")
                    ? (value as string)
                    : `https://${value}`;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    title={key}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>

      {/* Events section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 bg-white/60 backdrop-blur-sm border border-border rounded-xl p-8"
      >
        <h2 className="text-base font-semibold mb-4">Events</h2>
        <div className="text-center py-8">
          <CalendarCheck className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">Nothing Here, Yet</p>
          <p className="text-muted-foreground/60 text-xs mt-1">Events you host or attend will show up here.</p>
          <Link
            href="/events"
            className="inline-block mt-4 text-sm text-accent-blue hover:underline"
          >
            Browse Events
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
