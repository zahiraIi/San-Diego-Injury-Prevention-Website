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
    <>
      <PageHeader title="Our Mission" subtitle="Dedicated to promoting fitness and mobility" />

      {/* Mission Content Section - White Gradient */}
      <section className="relative py-24 md:py-28 px-4 md:px-6">
        {/* White to gray gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #ffffff, #dddddd)' }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
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
              <p className="text-lg md:text-xl leading-relaxed text-[#0f172a]">
                We are dedicated to promoting fitness and mobility among older individuals in the San Diego area. 
                Our club offers a supportive community where members can engage in various activities to enhance 
                their overall well-being.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#0f172a]">
                At San Diego Injury Prevention Program, we believe in empowering seniors to lead active lives 
                free from injuries. Through our programs, we focus on improving fitness levels, mobility, 
                and quality of life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Plans Section - Blue Gradient */}
      <section className="relative py-24 md:py-28 px-4 md:px-6">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2774ae] via-[#002E5D] to-[#002E5D]" />
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-sans text-white text-center mb-16 md:mb-20"
          >
            Impact & Plans
          </motion.h2>

          {/* Top Row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto mb-12 md:mb-16">
            {impactCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f5f0e8] rounded-lg p-8 md:p-10 text-center"
              >
                <h3 className="text-2xl font-sans text-[#1a3a5c] mb-4">{card.title}</h3>
                <p className="text-[#1a3a5c] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-3xl mx-auto">
            {impactCards.slice(3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="bg-[#f5f0e8] rounded-lg p-8 md:p-10 text-center"
              >
                <h3 className="text-2xl font-sans text-[#1a3a5c] mb-4">{card.title}</h3>
                <p className="text-[#1a3a5c] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from the Presidents - White Gradient */}
      <section className="relative py-24 md:py-28 px-4 md:px-6">
        {/* White to gray gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #ffffff, #dddddd)' }} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-sans text-center mb-12 md:mb-16 text-[#7f1d1d]"
          >
            Message from the Presidents
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8 text-lg md:text-xl leading-relaxed text-[#0f172a]"
          >
            <p>
              The San Diego Injury Prevention Program was founded based off a simple realization: injuries are
              not inevitable. These injuries plague everyone, from children, to senior citizens, to even regular
              families, leaving lasting consequences impacting multiple facets of life. However, a combination
              of proper education, community engagement, and lifestyle changes holds the potential to reduce
              the morbidity of so many traumas. Our mission is therefore, to reduce preventable injuries and
              promote safer environments for individuals and families throughout San Diego.
            </p>
            <p>
              The most effective way to stop injuries is to prevent them from happening. In this spirit, our
              dedicated team identifies risk factors and promotes evidence-based strategies to help empower
              our community with the knowledge to live a little safer each day. Addressing every walk of life,
              our programs extend into every community, be it through our school presentations on adolescent
              physical activity, mobility and fall prevention classes at senior residential homes, or our public
              health outreach for various underrepresented groups.
            </p>
            <p>
              As collaboration is the cornerstone of community impact, these initiatives would not be possible
              without our various partners, for which we are grateful to continue working with. Finding other
              organizations that match our drive to improve our community, the San Diego Injury Prevention
              Program is always proud to work with the San Diego County Fall Prevention Task Force, UCSD
              Trauma Center, Scripps Health, United Way of San Diego, and multiple other healthcare
              professionals and community organizations. It is through this shared commitment to safety and
              these strong collaborations that we can continue to expand our reach and tailor our initiatives
              further to our local communities.
            </p>
            <p>
              As we grow, we plan on continuing to strengthen our programs and expand access to proper
              injury prevention services, ensuring that these services are accessible and inclusive. Innovation
              and analysis will continue to fuel our improvement as we optimize our programs and keep them
              informed by feedback, research, and data. So, while we will improve and expand, we will never
              lose sight of our goal and the community we serve.
            </p>
            <p>
              Thank you to our partners, our supporters, and of course, our dedicated volunteers. Together we
              can build a healthier, safer San Diego &mdash; one less injury at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
