"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/ui/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <div className="mb-8 text-center">
          <p className="text-lg mb-2"><strong>Email:</strong> sdinjurypreventionprogram@gmail.com</p>
          <p className="text-lg"><strong>Location:</strong> La Jolla, CA</p>
        </div>
        <div className="w-full flex justify-center">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
}
