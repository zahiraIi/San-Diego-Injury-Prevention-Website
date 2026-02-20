"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/auth-context";

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

export function useEvents(limit?: number) {
  const { token } = useAuth();
  const [events, setEvents] = useState<PortalEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);

    try {
      const params = limit ? `?limit=${limit}` : "";
      const res = await fetch(`/api/events${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch events");
      const data = await res.json();
      setEvents(data.events || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load events");
    } finally {
      setLoading(false);
    }
  }, [token, limit]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return { events, loading, error, refetch: fetchEvents };
}
