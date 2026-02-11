"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

export default function FAQPage() {
  return (
    <>
      <PageHeader title="FAQ" subtitle="Find answers to common questions about our program and membership" />

      {/* FAQ Content Section - White Gradient */}
      <section className="relative py-24 md:py-28 px-4 md:px-6">
        {/* White to gray gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #ffffff, #dddddd)' }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <FaqAccordion
              data={[
                {
                  id: 1,
                  question: "How do I become a member?",
                  answer: "Refer to the Apply section on this website!",
                },
                {
                  id: 2,
                  question: "What are the benefits of being an active member?",
                  answer: "As an active member, you'll be part of a supportive, purpose-driven community! You get the chance to give back, build meaningful connections, and make a real impact while growing personally.\n\nMany members are inspired by personal experiences, such as helping older adults stay mobile and independent so they can enjoy time with family and pursue hobbies. These shared stories and goals create a strong sense of community and fulfillment in SDIPP.\n\nKaplan benefits: Since we've partnered with Kaplan (a company that provides prep courses for MCAT, law school, etc.), UCSD SDIPP members can get:\n• 15% off on Kaplan MCAT courses\n• Exclusive access to a Kaplan expert to help you build your study plan and find the best prep option\n• A free study guide and access to upcoming teacher-led events",
                },
                {
                  id: 3,
                  question: "How do I get certified for volunteer hours?",
                  answer: "Our master spreadsheet logs your hours. More info coming soon.",
                },
              ]}
              className="max-w-[700px] w-full"
              timestamp={undefined}
              answerClassName="max-w-full whitespace-pre-line"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
