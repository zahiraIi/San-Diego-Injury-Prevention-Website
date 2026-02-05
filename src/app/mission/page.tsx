"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";
import PageHeader from "@/components/ui/PageHeader";

const impactCards = [
  {
    title: "Committees",
    description: "Join a variety of committees, including outreach, legal, and research.",
  },
  {
    title: "Health Fairs",
    description: "Network at health fairs, both with APAMSA and in the community.",
  },
  {
    title: "Weekly classes",
    description: "Lead fitness, yoga, and other classes for residents of nursing homes.",
  },
  {
    title: "Fall/Injury prevention",
    description: "Volunteer through Scripps and the UCSD Health Trauma Center.",
  },
  {
    title: "Collaboration",
    description: "Work with the San Diego Fall Prevention Task Force.",
  },
];

export default function MissionPage() {
  return (
    <div className="pb-20">
      <div className="container mx-auto px-6">
        <PageHeader title="Our Mission" subtitle="Dedicated to promoting fitness and mobility" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <LiquidGlassCard className="border border-accent-blue/20 bg-gradient-to-br from-background/80 to-accent-blue/10">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/volunteering/volunteer1.webp"
                  alt="Volunteering at San Diego Injury Prevention Program"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </LiquidGlassCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-6"
          >
            <p className="text-lg opacity-80 leading-relaxed">
              We are dedicated to promoting fitness and mobility among older individuals in the San Diego area. 
              Our club offers a supportive community where members can engage in various activities to enhance 
              their overall well-being.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              At San Diego Injury Prevention Program, we believe in empowering seniors to lead active lives 
              free from injuries. Through our programs, we focus on improving fitness levels, mobility, 
              and quality of life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Impact & Plans Section */}
      <section className="bg-[#7a9bb5] py-20 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-rosehot text-white text-center mb-12"
          >
            Impact & Plans
          </motion.h2>

          {/* Top Row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {impactCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f5f0e8] rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-rosehot text-[#1a3a5c] mb-4">{card.title}</h3>
                <p className="text-[#1a3a5c] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {impactCards.slice(3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="bg-[#f5f0e8] rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-rosehot text-[#1a3a5c] mb-4">{card.title}</h3>
                <p className="text-[#1a3a5c] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
