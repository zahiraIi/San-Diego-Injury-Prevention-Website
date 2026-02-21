import { NextResponse } from "next/server";
import { verifyAuth, getAdminStorage, getAdminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// POST /api/me/avatar — upload avatar image
export async function POST(req: Request) {
  try {
    const user = await verifyAuth(req);

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPEG, PNG" },
        { status: 400 }
      );
    }

    if (file.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum 2MB" },
        { status: 400 }
      );
    }

    const ext = file.type === "image/png" ? "png" : "jpg";
    const filename = `avatars/${user.uid}.${ext}`;
    const bucket = getAdminStorage().bucket();
    const fileRef = bucket.file(filename);

    const buffer = Buffer.from(await file.arrayBuffer());

    await fileRef.save(buffer, {
      metadata: { contentType: file.type },
    });

    await fileRef.makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

    // Update user profile with new avatar URL
    await getAdminDb().collection("users").doc(user.uid).update({
      avatarUrl: publicUrl,
      updatedAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error("Avatar upload error:", error);
    const message = error instanceof Error ? error.message : "Upload failed";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
