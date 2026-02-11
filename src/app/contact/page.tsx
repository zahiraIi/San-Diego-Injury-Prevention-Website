"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/ui/contact-form";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      {/* Contact Content Section - White Gradient */}
      <section className="relative py-24 md:py-28 px-4 md:px-6">
        {/* White to gray gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #ffffff, #dddddd)' }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <div className="mb-12 md:mb-16 text-center">
              <p className="text-lg md:text-xl mb-3 text-[#0f172a]"><strong>Email:</strong> sdinjurypreventionprogram@gmail.com</p>
              <p className="text-lg md:text-xl text-[#0f172a]"><strong>Location:</strong> La Jolla, CA</p>
            </div>
            <div className="w-full flex justify-center">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
