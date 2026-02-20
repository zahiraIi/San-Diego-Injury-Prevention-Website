import { NextResponse } from "next/server";
import { getAdminDb, requireAdmin } from "@/lib/firebase-admin";

// GET /api/admin/users — list all users
export async function GET(req: Request) {
  try {
    await requireAdmin(req);

    const snapshot = await getAdminDb()
      .collection("users")
      .orderBy("createdAt", "desc")
      .get();

    const users = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        uid: doc.id,
        email: data.email,
        fullName: data.fullName,
        role: data.role || "member",
        isActive: data.isActive !== false,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || "",
      };
    });

    return NextResponse.json({ users });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    const status = message === "Forbidden" ? 403 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

// PATCH /api/admin/users — update user role/status
export async function PATCH(req: Request) {
  try {
    await requireAdmin(req);
    const body = await req.json();
    const { uid, role, isActive } = body;

    if (!uid) {
      return NextResponse.json({ error: "Missing uid" }, { status: 400 });
    }

    const updates: Record<string, unknown> = {};
    if (role && ["member", "board", "admin"].includes(role)) {
      updates.role = role;
    }
    if (typeof isActive === "boolean") {
      updates.isActive = isActive;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "No valid updates" }, { status: 400 });
    }

    await getAdminDb().collection("users").doc(uid).update(updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
