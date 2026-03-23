"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHeader
        title="Partner With Us"
        subtitle="Collaborate with SDIPP on outreach, education, and community impact"
      />

      <section className="relative z-10 -mt-16 md:-mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] bg-white overflow-hidden">
        <GrainientWhiteSection />
        <div className="container mx-auto relative z-10 py-12 md:py-16 px-4 md:px-6 pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6 text-[#1a3a5c]"
          >
            <p className="text-lg leading-relaxed">
              SDIPP partners with student organizations, health systems, and community
              groups to co-host events, share educational resources, and expand injury
              prevention outreach throughout San Diego.
            </p>
            <p className="text-lg leading-relaxed">
              If your team is interested in programming, workshops, health fairs, or
              educational collaboration, we would love to connect.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3a5c] text-white font-semibold hover:bg-[#0f2a42] transition-colors"
              >
                Contact SDIPP
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
