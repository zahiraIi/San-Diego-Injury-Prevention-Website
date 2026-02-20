"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface PortalEvent {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string | null;
  location: string | null;
  capacity: number | null;
  rsvpCount: number;
  imageUrl: string | null;
  tags: string[];
  externalUrl: string | null;
}

export default function EventsPage() {
  const { token } = useAuth();
  const [events, setEvents] = useState<PortalEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch("/api/events", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.events || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  const formatTime = (dateStr: string) =>
    new Date(dateStr).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-r-transparent" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h1 className="text-2xl font-bold">Events</h1>
          <p className="text-sm text-muted-foreground">Browse and RSVP to upcoming events</p>
        </div>
      </motion.div>

      {events.length === 0 ? (
        <div className="text-center py-16 bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-accent-blue/40" />
          <p className="text-lg mb-2">No upcoming events</p>
          <p className="text-sm text-muted-foreground">
            Check back soon for workshops, health fairs, and socials.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                href={`/events/${event.id}`}
                className="block bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-5 hover:shadow-md hover:border-accent-blue/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-base leading-tight">{event.title}</h3>
                  {event.tags.length > 0 && (
                    <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded-full">
                      {event.tags[0]}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatDate(event.startTime)} at {formatTime(event.startTime)}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>
                      {event.rsvpCount} going
                      {event.capacity && ` / ${event.capacity} spots`}
                    </span>
                  </div>
                </div>

                {event.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                )}

                {event.externalUrl && (
                  <div className="mt-3 flex items-center gap-1 text-xs text-accent-blue">
                    <ExternalLink className="w-3 h-3" />
                    <span>External link</span>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
