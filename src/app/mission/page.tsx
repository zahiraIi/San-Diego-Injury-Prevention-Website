"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";
import PageHeader from "@/components/ui/PageHeader";

export default function MissionPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Our Mission" subtitle="Dedicated to promoting fitness and mobility" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
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
  );
}
