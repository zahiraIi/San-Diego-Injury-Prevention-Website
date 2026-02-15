"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Clock, MapPin, ExternalLink, X } from "lucide-react";
import type { NotionEvent } from "@/lib/notion";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

/** Parse a Notion date string into a local Date safely. */
function parseDate(dateString: string): Date {
  const iso = dateString.includes("T") ? dateString : dateString + "T00:00:00";
  return new Date(iso);
}

/** Get YYYY-MM-DD key from a Date. */
function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Get all days in a given month, plus padding for the calendar grid. */
function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startPad = firstDay.getDay(); // 0 = Sunday
  const totalDays = lastDay.getDate();

  const days: Array<{ date: Date; inMonth: boolean }> = [];

  // Previous month padding
  for (let i = startPad - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    days.push({ date: d, inMonth: false });
  }

  // Current month
  for (let i = 1; i <= totalDays; i++) {
    days.push({ date: new Date(year, month, i), inMonth: true });
  }

  // Next month padding (fill to complete last week row)
  const remaining = 7 - (days.length % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(year, month + 1, i), inMonth: false });
    }
  }

  return days;
}

function formatTime(dateString: string | null): string | null {
  if (!dateString || !dateString.includes("T")) return null;
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CalendarView() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [events, setEvents] = useState<NotionEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Fetch events for the visible range (full month + padding)
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      // Fetch a 3-month window to cover prev/next month padding
      const from = new Date(currentYear, currentMonth - 1, 1)
        .toISOString()
        .split("T")[0];
      const to = new Date(currentYear, currentMonth + 2, 0)
        .toISOString()
        .split("T")[0];

      try {
        const res = await fetch(`/api/notion-events?from=${from}&to=${to}`);
        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error || `Failed to fetch events (${res.status})`);
        }
        const data = await res.json();
        setEvents(data.events || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currentYear, currentMonth]);

  // Build a map: "YYYY-MM-DD" → NotionEvent[]
  const eventsByDate = useMemo(() => {
    const map = new Map<string, NotionEvent[]>();
    for (const event of events) {
      if (!event.date) continue;
      const d = parseDate(event.date);
      const key = dateKey(d);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(event);
    }
    return map;
  }, [events]);

  const calendarDays = useMemo(
    () => getCalendarDays(currentYear, currentMonth),
    [currentYear, currentMonth]
  );

  const todayKey = dateKey(today);

  // Navigation
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear((y) => y - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((m) => m - 1);
    }
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((y) => y + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((m) => m + 1);
    }
    setSelectedDate(null);
  };

  const goToToday = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
    setSelectedDate(null);
  };

  // Events for the selected day
  const selectedEvents = selectedDate ? eventsByDate.get(selectedDate) ?? [] : [];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* ── Header: Month/Year + navigation ── */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="font-sans text-2xl md:text-3xl text-[#1a3a5c]">
            {MONTHS[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={goToToday}
            className="text-xs font-bold text-accent-red border border-accent-red/30 rounded-full px-3 py-1 hover:bg-accent-red hover:text-white transition-colors"
          >
            Today
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={goToPrevMonth}
            className="p-2 rounded-full hover:bg-[#1a3a5c]/10 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-[#1a3a5c]" />
          </button>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full hover:bg-[#1a3a5c]/10 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-[#1a3a5c]" />
          </button>
        </div>
      </div>

      {/* ── Calendar grid ── */}
      <div className="border border-[#1a3a5c]/15 rounded-2xl overflow-hidden bg-white">
        {/* Weekday header */}
        <div className="grid grid-cols-7 bg-[#1a3a5c]">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="py-2.5 text-center text-xs font-bold text-white/90 tracking-wider uppercase"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7">
          {calendarDays.map(({ date, inMonth }, idx) => {
            const key = dateKey(date);
            const isToday = key === todayKey;
            const isSelected = key === selectedDate;
            const dayEvents = eventsByDate.get(key);
            const hasEvents = dayEvents && dayEvents.length > 0;

            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(isSelected ? null : key)}
                className={`
                  relative min-h-[60px] md:min-h-[80px] p-1.5 md:p-2 border-b border-r border-[#1a3a5c]/8
                  text-left transition-colors duration-150 group
                  ${inMonth ? "bg-white" : "bg-gray-50/60"}
                  ${isSelected ? "bg-accent-red/5 ring-2 ring-accent-red/30 ring-inset" : "hover:bg-[#1a3a5c]/5"}
                `}
              >
                {/* Day number */}
                <span
                  className={`
                    inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold
                    ${isToday ? "bg-accent-red text-white" : ""}
                    ${inMonth ? "text-[#1a3a5c]" : "text-gray-300"}
                  `}
                >
                  {date.getDate()}
                </span>

                {/* Event dots / labels */}
                {hasEvents && inMonth && (
                  <div className="mt-0.5 flex flex-col gap-0.5">
                    {dayEvents.slice(0, 2).map((evt) => (
                      <div
                        key={evt.id}
                        className="text-[10px] md:text-xs leading-tight truncate rounded px-1 py-0.5 bg-accent-red/10 text-accent-red font-medium"
                      >
                        {evt.name}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[10px] text-accent-red/70 font-medium px-1">
                        +{dayEvents.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* Mobile: just dots */}
                {hasEvents && !inMonth && (
                  <div className="flex gap-0.5 mt-1 px-1">
                    {dayEvents.slice(0, 3).map((evt) => (
                      <div
                        key={evt.id}
                        className="w-1.5 h-1.5 rounded-full bg-accent-red/40"
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-3 border-solid border-accent-blue border-r-transparent" />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-6">
          <p className="text-accent-red text-sm">{error}</p>
        </div>
      )}

      {/* ── Selected day panel ── */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="mt-6 border border-[#1a3a5c]/15 rounded-2xl bg-white p-5 md:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-lg md:text-xl text-[#1a3a5c]">
                {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <button
                onClick={() => setSelectedDate(null)}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {selectedEvents.length === 0 ? (
              <p className="text-sm text-gray-400">No events on this day.</p>
            ) : (
              <div className="space-y-4">
                {selectedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border-l-4 border-accent-red pl-4 py-2"
                  >
                    <h4 className="font-sans font-bold text-[#1a3a5c] text-base mb-1">
                      {event.name}
                    </h4>
                    <div className="space-y-1.5 text-sm text-gray-600">
                      {/* Time */}
                      {formatTime(event.date) && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-accent-blue" />
                          <span>
                            {formatTime(event.date)}
                            {formatTime(event.endDate) && ` – ${formatTime(event.endDate)}`}
                          </span>
                        </div>
                      )}
                      {/* Location */}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-accent-red" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      {/* Description */}
                      {event.description && (
                        <p className="text-gray-500 mt-1">{event.description}</p>
                      )}
                      {/* Link */}
                      {event.url && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent-blue font-semibold hover:underline mt-1"
                        >
                          View Details <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
