"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/auth-context";

type RsvpStatus = "going" | "maybe" | "not_going" | null;

export function useRsvp(eventId: string) {
  const { token } = useAuth();
  const [status, setStatus] = useState<RsvpStatus>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || !eventId) return;

    fetch(`/api/events/${eventId}/rsvp`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setStatus(data.status || null))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token, eventId]);

  const rsvp = useCallback(
    async (newStatus: "going" | "maybe") => {
      if (!token) return;
      setLoading(true);

      try {
        const res = await fetch(`/api/events/${eventId}/rsvp`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        });
        if (res.ok) setStatus(newStatus);
      } catch (err) {
        console.error("RSVP error:", err);
      } finally {
        setLoading(false);
      }
    },
    [token, eventId]
  );

  const cancelRsvp = useCallback(async () => {
    if (!token) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/events/${eventId}/rsvp`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setStatus(null);
    } catch (err) {
      console.error("Cancel RSVP error:", err);
    } finally {
      setLoading(false);
    }
  }, [token, eventId]);

  return { status, loading, rsvp, cancelRsvp };
}
