"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import type { NotionEvent } from "@/lib/notion";

interface EventsDisplayProps {
  /** Maximum number of events to show (default: all fetched) */
  maxDisplay?: number;
}

export default function EventsDisplay({ maxDisplay }: EventsDisplayProps) {
  const [events, setEvents] = useState<NotionEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/notion-events");

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(
            data?.error || `Failed to fetch events (${response.status})`
          );
        }

        const data = await response.json();
        const fetched: NotionEvent[] = data.events || [];
        setEvents(maxDisplay ? fetched.slice(0, maxDisplay) : fetched);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load events"
        );
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [maxDisplay]);

  // ─── Formatters ──────────────────────────────────────────────────────────

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "TBD";
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string | null) => {
    if (!dateString || !dateString.includes("T")) return null;
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const formatDateRange = (start: string | null, end: string | null) => {
    const startDate = formatDate(start);
    if (!end) return startDate;

    const startDay = start?.split("T")[0];
    const endDay = end?.split("T")[0];

    // Same day – just show start date
    if (startDay === endDay) return startDate;

    const endDate = formatDate(end);
    return `${startDate} – ${endDate}`;
  };

  // ─── States ──────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent-blue border-r-transparent" />
        <p className="mt-4 text-accent-blue/80 text-sm">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-accent-red mb-3 font-medium">{error}</p>
        <p className="text-sm text-muted-foreground opacity-70">
          Please check your Notion integration configuration.
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-16">
        <Calendar className="w-12 h-12 mx-auto mb-4 text-accent-blue/40" />
        <p className="text-xl opacity-70 mb-2">No upcoming events</p>
        <p className="text-sm text-muted-foreground opacity-60">
          Check back soon for our latest calendar of workshops, health fairs,
          and socials.
        </p>
      </div>
    );
  }

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-accent-blue/10 hover:border-accent-blue/30 shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Date badge */}
          {event.date && (
            <div className="absolute -top-3 left-5 bg-accent-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
          )}

          <div className="pt-3">
            <h3 className="text-lg font-rosehot font-bold mb-3 leading-tight">
              {event.name}
            </h3>

            <div className="space-y-2 mb-4">
              {/* Date & time */}
              <div className="flex items-start gap-2 text-sm opacity-70">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-blue" />
                <div>
                  <p>{formatDateRange(event.date, event.endDate)}</p>
                  {formatTime(event.date) && (
                    <p className="text-xs opacity-80">
                      {formatTime(event.date)}
                      {formatTime(event.endDate) &&
                        ` – ${formatTime(event.endDate)}`}
                    </p>
                  )}
                </div>
              </div>

              {/* Location */}
              {event.location && (
                <div className="flex items-start gap-2 text-sm opacity-70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-red" />
                  <p>{event.location}</p>
                </div>
              )}
            </div>

            {/* Description */}
            {event.description && (
              <p className="text-sm opacity-60 mb-4 line-clamp-3">
                {event.description}
              </p>
            )}

            {/* Link */}
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-blue font-semibold text-sm hover:underline transition-colors"
              >
                View Details
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
