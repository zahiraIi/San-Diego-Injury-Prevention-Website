"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Bookmark, Calendar, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface RsvpEvent {
  id: string;
  title: string;
  startTime: string;
  location: string | null;
  rsvpStatus: string;
}

export default function MyRsvpsPage() {
  const { token } = useAuth();
  const [rsvps, setRsvps] = useState<RsvpEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch("/api/me?include=rsvps", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setRsvps(data.rsvps || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-r-transparent" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold">My RSVPs</h1>
        <p className="text-sm text-muted-foreground">Events you&apos;ve signed up for</p>
      </motion.div>

      {rsvps.length === 0 ? (
        <div className="text-center py-16 bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl">
          <Bookmark className="w-12 h-12 mx-auto mb-4 text-accent-blue/40" />
          <p className="text-lg mb-2">No RSVPs yet</p>
          <p className="text-sm text-muted-foreground mb-4">
            Browse events and RSVP to get started
          </p>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Browse Events
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {rsvps.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/events/${event.id}`}
                className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl hover:shadow-md transition-all"
              >
                <div>
                  <p className="font-medium">{event.title}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(event.startTime).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    {event.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full capitalize">
                  {event.rsvpStatus}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
