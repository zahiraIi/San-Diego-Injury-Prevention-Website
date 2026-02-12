"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { IconHeartHandshake, IconCoins, IconBook, IconArrowRight } from "@tabler/icons-react";
import { Asterisk } from "lucide-react";
import { CircleAnimation } from "@/components/ui/circle-animations-collection";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Warm Gradient, Asterisk + Text (UMA-style height/spacing)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[650px] flex flex-col justify-center items-center text-center overflow-hidden pt-16">
        {/* Dark blue gradient: Jelly Bean -> Midnight Blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2774ae] via-[#002E5D] to-[#002E5D]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-4xl mx-auto">
          {/* Asterisk Icon */}
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 sm:mb-6 md:mb-10"
          >
            <Asterisk className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white" strokeWidth={2} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans font-bold text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-6xl lowercase px-2"
          >
            san diego <br className="block md:hidden" /> <br className="hidden md:block" /> injury prevention
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-sans text-white/90 text-lg sm:text-xl md:text-3xl mt-4 sm:mt-6 md:mt-8 tracking-wide font-medium lowercase"
          >
            program
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INTRO — Gradient background, Text Left, Team Photo Right
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        {/* White to gray gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #ffffff, #dddddd)' }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-sans text-[#7f1d1d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
                San Diego's premier student-run injury prevention program.
              </h2>
              <p className="text-[#0f172a] text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium">
                We are a student-run organization dedicated to empowering seniors in the
                San Diego area through evidence-based fitness programs, community outreach,
                and fall prevention education.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#7f1d1d] text-white rounded-full font-bold text-xs sm:text-sm hover:bg-[#6b1515] transition-all duration-300 shadow-lg hover:shadow-xl border border-[#6b1515]"
              >
                apply <IconArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Board Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mt-6 md:mt-0"
            >
              <Image
                src="/images/board/wholeboard.webp"
                alt="SDIPP board members"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MISSION — Site gradient with concentration ring animation
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Site gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2774ae] via-[#002E5D] to-[#002E5D]" />
        
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center justify-center relative z-10">
          {/* Concentration ring animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <CircleAnimation
              title=""
              animationId="concentric-rings"
              className="bg-transparent border-none scale-125 md:scale-150"
            />
          </motion.div>

          {/* Mission text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-left space-y-4 sm:space-y-5 max-w-2xl"
          >
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Mission
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              We are dedicated to promoting fitness and mobility among older individuals in the San Diego
              area. Our club offers a supportive community where members can engage in various activities
              to enhance their overall well-being.
            </p>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              At San Diego Injury Prevention Program, we believe in empowering seniors to lead active
              lives free from injuries. Through our programs, we focus on improving fitness levels,
              mobility, and quality of life. Join us in our mission to prioritize health and wellness for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW TO JOIN — Gradient background with framed image
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        {/* White to gray gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #ffffff, #dddddd)' }} />
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#7f1d1d] mb-4 sm:mb-6">
              How to Join?
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-[#0f172a] text-sm sm:text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7f1d1d] flex-shrink-0" />
                <span>No application fee required.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7f1d1d] flex-shrink-0" />
                <span>Members must be 14 years of age or older.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7f1d1d] flex-shrink-0" />
                <span>
                  More information on membership can be found on the{" "}
                  <Link
                    href="/apply"
                    className="underline decoration-[#7f1d1d]/70 underline-offset-4 hover:text-[#7f1d1d] transition-colors"
                  >
                    Apply
                  </Link>{" "}
                  page.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Framed image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-6 md:mt-0"
          >
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7f1d1d]/60" />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-full h-full rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7f1d1d]/30" />
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/volunteering/volunteer1.webp"
                alt="SDIPP members during a session"
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER — (Moved to Global Layout)
      ═══════════════════════════════════════════════════════════════════ */}
    </>
  );
}
