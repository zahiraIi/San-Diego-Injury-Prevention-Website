"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import CalendarView from "@/components/ui/calendar-view";
import EventsDisplay from "@/components/ui/events-display";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Join us at our upcoming events"
        size="compact"
      />

      {/* Main Content Area with Gradient Background */}
      <section className="relative z-10 sm: overflow-hidden py-10 md:py-14 px-4 md:px-6 pb-14 md:pb-16">
                <div className="container mx-auto max-w-6xl relative z-10">
          {/* Calendar View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <CalendarView />
          </motion.div>

          {/* Events filtered by month */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <EventsDisplay />
          </motion.div>
        </div>
      </section>
    </>
  );
}
