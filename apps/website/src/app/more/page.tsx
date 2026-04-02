"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MorePage() {
  return (
    <>
      <PageHeader title="Resources" subtitle="Explore info for community members, partners, and volunteers" />

      <section className="relative z-10 md: sm: bg-white overflow-hidden">
                <div className="container mx-auto relative z-10 py-12 md:py-16 px-4 md:px-6 pb-20 md:pb-24">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  title: "For Community Members",
                  body: "Learn about local injury-prevention resources and San Diego task force information.",
                  href: "/more/community-members",
                },
                {
                  title: "Partner With Us",
                  body: "Explore collaboration opportunities with SDIPP for outreach and events.",
                  href: "/more/partner-with-us",
                },
                {
                  title: "For Volunteers",
                  body: "Review volunteer training pathways and what to expect when joining SDIPP.",
                  href: "/more/for-volunteers",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#1B2A53]/30 transition-all"
                >
                  <h2 className="text-xl md:text-2xl font-sans font-bold text-[#1B2A53]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[#1B2A53]/90 text-base leading-relaxed">
                    {item.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A53] hover:text-[#E2231A]">
                    View details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}
