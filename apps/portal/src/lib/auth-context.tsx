"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, googleProvider } from "./firebase";

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  token: string | null;
}

export interface SocialLinks {
  instagram: string | null;
  x: string | null;
  youtube: string | null;
  tiktok: string | null;
  linkedin: string | null;
  website: string | null;
}

export interface NotificationPreferences {
  eventInvites: "email" | "none";
  eventReminders: "email" | "none";
  eventUpdates: "email" | "none";
}

export interface UserPreferences {
  theme: "system" | "light" | "dark";
  notifications: NotificationPreferences;
}

export interface UserProfile {
  uid: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  role: "member" | "board" | "admin";
  isActive: boolean;
  username: string | null;
  bio: string | null;
  phone: string | null;
  socialLinks: SocialLinks | null;
  preferences: UserPreferences | null;
  createdAt: string | null;
}

interface AuthContextValue extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchProfile(token: string): Promise<UserProfile | null> {
  try {
    const res = await fetch("/api/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
    token: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const profile = await fetchProfile(token);
        setState({ user, profile, loading: false, token });
      } else {
        setState({ user: null, profile: null, loading: false, token: null });
      }
    });
    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
  };

  const signUp = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    const cred = await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
    const token = await cred.user.getIdToken();

    // Create user profile via API
    await fetch("/api/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName }),
    });
  };

  const signInWithGoogle = async () => {
    const cred = await signInWithPopup(getFirebaseAuth(), googleProvider);
    const token = await cred.user.getIdToken();

    // Ensure profile exists
    await fetch("/api/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: cred.user.displayName || "User",
      }),
    });
  };

  const signOut = async () => {
    await firebaseSignOut(getFirebaseAuth());
  };

  const refreshProfile = async () => {
    if (state.user) {
      const token = await state.user.getIdToken();
      const profile = await fetchProfile(token);
      setState((prev) => ({ ...prev, profile, token }));
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...state, signIn, signUp, signInWithGoogle, signOut, refreshProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
