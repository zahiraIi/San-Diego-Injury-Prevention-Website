import { NextResponse } from "next/server";
import { getAdminDb, verifyAuth } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// GET /api/events/[id]/rsvp — get current user's RSVP
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth(req);
    const { id } = await params;

    const rsvpDoc = await getAdminDb()
      .collection("events")
      .doc(id)
      .collection("rsvps")
      .doc(user.uid)
      .get();

    if (!rsvpDoc.exists) {
      return NextResponse.json({ status: null });
    }

    return NextResponse.json({ status: rsvpDoc.data()?.status || null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// POST /api/events/[id]/rsvp — create or update RSVP
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth(req);
    const { id } = await params;
    const body = await req.json();
    const status = body.status || "going";

    if (!["going", "maybe"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const eventRef = getAdminDb().collection("events").doc(id);
    const event = await eventRef.get();
    if (!event.exists) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // Check capacity
    const eventData = event.data()!;
    if (
      eventData.capacity &&
      eventData.rsvpCount >= eventData.capacity &&
      status === "going"
    ) {
      // Check if user already has an RSVP
      const existingRsvp = await eventRef
        .collection("rsvps")
        .doc(user.uid)
        .get();
      if (!existingRsvp.exists) {
        return NextResponse.json({ error: "Event is full" }, { status: 409 });
      }
    }

    const rsvpRef = eventRef.collection("rsvps").doc(user.uid);
    const existingRsvp = await rsvpRef.get();
    const wasGoing = existingRsvp.exists && existingRsvp.data()?.status === "going";

    await rsvpRef.set({
      userId: user.uid,
      userName: user.fullName,
      status,
      createdAt: FieldValue.serverTimestamp(),
    });

    // Update denormalized count
    if (status === "going" && !wasGoing) {
      await eventRef.update({ rsvpCount: FieldValue.increment(1) });
    } else if (status !== "going" && wasGoing) {
      await eventRef.update({ rsvpCount: FieldValue.increment(-1) });
    }

    return NextResponse.json({ success: true, status });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE /api/events/[id]/rsvp — cancel RSVP
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth(req);
    const { id } = await params;

    const eventRef = getAdminDb().collection("events").doc(id);
    const rsvpRef = eventRef.collection("rsvps").doc(user.uid);
    const rsvpDoc = await rsvpRef.get();

    if (rsvpDoc.exists) {
      const wasGoing = rsvpDoc.data()?.status === "going";
      await rsvpRef.delete();
      if (wasGoing) {
        await eventRef.update({ rsvpCount: FieldValue.increment(-1) });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
