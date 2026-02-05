"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Events" subtitle="Join us at our upcoming events" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <LiquidGlassCard className="border border-accent-blue/20 bg-gradient-to-br from-background/80 to-accent-blue/10 p-12">
          <h2 className="text-3xl font-rosehot mb-6 text-center">Upcoming Events</h2>
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "75%" }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="SDIPP Events Calendar"
              ></iframe>
            </div>
            <p className="text-sm text-center text-muted-foreground mt-4 opacity-70">
              Replace the calendar src URL with your Google Calendar embed URL
            </p>
          </div>
        </LiquidGlassCard>
      </motion.div>
    </div>
  );
}
