import { NextRequest, NextResponse } from "next/server";
import { getAdminDb, verifyAuth } from "@/lib/firebase-admin";

// GET /api/events — list published events
export async function GET(req: NextRequest) {
  try {
    await verifyAuth(req);

    const limit = Math.min(
      Number(req.nextUrl.searchParams.get("limit")) || 50,
      100
    );

    const snapshot = await getAdminDb()
      .collection("events")
      .where("isPublished", "==", true)
      .orderBy("startTime", "asc")
      .limit(limit)
      .get();

    const events = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        description: data.description || "",
        startTime: data.startTime?.toDate?.()?.toISOString() || data.startTime,
        endTime: data.endTime?.toDate?.()?.toISOString() || data.endTime || null,
        location: data.location || null,
        capacity: data.capacity || null,
        rsvpCount: data.rsvpCount || 0,
        imageUrl: data.imageUrl || null,
        tags: data.tags || [],
        externalUrl: data.externalUrl || null,
        source: data.source || "portal",
      };
    });

    return NextResponse.json({ events, total: events.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch events";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
