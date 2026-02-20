"use client";

import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Shield, UserCheck, UserX } from "lucide-react";
import { useEffect, useState } from "react";

interface UserEntry {
  uid: string;
  email: string;
  fullName: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

export default function AdminUsersPage() {
  const { token } = useAuth();
  const [users, setUsers] = useState<UserEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch("/api/admin/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data.users || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  const handleRoleChange = async (uid: string, role: string) => {
    if (!token) return;

    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, role }),
    });

    setUsers(users.map((u) => (u.uid === uid ? { ...u, role } : u)));
  };

  const handleToggleActive = async (uid: string, isActive: boolean) => {
    if (!token) return;

    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, isActive }),
    });

    setUsers(users.map((u) => (u.uid === uid ? { ...u, isActive } : u)));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-blue border-r-transparent" />
      </div>
    );
  }

  const roleBadgeColor = (role: string) => {
    switch (role) {
      case "admin": return "bg-purple-50 text-purple-700";
      case "board": return "bg-accent-blue/10 text-accent-blue";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="text-sm text-muted-foreground">{users.length} members</p>
      </motion.div>

      <div className="bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-muted-foreground">User</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Role</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Joined</th>
              <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <p className="font-medium">{user.fullName}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full capitalize ${roleBadgeColor(user.role)}`}>
                    <Shield className="w-3 h-3" />
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  {user.isActive ? (
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                      <UserCheck className="w-3 h-3" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                      <UserX className="w-3 h-3" /> Inactive
                    </span>
                  )}
                </td>
                <td className="p-4 text-muted-foreground">
                  {new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.uid, e.target.value)}
                      className="text-xs border border-border rounded-lg px-2 py-1 bg-background"
                    >
                      <option value="member">Member</option>
                      <option value="board">Board</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button
                      onClick={() => handleToggleActive(user.uid, !user.isActive)}
                      className={`text-xs px-2 py-1 rounded-lg transition-colors ${
                        user.isActive ? "text-red-600 hover:bg-red-50" : "text-emerald-600 hover:bg-emerald-50"
                      }`}
                    >
                      {user.isActive ? "Deactivate" : "Activate"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
