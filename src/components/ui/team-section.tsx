"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Linkedin, Instagram, Mail, Facebook, Asterisk } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  desc: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
    facebook?: string;
  };
}

interface TeamSectionProps {
  members: TeamMember[];
  title?: string;
  subtitle?: string;
}

export default function TeamSection({ members, title, subtitle }: TeamSectionProps) {
  const [activeMember, setActiveMember] = useState<TeamMember>(members[0]);

  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Active Member Info */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-2">
                    {activeMember.name}
                  </h4>
                  <p className="text-xl text-accent-red font-medium">
                    {activeMember.role}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 text-gray-400">
                  <Facebook className="w-5 h-5 hover:text-[#1a3a5c] cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 hover:text-[#1a3a5c] cursor-pointer transition-colors" />
                  <Instagram className="w-5 h-5 hover:text-[#1a3a5c] cursor-pointer transition-colors" />
                  <Mail className="w-5 h-5 hover:text-[#1a3a5c] cursor-pointer transition-colors" />
                </div>

                <blockquote className="text-lg md:text-xl text-gray-600 leading-relaxed italic">
                  "{activeMember.desc}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Active Member Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
              <div className="absolute top-4 right-4 z-10 text-accent-red">
                <Asterisk className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeMember.avatar}
                    alt={activeMember.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Row: Team Grid */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {members.map((member) => (
              <button
                key={member.name}
                onClick={() => setActiveMember(member)}
                className={`group flex flex-col items-center text-center space-y-3 transition-all duration-300 ${
                  activeMember.name === member.name ? "opacity-100 scale-105" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-colors ${
                  activeMember.name === member.name ? "border-accent-red" : "border-transparent group-hover:border-gray-200"
                }`}>
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className={`font-bold text-sm md:text-base transition-colors ${
                    activeMember.name === member.name ? "text-[#1a3a5c]" : "text-gray-600"
                  }`}>
                    {member.name}
                  </h5>
                  <p className="text-xs text-gray-500 font-medium">
                    {member.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
