import { NextResponse } from "next/server";
import { requireAdmin, getAdminStorage } from "@/lib/firebase-admin";
import { randomUUID } from "crypto";

// POST /api/admin/upload — upload image to Firebase Storage
export async function POST(req: Request) {
  try {
    await requireAdmin(req);

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPEG, PNG, WebP, AVIF" },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum 5MB" },
        { status: 400 }
      );
    }

    const ext = file.name.split(".").pop() || "jpg";
    const filename = `events/${randomUUID()}.${ext}`;
    const bucket = getAdminStorage().bucket();
    const fileRef = bucket.file(filename);

    const buffer = Buffer.from(await file.arrayBuffer());

    await fileRef.save(buffer, {
      metadata: {
        contentType: file.type,
      },
    });

    await fileRef.makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error("Upload error:", error);
    const message = error instanceof Error ? error.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
