"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowLeft, ExternalLink, Check, X } from "lucide-react";
import { useEffect, useState, use } from "react";
import Link from "next/link";

interface EventDetail {
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
  source: string;
}

interface RSVPStatus {
  status: "going" | "maybe" | "not_going" | null;
}

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { token, user } = useAuth();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [rsvp, setRsvp] = useState<RSVPStatus>({ status: null });
  const [loading, setLoading] = useState(true);
  const [rsvpLoading, setRsvpLoading] = useState(false);

  useEffect(() => {
    if (!token) return;

    Promise.all([
      fetch(`/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((r) => r.json()),
      fetch(`/api/events/${id}/rsvp`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((r) => r.json()),
    ])
      .then(([eventData, rsvpData]) => {
        setEvent(eventData.event || null);
        setRsvp({ status: rsvpData.status || null });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token, id]);

  const handleRsvp = async (status: "going" | "not_going") => {
    if (!token || !user) return;
    setRsvpLoading(true);

    try {
      if (status === "not_going" && rsvp.status) {
        await fetch(`/api/events/${id}/rsvp`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        setRsvp({ status: null });
        if (event) setEvent({ ...event, rsvpCount: event.rsvpCount - 1 });
      } else {
        await fetch(`/api/events/${id}/rsvp`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        });
        const wasGoing = rsvp.status === "going";
        setRsvp({ status });
        if (event && !wasGoing && status === "going") {
          setEvent({ ...event, rsvpCount: event.rsvpCount + 1 });
        }
      }
    } catch (err) {
      console.error("RSVP error:", err);
    } finally {
      setRsvpLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-r-transparent" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-20">
        <p className="text-lg mb-4">Event not found</p>
        <Link href="/events" className="text-accent-blue hover:underline text-sm">
          Back to events
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <Link
        href="/events"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to events
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl overflow-hidden"
      >
        {event.imageUrl && (
          <div className="h-48 bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 flex items-center justify-center">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {event.tags.map((tag) => (
              <span key={tag} className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-4">{event.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent-blue" />
              <span>
                {new Date(event.startTime).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-blue" />
              <span>
                {new Date(event.startTime).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })}
                {event.endTime && (
                  <>
                    {" – "}
                    {new Date(event.endTime).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </>
                )}
              </span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-red" />
                <span>{event.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>
                {event.rsvpCount} going
                {event.capacity && ` / ${event.capacity} spots`}
              </span>
            </div>
          </div>

          {event.description && (
            <div className="prose prose-sm max-w-none mb-6">
              <p className="whitespace-pre-wrap">{event.description}</p>
            </div>
          )}

          {event.externalUrl && (
            <a
              href={event.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-blue text-sm font-medium hover:underline mb-6"
            >
              View external page
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {/* RSVP buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <button
              onClick={() => handleRsvp("going")}
              disabled={rsvpLoading}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 ${
                rsvp.status === "going"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              }`}
            >
              <Check className="w-4 h-4" />
              {rsvp.status === "going" ? "Going" : "RSVP Going"}
            </button>

            {rsvp.status && (
              <button
                onClick={() => handleRsvp("not_going")}
                disabled={rsvpLoading}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted/50 transition-colors disabled:opacity-50"
              >
                <X className="w-4 h-4" />
                Cancel RSVP
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
