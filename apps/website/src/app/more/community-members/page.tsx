"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function CommunityMembersPage() {
  return (
    <>
      <PageHeader
        title="For Community Members"
        subtitle="San Diego Fall Prevention Task Force resources"
      />

      <section className="relative z-10 -mt-16 md:-mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] bg-white overflow-hidden">
        <GrainientWhiteSection />
        <div className="container mx-auto relative z-10 py-12 md:py-16 px-4 md:px-6 pb-20 md:pb-24">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8 items-start"
          >
            <div className="space-y-4 text-lg text-[#1a3a5c]">
              <h2 className="text-3xl md:text-4xl font-sans text-accent-red mb-5">
                San Diego Fall Prevention Task Force
              </h2>
              <p>
                Established in 2004, the San Diego Fall Prevention Task Force consists of
                service providers and community members dedicated to promoting the health,
                safety, independence, and quality of life of older adults through fall prevention.
              </p>
              <p>
                The coalition convenes monthly to collaborate on initiatives, awareness
                campaigns, and programs that reduce falls and their consequences in San Diego
                County.
              </p>
              <div className="pt-4">
                <Link
                  href="https://www.sandiegocounty.gov/content/dam/sdc/hhsa/programs/ais/fall-prevention/FPTF%201-Pager.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-full font-bold hover:bg-accent-blue/90 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  View Task Force Info Sheet
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/fall-prevention-flyer.png"
                  alt="San Diego Fall Prevention Task Force Information Sheet"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}
