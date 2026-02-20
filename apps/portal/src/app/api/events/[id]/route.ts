import { NextResponse } from "next/server";
import { getAdminDb, verifyAuth } from "@/lib/firebase-admin";

// GET /api/events/[id] — event detail
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await verifyAuth(req);
    const { id } = await params;

    const doc = await getAdminDb().collection("events").doc(id).get();

    if (!doc.exists) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const data = doc.data()!;
    const event = {
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
      isPublished: data.isPublished,
    };

    return NextResponse.json({ event });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
