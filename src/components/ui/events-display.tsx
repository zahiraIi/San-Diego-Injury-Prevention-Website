"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  htmlLink?: string;
}

interface EventsDisplayProps {
  calendarId?: string;
}

export default function EventsDisplay({ calendarId }: EventsDisplayProps) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/calendar-events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ calendarId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.events || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load events");
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [calendarId]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "TBD";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent-blue border-r-transparent"></div>
        <p className="mt-4 text-accent-blue">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-accent-red mb-4">{error}</p>
        <p className="text-sm text-muted-foreground">
          Please check your calendar configuration.
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl opacity-70 mb-8">
          Check back soon for our latest calendar of workshops, health fairs, and socials.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {events.map((event) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white/60 p-6 rounded-lg shadow-sm border border-accent-blue/10 text-left hover:shadow-md transition-shadow"
        >
          <div className="text-accent-red font-bold text-sm mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            UPCOMING
          </div>
          <h3 className="text-xl font-rosehot font-bold mb-3">{event.summary}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-2 text-sm opacity-70">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>{formatDate(event.start.dateTime || event.start.date)}</p>
                {event.start.dateTime && (
                  <p className="text-xs">{formatTime(event.start.dateTime)}</p>
                )}
              </div>
            </div>
            
            {event.location && (
              <div className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>{event.location}</p>
              </div>
            )}
          </div>

          {event.description && (
            <p className="text-sm opacity-60 mb-4 line-clamp-2">{event.description}</p>
          )}

          {event.htmlLink && (
            <a
              href={event.htmlLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue font-bold text-sm hover:underline inline-flex items-center gap-1"
            >
              View Details
              <span>&rarr;</span>
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}

