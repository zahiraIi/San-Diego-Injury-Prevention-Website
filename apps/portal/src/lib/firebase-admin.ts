import { initializeApp, cert, getApps, type App } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getStorage, type Storage } from "firebase-admin/storage";

// Lazy initialization — Firebase Admin SDK requires env vars that aren't available at build time
let _app: App | undefined;
let _auth: Auth | undefined;
let _db: Firestore | undefined;
let _storage: Storage | undefined;

function getApp(): App {
  if (!_app) {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) {
      throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not set");
    }
    // dotenv may convert \n to real newlines which breaks JSON.parse.
    // Strategy: try parsing as-is first, then with newline escaping.
    let parsed: Record<string, string>;
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Escape all real newlines so JSON.parse can handle them
      parsed = JSON.parse(raw.replace(/\r?\n/g, "\\n"));
    }
    // Ensure private_key has real newlines (not escaped)
    if (parsed.private_key) {
      parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
    }
    _app =
      getApps().length === 0
        ? initializeApp({ credential: cert(parsed) })
        : getApps()[0];
  }
  return _app;
}

export function getAdminAuth(): Auth {
  if (!_auth) _auth = getAuth(getApp());
  return _auth;
}

export function getAdminDb(): Firestore {
  if (!_db) _db = getFirestore(getApp());
  return _db;
}

export function getAdminStorage(): Storage {
  if (!_storage) _storage = getStorage(getApp());
  return _storage;
}

// ─── Auth helpers for API routes ─────────────────────────────────

export interface AuthUser {
  uid: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  role: "member" | "board" | "admin";
  isActive: boolean;
  username: string | null;
  bio: string | null;
  phone: string | null;
  socialLinks: {
    instagram: string | null;
    x: string | null;
    youtube: string | null;
    tiktok: string | null;
    linkedin: string | null;
    website: string | null;
  } | null;
  preferences: {
    theme: "system" | "light" | "dark";
    notifications: {
      eventInvites: "email" | "none";
      eventReminders: "email" | "none";
      eventUpdates: "email" | "none";
    };
  } | null;
  createdAt: string | null;
}

export async function verifyAuth(req: Request): Promise<AuthUser> {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) throw new Error("Unauthorized");

  const auth = getAdminAuth();
  const db = getAdminDb();

  const decoded = await auth.verifyIdToken(token);
  const userDoc = await db.collection("users").doc(decoded.uid).get();

  if (!userDoc.exists) {
    throw new Error("User profile not found");
  }

  const data = userDoc.data()!;
  return {
    uid: decoded.uid,
    email: data.email,
    fullName: data.fullName,
    avatarUrl: data.avatarUrl || null,
    role: data.role || "member",
    isActive: data.isActive !== false,
    username: data.username || null,
    bio: data.bio || null,
    phone: data.phone || null,
    socialLinks: data.socialLinks || null,
    preferences: data.preferences || null,
    createdAt: data.createdAt?.toDate?.()?.toISOString?.() || null,
  };
}

export async function requireAdmin(req: Request): Promise<AuthUser> {
  const user = await verifyAuth(req);
  if (!["admin", "board"].includes(user.role)) {
    throw new Error("Forbidden");
  }
  return user;
}
