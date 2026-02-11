"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";
import EventsDisplay from "@/components/ui/events-display";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-16">
      <PageHeader title="Events" subtitle="Join us at our upcoming events" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <LiquidGlassCard className="border border-accent-blue/20 bg-gradient-to-br from-background/80 to-accent-blue/10 p-5 md:p-10">
          <h2 className="text-2xl md:text-3xl font-rosehot mb-6 text-center">
            Upcoming Events
          </h2>
          <EventsDisplay />
        </LiquidGlassCard>
      </motion.div>
    </div>
  );
}
