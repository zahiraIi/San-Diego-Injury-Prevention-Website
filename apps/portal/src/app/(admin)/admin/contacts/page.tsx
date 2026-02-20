"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Mail, Archive, Eye } from "lucide-react";
import { useEffect, useState } from "react";

interface ContactEntry {
  id: string;
  name: string;
  email: string;
  message: string;
  status: "new" | "read" | "archived";
  createdAt: string;
}

export default function AdminContactsPage() {
  const { token } = useAuth();
  const [contacts, setContacts] = useState<ContactEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ContactEntry | null>(null);

  useEffect(() => {
    if (!token) return;

    fetch("/api/admin/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setContacts(data.contacts || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  const handleStatusChange = async (id: string, status: string) => {
    if (!token) return;

    await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    setContacts(contacts.map((c) => (c.id === id ? { ...c, status: status as ContactEntry["status"] } : c)));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-r-transparent" />
      </div>
    );
  }

  const statusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-50 text-blue-700";
      case "read": return "bg-muted text-muted-foreground";
      case "archived": return "bg-amber-50 text-amber-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-bold">Contact Submissions</h1>
        <p className="text-sm text-muted-foreground">{contacts.filter((c) => c.status === "new").length} unread</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* List */}
        <div className="lg:col-span-2 bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl overflow-hidden">
          {contacts.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="w-12 h-12 mx-auto mb-4 text-accent-blue/40" />
              <p className="text-muted-foreground">No contact submissions yet</p>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => {
                    setSelected(contact);
                    if (contact.status === "new") handleStatusChange(contact.id, "read");
                  }}
                  className={`w-full text-left p-4 hover:bg-muted/30 transition-colors ${
                    selected?.id === contact.id ? "bg-muted/50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-medium text-sm ${contact.status === "new" ? "font-bold" : ""}`}>
                      {contact.name}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full capitalize ${statusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{contact.email}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{contact.message}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detail */}
        <div className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl p-5">
          {selected ? (
            <div>
              <h3 className="font-semibold mb-1">{selected.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">{selected.email}</p>
              <p className="text-xs text-muted-foreground mb-4">
                {new Date(selected.createdAt).toLocaleString()}
              </p>
              <p className="text-sm whitespace-pre-wrap mb-4">{selected.message}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleStatusChange(selected.id, "read")}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Eye className="w-3 h-3" /> Mark Read
                </button>
                <button
                  onClick={() => handleStatusChange(selected.id, "archived")}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
                >
                  <Archive className="w-3 h-3" /> Archive
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground text-sm">
              Select a message to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
