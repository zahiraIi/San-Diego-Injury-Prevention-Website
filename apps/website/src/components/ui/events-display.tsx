"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { NotionEvent } from "@/lib/notion";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

interface EventsDisplayProps {
  year?: number;
  month?: number;
  onMonthChange?: (year: number, month: number) => void;
}

export default function EventsDisplay({
  year: controlledYear,
  month: controlledMonth,
  onMonthChange,
}: EventsDisplayProps) {
  const today = new Date();
  const [internalYear, setInternalYear] = useState(
    controlledYear ?? today.getFullYear(),
  );
  const [internalMonth, setInternalMonth] = useState(
    controlledMonth ?? today.getMonth(),
  );

  const activeYear = controlledYear ?? internalYear;
  const activeMonth = controlledMonth ?? internalMonth;

  const [events, setEvents] = useState<NotionEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (controlledYear !== undefined) setInternalYear(controlledYear);
    if (controlledMonth !== undefined) setInternalMonth(controlledMonth);
  }, [controlledYear, controlledMonth]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/notion-events");
        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(
            data?.error || `Failed to fetch events (${response.status})`,
          );
        }
        const data = await response.json();
        setEvents(data.events || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load events",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (!event.date) return false;
      const iso = event.date.includes("T")
        ? event.date
        : event.date + "T00:00:00";
      const d = new Date(iso);
      return d.getFullYear() === activeYear && d.getMonth() === activeMonth;
    });
  }, [events, activeYear, activeMonth]);

  const navigate = (dir: -1 | 1) => {
    setDirection(dir);
    let newMonth = activeMonth + dir;
    let newYear = activeYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    if (onMonthChange) {
      onMonthChange(newYear, newMonth);
    } else {
      setInternalYear(newYear);
      setInternalMonth(newMonth);
    }
  };

  const goToToday = () => {
    setDirection(0);
    const y = today.getFullYear();
    const m = today.getMonth();
    if (onMonthChange) {
      onMonthChange(y, m);
    } else {
      setInternalYear(y);
      setInternalMonth(m);
    }
  };

  const isCurrentMonth =
    activeYear === today.getFullYear() && activeMonth === today.getMonth();

  // ─── Formatters ──────────────────────────────────────────────────────────

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "TBD";
    const iso = dateString.includes("T")
      ? dateString
      : dateString + "T00:00:00";
    const date = new Date(iso);
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

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <div>
      {/* Month navigation header */}
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-sans text-[#1B2A53]">
            {MONTHS[activeMonth]} {activeYear}
          </h2>
          {!isCurrentMonth && (
            <button
              onClick={goToToday}
              className="text-xs font-bold text-accent-red border border-accent-red/30 rounded-full px-3 py-1 hover:bg-accent-red hover:text-white transition-colors"
            >
              Today
            </button>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-[#1B2A53]/10 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-[#1B2A53]" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="p-2 rounded-full hover:bg-[#1B2A53]/10 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-[#1B2A53]" />
          </button>
        </div>
      </div>

      {/* Events grid with animated transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${activeYear}-${activeMonth}`}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.3 }}
        >
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-accent-blue/40" />
              <p className="text-xl opacity-70 mb-2">
                No events in {MONTHS[activeMonth]}
              </p>
              <p className="text-sm text-muted-foreground opacity-60">
                Try navigating to another month to find events.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-accent-blue/10 hover:border-accent-blue/30 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {event.date && (
                    <div className="absolute -top-3 left-5 bg-accent-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {new Date(
                        event.date.includes("T")
                          ? event.date
                          : event.date + "T00:00:00",
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  )}

                  <div className="pt-3">
                    <h3 className="text-lg font-sans font-bold mb-3 leading-tight">
                      {event.name}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-sm opacity-70">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-blue" />
                        <div>
                          <p>
                            {formatDateRange(event.date, event.endDate)}
                          </p>
                          {formatTime(event.date) && (
                            <p className="text-xs opacity-80">
                              {formatTime(event.date)}
                              {formatTime(event.endDate) &&
                                ` – ${formatTime(event.endDate)}`}
                            </p>
                          )}
                        </div>
                      </div>

                      {event.location && (
                        <div className="flex items-start gap-2 text-sm opacity-70">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-red" />
                          <p>{event.location}</p>
                        </div>
                      )}
                    </div>

                    {event.description && (
                      <p className="text-sm opacity-60 mb-4 line-clamp-3">
                        {event.description}
                      </p>
                    )}

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
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
