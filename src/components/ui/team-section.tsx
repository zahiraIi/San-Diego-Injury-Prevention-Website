"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
  desc?: string;
  reason?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
  title?: string;
  subtitle?: string;
}

export default function TeamSection({ 
  members, 
  title = "Our Staff",
  subtitle 
}: TeamSectionProps) {
  return (
    <section className="py-12 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-16"
          >
            <h2 className="text-4xl font-rosehot font-bold md:text-5xl text-center text-accent-red mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-accent-blue font-charter text-center max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex"
            >
              <div className="bg-background/80 backdrop-blur-sm border border-accent-blue/20 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent-blue/40 h-full flex flex-col">
                <div className="flex flex-col items-center text-center flex-grow">
                  <div className="bg-background size-40 md:size-48 lg:size-52 rounded-full border-2 border-accent-blue/20 p-1 shadow-md mb-6 group-hover:border-accent-blue/40 transition-colors overflow-hidden flex-shrink-0">
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={208}
                        height={208}
                        className="aspect-square rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-accent-blue/20 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl lg:text-6xl font-rosehot text-accent-blue">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-rosehot text-foreground mb-2 group-hover:text-accent-red transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-accent-red font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                    {member.role}
                  </span>
                  {member.desc && (
                    <p className="text-base md:text-lg opacity-80 leading-relaxed flex-grow">
                      {member.desc}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

