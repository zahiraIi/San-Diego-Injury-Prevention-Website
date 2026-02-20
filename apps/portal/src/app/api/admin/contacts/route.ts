import { NextResponse } from "next/server";
import { getAdminDb, requireAdmin } from "@/lib/firebase-admin";

// GET /api/admin/contacts — list contact submissions
export async function GET(req: Request) {
  try {
    await requireAdmin(req);

    const snapshot = await getAdminDb()
      .collection("contactSubmissions")
      .orderBy("createdAt", "desc")
      .limit(200)
      .get();

    const contacts = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        message: data.message,
        status: data.status || "new",
        createdAt: data.createdAt?.toDate?.()?.toISOString() || "",
      };
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PATCH /api/admin/contacts — update contact status
export async function PATCH(req: Request) {
  try {
    await requireAdmin(req);
    const body = await req.json();
    const { id, status } = body;

    if (!id || !["new", "read", "archived"].includes(status)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    await getAdminDb().collection("contactSubmissions").doc(id).update({ status });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
