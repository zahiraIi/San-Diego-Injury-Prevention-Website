import { NextResponse } from "next/server";
import { getAdminAuth, getAdminDb, verifyAuth } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// GET /api/me — return current user profile
export async function GET(req: Request) {
  try {
    const user = await verifyAuth(req);
    return NextResponse.json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message === "Unauthorized" ? 401 : message === "User profile not found" ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

// POST /api/me — create profile on first login
export async function POST(req: Request) {
  try {
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await getAdminAuth().verifyIdToken(token);
    const userRef = getAdminDb().collection("users").doc(decoded.uid);
    const existing = await userRef.get();

    if (existing.exists) {
      // Profile already exists — return it
      const data = existing.data()!;
      return NextResponse.json({
        uid: decoded.uid,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString?.() || null,
      });
    }

    const body = await req.json();
    const fullName = body.fullName || decoded.name || "User";

    const profile = {
      email: decoded.email || "",
      fullName,
      avatarUrl: decoded.picture || null,
      role: "member",
      isActive: true,
      username: null,
      bio: null,
      phone: null,
      socialLinks: null,
      preferences: null,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    await userRef.set(profile);

    return NextResponse.json({ uid: decoded.uid, ...profile }, { status: 201 });
  } catch (error) {
    console.error("Create profile error:", error);
    return NextResponse.json({ error: "Failed to create profile" }, { status: 500 });
  }
}

// PATCH /api/me — update profile
export async function PATCH(req: Request) {
  try {
    const user = await verifyAuth(req);
    const body = await req.json();
    const db = getAdminDb();

    const updates: Record<string, unknown> = {
      updatedAt: FieldValue.serverTimestamp(),
    };

    if (body.fullName && typeof body.fullName === "string") {
      updates.fullName = body.fullName.slice(0, 200);
    }

    if (body.username !== undefined) {
      if (body.username === null || body.username === "") {
        updates.username = null;
      } else if (typeof body.username === "string") {
        const username = body.username.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 30);
        if (username.length < 3) {
          return NextResponse.json({ error: "Username must be at least 3 characters" }, { status: 400 });
        }
        // Check uniqueness
        const existing = await db
          .collection("users")
          .where("username", "==", username)
          .limit(1)
          .get();
        if (!existing.empty && existing.docs[0].id !== user.uid) {
          return NextResponse.json({ error: "Username already taken" }, { status: 409 });
        }
        updates.username = username;
      }
    }

    if (body.bio !== undefined) {
      updates.bio = typeof body.bio === "string" ? body.bio.slice(0, 500) : null;
    }

    if (body.phone !== undefined) {
      updates.phone = typeof body.phone === "string" ? body.phone.slice(0, 20) : null;
    }

    if (body.avatarUrl !== undefined) {
      updates.avatarUrl = typeof body.avatarUrl === "string" ? body.avatarUrl : null;
    }

    if (body.socialLinks !== undefined) {
      if (body.socialLinks === null) {
        updates.socialLinks = null;
      } else if (typeof body.socialLinks === "object") {
        const allowed = ["instagram", "x", "youtube", "tiktok", "linkedin", "website"];
        const links: Record<string, string | null> = {};
        for (const key of allowed) {
          const val = body.socialLinks[key];
          links[key] = typeof val === "string" && val.trim() ? val.trim().slice(0, 200) : null;
        }
        updates.socialLinks = links;
      }
    }

    if (body.preferences !== undefined) {
      if (body.preferences === null) {
        updates.preferences = null;
      } else if (typeof body.preferences === "object") {
        const prefs: Record<string, unknown> = {};
        if (["system", "light", "dark"].includes(body.preferences.theme)) {
          prefs.theme = body.preferences.theme;
        }
        if (body.preferences.notifications && typeof body.preferences.notifications === "object") {
          const notif: Record<string, string> = {};
          for (const key of ["eventInvites", "eventReminders", "eventUpdates"]) {
            notif[key] = body.preferences.notifications[key] === "email" ? "email" : "none";
          }
          prefs.notifications = notif;
        }
        if (Object.keys(prefs).length > 0) {
          // Merge with existing preferences
          const currentDoc = await db.collection("users").doc(user.uid).get();
          const currentPrefs = currentDoc.data()?.preferences || {};
          updates.preferences = { ...currentPrefs, ...prefs };
        }
      }
    }

    await db.collection("users").doc(user.uid).update(updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to update";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
