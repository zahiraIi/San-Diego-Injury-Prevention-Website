"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import { HowItWorks } from "@/components/ui/how-it-works";

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-16">
      <PageHeader title="Apply" subtitle="Join the movement" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HowItWorks />
      </motion.div>
    </div>
  );
}
