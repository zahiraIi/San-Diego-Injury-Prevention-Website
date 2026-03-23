"use client";

import PageHeader from "@/components/ui/page-header";
import FAQSection from "@/components/ui/faq-section";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function FAQsPage() {
  return (
    <>
      <PageHeader title="FAQs" subtitle="Frequently asked questions about SDIPP" />

      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 px-4 md:px-6">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-4xl relative z-10">
          <FAQSection
            title="FAQs"
            items={[
              {
                question: "How do I become a member?",
                answer: "Refer to the Apply section on this website!",
              },
              {
                question: "What are the benefits of being an active member?",
                answer:
                  "As an active member, you'll be part of a supportive, purpose-driven community! You get the chance to give back, build meaningful connections, and make a real impact while growing personally.\n\nMany members are inspired by personal experiences, such as helping older adults stay mobile and independent so they can enjoy time with family and pursue hobbies. These shared stories and goals create a strong sense of community and fulfillment in SDIPP.\n\nKaplan benefits: Since we've partnered with Kaplan (a company that provides prep courses for MCAT, law school, etc.), UCSD SDIPP members can get:\n• 15% off on Kaplan MCAT courses\n• Exclusive access to a Kaplan expert to help you build your study plan and find the best prep option\n• A free study guide and access to upcoming teacher-led events",
              },
              {
                question: "How do I get certified for volunteer hours?",
                answer: "Our master spreadsheet logs your hours. More info coming soon.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
