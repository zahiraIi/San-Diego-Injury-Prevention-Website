"use client";

import { useAuth } from "@/lib/auth-context";
import type { SocialLinks, UserPreferences } from "@/lib/auth-context";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Save,
  AlertCircle,
  CheckCircle,
  Trash2,
  Monitor,
  Sun,
  Moon,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
  Phone,
  Lock,
  Link2,
} from "lucide-react";

// Social platform configs
const socialPlatforms = [
  { key: "instagram" as const, label: "Instagram", icon: Instagram, prefix: "instagram.com/" },
  { key: "x" as const, label: "X", icon: XIcon, prefix: "x.com/" },
  { key: "youtube" as const, label: "YouTube", icon: Youtube, prefix: "youtube.com/@" },
  { key: "tiktok" as const, label: "TikTok", icon: TikTokIcon, prefix: "tiktok.com/@" },
  { key: "linkedin" as const, label: "LinkedIn", icon: Linkedin, prefix: "linkedin.com/in/" },
  { key: "website" as const, label: "Website", icon: Globe, prefix: "" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.1a8.16 8.16 0 0 0 4.76 1.52v-3.4c-.83 0-1.63-.18-2.36-.53h-.01z" />
    </svg>
  );
}

type Tab = "account" | "preferences";

export default function SettingsPage() {
  const { profile, token, refreshProfile, user } = useAuth();
  const [tab, setTab] = useState<Tab>("account");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    instagram: null, x: null, youtube: null, tiktok: null, linkedin: null, website: null,
  });
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: "system",
    notifications: { eventInvites: "email", eventReminders: "email", eventUpdates: "email" },
  });

  // Initialize form from profile
  useEffect(() => {
    if (profile) {
      setFullName(profile.fullName || "");
      setUsername(profile.username || "");
      setBio(profile.bio || "");
      setPhone(profile.phone || "");
      setSocialLinks(profile.socialLinks || {
        instagram: null, x: null, youtube: null, tiktok: null, linkedin: null, website: null,
      });
      setPreferences(profile.preferences || {
        theme: "system",
        notifications: { eventInvites: "email", eventReminders: "email", eventUpdates: "email" },
      });
    }
  }, [profile]);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !token) return;

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      showMessage("error", "Invalid file type. Only JPEG and PNG are allowed.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      showMessage("error", "File too large. Maximum size is 2MB.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setAvatarUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/me/avatar", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }

      await refreshProfile();
      showMessage("success", "Avatar updated");
    } catch (err) {
      showMessage("error", err instanceof Error ? err.message : "Upload failed");
    } finally {
      setAvatarUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleSaveProfile = async () => {
    if (!token) return;
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username: username || null,
          bio: bio || null,
          socialLinks,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }

      await refreshProfile();
      showMessage("success", "Profile saved");
    } catch (err) {
      showMessage("error", err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleSavePhone = async () => {
    if (!token) return;
    setSaving(true);
    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone || null }),
      });
      if (!res.ok) throw new Error("Failed to update");
      await refreshProfile();
      showMessage("success", "Phone number updated");
    } catch {
      showMessage("error", "Failed to update phone number");
    } finally {
      setSaving(false);
    }
  };

  const handleSavePreferences = async () => {
    if (!token) return;
    setSaving(true);
    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ preferences }),
      });
      if (!res.ok) throw new Error("Failed to update");
      await refreshProfile();

      // Apply theme
      applyTheme(preferences.theme);
      showMessage("success", "Preferences saved");
    } catch {
      showMessage("error", "Failed to save preferences");
    } finally {
      setSaving(false);
    }
  };

  const initials = profile?.fullName
    ? profile.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  const googleLinked = user?.providerData?.some((p) => p.providerId === "google.com");

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
      </motion.div>

      {/* Toast message */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 text-sm rounded-lg p-3 mb-6 ${
            message.type === "success"
              ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}
        >
          {message.type === "success" ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
          <span>{message.text}</span>
        </motion.div>
      )}

      {/* Tabs */}
      <div className="border-b border-border mb-6">
        <div className="flex gap-6">
          {(["account", "preferences"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                tab === t
                  ? "border-accent-blue text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === "account" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
          {/* Your Profile */}
          <Section title="Your Profile" description="This is your public profile information.">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <Field label="Name">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-field"
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Username">
                  <div className="flex items-center">
                    <span className="px-3 py-2.5 rounded-l-lg border border-r-0 border-border bg-muted text-sm text-muted-foreground">@</span>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
                      className="input-field rounded-l-none"
                      placeholder="username"
                      maxLength={30}
                    />
                  </div>
                </Field>
                <Field label="Bio">
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="input-field resize-none"
                    rows={3}
                    placeholder="A short bio about yourself"
                    maxLength={500}
                  />
                </Field>
              </div>

              {/* Avatar */}
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm font-medium text-muted-foreground">Profile Picture</p>
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-accent-blue/10 flex items-center justify-center">
                    {profile?.avatarUrl ? (
                      <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl font-bold text-accent-blue">{initials}</span>
                    )}
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={avatarUploading}
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-lg hover:bg-accent-blue/90 transition-colors disabled:opacity-50"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </div>
                {avatarUploading && <p className="text-xs text-muted-foreground">Uploading...</p>}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Social Links</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialPlatforms.map(({ key, label, icon: Icon, prefix }) => (
                  <div key={key} className="flex items-center">
                    <span className="flex items-center gap-2 px-3 py-2.5 rounded-l-lg border border-r-0 border-border bg-muted text-sm text-muted-foreground min-w-fit">
                      <Icon className="w-4 h-4" />
                      {prefix && <span className="hidden sm:inline text-xs">{prefix}</span>}
                    </span>
                    <input
                      type="text"
                      value={socialLinks[key] || ""}
                      onChange={(e) => setSocialLinks({ ...socialLinks, [key]: e.target.value || null })}
                      className="input-field rounded-l-none"
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleSaveProfile}
              disabled={saving}
              className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </Section>

          {/* Email */}
          <Section title="Emails" description="Manage your email addresses.">
            <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/50">
              <span className="text-sm">{profile?.email}</span>
              <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue">
                Primary
              </span>
            </div>
          </Section>

          {/* Phone */}
          <Section title="Phone Number" description="Used for event reminders and account recovery.">
            <div className="flex gap-3">
              <div className="flex items-center flex-1">
                <span className="px-3 py-2.5 rounded-l-lg border border-r-0 border-border bg-muted text-muted-foreground">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field rounded-l-none"
                  placeholder="(555) 123-4567"
                />
              </div>
              <button
                onClick={handleSavePhone}
                disabled={saving}
                className="px-4 py-2.5 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-colors disabled:opacity-50"
              >
                Update
              </button>
            </div>
          </Section>

          {/* Password & Security */}
          <Section title="Password & Security" description="Manage your password and security settings.">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Password</span>
                </div>
                <button
                  onClick={async () => {
                    if (!profile?.email) return;
                    const { sendPasswordResetEmail } = await import("firebase/auth");
                    const { getFirebaseAuth } = await import("@/lib/firebase");
                    await sendPasswordResetEmail(getFirebaseAuth(), profile.email);
                    showMessage("success", "Password reset email sent");
                  }}
                  className="text-sm text-accent-blue hover:underline"
                >
                  Send Reset Link
                </button>
              </div>
            </div>
          </Section>

          {/* Third Party Accounts */}
          <Section title="Third Party Accounts" description="Connected accounts for sign in.">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm">Google</span>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                googleLinked
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-muted text-muted-foreground"
              }`}>
                {googleLinked ? "Connected" : "Not connected"}
              </span>
            </div>
          </Section>

          {/* Delete Account */}
          <Section title="Delete Account" description="Permanently delete your account and all data. This cannot be undone.">
            <button
              onClick={() => {
                if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                  showMessage("error", "Please contact an administrator to delete your account.");
                }
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-red-300 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete Account
            </button>
          </Section>
        </motion.div>
      )}

      {tab === "preferences" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
          {/* Display */}
          <Section title="Display" description="Choose your preferred theme.">
            <div className="grid grid-cols-3 gap-3">
              {([
                { value: "system" as const, label: "System", icon: Monitor },
                { value: "light" as const, label: "Light", icon: Sun },
                { value: "dark" as const, label: "Dark", icon: Moon },
              ]).map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setPreferences({ ...preferences, theme: value })}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${
                    preferences.theme === value
                      ? "border-accent-blue bg-accent-blue/5"
                      : "border-border hover:border-accent-blue/30"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${preferences.theme === value ? "text-accent-blue" : "text-muted-foreground"}`} />
                  <span className={`text-sm font-medium ${preferences.theme === value ? "text-accent-blue" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </Section>

          {/* Notifications */}
          <Section title="Notifications" description="Choose what notifications you receive.">
            <div className="space-y-4">
              {([
                { key: "eventInvites" as const, label: "Event Invites", description: "When you're invited to an event" },
                { key: "eventReminders" as const, label: "Event Reminders", description: "Reminders before events you've RSVP'd to" },
                { key: "eventUpdates" as const, label: "Event Updates", description: "Changes to events you're attending" },
              ]).map(({ key, label, description }) => (
                <div key={key} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                  <button
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        notifications: {
                          ...preferences.notifications,
                          [key]: preferences.notifications[key] === "email" ? "none" : "email",
                        },
                      })
                    }
                    className={`relative w-11 h-6 rounded-full transition-colors ${
                      preferences.notifications[key] === "email" ? "bg-accent-blue" : "bg-border"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        preferences.notifications[key] === "email" ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </Section>

          <button
            onClick={handleSavePreferences}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save Preferences"}
          </button>
        </motion.div>
      )}
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-border rounded-xl p-6">
      <h2 className="text-base font-semibold mb-1">{title}</h2>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}

function applyTheme(theme: "system" | "light" | "dark") {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "light") {
    root.classList.remove("dark");
  } else {
    // System
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
    }
  }
  localStorage.setItem("theme", theme);
}
