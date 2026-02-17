"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import { HowItWorks } from "@/components/ui/how-it-works";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function ApplyPage() {
  return (
    <>
      <PageHeader title="Apply" subtitle="Join the movement" />

      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 bg-grainient-white">
        <GrainientWhiteSection />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HowItWorks />
          </motion.div>
        </div>
      </section>
    </>
  );
}
