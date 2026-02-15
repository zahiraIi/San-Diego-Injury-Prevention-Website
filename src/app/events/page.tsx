"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/page-header";
import CalendarView from "@/components/ui/calendar-view";
import EventsDisplay from "@/components/ui/events-display";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Join us at our upcoming events"
        size="compact"
      />

      {/* Main Content Area with Gradient Background */}
      <section className="relative py-16 md:py-20 px-4 md:px-6 pb-20 md:pb-24">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Calendar View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-24"
          >
            <CalendarView />
          </motion.div>

          {/* Upcoming Events List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto w-full"
          >
            <h2 className="text-2xl md:text-3xl font-sans text-[#1a3a5c] mb-12 md:mb-16">
              Upcoming Events
            </h2>
            <EventsDisplay />
          </motion.div>
        </div>
      </section>
    </>
  );
}
