"use client";

import PageHeader from "@/components/ui/PageHeader";
import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";

const staff = [
  {
    name: "Owen Dvorak",
    role: "Co-President & Founder",
    desc: "Other commitments: neuroblastoma research. Hobbies: board gaming, martial arts.",
    reason: "Wants to help people regain their physical freedom to improve the quality of their lives.",
  },
  {
    name: "Albert Liu",
    role: "Co-President & Founder",
    desc: "Other commitments: cartilage tissue engineering. Hobbies: Dragon Boat Team, volleyball.",
    reason: "Wants to support his community by increasing overall wellness through fitness and education.",
  },
  {
    name: "Medha Nemani",
    role: "Secretary",
    desc: "Other commitments: research. Hobbies: piano, crafts, writing.",
    reason: "Passionate about ensuring people are healthy and happy in all phases of their life.",
  },
  {
    name: "Sonja Wang",
    role: "Program Researcher",
    desc: "Other commitments: volunteering. Hobbies: creating art, figure skating.",
    reason: "Focused on empowering individuals to enjoy safe and independent lives.",
  },
  {
    name: "Payton Chung",
    role: "Treasurer",
    desc: "Other commitments: breast cancer research. Hobbies: cooking, baking, trivia.",
    reason: "Passionate about helping others in the San Diego community in an administrative role.",
  },
  {
    name: "Aarav Rajpara",
    role: "Legal Consultant Chair",
    desc: "Other commitments: internship at litigation firms. Hobbies: hiking, skiing.",
    reason: "Hopes to pursue a career in public interest, focusing on providing remedy to those in need.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="About Us" subtitle="Meet the team behind SDIPP" />

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <LiquidGlassCard className="border border-accent-blue/20 bg-gradient-to-br from-background/80 to-accent-blue/10">
          <h2 className="text-4xl font-rosehot text-accent-blue mb-8">Our Focus</h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg opacity-80">
            <ul className="space-y-4 list-disc pl-5">
              <li><strong>Committees:</strong> Join outreach, legal, and research teams.</li>
              <li><strong>Health Fairs:</strong> Network with APAMSA and the community.</li>
              <li><strong>Weekly Classes:</strong> Lead fitness and yoga for nursing homes.</li>
            </ul>
            <ul className="space-y-4 list-disc pl-5">
              <li><strong>Fall Prevention:</strong> Volunteer with UCSD Health Trauma Center.</li>
              <li><strong>Collaboration:</strong> Work with the San Diego Fall Prevention Task Force.</li>
            </ul>
          </div>
        </LiquidGlassCard>
      </motion.section>

      {/* Staff */}
      <section>
        <h2 className="text-4xl font-rosehot text-center text-accent-red mb-12">Our Staff</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <LiquidGlassCard className="border border-accent-blue/10 bg-white/80 p-6">
              <div className="w-24 h-24 bg-accent-blue/20 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-rosehot text-center text-foreground">{member.name}</h3>
              <p className="text-center text-accent-red font-bold text-sm uppercase tracking-wide mb-4">
                {member.role}
              </p>
              <p className="text-sm mb-4 italic opacity-80">"{member.reason}"</p>
              <p className="text-xs opacity-60">{member.desc}</p>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

