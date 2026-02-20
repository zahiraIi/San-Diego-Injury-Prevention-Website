"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Calendar, Bookmark, Users, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface DashboardStats {
  upcomingEvents: number;
  myRsvps: number;
  totalMembers: number;
}

export default function DashboardPage() {
  const { profile, token } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    upcomingEvents: 0,
    myRsvps: 0,
    totalMembers: 0,
  });
  const [recentEvents, setRecentEvents] = useState<
    { id: string; title: string; startTime: string; location: string | null }[]
  >([]);

  useEffect(() => {
    if (!token) return;

    fetch("/api/events?limit=5", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.events) {
          setRecentEvents(data.events);
          setStats((prev) => ({ ...prev, upcomingEvents: data.total || data.events.length }));
        }
      })
      .catch(console.error);
  }, [token]);

  const statCards = [
    {
      label: "Upcoming Events",
      value: stats.upcomingEvents,
      icon: Calendar,
      color: "text-accent-blue",
      bg: "bg-accent-blue/10",
    },
    {
      label: "My RSVPs",
      value: stats.myRsvps,
      icon: Bookmark,
      color: "text-accent-red",
      bg: "bg-accent-red/10",
    },
    {
      label: "Active Members",
      value: stats.totalMembers,
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-1">
          Welcome back, {profile?.fullName?.split(" ")[0] || "there"}
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          Here&apos;s what&apos;s happening at SDIPP
        </p>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Upcoming events */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent-blue" />
            Upcoming Events
          </h2>
          <a href="/events" className="text-sm text-accent-blue hover:underline">
            View all
          </a>
        </div>

        {recentEvents.length === 0 ? (
          <p className="text-muted-foreground text-sm py-8 text-center">
            No upcoming events. Check back soon!
          </p>
        ) : (
          <div className="space-y-3">
            {recentEvents.map((event) => (
              <a
                key={event.id}
                href={`/events/${event.id}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div>
                  <p className="font-medium text-sm">{event.title}</p>
                  {event.location && (
                    <p className="text-xs text-muted-foreground">{event.location}</p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {new Date(event.startTime).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
