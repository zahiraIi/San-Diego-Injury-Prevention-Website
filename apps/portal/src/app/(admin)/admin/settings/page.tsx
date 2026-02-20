"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function AdminSettingsPage() {
  const { token } = useAuth();
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleNotionSync = async () => {
    if (!token) return;
    setSyncing(true);
    setSyncResult(null);

    try {
      const res = await fetch("/api/cron/notion-sync", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Sync failed");

      setSyncResult({
        type: "success",
        text: `Synced ${data.created || 0} new, ${data.updated || 0} updated events from Notion`,
      });
    } catch (err) {
      setSyncResult({
        type: "error",
        text: err instanceof Error ? err.message : "Sync failed",
      });
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">Portal configuration</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-6"
      >
        <h2 className="text-lg font-semibold mb-4">Notion Sync</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Events sync automatically daily at 6:00 AM UTC via Vercel Cron. You can also trigger a manual sync.
        </p>

        {syncResult && (
          <div
            className={`flex items-center gap-2 text-sm rounded-lg p-3 mb-4 ${
              syncResult.type === "success"
                ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                : "bg-red-50 border border-red-200 text-red-700"
            }`}
          >
            {syncResult.type === "success" ? (
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span>{syncResult.text}</span>
          </div>
        )}

        <button
          onClick={handleNotionSync}
          disabled={syncing}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f2a42] text-white text-sm font-medium hover:bg-[#1a3a5c] transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${syncing ? "animate-spin" : ""}`} />
          {syncing ? "Syncing..." : "Sync from Notion"}
        </button>
      </motion.div>
    </div>
  );
}
