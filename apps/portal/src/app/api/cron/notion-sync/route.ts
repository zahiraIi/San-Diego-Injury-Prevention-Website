import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { fetchNotionEvents } from "@/lib/notion";
import { FieldValue } from "firebase-admin/firestore";

// POST /api/cron/notion-sync — sync events from Notion to Firestore
// Called by Vercel Cron daily, or manually by admin
export async function POST(req: NextRequest) {
  try {
    // Verify either cron secret or admin auth
    const cronSecret = req.headers.get("authorization");
    const isCron = cronSecret === `Bearer ${process.env.CRON_SECRET}`;

    if (!isCron) {
      // Check admin auth for manual trigger
      const token = req.headers.get("Authorization")?.replace("Bearer ", "");
      if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const { getAdminAuth } = await import("@/lib/firebase-admin");
      const decoded = await getAdminAuth().verifyIdToken(token);
      const userDoc = await getAdminDb().collection("users").doc(decoded.uid).get();
      const role = userDoc.data()?.role;
      if (!["admin", "board"].includes(role)) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }

    const notionEvents = await fetchNotionEvents(100);

    let created = 0;
    let updated = 0;

    for (const ne of notionEvents) {
      // Check for existing event with this notionId
      const existing = await getAdminDb()
        .collection("events")
        .where("notionId", "==", ne.id)
        .limit(1)
        .get();

      const eventData = {
        source: "notion" as const,
        notionId: ne.id,
        title: ne.name,
        description: ne.description || "",
        imageUrl: null,
        location: ne.location || null,
        startTime: ne.date ? new Date(ne.date) : new Date(),
        endTime: ne.endDate ? new Date(ne.endDate) : null,
        capacity: null,
        tags: [],
        isPublished: true,
        externalUrl: ne.url || null,
        updatedAt: FieldValue.serverTimestamp(),
      };

      if (existing.empty) {
        // Create new event
        await getAdminDb().collection("events").add({
          ...eventData,
          createdBy: null,
          rsvpCount: 0,
          createdAt: FieldValue.serverTimestamp(),
        });
        created++;
      } else {
        // Update existing event
        await existing.docs[0].ref.update(eventData);
        updated++;
      }
    }

    return NextResponse.json({
      success: true,
      created,
      updated,
      total: notionEvents.length,
    });
  } catch (error) {
    console.error("Notion sync error:", error);
    const message = error instanceof Error ? error.message : "Sync failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// GET handler for Vercel Cron (Vercel calls GET by default for crons)
export async function GET(req: NextRequest) {
  return POST(req);
}
