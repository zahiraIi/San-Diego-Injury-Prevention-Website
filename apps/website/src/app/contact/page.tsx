"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "sdinjurypreventionprogram@gmail.com";

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center pt-32 pb-32 px-4 md:px-6 overflow-hidden bg-[#1B2A53]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
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
                Reach out to us for any questions!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md md:ml-auto w-full"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-left">
                <p className="text-white/90 text-sm font-medium mb-2">Email us</p>
                <p className="text-white text-lg break-all">{CONTACT_EMAIL}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 sm: overflow-hidden py-12 md:py-16 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1B2A53] mb-4">
            Need quick answers?
          </h2>
          <p className="text-[#1B2A53]/90 text-base md:text-lg mb-6 mx-auto text-center text-balance">
            Visit our FAQs page for common questions about membership, benefits, and volunteer hour
            tracking.
          </p>
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 font-semibold text-accent-blue underline-offset-2 hover:underline"
          >
            Go to FAQs
          </Link>
        </div>
      </section>
    </>
  );
}
