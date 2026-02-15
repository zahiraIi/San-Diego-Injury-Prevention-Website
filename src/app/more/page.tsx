"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";
import { ExternalLink, FileText, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MorePage() {
  return (
    <>
      <PageHeader title="More" subtitle="Additional resources and information" />

      <section className="relative py-12 md:py-16 px-4 md:px-6">
        <GrainientWhiteSection />
        <div className="container mx-auto relative z-10 pb-12 md:pb-16">
      {/* Training Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-sans text-accent-red mb-5">Training</h2>
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
        className="mb-10 md:mb-14"
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Description */}
          <div className="space-y-4 text-lg text-[#1a3a5c]">
            <h2 className="text-3xl md:text-4xl font-sans text-accent-red mb-5">San Diego Fall Prevention Task Force</h2>
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
                <FileText className="w-5 h-5" />
                View Task Force Info Sheet
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Screenshot Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                {/* URL Bar */}
                <div className="flex-1 bg-white rounded-md px-4 py-1.5 text-xs text-gray-500 font-mono truncate border border-gray-200">
                  sandiegocounty.gov/.../fall-prevention
                </div>
              </div>
              
              {/* Screenshot Preview */}
              <div className="relative overflow-hidden">
                <Image
                  src="/images/fall-prevention-flyer.png"
                  alt="San Diego Fall Prevention Task Force Information Sheet"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Link
                    href="https://www.sandiegocounty.gov/content/dam/sdc/hhsa/programs/ais/fall-prevention/FPTF%201-Pager.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a3a5c] rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <FileText className="w-5 h-5" />
                    View Document
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <Link
                  href="https://www.sandiegocounty.gov/content/dam/sdc/hhsa/programs/ais/fall-prevention/FPTF%201-Pager.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-accent-blue font-semibold hover:underline"
                >
                  <span>View Full Document</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Past Events Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-sans text-accent-red mb-5">Past Events</h2>
        <p className="text-lg text-[#1a3a5c] mb-6">
          Take a look at some of our previous events and activities in the community.
        </p>
        
        {/* Chateau Event - January 17 */}
        <div>
          <h3 className="text-2xl md:text-3xl font-sans text-[#1a3a5c] mb-6">Chateau La Jolla Event</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <motion.div
                key={`chateau-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <Image
                  src={`/images/chateau/chateau${i}.webp`}
                  alt={`Chateau La Jolla Event photo ${i}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-sans text-accent-red mb-3">Follow Us</h2>
        <p className="text-lg text-[#1a3a5c] mb-6">
          Stay connected with SDIPP on social media for updates, events, and more!
        </p>

        {/* Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Instagram Header */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-4 flex items-center gap-3">
              <Instagram className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-white font-bold text-lg">@sd__ipp</h3>
                <p className="text-white/80 text-sm">San Diego Injury Prevention Program</p>
              </div>
            </div>
            
            {/* Instagram Feed Embed */}
            <div className="relative w-full bg-white">
              <iframe
                src="https://www.instagram.com/sd__ipp/embed"
                className="w-full h-[500px] border-0"
                title="SDIPP Instagram Feed"
                loading="lazy"
                allow="encrypted-media"
              />
            </div>
            
            {/* Follow Button */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <Link
                href="https://www.instagram.com/sd__ipp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.section>
        </div>
      </section>
    </>
  );
}
