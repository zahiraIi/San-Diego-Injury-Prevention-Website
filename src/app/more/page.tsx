"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import { IconExternalLink, IconFileTypePdf, IconCalendarEvent } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export default function MorePage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="More" subtitle="Additional resources and information" />

      {/* Training Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 bg-[#f5f0e8] rounded-2xl p-8 md:p-12"
      >
        <h2 className="text-4xl md:text-5xl font-rosehot text-accent-red mb-8">Training</h2>
        <div className="text-lg text-[#1a3a5c] space-y-4">
          <p className="font-semibold">
            All volunteers are certified and trained for their specific projects!
          </p>
          <p>We offer various trainings, including but not limited to:</p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent-red">-</span>
              <span>General volunteering training for work with geriatric clients in a fall prevention context</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red">-</span>
              <span>Health literacy presentations at local k-12 schools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red">-</span>
              <span>Health Fairs within the community</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-red">-</span>
              <span>Training to help our geriatric clients make small, healthier lifestyle adjustments</span>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* San Diego Fall Prevention Task Force Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-rosehot text-accent-red mb-8">San Diego Fall Prevention Task Force</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Description */}
          <div className="space-y-4 text-lg text-[#1a3a5c]">
            <p>
              Established in 2004, the San Diego Fall Prevention Task Force consists of service providers 
              and community members who are dedicated to promoting the health, safety, independence, 
              and quality of life of older adults through fall prevention.
            </p>
            <p>
              The coalition convenes monthly to collaborate on initiatives, resources, awareness campaigns, 
              and programs that advance its mission of reducing falls and their devastating consequences 
              in San Diego County.
            </p>
            <p>
              Members of diverse sectors share best practices for preventing falls and receive education 
              on evidence-based interventions and strategies that can be applied to their work with clients and patients.
            </p>
            <div className="pt-4">
              <Link
                href="https://www.sandiegocounty.gov/content/dam/sdc/hhsa/programs/ais/fall-prevention/FPTF%201-Pager.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-full font-bold hover:bg-accent-blue/90 transition-colors"
              >
                <IconFileTypePdf className="w-5 h-5" />
                View Task Force Info Sheet
                <IconExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* PDF Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://www.sandiegocounty.gov/content/dam/sdc/hhsa/programs/ais/fall-prevention/FPTF%201-Pager.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                {/* PDF Preview Header */}
                <div className="bg-gradient-to-r from-accent-blue to-[#1a3a5c] p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <IconFileTypePdf className="w-10 h-10" />
                    <span className="text-sm font-medium uppercase tracking-wider">PDF Document</span>
                  </div>
                  <h3 className="text-xl font-bold">San Diego Fall Prevention Task Force</h3>
                  <p className="text-sm opacity-80 mt-1">1-Page Information Sheet</p>
                </div>
                
                {/* Preview Content */}
                <div className="p-6 bg-gray-50">
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <IconCalendarEvent className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800">Monthly Meetings</p>
                        <p>2nd Tuesday of the month | 1:00 pm – 2:00 pm</p>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-gray-800 mb-1">Services Offered:</p>
                      <ul className="space-y-1">
                        <li>• Speakers Bureau (free presentations)</li>
                        <li>• Balance Screeners Bureau (fall risk assessments)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center gap-2 text-accent-blue font-semibold group-hover:underline">
                    <span>Click to view full document</span>
                    <IconExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Past Events Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-rosehot text-accent-red mb-8">Past Events</h2>
        <p className="text-lg text-[#1a3a5c] mb-8">
          Take a look at some of our previous events and activities in the community.
        </p>
        
        {/* Photo Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder cards - will be replaced with actual photos */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400"
            >
              <div className="text-center">
                <IconCalendarEvent className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm">Photo {i}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 mt-6 italic">
          More photos coming soon!
        </p>
      </motion.section>
    </div>
  );
}
