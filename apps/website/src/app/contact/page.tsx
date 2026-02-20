"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FAQSection from "@/components/ui/faq-section";
import GrainientBlueSection from "@/components/ui/GrainientBlueSection";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || "";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const apiUrl = PORTAL_URL
        ? `${PORTAL_URL}/api/contact`
        : "/api/contact";

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Contact Section - Hero Style */}
      <section className="relative min-h-[600px] flex items-center pt-24 pb-32 px-4 md:px-6 overflow-hidden">
        <GrainientBlueSection />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                Let&apos;s connect.
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light">
                Reach out to us for client inquiries.
              </p>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {formState === "success" ? (
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center max-w-md ml-auto">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">Message sent!</h3>
                  <p className="text-white/70 text-sm">We&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-4 text-white/70 text-sm hover:text-white underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-md ml-auto">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white/90 text-sm font-medium ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white/90 text-sm font-medium ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white/90 text-sm font-medium ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                      required
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-300 text-sm">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-white text-[#002E5D] font-bold py-3.5 px-6 rounded-lg hover:bg-white/90 transition-colors shadow-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 px-4 md:px-6">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-4xl relative z-10">
          <FAQSection
            title="FAQs"
            items={[
              {
                question: "How do I become a member?",
                answer: "Refer to the Apply section on this website!"
              },
              {
                question: "What are the benefits of being an active member?",
                answer: "As an active member, you'll be part of a supportive, purpose-driven community! You get the chance to give back, build meaningful connections, and make a real impact while growing personally.\n\nMany members are inspired by personal experiences, such as helping older adults stay mobile and independent so they can enjoy time with family and pursue hobbies. These shared stories and goals create a strong sense of community and fulfillment in SDIPP.\n\nKaplan benefits: Since we've partnered with Kaplan (a company that provides prep courses for MCAT, law school, etc.), UCSD SDIPP members can get:\n• 15% off on Kaplan MCAT courses\n• Exclusive access to a Kaplan expert to help you build your study plan and find the best prep option\n• A free study guide and access to upcoming teacher-led events"
              },
              {
                question: "How do I get certified for volunteer hours?",
                answer: "Our master spreadsheet logs your hours. More info coming soon."
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
