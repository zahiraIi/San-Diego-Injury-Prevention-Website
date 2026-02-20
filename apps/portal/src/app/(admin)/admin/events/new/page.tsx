"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewEventPage() {
  const { token } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
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

      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to create event");

      router.push("/admin/events");
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    } finally {
      setSaving(false);
    }
  };

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
        className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-6"
      >
        <h1 className="text-xl font-bold mb-6">Create New Event</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Start Date & Time *</label>
              <input
                type="datetime-local"
                value={form.startTime}
                onChange={(e) => setForm({ ...form, startTime: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">End Date & Time</label>
              <input
                type="datetime-local"
                value={form.endTime}
                onChange={(e) => setForm({ ...form, endTime: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Capacity</label>
              <input
                type="number"
                value={form.capacity}
                onChange={(e) => setForm({ ...form, capacity: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
                placeholder="Leave empty for unlimited"
                min={1}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tags (comma-separated)</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
              placeholder="workshop, social, health fair"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">External URL</label>
            <input
              type="url"
              value={form.externalUrl}
              onChange={(e) => setForm({ ...form, externalUrl: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
              className="w-4 h-4 rounded border-border text-accent-blue focus:ring-accent-blue/30"
            />
            <span className="text-sm font-medium">Publish immediately</span>
          </label>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f2a42] text-white text-sm font-medium hover:bg-[#1a3a5c] transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? "Creating..." : "Create Event"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
