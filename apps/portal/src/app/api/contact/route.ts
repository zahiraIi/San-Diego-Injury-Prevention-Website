import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
});

// Public endpoint — no auth required
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    await getAdminDb().collection("contactSubmissions").add({
      name,
      email,
      message,
      status: "new",
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Contact submission error:", errMsg);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
