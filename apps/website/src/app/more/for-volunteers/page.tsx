"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function ForVolunteersPage() {
  return (
    <>
      <PageHeader
        title="For Volunteers"
        subtitle="Training information and preparation for SDIPP programs"
      />

      <section className="relative z-10 -mt-16 md:-mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] bg-white overflow-hidden">
        <GrainientWhiteSection />
        <div className="container mx-auto relative z-10 py-12 md:py-16 px-4 md:px-6 pb-20 md:pb-24">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-sans text-accent-red mb-5">Training</h2>
            <div className="text-lg text-[#1a3a5c] space-y-4">
              <p className="font-semibold">
                All volunteers are certified and trained for their specific projects.
              </p>
              <p>Training includes, but is not limited to:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent-red">-</span>
                  <span>
                    General volunteering training for work with geriatric clients in a fall
                    prevention context
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-red">-</span>
                  <span>Health literacy presentations at local K-12 schools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-red">-</span>
                  <span>Health fairs within the community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-red">-</span>
                  <span>
                    Coaching clients on small, practical lifestyle adjustments for safer
                    day-to-day activity
                  </span>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}
