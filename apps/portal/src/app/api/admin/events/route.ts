import { NextRequest, NextResponse } from "next/server";
import { getAdminDb, requireAdmin } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// GET /api/admin/events — list all events (including drafts)
export async function GET(req: NextRequest) {
  try {
    const user = await requireAdmin(req);
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      // Single event + RSVPs
      const doc = await getAdminDb().collection("events").doc(id).get();
      if (!doc.exists) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }
      const data = doc.data()!;
      const rsvpSnapshot = await getAdminDb()
        .collection("events")
        .doc(id)
        .collection("rsvps")
        .get();

      const rsvps = rsvpSnapshot.docs.map((d) => ({
        userId: d.id,
        ...d.data(),
        createdAt: d.data().createdAt?.toDate?.()?.toISOString() || "",
      }));

      return NextResponse.json({
        event: {
          id: doc.id,
          ...data,
          startTime: data.startTime?.toDate?.()?.toISOString() || data.startTime,
          endTime: data.endTime?.toDate?.()?.toISOString() || data.endTime || null,
          createdAt: data.createdAt?.toDate?.()?.toISOString() || "",
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || "",
        },
        rsvps,
      });
    }

    const snapshot = await getAdminDb()
      .collection("events")
      .orderBy("startTime", "desc")
      .limit(200)
      .get();

    const events = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        startTime: data.startTime?.toDate?.()?.toISOString() || data.startTime,
        isPublished: data.isPublished || false,
        rsvpCount: data.rsvpCount || 0,
        source: data.source || "portal",
      };
    });

    return NextResponse.json({ events });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    const status = message === "Forbidden" ? 403 : message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

// POST /api/admin/events — create event
export async function POST(req: Request) {
  try {
    const user = await requireAdmin(req);
    const body = await req.json();

    const event = {
      source: "portal",
      notionId: null,
      title: body.title || "Untitled Event",
      description: body.description || "",
      imageUrl: body.imageUrl || null,
      location: body.location || null,
      startTime: body.startTime ? new Date(body.startTime) : new Date(),
      endTime: body.endTime ? new Date(body.endTime) : null,
      capacity: body.capacity || null,
      tags: body.tags || [],
      isPublished: body.isPublished || false,
      externalUrl: body.externalUrl || null,
      createdBy: user.uid,
      rsvpCount: 0,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    const ref = await getAdminDb().collection("events").add(event);

    return NextResponse.json({ id: ref.id, success: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PATCH /api/admin/events?id=xxx — update event
export async function PATCH(req: NextRequest) {
  try {
    await requireAdmin(req);
    const id = req.nextUrl.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const body = await req.json();
    const updates: Record<string, unknown> = {
      updatedAt: FieldValue.serverTimestamp(),
    };

    const allowedFields = [
      "title", "description", "imageUrl", "location",
      "capacity", "tags", "isPublished", "externalUrl",
    ];
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field];
      }
    }
    if (body.startTime) updates.startTime = new Date(body.startTime);
    if (body.endTime) updates.endTime = new Date(body.endTime);
    if (body.endTime === null) updates.endTime = null;

    await getAdminDb().collection("events").doc(id).update(updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE /api/admin/events?id=xxx — delete event
export async function DELETE(req: NextRequest) {
  try {
    await requireAdmin(req);
    const id = req.nextUrl.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    // Delete all RSVPs in subcollection first
    const rsvps = await getAdminDb()
      .collection("events")
      .doc(id)
      .collection("rsvps")
      .get();

    const batch = getAdminDb().batch();
    rsvps.docs.forEach((doc) => batch.delete(doc.ref));
    batch.delete(getAdminDb().collection("events").doc(id));
    await batch.commit();

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
