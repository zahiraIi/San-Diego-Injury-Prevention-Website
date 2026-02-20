"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Mail, Settings } from "lucide-react";
import Link from "next/link";

const adminCards = [
  {
    title: "Manage Events",
    description: "Create, edit, and publish events",
    href: "/admin/events",
    icon: Calendar,
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    title: "Users",
    description: "Manage members and roles",
    href: "/admin/users",
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Contact Submissions",
    description: "View messages from the website",
    href: "/admin/contacts",
    icon: Mail,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Settings",
    description: "Portal configuration and sync",
    href: "/admin/settings",
    icon: Settings,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function AdminPage() {
  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-sm text-muted-foreground">Manage the SDIPP portal</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {adminCards.map((card, i) => (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={card.href}
              className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-sm border border-accent-blue/10 rounded-xl hover:shadow-md hover:border-accent-blue/30 transition-all"
            >
              <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center flex-shrink-0`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <div>
                <h3 className="font-semibold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
