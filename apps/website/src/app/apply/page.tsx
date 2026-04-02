"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import { HowItWorks } from "@/components/ui/how-it-works";

export default function ApplyPage() {
  return (
    <>
      <PageHeader title="Apply" subtitle="Join the movement" />

      <section className="relative z-10 sm: overflow-hidden py-12 md:py-16 bg-white">
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
