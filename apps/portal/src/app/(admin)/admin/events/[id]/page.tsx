"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Users } from "lucide-react";
import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface EventData {
  id: string;
  title: string;
  description: string;
  location: string | null;
  startTime: string;
  endTime: string | null;
  capacity: number | null;
  tags: string[];
  externalUrl: string | null;
  isPublished: boolean;
  rsvpCount: number;
}

interface Rsvp {
  userId: string;
  userName: string;
  status: string;
  createdAt: string;
}

export default function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { token } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    startTime: "",
    endTime: "",
    capacity: "",
    tags: "",
    externalUrl: "",
    isPublished: false,
  });

  useEffect(() => {
    if (!token) return;

    fetch(`/api/admin/events?id=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.event) {
          const e = data.event as EventData;
          setForm({
            title: e.title,
            description: e.description || "",
            location: e.location || "",
            startTime: e.startTime ? new Date(e.startTime).toISOString().slice(0, 16) : "",
            endTime: e.endTime ? new Date(e.endTime).toISOString().slice(0, 16) : "",
            capacity: e.capacity ? String(e.capacity) : "",
            tags: e.tags.join(", "),
            externalUrl: e.externalUrl || "",
            isPublished: e.isPublished,
          });
          setRsvps(data.rsvps || []);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setSaving(true);

    try {
      const body = {
        ...form,
        capacity: form.capacity ? Number(form.capacity) : null,
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : [],
        externalUrl: form.externalUrl || null,
        location: form.location || null,
        endTime: form.endTime || null,
      };

      const res = await fetch(`/api/admin/events?id=${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to update");
      router.push("/admin/events");
    } catch {
      alert("Failed to update event");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-r-transparent" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <Link
        href="/admin/events"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to events
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-6 mb-6"
      >
        <h1 className="text-xl font-bold mb-6">Edit Event</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title *</label>
            <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue resize-none" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Start *</label>
              <input type="datetime-local" value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">End</label>
              <input type="datetime-local" value={form.endTime} onChange={(e) => setForm({ ...form, endTime: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Capacity</label>
              <input type="number" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" min={1} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tags</label>
            <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">External URL</label>
            <input type="url" value={form.externalUrl} onChange={(e) => setForm({ ...form, externalUrl: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={form.isPublished} onChange={(e) => setForm({ ...form, isPublished: e.target.checked })} className="w-4 h-4 rounded border-border text-accent-blue focus:ring-accent-blue/30" />
            <span className="text-sm font-medium">Published</span>
          </label>

          <button type="submit" disabled={saving} className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f2a42] text-white text-sm font-medium hover:bg-[#1a3a5c] transition-colors disabled:opacity-50">
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </motion.div>

      {/* RSVP viewer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-6"
      >
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-accent-blue" />
          RSVPs ({rsvps.length})
        </h2>

        {rsvps.length === 0 ? (
          <p className="text-sm text-muted-foreground">No RSVPs yet.</p>
        ) : (
          <div className="space-y-2">
            {rsvps.map((rsvp) => (
              <div key={rsvp.userId} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="text-sm font-medium">{rsvp.userName}</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full capitalize">{rsvp.status}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
