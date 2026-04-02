"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import PageHeader from "@/components/ui/page-header";

const COMMUNITY_PDFS = [
  {
    href: "/documents/community/CDC-DIP_At-a-Glance_Falls_508.pdf",
    label: "CDC Fall Prevention — At a Glance (falls)",
  },
  {
    href: "/documents/community/SDIPP_Comprehensive_Pamphlet.pdf",
    label: "SDIPP comprehensive pamphlet",
  },
  {
    href: "/documents/community/STEADI_Feet_Footwear_Guide_O.pdf",
    label: "STEADI — feet and footwear guide",
  },
  {
    href: "/documents/community/steadi-brochure-postural-hypotension-508.pdf",
    label: "STEADI — postural hypotension brochure",
  },
  {
    href: "/documents/community/steadi-brochure-stayindependent-508.pdf",
    label: "STEADI — staying independent brochure",
  },
  {
    href: "/documents/community/steadi-brochure-whatyoucando-508.pdf",
    label: "STEADI — what you can do brochure",
  },
] as const;

export default function CommunityMembersPage() {
  return (
    <>
      <PageHeader
        title="For Community Members"
        subtitle="Local partners, printable guides, and San Diego fall-prevention resources"
      />

      <section className="relative z-10 md: sm: bg-white overflow-hidden">
                <div className="container mx-auto relative z-10 py-12 md:py-16 px-4 md:px-6 pb-20 md:pb-24 space-y-16 md:space-y-20">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1B2A53]">
              Jewish Family Service of San Diego
            </h2>
            <p className="text-lg text-[#1B2A53]/90 leading-relaxed">
              Explore programs and support from Jewish Family Service of San Diego — a trusted
              community resource for health, wellness, and social services across the region.
            </p>
            <Link
              href="https://www.jfssd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-full font-bold hover:bg-accent-blue/90 transition-colors"
            >
              Visit jfssd.org
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1B2A53] mb-6">
              Printable resources
            </h2>
            <p className="text-lg text-[#1B2A53]/90 leading-relaxed mb-8">
              Download injury-prevention and fall-prevention guides you can read at home or share
              with family and caregivers.
            </p>
            <ul className="space-y-3">
              {COMMUNITY_PDFS.map((doc) => (
                <li key={doc.href}>
                  <Link
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-[#1B2A53]/15 bg-white/80 px-4 py-3 text-[#1B2A53] hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">{doc.label}</span>
                    <ExternalLink className="w-4 h-4 shrink-0 ml-auto text-[#1B2A53]/50" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8 items-start"
          >
            <div className="space-y-4 text-lg text-[#1B2A53]">
              <h2 className="text-3xl md:text-4xl font-sans text-accent-red mb-5">
                San Diego Fall Prevention Task Force
              </h2>
              <p>
                Established in 2004, the San Diego Fall Prevention Task Force consists of service
                providers and community members dedicated to promoting the health, safety,
                independence, and quality of life of older adults through fall prevention.
              </p>
              <p>
                The coalition convenes monthly to collaborate on initiatives, awareness campaigns,
                and programs that reduce falls and their consequences in San Diego County.
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
