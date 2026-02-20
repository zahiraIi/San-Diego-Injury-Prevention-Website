"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface AdminEvent {
  id: string;
  title: string;
  startTime: string;
  isPublished: boolean;
  rsvpCount: number;
  source: string;
}

export default function AdminEventsPage() {
  const { token } = useAuth();
  const [events, setEvents] = useState<AdminEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch("/api/admin/events", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setEvents(data.events || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    if (!token) return;

    await fetch(`/api/admin/events?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setEvents(events.filter((e) => e.id !== id));
  };

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
          <h1 className="text-2xl font-bold">Manage Events</h1>
          <p className="text-sm text-muted-foreground">{events.length} events</p>
        </div>
        <Link
          href="/admin/events/new"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f2a42] text-white text-sm font-medium hover:bg-[#1a3a5c] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Event
        </Link>
      </motion.div>

      <div className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-muted-foreground">Event</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
              <th className="text-left p-4 font-medium text-muted-foreground">RSVPs</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
              <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground capitalize">{event.source}</p>
                </td>
                <td className="p-4 text-muted-foreground">
                  {new Date(event.startTime).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="p-4 text-muted-foreground">{event.rsvpCount}</td>
                <td className="p-4">
                  {event.isPublished ? (
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                      <Eye className="w-3 h-3" /> Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                      <EyeOff className="w-3 h-3" /> Draft
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/events/${event.id}`}
                      className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4 text-muted-foreground" />
                    </Link>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {events.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No events yet. Create your first event.
          </div>
        )}
      </div>
    </div>
  );
}
